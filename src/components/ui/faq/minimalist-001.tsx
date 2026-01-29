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

export default function MinimalistFAQ() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 font-light">Everything you need to know</p>
        </div>

        <FAQ theme="minimalist" variant="accordion" items={faqItems} allowMultiple={false} />
      </div>
    </section>
  );
}
