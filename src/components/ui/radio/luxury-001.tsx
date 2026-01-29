import { useState } from 'react'

export default function LuxuryRadio() {
  const [selected, setSelected] = useState('option1')
  const [plan, setPlan] = useState('pro')
  const [size, setSize] = useState('medium')

  const options = [
    { id: 'option1', label: 'Premier Selection' },
    { id: 'option2', label: 'Executive Choice' },
    { id: 'option3', label: 'Signature Option' },
    { id: 'option4', label: 'Elite Reserve', disabled: true },
  ]

  const plans = [
    { id: 'basic', name: 'Essential', price: '$99', period: '/month', description: 'Refined simplicity', features: ['Premium support', '5 projects', 'Advanced analytics'] },
    { id: 'pro', name: 'Distinguished', price: '$299', period: '/month', description: 'Elevated experience', features: ['Priority support', '25 projects', 'Custom integrations'] },
    { id: 'enterprise', name: 'Prestige', price: '$999', period: '/month', description: 'Ultimate excellence', features: ['White-glove service', 'Unlimited projects', 'Dedicated account'] },
  ]

  const sizes = [
    { id: 'small', label: 'Petite' },
    { id: 'medium', label: 'Classic' },
    { id: 'large', label: 'Grand' },
    { id: 'xlarge', label: 'Imperial' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black p-8 md:p-12">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Basic Radio Group */}
        <section className="space-y-6">
          <h3 className="text-xs font-light text-amber-400 uppercase tracking-[0.3em] flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-amber-400" />
            Selection
          </h3>
          <div className="space-y-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-lg border border-amber-900/20 backdrop-blur-sm">
            {options.map((opt) => (
              <label
                key={opt.id}
                className={`flex items-center gap-4 cursor-pointer group ${
                  opt.disabled ? 'cursor-not-allowed opacity-30' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => !opt.disabled && setSelected(opt.id)}
                  disabled={opt.disabled}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all relative ${
                    selected === opt.id
                      ? 'border-amber-400 bg-gradient-to-br from-amber-400/20 to-amber-600/20 shadow-[0_0_20px_rgba(251,191,36,0.3)]'
                      : 'border-amber-900/50 bg-slate-900/50 group-hover:border-amber-600/50 group-hover:shadow-[0_0_10px_rgba(251,191,36,0.1)]'
                  } ${opt.disabled ? '' : 'focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900'}`}
                >
                  {selected === opt.id && (
                    <>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                      <span className="absolute inset-0 rounded-full border border-amber-400 animate-ping opacity-50" />
                    </>
                  )}
                </button>
                <span className="text-amber-50 text-base font-light tracking-wide">{opt.label}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Horizontal Radio - Sizes */}
        <section className="space-y-6">
          <h3 className="text-xs font-light text-amber-400 uppercase tracking-[0.3em] flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-amber-400" />
            Dimension
          </h3>
          <div className="flex gap-4">
            {sizes.map((s) => (
              <label key={s.id} className="cursor-pointer group flex-1">
                <button
                  type="button"
                  onClick={() => setSize(s.id)}
                  className={`w-full py-4 border-2 rounded-lg flex items-center justify-center text-sm font-light tracking-widest transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                    size === s.id
                      ? 'border-amber-400 bg-gradient-to-br from-amber-400/20 to-amber-600/20 text-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.2)]'
                      : 'border-amber-900/30 bg-slate-900/50 text-amber-700 group-hover:border-amber-600/50 group-hover:bg-slate-800/50'
                  }`}
                >
                  {s.label}
                </button>
              </label>
            ))}
          </div>
        </section>

        {/* Card Style Radio */}
        <section className="space-y-6">
          <h3 className="text-xs font-light text-amber-400 uppercase tracking-[0.3em] flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-amber-400" />
            Membership Tier
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPlan(p.id)}
                className={`p-8 text-left border-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900 group ${
                  plan === p.id
                    ? 'border-amber-400 bg-gradient-to-br from-slate-800/80 to-slate-900/80 shadow-[0_0_30px_rgba(251,191,36,0.2)]'
                    : 'border-amber-900/20 bg-slate-900/50 hover:border-amber-600/50 hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-xl font-light text-amber-400 tracking-wide block mb-1">{p.name}</span>
                    <span className="text-xs text-amber-700 italic">{p.description}</span>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                      plan === p.id
                        ? 'border-amber-400 bg-amber-400/20 shadow-[0_0_10px_rgba(251,191,36,0.4)]'
                        : 'border-amber-900/50 bg-slate-900/50'
                    }`}
                  >
                    {plan === p.id && (
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                    )}
                  </div>
                </div>
                <div className="mb-6 pb-6 border-b border-amber-900/20">
                  <span className="text-4xl font-light text-amber-50">{p.price}</span>
                  <span className="text-sm text-amber-700">{p.period}</span>
                </div>
                <ul className="space-y-2">
                  {p.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-amber-600 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-amber-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </button>
            ))}
          </div>
        </section>

        {/* Elegant Tab Radio */}
        <section className="space-y-6">
          <h3 className="text-xs font-light text-amber-400 uppercase tracking-[0.3em] flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-amber-400" />
            Billing Cycle
          </h3>
          <div className="inline-flex border-b border-amber-900/30">
            {['Quarterly', 'Biannually', 'Annually'].map((freq, idx) => (
              <button
                key={freq}
                type="button"
                className={`px-8 py-4 text-sm font-light tracking-widest transition-all relative ${
                  idx === 1
                    ? 'text-amber-400'
                    : 'text-amber-700 hover:text-amber-500'
                }`}
              >
                {freq}
                {idx === 1 && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                )}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
