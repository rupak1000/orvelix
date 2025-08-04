import { Suspense } from "react"
import HeroSection from "@/components/hero-section"
import FeaturedProducts from "@/components/featured-products"
import CategoryShowcase from "@/components/category-showcase"
import BrandStory from "@/components/brand-story"
import NewsletterSignup from "@/components/newsletter-signup"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Orvelix - Premium Lifestyle Collection",
  description: "Discover curated premium products for the modern lifestyle. Exceptional quality, timeless design.",
  keywords: "premium lifestyle, luxury products, curated collection, modern design",
  openGraph: {
    title: "Orvelix - Premium Lifestyle Collection",
    description: "Discover curated premium products for the modern lifestyle",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BrandStory />
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-50" />}>
        <FeaturedProducts />
      </Suspense>
      <CategoryShowcase />
      <NewsletterSignup />
    </main>
  )
}
