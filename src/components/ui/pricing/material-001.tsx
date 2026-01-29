import { PricingTable } from './PricingTable';
import type { PricingPlan } from './types';

export default function MaterialPricing() {
  const plans: PricingPlan[] = [
    {
      name: 'Basic',
      amount: 12,
      description: 'Essential features for individuals',
      features: ['5 Projects', '10GB Cloud Storage', 'Email Support', 'Basic Analytics', 'Standard API'],
    },
    {
      name: 'Standard',
      amount: 36,
      description: 'Everything you need to grow',
      features: ['Unlimited Projects', '100GB Cloud Storage', 'Priority Support', 'Advanced Analytics', 'Full API Access', 'Team Collaboration'],
      popular: true,
    },
    {
      name: 'Premium',
      amount: 84,
      description: 'Advanced features for teams',
      features: ['Everything in Standard', '1TB Cloud Storage', '24/7 Phone Support', 'Custom Analytics', 'Dedicated Resources', 'SLA'],
    },
  ];

  return (
    <section className="min-h-screen py-24 px-4 bg-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium text-slate-900 mb-2">
            Pricing Plans
          </h2>
          <p className="text-slate-600">Select the plan that fits your needs</p>
        </div>

        <PricingTable theme="material" plans={plans} />

        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-medium text-slate-900">Need a custom plan?</h3>
              <p className="text-slate-500 text-sm">Contact our sales team for enterprise solutions</p>
            </div>
            <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-indigo-600 text-indigo-600 font-medium rounded hover:bg-indigo-50 transition-colors">
              Contact Sales
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
