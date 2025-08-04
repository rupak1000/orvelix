import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Package, Mail, ArrowRight } from "lucide-react"

export default function OrderSuccessPage() {
  const orderNumber = "HM" + Math.random().toString(36).substr(2, 9).toUpperCase()

  return (
    <div className="max-w-4xl mx-auto px-8 py-24 text-center">
      <div className="space-y-8">
        <div className="space-y-6">
          <CheckCircle className="h-24 w-24 text-green-600 mx-auto" />
          <h1 className="text-4xl font-playfair font-bold text-gray-900">Order Confirmed!</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thank you for your purchase. Your order has been successfully placed and is being processed.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto border-gray-200 shadow-sm">
          <CardContent className="p-8 space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Order #{orderNumber}</h2>
              <p className="text-gray-600">Placed on {new Date().toLocaleDateString()}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Confirmation Email</h3>
                <p className="text-sm text-gray-600">Sent to your email address</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Processing</h3>
                <p className="text-sm text-gray-600">Your order is being prepared</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Delivery</h3>
                <p className="text-sm text-gray-600">Expected in 3-5 business days</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full" asChild>
            <Link href="/account/orders">
              View Order Details
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-gray-300 px-8 py-4 rounded-full bg-transparent" asChild>
            <Link href="/collections">Continue Shopping</Link>
          </Button>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">What happens next?</h3>
          <div className="space-y-3 text-left">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                1
              </div>
              <p className="text-gray-600">We'll send you a confirmation email with your order details</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                2
              </div>
              <p className="text-gray-600">Your order will be carefully prepared and packaged</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                3
              </div>
              <p className="text-gray-600">You'll receive tracking information once your order ships</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
