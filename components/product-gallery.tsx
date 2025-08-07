"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/lib/types";

interface ProductGalleryProps {
  product: Product;
}

export default function ProductGallery({ product }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  // Safely handle undefined or empty images array
  const images = Array.isArray(product.images) && product.images.length > 0
    ? product.images
    : ["/placeholder.svg?height=600&width=600&text=No+Image+Available"];

  return (
    <div className="space-y-6">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-50">
        <Image
          src={images[selectedImage] || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Thumbnail Images */}
      <div className={`grid grid-cols-${Math.min(images.length, 4)} gap-4`}>
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square overflow-hidden rounded-xl border-2 transition-all ${
              selectedImage === index ? "border-amber-600" : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${product.name} view ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}