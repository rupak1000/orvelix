import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Ruler, Info, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Size Guide",
  description: "Find the perfect fit with Orvelix's comprehensive size guide for all product categories.",
}

export default function SizeGuidePage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-6">Size Guide</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Find the perfect fit for all our premium lifestyle and wellness products
        </p>
      </div>

      <Tabs defaultValue="lifestyle" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-gray-50 rounded-full p-1 mb-12">
          <TabsTrigger value="lifestyle" className="rounded-full">
            Lifestyle Products
          </TabsTrigger>
          <TabsTrigger value="wellness" className="rounded-full">
            Wellness Products
          </TabsTrigger>
        </TabsList>

        <TabsContent value="lifestyle" className="space-y-12">
          {/* Home Textiles */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Ruler className="h-6 w-6 text-amber-600" />
                Home Textiles & Throws
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Size</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Dimensions (inches)</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium">Throw</td>
                      <td className="py-4 px-6 text-gray-600">50" x 60"</td>
                      <td className="py-4 px-6 text-gray-600">Single chair, accent piece</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium">Small Blanket</td>
                      <td className="py-4 px-6 text-gray-600">60" x 80"</td>
                      <td className="py-4 px-6 text-gray-600">Twin bed, loveseat</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium">Large Blanket</td>
                      <td className="py-4 px-6 text-gray-600">80" x 90"</td>
                      <td className="py-4 px-6 text-gray-600">Queen bed, large sofa</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Pillowcases */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl">Pillowcases & Bedding</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Size</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Dimensions (inches)</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Pillow Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium">Standard</td>
                      <td className="py-4 px-6 text-gray-600">20" x 26"</td>
                      <td className="py-4 px-6 text-gray-600">Standard pillow</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium">Queen</td>
                      <td className="py-4 px-6 text-gray-600">20" x 30"</td>
                      <td className="py-4 px-6 text-gray-600">Queen pillow</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium">King</td>
                      <td className="py-4 px-6 text-gray-600">20" x 36"</td>
                      <td className="py-4 px-6 text-gray-600">King pillow</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Desk Organizers */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl">Desk Organizers & Storage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Compact Organizers</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Desktop footprint: 12" x 8"</li>
                    <li>• Height: 4" - 6"</li>
                    <li>• Perfect for small desks</li>
                    <li>• 3-5 compartments</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Large Organizers</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Desktop footprint: 16" x 12"</li>
                    <li>• Height: 6" - 8"</li>
                    <li>• Ideal for executive desks</li>
                    <li>• 6-10 compartments</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wellness" className="space-y-12">
          {/* Meditation Cushions */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Ruler className="h-6 w-6 text-amber-600" />
                Meditation Cushions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Size</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Diameter</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Height</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium">Small</td>
                      <td className="py-4 px-6 text-gray-600">12"</td>
                      <td className="py-4 px-6 text-gray-600">4"</td>
                      <td className="py-4 px-6 text-gray-600">Children, petite adults</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium">Medium</td>
                      <td className="py-4 px-6 text-gray-600">14"</td>
                      <td className="py-4 px-6 text-gray-600">5"</td>
                      <td className="py-4 px-6 text-gray-600">Average height adults</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium">Large</td>
                      <td className="py-4 px-6 text-gray-600">16"</td>
                      <td className="py-4 px-6 text-gray-600">6"</td>
                      <td className="py-4 px-6 text-gray-600">Tall adults, extra comfort</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Aromatherapy Diffusers */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl">Aromatherapy Diffusers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Room Coverage</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex justify-between">
                      <span>Small Diffuser:</span>
                      <span>Up to 200 sq ft</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Medium Diffuser:</span>
                      <span>200-400 sq ft</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Large Diffuser:</span>
                      <span>400-600 sq ft</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Water Capacity</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex justify-between">
                      <span>Small:</span>
                      <span>100ml (3-4 hours)</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Medium:</span>
                      <span>300ml (8-10 hours)</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Large:</span>
                      <span>500ml (12-15 hours)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Salt Lamps */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl">Himalayan Salt Lamps</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Weight</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Dimensions</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Room Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium">2-3 lbs</td>
                      <td className="py-4 px-6 text-gray-600">4" x 3" x 3"</td>
                      <td className="py-4 px-6 text-gray-600">Small room, desk</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium">5-7 lbs</td>
                      <td className="py-4 px-6 text-gray-600">6" x 4" x 4"</td>
                      <td className="py-4 px-6 text-gray-600">Medium room, bedroom</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-6 font-medium">8-12 lbs</td>
                      <td className="py-4 px-6 text-gray-600">8" x 6" x 6"</td>
                      <td className="py-4 px-6 text-gray-600">Large room, living area</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Measuring Tips */}
      <div className="mt-16">
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Info className="h-6 w-6 text-amber-600" />
              Measuring Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">For Home Textiles</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Measure your furniture before ordering throws</li>
                  <li>• Consider desired overhang for blankets</li>
                  <li>• Check pillow insert dimensions for pillowcases</li>
                  <li>• Account for shrinkage in natural materials</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">For Wellness Products</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Consider your height for meditation cushions</li>
                  <li>• Measure room square footage for diffusers</li>
                  <li>• Check ceiling height for larger salt lamps</li>
                  <li>• Consider placement and accessibility</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Help Section */}
      <div className="text-center mt-16">
        <div className="max-w-2xl mx-auto">
          <HelpCircle className="h-12 w-12 text-amber-600 mx-auto mb-6" />
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Still Need Help?</h2>
          <p className="text-gray-600 mb-8">
            Our customer service team is here to help you find the perfect size for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@orvelix.com"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Email Size Questions
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
