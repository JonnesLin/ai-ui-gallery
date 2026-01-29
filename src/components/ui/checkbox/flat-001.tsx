import { useState } from 'react'

export default function FlatCheckbox() {
  const [checked, setChecked] = useState({
    notifications: true,
    newsletter: false,
    updates: true,
    marketing: false
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
      notifications: newValue,
      newsletter: newValue,
      updates: newValue,
      marketing: newValue
    })
    setSelectAll(newValue)
  }

  return (
    <div className="flex flex-col gap-8 p-8 max-w-md bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800">
        Flat Design Checkboxes
      </h2>

      {/* Basic Checkboxes */}
      <div className="flex flex-col gap-4 bg-white p-6">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          Preferences
        </h3>

        {Object.entries(checked).map(([key, value]) => (
          <label
            key={key}
            className="flex items-center gap-4 cursor-pointer group"
          >
            <div
              onClick={() => handleToggle(key as keyof typeof checked)}
              className={`w-6 h-6 transition-colors ${
                value
                  ? 'bg-blue-500'
                  : 'bg-gray-300 group-hover:bg-gray-400'
              } flex items-center justify-center`}
            >
              {value && (
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className="text-sm text-gray-700 capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </span>
          </label>
        ))}
      </div>

      {/* Indeterminate State */}
      <div className="flex flex-col gap-4 bg-white p-6">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          Bulk Selection
        </h3>

        <label className="flex items-center gap-4 cursor-pointer group">
          <div
            onClick={handleSelectAll}
            className={`w-6 h-6 transition-colors flex items-center justify-center ${
              selectAll === true || selectAll === 'indeterminate'
                ? 'bg-blue-500'
                : 'bg-gray-300 group-hover:bg-gray-400'
            }`}
          >
            {selectAll === true && (
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
            {selectAll === 'indeterminate' && (
              <div className="w-3 h-0.5 bg-white" />
            )}
          </div>
          <span className="text-sm text-gray-700">Select all options</span>
        </label>
      </div>

      {/* Color Variants */}
      <div className="flex flex-col gap-4 bg-white p-6">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          Color Variants
        </h3>

        <label className="flex items-center gap-4 cursor-pointer">
          <div className="w-6 h-6 bg-green-500 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-sm text-gray-700">Success</span>
        </label>

        <label className="flex items-center gap-4 cursor-pointer">
          <div className="w-6 h-6 bg-orange-500 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-sm text-gray-700">Warning</span>
        </label>

        <label className="flex items-center gap-4 cursor-pointer">
          <div className="w-6 h-6 bg-red-500 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-sm text-gray-700">Error</span>
        </label>

        <label className="flex items-center gap-4 cursor-pointer">
          <div className="w-6 h-6 bg-purple-500 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-sm text-gray-700">Info</span>
        </label>
      </div>

      {/* Disabled States */}
      <div className="flex flex-col gap-4 bg-white p-6">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          Disabled
        </h3>

        <label className="flex items-center gap-4 cursor-not-allowed opacity-50">
          <div className="w-6 h-6 bg-gray-300" />
          <span className="text-sm text-gray-700">Disabled unchecked</span>
        </label>

        <label className="flex items-center gap-4 cursor-not-allowed opacity-50">
          <div className="w-6 h-6 bg-gray-400 flex items-center justify-center">
            <svg className="w-4 h-4 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-sm text-gray-700">Disabled checked</span>
        </label>
      </div>

      {/* With Description */}
      <div className="flex flex-col gap-4 bg-white p-6">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          With Description
        </h3>

        <label className="flex items-start gap-4 cursor-pointer group">
          <div className="w-6 h-6 mt-0.5 bg-blue-500 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm text-gray-800 font-semibold">Terms and Conditions</span>
            <span className="text-xs text-gray-600">I agree to the terms of service and privacy policy. Pure flat colors with no gradients or shadows.</span>
          </div>
        </label>
      </div>
    </div>
  )
}
