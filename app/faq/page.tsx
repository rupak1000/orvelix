import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, HelpCircle, Package, CreditCard, Truck, RotateCcw, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about Orvelix products, shipping, returns, and more.",
}

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Orders & Payment",
      icon: CreditCard,
      questions: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay. All payments are processed securely through encrypted connections.",
        },
        {
          question: "Can I modify or cancel my order after placing it?",
          answer:
            "Orders can be modified or cancelled within 1 hour of placement. After this time, orders enter our fulfillment process and cannot be changed. Please contact customer service immediately if you need to make changes.",
        },
        {
          question: "Do you offer payment plans or financing?",
          answer:
            "Currently, we don't offer payment plans or financing options. However, you can use PayPal's Pay in 4 service if available in your region for eligible purchases.",
        },
        {
          question: "Why was my payment declined?",
          answer:
            "Payment declines can occur due to insufficient funds, incorrect billing information, or bank security measures. Please verify your information and contact your bank if the issue persists.",
        },
      ],
    },
    {
      title: "Shipping & Delivery",
      icon: Truck,
      questions: [
        {
          question: "How long does shipping take?",
          answer:
            "Standard shipping takes 5-7 business days, Express shipping takes 2-3 business days, and Overnight shipping delivers the next business day. Free standard shipping is available on orders over $100.",
        },
        {
          question: "Do you ship internationally?",
          answer:
            "Yes, we ship to most countries worldwide. International shipping costs and delivery times vary by destination. Customs duties and taxes may apply and are the responsibility of the recipient.",
        },
        {
          question: "How can I track my order?",
          answer:
            "Once your order ships, you'll receive a tracking number via email. You can track your package on our website or directly with the shipping carrier. Updates are provided throughout the delivery process.",
        },
        {
          question: "What if my package is lost or damaged?",
          answer:
            "We're fully responsible for packages until they reach you safely. If your package is lost or arrives damaged, contact us immediately and we'll send a replacement or provide a full refund.",
        },
      ],
    },
    {
      title: "Returns & Exchanges",
      icon: RotateCcw,
      questions: [
        {
          question: "What is your return policy?",
          answer:
            "We offer a 30-day return policy from the date of delivery. Items must be in original condition with tags and packaging. We provide prepaid return labels for domestic returns.",
        },
        {
          question: "How do I start a return?",
          answer:
            "Contact our customer service team or log into your account to initiate a return. We'll provide a return authorization number and prepaid shipping label. Package your item securely and drop it off at any authorized location.",
        },
        {
          question: "Can I exchange an item for a different size or color?",
          answer:
            "Yes, exchanges are available for different sizes or colors of the same item, subject to availability. The exchange process follows the same procedure as returns, and we'll ship your new item once we receive the original.",
        },
        {
          question: "When will I receive my refund?",
          answer:
            "Refunds are processed within 5-7 business days after we receive your returned item. The refund will appear on your original payment method. Store credit refunds are processed immediately.",
        },
      ],
    },
    {
      title: "Products & Quality",
      icon: Package,
      questions: [
        {
          question: "Are your products authentic and high-quality?",
          answer:
            "Absolutely. We work directly with artisans and manufacturers to ensure authenticity and quality. Every product undergoes rigorous quality control before shipping, and we stand behind our products with warranties and guarantees.",
        },
        {
          question: "Do you offer product warranties?",
          answer:
            "Yes, most of our products come with a 2-year warranty covering manufacturing defects. Warranty terms vary by product category. Contact us if you experience any issues with your purchase.",
        },
        {
          question: "Can I see products in person before buying?",
          answer:
            "Currently, we operate exclusively online. However, we provide detailed product descriptions, high-resolution images, and customer reviews to help you make informed decisions. Our generous return policy allows you to return items if they don't meet your expectations.",
        },
        {
          question: "How do I care for my products?",
          answer:
            "Each product comes with specific care instructions. We also have a comprehensive care guide on our website with detailed instructions for different materials and product types. Proper care ensures your products maintain their beauty and quality for years.",
        },
      ],
    },
    {
      title: "Account & Privacy",
      icon: Shield,
      questions: [
        {
          question: "Do I need an account to make a purchase?",
          answer:
            "No, you can checkout as a guest. However, creating an account allows you to track orders, save favorites, access exclusive offers, and enjoy a faster checkout experience.",
        },
        {
          question: "How do you protect my personal information?",
          answer:
            "We use industry-standard encryption and security measures to protect your data. We never sell your information to third parties. Please review our Privacy Policy for detailed information about how we collect and use your data.",
        },
        {
          question: "How can I update my account information?",
          answer:
            "Log into your account and navigate to 'Account Settings' to update your personal information, shipping addresses, and payment methods. Changes are saved automatically.",
        },
        {
          question: "Can I delete my account?",
          answer:
            "Yes, you can request account deletion by contacting customer service. We'll permanently remove your personal information while retaining necessary transaction records as required by law.",
        },
      ],
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <div className="text-center mb-16">
        <HelpCircle className="h-16 w-16 text-amber-600 mx-auto mb-6" />
        <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Find answers to common questions about our products, services, and policies
        </p>
      </div>

      <div className="space-y-12">
        {faqCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <category.icon className="h-6 w-6 text-amber-600" />
              </div>
              <h2 className="text-2xl font-playfair font-bold text-gray-900">{category.title}</h2>
            </div>

            <div className="space-y-4">
              {category.questions.map((faq, faqIndex) => (
                <Card key={faqIndex} className="border-gray-200 shadow-sm">
                  <Collapsible>
                    <CollapsibleTrigger className="w-full">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-gray-900 text-left">{faq.question}</h3>
                          <ChevronDown className="h-5 w-5 text-gray-400 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </div>
                      </CardContent>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="px-6 pb-6 pt-0">
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-20 text-center">
        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-12">
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our customer service team is here to help with any questions or
              concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@orvelix.com"
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Email Support
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="tel:+13074007431"
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Call: +1 (307) 400-7431
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              <p>Customer Service Hours: Monday – Friday, 9 AM – 6 PM  MT</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
