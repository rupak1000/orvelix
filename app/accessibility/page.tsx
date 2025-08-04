import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Ear, Hand, Brain, Heart, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Orvelix is committed to ensuring digital accessibility for people with disabilities.",
}

export default function AccessibilityPage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-6">Accessibility Statement</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Orvelix is committed to ensuring digital accessibility for people with disabilities
        </p>
      </div>

      <div className="prose prose-lg max-w-none space-y-12">
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Heart className="h-6 w-6 text-amber-600" />
              Our Commitment
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              At Orvelix, we believe that everyone should have equal access to premium lifestyle products and
              exceptional online experiences. We are committed to providing a website that is accessible to the widest
              possible audience, regardless of technology or ability.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We strive to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards and
              continuously work to improve the accessibility of our website for all users.
            </p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Accessibility Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Visual Accessibility</h3>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• High contrast color schemes</li>
                      <li>• Scalable fonts and layouts</li>
                      <li>• Alternative text for all images</li>
                      <li>• Clear visual hierarchy</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Hand className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Motor Accessibility</h3>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Large clickable areas</li>
                      <li>• Keyboard navigation support</li>
                      <li>• No time-sensitive interactions</li>
                      <li>• Touch-friendly interface</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Brain className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Cognitive Accessibility</h3>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Clear, simple language</li>
                      <li>• Consistent navigation</li>
                      <li>• Error prevention and recovery</li>
                      <li>• Logical content structure</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Ear className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Auditory Accessibility</h3>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Text alternatives for audio content</li>
                      <li>• Visual indicators for sound cues</li>
                      <li>• No auto-playing audio</li>
                      <li>• Captions for video content</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technical Standards</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• WCAG 2.1 Level AA compliance</li>
                    <li>• Semantic HTML markup</li>
                    <li>• ARIA labels and descriptions</li>
                    <li>• Screen reader compatibility</li>
                    <li>• Keyboard-only navigation</li>
                    <li>• Focus management</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Ongoing Improvements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              We recognize that accessibility is an ongoing effort, not a one-time achievement. Our team regularly:
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Conducts accessibility audits and testing</li>
              <li>• Incorporates user feedback from the disability community</li>
              <li>• Updates our website based on evolving accessibility standards</li>
              <li>• Trains our team on accessibility best practices</li>
              <li>• Partners with accessibility experts and organizations</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Assistive Technologies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              Our website is designed to work with a variety of assistive technologies, including:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Screen Readers</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• JAWS</li>
                  <li>• NVDA</li>
                  <li>• VoiceOver (macOS/iOS)</li>
                  <li>• TalkBack (Android)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Other Tools</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Voice recognition software</li>
                  <li>• Switch navigation devices</li>
                  <li>• Eye-tracking systems</li>
                  <li>• Magnification software</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Feedback and Support</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              We welcome feedback about the accessibility of our website. If you encounter any barriers or have
              suggestions for improvement, please don't hesitate to contact us.
            </p>

            <div className="bg-amber-50 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Mail className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Contact Our Accessibility Team</h4>
                  <div className="space-y-2 text-gray-700">
                    <p>Email: accessibility@orvelix.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                    <p>Response time: Within 2 business days</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">When contacting us about accessibility, please include:</p>
            <ul className="text-gray-600 space-y-1">
              <li>• The specific page or feature you're having trouble with</li>
              <li>• The assistive technology you're using</li>
              <li>• A description of the problem you encountered</li>
              <li>• Your preferred method of communication for our response</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Third-Party Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              Some content on our website may be provided by third-party services (such as payment processors, social
              media widgets, or embedded videos). While we strive to ensure these services meet accessibility standards,
              we may have limited control over their accessibility features.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If you encounter accessibility issues with third-party content, please contact us and we will work with
              the relevant providers to address the concerns.
            </p>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">This accessibility statement was last updated on January 1, 2024.</p>
        </div>
      </div>
    </div>
  )
}
