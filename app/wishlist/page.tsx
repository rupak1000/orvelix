"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ShoppingBag, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/contexts/cart-context"
import { useToast } from "@/hooks/use-toast"

export default function WishlistPage() {
  const { addItem } = useCart()
  const { toast } = useToast()

  // Mock wishlist data
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: "1",
      name: "Artisan Ceramic Coffee Set",
      price: 189.99,
      originalPrice: 229.99,
      image: "/placeholder.svg?height=300&width=300",
      brand: "Artisan Studio",
      inStock: true,
    },
    {
      id: "3",
      name: "Minimalist Desk Organizer",
      price: 89.99,
      originalPrice: 119.99,
      image: "/placeholder.svg?height=300&width=300",
      brand: "Zen Workspace",
      inStock: true,
    },
    {
      id: "5",
      name: "Handwoven Cashmere Throw",
      price: 299.99,
      originalPrice: 399.99,
      image: "/placeholder.svg?height=300&width=300",
      brand: "Highland Cashmere",
      inStock: false,
    },
  ])

  const handleAddToCart = (item: any) => {
    addItem({
      ...item,
      description: "Premium quality product",
      category: "lifestyle",
      rating: 4.8,
      reviewCount: 127,
      freeShipping: true,
      features: ["Premium Quality", "Handcrafted", "Limited Edition"],
    })
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    })
  }

  const handleRemoveFromWishlist = (itemId: string) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== itemId))
    toast({
      title: "Removed from wishlist",
      description: "Item has been removed from your wishlist.",
    })
  }

  if (wishlistItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-8 py-24 text-center">
        <Heart className="h-24 w-24 mx-auto text-gray-300 mb-8" />
        <h1 className="text-3xl font-playfair font-bold text-gray-900 mb-6">Your wishlist is empty</h1>
        <p className="text-xl text-gray-600 mb-12">Save items you love for later</p>
        <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full" asChild>
          <Link href="/collections">Start Shopping</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">My Wishlist</h1>
        <p className="text-xl text-gray-600">
          {wishlistItems.length} item{wishlistItems.length > 1 ? "s" : ""} saved
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {wishlistItems.map((item) => (
          <Card key={item.id} className="border-gray-200 shadow-sm overflow-hidden">
            <div className="relative aspect-square">
              <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              <button
                onClick={() => handleRemoveFromWishlist(item.id)}
                className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-full shadow-sm"
              >
                <Trash2 className="h-4 w-4 text-red-600" />
              </button>
            </div>
            <CardContent className="p-6 space-y-4">
              <div>
                <p className="text-sm text-gray-500 font-medium tracking-wide uppercase">{item.brand}</p>
                <h3 className="font-semibold text-lg text-gray-900 mt-1">{item.name}</h3>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-gray-900">${item.price.toFixed(2)}</span>
                {item.originalPrice && (
                  <span className="text-lg text-gray-400 line-through">${item.originalPrice.toFixed(2)}</span>
                )}
              </div>

              <div className="text-sm">
                {item.inStock ? (
                  <span className="text-green-600 font-medium">✓ In Stock</span>
                ) : (
                  <span className="text-red-600 font-medium">Out of Stock</span>
                )}
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={() => handleAddToCart(item)}
                  disabled={!item.inStock}
                  className="flex-1 bg-gray-900 hover:bg-gray-800 text-white rounded-full"
                >
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon" className="rounded-full bg-transparent" asChild>
                  <Link href={`/products/${item.id}`}>
                    <Heart className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="outline" size="lg" className="px-8 py-4 rounded-full bg-transparent" asChild>
          <Link href="/collections">Continue Shopping</Link>
        </Button>
      </div>
    </div>
  )
}
