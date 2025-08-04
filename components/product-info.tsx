"use client"

import { useState } from "react"
import { Star, Heart, ShoppingBag, Truck, Shield, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/contexts/cart-context"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/lib/types"

interface ProductInfoProps {
  product: Product
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    // Call addItem once with the product and the selected quantity
    addItem(product, quantity)
    toast({
      title: "Added to cart",
      description: `${quantity} ${product.name} added to your cart.`,
    })
  }

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} ${isWishlisted ? "removed from" : "added to"} your wishlist.`,
    })
  }

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="space-y-8">
      {/* Brand and Title */}
      <div className="space-y-4">
        <p className="text-sm text-gray-500 font-medium tracking-wide uppercase">{product.brand}</p>
        <h1 className="text-4xl font-playfair font-bold text-gray-900 leading-tight">{product.name}</h1>

        {/* Rating */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(product.rating) ? "text-amber-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-gray-600">({product.reviewCount} reviews)</span>
        </div>
      </div>

      {/* Price */}
      <div className="space-y-2">
        <div className="flex items-center gap-4">
          <span className="text-4xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <>
              <span className="text-2xl text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
              <Badge className="bg-red-100 text-red-800 hover:bg-red-200">-{discountPercentage}%</Badge>
            </>
          )}
        </div>
        <p className="text-gray-600">
          {product.inStock ? (
            <span className="text-green-600 font-medium">✓ In Stock</span>
          ) : (
            <span className="text-red-600 font-medium">Out of Stock</span>
          )}
        </p>
      </div>

      <Separator />

      {/* Description */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Description</h3>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>
      </div>

      {/* Features */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Key Features</h3>
        <ul className="space-y-2">
          {(product.features || []).map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-600">
              <span className="w-2 h-2 bg-amber-600 rounded-full flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <Separator />

      {/* Quantity and Add to Cart */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <label className="text-lg font-semibold text-gray-900">Quantity:</label>
          <div className="flex items-center border border-gray-300 rounded-full">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 py-2 hover:bg-gray-50 rounded-l-full"
            >
              -
            </button>
            <span className="px-6 py-2 font-semibold">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-gray-50 rounded-r-full">
              +
            </button>
          </div>
        </div>

        <div className="flex gap-4">
          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-4 text-lg font-medium rounded-full"
            size="lg"
          >
            <ShoppingBag className="h-5 w-5 mr-2" />
            Add to Cart - ${(product.price * quantity).toFixed(2)}
          </Button>
          <Button
            onClick={handleWishlist}
            variant="outline"
            size="lg"
            className={`px-6 py-4 rounded-full border-gray-300 ${
              isWishlisted ? "bg-red-50 border-red-300 text-red-600" : ""
            }`}
          >
            <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
          </Button>
        </div>
      </div>

      {/* Shipping Info */}
      <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
        <div className="flex items-center gap-3">
          <Truck className="h-5 w-5 text-green-600" />
          <span className="font-medium">Free shipping on orders over $100</span>
        </div>
        <div className="flex items-center gap-3">
          <Shield className="h-5 w-5 text-blue-600" />
          <span className="font-medium">2-year warranty included</span>
        </div>
        <div className="flex items-center gap-3">
          <RotateCcw className="h-5 w-5 text-purple-600" />
          <span className="font-medium">30-day return policy</span>
        </div>
      </div>
    </div>
  )
}
