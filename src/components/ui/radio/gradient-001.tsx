import { useState } from 'react';
import { Radio, RadioGroup } from './index';

export default function GradientRadio() {
  const [selected, setSelected] = useState('option2');
  const [plan, setPlan] = useState('growth');
  const [color, setColor] = useState('purple');

  const options = [
    { id: 'option1', label: 'Personal Account' },
    { id: 'option2', label: 'Business Account' },
    { id: 'option3', label: 'Enterprise Account' },
    { id: 'option4', label: 'Developer Account', disabled: true },
  ]

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$9',
      gradient: 'from-cyan-400 to-blue-500',
      features: ['5 team members', '20GB storage']
    },
    {
      id: 'growth',
      name: 'Growth',
      price: '$29',
      gradient: 'from-violet-500 to-purple-600',
      features: ['25 team members', '100GB storage']
    },
    {
      id: 'scale',
      name: 'Scale',
      price: '$79',
      gradient: 'from-pink-500 to-rose-500',
      features: ['Unlimited members', '1TB storage']
    },
  ]

  const colors = [
    { id: 'blue', gradient: 'from-blue-400 to-cyan-400' },
    { id: 'purple', gradient: 'from-violet-500 to-purple-500' },
    { id: 'pink', gradient: 'from-pink-500 to-rose-400' },
    { id: 'orange', gradient: 'from-orange-400 to-amber-400' },
    { id: 'green', gradient: 'from-emerald-400 to-teal-400' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8 md:p-12">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Basic Radio Group */}
        <section className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
          <h3 className="text-sm font-medium text-white/60 mb-6">Account Type</h3>
          <RadioGroup name="account" value={selected} onChange={setSelected}>
            {options.map((opt) => (
              <Radio
                key={opt.id}
                value={opt.id}
                theme="gradient"
                label={opt.label}
                disabled={opt.disabled}
                color="primary"
                size="lg"
              />
            ))}
          </RadioGroup>
        </section>

        {/* Color Picker */}
        <section className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
          <h3 className="text-sm font-medium text-white/60 mb-6">Brand Color</h3>
          <div className="flex gap-4">
            {colors.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setColor(c.id)}
                className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${c.gradient} transition-all duration-300 focus:outline-none ${
                  color === c.id
                    ? 'ring-4 ring-white/30 scale-110 shadow-lg shadow-purple-500/25'
                    : 'opacity-70 hover:opacity-100 hover:scale-105'
                }`}
              >
                {color === c.id && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Card Style Radio */}
        <section className="space-y-6">
          <h3 className="text-sm font-medium text-white/60">Pricing Plans</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPlan(p.id)}
                className={`relative p-6 text-left rounded-3xl transition-all duration-300 focus:outline-none overflow-hidden ${
                  plan === p.id
                    ? 'bg-white/10 border-2 border-white/30 scale-105 shadow-2xl'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {plan === p.id && (
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${p.gradient}`} />
                )}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${p.gradient} text-white`}>
                    {p.name}
                  </span>
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
                      plan === p.id
                        ? `bg-gradient-to-r ${p.gradient}`
                        : 'border-2 border-white/30'
                    }`}
                  >
                    {plan === p.id && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="mb-4">
                  <span className={`text-4xl font-bold bg-gradient-to-r ${p.gradient} bg-clip-text text-transparent`}>
                    {p.price}
                  </span>
                  <span className="text-white/40">/month</span>
                </div>
                <ul className="space-y-2">
                  {p.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-white/60">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${p.gradient}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </button>
            ))}
          </div>
        </section>

        {/* Gradient Pills */}
        <section className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
          <h3 className="text-sm font-medium text-white/60 mb-6">Duration</h3>
          <div className="inline-flex gap-2">
            {['Monthly', 'Quarterly', 'Yearly'].map((dur, idx) => (
              <button
                key={dur}
                type="button"
                className={`px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
                  idx === 2
                    ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white/80'
                }`}
              >
                {dur}
                {idx === 2 && (
                  <span className="ml-2 px-2 py-0.5 text-xs bg-white/20 rounded-full">-20%</span>
                )}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
