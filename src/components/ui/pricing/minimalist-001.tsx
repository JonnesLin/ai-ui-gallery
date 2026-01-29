import { PricingTable } from './PricingTable';
import type { PricingPlan } from './types';

export default function MinimalistPricing() {
  const plans: PricingPlan[] = [
    {
      name: 'Basic',
      amount: 9,
      description: 'Perfect for getting started',
      features: ['5 Projects', '2GB Storage', 'Email Support', 'Basic Analytics'],
    },
    {
      name: 'Pro',
      amount: 29,
      description: 'Best for growing teams',
      features: ['Unlimited Projects', '50GB Storage', 'Priority Support', 'Advanced Analytics', 'API Access'],
      popular: true,
    },
    {
      name: 'Enterprise',
      amount: 99,
      description: 'For large organizations',
      features: ['Everything in Pro', 'Unlimited Storage', 'Dedicated Support', 'Custom Integrations', 'SLA', 'SSO'],
    },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-3">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-500 font-light">No hidden fees. Cancel anytime.</p>
        </div>

        <PricingTable theme="minimalist" plans={plans} />
      </div>
    </section>
  );
}
