"use client"

import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Package, Heart, Settings, MapPin, CreditCard } from "lucide-react"
import Link from "next/link"
import { redirect } from "next/navigation"

export default function AccountPage() {
  const { user } = useAuth()

  if (!user) {
    redirect("/login")
  }

  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">My Account</h1>
        <p className="text-xl text-gray-600">Welcome back, {user.name}!</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Account Overview */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <User className="h-6 w-6 text-amber-600" />
                Account Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <p className="text-lg text-gray-900">{user.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <p className="text-lg text-gray-900">{user.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Member Since</label>
                  <p className="text-lg text-gray-900">January 2024</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Account Status</label>
                  <p className="text-lg text-green-600 font-medium">Active</p>
                </div>
              </div>
              <Button variant="outline" className="mt-4 bg-transparent">
                Edit Profile
              </Button>
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Package className="h-6 w-6 text-amber-600" />
                Recent Orders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                  <div>
                    <p className="font-semibold text-gray-900">Order #HM123456789</p>
                    <p className="text-sm text-gray-600">Placed on January 15, 2024</p>
                    <p className="text-sm text-green-600 font-medium">Delivered</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">$189.99</p>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/account/orders">View Details</Link>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                  <div>
                    <p className="font-semibold text-gray-900">Order #HM987654321</p>
                    <p className="text-sm text-gray-600">Placed on January 10, 2024</p>
                    <p className="text-sm text-blue-600 font-medium">In Transit</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">$149.99</p>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/account/orders">Track Order</Link>
                    </Button>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-6 bg-transparent" asChild>
                <Link href="/account/orders">View All Orders</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                <Link href="/account/orders">
                  <Package className="h-5 w-5 mr-3" />
                  Order History
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                <Link href="/wishlist">
                  <Heart className="h-5 w-5 mr-3" />
                  Wishlist
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                <Link href="/account/addresses">
                  <MapPin className="h-5 w-5 mr-3" />
                  Addresses
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                <Link href="/account/payment">
                  <CreditCard className="h-5 w-5 mr-3" />
                  Payment Methods
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                <Link href="/account/settings">
                  <Settings className="h-5 w-5 mr-3" />
                  Account Settings
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle>Account Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Orders</span>
                <span className="font-semibold">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Spent</span>
                <span className="font-semibold">$1,847.50</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Wishlist Items</span>
                <span className="font-semibold">5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Loyalty Points</span>
                <span className="font-semibold text-amber-600">2,450</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
