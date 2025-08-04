import { Suspense } from "react"
import { getNewArrivals } from "@/lib/products"
import ProductCard from "@/components/product-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "New Arrivals - Orvelix",
  description:
    "Discover the latest additions to our premium lifestyle collection. Fresh designs and innovative products.",
  keywords: "new arrivals, latest products, premium lifestyle, new collection",
}

async function NewArrivalsGrid() {
  const products = await getNewArrivals()

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">No New Arrivals Yet</h2>
        <p className="text-gray-600">Check back soon for our latest products!</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
      {[...Array(8)].map((_, i) => (
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

export default function NewArrivalsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-4 lg:mb-6">
              New Arrivals
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Discover the latest additions to our curated collection. Fresh designs, innovative products, and timeless
              pieces that elevate your lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<LoadingSkeleton />}>
            <NewArrivalsGrid />
          </Suspense>
        </div>
      </section>
    </main>
  )
}
