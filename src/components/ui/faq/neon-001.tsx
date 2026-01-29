import { useState } from 'react'

export default function NeonFAQ() {
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
    <section className="py-24 px-4 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>

      <div className="max-w-3xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black tracking-tight text-white mb-6 relative inline-block">
            <span className="relative z-10">Frequently Asked Questions</span>
            <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-50"></span>
          </h2>
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase"
             style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.8)' }}>
            Everything you need to know
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="relative group"
              style={{
                filter: openIndex === i
                  ? 'drop-shadow(0 0 20px rgba(236,72,153,0.5))'
                  : 'drop-shadow(0 0 5px rgba(59,130,246,0.3))'
              }}
            >
              <div className={`border-2 transition-all duration-300 ${
                openIndex === i
                  ? 'border-pink-500 bg-pink-500/10'
                  : 'border-blue-500 bg-blue-500/5 hover:border-purple-500 hover:bg-purple-500/10'
              }`}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center text-left p-6"
                >
                  <span className={`text-lg font-bold pr-8 transition-colors ${
                    openIndex === i ? 'text-pink-400' : 'text-blue-400 group-hover:text-purple-400'
                  }`}
                  style={{
                    textShadow: openIndex === i
                      ? '0 0 15px rgba(236,72,153,0.8)'
                      : '0 0 10px rgba(59,130,246,0.6)'
                  }}>
                    {faq.q}
                  </span>
                  <div className={`flex-shrink-0 w-10 h-10 border-2 flex items-center justify-center transition-all ${
                    openIndex === i
                      ? 'border-pink-500 bg-pink-500 rotate-180'
                      : 'border-cyan-500 bg-cyan-500/20 group-hover:border-purple-500'
                  }`}
                  style={{
                    boxShadow: openIndex === i
                      ? '0 0 20px rgba(236,72,153,0.8), inset 0 0 10px rgba(236,72,153,0.5)'
                      : '0 0 15px rgba(6,182,212,0.6), inset 0 0 10px rgba(6,182,212,0.3)'
                  }}>
                    <svg
                      className={`w-5 h-5 transition-colors ${
                        openIndex === i ? 'text-white' : 'text-cyan-300'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-2 border-t-2 border-pink-500/30">
                    <p className="text-gray-300 leading-relaxed font-mono text-sm">{faq.a}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
