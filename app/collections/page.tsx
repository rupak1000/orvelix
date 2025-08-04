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
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-6">Our Complete Collection</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Discover our carefully curated selection of premium products designed to elevate your lifestyle
        </p>
      </div>

      <div className="flex gap-12">
        <aside className="w-80 flex-shrink-0">
          <Suspense fallback={<div className="h-96 animate-pulse bg-gray-50 rounded-2xl" />}>
            <ProductFilters />
          </Suspense>
        </aside>

        <main className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">{products.length} products</p>
            <select className="border border-gray-200 rounded-lg px-4 py-2 text-gray-700 focus:border-amber-500 focus:ring-amber-500">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
              <option>Best Rating</option>
            </select>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
