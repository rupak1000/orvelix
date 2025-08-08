"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import ProductForm from "@/components/admin/product-form"
import { createProduct } from "@/app/admin/actions"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/lib/types"

export default function NewProductPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (data: Omit<Product, "id" | "reviews" | "reviewCount" | "rating">) => {
    setIsLoading(true)
    const result = await createProduct(data)
    if (result.success) {
      toast({
        title: "Product created!",
        description: `"${data.name}" has been added successfully.`,
      })
      router.push("/admin/products")
    } else {
      toast({
        title: "Failed to create product",
        description: result.error,
        variant: "destructive",
      })
    }
    setIsLoading(false)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Add New Product</h1>
      <p className="text-gray-600">Fill in the details to add a new product to your store.</p>
      <ProductForm onSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  )
}
