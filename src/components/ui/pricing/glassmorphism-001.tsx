import { PricingTable } from './PricingTable';
import type { PricingPlan } from './types';

export default function GlassmorphismPricing() {
  const plans: PricingPlan[] = [
    {
      name: 'Starter',
      amount: 12,
      description: 'For individuals',
      features: ['10 Projects', '5GB Storage', 'Community Support', 'Basic Analytics'],
    },
    {
      name: 'Professional',
      amount: 39,
      description: 'For growing teams',
      features: ['Unlimited Projects', '100GB Storage', 'Priority Support', 'Advanced Analytics', 'API Access', 'Team Collaboration'],
      popular: true,
    },
    {
      name: 'Enterprise',
      amount: 149,
      description: 'For organizations',
      features: ['Everything in Pro', 'Unlimited Storage', '24/7 Support', 'Custom Integrations', 'SLA', 'Dedicated Manager'],
    },
  ];

  return (
    <section className="min-h-screen py-24 px-4 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-white/70 text-lg">Start free, upgrade when you need</p>
        </div>

        <PricingTable theme="glassmorphism" plans={plans} />
      </div>
    </section>
  );
}
