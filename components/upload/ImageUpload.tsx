'use client';

import { UploadButton } from "@/utils/uploadthing";
import { useState } from "react";
import { toast } from "sonner";

interface ImageUploadProps {
  onUploadComplete?: (url: string) => void;
  endpoint: "imageUploader" | "blogImageUploader";
}

export function ImageUpload({ onUploadComplete, endpoint }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);

  return (
    <div className="w-full">
      <UploadButton
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
          setIsUploading(false);
          if (res?.[0]?.url && onUploadComplete) {
            onUploadComplete(res[0].url);
            toast.success("Image uploaded successfully!");
          }
        }}
        onUploadError={(error: Error) => {
          setIsUploading(false);
          toast.error(`Error uploading image: ${error.message}`);
        }}
        onUploadBegin={() => {
          setIsUploading(true);
        }}
      />
      {isUploading && (
        <div className="mt-2 text-sm text-gray-600">
          Uploading...
        </div>
      )}
    </div>
  );
}