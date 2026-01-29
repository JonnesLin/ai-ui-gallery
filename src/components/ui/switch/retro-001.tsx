import { useState } from 'react'

export default function RetroSwitch() {
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
    <div className="flex flex-col gap-8 p-8 min-h-screen bg-amber-50">
      <h2 className="text-sm font-bold text-amber-800 uppercase tracking-widest" style={{ fontFamily: 'Georgia, serif' }}>Retro Switches</h2>

      {/* Basic Switches with Labels */}
      <div className="space-y-6">
        <h3 className="text-xs font-bold text-amber-700 uppercase tracking-wide">Basic Toggles</h3>
        <div className="space-y-4 max-w-sm p-6 bg-amber-100 rounded-lg border-2 border-amber-300 shadow-inner">
          {Object.entries(switches).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-sm font-medium text-amber-900 capitalize" style={{ fontFamily: 'Georgia, serif' }}>
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <button
                onClick={() => toggle(key as keyof typeof switches)}
                className={`relative w-14 h-7 rounded-full border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                  value
                    ? 'bg-amber-600 border-amber-700'
                    : 'bg-amber-200 border-amber-400 hover:bg-amber-300'
                }`}
                role="switch"
                aria-checked={value}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-all duration-200 shadow-md ${
                    value
                      ? 'translate-x-7 bg-amber-100'
                      : 'translate-x-0 bg-amber-500'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-6">
        <h3 className="text-xs font-bold text-amber-700 uppercase tracking-wide">Sizes</h3>
        <div className="flex items-center gap-8">
          {/* Small */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-amber-700">SM</span>
            <button
              className="relative w-10 h-5 bg-amber-600 border-2 border-amber-700 rounded-full transition-all duration-200 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-0 left-0 w-4 h-4 bg-amber-100 rounded-full translate-x-5 transition-transform duration-200 shadow-md" />
            </button>
          </div>

          {/* Medium */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-amber-700">MD</span>
            <button
              className="relative w-14 h-7 bg-amber-600 border-2 border-amber-700 rounded-full transition-all duration-200 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-amber-100 rounded-full translate-x-7 transition-transform duration-200 shadow-md" />
            </button>
          </div>

          {/* Large */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-amber-700">LG</span>
            <button
              className="relative w-18 h-9 bg-amber-600 border-2 border-amber-700 rounded-full transition-all duration-200 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-1 left-1 w-6 h-6 bg-amber-100 rounded-full translate-x-9 transition-transform duration-200 shadow-md" />
            </button>
          </div>
        </div>
      </div>

      {/* Vintage Color Variants */}
      <div className="space-y-6">
        <h3 className="text-xs font-bold text-amber-700 uppercase tracking-wide">Vintage Colors</h3>
        <div className="flex items-center gap-6">
          {/* Rust */}
          <button
            className="relative w-14 h-7 bg-orange-700 border-2 border-orange-900 rounded-full transition-all duration-200 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-orange-100 rounded-full translate-x-7 transition-transform duration-200 shadow-md" />
          </button>

          {/* Olive */}
          <button
            className="relative w-14 h-7 bg-olive-600 border-2 border-olive-800 rounded-full transition-all duration-200 focus:outline-none"
            style={{ backgroundColor: '#6b8e23' }}
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-lime-100 rounded-full translate-x-7 transition-transform duration-200 shadow-md" />
          </button>

          {/* Burgundy */}
          <button
            className="relative w-14 h-7 bg-rose-900 border-2 border-rose-950 rounded-full transition-all duration-200 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-rose-100 rounded-full translate-x-7 transition-transform duration-200 shadow-md" />
          </button>

          {/* Teal */}
          <button
            className="relative w-14 h-7 bg-teal-700 border-2 border-teal-900 rounded-full transition-all duration-200 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-teal-100 rounded-full translate-x-7 transition-transform duration-200 shadow-md" />
          </button>
        </div>
      </div>

      {/* Physical Switch Style */}
      <div className="space-y-6">
        <h3 className="text-xs font-bold text-amber-700 uppercase tracking-wide">Physical Style</h3>
        <div className="flex items-center gap-8">
          <button
            className="relative w-16 h-8 bg-gradient-to-b from-amber-300 to-amber-500 border-2 border-amber-600 rounded-lg shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.2)] transition-all duration-200 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-0.5 left-0.5 w-6 h-6 bg-gradient-to-b from-amber-100 to-amber-200 border border-amber-400 rounded-md translate-x-8 transition-transform duration-200 shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
          </button>

          <button
            className="relative w-16 h-8 bg-gradient-to-b from-stone-300 to-stone-500 border-2 border-stone-600 rounded-lg shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.2)] transition-all duration-200 focus:outline-none"
            role="switch"
            aria-checked="false"
          >
            <span className="absolute top-0.5 left-0.5 w-6 h-6 bg-gradient-to-b from-stone-100 to-stone-200 border border-stone-400 rounded-md transition-transform duration-200 shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
          </button>
        </div>
      </div>

      {/* With Text Labels */}
      <div className="space-y-6">
        <h3 className="text-xs font-bold text-amber-700 uppercase tracking-wide">With Text</h3>
        <div className="flex items-center gap-8">
          <button
            className="relative w-20 h-8 bg-amber-600 border-2 border-amber-700 rounded-full transition-all duration-200 focus:outline-none overflow-hidden"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute inset-0 flex items-center justify-between px-2 text-xs font-bold text-amber-100">
              <span>ON</span>
              <span className="opacity-50">OFF</span>
            </span>
            <span className="absolute top-0.5 left-0.5 w-6 h-6 bg-amber-100 rounded-full translate-x-12 transition-transform duration-200 shadow-md" />
          </button>

          <button
            className="relative w-20 h-8 bg-amber-200 border-2 border-amber-400 rounded-full transition-all duration-200 focus:outline-none overflow-hidden"
            role="switch"
            aria-checked="false"
          >
            <span className="absolute inset-0 flex items-center justify-between px-2 text-xs font-bold text-amber-700">
              <span className="opacity-50">ON</span>
              <span>OFF</span>
            </span>
            <span className="absolute top-0.5 left-0.5 w-6 h-6 bg-amber-500 rounded-full transition-transform duration-200 shadow-md" />
          </button>
        </div>
      </div>

      {/* Label Positions */}
      <div className="space-y-6">
        <h3 className="text-xs font-bold text-amber-700 uppercase tracking-wide">Label Positions</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-amber-900 w-24" style={{ fontFamily: 'Georgia, serif' }}>Label Left</span>
            <button
              className="relative w-14 h-7 bg-amber-600 border-2 border-amber-700 rounded-full transition-all duration-200 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-amber-100 rounded-full translate-x-7 transition-transform duration-200 shadow-md" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="relative w-14 h-7 bg-amber-600 border-2 border-amber-700 rounded-full transition-all duration-200 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-amber-100 rounded-full translate-x-7 transition-transform duration-200 shadow-md" />
            </button>
            <span className="text-sm font-medium text-amber-900" style={{ fontFamily: 'Georgia, serif' }}>Label Right</span>
          </div>
        </div>
      </div>

      {/* Disabled States */}
      <div className="space-y-6">
        <h3 className="text-xs font-bold text-amber-700 uppercase tracking-wide">Disabled</h3>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <button
              disabled
              className="relative w-14 h-7 bg-amber-200 border-2 border-amber-300 rounded-full cursor-not-allowed opacity-50"
              role="switch"
              aria-checked="false"
              aria-disabled="true"
            >
              <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-amber-400 rounded-full transition-transform duration-200" />
            </button>
            <span className="text-sm font-medium text-amber-400">Disabled Off</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              disabled
              className="relative w-14 h-7 bg-amber-400 border-2 border-amber-500 rounded-full cursor-not-allowed opacity-50"
              role="switch"
              aria-checked="true"
              aria-disabled="true"
            >
              <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-amber-100 rounded-full translate-x-7 transition-transform duration-200" />
            </button>
            <span className="text-sm font-medium text-amber-400">Disabled On</span>
          </div>
        </div>
      </div>

      {/* Card Context */}
      <div className="space-y-6">
        <h3 className="text-xs font-bold text-amber-700 uppercase tracking-wide">In Context</h3>
        <div className="p-6 bg-amber-100 rounded-xl border-2 border-amber-300 shadow-lg max-w-md">
          <h4 className="text-lg font-bold text-amber-900 mb-6 pb-2 border-b-2 border-amber-300" style={{ fontFamily: 'Georgia, serif' }}>Radio Settings</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-semibold text-amber-900" style={{ fontFamily: 'Georgia, serif' }}>AM Reception</p>
                <p className="text-xs text-amber-600">Tune into classics</p>
              </div>
              <button
                className="relative w-12 h-6 bg-amber-600 border-2 border-amber-700 rounded-full transition-all duration-200 focus:outline-none"
                role="switch"
                aria-checked="true"
              >
                <span className="absolute top-0 left-0 w-5 h-5 bg-amber-100 rounded-full translate-x-6 transition-transform duration-200 shadow-md" />
              </button>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-semibold text-amber-900" style={{ fontFamily: 'Georgia, serif' }}>Stereo Mode</p>
                <p className="text-xs text-amber-600">Enhanced sound</p>
              </div>
              <button
                className="relative w-12 h-6 bg-amber-200 border-2 border-amber-400 rounded-full transition-all duration-200 focus:outline-none"
                role="switch"
                aria-checked="false"
              >
                <span className="absolute top-0 left-0 w-5 h-5 bg-amber-500 rounded-full transition-transform duration-200 shadow-md" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
