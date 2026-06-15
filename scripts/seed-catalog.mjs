import { existsSync, readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createClient } from "@supabase/supabase-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const assetsDir = join(rootDir, "src", "assets");

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

const categories = [
  {
    id: "aromatic",
    name: "Aromatic Products",
    subtitle: "Scent Machines & Fragrances",
    icon_name: "Wind",
    image_file: "product-aromatic.jpg",
    description: "Premium scent diffusers and fragrances for commercial spaces.",
    sort_order: 1,
  },
  {
    id: "paper",
    name: "Paper Products",
    subtitle: "Tissue & Packaging",
    icon_name: "FileText",
    image_file: "product-paper.jpg",
    description: "Complete range of tissue products, napkins, and packaging items.",
    sort_order: 2,
  },
  {
    id: "stationery",
    name: "Stationery Items",
    subtitle: "Office Supplies",
    icon_name: "Pen",
    image_file: "product-stationery.jpg",
    description: "Office consumables and materials for business environments.",
    sort_order: 3,
  },
  {
    id: "refreshments",
    name: "Refreshing Products",
    subtitle: "Beverages & Sugar",
    icon_name: "Coffee",
    image_file: "product-refreshments.jpg",
    description: "Coffee, tea, and sugar products for offices and hospitality.",
    sort_order: 4,
  },
  {
    id: "safety",
    name: "Safety & Hygiene",
    subtitle: "Protective Gear",
    icon_name: "ShieldCheck",
    image_url:
      "https://images.unsplash.com/photo-1584744982491-665216d95f8b?q=80&w=800&auto=format&fit=crop",
    description: "Essential safety equipment and personal hygiene products.",
    sort_order: 5,
  },
  {
    id: "plastic",
    name: "Plastic Products",
    subtitle: "Containers & Bags",
    icon_name: "ShoppingBag",
    image_file: "product-plastic.png",
    description: "Durable disposable plastic containers, cups, and bags.",
    sort_order: 6,
  },
  {
    id: "labels",
    name: "Labels & Thermal Papers",
    subtitle: "Barcode Labels & POS Rolls",
    icon_name: "Tag",
    image_file: "thermal.png",
    description:
      "Thermal paper rolls, barcode labels, and retail shelf tag stickers for POS and labeling systems.",
    sort_order: 7,
  },
  {
    id: "aluminum",
    name: "Aluminum Products",
    subtitle: "Foil & Trays",
    icon_name: "Box",
    image_file: "product-allmunium.png",
    description: "High-quality aluminum foils and food storage containers.",
    sort_order: 8,
  },
  {
    id: "cleaning",
    name: "Cleaning Tools & Equipments",
    subtitle: "Professional Gear",
    icon_name: "Sparkles",
    image_file: "product-cleaning.jpg",
    description: "Professional cleaning tools, chemicals, and janitorial supplies.",
    sort_order: 9,
  },
];

async function uploadAsset(fileName, storagePath) {
  const filePath = join(assetsDir, fileName);
  if (!existsSync(filePath)) {
    throw new Error(`Missing asset file: ${filePath}`);
  }

  const fileBuffer = readFileSync(filePath);
  const contentType = fileName.endsWith(".png") ? "image/png" : "image/jpeg";

  const { error } = await supabase.storage
    .from("catalog-images")
    .upload(storagePath, fileBuffer, { upsert: true, contentType });

  if (error) throw error;
  return storagePath;
}

async function seedCategories() {
  const rows = [];

  for (const category of categories) {
    let image_url = category.image_url;

    if (category.image_file) {
      const storagePath = `categories/${category.id}-${category.image_file}`;
      image_url = await uploadAsset(category.image_file, storagePath);
    }

    rows.push({
      id: category.id,
      name: category.name,
      subtitle: category.subtitle,
      icon_name: category.icon_name,
      image_url,
      description: category.description,
      sort_order: category.sort_order,
    });
  }

  const { error } = await supabase.from("categories").upsert(rows, { onConflict: "id" });
  if (error) throw error;

  console.log(`Seeded ${rows.length} categories.`);
}

try {
  await seedCategories();
  console.log("Seed completed. Add products via /admin/products or extend this script.");
} catch (error) {
  console.error("Seed failed:", error.message);
  process.exit(1);
}
