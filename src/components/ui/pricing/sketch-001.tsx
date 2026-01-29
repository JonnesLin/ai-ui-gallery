export default function SketchPricing() {
  const plans = [
    {
      name: 'Doodle',
      price: '$8',
      description: 'For casual creators',
      features: ['5 Creative Projects', '5GB Canvas Space', 'Email Support', 'Basic Brushes'],
    },
    {
      name: 'Sketch',
      price: '$28',
      description: 'For serious artists',
      features: ['Unlimited Projects', '100GB Canvas Space', 'Priority Support', 'Pro Brushes', 'Layer Magic', 'Color Lab'],
      popular: true,
    },
    {
      name: 'Masterpiece',
      price: '$68',
      description: 'For studios & teams',
      features: ['Everything Unlocked', 'Infinite Canvas', '24/7 Art Directors', 'Custom Brushes', 'Team Gallery', 'Print Ready'],
    },
  ]

  return (
    <section className="min-h-screen py-24 px-4 bg-amber-50 relative" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d97706' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`
    }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Caveat, cursive, sans-serif' }}>
            Pick your plan!
          </h2>
          <p className="text-gray-600 text-xl" style={{ fontFamily: 'Caveat, cursive, sans-serif' }}>
            ~ hand-crafted with love ~
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white p-8 transition-transform hover:-translate-y-2 hover:rotate-1 duration-300`}
              style={{
                border: '3px solid #374151',
                borderRadius: '20px 5px 20px 5px',
                boxShadow: '6px 6px 0 #374151',
              }}
            >
              {plan.popular && (
                <div className="absolute -top-6 -right-4 bg-red-400 text-white px-4 py-2 rotate-12" style={{
                  border: '2px solid #374151',
                  borderRadius: '5px 15px 5px 15px',
                }}>
                  <span className="font-bold" style={{ fontFamily: 'Caveat, cursive, sans-serif' }}>Popular!</span>
                </div>
              )}
              <div className="mb-6">
                <svg className="w-12 h-12 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19l7-7 3 3-7 7-3-3z" />
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                  <path d="M2 2l7.586 7.586" />
                  <circle cx="11" cy="11" r="2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1" style={{ fontFamily: 'Caveat, cursive, sans-serif' }}>
                {plan.name}
              </h3>
              <p className="text-gray-500 text-sm mb-6">{plan.description}</p>
              <div className="mb-8" style={{ borderBottom: '2px dashed #9ca3af', paddingBottom: '1.5rem' }}>
                <span className="text-5xl font-bold text-gray-800">{plan.price}</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span style={{ fontFamily: 'Caveat, cursive, sans-serif', fontSize: '1.1rem' }}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 font-bold transition-all ${
                  plan.popular
                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                    : 'bg-amber-100 text-gray-800 hover:bg-amber-200'
                }`}
                style={{
                  border: '3px solid #374151',
                  borderRadius: '10px 3px 10px 3px',
                  fontFamily: 'Caveat, cursive, sans-serif',
                  fontSize: '1.25rem',
                }}
              >
                Choose This One!
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600" style={{ fontFamily: 'Caveat, cursive, sans-serif', fontSize: '1.25rem' }}>
            * All plans include a 14-day free trial! No strings attached ;)
          </p>
        </div>
      </div>
    </section>
  )
}
