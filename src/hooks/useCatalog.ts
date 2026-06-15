import { useQuery } from "@tanstack/react-query";
import { mapDbCategory, mapDbProduct } from "@/lib/catalog-mapper";
import { supabase } from "@/lib/supabase";
import { categories as staticCategories, products as staticProducts } from "@/data/products";
import type { Category, DbCategory, DbProduct, Product } from "@/types/catalog";

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async (): Promise<Category[]> => {
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order("sort_order", { ascending: true });

      if (error) {
        console.warn("Failed to load categories from Supabase:", error.message);
        return staticCategories;
      }

      if (!data?.length) {
        return staticCategories;
      }

      return (data as DbCategory[]).map(mapDbCategory);
    },
    staleTime: 1000 * 60 * 5,
  });
}

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async (): Promise<Product[]> => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("sort_order", { ascending: true });

      if (error) {
        console.warn("Failed to load products from Supabase:", error.message);
        return staticProducts;
      }

      if (!data?.length) {
        return staticProducts;
      }

      return (data as DbProduct[]).map(mapDbProduct);
    },
    staleTime: 1000 * 60 * 5,
  });
}

export function useAdminCategories() {
  return useQuery({
    queryKey: ["admin", "categories"],
    queryFn: async (): Promise<DbCategory[]> => {
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order("sort_order", { ascending: true });

      if (error) throw error;
      return (data ?? []) as DbCategory[];
    },
  });
}

export function useAdminProducts() {
  return useQuery({
    queryKey: ["admin", "products"],
    queryFn: async (): Promise<DbProduct[]> => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("sort_order", { ascending: true });

      if (error) throw error;
      return (data ?? []) as DbProduct[];
    },
  });
}
