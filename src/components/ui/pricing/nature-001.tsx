export default function NaturePricing() {
  const plans = [
    {
      name: 'Seed',
      price: '$12',
      description: 'Plant your first idea',
      features: ['5 Projects', '10GB Storage', 'Email Support', 'Basic Analytics'],
      icon: '🌱',
      bgGradient: 'from-lime-50 to-green-100',
      accentColor: 'bg-lime-500',
      borderColor: 'border-lime-300',
    },
    {
      name: 'Tree',
      price: '$39',
      description: 'Grow your business',
      features: ['Unlimited Projects', '100GB Storage', 'Priority Support', 'Advanced Analytics', 'API Access', 'Integrations'],
      popular: true,
      icon: '🌳',
      bgGradient: 'from-emerald-50 to-teal-100',
      accentColor: 'bg-emerald-500',
      borderColor: 'border-emerald-400',
    },
    {
      name: 'Forest',
      price: '$89',
      description: 'Scale without limits',
      features: ['Everything in Tree', 'Unlimited Storage', '24/7 Support', 'Custom Solutions', 'Dedicated Manager', 'SLA'],
      icon: '🌲',
      bgGradient: 'from-teal-50 to-cyan-100',
      accentColor: 'bg-teal-600',
      borderColor: 'border-teal-400',
    },
  ]

  return (
    <section className="min-h-screen py-24 px-4 bg-gradient-to-b from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-sky-100 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#166534" fillOpacity="0.2"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-6">
            <span className="text-green-600 text-sm font-medium">🌿 Eco-friendly hosting included</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Nurture Your Growth
          </h2>
          <p className="text-green-700/70 text-lg">Start small, grow naturally</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-gradient-to-br ${plan.bgGradient} rounded-3xl p-8 border-2 ${plan.borderColor} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular ? 'ring-4 ring-emerald-200 ring-offset-4 ring-offset-emerald-50' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-sm font-semibold px-6 py-1.5 rounded-full shadow-lg">
                  Best Value
                </div>
              )}
              <div className="text-5xl mb-4">{plan.icon}</div>
              <h3 className="text-2xl font-bold text-green-900">{plan.name}</h3>
              <p className="text-green-700/70 text-sm mt-1">{plan.description}</p>
              <div className="my-8">
                <span className="text-5xl font-bold text-green-900">{plan.price}</span>
                <span className="text-green-600/70">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-green-800">
                    <svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? `${plan.accentColor} text-white hover:opacity-90 shadow-lg`
                    : 'bg-white/70 text-green-800 hover:bg-white border border-green-200'
                }`}
              >
                Start Growing
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-green-100/50 rounded-2xl p-6 backdrop-blur-sm">
          <p className="text-green-700">
            🌍 We plant a tree for every subscription. <span className="font-semibold">12,847 trees planted</span> so far!
          </p>
        </div>
      </div>
    </section>
  )
}
