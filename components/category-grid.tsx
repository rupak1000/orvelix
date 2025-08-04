import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    id: "electronics",
    name: "Electronics",
    image: "/placeholder.svg?height=300&width=300",
    itemCount: "50,000+ items",
  },
  {
    id: "home",
    name: "Home & Garden",
    image: "/placeholder.svg?height=300&width=300",
    itemCount: "75,000+ items",
  },
  {
    id: "fashion",
    name: "Fashion",
    image: "/placeholder.svg?height=300&width=300",
    itemCount: "100,000+ items",
  },
  {
    id: "groceries",
    name: "Groceries",
    image: "/placeholder.svg?height=300&width=300",
    itemCount: "25,000+ items",
  },
  {
    id: "health",
    name: "Health & Beauty",
    image: "/placeholder.svg?height=300&width=300",
    itemCount: "30,000+ items",
  },
  {
    id: "sports",
    name: "Sports & Outdoors",
    image: "/placeholder.svg?height=300&width=300",
    itemCount: "40,000+ items",
  },
]

export default function CategoryGrid() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of categories and find exactly what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                <p className="text-sm text-gray-200">{category.itemCount}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
