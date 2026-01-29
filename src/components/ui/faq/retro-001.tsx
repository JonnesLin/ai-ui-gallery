import { useState } from 'react'

export default function RetroFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    { q: 'What is your refund policy?', a: 'We offer a 30-day money-back guarantee for all plans. If you are not satisfied with our service, contact our support team for a full refund with no questions asked.' },
    { q: 'How do I upgrade my plan?', a: 'You can upgrade your plan at any time from your account settings. Navigate to Billing, select your new plan, and the price difference will be prorated for the current billing cycle.' },
    { q: 'Is there a free trial?', a: 'Yes, we offer a 14-day free trial with full access to all features. No credit card required to start your trial.' },
    { q: 'Can I cancel anytime?', a: 'Absolutely. You can cancel your subscription at any time with no cancellation fees. Your access will continue until the end of your billing period.' },
    { q: 'Do you offer enterprise plans?', a: 'Yes, we have custom enterprise solutions for teams of 50+ members. Contact our sales team for personalized pricing and dedicated support options.' },
    { q: 'How secure is my data?', a: 'We use industry-standard AES-256 encryption for all data at rest and TLS 1.3 for data in transit. Our infrastructure is SOC 2 Type II certified.' },
  ]

  return (
    <section className="min-h-screen py-24 px-4 bg-amber-100" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23d97706\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M0 0h20v20H0zM20 20h20v20H20z\'/%3E%3C/g%3E%3C/svg%3E")' }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-600 text-white px-6 py-2 mb-6 -rotate-2">
            <span className="font-bold text-sm uppercase tracking-wider">Help Center</span>
          </div>
          <h2 className="text-5xl font-bold text-orange-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-orange-700 text-lg italic">Your questions, answered with care</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-lg border-2 border-orange-300 transition-all duration-300 ${
                openIndex === i ? 'shadow-lg border-orange-500' : 'shadow-md hover:shadow-lg'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex justify-between items-center text-left"
              >
                <span className="text-orange-900 font-bold pr-4" style={{ fontFamily: 'Georgia, serif' }}>{faq.q}</span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 border-t-2 border-dashed border-orange-200 pt-4">
                  <p className="text-orange-800 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-orange-600 text-sm">
            Still have questions? <span className="font-bold underline cursor-pointer">Contact us</span>
          </p>
        </div>
      </div>
    </section>
  )
}
