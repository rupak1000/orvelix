"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingBag, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = async () => {
    setIsLoading(true)
    try {
      // Pass the product and a quantity of 1 for quick add
      addItem(product, 1)

      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${isWishlisted ? "removed from" : "added to"} your wishlist.`,
    })
  }

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
      {/* Product Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.image || "/placeholder.svg?height=400&width=320"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-medium">New</Badge>
          )}
          {discountPercentage > 0 && (
            <Badge className="bg-red-500 hover:bg-red-600 text-white text-xs font-medium">-{discountPercentage}%</Badge>
          )}
          {product.isBestSeller && (
            <Badge className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-medium">Best Seller</Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          size="icon"
          variant="ghost"
          className={`absolute top-3 right-3 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-200 ${
            isWishlisted ? "text-red-500" : "text-gray-600 hover:text-red-500"
          }`}
          onClick={handleWishlist}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
        </Button>

        {/* Quick Add to Cart - Desktop */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
          <Button
            onClick={handleAddToCart}
            disabled={isLoading || !product.inStock}
            className="w-full bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-white hover:text-gray-900 border border-gray-200 font-medium"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                Adding...
              </div>
            ) : !product.inStock ? (
              "Out of Stock"
            ) : (
              <>
                <ShoppingBag className="h-4 w-4 mr-2" />
                Quick Add
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 sm:p-6">
        {/* Brand */}
        <p className="text-xs sm:text-sm text-gray-500 font-medium tracking-wide uppercase mb-1">
          {product.brand || "Orvelix"}
        </p>

        {/* Product Name */}
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-2 line-clamp-2 hover:text-amber-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-1 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 sm:h-4 sm:w-4 ${
                    i < Math.floor(product.rating!) ? "text-amber-400 fill-current" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs sm:text-sm text-gray-500 ml-1">({product.reviewCount || 0})</span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg sm:text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm sm:text-base text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>

        {/* Add to Cart Button - Mobile */}
        <Button
          onClick={handleAddToCart}
          disabled={isLoading || !product.inStock}
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-full sm:hidden"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Adding...
            </div>
          ) : !product.inStock ? (
            "Out of Stock"
          ) : (
            <>
              <ShoppingBag className="h-4 w-4 mr-2" />
              Add to Cart
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
