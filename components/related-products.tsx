import ProductCard from "@/components/product-card"
import type { Product } from "@/lib/types"

interface RelatedProductsProps {
  products: Product[]
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <section className="border-t border-gray-200 pt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">You Might Also Like</h2>
        <p className="text-gray-600">Discover more products from our curated collection</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
