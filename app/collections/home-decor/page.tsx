import { Suspense } from "react"
import { getProductsByCategory } from "@/lib/products"
import ProductCard from "@/components/product-card"
import ProductFilters from "@/components/product-filters"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Decor Collection - Orvelix",
  description: "Transform your space with our curated home decor collection featuring modern and elegant pieces.",
}

async function HomeDecorGrid() {
  const products = await getProductsByCategory("home-decor")

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100">
          <div className="aspect-[4/5] bg-gray-200 animate-pulse" />
          <div className="p-4 sm:p-6 space-y-3">
            <div className="h-4 bg-gray-200 rounded animate-pulse" />
            <div className="h-6 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3" />
            <div className="h-10 bg-gray-200 rounded-full animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default async function HomeDecorPage() {
  const products = await getProductsByCategory("home-decor")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold mb-6">Home Decor</h1>
            <p className="text-xl sm:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Transform your living space with carefully selected pieces that reflect your personal style
            </p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
                <span className="text-lg font-medium">{products.length} Products Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <Suspense fallback={<div className="h-96 animate-pulse bg-gray-200 rounded-2xl" />}>
              <ProductFilters />
            </Suspense>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
              <h2 className="text-2xl font-semibold text-gray-900">All Home Decor ({products.length})</h2>
              <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Best Rating</option>
              </select>
            </div>

            <Suspense fallback={<LoadingSkeleton />}>
              <HomeDecorGrid />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
