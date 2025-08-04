import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BrandStory() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 leading-tight">
                Crafted with Purpose,
                <br />
                <span className="text-amber-600">Designed for Life</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                At Orvelix, we believe that every object in your home should serve a purpose and bring joy. Our curated
                collection represents the intersection of functionality and beauty.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Sustainable Materials</h3>
                  <p className="text-gray-600">
                    We partner with artisans who share our commitment to environmental responsibility and ethical
                    production.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Timeless Design</h3>
                  <p className="text-gray-600">
                    Each piece is selected for its enduring appeal, ensuring your investment grows more beautiful with
                    time.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Exceptional Quality</h3>
                  <p className="text-gray-600">
                    We stand behind every product with comprehensive warranties and dedicated customer support.
                  </p>
                </div>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full"
            >
              <Link href="/about">Learn Our Story</Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=1000&fit=crop&crop=center"
                alt="Artisan crafting pottery"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-100 rounded-full opacity-20" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-100 rounded-full opacity-30" />
          </div>
        </div>
      </div>
    </section>
  )
}
