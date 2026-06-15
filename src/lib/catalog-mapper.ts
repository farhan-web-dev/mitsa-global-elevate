import { getCategoryIcon } from "@/lib/category-icons";
import { getCatalogImageUrl } from "@/lib/supabase";
import type { Category, DbCategory, DbProduct, Product } from "@/types/catalog";

export function mapDbCategory(row: DbCategory): Category {
  return {
    id: row.id,
    name: row.name,
    subtitle: row.subtitle,
    icon: getCategoryIcon(row.icon_name),
    image: getCatalogImageUrl(row.image_url),
    desc: row.description,
  };
}

export function mapDbProduct(row: DbProduct): Product {
  return {
    id: row.id,
    categoryId: row.category_id,
    name: row.name,
    specs: row.specs,
    image: getCatalogImageUrl(row.image_url),
  };
}
