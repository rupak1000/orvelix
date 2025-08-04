"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star } from "lucide-react"
import type { Product } from "@/lib/types"

interface ProductTabsProps {
  product: Product
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState("description")

  // Mock reviews data
  const reviews = [
    {
      id: "1",
      userName: "Sarah M.",
      rating: 5,
      date: "2024-01-15",
      title: "Absolutely love it!",
      comment: "The quality is exceptional and it looks even better in person. Highly recommend!",
      verified: true,
    },
    {
      id: "2",
      userName: "Michael R.",
      rating: 4,
      date: "2024-01-10",
      title: "Great product",
      comment: "Very satisfied with the purchase. Fast shipping and excellent packaging.",
      verified: true,
    },
    {
      id: "3",
      userName: "Emma L.",
      rating: 5,
      date: "2024-01-05",
      title: "Perfect!",
      comment: "Exactly what I was looking for. The craftsmanship is outstanding.",
      verified: false,
    },
  ]

  return (
    <div className="border-t border-gray-200 pt-16">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-gray-50 rounded-full p-1">
          <TabsTrigger value="description" className="rounded-full">
            Description
          </TabsTrigger>
          <TabsTrigger value="specifications" className="rounded-full">
            Specifications
          </TabsTrigger>
          <TabsTrigger value="reviews" className="rounded-full">
            Reviews ({reviews.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="mt-8">
          <div className="prose max-w-none">
            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">Product Description</h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">{product.description}</p>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              This premium product is crafted with attention to detail and designed to enhance your daily life. Each
              piece undergoes rigorous quality control to ensure it meets our high standards for excellence.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Whether you're treating yourself or looking for the perfect gift, this item represents the perfect balance
              of form, function, and timeless design that will be treasured for years to come.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="specifications" className="mt-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">Specifications</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Brand</span>
                  <span className="text-gray-600">{product.brand}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Category</span>
                  <span className="text-gray-600 capitalize">{product.category}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Material</span>
                  <span className="text-gray-600">Premium Quality</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Warranty</span>
                  <span className="text-gray-600">2 Years</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Shipping Weight</span>
                  <span className="text-gray-600">2.5 lbs</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Dimensions</span>
                  <span className="text-gray-600">12" x 8" x 4"</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Care Instructions</span>
                  <span className="text-gray-600">Hand wash recommended</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Origin</span>
                  <span className="text-gray-600">Handcrafted</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="mt-8">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-playfair font-bold text-gray-900">Customer Reviews</h3>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? "text-amber-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold">{product.rating}</span>
                <span className="text-gray-600">({product.reviewCount} reviews)</span>
              </div>
            </div>

            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-gray-900">{review.userName}</span>
                      {review.verified && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          Verified Purchase
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "text-amber-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{review.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
