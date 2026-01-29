import { useState } from 'react'

export default function PlayfulFAQ() {
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
    'from-pink-400 to-rose-500',
    'from-violet-400 to-purple-500',
    'from-blue-400 to-cyan-500',
    'from-emerald-400 to-teal-500',
    'from-amber-400 to-orange-500',
    'from-red-400 to-pink-500',
  ]

  return (
    <section className="min-h-screen py-24 px-4 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Got Questions?
          </h2>
          <p className="text-purple-600 text-lg">We have got answers! Check them out below</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-3xl bg-white shadow-lg transition-all duration-300 overflow-hidden ${
                openIndex === i ? 'scale-[1.02]' : 'hover:scale-[1.01]'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex justify-between items-center text-left"
              >
                <div className="flex items-center gap-4 pr-4">
                  <span className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${colors[i]} flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                    {i + 1}
                  </span>
                  <span className="text-gray-800 font-bold">{faq.q}</span>
                </div>
                <span
                  className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${colors[i]} flex items-center justify-center shadow-md transition-transform duration-300 ${
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
                <div className={`mx-6 mb-5 p-4 rounded-2xl bg-gradient-to-br ${colors[i]} bg-opacity-10`} style={{ background: `linear-gradient(135deg, rgba(236,72,153,0.1), rgba(139,92,246,0.1))` }}>
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
