export default function CorporatePricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: 'per user/month',
      description: 'Ideal for small teams getting started',
      features: [
        { name: 'Up to 10 team members', included: true },
        { name: '50GB cloud storage', included: true },
        { name: 'Basic analytics', included: true },
        { name: 'Email support', included: true },
        { name: 'Advanced security', included: false },
        { name: 'Custom integrations', included: false },
      ],
    },
    {
      name: 'Professional',
      price: '$59',
      period: 'per user/month',
      description: 'Best for growing businesses',
      features: [
        { name: 'Up to 50 team members', included: true },
        { name: '500GB cloud storage', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Priority support', included: true },
        { name: 'Advanced security', included: true },
        { name: 'Custom integrations', included: false },
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact sales',
      description: 'For large-scale deployments',
      features: [
        { name: 'Unlimited team members', included: true },
        { name: 'Unlimited storage', included: true },
        { name: 'Enterprise analytics', included: true },
        { name: 'Dedicated support', included: true },
        { name: 'Advanced security', included: true },
        { name: 'Custom integrations', included: true },
      ],
    },
  ]

  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
            Pricing & Plans
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Scale your business with our flexible pricing options. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 bg-white rounded-lg shadow-xl overflow-hidden border border-slate-200">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative p-8 ${
                plan.popular ? 'bg-blue-600 text-white' : 'bg-white'
              } ${index < plans.length - 1 && !plan.popular ? 'md:border-r border-slate-200' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-blue-700 text-center py-2 text-sm font-medium">
                  Recommended
                </div>
              )}
              <div className={plan.popular ? 'mt-8' : ''}>
                <h3 className={`text-lg font-semibold ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mt-1 ${plan.popular ? 'text-blue-100' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
                <div className="mt-6 mb-8">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ml-2 ${plan.popular ? 'text-blue-100' : 'text-slate-500'}`}>
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-center text-sm">
                      {feature.included ? (
                        <svg className={`w-5 h-5 mr-3 ${plan.popular ? 'text-blue-200' : 'text-blue-600'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className={`w-5 h-5 mr-3 ${plan.popular ? 'text-blue-300' : 'text-slate-300'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                      <span className={feature.included ? '' : plan.popular ? 'text-blue-200' : 'text-slate-400'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-md font-medium transition-colors ${
                    plan.popular
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            Need help choosing? <a href="#" className="text-blue-600 font-medium hover:underline">Talk to our sales team</a>
          </p>
        </div>
      </div>
    </section>
  )
}
