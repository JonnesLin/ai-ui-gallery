export default function RetroPricing() {
  const plans = [
    {
      name: 'Bronze',
      price: '$12',
      description: 'For beginners',
      features: ['5 Projects', '5GB Storage', 'Email Support', 'Basic Features'],
      bgColor: 'bg-amber-100',
      accentColor: 'bg-amber-600',
    },
    {
      name: 'Silver',
      price: '$36',
      description: 'Most popular',
      features: ['25 Projects', '50GB Storage', 'Priority Support', 'Pro Features', 'API Access'],
      popular: true,
      bgColor: 'bg-slate-200',
      accentColor: 'bg-slate-600',
    },
    {
      name: 'Gold',
      price: '$72',
      description: 'For champions',
      features: ['Unlimited', '500GB Storage', '24/7 Support', 'All Features', 'Custom Branding'],
      bgColor: 'bg-yellow-100',
      accentColor: 'bg-yellow-600',
    },
  ]

  return (
    <section className="min-h-screen py-24 px-4 bg-orange-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23d97706\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-600 text-white px-6 py-2 rotate-[-2deg] mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="font-bold text-sm tracking-wider">LIMITED TIME OFFER!</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif', textShadow: '3px 3px 0 #fbbf24' }}>
            Choose Your Plan
          </h2>
          <p className="text-gray-700 text-lg italic">Quality service since 1985</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative ${plan.bgColor} border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1`}
            >
              {plan.popular && (
                <div className="absolute -top-4 -right-4 bg-red-500 text-white w-20 h-20 rounded-full flex items-center justify-center rotate-12 border-4 border-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-xs font-black text-center leading-tight">BEST<br/>VALUE!</span>
                </div>
              )}
              <div className={`${plan.accentColor} text-white py-3 border-b-4 border-gray-900`}>
                <h3 className="text-xl font-black text-center uppercase tracking-wider">{plan.name}</h3>
              </div>
              <div className="p-8">
                <p className="text-center text-gray-600 italic mb-4">{plan.description}</p>
                <div className="text-center mb-6 py-4 border-y-2 border-dashed border-gray-400">
                  <span className="text-5xl font-black text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-800">
                      <span className="mr-3 text-xl">&#10003;</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 ${plan.accentColor} text-white font-black uppercase tracking-wider border-4 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all`}>
                  Sign Up Now!
                </button>
              </div>
              <div className="bg-gray-900 text-white text-center py-2 text-xs">
                <span className="animate-pulse">&#9733; SATISFACTION GUARANTEED &#9733;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
