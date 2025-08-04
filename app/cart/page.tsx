"use client"

import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CartPage() {
  const { items, updateQuantity, removeItem, total } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100">
            <ShoppingBag className="h-16 w-16 sm:h-20 sm:w-20 mx-auto text-gray-300 mb-6" />
            <h1 className="text-2xl sm:text-3xl font-playfair font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8 text-sm sm:text-base">
              Discover our curated collection of premium products
            </p>
            <Button
              size="lg"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-full font-medium"
              asChild
            >
              <Link href="/collections">Start Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const shipping = total > 100 ? 0 : 15.99
  const tax = total * 0.08
  const finalTotal = total + shipping + tax

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Back Button - Mobile */}
        <div className="mb-6 sm:hidden">
          <Button variant="ghost" size="sm" asChild className="text-gray-600 hover:text-gray-900">
            <Link href="/collections" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Continue Shopping
            </Link>
          </Button>
        </div>

        {/* Page Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-600 text-sm sm:text-base">
            {items.length} {items.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {items.map((item) => (
              <Card key={item.id} className="border-gray-200 shadow-sm bg-white">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    {/* Product Image */}
                    <div className="relative w-full sm:w-24 lg:w-32 h-48 sm:h-24 lg:h-32 flex-shrink-0 mx-auto sm:mx-0">
                      <Image
                        src={item.image || "/placeholder.svg?height=200&width=200"}
                        alt={item.name}
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                        <div className="mb-3 sm:mb-0">
                          <p className="text-xs sm:text-sm text-gray-500 font-medium tracking-wide uppercase mb-1">
                            {item.brand}
                          </p>
                          <h3 className="font-semibold text-lg sm:text-xl text-gray-900 mb-2 line-clamp-2">
                            {item.name}
                          </h3>
                          <div className="flex items-center gap-2 sm:gap-3">
                            <span className="text-xl sm:text-2xl font-bold text-gray-900">
                              ${item.price.toFixed(2)}
                            </span>
                            {item.originalPrice && (
                              <span className="text-sm sm:text-lg text-gray-400 line-through">
                                ${item.originalPrice.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Remove Button */}
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-600 hover:bg-red-50 self-end sm:self-start"
                        >
                          <Trash2 className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Button>
                      </div>

                      {/* Quantity Controls and Total */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
                          >
                            <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                          <span className="font-semibold text-base sm:text-lg w-8 sm:w-12 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
                          >
                            <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                        </div>

                        <div className="text-right">
                          <div className="font-bold text-xl sm:text-2xl text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8 border-gray-200 shadow-sm bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl sm:text-2xl font-playfair">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between text-base sm:text-lg">
                    <span>Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-base sm:text-lg">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                  </div>

                  <div className="flex justify-between text-base sm:text-lg">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>

                  <Separator />

                  <div className="flex justify-between font-bold text-xl sm:text-2xl">
                    <span>Total</span>
                    <span>${finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                {shipping > 0 && (
                  <div className="text-sm text-amber-700 bg-amber-50 p-3 sm:p-4 rounded-xl border border-amber-200">
                    <p className="font-medium">Almost there!</p>
                    <p>Add ${(100 - total).toFixed(2)} more for FREE shipping!</p>
                  </div>
                )}

                <div className="space-y-3 sm:space-y-4">
                  <Button
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full"
                    size="lg"
                    asChild
                  >
                    <Link href="/checkout">Proceed to Checkout</Link>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full border-gray-300 bg-transparent hover:bg-gray-50"
                    asChild
                  >
                    <Link href="/collections">Continue Shopping</Link>
                  </Button>
                </div>

                {/* Security Badges */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Secure Checkout</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>SSL Encrypted</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
