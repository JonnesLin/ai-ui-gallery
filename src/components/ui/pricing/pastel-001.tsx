export default function PastelPricing() {
  const plans = [
    {
      name: 'Sprout',
      price: '$8',
      description: 'For personal use',
      features: ['5 Projects', '5GB Storage', 'Email Support', 'Basic Tools'],
      bgColor: 'bg-pink-100',
      accentColor: 'bg-pink-400',
      textColor: 'text-pink-600',
    },
    {
      name: 'Bloom',
      price: '$24',
      description: 'For growing teams',
      features: ['25 Projects', '50GB Storage', 'Priority Support', 'Pro Tools', 'Analytics', 'Integrations'],
      popular: true,
      bgColor: 'bg-violet-100',
      accentColor: 'bg-violet-400',
      textColor: 'text-violet-600',
    },
    {
      name: 'Garden',
      price: '$56',
      description: 'For organizations',
      features: ['Unlimited', '200GB Storage', '24/7 Support', 'All Tools', 'Custom Branding', 'API Access'],
      bgColor: 'bg-teal-100',
      accentColor: 'bg-teal-400',
      textColor: 'text-teal-600',
    },
  ]

  return (
    <section className="min-h-screen py-24 px-4 bg-gradient-to-b from-rose-50 to-sky-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-violet-200 text-violet-700 rounded-full text-sm font-medium mb-4">
            Simple Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Find your perfect plan
          </h2>
          <p className="text-gray-500 text-lg">No hidden fees, cancel anytime</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative ${plan.bgColor} rounded-[2rem] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.popular ? 'ring-4 ring-violet-300 ring-offset-4' : ''
              }`}
            >
              {plan.popular && (
                <span className={`absolute -top-3 left-1/2 -translate-x-1/2 ${plan.accentColor} text-white text-sm font-semibold px-5 py-1.5 rounded-full`}>
                  Most Loved
                </span>
              )}
              <div className={`w-14 h-14 ${plan.accentColor} rounded-2xl flex items-center justify-center mb-6`}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className={`text-xl font-bold ${plan.textColor}`}>{plan.name}</h3>
              <p className="text-gray-500 text-sm mt-1 mb-6">{plan.description}</p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-gray-800">{plan.price}</span>
                <span className="text-gray-400 text-sm">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <div className={`w-5 h-5 ${plan.accentColor} rounded-full flex items-center justify-center mr-3`}>
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 rounded-2xl font-semibold transition-all ${
                  plan.popular
                    ? `${plan.accentColor} text-white hover:opacity-90`
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
