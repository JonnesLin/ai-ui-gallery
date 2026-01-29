export default function LuxuryPricing() {
  const plans = [
    {
      name: 'Silver',
      price: '$99',
      description: 'Refined essentials',
      features: ['10 Premium Projects', '50GB Secure Storage', 'Concierge Support', 'Priority Processing'],
    },
    {
      name: 'Gold',
      price: '$299',
      description: 'Elevated experience',
      features: ['Unlimited Projects', '500GB Elite Storage', 'Dedicated Concierge', 'White-Glove Onboarding', 'Advanced Analytics', 'Custom Integrations'],
      popular: true,
    },
    {
      name: 'Platinum',
      price: '$799',
      description: 'Unparalleled excellence',
      features: ['Unlimited Everything', 'Infinite Storage', 'Private Support Team', 'Bespoke Solutions', 'Enterprise SLA', 'Executive Dashboard'],
    },
  ]

  return (
    <section className="min-h-screen py-24 px-4 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 relative">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b8860b' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
            <span className="text-amber-500 text-sm tracking-[0.3em] uppercase font-light">Exclusive Membership</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wide">
            Select Your <span className="font-semibold text-amber-400">Tier</span>
          </h2>
          <p className="text-stone-400 text-lg font-light tracking-wide">Experience the difference of premium service</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative group ${
                plan.popular ? 'md:-mt-8 md:mb-8' : ''
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b from-amber-500/20 to-transparent rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-amber-600 to-amber-400 text-black text-xs tracking-[0.2em] uppercase px-6 py-2 font-medium">
                    Most Selected
                  </div>
                </div>
              )}
              <div className={`relative bg-gradient-to-b from-stone-800/50 to-stone-900/50 backdrop-blur-sm border ${
                plan.popular ? 'border-amber-500/50' : 'border-stone-700/50'
              } p-10`}>
                <div className="text-center">
                  <h3 className="text-2xl font-light text-white tracking-wider">{plan.name}</h3>
                  <p className="text-stone-500 text-sm mt-2 tracking-wide font-light">{plan.description}</p>
                  <div className="my-8 py-6 border-y border-stone-700/50">
                    <span className="text-5xl font-light text-white">{plan.price}</span>
                    <span className="text-stone-500 text-sm tracking-wide"> / month</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-stone-300 font-light">
                      <svg className="w-4 h-4 mr-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-4 text-sm tracking-[0.15em] uppercase font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-black hover:from-amber-500 hover:to-amber-400'
                      : 'border border-stone-600 text-stone-300 hover:border-amber-500 hover:text-amber-500'
                  }`}
                >
                  Begin Journey
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-stone-600 text-sm tracking-wide font-light">
            Complimentary consultation included with all membership tiers
          </p>
        </div>
      </div>
    </section>
  )
}
