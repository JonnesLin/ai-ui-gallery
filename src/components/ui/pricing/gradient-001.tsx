import { PricingTable } from './PricingTable';
import type { PricingPlan } from './types';

export default function GradientPricing() {
  const plans: PricingPlan[] = [
    {
      name: 'Hobby',
      amount: 0,
      description: 'For side projects',
      features: ['3 Projects', '1GB Storage', 'Community Support', 'Basic Features'],
    },
    {
      name: 'Professional',
      amount: 29,
      description: 'For professionals',
      features: ['Unlimited Projects', '50GB Storage', 'Priority Support', 'Advanced Features', 'API Access', 'Analytics'],
      popular: true,
    },
    {
      name: 'Business',
      amount: 79,
      description: 'For teams',
      features: ['Everything in Pro', '500GB Storage', '24/7 Support', 'Team Management', 'Custom Domains', 'SLA'],
    },
  ];

  return (
    <section className="min-h-screen py-24 px-4 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
              Flexible Pricing
            </span>
          </h2>
          <p className="text-gray-600 text-lg">Choose the plan that works best for you</p>
        </div>

        <PricingTable theme="gradient" plans={plans} />
      </div>
    </section>
  );
}
