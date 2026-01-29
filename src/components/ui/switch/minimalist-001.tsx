import { useState } from 'react'

export default function MinimalistSwitch() {
  const [switches, setSwitches] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
    marketing: false,
  })

  const toggle = (key: keyof typeof switches) => {
    setSwitches(s => ({ ...s, [key]: !s[key] }))
  }

  return (
    <div className="flex flex-col gap-8 p-8 bg-white min-h-screen">
      <h2 className="text-sm font-medium text-gray-400 uppercase tracking-widest">Minimalist Switches</h2>

      {/* Basic Switches with Labels */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wide">Basic Toggles</h3>
        <div className="space-y-4 max-w-sm">
          {Object.entries(switches).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-sm font-light text-gray-700 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <button
                onClick={() => toggle(key as keyof typeof switches)}
                className={`relative w-12 h-6 rounded-full border transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 ${
                  value
                    ? 'bg-gray-900 border-gray-900'
                    : 'bg-white border-gray-300 hover:border-gray-400'
                }`}
                role="switch"
                aria-checked={value}
              >
                <span
                  className={`absolute top-1 left-1 w-4 h-4 rounded-full transition-all duration-300 ${
                    value
                      ? 'translate-x-6 bg-white'
                      : 'translate-x-0 bg-gray-400'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wide">Sizes</h3>
        <div className="flex items-center gap-8">
          {/* Small */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-light text-gray-500">SM</span>
            <button
              className="relative w-9 h-5 bg-gray-900 border border-gray-900 rounded-full transition-all duration-300 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full translate-x-4 transition-transform duration-300" />
            </button>
          </div>

          {/* Medium */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-light text-gray-500">MD</span>
            <button
              className="relative w-12 h-6 bg-gray-900 border border-gray-900 rounded-full transition-all duration-300 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full translate-x-6 transition-transform duration-300" />
            </button>
          </div>

          {/* Large */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-light text-gray-500">LG</span>
            <button
              className="relative w-16 h-8 bg-gray-900 border border-gray-900 rounded-full transition-all duration-300 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full translate-x-8 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* With Icons */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wide">With Icons</h3>
        <div className="flex items-center gap-8">
          <button
            className="relative w-14 h-7 bg-gray-900 border border-gray-900 rounded-full transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300 flex items-center justify-center">
              <svg className="w-3 h-3 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
          </button>

          <button
            className="relative w-14 h-7 bg-white border border-gray-300 rounded-full transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="false"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-gray-300 rounded-full transition-transform duration-300 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Label Positions */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wide">Label Positions</h3>
        <div className="space-y-4">
          {/* Label Left */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-light text-gray-700 w-24">Label Left</span>
            <button
              className="relative w-12 h-6 bg-gray-900 border border-gray-900 rounded-full transition-all duration-300 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full translate-x-6 transition-transform duration-300" />
            </button>
          </div>

          {/* Label Right */}
          <div className="flex items-center gap-4">
            <button
              className="relative w-12 h-6 bg-gray-900 border border-gray-900 rounded-full transition-all duration-300 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full translate-x-6 transition-transform duration-300" />
            </button>
            <span className="text-sm font-light text-gray-700">Label Right</span>
          </div>
        </div>
      </div>

      {/* Disabled States */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wide">Disabled</h3>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <button
              disabled
              className="relative w-12 h-6 bg-gray-100 border border-gray-200 rounded-full cursor-not-allowed opacity-50"
              role="switch"
              aria-checked="false"
              aria-disabled="true"
            >
              <span className="absolute top-1 left-1 w-4 h-4 bg-gray-300 rounded-full transition-transform duration-300" />
            </button>
            <span className="text-sm font-light text-gray-400">Disabled Off</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              disabled
              className="relative w-12 h-6 bg-gray-400 border border-gray-400 rounded-full cursor-not-allowed opacity-50"
              role="switch"
              aria-checked="true"
              aria-disabled="true"
            >
              <span className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full translate-x-6 transition-transform duration-300" />
            </button>
            <span className="text-sm font-light text-gray-400">Disabled On</span>
          </div>
        </div>
      </div>

      {/* Bordered Variant */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wide">Bordered Variant</h3>
        <div className="flex items-center gap-8">
          <button
            className="relative w-14 h-7 bg-transparent border-2 border-gray-900 rounded-full transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-gray-900 rounded-full translate-x-7 transition-transform duration-300" />
          </button>

          <button
            className="relative w-14 h-7 bg-transparent border-2 border-gray-300 rounded-full transition-all duration-300 hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:ring-offset-2"
            role="switch"
            aria-checked="false"
          >
            <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-gray-300 rounded-full transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  )
}
