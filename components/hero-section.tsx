import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.15)_1px,_transparent_0)] bg-[length:20px_20px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 sm:space-y-8 lg:space-y-12">
          {/* Main Heading */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-playfair font-bold text-gray-900 leading-tight">
              Curated for the
              <br />
              <span className="text-amber-600">Modern Life</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Discover premium products that elevate your daily rituals. Each piece is thoughtfully selected for
              quality, design, and sustainability.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-medium rounded-full transition-all duration-300 hover:shadow-lg"
            >
              <Link href="/collections/lifestyle">Explore Collection</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-gray-300 text-gray-700 hover:bg-gray-50 px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-medium rounded-full transition-all duration-300 bg-transparent"
            >
              <Link href="/about">Our Story</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 sm:pt-12 lg:pt-16">
            <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8">
              Trusted by thousands of customers worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 opacity-60">
              <div className="text-xs sm:text-sm font-medium text-gray-400 tracking-wider">FREE SHIPPING</div>
              <div className="w-px h-4 bg-gray-300" />
              <div className="text-xs sm:text-sm font-medium text-gray-400 tracking-wider">30-DAY RETURNS</div>
              <div className="w-px h-4 bg-gray-300" />
              <div className="text-xs sm:text-sm font-medium text-gray-400 tracking-wider">2-YEAR WARRANTY</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-amber-100 rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gray-100 rounded-full opacity-30 animate-pulse delay-1000" />
    </section>
  )
}
