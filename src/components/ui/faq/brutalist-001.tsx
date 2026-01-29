import { useState } from 'react'

export default function BrutalistFAQ() {
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
    <section className="min-h-screen py-24 px-4 bg-yellow-300">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <h2 className="text-6xl md:text-8xl font-black text-black uppercase tracking-tighter mb-4">
            FAQ
          </h2>
          <p className="text-xl font-bold text-black uppercase">Questions? Answers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border-4 border-black bg-white transition-all duration-200 ${
                openIndex === i ? 'translate-x-2 translate-y-2' : 'shadow-[8px_8px_0px_0px_#000]'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex justify-between items-center text-left"
              >
                <span className="text-black font-black uppercase text-lg pr-4">{faq.q}</span>
                <span className="flex-shrink-0 w-10 h-10 border-4 border-black bg-yellow-300 flex items-center justify-center font-black text-2xl">
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 border-t-4 border-black pt-4">
                  <p className="text-black font-medium leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
