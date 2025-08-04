import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Droplets, Sun, Wind, AlertTriangle, Sparkles, Leaf } from "lucide-react"

export const metadata: Metadata = {
  title: "Care Instructions",
  description: "Learn how to properly care for your Orvelix premium products to ensure lasting beauty and quality.",
}

export default function CareInstructionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-6">Care Instructions</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Preserve the beauty and quality of your premium products with proper care
        </p>
      </div>

      <Tabs defaultValue="textiles" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-gray-50 rounded-full p-1 mb-12">
          <TabsTrigger value="textiles" className="rounded-full">
            Textiles
          </TabsTrigger>
          <TabsTrigger value="ceramics" className="rounded-full">
            Ceramics
          </TabsTrigger>
          <TabsTrigger value="wood" className="rounded-full">
            Wood
          </TabsTrigger>
          <TabsTrigger value="wellness" className="rounded-full">
            Wellness
          </TabsTrigger>
        </TabsList>

        <TabsContent value="textiles" className="space-y-12">
          {/* Cashmere & Silk */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Sparkles className="h-6 w-6 text-amber-600" />
                Cashmere & Silk Care
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-blue-600" />
                    Washing Instructions
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Hand wash in cold water (30°C/86°F max)</li>
                    <li>• Use gentle, pH-neutral detergent</li>
                    <li>• Soak for 3-5 minutes maximum</li>
                    <li>• Gently squeeze, never wring or twist</li>
                    <li>• Rinse thoroughly with cold water</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Sun className="h-5 w-5 text-yellow-600" />
                    Drying & Storage
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Lay flat on clean towel to dry</li>
                    <li>• Avoid direct sunlight and heat</li>
                    <li>• Reshape while damp</li>
                    <li>• Store folded with cedar sachets</li>
                    <li>• Use breathable garment bags</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Important Notes</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Never machine wash or dry clean cashmere</li>
                      <li>• Silk pillowcases can be machine washed on delicate cycle</li>
                      <li>• Professional cleaning recommended for heavily soiled items</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cotton & Linen */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl">Cotton & Linen Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Machine Washing</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Warm water (40°C/104°F)</li>
                    <li>• Gentle or delicate cycle</li>
                    <li>• Mild detergent</li>
                    <li>• Separate colors</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Drying</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Low heat tumble dry</li>
                    <li>• Remove while slightly damp</li>
                    <li>• Air dry for best results</li>
                    <li>• Avoid over-drying</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Ironing</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Medium heat setting</li>
                    <li>• Iron while slightly damp</li>
                    <li>• Use pressing cloth if needed</li>
                    <li>• Steam iron works best</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ceramics" className="space-y-12">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Sparkles className="h-6 w-6 text-amber-600" />
                Ceramic & Porcelain Care
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Care</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Hand wash with warm, soapy water</li>
                    <li>• Use soft sponge or cloth</li>
                    <li>• Avoid abrasive cleaners</li>
                    <li>• Dry immediately with soft towel</li>
                    <li>• Handle with care to prevent chips</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Deep Cleaning</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Soak in warm water for stubborn stains</li>
                    <li>• Use baking soda paste for tough spots</li>
                    <li>• Rinse thoroughly after cleaning</li>
                    <li>• Polish with microfiber cloth</li>
                    <li>• Store in padded containers</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Dishwasher Guidelines</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">✓ Dishwasher Safe</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Most ceramic coffee sets</li>
                      <li>• Porcelain dinnerware</li>
                      <li>• Glazed ceramic items</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">✗ Hand Wash Only</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Hand-painted ceramics</li>
                      <li>• Gold or silver accents</li>
                      <li>• Delicate or antique pieces</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wood" className="space-y-12">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Leaf className="h-6 w-6 text-amber-600" />
                Wood & Bamboo Care
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Regular Maintenance</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Dust regularly with microfiber cloth</li>
                    <li>• Clean with damp cloth, dry immediately</li>
                    <li>• Use wood-specific cleaners sparingly</li>
                    <li>• Apply wood conditioner monthly</li>
                    <li>• Keep away from direct heat sources</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Protection Tips</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Use coasters and placemats</li>
                    <li>• Maintain consistent humidity (40-60%)</li>
                    <li>• Rotate items to prevent uneven fading</li>
                    <li>• Oil bamboo products every 3-6 months</li>
                    <li>• Sand lightly if surface becomes rough</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Seasonal Care</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Winter Care</h5>
                    <p className="text-sm text-gray-600">
                      Increase humidity levels and apply extra conditioning to prevent cracking from dry indoor air.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Summer Care</h5>
                    <p className="text-sm text-gray-600">
                      Keep away from direct sunlight and air conditioning vents to prevent warping and fading.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wellness" className="space-y-12">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Wind className="h-6 w-6 text-amber-600" />
                Wellness Product Care
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Diffusers */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Aromatherapy Diffusers</h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Daily Maintenance</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Empty and rinse after each use</li>
                      <li>• Wipe exterior with damp cloth</li>
                      <li>• Use distilled water only</li>
                      <li>• Clean ultrasonic plate gently</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Deep Cleaning (Weekly)</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Fill with water and 10 drops white vinegar</li>
                      <li>• Run for 5-10 minutes</li>
                      <li>• Empty and rinse thoroughly</li>
                      <li>• Dry completely before storage</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Salt Lamps */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Himalayan Salt Lamps</h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Cleaning</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Turn off and cool completely</li>
                      <li>• Wipe with barely damp cloth</li>
                      <li>• Never submerge in water</li>
                      <li>• Dry immediately after cleaning</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Maintenance</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Keep in dry environment</li>
                      <li>• Use regularly to prevent moisture buildup</li>
                      <li>• Replace bulb as needed</li>
                      <li>• Store in plastic bag if unused long-term</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Meditation Cushions */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Meditation Cushions</h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Cover Care</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Remove and wash covers monthly</li>
                      <li>• Machine wash cold, gentle cycle</li>
                      <li>• Air dry to prevent shrinkage</li>
                      <li>• Iron on low heat if needed</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Fill Maintenance</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Fluff buckwheat hulls regularly</li>
                      <li>• Air out filling in sunlight occasionally</li>
                      <li>• Replace filling every 2-3 years</li>
                      <li>• Store in dry, ventilated area</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* General Tips */}
      <div className="mt-16">
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Universal Care Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Gentle Cleaning</h3>
                <p className="text-gray-600">
                  Always start with the gentlest cleaning method and gradually increase intensity if needed.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Natural Products</h3>
                <p className="text-gray-600">
                  Use eco-friendly, non-toxic cleaning products to preserve both your items and the environment.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sun className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Proper Storage</h3>
                <p className="text-gray-600">
                  Store items in appropriate conditions to maintain their quality and extend their lifespan.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Section */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Need Specific Care Advice?</h2>
        <p className="text-gray-600 mb-8">
          Our product specialists are here to help with detailed care instructions for your specific items
        </p>
        <a
          href="mailto:care@orvelix.com"
          className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
        >
          Contact Care Specialists
        </a>
      </div>
    </div>
  )
}
