import { useState } from 'react'

export default function CyberpunkFAQ() {
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
    <section className="min-h-screen py-24 px-4 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `linear-gradient(transparent 50%, rgba(0, 255, 255, 0.05) 50%)`,
        backgroundSize: '100% 4px'
      }} />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 mb-4 tracking-tighter">
            DATA_QUERIES
          </h2>
          <p className="text-cyan-400/70 font-mono text-sm tracking-widest">
            // ACCESSING KNOWLEDGE BASE...
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`relative bg-gray-900/80 backdrop-blur-sm border-2 transition-all duration-500 ${
                openIndex === i
                  ? 'border-fuchsia-500 shadow-[0_0_30px_rgba(236,72,153,0.3)]'
                  : 'border-cyan-400/50 hover:border-cyan-400'
              }`}
              style={{ clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex justify-between items-center text-left"
              >
                <div className="flex items-center gap-3 pr-4">
                  <div className={`w-2 h-2 ${openIndex === i ? 'bg-fuchsia-500' : 'bg-cyan-400'} animate-pulse`} />
                  <span className={`font-mono font-bold ${openIndex === i ? 'text-fuchsia-400' : 'text-cyan-400'}`}>
                    [{String(i + 1).padStart(2, '0')}]
                  </span>
                  <span className="text-gray-200 font-medium">{faq.q}</span>
                </div>
                <span className={`flex-shrink-0 font-mono text-2xl transition-transform duration-300 ${
                  openIndex === i ? 'text-fuchsia-500 rotate-45' : 'text-cyan-400'
                }`}>
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 border-t border-fuchsia-500/30 pt-4">
                  <p className="text-gray-400 font-mono text-sm leading-relaxed">
                    <span className="text-fuchsia-500">&gt;</span> {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 font-mono text-xs">
            [SYS] Query complete. {faqs.length} entries found.
          </p>
        </div>
      </div>
    </section>
  )
}
