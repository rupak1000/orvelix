import { notFound } from "next/navigation"
import { getProductById, getProductsByCategory } from "@/lib/products"
import ProductGallery from "@/components/product-gallery"
import ProductInfo from "@/components/product-info"
import ProductTabs from "@/components/product-tabs"
import RelatedProducts from "@/components/related-products"
import type { Metadata } from "next"

interface ProductPageProps {
  params: { id: string }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await getProductById(params.id)

  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(params.id)

  if (!product) {
    notFound()
  }

  const relatedProducts = await getProductsByCategory(product.category)
  const filteredRelated = relatedProducts.filter((p) => p.id !== product.id).slice(0, 4)

  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="grid lg:grid-cols-2 gap-16 mb-20">
        <ProductGallery product={product} />
        <ProductInfo product={product} />
      </div>

      <ProductTabs product={product} />

      {filteredRelated.length > 0 && <RelatedProducts products={filteredRelated} />}
    </div>
  )
}
