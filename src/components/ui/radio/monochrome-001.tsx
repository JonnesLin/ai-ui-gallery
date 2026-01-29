import { useState } from 'react'

export default function MonochromeRadio() {
  const [selected, setSelected] = useState('option1')
  const [plan, setPlan] = useState('pro')
  const [size, setSize] = useState('medium')

  const options = [
    { id: 'option1', label: 'Primary Selection' },
    { id: 'option2', label: 'Secondary Selection' },
    { id: 'option3', label: 'Tertiary Selection' },
    { id: 'option4', label: 'Disabled Selection', disabled: true },
  ]

  const plans = [
    { id: 'basic', name: 'Starter', price: '19', period: 'monthly', description: 'Essential features included' },
    { id: 'pro', name: 'Professional', price: '49', period: 'monthly', description: 'Advanced capabilities' },
    { id: 'enterprise', name: 'Enterprise', price: '99', period: 'monthly', description: 'Complete solution' },
  ]

  const sizes = [
    { id: 'small', label: 'S', desc: 'Compact' },
    { id: 'medium', label: 'M', desc: 'Standard' },
    { id: 'large', label: 'L', desc: 'Spacious' },
    { id: 'xlarge', label: 'XL', desc: 'Maximum' },
  ]

  return (
    <div className="min-h-screen bg-black p-8 md:p-12">
      <div className="max-w-2xl mx-auto space-y-16">
        {/* Basic Radio Group */}
        <section className="space-y-6">
          <h3 className="text-xs font-mono tracking-[0.3em] text-white uppercase border-l-2 border-white pl-3">
            Make Selection
          </h3>
          <div className="space-y-0 border-2 border-white">
            {options.map((opt, idx) => (
              <label
                key={opt.id}
                className={`flex items-center gap-4 p-4 cursor-pointer group transition-all duration-200 ${
                  opt.disabled ? 'cursor-not-allowed opacity-30' : 'hover:bg-white hover:text-black'
                } ${idx !== 0 ? 'border-t-2 border-white' : ''} ${
                  selected === opt.id ? 'bg-white text-black' : 'text-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => !opt.disabled && setSelected(opt.id)}
                  disabled={opt.disabled}
                  className={`w-6 h-6 border-2 flex items-center justify-center transition-all duration-200 ${
                    selected === opt.id
                      ? 'border-black bg-black'
                      : 'border-white group-hover:border-black'
                  } ${opt.disabled ? '' : 'focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black'}`}
                >
                  <span
                    className={`w-3 h-3 bg-white transition-transform duration-200 ${
                      selected === opt.id ? 'scale-100' : 'scale-0'
                    }`}
                  />
                </button>
                <span className="text-sm font-mono tracking-wide uppercase">
                  {opt.label}
                </span>
                {selected === opt.id && (
                  <span className="ml-auto text-[10px] font-mono tracking-widest">●</span>
                )}
              </label>
            ))}
          </div>
        </section>

        {/* Horizontal Radio - Grid */}
        <section className="space-y-6">
          <h3 className="text-xs font-mono tracking-[0.3em] text-white uppercase border-l-2 border-white pl-3">
            Size Options
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {sizes.map((s) => (
              <label key={s.id} className="cursor-pointer group">
                <button
                  type="button"
                  onClick={() => setSize(s.id)}
                  className={`w-full aspect-square border-2 transition-all duration-200 flex flex-col items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black ${
                    size === s.id
                      ? 'border-white bg-white text-black'
                      : 'border-white text-white hover:bg-white hover:text-black'
                  }`}
                >
                  <span className="text-2xl font-mono font-bold">{s.label}</span>
                  <span className="text-[10px] font-mono tracking-wider uppercase">{s.desc}</span>
                  {size === s.id && (
                    <div className="w-2 h-2 bg-black mt-1"></div>
                  )}
                </button>
              </label>
            ))}
          </div>
        </section>

        {/* Card Style Radio */}
        <section className="space-y-6">
          <h3 className="text-xs font-mono tracking-[0.3em] text-white uppercase border-l-2 border-white pl-3">
            Pricing Tier
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPlan(p.id)}
                className={`p-6 text-left border-2 transition-all duration-200 relative focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black ${
                  plan === p.id
                    ? 'border-white bg-white text-black'
                    : 'border-white text-white hover:bg-white hover:text-black'
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-xs font-mono tracking-[0.2em] uppercase">
                    {p.name}
                  </span>
                  <div
                    className={`w-4 h-4 border-2 flex items-center justify-center transition-all duration-200 ${
                      plan === p.id ? 'border-black bg-black' : 'border-current'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 bg-white transition-transform duration-200 ${
                        plan === p.id ? 'scale-100' : 'scale-0'
                      }`}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-mono font-bold tracking-tight">
                      {p.price}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider uppercase opacity-60">
                    {p.period}
                  </span>
                </div>
                <p className="text-xs font-mono tracking-wide border-t-2 border-current pt-4 opacity-80">
                  {p.description}
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* Segmented Control */}
        <section className="space-y-6">
          <h3 className="text-xs font-mono tracking-[0.3em] text-white uppercase border-l-2 border-white pl-3">
            Update Period
          </h3>
          <div className="inline-flex border-2 border-white">
            {['Instant', 'Hourly', 'Daily'].map((freq, idx) => (
              <button
                key={freq}
                type="button"
                className={`px-10 py-4 text-xs font-mono tracking-[0.2em] uppercase transition-all duration-200 border-r-2 last:border-r-0 border-white ${
                  idx === 1
                    ? 'bg-white text-black'
                    : 'text-white hover:bg-white hover:text-black'
                }`}
              >
                {freq}
              </button>
            ))}
          </div>
        </section>

        {/* Minimal Dots */}
        <section className="space-y-6">
          <h3 className="text-xs font-mono tracking-[0.3em] text-white uppercase border-l-2 border-white pl-3">
            Priority Level
          </h3>
          <div className="flex items-center gap-8">
            {['Low', 'Medium', 'High', 'Critical'].map((level, idx) => (
              <label key={level} className="flex items-center gap-3 cursor-pointer group">
                <button
                  type="button"
                  className={`w-3 h-3 border-2 border-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black ${
                    idx === 2 ? 'bg-white' : 'hover:bg-white'
                  }`}
                />
                <span className={`text-xs font-mono tracking-wider ${idx === 2 ? 'text-white font-bold' : 'text-gray-500'}`}>
                  {level}
                </span>
              </label>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
