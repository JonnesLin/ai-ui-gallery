import { useState } from 'react'

export default function DarkSwitch() {
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
    <div className="flex flex-col gap-8 p-8 min-h-screen bg-gray-950">
      <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest">Dark Theme Switches</h2>

      {/* Basic Switches with Labels */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-gray-600 uppercase tracking-wide">Basic Toggles</h3>
        <div className="space-y-4 max-w-sm p-6 rounded-xl bg-gray-900 border border-gray-800">
          {Object.entries(switches).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-300 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <button
                onClick={() => toggle(key as keyof typeof switches)}
                className={`relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                  value
                    ? 'bg-blue-600'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
                role="switch"
                aria-checked={value}
              >
                <span
                  className={`absolute top-1 left-1 w-5 h-5 rounded-full transition-all duration-300 ${
                    value
                      ? 'translate-x-7 bg-white'
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
        <h3 className="text-xs font-medium text-gray-600 uppercase tracking-wide">Sizes</h3>
        <div className="flex items-center gap-8">
          {/* Small */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-gray-500">SM</span>
            <button
              className="relative w-10 h-5 bg-blue-600 rounded-full transition-all duration-300 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full translate-x-5 transition-transform duration-300" />
            </button>
          </div>

          {/* Medium */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-gray-500">MD</span>
            <button
              className="relative w-14 h-7 bg-blue-600 rounded-full transition-all duration-300 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300" />
            </button>
          </div>

          {/* Large */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-gray-500">LG</span>
            <button
              className="relative w-18 h-9 bg-blue-600 rounded-full transition-all duration-300 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-1.5 left-1.5 w-6 h-6 bg-white rounded-full translate-x-9 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Color Variants */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-gray-600 uppercase tracking-wide">Color Variants</h3>
        <div className="flex items-center gap-6">
          <button
            className="relative w-14 h-7 bg-emerald-600 rounded-full transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300" />
          </button>

          <button
            className="relative w-14 h-7 bg-purple-600 rounded-full transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300" />
          </button>

          <button
            className="relative w-14 h-7 bg-rose-600 rounded-full transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300" />
          </button>

          <button
            className="relative w-14 h-7 bg-amber-600 rounded-full transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* With Glow */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-gray-600 uppercase tracking-wide">Glow Effect</h3>
        <div className="flex items-center gap-8">
          <button
            className="relative w-14 h-7 bg-blue-600 rounded-full transition-all duration-300 focus:outline-none shadow-[0_0_20px_rgba(37,99,235,0.5)]"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300" />
          </button>

          <button
            className="relative w-14 h-7 bg-emerald-500 rounded-full transition-all duration-300 focus:outline-none shadow-[0_0_20px_rgba(16,185,129,0.5)]"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300" />
          </button>

          <button
            className="relative w-14 h-7 bg-violet-500 rounded-full transition-all duration-300 focus:outline-none shadow-[0_0_20px_rgba(139,92,246,0.5)]"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Outlined Variant */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-gray-600 uppercase tracking-wide">Outlined</h3>
        <div className="flex items-center gap-8">
          <button
            className="relative w-14 h-7 bg-transparent border-2 border-blue-500 rounded-full transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-blue-500 rounded-full translate-x-7 transition-transform duration-300" />
          </button>

          <button
            className="relative w-14 h-7 bg-transparent border-2 border-gray-600 rounded-full transition-all duration-300 hover:border-gray-500 focus:outline-none"
            role="switch"
            aria-checked="false"
          >
            <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-gray-600 rounded-full transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Label Positions */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-gray-600 uppercase tracking-wide">Label Positions</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-300 w-24">Label Left</span>
            <button
              className="relative w-14 h-7 bg-blue-600 rounded-full transition-all duration-300 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="relative w-14 h-7 bg-blue-600 rounded-full transition-all duration-300 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300" />
            </button>
            <span className="text-sm font-medium text-gray-300">Label Right</span>
          </div>
        </div>
      </div>

      {/* Disabled States */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-gray-600 uppercase tracking-wide">Disabled</h3>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <button
              disabled
              className="relative w-14 h-7 bg-gray-800 rounded-full cursor-not-allowed opacity-50"
              role="switch"
              aria-checked="false"
              aria-disabled="true"
            >
              <span className="absolute top-1 left-1 w-5 h-5 bg-gray-600 rounded-full transition-transform duration-300" />
            </button>
            <span className="text-sm font-medium text-gray-600">Disabled Off</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              disabled
              className="relative w-14 h-7 bg-blue-600/50 rounded-full cursor-not-allowed opacity-50"
              role="switch"
              aria-checked="true"
              aria-disabled="true"
            >
              <span className="absolute top-1 left-1 w-5 h-5 bg-white/70 rounded-full translate-x-7 transition-transform duration-300" />
            </button>
            <span className="text-sm font-medium text-gray-600">Disabled On</span>
          </div>
        </div>
      </div>

      {/* Card Context */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-gray-600 uppercase tracking-wide">In Context</h3>
        <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 max-w-md">
          <h4 className="text-lg font-semibold text-white mb-6">App Settings</h4>
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-200">Dark Mode</p>
                <p className="text-xs text-gray-500">Enable dark interface</p>
              </div>
              <button
                className="relative w-12 h-6 bg-blue-600 rounded-full transition-all duration-300 focus:outline-none"
                role="switch"
                aria-checked="true"
              >
                <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full translate-x-6 transition-transform duration-300" />
              </button>
            </div>
            <div className="h-px bg-gray-800" />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-200">Sound Effects</p>
                <p className="text-xs text-gray-500">Play sounds on actions</p>
              </div>
              <button
                className="relative w-12 h-6 bg-gray-700 rounded-full transition-all duration-300 focus:outline-none"
                role="switch"
                aria-checked="false"
              >
                <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-gray-400 rounded-full transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
