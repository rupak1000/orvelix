"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Star, ArrowRight, Award, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ProductCard from "./product-card"
import { getFeaturedProducts } from "@/lib/products"
import type { Product } from "@/lib/types"

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const featuredProducts = await getFeaturedProducts()
        setProducts(featuredProducts.slice(0, 6))
      } catch (error) {
        console.error("Error loading featured products:", error)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  if (loading) {
    return (
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-12 bg-gray-200 rounded-lg w-96 mx-auto mb-6 animate-pulse" />
            <div className="h-6 bg-gray-200 rounded-lg w-2/3 mx-auto animate-pulse" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 animate-pulse">
                <div className="aspect-square bg-gray-200 rounded-xl mb-4" />
                <div className="h-4 bg-gray-200 rounded mb-2" />
                <div className="h-6 bg-gray-200 rounded mb-4" />
                <div className="h-8 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">
              <Award className="h-3 w-3 mr-1" />
              Premium Quality
            </Badge>
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
              <TrendingUp className="h-3 w-3 mr-1" />
              Best Sellers
            </Badge>
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
              <Users className="h-3 w-3 mr-1" />
              Customer Favorites
            </Badge>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Featured Products
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Handpicked selections from our premium collection. Each product represents the perfect blend of quality,
            design, and functionality that our customers love most.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="opacity-0 animate-fade-in-up"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "forwards",
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-2xl mx-auto mb-4">
              <Star className="h-8 w-8 text-amber-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
            <div className="text-sm text-gray-500 mt-1">From 2,500+ reviews</div>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
            <div className="text-gray-600">Happy Customers</div>
            <div className="text-sm text-gray-500 mt-1">Worldwide community</div>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-4">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">99%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
            <div className="text-sm text-gray-500 mt-1">Customer approved</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white">
            <div className="text-left">
              <h3 className="text-2xl font-playfair font-bold mb-2">Discover More Premium Products</h3>
              <p className="text-amber-100">
                Explore our complete collection of carefully curated items for the modern lifestyle.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-white text-amber-600 hover:bg-gray-50 font-semibold px-8 py-3 rounded-full whitespace-nowrap"
            >
              <Link href="/products" className="flex items-center gap-2">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </section>
  )
}
