import { useState } from 'react'

export default function CorporateRadio() {
  const [selected, setSelected] = useState('option1')
  const [plan, setPlan] = useState('pro')
  const [size, setSize] = useState('medium')

  const options = [
    { id: 'option1', label: 'Option One' },
    { id: 'option2', label: 'Option Two' },
    { id: 'option3', label: 'Option Three' },
    { id: 'option4', label: 'Option Four', disabled: true },
  ]

  const plans = [
    { id: 'basic', name: 'Basic', price: '$9', period: '/month', description: 'For individuals', features: '5 projects' },
    { id: 'pro', name: 'Professional', price: '$29', period: '/month', description: 'For small teams', features: '25 projects' },
    { id: 'enterprise', name: 'Enterprise', price: '$99', period: '/month', description: 'For organizations', features: 'Unlimited' },
  ]

  const sizes = [
    { id: 'small', label: 'Small' },
    { id: 'medium', label: 'Medium' },
    { id: 'large', label: 'Large' },
    { id: 'xlarge', label: 'X-Large' },
  ]

  return (
    <div className="min-h-screen bg-slate-50 p-8 md:p-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Basic Radio Group */}
        <section className="space-y-4 bg-white p-8 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
            Select Option
          </h3>
          <div className="space-y-3">
            {options.map((opt) => (
              <label
                key={opt.id}
                className={`flex items-center gap-3 cursor-pointer group p-3 rounded-md transition-colors ${
                  opt.disabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-slate-50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => !opt.disabled && setSelected(opt.id)}
                  disabled={opt.disabled}
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    selected === opt.id
                      ? 'border-blue-600 bg-blue-600'
                      : 'border-slate-300 bg-white group-hover:border-blue-400'
                  } ${opt.disabled ? '' : 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'}`}
                >
                  {selected === opt.id && (
                    <span className="w-2 h-2 rounded-full bg-white" />
                  )}
                </button>
                <span className="text-slate-700 text-base">{opt.label}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Horizontal Radio - Sizes */}
        <section className="space-y-4 bg-white p-8 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
            Size Selection
          </h3>
          <div className="flex gap-4">
            {sizes.map((s) => (
              <label key={s.id} className="cursor-pointer group flex-1">
                <button
                  type="button"
                  onClick={() => setSize(s.id)}
                  className={`w-full py-3 px-4 border-2 rounded-md flex items-center justify-center text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    size === s.id
                      ? 'border-blue-600 bg-blue-50 text-blue-700'
                      : 'border-slate-300 bg-white text-slate-600 group-hover:border-blue-400 group-hover:bg-slate-50'
                  }`}
                >
                  {s.label}
                </button>
              </label>
            ))}
          </div>
        </section>

        {/* Card Style Radio */}
        <section className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
            Choose Your Plan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPlan(p.id)}
                className={`p-6 text-left border-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  plan === p.id
                    ? 'border-blue-600 bg-blue-50 shadow-md'
                    : 'border-slate-200 bg-white hover:border-blue-400 hover:shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-base font-semibold text-slate-900 block">{p.name}</span>
                    <span className="text-xs text-slate-500">{p.description}</span>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                      plan === p.id ? 'border-blue-600 bg-blue-600' : 'border-slate-300 bg-white'
                    }`}
                  >
                    {plan === p.id && (
                      <span className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-slate-900">{p.price}</span>
                  <span className="text-sm text-slate-500">{p.period}</span>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <span className="text-xs text-slate-600 font-medium">{p.features}</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Tab Radio Buttons */}
        <section className="space-y-4 bg-white p-8 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
            Billing Frequency
          </h3>
          <div className="inline-flex w-full border-b border-slate-200">
            {['Monthly', 'Quarterly', 'Annually'].map((freq, idx) => (
              <button
                key={freq}
                type="button"
                className={`flex-1 py-3 text-base font-medium transition-all relative ${
                  idx === 1
                    ? 'text-blue-600'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {freq}
                {idx === 1 && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                )}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
