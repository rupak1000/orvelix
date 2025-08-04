import type { Product, Category } from "./types"

// Mock product data with all categories
const products: Product[] = [
  // Lifestyle Products
  {
    id: "lifestyle-1",
    name: "Minimalist Ceramic Vase",
    description:
      "Handcrafted ceramic vase with clean lines and modern aesthetic. Perfect for fresh flowers or as a standalone decorative piece.",
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
    tags: ["ceramic", "vase", "minimalist", "home decor"],
  },
  {
    id: "lifestyle-2",
    name: "Luxury Cashmere Throw",
    description: "Ultra-soft cashmere throw blanket in neutral tones. Adds warmth and elegance to any living space.",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop",
    category: "lifestyle",
    brand: "Comfort Co",
    rating: 4.9,
    reviews: 89,
    reviewCount: 89,
    inStock: true,
    isFeatured: true,
    discount: 25,
    freeShipping: true,
    tags: ["cashmere", "throw", "blanket", "luxury"],
  },
  {
    id: "lifestyle-3",
    name: "Brass Mirror Round",
    description: "Elegant round mirror with brass frame. Perfect for entryways, bathrooms, or as an accent piece.",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
    category: "lifestyle",
    brand: "Reflection",
    rating: 4.7,
    reviews: 67,
    reviewCount: 67,
    inStock: true,
    freeShipping: true,
    tags: ["mirror", "brass", "round", "decor"],
  },
  {
    id: "lifestyle-4",
    name: "Walnut Coffee Table",
    description:
      "Mid-century modern coffee table crafted from solid walnut wood. Features clean lines and timeless design.",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
    category: "lifestyle",
    brand: "Wood Works",
    rating: 4.8,
    reviews: 45,
    reviewCount: 45,
    inStock: true,
    freeShipping: true,
    tags: ["coffee table", "walnut", "mid-century", "furniture"],
  },

  // Wellness Products
  {
    id: "wellness-1",
    name: "Essential Oil Diffuser",
    description:
      "Ultrasonic aromatherapy diffuser with LED lighting. Creates a calming atmosphere while dispersing your favorite essential oils.",
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
    tags: ["diffuser", "aromatherapy", "wellness", "essential oils"],
  },
  {
    id: "wellness-2",
    name: "Premium Yoga Mat",
    description:
      "Non-slip yoga mat made from natural rubber. Provides excellent grip and cushioning for all yoga practices.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop",
    category: "wellness",
    brand: "Mindful Movement",
    rating: 4.8,
    reviews: 156,
    reviewCount: 156,
    inStock: true,
    isFeatured: true,
    freeShipping: true,
    tags: ["yoga", "mat", "exercise", "wellness"],
  },
  {
    id: "wellness-3",
    name: "Meditation Cushion",
    description:
      "Comfortable meditation cushion filled with buckwheat hulls. Supports proper posture during meditation practice.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop",
    category: "wellness",
    brand: "Inner Peace",
    rating: 4.7,
    reviews: 92,
    reviewCount: 92,
    inStock: true,
    freeShipping: true,
    tags: ["meditation", "cushion", "mindfulness", "wellness"],
  },

  // Electronics Products
  {
    id: "electronics-1",
    name: "Wireless Noise-Canceling Headphones",
    description:
      "Premium wireless headphones with active noise cancellation. Delivers exceptional sound quality and comfort.",
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
    tags: ["headphones", "wireless", "noise-canceling", "audio"],
  },
  {
    id: "electronics-2",
    name: "Smart Fitness Watch",
    description:
      "Advanced fitness tracker with heart rate monitoring, GPS, and smartphone connectivity. Perfect for active lifestyles.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "electronics",
    brand: "FitTech",
    rating: 4.7,
    reviews: 189,
    reviewCount: 189,
    inStock: true,
    isNewArrival: true,
    freeShipping: true,
    tags: ["smartwatch", "fitness", "tracker", "health"],
  },
  {
    id: "electronics-3",
    name: "Portable Bluetooth Speaker",
    description:
      "Compact wireless speaker with powerful sound and long battery life. Perfect for outdoor adventures and home use.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    category: "electronics",
    brand: "AudioWave",
    rating: 4.6,
    reviews: 267,
    reviewCount: 267,
    inStock: true,
    freeShipping: true,
    tags: ["speaker", "bluetooth", "portable", "audio"],
  },

  // Fashion Products
  {
    id: "fashion-1",
    name: "Silk Scarf Collection",
    description: "Luxurious silk scarf with hand-painted design. Adds elegance to any outfit and makes a perfect gift.",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=500&fit=crop",
    category: "fashion",
    brand: "Elegance",
    rating: 4.8,
    reviews: 78,
    reviewCount: 78,
    inStock: true,
    discount: 25,
    freeShipping: true,
    tags: ["scarf", "silk", "fashion", "accessory"],
  },
  {
    id: "fashion-2",
    name: "Designer Handbag",
    description: "Premium leather handbag with modern design. Features multiple compartments and adjustable strap.",
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
    tags: ["handbag", "leather", "designer", "fashion"],
  },
  {
    id: "fashion-3",
    name: "Polarized Sunglasses",
    description:
      "Stylish sunglasses with polarized lenses and UV protection. Perfect for outdoor activities and fashion.",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=500&fit=crop",
    category: "fashion",
    brand: "SunStyle",
    rating: 4.7,
    reviews: 156,
    reviewCount: 156,
    inStock: true,
    isNewArrival: true,
    freeShipping: true,
    tags: ["sunglasses", "polarized", "fashion", "accessory"],
  },

  // Home Decor Products
  {
    id: "home-1",
    name: "Abstract Wall Art",
    description: "Modern abstract painting on canvas. Adds contemporary style and color to any room.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
    category: "home-decor",
    brand: "Art Studio",
    rating: 4.6,
    reviews: 89,
    reviewCount: 89,
    inStock: true,
    freeShipping: true,
    tags: ["wall art", "abstract", "painting", "decor"],
  },
  {
    id: "home-2",
    name: "Table Lamp Modern",
    description:
      "Contemporary table lamp with adjustable brightness. Features sleek design and energy-efficient LED bulb.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
    category: "home-decor",
    brand: "Light Design",
    rating: 4.8,
    reviews: 112,
    reviewCount: 112,
    inStock: true,
    freeShipping: true,
    tags: ["lamp", "lighting", "modern", "decor"],
  },
  {
    id: "home-3",
    name: "Decorative Throw Pillows",
    description:
      "Set of decorative throw pillows in coordinating colors. Made from premium fabrics with hidden zippers.",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
    category: "home-decor",
    brand: "Comfort Home",
    rating: 4.7,
    reviews: 145,
    reviewCount: 145,
    inStock: true,
    discount: 20,
    freeShipping: true,
    tags: ["pillows", "throw", "decorative", "home"],
  },

  // Fitness Products
  {
    id: "fitness-1",
    name: "Adjustable Dumbbells",
    description: "Space-saving adjustable dumbbells with quick-change weight system. Perfect for home workouts.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
    category: "fitness",
    brand: "FitGear",
    rating: 4.8,
    reviews: 234,
    reviewCount: 234,
    inStock: true,
    isFeatured: true,
    freeShipping: true,
    tags: ["dumbbells", "adjustable", "fitness", "strength"],
  },
  {
    id: "fitness-2",
    name: "Resistance Band Set",
    description:
      "Complete resistance band set with multiple resistance levels. Includes door anchor and exercise guide.",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
    category: "fitness",
    brand: "FlexFit",
    rating: 4.6,
    reviews: 178,
    reviewCount: 178,
    inStock: true,
    discount: 29,
    freeShipping: true,
    tags: ["resistance bands", "exercise", "fitness", "portable"],
  },
  {
    id: "fitness-3",
    name: "Fitness Tracker Pro",
    description: "Advanced fitness tracker with heart rate monitoring, sleep tracking, and smartphone notifications.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
    category: "fitness",
    brand: "HealthTech",
    rating: 4.7,
    reviews: 156,
    reviewCount: 156,
    inStock: true,
    isNewArrival: true,
    freeShipping: true,
    tags: ["fitness tracker", "health", "monitoring", "wearable"],
  },
]

