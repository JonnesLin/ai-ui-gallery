import { useState } from 'react'

export default function CyberpunkRadio() {
  const [selected, setSelected] = useState('option1')
  const [plan, setPlan] = useState('pro')
  const [size, setSize] = useState('medium')

  const options = [
    { id: 'option1', label: 'OPTION_ONE' },
    { id: 'option2', label: 'OPTION_TWO' },
    { id: 'option3', label: 'OPTION_THREE' },
    { id: 'option4', label: 'OPTION_FOUR', disabled: true },
  ]

  const plans = [
    { id: 'basic', name: 'BASIC', price: '09', period: 'CR/M', description: 'SOLO_RUNNER' },
    { id: 'pro', name: 'PRO', price: '29', period: 'CR/M', description: 'SMALL_CORP' },
    { id: 'enterprise', name: 'ENTERPRISE', price: '99', period: 'CR/M', description: 'MEGA_CORP' },
  ]

  const sizes = [
    { id: 'small', label: 'S' },
    { id: 'medium', label: 'M' },
    { id: 'large', label: 'L' },
    { id: 'xlarge', label: 'XL' },
  ]

  return (
    <div className="min-h-screen bg-black p-8 md:p-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,0,255,0.05)_50%,transparent_100%)] animate-[scan_3s_ease-in-out_infinite]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_0%,rgba(0,255,255,0.03)_50%,transparent_100%)]" />

      <div className="max-w-2xl mx-auto space-y-16 relative z-10">
        {/* Basic Radio Group */}
        <section className="space-y-4">
          <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-[0.3em] flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-400 shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
            SELECT_OPTION
          </h3>
          <div className="space-y-3 border border-cyan-900/50 bg-black/50 p-6 backdrop-blur-sm">
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
                  className={`w-6 h-6 border-2 flex items-center justify-center transition-all relative ${
                    selected === opt.id
                      ? 'border-cyan-400 bg-cyan-400/20 shadow-[0_0_12px_rgba(0,255,255,0.6)]'
                      : 'border-cyan-700 bg-black group-hover:border-cyan-500 group-hover:shadow-[0_0_8px_rgba(0,255,255,0.3)]'
                  } ${opt.disabled ? '' : 'focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black'}`}
                >
                  {selected === opt.id && (
                    <>
                      <span className="w-2 h-2 bg-cyan-400 shadow-[0_0_8px_rgba(0,255,255,1)]" />
                      <span className="absolute inset-0 border-2 border-cyan-400 animate-ping opacity-75" />
                    </>
                  )}
                </button>
                <span className="text-cyan-200 text-sm font-mono tracking-wider">{opt.label}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Horizontal Radio - Sizes */}
        <section className="space-y-4">
          <h3 className="text-xs font-mono font-bold text-magenta-400 uppercase tracking-[0.3em] flex items-center gap-2">
            <span className="w-2 h-2 bg-magenta-400 shadow-[0_0_8px_rgba(255,0,255,0.8)]" />
            SIZE_SELECT
          </h3>
          <div className="flex gap-4">
            {sizes.map((s) => (
              <label key={s.id} className="cursor-pointer group">
                <button
                  type="button"
                  onClick={() => setSize(s.id)}
                  className={`w-16 h-16 border-2 flex items-center justify-center font-mono text-xl font-bold transition-all focus:outline-none focus:ring-2 focus:ring-magenta-400 focus:ring-offset-2 focus:ring-offset-black relative ${
                    size === s.id
                      ? 'border-magenta-400 bg-magenta-400/20 text-magenta-400 shadow-[0_0_16px_rgba(255,0,255,0.6)]'
                      : 'border-magenta-700 bg-black text-magenta-600 group-hover:border-magenta-500 group-hover:shadow-[0_0_8px_rgba(255,0,255,0.3)]'
                  }`}
                >
                  {s.label}
                  {size === s.id && (
                    <span className="absolute inset-0 border-2 border-magenta-400 animate-ping opacity-50" />
                  )}
                </button>
              </label>
            ))}
          </div>
        </section>

        {/* Card Style Radio */}
        <section className="space-y-4">
          <h3 className="text-xs font-mono font-bold text-yellow-400 uppercase tracking-[0.3em] flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-400 shadow-[0_0_8px_rgba(255,255,0,0.8)]" />
            PLAN_SELECTION
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPlan(p.id)}
                className={`p-6 text-left border-2 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black relative overflow-hidden ${
                  plan === p.id
                    ? 'border-cyan-400 bg-cyan-400/10 shadow-[0_0_20px_rgba(0,255,255,0.4)]'
                    : 'border-cyan-800 bg-black/50 hover:border-cyan-600 hover:shadow-[0_0_12px_rgba(0,255,255,0.2)]'
                }`}
              >
                {plan === p.id && (
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,rgba(0,255,255,0.1)_50%,transparent_100%)] animate-[scan_2s_ease-in-out_infinite]" />
                )}
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <span className="text-sm font-mono font-bold text-cyan-400 tracking-wider">{p.name}</span>
                  <div
                    className={`w-5 h-5 border-2 flex items-center justify-center ${
                      plan === p.id ? 'border-cyan-400 bg-cyan-400/20' : 'border-cyan-700 bg-black'
                    }`}
                  >
                    {plan === p.id && (
                      <span className="w-2 h-2 bg-cyan-400 shadow-[0_0_8px_rgba(0,255,255,1)]" />
                    )}
                  </div>
                </div>
                <div className="mb-3 relative z-10">
                  <span className="text-3xl font-mono font-bold text-magenta-400">{p.price}</span>
                  <span className="text-xs font-mono text-magenta-500 ml-1">{p.period}</span>
                </div>
                <p className="text-xs font-mono text-cyan-600 tracking-wider relative z-10">{p.description}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Segmented Radio */}
        <section className="space-y-4">
          <h3 className="text-xs font-mono font-bold text-green-400 uppercase tracking-[0.3em] flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 shadow-[0_0_8px_rgba(0,255,0,0.8)]" />
            FREQUENCY
          </h3>
          <div className="inline-flex border-2 border-green-700 bg-black/50">
            {['DAILY', 'WEEKLY', 'MONTHLY'].map((freq, idx) => (
              <button
                key={freq}
                type="button"
                className={`px-8 py-3 text-sm font-mono font-bold transition-all relative ${
                  idx === 1
                    ? 'bg-green-400/20 text-green-400 shadow-[0_0_16px_rgba(0,255,0,0.4)]'
                    : 'text-green-600 hover:text-green-500 hover:bg-green-400/5'
                } ${idx > 0 ? 'border-l-2 border-green-700' : ''}`}
              >
                {freq}
                {idx === 1 && (
                  <>
                    <span className="absolute top-0 left-0 w-full h-0.5 bg-green-400 shadow-[0_0_4px_rgba(0,255,0,0.8)]" />
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400 shadow-[0_0_4px_rgba(0,255,0,0.8)]" />
                  </>
                )}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
