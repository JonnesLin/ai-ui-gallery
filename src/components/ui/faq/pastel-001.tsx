import { useState } from 'react'

export default function PastelFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    { q: 'What is your refund policy?', a: 'We offer a 30-day money-back guarantee for all plans. If you are not satisfied with our service, contact our support team for a full refund with no questions asked.', color: 'bg-pink-100 border-pink-300' },
    { q: 'How do I upgrade my plan?', a: 'You can upgrade your plan at any time from your account settings. Navigate to Billing, select your new plan, and the price difference will be prorated for the current billing cycle.', color: 'bg-blue-100 border-blue-300' },
    { q: 'Is there a free trial?', a: 'Yes, we offer a 14-day free trial with full access to all features. No credit card required to start your trial.', color: 'bg-green-100 border-green-300' },
    { q: 'Can I cancel anytime?', a: 'Absolutely. You can cancel your subscription at any time with no cancellation fees. Your access will continue until the end of your billing period.', color: 'bg-yellow-100 border-yellow-300' },
    { q: 'Do you offer enterprise plans?', a: 'Yes, we have custom enterprise solutions for teams of 50+ members. Contact our sales team for personalized pricing and dedicated support options.', color: 'bg-purple-100 border-purple-300' },
    { q: 'How secure is my data?', a: 'We use industry-standard AES-256 encryption for all data at rest and TLS 1.3 for data in transit. Our infrastructure is SOC 2 Type II certified.', color: 'bg-orange-100 border-orange-300' },
  ]

  return (
    <section className="min-h-screen py-24 px-4 bg-gradient-to-b from-pink-50 via-white to-blue-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-700 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500">Here to help you understand everything</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden ${faq.color} ${
                openIndex === i ? 'shadow-lg' : 'shadow-sm hover:shadow-md'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex justify-between items-center text-left"
              >
                <span className="text-gray-700 font-semibold pr-4">{faq.q}</span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                >
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
