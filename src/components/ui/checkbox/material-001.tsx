import { useState } from 'react'

export default function MaterialCheckbox() {
  const [checked, setChecked] = useState({
    camera: true,
    location: false,
    notifications: true,
    storage: false
  })
  const [selectAll, setSelectAll] = useState<boolean | 'indeterminate'>('indeterminate')
  const [singleChecked, setSingleChecked] = useState(true)

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
      camera: newValue,
      location: newValue,
      notifications: newValue,
      storage: newValue
    })
    setSelectAll(newValue)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col gap-8">
      <h2 className="text-2xl font-semibold text-gray-800">Material Checkboxes</h2>

      {/* Basic Checkboxes */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-4">
          Permissions
        </h3>

        <div className="flex flex-col gap-3">
          {Object.entries(checked).map(([key, value]) => (
            <label
              key={key}
              className="flex items-center gap-3 cursor-pointer group relative"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() => handleToggle(key as keyof typeof checked)}
                  className="peer sr-only"
                />
                <div
                  className={`w-5 h-5 rounded border-2 transition-all duration-200 flex items-center justify-center ${
                    value
                      ? 'bg-indigo-600 border-indigo-600'
                      : 'border-gray-400 group-hover:border-indigo-600'
                  }`}
                >
                  {value && (
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <div className="absolute inset-0 -m-3 rounded-full group-hover:bg-indigo-600/10 transition-colors" />
              </div>
              <span className="text-gray-700 select-none capitalize">
                {key} access
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Indeterminate State */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-4">
          Select All
        </h3>

        <label className="flex items-center gap-3 cursor-pointer group relative">
          <div className="relative">
            <div
              onClick={handleSelectAll}
              className={`w-5 h-5 rounded border-2 transition-all duration-200 flex items-center justify-center ${
                selectAll === true || selectAll === 'indeterminate'
                  ? 'bg-indigo-600 border-indigo-600'
                  : 'border-gray-400 group-hover:border-indigo-600'
              }`}
            >
              {selectAll === true && (
                <svg
                  className="w-3.5 h-3.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
              {selectAll === 'indeterminate' && (
                <div className="w-3 h-0.5 bg-white rounded-full" />
              )}
            </div>
            <div className="absolute inset-0 -m-3 rounded-full group-hover:bg-indigo-600/10 transition-colors" />
          </div>
          <span className="text-gray-700 select-none">All permissions</span>
        </label>
      </div>

      {/* Different Sizes */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-4">
          Size Variants
        </h3>

        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <div className="w-4 h-4 rounded border-2 bg-indigo-600 border-indigo-600 flex items-center justify-center">
                <svg
                  className="w-2.5 h-2.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="absolute inset-0 -m-3 rounded-full group-hover:bg-indigo-600/10 transition-colors" />
            </div>
            <span className="text-sm text-gray-700 select-none">Small checkbox</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <div className="w-5 h-5 rounded border-2 bg-indigo-600 border-indigo-600 flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="absolute inset-0 -m-3 rounded-full group-hover:bg-indigo-600/10 transition-colors" />
            </div>
            <span className="text-gray-700 select-none">Medium checkbox (default)</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <div className="w-6 h-6 rounded border-2 bg-indigo-600 border-indigo-600 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="absolute inset-0 -m-3 rounded-full group-hover:bg-indigo-600/10 transition-colors" />
            </div>
            <span className="text-lg text-gray-700 select-none">Large checkbox</span>
          </label>
        </div>
      </div>

      {/* Disabled States */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-4">
          Disabled States
        </h3>

        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-3 cursor-not-allowed opacity-50">
            <div className="w-5 h-5 rounded border-2 border-gray-400" />
            <span className="text-gray-700 select-none">Disabled unchecked</span>
          </label>

          <label className="flex items-center gap-3 cursor-not-allowed opacity-50">
            <div className="w-5 h-5 rounded border-2 bg-gray-400 border-gray-400 flex items-center justify-center">
              <svg
                className="w-3.5 h-3.5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-gray-700 select-none">Disabled checked</span>
          </label>
        </div>
      </div>

      {/* Color Variants */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-4">
          Color Variants
        </h3>

        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <div className="w-5 h-5 rounded border-2 bg-indigo-600 border-indigo-600 flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="absolute inset-0 -m-3 rounded-full group-hover:bg-indigo-600/10 transition-colors" />
            </div>
            <span className="text-gray-700 select-none">Primary (Indigo)</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <div className="w-5 h-5 rounded border-2 bg-teal-600 border-teal-600 flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="absolute inset-0 -m-3 rounded-full group-hover:bg-teal-600/10 transition-colors" />
            </div>
            <span className="text-gray-700 select-none">Success (Teal)</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <div className="w-5 h-5 rounded border-2 bg-amber-600 border-amber-600 flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="absolute inset-0 -m-3 rounded-full group-hover:bg-amber-600/10 transition-colors" />
            </div>
            <span className="text-gray-700 select-none">Warning (Amber)</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <div className="w-5 h-5 rounded border-2 bg-red-600 border-red-600 flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="absolute inset-0 -m-3 rounded-full group-hover:bg-red-600/10 transition-colors" />
            </div>
            <span className="text-gray-700 select-none">Error (Red)</span>
          </label>
        </div>
      </div>

      {/* With Description */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-4">
          With Description
        </h3>

        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative mt-1">
            <div
              onClick={() => setSingleChecked(!singleChecked)}
              className={`w-5 h-5 rounded border-2 transition-all duration-200 flex items-center justify-center ${
                singleChecked
                  ? 'bg-indigo-600 border-indigo-600'
                  : 'border-gray-400 group-hover:border-indigo-600'
              }`}
            >
              {singleChecked && (
                <svg
                  className="w-3.5 h-3.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <div className="absolute inset-0 -m-3 rounded-full group-hover:bg-indigo-600/10 transition-colors" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-700 font-medium select-none">
              Terms and Conditions
            </span>
            <span className="text-sm text-gray-500 select-none">
              I agree to the terms of service and privacy policy. This includes data processing and cookie usage.
            </span>
          </div>
        </label>
      </div>
    </div>
  )
}