// Categories data
const categories: Category[] = [
  {
    id: "lifestyle",
    name: "Lifestyle",
    slug: "lifestyle",
    description: "Curated essentials for modern living",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    productCount: 120,
    featured: true,
  },
  {
    id: "wellness",
    name: "Wellness",
    slug: "wellness",
    description: "Products for mind, body, and soul",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=600&fit=crop",
    productCount: 85,
    featured: true,
  },
  {
    id: "electronics",
    name: "Electronics",
    slug: "electronics",
    description: "Cutting-edge technology and smart devices",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=600&fit=crop",
    productCount: 95,
    featured: true,
  },
  {
    id: "fashion",
    name: "Fashion",
    slug: "fashion",
    description: "Timeless pieces and contemporary styles",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    productCount: 200,
    featured: true,
  },
  {
    id: "home-decor",
    name: "Home Decor",
    slug: "home-decor",
    description: "Transform your living space",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    productCount: 150,
    featured: true,
  },
  {
    id: "fitness",
    name: "Fitness",
    slug: "fitness",
    description: "Premium fitness equipment and accessories",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    productCount: 75,
    featured: true,
  },
]

// Helper functions
export async function getAllProducts(): Promise<Product[]> {
  return products
}

export async function getProductById(id: string): Promise<Product | null> {
  return products.find((product) => product.id === id) || null
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  return products.filter((product) => product.category === category)
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return products.filter((product) => product.isFeatured).slice(0, 8)
}

export async function getNewArrivals(): Promise<Product[]> {
  return products.filter((product) => product.isNewArrival).slice(0, 8)
}

export async function searchProducts(query: string): Promise<Product[]> {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.brand.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery) ||
      product.tags?.some((tag) => tag.toLowerCase().includes(lowercaseQuery)),
  )
}

export async function getRelatedProducts(productId: string, category: string): Promise<Product[]> {
  return products.filter((product) => product.id !== productId && product.category === category).slice(0, 4)
}

export async function getAllCategories(): Promise<Category[]> {
  return categories
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  return categories.find((category) => category.slug === slug) || null
}
