import { existsSync, readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..", "..");

export function loadEnv() {
  const envPath = join(rootDir, ".env");
  if (!existsSync(envPath)) return {};

  return readFileSync(envPath, "utf8")
    .split("\n")
    .reduce((acc, line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) return acc;
      const [key, ...rest] = trimmed.split("=");
      acc[key.trim()] = rest.join("=").trim();
      return acc;
    }, {});
}

export function getProjectRef(env = loadEnv()) {
  const url = env.VITE_SUPABASE_URL;
  if (!url) {
    throw new Error("Missing VITE_SUPABASE_URL in .env");
  }

  const match = url.match(/https:\/\/([^.]+)\.supabase\.co/);
  if (!match) {
    throw new Error("Invalid VITE_SUPABASE_URL format");
  }

  return match[1];
}

const POOLER_REGIONS = [
  "ap-southeast-1",
  "ap-northeast-1",
  "ap-south-1",
  "us-east-1",
  "us-west-1",
  "eu-west-1",
  "eu-central-1",
];

export function getDatabaseConnectionStrings(env = loadEnv()) {
  const projectRef = getProjectRef(env);
  const dbPassword = env.SUPABASE_DB_PASSWORD;

  if (!dbPassword) {
    throw new Error("Missing SUPABASE_DB_PASSWORD in .env");
  }

  const encodedPassword = encodeURIComponent(dbPassword);
  const connectionStrings = [];

  for (const region of POOLER_REGIONS) {
    for (const aws of ["aws-1", "aws-0"]) {
      connectionStrings.push(
        `postgresql://postgres.${projectRef}:${encodedPassword}@${aws}-${region}.pooler.supabase.com:5432/postgres`
      );
      connectionStrings.push(
        `postgresql://postgres.${projectRef}:${encodedPassword}@${aws}-${region}.pooler.supabase.com:6543/postgres`
      );
    }
  }

  return connectionStrings;
}

export async function withDatabaseClient(callback) {
  const connectionStrings = getDatabaseConnectionStrings();
  let lastError = null;

  for (const connectionString of connectionStrings) {
    const pg = (await import("pg")).default;
    const client = new pg.Client({
      connectionString,
      ssl: { rejectUnauthorized: false },
      connectionTimeoutMillis: 15000,
    });

    try {
      console.log(`Connecting (${connectionString.split("@")[1]})...`);
      await client.connect();
      const result = await callback(client);
      await client.end();
      return result;
    } catch (error) {
      lastError = error;
      console.warn(`Connection failed: ${error.message}`);
      try {
        await client.end();
      } catch {
        // ignore cleanup errors
      }
    }
  }

  throw new Error(`All database connection attempts failed: ${lastError?.message}`);
}
