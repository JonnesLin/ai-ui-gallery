export default function ThreeDPricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$14',
      description: 'For individuals',
      features: ['5 Projects', '10GB Storage', 'Email Support', 'Basic Tools'],
      bgColor: 'bg-blue-500',
      shadowColor: 'shadow-blue-700/50',
      faceColor: 'bg-blue-600',
    },
    {
      name: 'Business',
      price: '$44',
      description: 'For teams',
      features: ['50 Projects', '100GB Storage', 'Priority Support', 'Pro Tools', 'Analytics', 'Integrations'],
      popular: true,
      bgColor: 'bg-violet-500',
      shadowColor: 'shadow-violet-700/50',
      faceColor: 'bg-violet-600',
    },
    {
      name: 'Enterprise',
      price: '$94',
      description: 'For organizations',
      features: ['Unlimited', '1TB Storage', '24/7 Support', 'All Tools', 'Custom', 'SLA'],
      bgColor: 'bg-rose-500',
      shadowColor: 'shadow-rose-700/50',
      faceColor: 'bg-rose-600',
    },
  ]

  return (
    <section className="min-h-screen py-24 px-4 bg-gradient-to-br from-slate-100 to-slate-200" style={{ perspective: '1200px' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-800 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-slate-600 text-lg">Flexible pricing for every stage</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative group transition-all duration-500 hover:-translate-y-4`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 bg-amber-400 text-amber-900 text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                  BEST VALUE
                </div>
              )}
              <div
                className={`relative ${plan.bgColor} rounded-2xl p-8 text-white transition-all duration-500 group-hover:shadow-2xl ${plan.shadowColor}`}
                style={{
                  transform: 'rotateX(5deg)',
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 45px 60px -15px rgba(0, 0, 0, 0.15)',
                }}
              >
                <div
                  className={`absolute bottom-0 left-0 right-0 h-8 ${plan.faceColor} rounded-b-2xl`}
                  style={{
                    transform: 'rotateX(-90deg) translateZ(16px)',
                    transformOrigin: 'bottom',
                  }}
                />
                <div
                  className={`absolute top-0 bottom-0 right-0 w-4 ${plan.faceColor}`}
                  style={{
                    transform: 'rotateY(90deg) translateZ(-8px)',
                    transformOrigin: 'right',
                    borderRadius: '0 16px 16px 0',
                  }}
                />

                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-white/70 text-sm">{plan.description}</p>
                <div className="my-8 py-6 border-y border-white/20">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-white/70">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-white/90">
                      <svg className="w-5 h-5 mr-3 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white hover:text-slate-800 transition-all duration-300"
                  style={{
                    transform: 'translateZ(20px)',
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-500">
            All plans include a 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  )
}
