export default function MonochromePricing() {
  const plans = [
    {
      name: 'Essential',
      price: '$19',
      description: 'Core functionality',
      features: ['10 Projects', '25GB Storage', 'Email Support', 'Standard API', 'Basic Reports'],
    },
    {
      name: 'Professional',
      price: '$49',
      description: 'Advanced tools',
      features: ['Unlimited Projects', '200GB Storage', 'Priority Support', 'Full API Access', 'Advanced Reports', 'Team Features'],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$129',
      description: 'Complete solution',
      features: ['Everything Unlimited', '2TB Storage', 'Dedicated Support', 'Custom API', 'Custom Reports', 'SSO & Security'],
    },
  ]

  return (
    <section className="min-h-screen py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4 tracking-tight">
            Pricing
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6" />
          <p className="text-gray-600 text-lg">Simple plans for every need</p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border-2 border-black">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative p-10 ${
                plan.popular ? 'bg-black text-white' : 'bg-white'
              } ${index < plans.length - 1 ? 'md:border-r-2 border-black' : ''}`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-0 bg-white text-black text-xs font-bold px-3 py-1">
                  POPULAR
                </span>
              )}
              <h3 className={`text-sm font-bold tracking-[0.2em] uppercase ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                {plan.name}
              </h3>
              <div className="mt-6 mb-2">
                <span className="text-6xl font-bold">{plan.price}</span>
              </div>
              <p className={`text-sm mb-10 ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                per month
              </p>
              <div className={`h-px w-full mb-10 ${plan.popular ? 'bg-gray-700' : 'bg-gray-200'}`} />
              <ul className="space-y-4 mb-12">
                {plan.features.map((feature) => (
                  <li key={feature} className={`flex items-center text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                    <span className={`mr-4 text-lg ${plan.popular ? 'text-white' : 'text-black'}`}>+</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 font-bold text-sm tracking-wider uppercase transition-all ${
                  plan.popular
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm tracking-wider">
            ALL PLANS INCLUDE 14-DAY FREE TRIAL
          </p>
        </div>
      </div>
    </section>
  )
}
