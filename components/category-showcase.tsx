"use client"

import Link from "next/link"
import { Sparkles, Heart, Zap, Home, Shirt, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  {
    name: "Lifestyle",
    href: "/collections/lifestyle",
    icon: Sparkles,
    description: "Curated essentials for modern living",
    productCount: "120+ products",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
  },
  {
    name: "Wellness",
    href: "/collections/wellness",
    icon: Heart,
    description: "Mind, body, and soul harmony",
    productCount: "85+ products",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
  },
  {
    name: "Electronics",
    href: "/collections/electronics",
    icon: Zap,
    description: "Cutting-edge technology solutions",
    productCount: "95+ products",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    name: "Fashion",
    href: "/collections/fashion",
    icon: Shirt,
    description: "Timeless style meets contemporary design",
    productCount: "150+ products",
    gradient: "from-rose-500 to-orange-500",
    bgGradient: "from-rose-50 to-orange-50",
  },
  {
    name: "Home Decor",
    href: "/collections/home-decor",
    icon: Home,
    description: "Transform your space with elegance",
    productCount: "110+ products",
    gradient: "from-amber-500 to-yellow-500",
    bgGradient: "from-amber-50 to-yellow-50",
  },
  {
    name: "Fitness",
    href: "/collections/fitness",
    icon: Dumbbell,
    description: "Achieve your wellness goals",
    productCount: "75+ products",
    gradient: "from-red-500 to-pink-500",
    bgGradient: "from-red-50 to-pink-50",
  },
]

export default function CategoryShowcase() {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full opacity-50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Explore Our Collections
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover carefully curated categories designed to elevate every aspect of your lifestyle. From wellness
            essentials to cutting-edge electronics, find everything you need for modern living.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div
                key={category.name}
                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  {/* Category Info */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-3 group-hover:text-gray-800">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-3">{category.description}</p>
                    <p className="text-sm font-medium text-amber-600">{category.productCount}</p>
                  </div>

                  {/* CTA Button */}
                  <Button
                    asChild
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white group-hover:bg-amber-600 group-hover:hover:bg-amber-700 transition-all duration-300"
                  >
                    <Link href={category.href}>Explore Collection</Link>
                  </Button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
            <div className="text-left">
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-2">
                Can't find what you're looking for?
              </h3>
              <p className="text-gray-600">Browse our complete product catalog or get in touch with our expert team.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="/products">View All Products</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
