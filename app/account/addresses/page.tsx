"use client"

import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { MapPin, Plus, Edit, Trash2 } from "lucide-react"
import { redirect } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

interface Address {
  id: string
  type: "home" | "work" | "other"
  firstName: string
  lastName: string
  company?: string
  address: string
  city: string
  state: string
  zipCode: string
  country: string
  isDefault: boolean
}

export default function AddressesPage() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [isAddingAddress, setIsAddingAddress] = useState(false)
  const [editingAddress, setEditingAddress] = useState<string | null>(null)

  if (!user) {
    redirect("/login")
  }

  // Mock addresses data
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: "1",
      type: "home",
      firstName: "John",
      lastName: "Doe",
      address: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States",
      isDefault: true,
    },
    {
      id: "2",
      type: "work",
      firstName: "John",
      lastName: "Doe",
      company: "Acme Corp",
      address: "456 Business Ave",
      city: "New York",
      state: "NY",
      zipCode: "10002",
      country: "United States",
      isDefault: false,
    },
  ])

  const [newAddress, setNewAddress] = useState<Partial<Address>>({
    type: "home",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    isDefault: false,
  })

  const handleAddAddress = () => {
    if (
      !newAddress.firstName ||
      !newAddress.lastName ||
      !newAddress.address ||
      !newAddress.city ||
      !newAddress.state ||
      !newAddress.zipCode
    ) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    const address: Address = {
      id: Date.now().toString(),
      type: newAddress.type as "home" | "work" | "other",
      firstName: newAddress.firstName,
      lastName: newAddress.lastName,
      company: newAddress.company,
      address: newAddress.address,
      city: newAddress.city,
      state: newAddress.state,
      zipCode: newAddress.zipCode,
      country: newAddress.country || "United States",
      isDefault: newAddress.isDefault || false,
    }

    if (address.isDefault) {
      setAddresses((prev) => prev.map((addr) => ({ ...addr, isDefault: false })))
    }

    setAddresses((prev) => [...prev, address])
    setNewAddress({
      type: "home",
      firstName: "",
      lastName: "",
      company: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "United States",
      isDefault: false,
    })
    setIsAddingAddress(false)

    toast({
      title: "Address added",
      description: "Your new address has been saved successfully.",
    })
  }

  const handleDeleteAddress = (id: string) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id))
    toast({
      title: "Address deleted",
      description: "The address has been removed from your account.",
    })
  }

  const handleSetDefault = (id: string) => {
    setAddresses((prev) =>
      prev.map((addr) => ({
        ...addr,
        isDefault: addr.id === id,
      })),
    )
    toast({
      title: "Default address updated",
      description: "Your default shipping address has been changed.",
    })
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "home":
        return "bg-green-100 text-green-800"
      case "work":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">Shipping Addresses</h1>
        <p className="text-xl text-gray-600">Manage your shipping addresses for faster checkout</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Existing Addresses */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">Your Addresses</h2>
            <Button
              onClick={() => setIsAddingAddress(true)}
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-full"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Address
            </Button>
          </div>

          {addresses.map((address) => (
            <Card key={address.id} className="border-gray-200 shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-amber-600" />
                    <div className="flex items-center gap-2">
                      <Badge className={getTypeColor(address.type)}>
                        {address.type.charAt(0).toUpperCase() + address.type.slice(1)}
                      </Badge>
                      {address.isDefault && <Badge className="bg-amber-100 text-amber-800">Default</Badge>}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" onClick={() => setEditingAddress(address.id)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteAddress(address.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">
                    {address.firstName} {address.lastName}
                  </p>
                  {address.company && <p className="text-gray-600">{address.company}</p>}
                  <p className="text-gray-600">{address.address}</p>
                  <p className="text-gray-600">
                    {address.city}, {address.state} {address.zipCode}
                  </p>
                  <p className="text-gray-600">{address.country}</p>
                </div>
                {!address.isDefault && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleSetDefault(address.id)}
                    className="mt-4 bg-transparent"
                  >
                    Set as Default
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add New Address Form */}
        {isAddingAddress && (
          <div className="lg:sticky lg:top-8">
            <Card className="border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle>Add New Address</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="type">Address Type</Label>
                  <select
                    id="type"
                    value={newAddress.type}
                    onChange={(e) =>
                      setNewAddress({ ...newAddress, type: e.target.value as "home" | "work" | "other" })
                    }
                    className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-amber-500"
                  >
                    <option value="home">Home</option>
                    <option value="work">Work</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={newAddress.firstName}
                      onChange={(e) => setNewAddress({ ...newAddress, firstName: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={newAddress.lastName}
                      onChange={(e) => setNewAddress({ ...newAddress, lastName: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input
                    id="company"
                    value={newAddress.company}
                    onChange={(e) => setNewAddress({ ...newAddress, company: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="address">Street Address *</Label>
                  <Input
                    id="address"
                    value={newAddress.address}
                    onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={newAddress.city}
                      onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      value={newAddress.state}
                      onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      value={newAddress.zipCode}
                      onChange={(e) => setNewAddress({ ...newAddress, zipCode: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="country">Country</Label>
                  <select
                    id="country"
                    value={newAddress.country}
                    onChange={(e) => setNewAddress({ ...newAddress, country: e.target.value })}
                    className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-amber-500"
                  >
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                  </select>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="isDefault"
                    checked={newAddress.isDefault}
                    onChange={(e) => setNewAddress({ ...newAddress, isDefault: e.target.checked })}
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                  />
                  <Label htmlFor="isDefault">Set as default address</Label>
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={handleAddAddress}
                    className="flex-1 bg-gray-900 hover:bg-gray-800 text-white rounded-full"
                  >
                    Save Address
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setIsAddingAddress(false)}
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
