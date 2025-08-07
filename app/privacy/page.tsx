import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Orvelix protects and uses your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-gray-600 text-lg mb-8">Last updated: January 1, 2025</p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At Orvelix, we are committed to protecting your privacy and ensuring the security of your personal
            information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
            you visit our website or make a purchase from us.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Create an account</li>
                <li>Make a purchase</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact customer service</li>
                <li>Participate in surveys or promotions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-600 leading-relaxed">
                We automatically collect certain information about your device and usage patterns, including: IP
                address, browser type, operating system, referring URLs, and pages visited.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your purchases</li>
            <li>Provide customer support</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Prevent fraud and enhance security</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We do not sell, trade, or rent your personal information to third parties. We may share your information in
            the following circumstances:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>With service providers who assist us in operating our business</li>
            <li>To comply with legal requirements or protect our rights</li>
            <li>In connection with a business transfer or merger</li>
            <li>With your explicit consent</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
          <p className="text-gray-600 leading-relaxed">
            We implement appropriate technical and organizational security measures to protect your personal information
            against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over
            the internet or electronic storage is 100% secure.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Depending on your location, you may have the following rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Access and receive a copy of your personal information</li>
            <li>Rectify inaccurate or incomplete information</li>
            <li>Delete your personal information</li>
            <li>Restrict or object to processing</li>
            <li>Data portability</li>
            <li>Withdraw consent</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h2>
          <p className="text-gray-600 leading-relaxed">
            We use cookies and similar tracking technologies to enhance your browsing experience, analyze website
            traffic, and personalize content. You can control cookie settings through your browser preferences.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <div className="mt-4 p-6 bg-gray-50 rounded-xl">
            <p className="text-gray-900 font-medium">Orvelix support Team</p>
            <p className="text-gray-600">Email: support@orvelix.com</p>
            <p className="text-gray-600">Phone: +1 (307) 400-7431</p>
            <p className="text-gray-600">
              Address: 30 N Gould St Ste N,
              <br />
              Sheridan, WY 82801
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
