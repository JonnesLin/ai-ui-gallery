import { useState } from 'react'

export default function NeonCheckbox() {
  const [checked, setChecked] = useState({
    voltage: true,
    electric: false,
    plasma: true,
    lightning: false
  })
  const [selectAll, setSelectAll] = useState<boolean | 'indeterminate'>('indeterminate')

  const handleToggle = (key: keyof typeof checked) => {
    const newChecked = { ...checked, [key]: !checked[key] }
    setChecked(newChecked)
    const values = Object.values(newChecked)
    const allChecked = values.every(Boolean)
    const noneChecked = values.every(v => !v)
    setSelectAll(allChecked ? true : noneChecked ? false : 'indeterminate')
  }

  const handleSelectAll = () => {
    const newValue = selectAll !== true
    setChecked({
      voltage: newValue,
      electric: newValue,
      plasma: newValue,
      lightning: newValue
    })
    setSelectAll(newValue)
  }

  return (
    <div className="flex flex-col gap-8 p-8 max-w-md bg-black min-h-screen font-sans">
      <h2 className="text-3xl font-black text-pink-500 uppercase tracking-wider relative">
        <span className="relative z-10" style={{ textShadow: '0 0 10px #ec4899, 0 0 20px #ec4899, 0 0 30px #ec4899' }}>
          NEON CHECKBOXES
        </span>
      </h2>

      {/* Basic Checkboxes */}
      <div className="flex flex-col gap-5 bg-gray-950 p-6 rounded-lg border-2 border-pink-500 relative overflow-hidden" style={{ boxShadow: '0 0 20px rgba(236,72,153,0.5), inset 0 0 20px rgba(236,72,153,0.1)' }}>
        <div className="absolute inset-0 bg-pink-500/5 pointer-events-none" />

        <h3 className="text-sm font-bold text-pink-400 uppercase tracking-wider mb-2 relative z-10" style={{ textShadow: '0 0 5px #f9a8d4' }}>
          Power Options
        </h3>

        {Object.entries(checked).map(([key, value]) => (
          <label
            key={key}
            className="flex items-center gap-4 cursor-pointer group relative z-10"
          >
            <div
              onClick={() => handleToggle(key as keyof typeof checked)}
              className={`w-7 h-7 border-2 rounded transition-all duration-300 flex items-center justify-center relative ${
                value
                  ? 'border-pink-500 bg-pink-500/20'
                  : 'border-pink-700 bg-black group-hover:border-pink-500 group-hover:bg-pink-500/10'
              }`}
              style={value ? { boxShadow: '0 0 15px rgba(236,72,153,0.8), inset 0 0 10px rgba(236,72,153,0.3)' } : {}}
            >
              {value && (
                <svg className="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} style={{ filter: 'drop-shadow(0 0 3px #ec4899)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className="text-sm text-pink-300 font-bold uppercase tracking-wide" style={{ textShadow: '0 0 5px #f9a8d4' }}>
              {key}
            </span>
          </label>
        ))}
      </div>

      {/* Indeterminate State */}
      <div className="flex flex-col gap-5 bg-gray-950 p-6 rounded-lg border-2 border-cyan-500 relative overflow-hidden" style={{ boxShadow: '0 0 20px rgba(6,182,212,0.5), inset 0 0 20px rgba(6,182,212,0.1)' }}>
        <div className="absolute inset-0 bg-cyan-500/5 pointer-events-none" />

        <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2 relative z-10" style={{ textShadow: '0 0 5px #22d3ee' }}>
          Bulk Control
        </h3>

        <label className="flex items-center gap-4 cursor-pointer group relative z-10">
          <div
            onClick={handleSelectAll}
            className={`w-7 h-7 border-2 rounded transition-all duration-300 flex items-center justify-center ${
              selectAll === true || selectAll === 'indeterminate'
                ? 'border-cyan-500 bg-cyan-500/20'
                : 'border-cyan-700 bg-black group-hover:border-cyan-500 group-hover:bg-cyan-500/10'
            }`}
            style={(selectAll === true || selectAll === 'indeterminate') ? { boxShadow: '0 0 15px rgba(6,182,212,0.8), inset 0 0 10px rgba(6,182,212,0.3)' } : {}}
          >
            {selectAll === true && (
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} style={{ filter: 'drop-shadow(0 0 3px #06b6d4)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
            {selectAll === 'indeterminate' && (
              <div className="w-4 h-0.5 bg-cyan-400 rounded-full" style={{ boxShadow: '0 0 5px #06b6d4' }} />
            )}
          </div>
          <span className="text-sm text-cyan-300 font-bold uppercase tracking-wide" style={{ textShadow: '0 0 5px #22d3ee' }}>
            Select All
          </span>
        </label>
      </div>

      {/* Disabled States */}
      <div className="flex flex-col gap-5 bg-gray-950 p-6 rounded-lg border-2 border-gray-700 relative overflow-hidden opacity-50">
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
          Disabled
        </h3>

        <label className="flex items-center gap-4 cursor-not-allowed">
          <div className="w-7 h-7 border-2 border-gray-700 bg-black rounded" />
          <span className="text-sm text-gray-600 font-bold uppercase tracking-wide">
            Offline
          </span>
        </label>

        <label className="flex items-center gap-4 cursor-not-allowed">
          <div className="w-7 h-7 border-2 border-gray-700 bg-gray-800 rounded flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-sm text-gray-600 font-bold uppercase tracking-wide">
            Locked
          </span>
        </label>
      </div>

      {/* With Description */}
      <div className="flex flex-col gap-5 bg-gray-950 p-6 rounded-lg border-2 border-purple-500 relative overflow-hidden" style={{ boxShadow: '0 0 20px rgba(168,85,247,0.5), inset 0 0 20px rgba(168,85,247,0.1)' }}>
        <div className="absolute inset-0 bg-purple-500/5 pointer-events-none" />

        <h3 className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-2 relative z-10" style={{ textShadow: '0 0 5px #c084fc' }}>
          Advanced
        </h3>

        <label className="flex items-start gap-4 cursor-pointer group relative z-10">
          <div className="w-7 h-7 mt-0.5 border-2 border-purple-500 bg-purple-500/20 rounded flex items-center justify-center flex-shrink-0" style={{ boxShadow: '0 0 15px rgba(168,85,247,0.8), inset 0 0 10px rgba(168,85,247,0.3)' }}>
            <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} style={{ filter: 'drop-shadow(0 0 3px #a855f7)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-purple-300 font-bold uppercase tracking-wide" style={{ textShadow: '0 0 5px #c084fc' }}>
              Neon Boost
            </span>
            <span className="text-xs text-purple-400/70 leading-relaxed">
              Enable enhanced neon glow effects with pulse animation
            </span>
          </div>
        </label>
      </div>

      {/* Different Colors */}
      <div className="flex flex-col gap-5 bg-gray-950 p-6 rounded-lg border-2 border-green-500 relative overflow-hidden" style={{ boxShadow: '0 0 20px rgba(34,197,94,0.5), inset 0 0 20px rgba(34,197,94,0.1)' }}>
        <div className="absolute inset-0 bg-green-500/5 pointer-events-none" />

        <h3 className="text-sm font-bold text-green-400 uppercase tracking-wider mb-2 relative z-10" style={{ textShadow: '0 0 5px #4ade80' }}>
          Color Variants
        </h3>

        <label className="flex items-center gap-4 cursor-pointer group relative z-10">
          <div className="w-7 h-7 border-2 border-green-500 bg-green-500/20 rounded flex items-center justify-center" style={{ boxShadow: '0 0 15px rgba(34,197,94,0.8), inset 0 0 10px rgba(34,197,94,0.3)' }}>
            <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} style={{ filter: 'drop-shadow(0 0 3px #22c55e)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-sm text-green-300 font-bold uppercase tracking-wide" style={{ textShadow: '0 0 5px #4ade80' }}>
            Green Glow
          </span>
        </label>

        <label className="flex items-center gap-4 cursor-pointer group relative z-10">
          <div className="w-9 h-9 border-2 border-yellow-500 bg-yellow-500/20 rounded flex items-center justify-center" style={{ boxShadow: '0 0 20px rgba(234,179,8,0.8), inset 0 0 15px rgba(234,179,8,0.3)' }}>
            <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} style={{ filter: 'drop-shadow(0 0 4px #eab308)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-base text-yellow-300 font-black uppercase tracking-wide" style={{ textShadow: '0 0 8px #fde047' }}>
            Large Yellow
          </span>
        </label>
      </div>
    </div>
  )
}
