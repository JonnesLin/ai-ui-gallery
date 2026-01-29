import { useState } from 'react';
import { Radio, RadioGroup } from './index';

export default function GlassmorphismRadio() {
  const [selected, setSelected] = useState('option1');
  const [plan, setPlan] = useState('pro');
  const [theme, setTheme] = useState('aurora');

  const options = [
    { id: 'option1', label: 'Crystal Clear' },
    { id: 'option2', label: 'Frosted Glass' },
    { id: 'option3', label: 'Ice Mist' },
    { id: 'option4', label: 'Vapor', disabled: true },
  ]

  const plans = [
    { id: 'basic', name: 'Starter', price: '$12', features: '5 Projects' },
    { id: 'pro', name: 'Professional', price: '$36', features: 'Unlimited Projects' },
    { id: 'enterprise', name: 'Enterprise', price: '$99', features: 'Custom Solutions' },
  ]

  const themes = [
    { id: 'aurora', gradient: 'from-emerald-400 via-cyan-400 to-blue-500' },
    { id: 'sunset', gradient: 'from-orange-400 via-pink-500 to-purple-600' },
    { id: 'ocean', gradient: 'from-blue-400 via-indigo-500 to-purple-500' },
    { id: 'forest', gradient: 'from-green-400 via-teal-500 to-cyan-500' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 md:p-12">
      <div className="max-w-2xl mx-auto space-y-12">
        {/* Basic Radio Group */}
        <section className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
          <h3 className="text-sm font-medium text-white/70 mb-6">Select Style</h3>
          <RadioGroup name="style" value={selected} onChange={setSelected}>
            {options.map((opt) => (
              <Radio
                key={opt.id}
                value={opt.id}
                theme="glassmorphism"
                label={opt.label}
                disabled={opt.disabled}
                color="primary"
                size="lg"
              />
            ))}
          </RadioGroup>
        </section>

        {/* Theme Selector - Compact */}
        <section className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
          <h3 className="text-sm font-medium text-white/70 mb-6">Theme Color</h3>
          <div className="flex gap-4">
            {themes.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTheme(t.id)}
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${t.gradient} transition-all duration-300 ${
                  theme === t.id
                    ? 'ring-4 ring-white/50 scale-110 shadow-lg'
                    : 'opacity-60 hover:opacity-100 hover:scale-105'
                } focus:outline-none`}
              >
                {theme === t.id && (
                  <span className="w-full h-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
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
          <h3 className="text-sm font-medium text-white/70">Choose Your Plan</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPlan(p.id)}
                className={`relative p-6 text-left rounded-2xl backdrop-blur-xl transition-all duration-300 focus:outline-none ${
                  plan === p.id
                    ? 'bg-white/25 border-2 border-white/50 shadow-2xl shadow-white/10 scale-105'
                    : 'bg-white/10 border border-white/20 hover:bg-white/15 hover:border-white/30'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-medium">{p.name}</span>
                  <div
                    className={`w-5 h-5 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 ${
                      plan === p.id
                        ? 'bg-white/40 border-2 border-white'
                        : 'bg-white/10 border border-white/40'
                    }`}
                  >
                    <span
                      className={`w-2.5 h-2.5 rounded-full bg-white transition-transform duration-300 ${
                        plan === p.id ? 'scale-100' : 'scale-0'
                      }`}
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-3xl font-light text-white">{p.price}</span>
                  <span className="text-white/50 text-sm">/mo</span>
                </div>
                <p className="text-sm text-white/60">{p.features}</p>
                {plan === p.id && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Pill Radio */}
        <section className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
          <h3 className="text-sm font-medium text-white/70 mb-6">Billing Cycle</h3>
          <div className="inline-flex backdrop-blur-md bg-white/10 rounded-full p-1.5 border border-white/20">
            {['Monthly', 'Quarterly', 'Yearly'].map((cycle) => (
              <button
                key={cycle}
                type="button"
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  cycle === 'Yearly'
                    ? 'bg-white/30 text-white shadow-lg'
                    : 'text-white/60 hover:text-white/90'
                }`}
              >
                {cycle}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
