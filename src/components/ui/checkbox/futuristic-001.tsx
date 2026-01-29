import { useState } from 'react'

export default function FuturisticCheckbox() {
  const [checked, setChecked] = useState({
    quantum: true,
    neural: false,
    photonic: true,
    plasma: false
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
      quantum: newValue,
      neural: newValue,
      photonic: newValue,
      plasma: newValue
    })
    setSelectAll(newValue)
  }

  return (
    <div className="flex flex-col gap-8 p-8 max-w-md bg-gradient-to-br from-gray-950 via-blue-950 to-black min-h-screen font-sans">
      <h2 className="text-2xl font-thin text-blue-300 uppercase tracking-[0.3em]">
        FUTURISTIC CHECKBOXES
      </h2>

      {/* Basic Checkboxes */}
      <div className="flex flex-col gap-5 bg-gray-900/50 backdrop-blur-xl p-6 rounded-lg border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
        <h3 className="text-xs font-light text-blue-400 uppercase tracking-[0.25em] mb-2">
          SYSTEM MODULES
        </h3>

        {Object.entries(checked).map(([key, value]) => (
          <label
            key={key}
            className="flex items-center gap-4 cursor-pointer group"
          >
            <div
              onClick={() => handleToggle(key as keyof typeof checked)}
              className={`w-6 h-6 rounded transition-all duration-500 flex items-center justify-center relative overflow-hidden ${
                value
                  ? 'bg-blue-500/20 border border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                  : 'bg-gray-900 border border-blue-700/40 group-hover:border-blue-500/60 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]'
              }`}
            >
              {value && (
                <>
                  <svg className="w-4 h-4 text-blue-400 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="absolute inset-0 bg-blue-500/30 animate-pulse" />
                </>
              )}
              <div className="absolute inset-0 border border-blue-400/20" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 2px, 0 2px)' }} />
              <div className="absolute inset-0 border border-blue-400/20" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% calc(100% - 2px), 0 calc(100% - 2px))' }} />
            </div>
            <span className="text-sm text-blue-200 font-light uppercase tracking-wider">
              {key}
            </span>
          </label>
        ))}
      </div>

      {/* Indeterminate State */}
      <div className="flex flex-col gap-5 bg-gray-900/50 backdrop-blur-xl p-6 rounded-lg border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
        <h3 className="text-xs font-light text-cyan-400 uppercase tracking-[0.25em] mb-2">
          BULK OPERATION
        </h3>

        <label className="flex items-center gap-4 cursor-pointer group">
          <div
            onClick={handleSelectAll}
            className={`w-6 h-6 rounded transition-all duration-500 flex items-center justify-center relative overflow-hidden ${
              selectAll === true || selectAll === 'indeterminate'
                ? 'bg-cyan-500/20 border border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                : 'bg-gray-900 border border-cyan-700/40 group-hover:border-cyan-500/60 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]'
            }`}
          >
            {selectAll === true && (
              <>
                <svg className="w-4 h-4 text-cyan-400 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div className="absolute inset-0 bg-cyan-500/30 animate-pulse" />
              </>
            )}
            {selectAll === 'indeterminate' && (
              <>
                <div className="w-3 h-0.5 bg-cyan-400 relative z-10" />
                <div className="absolute inset-0 bg-cyan-500/30 animate-pulse" />
              </>
            )}
            <div className="absolute inset-0 border border-cyan-400/20" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 2px, 0 2px)' }} />
            <div className="absolute inset-0 border border-cyan-400/20" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% calc(100% - 2px), 0 calc(100% - 2px))' }} />
          </div>
          <span className="text-sm text-cyan-200 font-light uppercase tracking-wider">
            Select All Modules
          </span>
        </label>
      </div>

      {/* Disabled States */}
      <div className="flex flex-col gap-5 bg-gray-900/30 backdrop-blur-xl p-6 rounded-lg border border-gray-700/30 opacity-50">
        <h3 className="text-xs font-light text-gray-500 uppercase tracking-[0.25em] mb-2">
          LOCKED SYSTEMS
        </h3>

        <label className="flex items-center gap-4 cursor-not-allowed">
          <div className="w-6 h-6 rounded bg-gray-900 border border-gray-700/40" />
          <span className="text-sm text-gray-600 font-light uppercase tracking-wider">
            Offline Module
          </span>
        </label>

        <label className="flex items-center gap-4 cursor-not-allowed">
          <div className="w-6 h-6 rounded bg-gray-800 border border-gray-700/40 flex items-center justify-center">
            <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-sm text-gray-600 font-light uppercase tracking-wider">
            Secured Module
          </span>
        </label>
      </div>

      {/* With Description */}
      <div className="flex flex-col gap-5 bg-gray-900/50 backdrop-blur-xl p-6 rounded-lg border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
        <h3 className="text-xs font-light text-purple-400 uppercase tracking-[0.25em] mb-2">
          ADVANCED CONFIG
        </h3>

        <label className="flex items-start gap-4 cursor-pointer group">
          <div className="w-6 h-6 mt-0.5 rounded bg-purple-500/20 border border-purple-400 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(168,85,247,0.4)] relative overflow-hidden">
            <svg className="w-4 h-4 text-purple-400 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <div className="absolute inset-0 bg-purple-500/30 animate-pulse" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-purple-200 font-light uppercase tracking-wider">
              AI CORE ENABLED
            </span>
            <span className="text-xs text-purple-400/70 font-light leading-relaxed">
              Activate neural processing unit with quantum acceleration
            </span>
          </div>
        </label>
      </div>

      {/* Different Sizes */}
      <div className="flex flex-col gap-5 bg-gray-900/50 backdrop-blur-xl p-6 rounded-lg border border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.1)]">
        <h3 className="text-xs font-light text-indigo-400 uppercase tracking-[0.25em] mb-2">
          SIZE VARIANTS
        </h3>

        <label className="flex items-center gap-3 cursor-pointer group">
          <div className="w-5 h-5 rounded bg-indigo-500/20 border border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.4)] flex items-center justify-center">
            <svg className="w-3 h-3 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-sm text-indigo-200 font-light uppercase tracking-wider">
            Compact
          </span>
        </label>

        <label className="flex items-center gap-4 cursor-pointer group">
          <div className="w-8 h-8 rounded bg-indigo-500/20 border border-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.5)] flex items-center justify-center">
            <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-base text-indigo-200 font-light uppercase tracking-wider">
            Enhanced
          </span>
        </label>
      </div>
    </div>
  )
}
