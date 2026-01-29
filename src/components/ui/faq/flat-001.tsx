import { useState } from 'react'

export default function FlatFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    { q: 'What is your refund policy?', a: 'We offer a 30-day money-back guarantee for all plans. If you are not satisfied with our service, contact our support team for a full refund with no questions asked.' },
    { q: 'How do I upgrade my plan?', a: 'You can upgrade your plan at any time from your account settings. Navigate to Billing, select your new plan, and the price difference will be prorated for the current billing cycle.' },
    { q: 'Is there a free trial?', a: 'Yes, we offer a 14-day free trial with full access to all features. No credit card required to start your trial.' },
    { q: 'Can I cancel anytime?', a: 'Absolutely. You can cancel your subscription at any time with no cancellation fees. Your access will continue until the end of your billing period.' },
    { q: 'Do you offer enterprise plans?', a: 'Yes, we have custom enterprise solutions for teams of 50+ members. Contact our sales team for personalized pricing and dedicated support options.' },
    { q: 'How secure is my data?', a: 'We use industry-standard AES-256 encryption for all data at rest and TLS 1.3 for data in transit. Our infrastructure is SOC 2 Type II certified.' },
  ]

  const colors = [
    { bg: 'bg-blue-500', text: 'text-blue-500', bgLight: 'bg-blue-50' },
    { bg: 'bg-emerald-500', text: 'text-emerald-500', bgLight: 'bg-emerald-50' },
    { bg: 'bg-amber-500', text: 'text-amber-500', bgLight: 'bg-amber-50' },
    { bg: 'bg-purple-500', text: 'text-purple-500', bgLight: 'bg-purple-50' },
    { bg: 'bg-rose-500', text: 'text-rose-500', bgLight: 'bg-rose-50' },
    { bg: 'bg-cyan-500', text: 'text-cyan-500', bgLight: 'bg-cyan-50' },
  ]

  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-500 text-white px-8 py-4 rounded-2xl mb-6">
            <h2 className="text-4xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-gray-600 text-lg">Simple answers to common questions</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map((faq, i) => {
            const color = colors[i % colors.length]
            const isOpen = openIndex === i

            return (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? color.bgLight : 'bg-white'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left p-6 flex items-start gap-4 group"
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${color.bg} flex items-center justify-center transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}>
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {faq.q}
                    </h3>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pl-[88px]">
                    <div className={`w-1 ${color.bg} h-full absolute left-[30px] top-[72px] bottom-6`}></div>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
