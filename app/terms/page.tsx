import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read Orvelix's terms and conditions for using our services.",
}

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-8">Terms of Service</h1>
        <p className="text-gray-600 text-lg mb-8">Last updated: January 1, 2025</p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            By accessing and using Orvelix's website and services, you accept and agree to be bound by the terms and
            provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Permission is granted to temporarily download one copy of the materials on Orvelix's website for personal,
            non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under
            this license you may not:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>modify or copy the materials</li>
            <li>use the materials for any commercial purpose or for any public display</li>
            <li>attempt to reverse engineer any software contained on the website</li>
            <li>remove any copyright or other proprietary notations from the materials</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Product Information</h2>
          <p className="text-gray-600 leading-relaxed">
            We strive to provide accurate product information, including descriptions, pricing, and availability.
            However, we do not warrant that product descriptions or other content is accurate, complete, reliable,
            current, or error-free. We reserve the right to correct any errors, inaccuracies, or omissions and to change
            or update information at any time without prior notice.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pricing and Payment</h2>
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              All prices are listed in USD and are subject to change without notice. We reserve the right to modify
              prices at any time. Payment is due at the time of purchase.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We accept various payment methods including credit cards and PayPal. By providing payment information, you
              represent and warrant that you are authorized to use the payment method.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Shipping and Delivery</h2>
          <p className="text-gray-600 leading-relaxed">
            We will make every effort to ship your order within the timeframe specified on our website. However,
            delivery dates are estimates and we are not responsible for delays caused by shipping carriers or other
            circumstances beyond our control.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Returns and Refunds</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We want you to be completely satisfied with your purchase. Our return policy includes:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>30-day return window from date of delivery</li>
            <li>Items must be in original condition and packaging</li>
            <li>Return shipping costs may apply</li>
            <li>Refunds processed within 5-7 business days</li>
            <li>Some items may be non-returnable due to hygiene or safety reasons</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Accounts</h2>
          <p className="text-gray-600 leading-relaxed">
            When you create an account with us, you must provide information that is accurate, complete, and current at
            all times. You are responsible for safeguarding the password and for all activities that occur under your
            account. You agree not to disclose your password to any third party.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed">
            In no event shall Orvelix or its suppliers be liable for any damages (including, without limitation,
            damages for loss of data or profit, or due to business interruption) arising out of the use or inability to
            use the materials on Orvelix's website, even if Orvelix or an authorized representative has been notified
            orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
          <p className="text-gray-600 leading-relaxed">
            These terms and conditions are governed by and construed in accordance with the laws of New York, United
            States, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="mt-4 p-6 bg-gray-50 rounded-xl">
            <p className="text-gray-900 font-medium">Orvelix Support Team</p>
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
