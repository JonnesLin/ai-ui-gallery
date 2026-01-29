export default function BrutalistPricing() {
  const plans = [
    {
      name: 'BASIC',
      price: '$9',
      description: 'Essential features',
      features: ['5 PROJECTS', '2GB STORAGE', 'EMAIL SUPPORT', 'BASIC API'],
      color: 'bg-yellow-400',
      borderColor: 'border-yellow-400',
    },
    {
      name: 'PRO',
      price: '$39',
      description: 'For power users',
      features: ['UNLIMITED PROJECTS', '100GB STORAGE', 'PRIORITY SUPPORT', 'FULL API ACCESS', 'ANALYTICS'],
      popular: true,
      color: 'bg-lime-400',
      borderColor: 'border-lime-400',
    },
    {
      name: 'AGENCY',
      price: '$99',
      description: 'For teams',
      features: ['EVERYTHING IN PRO', 'UNLIMITED STORAGE', '24/7 SUPPORT', 'WHITE LABEL', 'CUSTOM DOMAIN'],
      color: 'bg-cyan-400',
      borderColor: 'border-cyan-400',
    },
  ]

  return (
    <section className="min-h-screen py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-6xl md:text-8xl font-black text-black uppercase tracking-tighter">
            PRICING
          </h2>
          <div className="h-2 bg-black w-32 mt-4" />
          <p className="text-xl mt-6 font-mono uppercase">No bullshit. Just value.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-0">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative border-4 border-black p-8 ${
                plan.popular ? '-mt-4 -mb-4 z-10 bg-black text-white' : 'bg-white'
              } ${index > 0 ? 'md:-ml-1' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-6 -right-2 bg-red-500 text-white text-xs font-black px-3 py-2 rotate-12 uppercase">
                  Best Deal!
                </div>
              )}
              <div className={`inline-block ${plan.color} px-3 py-1 mb-4`}>
                <span className="text-black font-black text-sm">{plan.name}</span>
              </div>
              <p className={`text-sm font-mono mb-4 ${plan.popular ? 'text-gray-400' : 'text-gray-600'}`}>
                {plan.description}
              </p>
              <div className="mb-8">
                <span className="text-7xl font-black">{plan.price}</span>
                <span className={`text-lg font-mono ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>/mo</span>
              </div>
              <ul className="space-y-3 mb-8 font-mono text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <span className={`mr-3 text-lg ${plan.popular ? 'text-lime-400' : 'text-black'}`}>+</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 font-black uppercase text-sm transition-all border-4 ${
                  plan.popular
                    ? 'bg-lime-400 border-lime-400 text-black hover:bg-white hover:border-white'
                    : 'bg-black border-black text-white hover:bg-white hover:text-black'
                }`}
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t-4 border-black pt-6">
          <p className="font-mono text-sm uppercase">
            * All prices in USD. Billed monthly. Cancel anytime. No questions asked.
          </p>
        </div>
      </div>
    </section>
  )
}
