"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Filter } from "lucide-react"

export default function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [inStock, setInStock] = useState(false)
  const [onSale, setOnSale] = useState(false)

  const brands = ["Orvelix", "Premium", "Luxury", "Modern", "Classic", "Elite"]
  const colors = ["Black", "White", "Gray", "Brown", "Blue", "Green", "Red", "Gold"]
  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "One Size"]

  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brand])
    } else {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand))
    }
  }

  const handleColorChange = (color: string, checked: boolean) => {
    if (checked) {
      setSelectedColors([...selectedColors, color])
    } else {
      setSelectedColors(selectedColors.filter((c) => c !== color))
    }
  }

  const handleSizeChange = (size: string, checked: boolean) => {
    if (checked) {
      setSelectedSizes([...selectedSizes, size])
    } else {
      setSelectedSizes(selectedSizes.filter((s) => s !== size))
    }
  }

  const clearAllFilters = () => {
    setPriceRange([0, 1000])
    setSelectedBrands([])
    setSelectedColors([])
    setSelectedSizes([])
    setInStock(false)
    setOnSale(false)
  }

  const activeFiltersCount =
    selectedBrands.length +
    selectedColors.length +
    selectedSizes.length +
    (inStock ? 1 : 0) +
    (onSale ? 1 : 0) +
    (priceRange[0] > 0 || priceRange[1] < 1000 ? 1 : 0)

  return (
    <Card className="bg-white border-gray-200 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </CardTitle>
          {activeFiltersCount > 0 && (
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">
                {activeFiltersCount} active
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-xs text-gray-500 hover:text-gray-700"
              >
                Clear all
              </Button>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Price Range */}
        <div className="space-y-3">
          <h3 className="font-medium text-gray-900">Price Range</h3>
          <div className="px-2">
            <Slider value={priceRange} onValueChange={setPriceRange} max={1000} min={0} step={10} className="w-full" />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Availability */}
        <div className="space-y-3">
          <h3 className="font-medium text-gray-900">Availability</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="in-stock" checked={inStock} onCheckedChange={setInStock} />
              <label htmlFor="in-stock" className="text-sm text-gray-700 cursor-pointer">
                In Stock Only
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="on-sale" checked={onSale} onCheckedChange={setOnSale} />
              <label htmlFor="on-sale" className="text-sm text-gray-700 cursor-pointer">
                On Sale
              </label>
            </div>
          </div>
        </div>

        <Separator />

        {/* Brands */}
        <div className="space-y-3">
          <h3 className="font-medium text-gray-900">Brand</h3>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {brands.map((brand) => (
              <div key={brand} className="flex items-center space-x-2">
                <Checkbox
                  id={`brand-${brand}`}
                  checked={selectedBrands.includes(brand)}
                  onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
                />
                <label htmlFor={`brand-${brand}`} className="text-sm text-gray-700 cursor-pointer">
                  {brand}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Colors */}
        <div className="space-y-3">
          <h3 className="font-medium text-gray-900">Color</h3>
          <div className="grid grid-cols-2 gap-2">
            {colors.map((color) => (
              <div key={color} className="flex items-center space-x-2">
                <Checkbox
                  id={`color-${color}`}
                  checked={selectedColors.includes(color)}
                  onCheckedChange={(checked) => handleColorChange(color, checked as boolean)}
                />
                <label htmlFor={`color-${color}`} className="text-sm text-gray-700 cursor-pointer">
                  {color}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Sizes */}
        <div className="space-y-3">
          <h3 className="font-medium text-gray-900">Size</h3>
          <div className="grid grid-cols-3 gap-2">
            {sizes.map((size) => (
              <div key={size} className="flex items-center space-x-2">
                <Checkbox
                  id={`size-${size}`}
                  checked={selectedSizes.includes(size)}
                  onCheckedChange={(checked) => handleSizeChange(size, checked as boolean)}
                />
                <label htmlFor={`size-${size}`} className="text-sm text-gray-700 cursor-pointer text-xs">
                  {size}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Apply Filters Button */}
        <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium">Apply Filters</Button>
      </CardContent>
    </Card>
  )
}
