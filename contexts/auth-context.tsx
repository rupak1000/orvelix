"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { User } from "@/lib/types"

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (email: string, password: string, name: string) => Promise<boolean>
  logout: () => void
  updateUser: (userData: Partial<User>) => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock user data with orders
const mockUser: User = {
  id: "user-1",
  email: "demo@orvelix.com",
  name: "John Doe",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  createdAt: new Date("2024-01-15"),
  addresses: [
    {
      id: "addr-1",
      type: "shipping",
      firstName: "John",
      lastName: "Doe",
      address1: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States",
      phone: "+1 (555) 123-4567",
      isDefault: true,
    },
  ],
  orders: [
    {
      id: "order-1",
      userId: "user-1",
      items: [
        {
          id: "item-1",
          productId: "lifestyle-1",
          product: {
            id: "lifestyle-1",
            name: "Minimalist Ceramic Vase",
            description: "Handcrafted ceramic vase with clean lines",
            price: 89.99,
            originalPrice: 119.99,
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
            category: "lifestyle",
            brand: "Nordic Home",
            rating: 4.8,
            reviews: 124,
            reviewCount: 124,
            inStock: true,
            isNewArrival: true,
            isFeatured: true,
            discount: 25,
            freeShipping: true,
          },
          quantity: 1,
          price: 89.99,
        },
        {
          id: "item-2",
          productId: "wellness-1",
          product: {
            id: "wellness-1",
            name: "Essential Oil Diffuser",
            description: "Ultrasonic aromatherapy diffuser with LED lighting",
            price: 79.99,
            originalPrice: 99.99,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop",
            category: "wellness",
            brand: "Zen Living",
            rating: 4.6,
            reviews: 203,
            reviewCount: 203,
            inStock: true,
            isFeatured: true,
            discount: 20,
            freeShipping: true,
          },
          quantity: 1,
          price: 79.99,
        },
      ],
      subtotal: 169.98,
      tax: 13.6,
      shipping: 0,
      total: 183.58,
      status: "delivered",
      paymentStatus: "paid",
      paymentMethod: "Stripe",
      shippingAddress: {
        id: "addr-1",
        type: "shipping",
        firstName: "John",
        lastName: "Doe",
        address1: "123 Main Street",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        country: "United States",
        phone: "+1 (555) 123-4567",
        isDefault: true,
      },
      billingAddress: {
        id: "addr-1",
        type: "billing",
        firstName: "John",
        lastName: "Doe",
        address1: "123 Main Street",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        country: "United States",
        phone: "+1 (555) 123-4567",
        isDefault: true,
      },
      trackingNumber: "1Z999AA1234567890",
      createdAt: new Date("2024-01-20"),
      updatedAt: new Date("2024-01-25"),
      estimatedDelivery: new Date("2024-01-28"),
    },
    {
      id: "order-2",
      userId: "user-1",
      items: [
        {
          id: "item-3",
          productId: "electronics-1",
          product: {
            id: "electronics-1",
            name: "Wireless Noise-Canceling Headphones",
            description: "Premium wireless headphones with active noise cancellation",
            price: 299.99,
            originalPrice: 399.99,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
            category: "electronics",
            brand: "SoundTech",
            rating: 4.9,
            reviews: 342,
            reviewCount: 342,
            inStock: true,
            isFeatured: true,
            discount: 25,
            freeShipping: true,
          },
          quantity: 1,
          price: 299.99,
        },
      ],
      subtotal: 299.99,
      tax: 24.0,
      shipping: 0,
      total: 323.99,
      status: "shipped",
      paymentStatus: "paid",
      paymentMethod: "PayPal",
      shippingAddress: {
        id: "addr-1",
        type: "shipping",
        firstName: "John",
        lastName: "Doe",
        address1: "123 Main Street",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        country: "United States",
        phone: "+1 (555) 123-4567",
        isDefault: true,
      },
      billingAddress: {
        id: "addr-1",
        type: "billing",
        firstName: "John",
        lastName: "Doe",
        address1: "123 Main Street",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        country: "United States",
        phone: "+1 (555) 123-4567",
        isDefault: true,
      },
      trackingNumber: "1Z999AA1234567891",
      createdAt: new Date("2024-02-01"),
      updatedAt: new Date("2024-02-03"),
      estimatedDelivery: new Date("2024-02-08"),
    },
    {
      id: "order-3",
      userId: "user-1",
      items: [
        {
          id: "item-4",
          productId: "fashion-2",
          product: {
            id: "fashion-2",
            name: "Designer Handbag",
            description: "Premium leather handbag with modern design",
            price: 399.99,
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=500&fit=crop",
            category: "fashion",
            brand: "Luxe Bags",
            rating: 4.9,
            reviews: 134,
            reviewCount: 134,
            inStock: true,
            isFeatured: true,
            freeShipping: true,
          },
          quantity: 1,
          price: 399.99,
        },
      ],
      subtotal: 399.99,
      tax: 32.0,
      shipping: 0,
      total: 431.99,
      status: "processing",
      paymentStatus: "paid",
      paymentMethod: "Stripe",
      shippingAddress: {
        id: "addr-1",
        type: "shipping",
        firstName: "John",
        lastName: "Doe",
        address1: "123 Main Street",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        country: "United States",
        phone: "+1 (555) 123-4567",
        isDefault: true,
      },
      billingAddress: {
        id: "addr-1",
        type: "billing",
        firstName: "John",
        lastName: "Doe",
        address1: "123 Main Street",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        country: "United States",
        phone: "+1 (555) 123-4567",
        isDefault: true,
      },
      createdAt: new Date("2024-02-10"),
      updatedAt: new Date("2024-02-10"),
      estimatedDelivery: new Date("2024-02-17"),
    },
  ],
  wishlist: ["lifestyle-2", "wellness-2", "electronics-2"],
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored user data on mount
    const storedUser = localStorage.getItem("orvelix_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Demo login - accept demo@orvelix.com with any password
    if (email === "demo@orvelix.com" || email === mockUser.email) {
      setUser(mockUser)
      localStorage.setItem("orvelix_user", JSON.stringify(mockUser))
      setIsLoading(false)
      return true
    }

    setIsLoading(false)
    return false
  }

  const register = async (email: string, password: string, name: string): Promise<boolean> => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newUser: User = {
      id: `user-${Date.now()}`,
      email,
      name,
      createdAt: new Date(),
      addresses: [],
      orders: [],
      wishlist: [],
    }

    setUser(newUser)
    localStorage.setItem("orvelix_user", JSON.stringify(newUser))
    setIsLoading(false)
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("orvelix_user")
  }

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData }
      setUser(updatedUser)
      localStorage.setItem("orvelix_user", JSON.stringify(updatedUser))
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        updateUser,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
