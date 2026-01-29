import { useState } from 'react'

export default function MonochromeCheckbox() {
  const [checked, setChecked] = useState({
    option1: true,
    option2: false,
    option3: true,
    option4: false
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
      option1: newValue,
      option2: newValue,
      option3: newValue,
      option4: newValue
    })
    setSelectAll(newValue)
  }

  return (
    <div className="flex flex-col gap-8 p-8 max-w-md bg-white min-h-screen">
      <h2 className="text-2xl font-bold text-black">
        Monochrome Checkboxes
      </h2>

      {/* Basic Checkboxes */}
      <div className="flex flex-col gap-4 bg-gray-50 p-6 border-2 border-black">
        <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-2">
          Standard Options
        </h3>

        {Object.entries(checked).map(([key, value]) => (
          <label
            key={key}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div
              onClick={() => handleToggle(key as keyof typeof checked)}
              className={`w-6 h-6 border-2 border-black transition-all duration-200 flex items-center justify-center ${
                value
                  ? 'bg-black'
                  : 'bg-white group-hover:bg-gray-100'
              }`}
            >
              {value && (
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className="text-sm text-black font-medium">
              {key.replace(/([A-Z])/g, ' $1').replace(/(\d+)/, ' $1').trim().toUpperCase()}
            </span>
          </label>
        ))}
      </div>

      {/* Indeterminate State */}
      <div className="flex flex-col gap-4 bg-black p-6 border-2 border-black">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
          Bulk Selection
        </h3>

        <label className="flex items-center gap-3 cursor-pointer group">
          <div
            onClick={handleSelectAll}
            className={`w-6 h-6 border-2 transition-all duration-200 flex items-center justify-center ${
              selectAll === true || selectAll === 'indeterminate'
                ? 'border-white bg-white'
                : 'border-white bg-black group-hover:bg-gray-900'
            }`}
          >
            {selectAll === true && (
              <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
              </svg>
            )}
            {selectAll === 'indeterminate' && (
              <div className="w-3 h-0.5 bg-black" />
            )}
          </div>
          <span className="text-sm text-white font-medium">SELECT ALL OPTIONS</span>
        </label>
      </div>

      {/* Disabled States */}
      <div className="flex flex-col gap-4 bg-gray-200 p-6 border-2 border-gray-400">
        <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-2">
          Disabled
        </h3>

        <label className="flex items-center gap-3 cursor-not-allowed opacity-50">
          <div className="w-6 h-6 border-2 border-gray-400 bg-white" />
          <span className="text-sm text-gray-600 font-medium">DISABLED UNCHECKED</span>
        </label>

        <label className="flex items-center gap-3 cursor-not-allowed opacity-50">
          <div className="w-6 h-6 border-2 border-gray-400 bg-gray-400 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-sm text-gray-600 font-medium">DISABLED CHECKED</span>
        </label>
      </div>

      {/* With Description */}
      <div className="flex flex-col gap-4 bg-gray-900 p-6 border-2 border-black">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
          Detailed Option
        </h3>

        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="w-6 h-6 mt-0.5 border-2 border-white bg-white flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm text-white font-bold">TERMS & CONDITIONS</span>
            <span className="text-xs text-gray-400 leading-relaxed">
              I AGREE TO THE TERMS OF SERVICE AND PRIVACY POLICY
            </span>
          </div>
        </label>
      </div>

      {/* Different Sizes */}
      <div className="flex flex-col gap-4 bg-white p-6 border-2 border-black">
        <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-2">
          Size Variants
        </h3>

        <label className="flex items-center gap-3 cursor-pointer group">
          <div className="w-5 h-5 border-2 border-black bg-black flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-sm text-black font-medium">SMALL SIZE</span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer group">
          <div className="w-8 h-8 border-2 border-black bg-black flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-base text-black font-bold">LARGE SIZE</span>
        </label>
      </div>

      {/* Checkbox Group */}
      <div className="flex flex-col gap-4 bg-gray-100 p-6 border-2 border-black">
        <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-2">
          Checkbox Grid
        </h3>

        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <div className="w-5 h-5 border-2 border-black bg-black flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-xs text-black font-medium">A</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <div className="w-5 h-5 border-2 border-black bg-white" />
            <span className="text-xs text-black font-medium">B</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <div className="w-5 h-5 border-2 border-black bg-black flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-xs text-black font-medium">C</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <div className="w-5 h-5 border-2 border-black bg-white" />
            <span className="text-xs text-black font-medium">D</span>
          </label>
        </div>
      </div>
    </div>
  )
}
