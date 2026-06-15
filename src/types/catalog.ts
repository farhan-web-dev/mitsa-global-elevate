import type { LucideIcon } from "lucide-react";

export interface DbCategory {
  id: string;
  name: string;
  subtitle: string;
  icon_name: string;
  image_url: string;
  description: string;
  sort_order: number;
}

export interface DbProduct {
  id: string;
  category_id: string;
  name: string;
  specs: string;
  image_url: string;
  sort_order: number;
}

export interface Category {
  id: string;
  name: string;
  subtitle: string;
  icon: LucideIcon;
  image: string;
  desc: string;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  specs: string;
  image: string;
}

export interface CategoryFormData {
  id: string;
  name: string;
  subtitle: string;
  icon_name: string;
  image_url: string;
  description: string;
  sort_order: number;
}

export interface ProductFormData {
  id: string;
  category_id: string;
  name: string;
  specs: string;
  image_url: string;
  sort_order: number;
}
