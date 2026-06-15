import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { withDatabaseClient } from "./lib/env.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const sqlPath = join(rootDir, "supabase", "migrations", "001_initial_schema.sql");
const sql = readFileSync(sqlPath, "utf8");

try {
  await withDatabaseClient(async (client) => {
    console.log("Connected. Running migration...");
    await client.query(sql);
    console.log("Migration completed successfully.");
  });
} catch (error) {
  console.error("Migration failed:", error.message);
  process.exit(1);
}
