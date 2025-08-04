"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Package, Truck, CheckCircle, Clock, Eye, Download, RotateCcw, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/contexts/auth-context"
import type { Order } from "@/lib/types"

export default function OrdersPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
      return
    }

    if (user?.orders) {
      // Sort orders by date (newest first)
      const sortedOrders = [...user.orders].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      )
      setOrders(sortedOrders)
    }
  }, [user, isLoading, router])

  const getStatusIcon = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4" />
      case "processing":
        return <Package className="h-4 w-4" />
      case "shipped":
        return <Truck className="h-4 w-4" />
      case "delivered":
        return <CheckCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "processing":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "shipped":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "delivered":
        return "bg-green-100 text-green-800 border-green-200"
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/account" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Account
              </Link>
            </Button>
          </div>
          <h1 className="text-3xl font-playfair font-bold text-gray-900">Order History</h1>
          <p className="text-gray-600 mt-2">Track and manage your orders</p>
        </div>

        {/* Orders List */}
        {orders.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders yet</h3>
              <p className="text-gray-600 mb-6">Start shopping to see your orders here</p>
              <Button asChild className="bg-amber-600 hover:bg-amber-700">
                <Link href="/products">Browse Products</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <Card key={order.id} className="overflow-hidden">
                <CardHeader className="bg-gray-50 border-b">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-lg">Order #{order.id}</CardTitle>
                      <p className="text-sm text-gray-600 mt-1">Placed on {formatDate(order.createdAt)}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={`${getStatusColor(order.status)} flex items-center gap-1`}>
                        {getStatusIcon(order.status)}
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </Badge>
                      <span className="text-lg font-semibold text-gray-900">${order.total.toFixed(2)}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  {/* Order Items */}
                  <div className="space-y-4 mb-6">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center gap-4">
                        <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={item.product.image || "/placeholder.svg"}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 truncate">{item.product.name}</h4>
                          <p className="text-sm text-gray-600">
                            Quantity: {item.quantity} • ${item.price.toFixed(2)} each
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Shipping Address</h5>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>
                          {order.shippingAddress.firstName} {order.shippingAddress.lastName}
                        </p>
                        <p>{order.shippingAddress.address1}</p>
                        <p>
                          {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                        </p>
                        <p>{order.shippingAddress.country}</p>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Payment & Shipping</h5>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>Payment: {order.paymentMethod}</p>
                        <p>Status: {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}</p>
                        {order.trackingNumber && <p>Tracking: {order.trackingNumber}</p>}
                        {order.estimatedDelivery && <p>Est. Delivery: {formatDate(order.estimatedDelivery)}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Subtotal:</span>
                      <span className="text-gray-900">${order.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Tax:</span>
                      <span className="text-gray-900">${order.tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Shipping:</span>
                      <span className="text-gray-900">
                        {order.shipping === 0 ? "Free" : `$${order.shipping.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between font-semibold text-base pt-2 border-t">
                      <span>Total:</span>
                      <span>${order.total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t">
                    <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                      <Eye className="h-4 w-4" />
                      View Details
                    </Button>

                    {order.trackingNumber && (
                      <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                        <Truck className="h-4 w-4" />
                        Track Package
                      </Button>
                    )}

                    <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                      <Download className="h-4 w-4" />
                      Download Invoice
                    </Button>

                    {order.status === "delivered" && (
                      <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                        <RotateCcw className="h-4 w-4" />
                        Reorder
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
