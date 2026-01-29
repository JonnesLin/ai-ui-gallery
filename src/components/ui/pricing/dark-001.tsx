import { PricingTable } from './PricingTable';
import type { PricingPlan } from './types';

export default function DarkPricing() {
  const plans: PricingPlan[] = [
    {
      name: 'Starter',
      amount: 19,
      description: 'For small projects',
      features: ['10 Projects', '20GB Storage', 'Email Support', 'Basic Analytics', 'API Access'],
    },
    {
      name: 'Growth',
      amount: 49,
      description: 'For scaling teams',
      features: ['Unlimited Projects', '200GB Storage', 'Priority Support', 'Advanced Analytics', 'Custom API', 'Team Features'],
      popular: true,
    },
    {
      name: 'Enterprise',
      amount: 129,
      description: 'For large scale',
      features: ['Everything in Growth', 'Unlimited Storage', '24/7 Phone Support', 'Dedicated Manager', 'Custom SLA', 'On-premise Option'],
    },
  ];

  return (
    <section className="min-h-screen py-24 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">Pricing</span>
          <h2 className="text-4xl font-bold text-white mt-3 mb-4">
            Plans for every scale
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Simple, transparent pricing that grows with you. No contracts, no surprise fees.
          </p>
        </div>

        <PricingTable theme="dark" plans={plans} />

        <p className="text-center text-gray-600 text-sm mt-12">
          All plans include 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}
