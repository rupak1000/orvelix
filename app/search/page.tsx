import { searchProducts } from "@/lib/products"
import ProductCard from "@/components/product-card"
import ProductFilters from "@/components/product-filters"
import type { Metadata } from "next"

interface SearchPageProps {
  searchParams: { q?: string }
}

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const query = searchParams.q || ""
  return {
    title: `Search Results for "${query}"`,
    description: `Find premium products matching "${query}" at Hemolota`,
  }
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || ""
  const products = query ? await searchProducts(query) : []

  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
          {query ? `Search Results for "${query}"` : "Search Products"}
        </h1>
        <p className="text-xl text-gray-600">
          {products.length} {products.length === 1 ? "product" : "products"} found
        </p>
      </div>

      {products.length > 0 ? (
        <div className="flex gap-12">
          <aside className="w-80 flex-shrink-0">
            <ProductFilters />
          </aside>

          <main className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-600">{products.length} results</p>
              <select className="border border-gray-200 rounded-lg px-4 py-2 text-gray-700 focus:border-amber-500 focus:ring-amber-500">
                <option>Sort by: Relevance</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Best Rating</option>
              </select>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </main>
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">No products found</h2>
            <p className="text-gray-600 mb-8">
              {query
                ? `We couldn't find any products matching "${query}". Try adjusting your search terms.`
                : "Enter a search term to find products."}
            </p>
            <div className="space-y-4">
              <p className="text-sm text-gray-500">Popular searches:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["ceramic", "wellness", "cashmere", "organizer", "aromatherapy"].map((term) => (
                  <a
                    key={term}
                    href={`/search?q=${term}`}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                  >
                    {term}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
