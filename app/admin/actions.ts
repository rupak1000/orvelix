"use server"

import { createProduct as createProductLib, updateProduct as updateProductLib, deleteProduct as deleteProductLib } from "@/lib/products"
import { updateOrderStatus as updateOrderStatusLib } from "@/lib/orders"
import type { Product, Order } from "@/lib/types"

// Server Action for creating a product
export async function createProduct(productData: Omit<Product, "id" | "reviews" | "reviewCount" | "rating">) {
  try {
    const newProduct = await createProductLib(productData)
    return { success: true, data: newProduct }
  } catch (error: any) {
    console.error("Error creating product:", error)
    return { success: false, error: error.message || "Failed to create product." }
  }
}

// Server Action for updating a product
export async function updateProduct(id: string, productData: Partial<Product>) {
  try {
    const updatedProduct = await updateProductLib(id, productData)
    if (!updatedProduct) {
      return { success: false, error: "Product not found." }
    }
    return { success: true, data: updatedProduct }
  } catch (error: any) {
    console.error("Error updating product:", error)
    return { success: false, error: error.message || "Failed to update product." }
  }
}

// Server Action for deleting a product
export async function deleteProduct(id: string) {
  try {
    const success = await deleteProductLib(id)
    if (!success) {
      return { success: false, error: "Product not found or could not be deleted." }
    }
    return { success: true }
  } catch (error: any) {
    console.error("Error deleting product:", error)
    return { success: false, error: error.message || "Failed to delete product." }
  }
}

// Server Action for updating order status
export async function updateOrderStatus(orderId: string, newStatus: Order["status"]) {
  try {
    const updatedOrder = await updateOrderStatusLib(orderId, newStatus)
    if (!updatedOrder) {
      return { success: false, error: "Order not found." }
    }
    return { success: true, data: updatedOrder }
  } catch (error: any) {
    console.error("Error updating order status:", error)
    return { success: false, error: error.message || "Failed to update order status." }
  }
}
