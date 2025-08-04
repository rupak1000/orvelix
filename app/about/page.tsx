import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Orvelix's mission to curate premium products for the modern lifestyle.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-gray-900 mb-6 sm:mb-8">
              Our Story
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
              Founded on the belief that every object in your home should serve a purpose and bring joy, Orvelix curates
              premium products for the modern lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900">Our Mission</h2>
              <div className="space-y-4 sm:space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  At Orvelix, we believe that the objects we surround ourselves with should enhance our daily lives. Our
                  mission is to discover and share products that represent the perfect intersection of functionality,
                  beauty, and sustainability.
                </p>
                <p>
                  We work directly with artisans and designers who share our values of quality craftsmanship and
                  environmental responsibility. Every product in our collection is chosen for its ability to bring
                  lasting value to your home and life.
                </p>
                <p>
                  From handcrafted ceramics to sustainable textiles, each piece tells a story of thoughtful design and
                  careful creation. We're not just selling products – we're curating experiences that elevate the
                  everyday.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=1000&fit=crop&crop=center"
                  alt="Artisan workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-amber-600 rounded-full"></div>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Quality First</h3>
              <p className="text-gray-600 leading-relaxed">
                We never compromise on quality. Every product is rigorously tested and backed by our satisfaction
                guarantee.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">
                We prioritize eco-friendly materials and ethical production practices in everything we offer.
              </p>
            </div>

            <div className="text-center space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Timeless Design</h3>
              <p className="text-gray-600 leading-relaxed">
                We choose pieces that transcend trends, ensuring your investment grows more beautiful with time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The passionate individuals behind Orvelix</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200 mx-auto max-w-xs">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
                  alt="Sarah Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Sarah Chen</h3>
                <p className="text-amber-600 font-medium">Founder & Creative Director</p>
                <p className="text-gray-600 mt-2">
                  Former design consultant with 15 years of experience in luxury retail and product curation.
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200 mx-auto max-w-xs">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                  alt="Marcus Rodriguez"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Marcus Rodriguez</h3>
                <p className="text-amber-600 font-medium">Head of Partnerships</p>
                <p className="text-gray-600 mt-2">
                  Builds relationships with artisans and designers worldwide to bring unique products to our collection.
                </p>
              </div>
            </div>

            <div className="text-center space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200 mx-auto max-w-xs">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
                  alt="Emma Thompson"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Emma Thompson</h3>
                <p className="text-amber-600 font-medium">Customer Experience Lead</p>
                <p className="text-gray-600 mt-2">
                  Ensures every customer interaction reflects our commitment to exceptional service and quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-white">Ready to Transform Your Space?</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Discover our curated collection of premium products designed to elevate your everyday life.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-4 text-lg font-medium rounded-full"
            >
              <Link href="/collections/lifestyle">Shop Collection</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
