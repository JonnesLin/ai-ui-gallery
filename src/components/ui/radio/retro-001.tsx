import { useState } from 'react'

export default function RetroRadio() {
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
    { id: 'basic', name: 'Basic', price: '$9', period: '/month', description: 'For individuals' },
    { id: 'pro', name: 'Pro', price: '$29', period: '/month', description: 'For small teams' },
    { id: 'enterprise', name: 'Enterprise', price: '$99', period: '/month', description: 'For organizations' },
  ]

  const sizes = [
    { id: 'small', label: 'S' },
    { id: 'medium', label: 'M' },
    { id: 'large', label: 'L' },
    { id: 'xlarge', label: 'XL' },
  ]

  return (
    <div className="min-h-screen bg-[#f5e6d3] p-8 md:p-12">
      <div className="max-w-2xl mx-auto space-y-16">
        {/* Basic Radio Group */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold text-[#8b4513] uppercase tracking-wider">
            Select Option
          </h3>
          <div className="space-y-3 bg-[#fff8e7] border-4 border-[#d4a574] rounded-lg p-6 shadow-[4px_4px_0_0_rgba(139,69,19,0.3)]">
            {options.map((opt) => (
              <label
                key={opt.id}
                className={`flex items-center gap-4 cursor-pointer group ${
                  opt.disabled ? 'cursor-not-allowed opacity-40' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => !opt.disabled && setSelected(opt.id)}
                  disabled={opt.disabled}
                  className={`w-6 h-6 rounded-full border-3 flex items-center justify-center transition-all ${
                    selected === opt.id
                      ? 'border-[#d2691e] bg-[#ff8c42] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)]'
                      : 'border-[#cd853f] bg-[#ffd699] group-hover:bg-[#ffe4b3] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)]'
                  } ${opt.disabled ? '' : 'focus:outline-none focus:ring-3 focus:ring-[#ff8c42] focus:ring-offset-2'}`}
                >
                  {selected === opt.id && (
                    <span className="w-3 h-3 rounded-full bg-[#8b4513] shadow-[0_1px_2px_rgba(0,0,0,0.3)]" />
                  )}
                </button>
                <span className="text-[#654321] text-base font-medium">{opt.label}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Horizontal Radio - Sizes */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold text-[#8b4513] uppercase tracking-wider">
            Size
          </h3>
          <div className="flex gap-4 bg-[#fff8e7] border-4 border-[#d4a574] rounded-lg p-6 shadow-[4px_4px_0_0_rgba(139,69,19,0.3)]">
            {sizes.map((s) => (
              <label key={s.id} className="cursor-pointer group">
                <button
                  type="button"
                  onClick={() => setSize(s.id)}
                  className={`w-14 h-14 rounded-full border-3 flex items-center justify-center text-lg font-bold transition-all focus:outline-none focus:ring-3 focus:ring-[#ff8c42] focus:ring-offset-2 ${
                    size === s.id
                      ? 'border-[#d2691e] bg-[#ff8c42] text-white shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)]'
                      : 'border-[#cd853f] bg-[#ffd699] text-[#8b4513] group-hover:bg-[#ffe4b3] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)]'
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
          <h3 className="text-sm font-bold text-[#8b4513] uppercase tracking-wider">
            Choose Plan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPlan(p.id)}
                className={`p-6 text-left border-4 rounded-lg transition-all focus:outline-none focus:ring-3 focus:ring-[#ff8c42] focus:ring-offset-2 ${
                  plan === p.id
                    ? 'border-[#d2691e] bg-[#ff8c42] text-white shadow-[4px_4px_0_0_rgba(139,69,19,0.4)]'
                    : 'border-[#d4a574] bg-[#fff8e7] text-[#654321] hover:bg-[#ffefcc] shadow-[2px_2px_0_0_rgba(139,69,19,0.2)]'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-base font-bold uppercase tracking-wide">{p.name}</span>
                  <div
                    className={`w-5 h-5 rounded-full border-3 flex items-center justify-center ${
                      plan === p.id ? 'border-white bg-white' : 'border-[#cd853f] bg-[#ffd699]'
                    }`}
                  >
                    {plan === p.id && (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#8b4513]" />
                    )}
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-3xl font-bold">{p.price}</span>
                  <span className="text-sm font-medium">{p.period}</span>
                </div>
                <p className="text-sm opacity-90">{p.description}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Tab Radio Buttons */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold text-[#8b4513] uppercase tracking-wider">
            Frequency
          </h3>
          <div className="inline-flex border-4 border-[#d4a574] rounded-lg overflow-hidden shadow-[4px_4px_0_0_rgba(139,69,19,0.3)]">
            {['Daily', 'Weekly', 'Monthly'].map((freq, idx) => (
              <button
                key={freq}
                type="button"
                className={`px-8 py-3 text-base font-bold transition-all ${
                  idx === 1
                    ? 'bg-[#ff8c42] text-white'
                    : 'bg-[#fff8e7] text-[#8b4513] hover:bg-[#ffefcc]'
                } ${idx > 0 ? 'border-l-4 border-[#d4a574]' : ''}`}
              >
                {freq}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
