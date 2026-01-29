import { useState } from 'react'

export default function FuturisticRadio() {
  const [selected, setSelected] = useState('option1')
  const [plan, setPlan] = useState('pro')
  const [size, setSize] = useState('medium')

  const options = [
    { id: 'option1', label: 'QUANTUM_A1' },
    { id: 'option2', label: 'NEXUS_B2' },
    { id: 'option3', label: 'HELIX_C3' },
    { id: 'option4', label: 'VOID_D4', disabled: true },
  ]

  const plans = [
    { id: 'basic', name: 'ALPHA', price: '0.009', unit: 'BTC', period: '/CYCLE', description: 'STANDARD_PROTOCOL' },
    { id: 'pro', name: 'BETA', price: '0.029', unit: 'BTC', period: '/CYCLE', description: 'ENHANCED_PROTOCOL' },
    { id: 'enterprise', name: 'OMEGA', price: '0.099', unit: 'BTC', period: '/CYCLE', description: 'ULTIMATE_PROTOCOL' },
  ]

  const sizes = [
    { id: 'small', label: 'MICRO' },
    { id: 'medium', label: 'STANDARD' },
    { id: 'large', label: 'MACRO' },
    { id: 'xlarge', label: 'ULTRA' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 p-8 md:p-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(59,130,246,0.05)_25%,rgba(59,130,246,0.05)_26%,transparent_27%,transparent_74%,rgba(59,130,246,0.05)_75%,rgba(59,130,246,0.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />

      <div className="max-w-3xl mx-auto space-y-16 relative z-10">
        {/* Basic Radio Group */}
        <section className="space-y-4">
          <h3 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-[0.3em] flex items-center gap-3">
            <span className="w-8 h-px bg-gradient-to-r from-blue-400 to-transparent" />
            NODE_SELECTION
          </h3>
          <div className="space-y-3 border border-blue-500/30 bg-slate-950/50 p-6 backdrop-blur-md">
            {options.map((opt) => (
              <label
                key={opt.id}
                className={`flex items-center gap-4 cursor-pointer group relative ${
                  opt.disabled ? 'cursor-not-allowed opacity-30' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => !opt.disabled && setSelected(opt.id)}
                  disabled={opt.disabled}
                  className={`w-7 h-7 border flex items-center justify-center transition-all relative clip-corner ${
                    selected === opt.id
                      ? 'border-blue-400 bg-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.5),inset_0_0_15px_rgba(59,130,246,0.2)]'
                      : 'border-blue-800 bg-slate-950/50 group-hover:border-blue-600 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]'
                  } ${opt.disabled ? '' : 'focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950'}`}
                  style={{ clipPath: 'polygon(0 25%, 25% 0, 100% 0, 100% 75%, 75% 100%, 0 100%)' }}
                >
                  {selected === opt.id && (
                    <>
                      <span className="w-3 h-3 bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,1)]"
                        style={{ clipPath: 'polygon(0 25%, 25% 0, 100% 0, 100% 75%, 75% 100%, 0 100%)' }} />
                      <span className="absolute inset-0 border border-blue-400 animate-pulse"
                        style={{ clipPath: 'polygon(0 25%, 25% 0, 100% 0, 100% 75%, 75% 100%, 0 100%)' }} />
                    </>
                  )}
                </button>
                <span className="text-blue-200 text-sm font-mono tracking-wider">{opt.label}</span>
                <span className="ml-auto text-xs font-mono text-blue-700">
                  {selected === opt.id ? '[ACTIVE]' : '[STANDBY]'}
                </span>
              </label>
            ))}
          </div>
        </section>

        {/* Horizontal Radio - Sizes */}
        <section className="space-y-4">
          <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-[0.3em] flex items-center gap-3">
            <span className="w-8 h-px bg-gradient-to-r from-cyan-400 to-transparent" />
            CAPACITY_MODE
          </h3>
          <div className="grid grid-cols-4 gap-3">
            {sizes.map((s) => (
              <label key={s.id} className="cursor-pointer group">
                <button
                  type="button"
                  onClick={() => setSize(s.id)}
                  className={`w-full aspect-square border flex flex-col items-center justify-center text-xs font-mono font-bold transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 relative overflow-hidden ${
                    size === s.id
                      ? 'border-cyan-400 bg-cyan-500/20 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.5),inset_0_0_20px_rgba(6,182,212,0.2)]'
                      : 'border-cyan-800 bg-slate-950/50 text-cyan-700 group-hover:border-cyan-600 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                  }`}
                  style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}
                >
                  {s.label}
                  {size === s.id && (
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent animate-pulse" />
                  )}
                </button>
              </label>
            ))}
          </div>
        </section>

        {/* Card Style Radio */}
        <section className="space-y-4">
          <h3 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-[0.3em] flex items-center gap-3">
            <span className="w-8 h-px bg-gradient-to-r from-purple-400 to-transparent" />
            PROTOCOL_TIER
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPlan(p.id)}
                className={`p-6 text-left border transition-all focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-950 relative overflow-hidden group ${
                  plan === p.id
                    ? 'border-purple-400 bg-purple-500/10 shadow-[0_0_25px_rgba(168,85,247,0.4),inset_0_0_25px_rgba(168,85,247,0.1)]'
                    : 'border-purple-900 bg-slate-950/50 hover:border-purple-700 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                }`}
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)' }}
              >
                {plan === p.id && (
                  <>
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-[scan_2s_ease-in-out_infinite]" />
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,rgba(168,85,247,0.1)_50%,transparent_100%)] animate-[scan_3s_ease-in-out_infinite]" />
                  </>
                )}
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div>
                    <span className="text-base font-mono font-bold text-purple-400 tracking-wider block mb-1">{p.name}</span>
                    <span className="text-xs font-mono text-purple-700">{p.description}</span>
                  </div>
                  <div
                    className={`w-6 h-6 border flex items-center justify-center ${
                      plan === p.id
                        ? 'border-purple-400 bg-purple-500/20 shadow-[0_0_10px_rgba(168,85,247,0.6)]'
                        : 'border-purple-800 bg-slate-950/50'
                    }`}
                    style={{ clipPath: 'polygon(0 25%, 25% 0, 100% 0, 100% 75%, 75% 100%, 0 100%)' }}
                  >
                    {plan === p.id && (
                      <span className="w-2.5 h-2.5 bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,1)]"
                        style={{ clipPath: 'polygon(0 25%, 25% 0, 100% 0, 100% 75%, 75% 100%, 0 100%)' }} />
                    )}
                  </div>
                </div>
                <div className="mb-3 relative z-10">
                  <span className="text-3xl font-mono font-bold text-purple-300">{p.price}</span>
                  <span className="text-xs font-mono text-purple-500 ml-1">{p.unit}</span>
                  <span className="text-xs font-mono text-purple-700 ml-1">{p.period}</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Segmented Radio */}
        <section className="space-y-4">
          <h3 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-[0.3em] flex items-center gap-3">
            <span className="w-8 h-px bg-gradient-to-r from-emerald-400 to-transparent" />
            SYNC_INTERVAL
          </h3>
          <div className="inline-flex border border-emerald-800 bg-slate-950/50 backdrop-blur-md">
            {['REAL_TIME', 'HOURLY', 'DAILY'].map((freq, idx) => (
              <button
                key={freq}
                type="button"
                className={`px-8 py-3 text-xs font-mono font-bold transition-all relative ${
                  idx === 1
                    ? 'bg-emerald-500/20 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                    : 'text-emerald-700 hover:text-emerald-500 hover:bg-emerald-500/5'
                } ${idx > 0 ? 'border-l border-emerald-800' : ''}`}
              >
                {freq}
                {idx === 1 && (
                  <>
                    <span className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_5px_rgba(16,185,129,0.8)]" />
                    <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_5px_rgba(16,185,129,0.8)]" />
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
