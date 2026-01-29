import { useState } from 'react'

export default function ThreeDFAQ() {
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
    <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-3xl mx-auto relative" style={{ perspective: '1000px' }}>
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6"
              style={{
                transform: 'rotateX(10deg)',
                textShadow: '0 10px 30px rgba(147, 51, 234, 0.5)'
              }}>
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 text-sm tracking-wide">Get answers to common questions</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="relative transform transition-all duration-500 hover:scale-[1.02]"
              style={{
                transformStyle: 'preserve-3d',
                transform: openIndex === i ? 'translateZ(20px)' : 'translateZ(0)'
              }}
            >
              <div
                className={`relative bg-gradient-to-br rounded-xl overflow-hidden transition-all duration-500 ${
                  openIndex === i
                    ? 'from-purple-600 to-pink-600 shadow-2xl'
                    : 'from-slate-800 to-slate-700 shadow-lg hover:from-slate-700 hover:to-slate-600'
                }`}
                style={{
                  boxShadow: openIndex === i
                    ? '0 25px 50px -12px rgba(168, 85, 247, 0.5), inset 0 -2px 10px rgba(0,0,0,0.3)'
                    : '0 10px 30px -5px rgba(0,0,0,0.3), inset 0 -2px 5px rgba(0,0,0,0.2)'
                }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center text-left p-8 relative z-10"
                >
                  <span className="text-lg font-bold text-white pr-8">
                    {faq.q}
                  </span>
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-500 ${
                      openIndex === i
                        ? 'bg-white/20 rotate-180'
                        : 'bg-white/10 hover:bg-white/15'
                    }`}
                    style={{
                      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2), 0 4px 8px rgba(0,0,0,0.1)',
                      transform: openIndex === i ? 'translateZ(10px) rotate(180deg)' : 'translateZ(10px)'
                    }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div
                    className="px-8 pb-8 pt-2"
                    style={{
                      transform: 'translateZ(5px)',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div className="w-full h-px bg-white/10 mb-4"></div>
                    <p className="text-white/90 leading-relaxed">{faq.a}</p>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
