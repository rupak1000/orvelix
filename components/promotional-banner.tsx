import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function PromotionalBanner() {
  return (
    <section className="bg-gradient-to-r from-red-500 to-pink-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Badge className="bg-yellow-400 text-black font-bold text-lg px-4 py-2">LIMITED TIME</Badge>
            <div>
              <h3 className="text-2xl font-bold">Flash Sale - Up to 70% Off!</h3>
              <p className="text-red-100">Don't miss out on these incredible deals</p>
            </div>
          </div>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold" asChild>
            <Link href="/deals">Shop Flash Sale</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
