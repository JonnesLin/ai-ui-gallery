import { useState } from 'react'

export default function CorporateCheckbox() {
  const [checked, setChecked] = useState({
    compliance: true,
    security: false,
    audit: true,
    reporting: false
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
      compliance: newValue,
      security: newValue,
      audit: newValue,
      reporting: newValue
    })
    setSelectAll(newValue)
  }

  return (
    <div className="flex flex-col gap-8 p-8 max-w-md bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
        Corporate Checkboxes
      </h2>

      {/* Basic Checkboxes */}
      <div className="flex flex-col gap-4 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
          System Preferences
        </h3>

        {Object.entries(checked).map(([key, value]) => (
          <label
            key={key}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div
              onClick={() => handleToggle(key as keyof typeof checked)}
              className={`w-5 h-5 rounded border transition-all duration-200 flex items-center justify-center ${
                value
                  ? 'border-blue-600 bg-blue-600'
                  : 'border-gray-300 bg-white group-hover:border-blue-500'
              }`}
            >
              {value && (
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className="text-sm text-gray-700 font-medium capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </span>
          </label>
        ))}
      </div>

      {/* Indeterminate State */}
      <div className="flex flex-col gap-4 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
          Bulk Actions
        </h3>

        <label className="flex items-center gap-3 cursor-pointer group">
          <div
            onClick={handleSelectAll}
            className={`w-5 h-5 rounded border transition-all duration-200 flex items-center justify-center ${
              selectAll === true || selectAll === 'indeterminate'
                ? 'border-blue-600 bg-blue-600'
                : 'border-gray-300 bg-white group-hover:border-blue-500'
            }`}
          >
            {selectAll === true && (
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
            {selectAll === 'indeterminate' && (
              <div className="w-2.5 h-0.5 bg-white rounded-full" />
            )}
          </div>
          <span className="text-sm text-gray-700 font-medium">Select all preferences</span>
        </label>
      </div>

      {/* Disabled States */}
      <div className="flex flex-col gap-4 bg-gray-100 p-6 rounded-lg border border-gray-200">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
          Disabled State
        </h3>

        <label className="flex items-center gap-3 cursor-not-allowed opacity-60">
          <div className="w-5 h-5 rounded border border-gray-300 bg-gray-50" />
          <span className="text-sm text-gray-500 font-medium">Disabled unchecked</span>
        </label>

        <label className="flex items-center gap-3 cursor-not-allowed opacity-60">
          <div className="w-5 h-5 rounded border border-gray-300 bg-gray-300 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-sm text-gray-500 font-medium">Disabled checked</span>
        </label>
      </div>

      {/* With Description */}
      <div className="flex flex-col gap-4 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
          Detailed Options
        </h3>

        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="w-5 h-5 mt-0.5 rounded border border-blue-600 bg-blue-600 flex items-center justify-center flex-shrink-0">
            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm text-gray-700 font-medium">Data Processing Agreement</span>
            <span className="text-xs text-gray-500 leading-relaxed">
              I agree to the terms and conditions of data processing as outlined in the corporate policy
            </span>
          </div>
        </label>
      </div>

      {/* Different Sizes */}
      <div className="flex flex-col gap-4 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
          Size Variants
        </h3>

        <label className="flex items-center gap-2.5 cursor-pointer group">
          <div className="w-4 h-4 rounded border border-gray-300 bg-white group-hover:border-blue-500" />
          <span className="text-xs text-gray-600 font-medium">Small checkbox</span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer group">
          <div className="w-6 h-6 rounded border border-blue-600 bg-blue-600 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-base text-gray-700 font-medium">Large checkbox</span>
        </label>
      </div>
    </div>
  )
}
