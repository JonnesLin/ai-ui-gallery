export default function NeonPricing() {
  const plans = [
    {
      name: 'BASIC',
      price: '$15',
      description: 'Start your journey',
      features: ['10 Projects', '20GB Storage', 'Community Support', 'Basic Analytics'],
      color: 'cyan',
      glowClass: 'shadow-[0_0_20px_rgba(6,182,212,0.5),inset_0_0_20px_rgba(6,182,212,0.1)]',
      borderClass: 'border-cyan-400',
      textClass: 'text-cyan-400',
      bgHover: 'hover:bg-cyan-400/10',
    },
    {
      name: 'PRO',
      price: '$45',
      description: 'Power user choice',
      features: ['Unlimited Projects', '200GB Storage', 'Priority Support', 'Pro Analytics', 'API Access', 'Custom Themes'],
      popular: true,
      color: 'fuchsia',
      glowClass: 'shadow-[0_0_30px_rgba(217,70,239,0.6),inset_0_0_30px_rgba(217,70,239,0.15)]',
      borderClass: 'border-fuchsia-400',
      textClass: 'text-fuchsia-400',
      bgHover: 'hover:bg-fuchsia-400/10',
    },
    {
      name: 'ELITE',
      price: '$99',
      description: 'Ultimate power',
      features: ['Everything in Pro', 'Unlimited Storage', '24/7 VIP Support', 'Enterprise Analytics', 'White Label', 'Dedicated Server'],
      color: 'lime',
      glowClass: 'shadow-[0_0_20px_rgba(163,230,53,0.5),inset_0_0_20px_rgba(163,230,53,0.1)]',
      borderClass: 'border-lime-400',
      textClass: 'text-lime-400',
      bgHover: 'hover:bg-lime-400/10',
    },
  ]

  return (
    <section className="min-h-screen py-24 px-4 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.1)_0%,transparent_70%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
            <span className="relative">
              PRICING
              <span className="absolute inset-0 blur-lg bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-lime-400 bg-clip-text text-transparent opacity-50">
                PRICING
              </span>
            </span>
          </h2>
          <p className="text-gray-500 text-lg tracking-wider">CHOOSE YOUR POWER LEVEL</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-gray-900/50 backdrop-blur-sm border-2 ${plan.borderClass} rounded-2xl p-8 transition-all duration-500 ${plan.glowClass} ${plan.bgHover} group`}
            >
              {plan.popular && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 ${plan.textClass} text-sm font-bold px-4 py-1 border-2 ${plan.borderClass} rounded-full bg-gray-950 shadow-[0_0_15px_rgba(217,70,239,0.5)]`}>
                  MOST POPULAR
                </div>
              )}
              <h3 className={`text-2xl font-black ${plan.textClass} tracking-wider`}>{plan.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{plan.description}</p>
              <div className="my-8 py-6 border-y border-gray-800">
                <span className={`text-6xl font-black ${plan.textClass}`} style={{
                  textShadow: plan.color === 'cyan' ? '0 0 20px rgba(6,182,212,0.8)' :
                              plan.color === 'fuchsia' ? '0 0 20px rgba(217,70,239,0.8)' :
                              '0 0 20px rgba(163,230,53,0.8)'
                }}>
                  {plan.price}
                </span>
                <span className="text-gray-500 text-lg">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <span className={`w-2 h-2 ${plan.textClass.replace('text', 'bg')} rounded-full mr-3 shadow-[0_0_10px_currentColor]`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 rounded-xl font-bold text-sm tracking-wider uppercase border-2 ${plan.borderClass} ${plan.textClass} bg-transparent transition-all duration-300 hover:bg-gradient-to-r ${
                  plan.color === 'cyan' ? 'hover:from-cyan-400/20 hover:to-cyan-400/5' :
                  plan.color === 'fuchsia' ? 'hover:from-fuchsia-400/20 hover:to-fuchsia-400/5' :
                  'hover:from-lime-400/20 hover:to-lime-400/5'
                }`}
                style={{
                  boxShadow: plan.color === 'cyan' ? '0 0 15px rgba(6,182,212,0.3)' :
                              plan.color === 'fuchsia' ? '0 0 15px rgba(217,70,239,0.3)' :
                              '0 0 15px rgba(163,230,53,0.3)'
                }}
              >
                Activate
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 text-sm tracking-wider">
            ALL PLANS INCLUDE QUANTUM ENCRYPTION
          </p>
        </div>
      </div>
    </section>
  )
}
