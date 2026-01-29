import { useState } from 'react'

export default function PastelSwitch() {
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
    <div className="flex flex-col gap-8 p-8 min-h-screen bg-pink-50">
      <h2 className="text-sm font-medium text-pink-400 uppercase tracking-widest">Pastel Switches</h2>

      {/* Basic Switches with Labels */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-pink-300 uppercase tracking-wide">Basic Toggles</h3>
        <div className="space-y-4 max-w-sm p-6 bg-white rounded-3xl shadow-sm border border-pink-100">
          {Object.entries(switches).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <button
                onClick={() => toggle(key as keyof typeof switches)}
                className={`relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-200 ${
                  value
                    ? 'bg-pink-300'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
                role="switch"
                aria-checked={value}
              >
                <span
                  className={`absolute top-1 left-1 w-5 h-5 rounded-full transition-all duration-300 shadow-sm ${
                    value
                      ? 'translate-x-7 bg-white'
                      : 'translate-x-0 bg-white'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-pink-300 uppercase tracking-wide">Sizes</h3>
        <div className="flex items-center gap-8">
          {/* Small */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-pink-400">SM</span>
            <button
              className="relative w-10 h-5 bg-pink-300 rounded-full transition-all duration-300 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full translate-x-5 transition-transform duration-300 shadow-sm" />
            </button>
          </div>

          {/* Medium */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-pink-400">MD</span>
            <button
              className="relative w-14 h-7 bg-pink-300 rounded-full transition-all duration-300 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300 shadow-sm" />
            </button>
          </div>

          {/* Large */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-pink-400">LG</span>
            <button
              className="relative w-18 h-9 bg-pink-300 rounded-full transition-all duration-300 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-1.5 left-1.5 w-6 h-6 bg-white rounded-full translate-x-9 transition-transform duration-300 shadow-sm" />
            </button>
          </div>
        </div>
      </div>

      {/* Pastel Color Variants */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-pink-300 uppercase tracking-wide">Color Variants</h3>
        <div className="flex flex-wrap items-center gap-6">
          {/* Lavender */}
          <button
            className="relative w-14 h-7 bg-purple-300 rounded-full transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300 shadow-sm" />
          </button>

          {/* Mint */}
          <button
            className="relative w-14 h-7 bg-emerald-300 rounded-full transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300 shadow-sm" />
          </button>

          {/* Sky */}
          <button
            className="relative w-14 h-7 bg-sky-300 rounded-full transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300 shadow-sm" />
          </button>

          {/* Peach */}
          <button
            className="relative w-14 h-7 bg-orange-200 rounded-full transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300 shadow-sm" />
          </button>

          {/* Lemon */}
          <button
            className="relative w-14 h-7 bg-yellow-200 rounded-full transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300 shadow-sm" />
          </button>

          {/* Rose */}
          <button
            className="relative w-14 h-7 bg-rose-300 rounded-full transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300 shadow-sm" />
          </button>
        </div>
      </div>

      {/* Gradient Pastel */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-pink-300 uppercase tracking-wide">Gradient Pastel</h3>
        <div className="flex items-center gap-8">
          <button
            className="relative w-14 h-7 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300 shadow-sm" />
          </button>

          <button
            className="relative w-14 h-7 bg-gradient-to-r from-sky-300 to-emerald-300 rounded-full transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300 shadow-sm" />
          </button>

          <button
            className="relative w-14 h-7 bg-gradient-to-r from-orange-200 to-rose-300 rounded-full transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300 shadow-sm" />
          </button>
        </div>
      </div>

      {/* Colored Thumb */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-pink-300 uppercase tracking-wide">Colored Thumb</h3>
        <div className="flex items-center gap-8">
          <button
            className="relative w-14 h-7 bg-pink-100 rounded-full transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-pink-400 rounded-full translate-x-7 transition-transform duration-300 shadow-sm" />
          </button>

          <button
            className="relative w-14 h-7 bg-purple-100 rounded-full transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-purple-400 rounded-full translate-x-7 transition-transform duration-300 shadow-sm" />
          </button>

          <button
            className="relative w-14 h-7 bg-emerald-100 rounded-full transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-emerald-400 rounded-full translate-x-7 transition-transform duration-300 shadow-sm" />
          </button>
        </div>
      </div>

      {/* Label Positions */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-pink-300 uppercase tracking-wide">Label Positions</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600 w-24">Label Left</span>
            <button
              className="relative w-14 h-7 bg-pink-300 rounded-full transition-all duration-300 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300 shadow-sm" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="relative w-14 h-7 bg-pink-300 rounded-full transition-all duration-300 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300 shadow-sm" />
            </button>
            <span className="text-sm font-medium text-gray-600">Label Right</span>
          </div>
        </div>
      </div>

      {/* Disabled States */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-pink-300 uppercase tracking-wide">Disabled</h3>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <button
              disabled
              className="relative w-14 h-7 bg-gray-200 rounded-full cursor-not-allowed opacity-50"
              role="switch"
              aria-checked="false"
              aria-disabled="true"
            >
              <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300" />
            </button>
            <span className="text-sm font-medium text-gray-400">Disabled Off</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              disabled
              className="relative w-14 h-7 bg-pink-200 rounded-full cursor-not-allowed opacity-50"
              role="switch"
              aria-checked="true"
              aria-disabled="true"
            >
              <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300" />
            </button>
            <span className="text-sm font-medium text-gray-400">Disabled On</span>
          </div>
        </div>
      </div>

      {/* Card Context */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-pink-300 uppercase tracking-wide">In Context</h3>
        <div className="p-6 bg-white rounded-3xl shadow-lg shadow-pink-100/50 max-w-md border border-pink-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-700">Wellness</h4>
              <p className="text-xs text-pink-400">Your daily settings</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-pink-50">
              <div>
                <p className="text-sm font-medium text-gray-700">Morning Reminder</p>
                <p className="text-xs text-gray-400">Start your day right</p>
              </div>
              <button
                className="relative w-12 h-6 bg-pink-300 rounded-full transition-all duration-300 focus:outline-none"
                role="switch"
                aria-checked="true"
              >
                <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full translate-x-6 transition-transform duration-300 shadow-sm" />
              </button>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium text-gray-700">Sleep Tracking</p>
                <p className="text-xs text-gray-400">Monitor your rest</p>
              </div>
              <button
                className="relative w-12 h-6 bg-gray-200 rounded-full transition-all duration-300 focus:outline-none"
                role="switch"
                aria-checked="false"
              >
                <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 shadow-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
