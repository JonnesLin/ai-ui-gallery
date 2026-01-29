import { PricingTable } from './PricingTable';
import type { PricingPlan } from './types';

export default function NeumorphismPricing() {
  const plans: PricingPlan[] = [
    {
      name: 'Basic',
      amount: 15,
      description: 'For starters',
      features: ['5 Projects', '10GB Storage', 'Email Support', 'Basic Reports'],
    },
    {
      name: 'Pro',
      amount: 45,
      description: 'Most popular choice',
      features: ['25 Projects', '100GB Storage', 'Priority Support', 'Advanced Reports', 'API Access', 'Integrations'],
      popular: true,
    },
    {
      name: 'Team',
      amount: 99,
      description: 'For larger teams',
      features: ['Unlimited Projects', 'Unlimited Storage', '24/7 Support', 'Custom Reports', 'Admin Controls', 'SSO'],
    },
  ];

  return (
    <section className="min-h-screen py-24 px-4 bg-[#e0e5ec]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-700 mb-4">
            Pricing Plans
          </h2>
          <p className="text-gray-500 text-lg">Select the perfect plan for your needs</p>
        </div>

        <PricingTable theme="neumorphism" plans={plans} />
      </div>
    </section>
  );
}
