import { useState } from 'react'

export default function GradientSwitch() {
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
    <div className="flex flex-col gap-8 p-8 min-h-screen bg-slate-50">
      <h2 className="text-sm font-medium text-gray-400 uppercase tracking-widest">Gradient Switches</h2>

      {/* Basic Switches with Labels */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">Basic Toggles</h3>
        <div className="space-y-4 max-w-sm p-6 rounded-2xl bg-white shadow-lg">
          {Object.entries(switches).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <button
                onClick={() => toggle(key as keyof typeof switches)}
                className={`relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 ${
                  value
                    ? 'bg-gradient-to-r from-violet-500 to-purple-500'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
                role="switch"
                aria-checked={value}
              >
                <span
                  className={`absolute top-1 left-1 w-5 h-5 rounded-full transition-all duration-300 shadow-md ${
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
        <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">Sizes</h3>
        <div className="flex items-center gap-8">
          {/* Small */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-gray-500">SM</span>
            <button
              className="relative w-10 h-5 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full transition-all duration-300 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full translate-x-5 transition-transform duration-300 shadow-md" />
            </button>
          </div>

          {/* Medium */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-gray-500">MD</span>
            <button
              className="relative w-14 h-7 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full transition-all duration-300 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300 shadow-md" />
            </button>
          </div>

          {/* Large */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-gray-500">LG</span>
            <button
              className="relative w-18 h-9 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full transition-all duration-300 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-1.5 left-1.5 w-6 h-6 bg-white rounded-full translate-x-9 transition-transform duration-300 shadow-md" />
            </button>
          </div>
        </div>
      </div>

      {/* Gradient Variants */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">Gradient Variants</h3>
        <div className="flex flex-wrap items-center gap-6">
          {/* Sunset */}
          <button
            className="relative w-14 h-7 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300 shadow-md" />
          </button>

          {/* Ocean */}
          <button
            className="relative w-14 h-7 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300 shadow-md" />
          </button>

          {/* Forest */}
          <button
            className="relative w-14 h-7 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300 shadow-md" />
          </button>

          {/* Fire */}
          <button
            className="relative w-14 h-7 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300 shadow-md" />
          </button>

          {/* Aurora */}
          <button
            className="relative w-14 h-7 bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 rounded-full transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300 shadow-md" />
          </button>

          {/* Rose Gold */}
          <button
            className="relative w-14 h-7 bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300 rounded-full transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300 shadow-md" />
          </button>
        </div>
      </div>

      {/* Animated Gradient */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">Animated Gradient</h3>
        <div className="flex items-center gap-8">
          <button
            className="relative w-16 h-8 rounded-full transition-all duration-300 focus:outline-none overflow-hidden"
            style={{
              background: 'linear-gradient(270deg, #f093fb, #f5576c, #4facfe, #43e97b)',
              backgroundSize: '400% 400%',
              animation: 'gradientShift 3s ease infinite'
            }}
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full translate-x-8 transition-transform duration-300 shadow-lg" />
          </button>
          <style>{`
            @keyframes gradientShift {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
        </div>
      </div>

      {/* Gradient Thumb */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">Gradient Thumb</h3>
        <div className="flex items-center gap-8">
          <button
            className="relative w-14 h-7 bg-gray-200 rounded-full transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full translate-x-7 transition-transform duration-300 shadow-md" />
          </button>

          <button
            className="relative w-14 h-7 bg-gray-200 rounded-full transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full translate-x-7 transition-transform duration-300 shadow-md" />
          </button>

          <button
            className="relative w-14 h-7 bg-gray-200 rounded-full transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full translate-x-7 transition-transform duration-300 shadow-md" />
          </button>
        </div>
      </div>

      {/* Label Positions */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">Label Positions</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700 w-24">Label Left</span>
            <button
              className="relative w-14 h-7 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full transition-all duration-300 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300 shadow-md" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="relative w-14 h-7 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full transition-all duration-300 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300 shadow-md" />
            </button>
            <span className="text-sm font-medium text-gray-700">Label Right</span>
          </div>
        </div>
      </div>

      {/* Disabled States */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">Disabled</h3>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <button
              disabled
              className="relative w-14 h-7 bg-gray-200 rounded-full cursor-not-allowed opacity-50"
              role="switch"
              aria-checked="false"
              aria-disabled="true"
            >
              <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 shadow-sm" />
            </button>
            <span className="text-sm font-medium text-gray-400">Disabled Off</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              disabled
              className="relative w-14 h-7 bg-gradient-to-r from-violet-300 to-purple-300 rounded-full cursor-not-allowed opacity-50"
              role="switch"
              aria-checked="true"
              aria-disabled="true"
            >
              <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300 shadow-sm" />
            </button>
            <span className="text-sm font-medium text-gray-400">Disabled On</span>
          </div>
        </div>
      </div>

      {/* Card Context */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">In Context</h3>
        <div className="p-6 rounded-2xl bg-white shadow-xl max-w-md border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Theme Settings</h4>
              <p className="text-xs text-gray-400">Customize your experience</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div>
                <p className="text-sm font-medium text-gray-700">Gradient UI</p>
                <p className="text-xs text-gray-400">Enable colorful interface</p>
              </div>
              <button
                className="relative w-12 h-6 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full transition-all duration-300 focus:outline-none"
                role="switch"
                aria-checked="true"
              >
                <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full translate-x-6 transition-transform duration-300 shadow-md" />
              </button>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium text-gray-700">Animations</p>
                <p className="text-xs text-gray-400">Smooth transitions</p>
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
