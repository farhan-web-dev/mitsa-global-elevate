import { FormEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import ImageUpload from "@/components/admin/ImageUpload";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useAdminCategories, useAdminProducts } from "@/hooks/useCatalog";
import { getCatalogImageUrl, supabase } from "@/lib/supabase";
import type { DbProduct, ProductFormData } from "@/types/catalog";

const emptyForm: ProductFormData = {
  id: "",
  category_id: "",
  name: "",
  specs: "",
  image_url: "",
  sort_order: 0,
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function AdminProducts() {
  const queryClient = useQueryClient();
  const { data: products = [], isLoading } = useAdminProducts();
  const { data: categories = [] } = useAdminCategories();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<DbProduct | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<ProductFormData>(emptyForm);

  const saveMutation = useMutation({
    mutationFn: async (payload: ProductFormData) => {
      if (editingId) {
        const { error } = await supabase
          .from("products")
          .update({
            category_id: payload.category_id,
            name: payload.name,
            specs: payload.specs,
            image_url: payload.image_url,
            sort_order: payload.sort_order,
          })
          .eq("id", editingId);
        if (error) throw error;
        return;
      }

      const { error } = await supabase.from("products").insert(payload);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "products"] });
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success(editingId ? "Product updated" : "Product created");
      closeDialog();
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("products").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "products"] });
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product deleted");
      setDeleteTarget(null);
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const openCreate = () => {
    setEditingId(null);
    setForm({
      ...emptyForm,
      category_id: categories[0]?.id ?? "",
    });
    setDialogOpen(true);
  };

  const openEdit = (product: DbProduct) => {
    setEditingId(product.id);
    setForm({
      id: product.id,
      category_id: product.category_id,
      name: product.name,
      specs: product.specs,
      image_url: product.image_url,
      sort_order: product.sort_order,
    });
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setEditingId(null);
    setForm(emptyForm);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const prefix = form.category_id ? `${form.category_id.slice(0, 3)}-` : "prod-";
    const payload = {
      ...form,
      id: editingId ?? slugify(form.id || `${prefix}${form.name}`),
    };

    if (!payload.id || !payload.name || !payload.category_id || !payload.image_url) {
      toast.error("ID, name, category, and image are required");
      return;
    }

    saveMutation.mutate(payload);
  };

  const getCategoryName = (categoryId: string) =>
    categories.find((category) => category.id === categoryId)?.name ?? categoryId;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Products</h2>
          <p className="text-muted-foreground">Create and manage catalog products</p>
        </div>
        <Button onClick={openCreate} disabled={categories.length === 0}>
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      {categories.length === 0 && (
        <p className="text-sm text-amber-600">
          Create at least one category before adding products.
        </p>
      )}

      <Card>
        <CardHeader>
          <CardTitle>All Products ({products.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <p className="text-muted-foreground">Loading products...</p>
          ) : products.length === 0 ? (
            <p className="text-muted-foreground">No products yet. Create your first one.</p>
          ) : (
            <div className="space-y-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 border border-border rounded-xl"
                >
                  <img
                    src={getCatalogImageUrl(product.image_url)}
                    alt={product.name}
                    className="w-20 h-20 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold">{product.name}</p>
                    <p className="text-sm text-muted-foreground line-clamp-2">{product.specs}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {getCategoryName(product.category_id)} • ID: {product.id}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => openEdit(product)}>
                      <Pencil className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => setDeleteTarget(product)}
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={dialogOpen} onOpenChange={(open) => !open && closeDialog()}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingId ? "Edit Product" : "Add Product"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!editingId && (
              <div className="space-y-2">
                <Label htmlFor="product-id">ID (slug)</Label>
                <Input
                  id="product-id"
                  value={form.id}
                  onChange={(e) => setForm({ ...form, id: slugify(e.target.value) })}
                  placeholder="e.g. pap-1"
                />
              </div>
            )}
            <div className="space-y-2">
              <Label>Category</Label>
              <Select
                value={form.category_id}
                onValueChange={(value) => setForm({ ...form, category_id: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="product-name">Name</Label>
              <Input
                id="product-name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="product-specs">Specifications</Label>
              <Textarea
                id="product-specs"
                value={form.specs}
                onChange={(e) => setForm({ ...form, specs: e.target.value })}
              />
            </div>
            <ImageUpload
              value={form.image_url}
              onChange={(image_url) => setForm({ ...form, image_url })}
              folder="products"
            />
            <div className="space-y-2">
              <Label htmlFor="product-sort">Sort Order</Label>
              <Input
                id="product-sort"
                type="number"
                value={form.sort_order}
                onChange={(e) =>
                  setForm({ ...form, sort_order: Number(e.target.value) || 0 })
                }
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={closeDialog}>
                Cancel
              </Button>
              <Button type="submit" disabled={saveMutation.isPending}>
                {saveMutation.isPending ? "Saving..." : "Save Product"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!deleteTarget} onOpenChange={(open) => !open && setDeleteTarget(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete product?</AlertDialogTitle>
            <AlertDialogDescription>
              "{deleteTarget?.name}" will be permanently removed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteTarget && deleteMutation.mutate(deleteTarget.id)}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
