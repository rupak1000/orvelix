"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import ProductForm from "@/components/admin/product-form"
import { getProductById } from "@/lib/products"
import { updateProduct } from "@/app/admin/actions"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/lib/types"

export default function EditProductPage({ params }: { params: { id: string } }) {
  const { id } = params
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true)
      const fetchedProduct = await getProductById(id)
      if (fetchedProduct) {
        setProduct(fetchedProduct)
      } else {
        toast({
          title: "Product not found",
          description: `No product found with ID: ${id}`,
          variant: "destructive",
        })
        router.push("/admin/products") // Redirect if product not found
      }
      setIsLoading(false)
    }
    fetchProduct()
  }, [id, router, toast])

  const handleSubmit = async (data: Partial<Product>) => {
    setIsSubmitting(true)
    const result = await updateProduct(id, data)
    if (result.success) {
      toast({
        title: "Product updated!",
        description: `"${data.name || product?.name}" has been updated successfully.`,
      })
      router.push("/admin/products")
    } else {
      toast({
        title: "Failed to update product",
        description: result.error,
        variant: "destructive",
      })
    }
    setIsSubmitting(false)
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
      </div>
    )
  }

  if (!product) {
    return null // Or a custom not found message
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Edit Product: {product.name}</h1>
      <p className="text-gray-600">Update the details for this product.</p>
      <ProductForm initialData={product} onSubmit={handleSubmit} isLoading={isSubmitting} />
    </div>
  )
}
