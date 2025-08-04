"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Successfully subscribed!",
      description:
        "Thank you for joining our newsletter. You'll receive updates about new products and exclusive offers.",
    })

    setEmail("")
    setIsLoading(false)
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white">Stay in the Loop</h2>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Be the first to discover new arrivals, exclusive collections, and special offers. Join our community of
              design enthusiasts.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 rounded-full px-6 py-3 text-base focus:border-amber-500 focus:ring-amber-500"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-medium text-base whitespace-nowrap"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          <p className="text-sm text-gray-400 mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}
