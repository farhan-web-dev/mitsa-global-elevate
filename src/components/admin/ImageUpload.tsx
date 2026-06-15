import { useRef, useState } from "react";
import { ImagePlus, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CATALOG_BUCKET, getCatalogImageUrl, supabase } from "@/lib/supabase";

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
  folder: string;
  label?: string;
}

export default function ImageUpload({
  value,
  onChange,
  folder,
  label = "Image",
}: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const previewUrl = value ? getCatalogImageUrl(value) : "";

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    const extension = file.name.split(".").pop() ?? "jpg";
    const filePath = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}.${extension}`;

    const { error: uploadError } = await supabase.storage
      .from(CATALOG_BUCKET)
      .upload(filePath, file, { upsert: true });

    setUploading(false);

    if (uploadError) {
      setError(uploadError.message);
      return;
    }

    onChange(filePath);
  };

  return (
    <div className="space-y-3">
      <Label>{label}</Label>

      {previewUrl && (
        <div className="aspect-video w-full max-w-xs overflow-hidden rounded-lg border border-border bg-muted">
          <img src={previewUrl} alt="Preview" className="h-full w-full object-cover" />
        </div>
      )}

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <Button
          type="button"
          variant="outline"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
        >
          {uploading ? (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <ImagePlus className="w-4 h-4 mr-2" />
          )}
          Upload Image
        </Button>
      </div>

      <div className="space-y-1">
        <Label htmlFor="image-url">Or paste image URL / storage path</Label>
        <Input
          id="image-url"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://... or categories/my-image.jpg"
        />
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
