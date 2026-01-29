export default function PlayfulPricing() {
  const plans = [
    {
      name: 'Tiny',
      price: '$7',
      description: 'Just getting started',
      features: ['3 Fun Projects', '5GB of Goodies', 'Email Buddies', 'Basic Magic'],
      emoji: '🌱',
      bgColor: 'bg-orange-400',
      rotation: '-rotate-2',
    },
    {
      name: 'Mighty',
      price: '$27',
      description: 'Power up your game',
      features: ['Infinite Projects', '100GB of Awesomeness', 'VIP Support', 'All the Magic', 'API Superpowers', 'Team Party'],
      popular: true,
      emoji: '🚀',
      bgColor: 'bg-pink-500',
      rotation: 'rotate-0',
    },
    {
      name: 'Mega',
      price: '$67',
      description: 'Go absolutely wild',
      features: ['Everything Ever', 'Unlimited Space', '24/7 Best Friends', 'Custom Everything', 'White Glove', 'Priority Lane'],
      emoji: '👑',
      bgColor: 'bg-violet-500',
      rotation: 'rotate-2',
    },
  ]

  return (
    <section className="min-h-screen py-24 px-4 bg-gradient-to-b from-yellow-200 via-pink-100 to-cyan-100 relative overflow-hidden">
      <div className="absolute top-10 left-10 text-6xl animate-bounce">✨</div>
      <div className="absolute top-20 right-20 text-4xl animate-pulse">🎈</div>
      <div className="absolute bottom-20 left-20 text-5xl animate-bounce delay-100">🎉</div>
      <div className="absolute bottom-10 right-10 text-4xl animate-pulse delay-200">⭐</div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block animate-bounce mb-4">
            <span className="text-6xl">🎪</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-4">
            Pick Your <span className="text-pink-500">Adventure!</span>
          </h2>
          <p className="text-gray-600 text-xl">No boring stuff, just pure awesomeness</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative ${plan.rotation} transition-transform hover:rotate-0 hover:scale-105 duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 -right-2 bg-yellow-400 text-gray-800 text-sm font-black px-4 py-2 rounded-full rotate-12 shadow-lg z-10">
                  🔥 HOT!
                </div>
              )}
              <div className={`${plan.bgColor} rounded-[2rem] p-8 text-white shadow-2xl border-4 border-white`}>
                <div className="text-5xl mb-4">{plan.emoji}</div>
                <h3 className="text-2xl font-black">{plan.name}</h3>
                <p className="text-white/80 mt-1">{plan.description}</p>
                <div className="my-6 py-4 border-y-2 border-white/30">
                  <span className="text-6xl font-black">{plan.price}</span>
                  <span className="text-white/70 text-lg">/mo</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span className="mr-2 text-xl">✓</span>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 bg-white text-gray-800 rounded-2xl font-black text-lg hover:bg-yellow-300 transition-colors shadow-lg transform hover:-translate-y-1">
                  Let&apos;s Go! 🎯
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg">
            🎁 All plans come with a <span className="font-bold text-pink-500">14-day free trial</span> - no credit card needed!
          </p>
        </div>
      </div>
    </section>
  )
}
