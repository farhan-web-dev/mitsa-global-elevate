import {
  Box,
  Coffee,
  FileText,
  Pen,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Tag,
  Wind,
  type LucideIcon,
} from "lucide-react";

export const CATEGORY_ICON_OPTIONS = [
  { value: "Wind", label: "Wind" },
  { value: "FileText", label: "File Text" },
  { value: "Pen", label: "Pen" },
  { value: "Coffee", label: "Coffee" },
  { value: "ShieldCheck", label: "Shield Check" },
  { value: "ShoppingBag", label: "Shopping Bag" },
  { value: "Tag", label: "Tag" },
  { value: "Box", label: "Box" },
  { value: "Sparkles", label: "Sparkles" },
] as const;

const iconMap: Record<string, LucideIcon> = {
  Wind,
  FileText,
  Pen,
  Coffee,
  ShieldCheck,
  ShoppingBag,
  Tag,
  Box,
  Sparkles,
};

export function getCategoryIcon(iconName: string): LucideIcon {
  return iconMap[iconName] ?? Box;
}
