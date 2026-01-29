import { useState } from 'react'

export default function NatureFAQ() {
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
    <section className="min-h-screen py-24 px-4 bg-gradient-to-b from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-200 rounded-full filter blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200 rounded-full filter blur-3xl opacity-40 translate-x-1/2 translate-y-1/2" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-emerald-600 mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span className="text-sm font-medium uppercase tracking-wider">Help Center</span>
          </div>
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-emerald-700">Everything you need to grow with us</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                openIndex === i
                  ? 'bg-white border-emerald-400 shadow-lg shadow-emerald-100'
                  : 'bg-white/70 border-emerald-200 hover:border-emerald-300 hover:bg-white'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex justify-between items-center text-left"
              >
                <div className="flex items-center gap-4 pr-4">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    openIndex === i ? 'bg-emerald-500 text-white' : 'bg-emerald-100 text-emerald-600'
                  }`}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </span>
                  <span className="text-emerald-900 font-semibold">{faq.q}</span>
                </div>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-emerald-300 flex items-center justify-center transition-all duration-300 ${
                    openIndex === i ? 'bg-emerald-500 border-emerald-500 rotate-180' : ''
                  }`}
                >
                  <svg
                    className={`w-4 h-4 ${openIndex === i ? 'text-white' : 'text-emerald-500'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-5 pl-18 text-emerald-700 leading-relaxed ml-12">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
