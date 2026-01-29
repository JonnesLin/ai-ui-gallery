import { useState } from 'react'

export default function NatureCheckbox() {
  const [checked, setChecked] = useState({
    forest: true,
    ocean: false,
    mountain: true,
    meadow: false
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
      forest: newValue,
      ocean: newValue,
      mountain: newValue,
      meadow: newValue
    })
    setSelectAll(newValue)
  }

  return (
    <div className="flex flex-col gap-8 p-8 max-w-md bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 min-h-screen">
      <h2 className="text-2xl font-semibold text-green-800">
        Nature Checkboxes
      </h2>

      {/* Basic Checkboxes */}
      <div className="flex flex-col gap-5 bg-white/70 backdrop-blur-sm p-7 rounded-2xl border border-green-200/60 shadow-lg">
        <h3 className="text-sm font-medium text-green-700 mb-1">
          Natural Environments
        </h3>

        {Object.entries(checked).map(([key, value]) => (
          <label
            key={key}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div
              onClick={() => handleToggle(key as keyof typeof checked)}
              className={`w-7 h-7 rounded-lg border-2 transition-all duration-300 flex items-center justify-center ${
                value
                  ? 'border-green-600 bg-gradient-to-br from-green-500 to-emerald-600 shadow-md'
                  : 'border-green-300 bg-white/80 group-hover:border-green-500 group-hover:bg-green-50'
              }`}
            >
              {value && (
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className="text-sm text-green-800 font-medium capitalize">
              {key}
            </span>
          </label>
        ))}
      </div>

      {/* Indeterminate State */}
      <div className="flex flex-col gap-5 bg-white/70 backdrop-blur-sm p-7 rounded-2xl border border-teal-200/60 shadow-lg">
        <h3 className="text-sm font-medium text-teal-700 mb-1">
          Select All Landscapes
        </h3>

        <label className="flex items-center gap-3 cursor-pointer group">
          <div
            onClick={handleSelectAll}
            className={`w-7 h-7 rounded-lg border-2 transition-all duration-300 flex items-center justify-center ${
              selectAll === true || selectAll === 'indeterminate'
                ? 'border-teal-600 bg-gradient-to-br from-teal-500 to-cyan-600 shadow-md'
                : 'border-teal-300 bg-white/80 group-hover:border-teal-500 group-hover:bg-teal-50'
            }`}
          >
            {selectAll === true && (
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
            {selectAll === 'indeterminate' && (
              <div className="w-3.5 h-0.5 bg-white rounded-full" />
            )}
          </div>
          <span className="text-sm text-teal-800 font-medium">All environments</span>
        </label>
      </div>

      {/* Disabled States */}
      <div className="flex flex-col gap-5 bg-gray-100/70 backdrop-blur-sm p-7 rounded-2xl border border-gray-200/60 shadow-lg opacity-70">
        <h3 className="text-sm font-medium text-gray-600 mb-1">
          Unavailable Areas
        </h3>

        <label className="flex items-center gap-3 cursor-not-allowed">
          <div className="w-7 h-7 rounded-lg border-2 border-gray-300 bg-white/80" />
          <span className="text-sm text-gray-600 font-medium">Restricted area</span>
        </label>

        <label className="flex items-center gap-3 cursor-not-allowed">
          <div className="w-7 h-7 rounded-lg border-2 border-gray-300 bg-gray-300 flex items-center justify-center shadow-md">
            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-sm text-gray-600 font-medium">Protected zone</span>
        </label>
      </div>

      {/* With Description */}
      <div className="flex flex-col gap-5 bg-white/70 backdrop-blur-sm p-7 rounded-2xl border border-lime-200/60 shadow-lg">
        <h3 className="text-sm font-medium text-lime-700 mb-1">
          Featured Location
        </h3>

        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="w-7 h-7 mt-0.5 rounded-lg border-2 border-lime-600 bg-gradient-to-br from-lime-500 to-green-600 flex items-center justify-center flex-shrink-0 shadow-md">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-sm text-lime-800 font-medium">National Park Access</span>
            <span className="text-xs text-lime-600 leading-relaxed">
              Explore pristine wilderness areas with diverse flora and fauna
            </span>
          </div>
        </label>
      </div>

      {/* Different Sizes */}
      <div className="flex flex-col gap-5 bg-white/70 backdrop-blur-sm p-7 rounded-2xl border border-emerald-200/60 shadow-lg">
        <h3 className="text-sm font-medium text-emerald-700 mb-1">
          Size Options
        </h3>

        <label className="flex items-center gap-3 cursor-pointer group">
          <div className="w-5 h-5 rounded-lg border-2 border-emerald-300 bg-white/80 group-hover:border-emerald-500 group-hover:bg-emerald-50" />
          <span className="text-sm text-emerald-800 font-medium">Compact view</span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer group">
          <div className="w-9 h-9 rounded-lg border-2 border-emerald-600 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-base text-emerald-800 font-medium">Expanded view</span>
        </label>
      </div>
    </div>
  )
}
