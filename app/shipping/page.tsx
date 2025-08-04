import type { Metadata } from "next"
import { Truck, Package, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description: "Learn about our shipping options, delivery times, and return policy.",
}

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-gray-900 mb-6 sm:mb-8">
              Shipping & Returns
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
              Fast, secure shipping and hassle-free returns on all orders.
            </p>
          </div>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mb-6">Shipping Options</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the delivery option that works best for you
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Truck className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Standard Shipping</h3>
              <p className="text-gray-600 mb-4">5-7 business days</p>
              <p className="text-2xl font-bold text-gray-900 mb-4">FREE</p>
              <p className="text-sm text-gray-500">On orders over $100</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Package className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Express Shipping</h3>
              <p className="text-gray-600 mb-4">2-3 business days</p>
              <p className="text-2xl font-bold text-gray-900 mb-4">$15.99</p>
              <p className="text-sm text-gray-500">Expedited delivery</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Overnight Shipping</h3>
              <p className="text-gray-600 mb-4">Next business day</p>
              <p className="text-2xl font-bold text-gray-900 mb-4">$29.99</p>
              <p className="text-sm text-gray-500">Premium delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Returns Policy */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mb-6">
                  30-Day Return Policy
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Not completely satisfied? We offer hassle-free returns within 30 days of delivery.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Initiate Return</h3>
                    <p className="text-gray-600">
                      Contact our customer service team or use our online return portal to start the process.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Package & Ship</h3>
                    <p className="text-gray-600">
                      Pack your items in original packaging and use our prepaid return label.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Refunded</h3>
                    <p className="text-gray-600">
                      Receive your full refund within 5-7 business days after we receive your return.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=1000&fit=crop&crop=center"
                  alt="Return process"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-100 rounded-full opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you ship internationally?</h3>
              <p className="text-gray-600 leading-relaxed">
                Currently, we only ship within the United States. We're working on expanding our shipping options to
                include international destinations in the near future.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How can I track my order?</h3>
              <p className="text-gray-600 leading-relaxed">
                Once your order ships, you'll receive a tracking number via email. You can also track your order by
                logging into your account and viewing your order history.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What if my item arrives damaged?</h3>
              <p className="text-gray-600 leading-relaxed">
                If your item arrives damaged, please contact us immediately with photos of the damage. We'll arrange for
                a replacement or full refund at no cost to you.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I change or cancel my order?</h3>
              <p className="text-gray-600 leading-relaxed">
                Orders can be modified or cancelled within 2 hours of placement. After this time, orders enter our
                fulfillment process and cannot be changed. Please contact us as soon as possible if you need to make
                changes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
