import { useState } from 'react'

export default function LuxuryFAQ() {
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
    <section className="min-h-screen py-24 px-4 bg-stone-950">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-500" />
            <span className="text-amber-500 text-sm uppercase tracking-[0.3em]">Inquiries</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-500" />
          </div>
          <h2 className="text-4xl font-light text-white mb-4 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-stone-500 text-sm tracking-widest uppercase">Your Concerns, Our Priority</p>
        </div>

        <div className="space-y-px">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border-b border-stone-800 transition-all duration-500 ${
                openIndex === i ? 'bg-stone-900/50' : ''
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-7 flex justify-between items-center text-left group"
              >
                <div className="flex items-center gap-6 pr-4">
                  <span className="text-amber-500/60 font-light text-sm">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-white font-light tracking-wide group-hover:text-amber-500 transition-colors">
                    {faq.q}
                  </span>
                </div>
                <span
                  className={`flex-shrink-0 w-8 h-8 border border-amber-500/30 flex items-center justify-center transition-all duration-500 ${
                    openIndex === i ? 'bg-amber-500 rotate-180' : 'group-hover:border-amber-500'
                  }`}
                >
                  <svg
                    className={`w-3 h-3 transition-colors ${openIndex === i ? 'text-stone-950' : 'text-amber-500'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-8 pb-7 pl-20 text-stone-400 leading-relaxed font-light">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-stone-600 text-sm tracking-widest uppercase mb-4">Need Personal Assistance?</p>
          <button className="px-8 py-3 border border-amber-500 text-amber-500 text-sm uppercase tracking-widest hover:bg-amber-500 hover:text-stone-950 transition-all duration-300">
            Contact Concierge
          </button>
        </div>
      </div>
    </section>
  )
}
