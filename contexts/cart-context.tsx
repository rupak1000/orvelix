"use client"

import type React from "react"
import { createContext, useContext, useReducer, useEffect } from "react"
import type { Product } from "@/lib/types"

export interface CartItem extends Product {
  quantity: number
}

interface CartState {
  items: CartItem[]
  total: number
}

type CartAction =
  | { type: "ADD_ITEM"; payload: { product: Product; quantity: number } }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartItem[] }

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, quantity } = action.payload
      const numericPrice = Number(product.price) || 0 // Ensure price is a number
      const numericQuantity = Number(quantity) || 0 // Ensure quantity is a number

      const existingItem = state.items.find((item) => item.id === product.id)

      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + numericQuantity } : item,
        )
        const total = updatedItems.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity), 0)
        return { items: updatedItems, total }
      } else {
        const newItems = [...state.items, { ...product, quantity: numericQuantity, price: numericPrice }]
        const total = newItems.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity), 0)
        return { items: newItems, total }
      }
    }

    case "REMOVE_ITEM": {
      const updatedItems = state.items.filter((item) => item.id !== action.payload)
      const total = updatedItems.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity), 0)
      return { items: updatedItems, total }
    }

    case "UPDATE_QUANTITY": {
      const numericQuantity = Number(action.payload.quantity) || 0 // Ensure quantity is a number

      if (numericQuantity <= 0) {
        const updatedItems = state.items.filter((item) => item.id !== action.payload.id)
        const total = updatedItems.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity), 0)
        return { items: updatedItems, total }
      }

      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: numericQuantity } : item,
      )
      const total = updatedItems.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity), 0)
      return { items: updatedItems, total }
    }

    case "CLEAR_CART":
      return { items: [], total: 0 }

    case "LOAD_CART": {
      const total = action.payload.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity), 0)
      return { items: action.payload, total }
    }

    default:
      return state
  }
}

interface CartContextType {
  items: CartItem[]
  total: number
  addItem: (product: Product, quantity: number) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 })

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("orvelix-cart")
    if (savedCart) {
      try {
        const parsedCart: CartItem[] = JSON.parse(savedCart)
        // Sanitize parsed data to ensure price and quantity are numbers
        const sanitizedCart = parsedCart
          .map((item) => ({
            ...item,
            price: Number(item.price) || 0, // Ensure price is a number, default to 0 if NaN
            quantity: Number(item.quantity) || 0, // Ensure quantity is a number, default to 0 if NaN
          }))
          .filter((item) => item.quantity > 0) // Filter out items with 0 quantity after sanitization

        dispatch({ type: "LOAD_CART", payload: sanitizedCart })
      } catch (error) {
        console.error("Failed to load cart from localStorage:", error)
        // Optionally clear corrupted cart if parsing fails completely
        dispatch({ type: "CLEAR_CART" })
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("orvelix-cart", JSON.stringify(state.items))
  }, [state.items])

  const addItem = (product: Product, quantity: number) => {
    dispatch({ type: "ADD_ITEM", payload: { product, quantity } })
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        total: state.total,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
