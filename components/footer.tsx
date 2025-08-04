import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <div className="text-2xl font-playfair font-bold tracking-tight mb-4">
                  <span className="text-gray-900">Orve</span>
                  <span className="text-amber-600">lix</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Discover curated premium products for the modern lifestyle. Exceptional quality, timeless design, and
                  unparalleled customer service.
                </p>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-amber-600">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-amber-600">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-amber-600">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-amber-600">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/collections/lifestyle" className="text-gray-600 hover:text-amber-600 transition-colors">
                    Lifestyle
                  </Link>
                </li>
                <li>
                  <Link href="/collections/wellness" className="text-gray-600 hover:text-amber-600 transition-colors">
                    Wellness
                  </Link>
                </li>
                <li>
                  <Link
                    href="/collections/electronics"
                    className="text-gray-600 hover:text-amber-600 transition-colors"
                  >
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link href="/collections/fashion" className="text-gray-600 hover:text-amber-600 transition-colors">
                    Fashion
                  </Link>
                </li>
                <li>
                  <Link href="/collections/home-decor" className="text-gray-600 hover:text-amber-600 transition-colors">
                    Home Decor
                  </Link>
                </li>
                <li>
                  <Link href="/collections/fitness" className="text-gray-600 hover:text-amber-600 transition-colors">
                    Fitness
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-6">Customer Service</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-amber-600 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="text-gray-600 hover:text-amber-600 transition-colors">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link href="/size-guide" className="text-gray-600 hover:text-amber-600 transition-colors">
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link href="/care-instructions" className="text-gray-600 hover:text-amber-600 transition-colors">
                    Care Instructions
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-600 hover:text-amber-600 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-600 hover:text-amber-600 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-amber-600 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter & Contact */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-6">Stay Connected</h3>

              {/* Newsletter Signup */}
              <div className="mb-6">
                <p className="text-gray-600 mb-4">Subscribe to get updates on new arrivals and exclusive offers.</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 border-gray-300 focus:ring-amber-500 focus:border-amber-500"
                  />
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6">Subscribe</Button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="h-4 w-4 text-amber-600" />
                  <span className="text-sm">support@orvelix.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="h-4 w-4 text-amber-600" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="h-4 w-4 text-amber-600" />
                  <span className="text-sm">123 Premium St, Luxury City, LC 12345</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm text-center md:text-left">
              © 2024 Orvelix. All rights reserved. | Crafted with care for premium lifestyle.
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">We accept:</span>
              <div className="flex gap-2">
                <div className="w-8 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  V
                </div>
                <div className="w-8 h-6 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  M
                </div>
                <div className="w-8 h-6 bg-blue-800 rounded text-white text-xs flex items-center justify-center font-bold">
                  A
                </div>
                <div className="w-8 h-6 bg-orange-500 rounded text-white text-xs flex items-center justify-center font-bold">
                  D
                </div>
                <div className="w-8 h-6 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
                  P
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
