import { Suspense } from "react"
import { getAllProducts } from "@/lib/products"
import ProductCard from "@/components/product-card"
import ProductFilters from "@/components/product-filters"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "All Collections",
  description: "Browse our complete collection of premium lifestyle and wellness products.",
}

export default async function CollectionsPage() {
  const products = await getAllProducts()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4 sm:mb-6">Our Complete Collection</h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Discover our carefully curated selection of premium products designed to elevate your lifestyle
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
        <aside className="w-full lg:w-80 lg:flex-shrink-0">
          <Suspense fallback={<div className="h-64 sm:h-80 lg:h-96 animate-pulse bg-gray-50 rounded-2xl" />}>
            <ProductFilters />
          </Suspense>
        </aside>

        <main className="flex-1">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4 sm:gap-0">
            <p className="text-gray-600">{products.length} products</p>
            <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm sm:text-base text-gray-700 focus:border-amber-500 focus:ring-amber-500 w-full sm:w-auto">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
              <option>Best Rating</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}