import { existsSync, readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createClient } from "@supabase/supabase-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const assetsDir = join(rootDir, "src", "assets");
const productsFile = join(rootDir, "src", "data", "products.ts");

function loadEnv() {
  const envPath = join(rootDir, ".env");
  if (!existsSync(envPath)) return {};

  return readFileSync(envPath, "utf8")
    .split("\n")
    .reduce((acc, line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) return acc;
      const [key, ...rest] = trimmed.split("=");
      acc[key] = rest.join("=");
      return acc;
    }, {});
}

function parseImageImports(content) {
  const imageMap = {};
  const importRegex = /import\s+(\w+)\s+from\s+"@\/assets\/(.+)";/g;
  let match;

  while ((match = importRegex.exec(content)) !== null) {
    imageMap[match[1]] = match[2];
  }

  return imageMap;
}

function parseProducts(content) {
  const productsStart = content.indexOf("export const products");
  const productsSection = content
    .slice(productsStart)
    .split("\n")
    .filter((line) => !line.trim().startsWith("//"))
    .join("\n");

  const productRegex =
    /id:\s*"([^"]+)"[\s\S]*?categoryId:\s*"([^"]+)"[\s\S]*?name:\s*"([^"]+)"[\s\S]*?specs:\s*"((?:[^"\\]|\\.)*)"[\s\S]*?image:\s*(\w+)/g;

  const products = [];
  let match;

  while ((match = productRegex.exec(productsSection)) !== null) {
    products.push({
      id: match[1],
      category_id: match[2],
      name: match[3],
      specs: match[4],
      image_var: match[5],
    });
  }

  return products;
}

const env = loadEnv();
const supabaseUrl = env.VITE_SUPABASE_URL;
const serviceRoleKey = env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error("Missing VITE_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const content = readFileSync(productsFile, "utf8");
const imageMap = parseImageImports(content);
const products = parseProducts(content);

console.log(`Found ${products.length} products to seed.`);

const uploadedImages = new Map();

async function uploadImage(relativePath, productId) {
  if (uploadedImages.has(relativePath)) {
    return uploadedImages.get(relativePath);
  }

  const filePath = join(assetsDir, relativePath);
  if (!existsSync(filePath)) {
    throw new Error(`Missing asset: ${filePath}`);
  }

  const fileName = relativePath.split("/").pop();
  const storagePath = `products/${productId}-${fileName}`;
  const fileBuffer = readFileSync(filePath);
  const contentType = fileName.endsWith(".png") ? "image/png" : "image/jpeg";

  const { error } = await supabase.storage
    .from("catalog-images")
    .upload(storagePath, fileBuffer, { upsert: true, contentType });

  if (error) throw error;

  uploadedImages.set(relativePath, storagePath);
  return storagePath;
}

async function seedProducts() {
  const rows = [];
  let sortOrder = 1;

  for (const product of products) {
    const relativePath = imageMap[product.image_var];
    if (!relativePath) {
      throw new Error(`No image mapping for ${product.image_var} (${product.id})`);
    }

    const image_url = await uploadImage(relativePath, product.id);
    rows.push({
      id: product.id,
      category_id: product.category_id,
      name: product.name,
      specs: product.specs,
      image_url,
      sort_order: sortOrder++,
    });

    if (rows.length % 10 === 0) {
      console.log(`Prepared ${rows.length}/${products.length} products...`);
    }
  }

  const batchSize = 50;
  for (let i = 0; i < rows.length; i += batchSize) {
    const batch = rows.slice(i, i + batchSize);
    const { error } = await supabase.from("products").upsert(batch, { onConflict: "id" });
    if (error) throw error;
    console.log(`Inserted batch ${Math.floor(i / batchSize) + 1} (${batch.length} products)`);
  }

  console.log(`Seeded ${rows.length} products successfully.`);
}

try {
  await seedProducts();
} catch (error) {
  console.error("Product seed failed:", error.message);
  process.exit(1);
}
