// This file defines the core types used across the application.

export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  category: string
  brand: string
  rating: number
  reviewCount: number
  inStock: boolean
  features?: string[]
  colors?: string[]
  sizes?: string[]
  availability: number
  sku: string
  weight: string
  dimensions: string
  materials: string
  careInstructions: string
  shippingInfo: string
  returnPolicy: string
  relatedProducts?: string[] // Optional: IDs of related products
}

export interface ProductVariant {
  id: string
  name: string
  value: string
  price?: number
  image?: string
  inStock: boolean
}

export interface CartItem {
  id: string
  product: Product
  quantity: number
  variant?: ProductVariant
}

export interface User {
  id: string
  email: string
  name?: string
  avatar?: string
  addresses?: Address[]
  paymentMethods?: PaymentMethod[]
  orders?: Order[]
  wishlist?: string[]
  createdAt: Date
}

export interface Address {
  id: string
  fullName: string
  streetAddress: string
  city: string
  state: string
  zipCode: string
  country: string
}

export interface PaymentMethod {
  id: string
  type: "card" | "paypal"
  last4?: string // Last 4 digits for cards
  brand?: string // Visa, Mastercard, etc.
  email?: string // For PayPal
}

export interface Order {
  id: string
  userId: string
  orderDate: string
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  items: OrderItem[]
  shippingAddress: Address
  paymentMethod: PaymentMethod
  subtotal: number
  shippingCost: number
  tax: number
  total: number
  trackingNumber?: string
  deliveryDate?: string
  createdAt: Date
  updatedAt: Date
  estimatedDelivery?: Date
}

export interface OrderItem {
  productId: string
  name: string
  image: string
  price: number
  quantity: number
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image: string
  productCount: number
  featured: boolean
  gradientFrom: string
  gradientTo: string
}

export interface Review {
  id: string
  productId: string
  userId: string
  userName: string
  userAvatar?: string
  rating: number
  title: string
  comment: string
  helpful: number
  verified: boolean
  createdAt: Date
  images?: string[]
}

export interface WishlistItem {
  id: string
  userId: string
  productId: string
  product: Product
  addedAt: Date
}

export interface Newsletter {
  email: string
  subscribedAt: Date
  preferences?: string[]
}
