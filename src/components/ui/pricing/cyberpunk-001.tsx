export default function CyberpunkPricing() {
  const plans = [
    {
      name: 'RUNNER',
      price: '$15',
      description: 'Street-level access',
      features: ['10 Ops', '20GB Deck Space', 'Basic ICE', 'Community Net'],
      color: 'text-cyan-400',
      borderColor: 'border-cyan-400',
      glowColor: 'shadow-cyan-400/30',
    },
    {
      name: 'NETRUNNER',
      price: '$59',
      description: 'Corporate grade',
      features: ['Unlimited Ops', '500GB Deck Space', 'Military ICE', 'Priority Net', 'Neural Link', 'Data Mining'],
      popular: true,
      color: 'text-fuchsia-500',
      borderColor: 'border-fuchsia-500',
      glowColor: 'shadow-fuchsia-500/30',
    },
    {
      name: 'GHOST',
      price: '$149',
      description: 'Black ops tier',
      features: ['Infinite Ops', 'Quantum Storage', 'AI Defense', 'Dark Net Access', 'Zero Trace', 'Custom Implants'],
      color: 'text-yellow-400',
      borderColor: 'border-yellow-400',
      glowColor: 'shadow-yellow-400/30',
    },
  ]

  return (
    <section className="min-h-screen py-24 px-4 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `linear-gradient(transparent 50%, rgba(0, 255, 255, 0.05) 50%)`,
        backgroundSize: '100% 4px'
      }} />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 mb-4 tracking-tighter">
            ACCESS_TIERS
          </h2>
          <p className="text-cyan-400/70 font-mono text-sm tracking-widest">
            // SELECT YOUR CLEARANCE LEVEL
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-gray-900/80 backdrop-blur-sm border-2 ${plan.borderColor} p-8 clip-corners group hover:shadow-[0_0_30px] ${plan.glowColor} transition-all duration-500`}
              style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
            >
              {plan.popular && (
                <div className="absolute -top-px left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent" />
              )}
              {plan.popular && (
                <span className={`absolute -top-3 left-1/2 -translate-x-1/2 bg-fuchsia-500 text-black text-xs font-black px-4 py-1 font-mono`}>
                  [RECOMMENDED]
                </span>
              )}
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-2 h-2 ${plan.color.replace('text', 'bg')} animate-pulse`} />
                <h3 className={`text-xl font-black ${plan.color} font-mono tracking-wider`}>{plan.name}</h3>
              </div>
              <p className="text-gray-500 text-xs font-mono mb-6">{plan.description}</p>
              <div className="mb-8 py-4 border-y border-gray-800">
                <span className={`text-5xl font-black ${plan.color}`}>{plan.price}</span>
                <span className="text-gray-600 text-sm font-mono">/CYCLE</span>
              </div>
              <ul className="space-y-3 mb-8 font-mono text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-400">
                    <span className={`mr-3 ${plan.color}`}>&gt;</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 border-2 ${plan.borderColor} ${plan.color} font-black font-mono text-sm tracking-wider relative overflow-hidden group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-white/10 group-hover:to-transparent transition-all`}
                style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
              >
                <span className="relative z-10">JACK_IN</span>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 font-mono text-xs">
            [!] WARNING: Unauthorized access will result in neural feedback
          </p>
        </div>
      </div>
    </section>
  )
}
