export default function FuturisticPricing() {
  const plans = [
    {
      name: 'CORE',
      price: '$19',
      description: 'Essential systems',
      features: ['10 Active Nodes', '50GB Quantum Storage', 'AI Assistant', 'Standard Bandwidth'],
      tier: 1,
    },
    {
      name: 'PRIME',
      price: '$59',
      description: 'Advanced capabilities',
      features: ['Unlimited Nodes', '500GB Quantum Storage', 'AI Co-pilot', 'Priority Bandwidth', 'Neural Link', 'Holographic UI'],
      popular: true,
      tier: 2,
    },
    {
      name: 'APEX',
      price: '$149',
      description: 'Maximum potential',
      features: ['Infinite Nodes', 'Unlimited Storage', 'AI Autopilot', 'Dedicated Channel', 'Mind Sync', 'Reality Engine'],
      tier: 3,
    },
  ]

  return (
    <section className="min-h-screen py-24 px-4 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/30 px-6 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-400 text-sm font-medium tracking-wider">SYSTEM ONLINE</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Select Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Protocol</span>
          </h2>
          <p className="text-slate-400 text-lg">Initialize your next evolution</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative group`}
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${
                plan.popular ? 'from-blue-500 to-purple-500' : 'from-slate-700 to-slate-600'
              } rounded-2xl opacity-50 blur group-hover:opacity-75 transition-opacity`} />
              <div className="relative bg-slate-900 rounded-2xl p-8 h-full">
                {plan.popular && (
                  <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                )}
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    OPTIMAL
                  </span>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
                    plan.tier === 1 ? 'from-slate-600 to-slate-700' :
                    plan.tier === 2 ? 'from-blue-500 to-purple-500' :
                    'from-amber-400 to-orange-500'
                  } flex items-center justify-center`}>
                    <span className="text-white font-bold">{plan.tier}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <p className="text-slate-500 text-xs">{plan.description}</p>
                  </div>
                </div>
                <div className="my-8 py-6 border-y border-slate-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-500">/cycle</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-slate-300 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full mr-3 ${
                        plan.popular ? 'bg-blue-400' : 'bg-slate-600'
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]'
                      : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
                  }`}
                >
                  Initialize
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-slate-500 text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Secured by quantum encryption</span>
          </div>
        </div>
      </div>
    </section>
  )
}
