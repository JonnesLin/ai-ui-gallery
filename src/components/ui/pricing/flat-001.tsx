import { PricingTable } from './PricingTable';
import type { PricingPlan } from './types';

export default function FlatPricing() {
  const plans: PricingPlan[] = [
    {
      name: 'Free',
      amount: 0,
      description: 'For hobby projects',
      features: ['3 Projects', '1GB Storage', 'Community Forum', 'Basic Features'],
    },
    {
      name: 'Pro',
      amount: 25,
      description: 'For professionals',
      features: ['Unlimited Projects', '50GB Storage', 'Priority Support', 'All Features', 'API Access', 'Integrations'],
      popular: true,
    },
    {
      name: 'Team',
      amount: 75,
      description: 'For growing teams',
      features: ['Everything in Pro', '500GB Storage', 'Team Management', 'Advanced Security', 'SSO', 'Analytics'],
    },
  ];

  return (
    <section className="min-h-screen py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Pricing
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, fair pricing
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            No surprises. No hidden fees. Pick a plan and get started today.
          </p>
        </div>

        <PricingTable theme="flat" plans={plans} />

        <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>No credit card required</span>
          </div>
        </div>
      </div>
    </section>
  );
}
