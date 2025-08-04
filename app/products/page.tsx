import { Suspense } from "react"
import { getAllProducts } from "@/lib/products"
import ProductCard from "@/components/product-card"
import ProductFilters from "@/components/product-filters"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "All Products",
  description: "Browse our complete collection of products with great prices and fast shipping.",
}

export default async function ProductsPage() {
  const products = await getAllProducts()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-64 flex-shrink-0">
          <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100 rounded-lg" />}>
            <ProductFilters />
          </Suspense>
        </aside>

        <main className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">All Products</h1>
            <p className="text-gray-600">{products.length} products found</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
