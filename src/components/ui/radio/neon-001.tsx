import { useState } from 'react'

export default function NeonRadio() {
  const [selected, setSelected] = useState('option1')
  const [plan, setPlan] = useState('pro')
  const [size, setSize] = useState('medium')

  const options = [
    { id: 'option1', label: 'Neon Option Alpha', color: 'from-pink-500 to-purple-500' },
    { id: 'option2', label: 'Neon Option Beta', color: 'from-cyan-500 to-blue-500' },
    { id: 'option3', label: 'Neon Option Gamma', color: 'from-green-500 to-emerald-500' },
    { id: 'option4', label: 'Disabled Option', color: 'from-gray-500 to-gray-600', disabled: true },
  ]

  const plans = [
    { id: 'basic', name: 'Starter', price: '15', period: '/month', description: 'Basic neon features', color: 'pink', glow: 'rgba(236,72,153,0.5)' },
    { id: 'pro', name: 'Pro', price: '35', period: '/month', description: 'Advanced neon power', color: 'cyan', glow: 'rgba(6,182,212,0.5)' },
    { id: 'enterprise', name: 'Ultimate', price: '75', period: '/month', description: 'Maximum neon energy', color: 'purple', glow: 'rgba(168,85,247,0.5)' },
  ]

  const sizes = [
    { id: 'small', label: 'XS', color: 'pink' },
    { id: 'medium', label: 'MD', color: 'cyan' },
    { id: 'large', label: 'LG', color: 'purple' },
    { id: 'xlarge', label: 'XL', color: 'green' },
  ]

  const getColorClasses = (color: string, active: boolean) => {
    const colors = {
      pink: active ? 'border-pink-500 text-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.6)]' : 'border-pink-500/30 text-pink-500/50',
      cyan: active ? 'border-cyan-500 text-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.6)]' : 'border-cyan-500/30 text-cyan-500/50',
      purple: active ? 'border-purple-500 text-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.6)]' : 'border-purple-500/30 text-purple-500/50',
      green: active ? 'border-green-500 text-green-500 shadow-[0_0_20px_rgba(34,197,94,0.6)]' : 'border-green-500/30 text-green-500/50',
    }
    return colors[color as keyof typeof colors] || colors.pink
  }

  return (
    <div className="min-h-screen bg-black p-8 md:p-12">
      <div className="max-w-2xl mx-auto space-y-16">
        {/* Gradient Radio Group */}
        <section className="space-y-6">
          <h3 className="text-xs font-bold tracking-[0.3em] text-pink-500 uppercase flex items-center gap-2">
            <span className="w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.8)] animate-pulse"></span>
            Select Mode
          </h3>
          <div className="space-y-3">
            {options.map((opt) => (
              <label
                key={opt.id}
                className={`flex items-center gap-4 p-4 cursor-pointer group border-2 transition-all duration-300 ${
                  opt.disabled ? 'cursor-not-allowed opacity-30' : ''
                } ${
                  selected === opt.id
                    ? 'border-pink-500 bg-pink-500/10 shadow-[0_0_30px_rgba(236,72,153,0.3)]'
                    : 'border-pink-500/20 hover:border-pink-500/50 hover:bg-pink-500/5'
                }`}
              >
                <button
                  type="button"
                  onClick={() => !opt.disabled && setSelected(opt.id)}
                  disabled={opt.disabled}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 relative ${
                    selected === opt.id
                      ? 'border-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.8)]'
                      : 'border-pink-500/40 group-hover:border-pink-500/70'
                  } ${opt.disabled ? '' : 'focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-black'}`}
                >
                  <span
                    className={`w-3.5 h-3.5 rounded-full bg-gradient-to-br ${opt.color} shadow-[0_0_15px_rgba(236,72,153,0.8)] transition-transform duration-300 ${
                      selected === opt.id ? 'scale-100' : 'scale-0'
                    }`}
                  />
                  {selected === opt.id && (
                    <span className="absolute inset-0 rounded-full border-2 border-pink-500 animate-ping opacity-40"></span>
                  )}
                </button>
                <span className={`text-sm font-medium ${selected === opt.id ? 'text-pink-400' : 'text-gray-400'}`}>
                  {opt.label}
                </span>
                {selected === opt.id && (
                  <span className="ml-auto text-[10px] text-pink-500 tracking-widest font-bold animate-pulse">ACTIVE</span>
                )}
              </label>
            ))}
          </div>
        </section>

        {/* Horizontal Neon Chips */}
        <section className="space-y-6">
          <h3 className="text-xs font-bold tracking-[0.3em] text-cyan-500 uppercase flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse"></span>
            Size Selection
          </h3>
          <div className="flex gap-4 flex-wrap">
            {sizes.map((s) => (
              <label key={s.id} className="cursor-pointer">
                <button
                  type="button"
                  onClick={() => setSize(s.id)}
                  className={`px-6 py-3 border-2 rounded-full text-sm font-bold tracking-wider transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black ${
                    size === s.id
                      ? getColorClasses(s.color, true)
                      : getColorClasses(s.color, false) + ' hover:opacity-100'
                  }`}
                >
                  {s.label}
                </button>
              </label>
            ))}
          </div>
        </section>

        {/* Neon Card Plans */}
        <section className="space-y-6">
          <h3 className="text-xs font-bold tracking-[0.3em] text-purple-500 uppercase flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)] animate-pulse"></span>
            Choose Plan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPlan(p.id)}
                className={`p-6 text-left border-2 transition-all duration-300 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black ${
                  plan === p.id
                    ? getColorClasses(p.color, true) + ' bg-gradient-to-br from-transparent to-current/5'
                    : getColorClasses(p.color, false) + ' hover:shadow-[0_0_15px_' + p.glow + ']'
                }`}
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <span className={`text-xs font-bold tracking-[0.2em] uppercase ${plan === p.id ? '' : 'opacity-50'}`}>
                      {p.name}
                    </span>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        plan === p.id ? 'border-current shadow-[0_0_15px_' + p.glow + ']' : 'border-current/30'
                      }`}
                    >
                      <span
                        className={`w-2.5 h-2.5 rounded-full bg-current transition-transform duration-300 ${
                          plan === p.id ? 'scale-100' : 'scale-0'
                        }`}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">${p.price}</span>
                      <span className="text-xs opacity-60">{p.period}</span>
                    </div>
                  </div>
                  <p className={`text-xs border-t-2 border-current/20 pt-4 ${plan === p.id ? 'opacity-80' : 'opacity-40'}`}>
                    {p.description}
                  </p>
                </div>
                {plan === p.id && (
                  <>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-current opacity-10 blur-3xl rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-current opacity-10 blur-2xl rounded-full"></div>
                  </>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Glowing Tabs */}
        <section className="space-y-6">
          <h3 className="text-xs font-bold tracking-[0.3em] text-green-500 uppercase flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-pulse"></span>
            Refresh Rate
          </h3>
          <div className="inline-flex border-2 border-green-500/30 bg-black/50 backdrop-blur-sm p-1 gap-1">
            {['Real-time', 'Fast', 'Slow'].map((freq, idx) => (
              <button
                key={freq}
                type="button"
                className={`px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                  idx === 1
                    ? 'text-green-400 bg-green-500/20 border-2 border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.5)]'
                    : 'text-green-500/50 hover:text-green-400 border-2 border-transparent'
                }`}
              >
                {freq}
              </button>
            ))}
          </div>
        </section>

        {/* Pulse Indicators */}
        <section className="space-y-6">
          <h3 className="text-xs font-bold tracking-[0.3em] text-pink-500 uppercase flex items-center gap-2">
            <span className="w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.8)] animate-pulse"></span>
            Status
          </h3>
          <div className="flex items-center gap-6">
            {[
              { label: 'Online', color: 'green' },
              { label: 'Away', color: 'yellow' },
              { label: 'Busy', color: 'pink' },
              { label: 'Offline', color: 'gray' }
            ].map((status, idx) => (
              <label key={status.label} className="flex items-center gap-3 cursor-pointer group">
                <button
                  type="button"
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black ${
                    idx === 0
                      ? `border-${status.color}-500 bg-${status.color}-500 shadow-[0_0_15px_rgba(34,197,94,0.8)]`
                      : `border-${status.color}-500/30 hover:border-${status.color}-500/70`
                  }`}
                >
                  {idx === 0 && (
                    <span className="w-full h-full rounded-full bg-current animate-ping opacity-40"></span>
                  )}
                </button>
                <span className={`text-xs font-medium ${idx === 0 ? `text-${status.color}-400` : 'text-gray-500'}`}>
                  {status.label}
                </span>
              </label>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
