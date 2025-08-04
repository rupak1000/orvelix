"use client"

import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Plus, Edit, Trash2, Shield } from "lucide-react"
import { redirect } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

interface PaymentMethod {
  id: string
  type: "card" | "paypal"
  cardType?: "visa" | "mastercard" | "amex" | "discover"
  last4?: string
  expiryMonth?: string
  expiryYear?: string
  holderName?: string
  email?: string
  isDefault: boolean
}

export default function PaymentMethodsPage() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [isAddingCard, setIsAddingCard] = useState(false)

  if (!user) {
    redirect("/login")
  }

  // Mock payment methods data
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: "1",
      type: "card",
      cardType: "visa",
      last4: "4242",
      expiryMonth: "12",
      expiryYear: "2025",
      holderName: "John Doe",
      isDefault: true,
    },
    {
      id: "2",
      type: "paypal",
      email: "john.doe@example.com",
      isDefault: false,
    },
  ])

  const [newCard, setNewCard] = useState({
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    holderName: "",
    isDefault: false,
  })

  const handleAddCard = () => {
    if (!newCard.cardNumber || !newCard.expiryMonth || !newCard.expiryYear || !newCard.cvv || !newCard.holderName) {
      toast({
        title: "Missing information",
        description: "Please fill in all card details.",
        variant: "destructive",
      })
      return
    }

    // Determine card type based on first digit (simplified)
    let cardType: "visa" | "mastercard" | "amex" | "discover" = "visa"
    const firstDigit = newCard.cardNumber.charAt(0)
    if (firstDigit === "4") cardType = "visa"
    else if (firstDigit === "5") cardType = "mastercard"
    else if (firstDigit === "3") cardType = "amex"
    else if (firstDigit === "6") cardType = "discover"

    const paymentMethod: PaymentMethod = {
      id: Date.now().toString(),
      type: "card",
      cardType,
      last4: newCard.cardNumber.slice(-4),
      expiryMonth: newCard.expiryMonth,
      expiryYear: newCard.expiryYear,
      holderName: newCard.holderName,
      isDefault: newCard.isDefault,
    }

    if (paymentMethod.isDefault) {
      setPaymentMethods((prev) => prev.map((method) => ({ ...method, isDefault: false })))
    }

    setPaymentMethods((prev) => [...prev, paymentMethod])
    setNewCard({
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
      holderName: "",
      isDefault: false,
    })
    setIsAddingCard(false)

    toast({
      title: "Card added",
      description: "Your payment method has been saved securely.",
    })
  }

  const handleDeletePaymentMethod = (id: string) => {
    setPaymentMethods((prev) => prev.filter((method) => method.id !== id))
    toast({
      title: "Payment method removed",
      description: "The payment method has been deleted from your account.",
    })
  }

  const handleSetDefault = (id: string) => {
    setPaymentMethods((prev) =>
      prev.map((method) => ({
        ...method,
        isDefault: method.id === id,
      })),
    )
    toast({
      title: "Default payment updated",
      description: "Your default payment method has been changed.",
    })
  }

  const getCardIcon = (cardType: string) => {
    switch (cardType) {
      case "visa":
        return (
          <div className="w-8 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
            V
          </div>
        )
      case "mastercard":
        return (
          <div className="w-8 h-6 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
            M
          </div>
        )
      case "amex":
        return (
          <div className="w-8 h-6 bg-blue-800 rounded text-white text-xs flex items-center justify-center font-bold">
            A
          </div>
        )
      case "discover":
        return (
          <div className="w-8 h-6 bg-orange-600 rounded text-white text-xs flex items-center justify-center font-bold">
            D
          </div>
        )
      default:
        return <CreditCard className="h-6 w-6 text-gray-400" />
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">Payment Methods</h1>
        <p className="text-xl text-gray-600">Manage your payment methods for faster checkout</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Existing Payment Methods */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">Saved Payment Methods</h2>
            <Button
              onClick={() => setIsAddingCard(true)}
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-full"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Card
            </Button>
          </div>

          {paymentMethods.map((method) => (
            <Card key={method.id} className="border-gray-200 shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {method.type === "card" ? getCardIcon(method.cardType!) : <div className="text-2xl">💙</div>}
                    <div className="flex items-center gap-2">
                      {method.isDefault && <Badge className="bg-amber-100 text-amber-800">Default</Badge>}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeletePaymentMethod(method.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {method.type === "card" ? (
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">
                      {method.cardType?.toUpperCase()} •••• {method.last4}
                    </p>
                    <p className="text-gray-600">{method.holderName}</p>
                    <p className="text-gray-600">
                      Expires {method.expiryMonth}/{method.expiryYear}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">PayPal</p>
                    <p className="text-gray-600">{method.email}</p>
                  </div>
                )}
                {!method.isDefault && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleSetDefault(method.id)}
                    className="mt-4 bg-transparent"
                  >
                    Set as Default
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}

          {/* Security Notice */}
          <Card className="border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Your Payment Information is Secure</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We use industry-standard encryption to protect your payment information. Your card details are
                    securely stored and never shared with third parties.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Add New Card Form */}
        {isAddingCard && (
          <div className="lg:sticky lg:top-8">
            <Card className="border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CreditCard className="h-6 w-6 text-amber-600" />
                  Add New Card
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="cardNumber">Card Number *</Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={newCard.cardNumber}
                    onChange={(e) => setNewCard({ ...newCard, cardNumber: e.target.value.replace(/\s/g, "") })}
                    className="mt-2"
                    maxLength={16}
                  />
                </div>

                <div>
                  <Label htmlFor="holderName">Cardholder Name *</Label>
                  <Input
                    id="holderName"
                    placeholder="John Doe"
                    value={newCard.holderName}
                    onChange={(e) => setNewCard({ ...newCard, holderName: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="expiryMonth">Month *</Label>
                    <select
                      id="expiryMonth"
                      value={newCard.expiryMonth}
                      onChange={(e) => setNewCard({ ...newCard, expiryMonth: e.target.value })}
                      className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-amber-500"
                    >
                      <option value="">MM</option>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1} value={String(i + 1).padStart(2, "0")}>
                          {String(i + 1).padStart(2, "0")}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="expiryYear">Year *</Label>
                    <select
                      id="expiryYear"
                      value={newCard.expiryYear}
                      onChange={(e) => setNewCard({ ...newCard, expiryYear: e.target.value })}
                      className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-amber-500"
                    >
                      <option value="">YYYY</option>
                      {Array.from({ length: 10 }, (_, i) => (
                        <option key={i} value={String(new Date().getFullYear() + i)}>
                          {new Date().getFullYear() + i}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV *</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      value={newCard.cvv}
                      onChange={(e) => setNewCard({ ...newCard, cvv: e.target.value })}
                      className="mt-2"
                      maxLength={4}
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="isDefault"
                    checked={newCard.isDefault}
                    onChange={(e) => setNewCard({ ...newCard, isDefault: e.target.checked })}
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                  />
                  <Label htmlFor="isDefault">Set as default payment method</Label>
                </div>

                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-blue-800 font-medium mb-1">Secure Payment</p>
                      <p className="text-xs text-blue-700">
                        Your card information is encrypted and stored securely. We never store your CVV.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={handleAddCard}
                    className="flex-1 bg-gray-900 hover:bg-gray-800 text-white rounded-full"
                  >
                    Save Card
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setIsAddingCard(false)}
                    className="flex-1 bg-transparent rounded-full"
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
