import { FAQ } from './FAQ';

const faqItems = [
  {
    question: 'What is your refund policy?',
    answer:
      'We offer a 30-day money-back guarantee for all plans. If you are not satisfied with our service, contact our support team for a full refund with no questions asked.',
  },
  {
    question: 'How do I upgrade my plan?',
    answer:
      'You can upgrade your plan at any time from your account settings. Navigate to Billing, select your new plan, and the price difference will be prorated for the current billing cycle.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes, we offer a 14-day free trial with full access to all features. No credit card required to start your trial.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Absolutely. You can cancel your subscription at any time with no cancellation fees. Your access will continue until the end of your billing period.',
  },
  {
    question: 'Do you offer enterprise plans?',
    answer:
      'Yes, we have custom enterprise solutions for teams of 50+ members. Contact our sales team for personalized pricing and dedicated support options.',
  },
  {
    question: 'How secure is my data?',
    answer:
      'We use industry-standard AES-256 encryption for all data at rest and TLS 1.3 for data in transit. Our infrastructure is SOC 2 Type II certified.',
  },
];

export default function GlassmorphismFAQ() {
  return (
    <section className="min-h-screen py-24 px-4 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-white/70 text-lg">Find answers to common questions</p>
        </div>

        <FAQ theme="glassmorphism" variant="cards" items={faqItems} allowMultiple={false} />
      </div>
    </section>
  );
}
