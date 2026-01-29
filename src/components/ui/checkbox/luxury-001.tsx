import { useState } from 'react'

export default function LuxuryCheckbox() {
  const [checked, setChecked] = useState({
    premium: true,
    exclusive: false,
    elite: true,
    platinum: false
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
      premium: newValue,
      exclusive: newValue,
      elite: newValue,
      platinum: newValue
    })
    setSelectAll(newValue)
  }

  return (
    <div className="flex flex-col gap-8 p-8 max-w-md bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen">
      <h2 className="text-3xl font-serif font-light text-amber-400 tracking-wider">
        Luxury Checkboxes
      </h2>

      {/* Basic Checkboxes */}
      <div className="flex flex-col gap-6 bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-amber-700/30 shadow-2xl">
        <h3 className="text-xs font-light text-amber-300 uppercase tracking-[0.2em] mb-2">
          Membership Tier
        </h3>

        {Object.entries(checked).map(([key, value]) => (
          <label
            key={key}
            className="flex items-center gap-4 cursor-pointer group"
          >
            <div
              onClick={() => handleToggle(key as keyof typeof checked)}
              className={`w-6 h-6 rounded-sm border transition-all duration-500 flex items-center justify-center relative ${
                value
                  ? 'border-amber-500 bg-gradient-to-br from-amber-600 to-amber-800 shadow-[0_0_20px_rgba(251,191,36,0.3)]'
                  : 'border-amber-700/50 bg-gray-900 group-hover:border-amber-600 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.2)]'
              }`}
            >
              {value && (
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className="text-sm text-amber-100 font-light tracking-wide capitalize">
              {key}
            </span>
          </label>
        ))}
      </div>

      {/* Indeterminate State */}
      <div className="flex flex-col gap-6 bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-amber-700/30 shadow-2xl">
        <h3 className="text-xs font-light text-amber-300 uppercase tracking-[0.2em] mb-2">
          Select All Benefits
        </h3>

        <label className="flex items-center gap-4 cursor-pointer group">
          <div
            onClick={handleSelectAll}
            className={`w-6 h-6 rounded-sm border transition-all duration-500 flex items-center justify-center ${
              selectAll === true || selectAll === 'indeterminate'
                ? 'border-amber-500 bg-gradient-to-br from-amber-600 to-amber-800 shadow-[0_0_20px_rgba(251,191,36,0.3)]'
                : 'border-amber-700/50 bg-gray-900 group-hover:border-amber-600 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.2)]'
            }`}
          >
            {selectAll === true && (
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
            {selectAll === 'indeterminate' && (
              <div className="w-3 h-0.5 bg-white rounded-full" />
            )}
          </div>
          <span className="text-sm text-amber-100 font-light tracking-wide">All Tiers</span>
        </label>
      </div>

      {/* Disabled States */}
      <div className="flex flex-col gap-6 bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-gray-700/30 shadow-2xl opacity-60">
        <h3 className="text-xs font-light text-gray-500 uppercase tracking-[0.2em] mb-2">
          Unavailable
        </h3>

        <label className="flex items-center gap-4 cursor-not-allowed">
          <div className="w-6 h-6 rounded-sm border border-gray-700 bg-gray-900" />
          <span className="text-sm text-gray-500 font-light tracking-wide">Not available</span>
        </label>

        <label className="flex items-center gap-4 cursor-not-allowed">
          <div className="w-6 h-6 rounded-sm border border-gray-700 bg-gray-800 flex items-center justify-center">
            <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-sm text-gray-500 font-light tracking-wide">Reserved</span>
        </label>
      </div>

      {/* With Description */}
      <div className="flex flex-col gap-6 bg-gradient-to-br from-amber-950 to-gray-900 p-8 rounded-lg border border-amber-700/50 shadow-2xl">
        <h3 className="text-xs font-light text-amber-300 uppercase tracking-[0.2em] mb-2">
          Exclusive Access
        </h3>

        <label className="flex items-start gap-4 cursor-pointer group">
          <div className="w-6 h-6 mt-0.5 rounded-sm border border-amber-500 bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(251,191,36,0.3)]">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-amber-100 font-light tracking-wide">VIP Membership</span>
            <span className="text-xs text-amber-300/60 font-light leading-relaxed">
              Gain exclusive access to premium services, priority support, and special benefits
            </span>
          </div>
        </label>
      </div>

      {/* Different Sizes */}
      <div className="flex flex-col gap-6 bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-amber-700/30 shadow-2xl">
        <h3 className="text-xs font-light text-amber-300 uppercase tracking-[0.2em] mb-2">
          Size Variants
        </h3>

        <label className="flex items-center gap-3 cursor-pointer group">
          <div className="w-5 h-5 rounded-sm border border-amber-500 bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.3)]">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-sm text-amber-100 font-light tracking-wide">Compact</span>
        </label>

        <label className="flex items-center gap-4 cursor-pointer group">
          <div className="w-8 h-8 rounded-sm border border-amber-500 bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center shadow-[0_0_20px_rgba(251,191,36,0.4)]">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-base text-amber-100 font-light tracking-wide">Elegant</span>
        </label>
      </div>
    </div>
  )
}
