import { useState } from 'react'

export default function GlassmorphismSwitch() {
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
    <div
      className="flex flex-col gap-8 p-8 min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
      }}
    >
      <h2 className="text-sm font-medium text-white/80 uppercase tracking-widest">Glassmorphism Switches</h2>

      {/* Basic Switches with Labels */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-white/60 uppercase tracking-wide">Basic Toggles</h3>
        <div className="space-y-4 max-w-sm backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20">
          {Object.entries(switches).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-sm font-medium text-white/90 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <button
                onClick={() => toggle(key as keyof typeof switches)}
                className={`relative w-14 h-7 rounded-full backdrop-blur-md border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                  value
                    ? 'bg-white/30 border-white/50 shadow-lg shadow-white/20'
                    : 'bg-white/10 border-white/20 hover:bg-white/15'
                }`}
                role="switch"
                aria-checked={value}
              >
                <span
                  className={`absolute top-1 left-1 w-5 h-5 rounded-full transition-all duration-300 shadow-md ${
                    value
                      ? 'translate-x-7 bg-white'
                      : 'translate-x-0 bg-white/60'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-white/60 uppercase tracking-wide">Sizes</h3>
        <div className="flex items-center gap-8">
          {/* Small */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-white/70">SM</span>
            <button
              className="relative w-10 h-5 bg-white/30 border border-white/50 rounded-full backdrop-blur-md transition-all duration-300 focus:outline-none shadow-lg"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full translate-x-5 transition-transform duration-300 shadow-md" />
            </button>
          </div>

          {/* Medium */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-white/70">MD</span>
            <button
              className="relative w-14 h-7 bg-white/30 border border-white/50 rounded-full backdrop-blur-md transition-all duration-300 focus:outline-none shadow-lg"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300 shadow-md" />
            </button>
          </div>

          {/* Large */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-white/70">LG</span>
            <button
              className="relative w-18 h-9 bg-white/30 border border-white/50 rounded-full backdrop-blur-md transition-all duration-300 focus:outline-none shadow-lg"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-1.5 left-1.5 w-6 h-6 bg-white rounded-full translate-x-9 transition-transform duration-300 shadow-md" />
            </button>
          </div>
        </div>
      </div>

      {/* Glow Effect Variants */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-white/60 uppercase tracking-wide">Glow Effects</h3>
        <div className="flex items-center gap-8">
          <button
            className="relative w-14 h-7 bg-cyan-400/30 border border-cyan-300/50 rounded-full backdrop-blur-md transition-all duration-300 focus:outline-none shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-cyan-100 rounded-full translate-x-7 transition-transform duration-300 shadow-lg" />
          </button>

          <button
            className="relative w-14 h-7 bg-pink-400/30 border border-pink-300/50 rounded-full backdrop-blur-md transition-all duration-300 focus:outline-none shadow-[0_0_20px_rgba(244,114,182,0.4)]"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-pink-100 rounded-full translate-x-7 transition-transform duration-300 shadow-lg" />
          </button>

          <button
            className="relative w-14 h-7 bg-emerald-400/30 border border-emerald-300/50 rounded-full backdrop-blur-md transition-all duration-300 focus:outline-none shadow-[0_0_20px_rgba(52,211,153,0.4)]"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-emerald-100 rounded-full translate-x-7 transition-transform duration-300 shadow-lg" />
          </button>
        </div>
      </div>

      {/* Dark Glass Variant */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-white/60 uppercase tracking-wide">Dark Glass</h3>
        <div className="flex items-center gap-8">
          <button
            className="relative w-14 h-7 bg-black/30 border border-white/10 rounded-full backdrop-blur-xl transition-all duration-300 hover:bg-black/40 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-white/90 rounded-full translate-x-7 transition-transform duration-300 shadow-lg" />
          </button>

          <button
            className="relative w-14 h-7 bg-black/20 border border-white/10 rounded-full backdrop-blur-xl transition-all duration-300 hover:bg-black/30 focus:outline-none"
            role="switch"
            aria-checked="false"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-white/40 rounded-full transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Label Positions */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-white/60 uppercase tracking-wide">Label Positions</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-white/90 w-24">Label Left</span>
            <button
              className="relative w-14 h-7 bg-white/30 border border-white/50 rounded-full backdrop-blur-md transition-all duration-300 focus:outline-none shadow-lg"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300 shadow-md" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="relative w-14 h-7 bg-white/30 border border-white/50 rounded-full backdrop-blur-md transition-all duration-300 focus:outline-none shadow-lg"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full translate-x-7 transition-transform duration-300 shadow-md" />
            </button>
            <span className="text-sm font-medium text-white/90">Label Right</span>
          </div>
        </div>
      </div>

      {/* Disabled States */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-white/60 uppercase tracking-wide">Disabled</h3>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <button
              disabled
              className="relative w-14 h-7 bg-white/5 border border-white/10 rounded-full backdrop-blur-md cursor-not-allowed opacity-40"
              role="switch"
              aria-checked="false"
              aria-disabled="true"
            >
              <span className="absolute top-1 left-1 w-5 h-5 bg-white/30 rounded-full transition-transform duration-300" />
            </button>
            <span className="text-sm font-medium text-white/40">Disabled Off</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              disabled
              className="relative w-14 h-7 bg-white/15 border border-white/20 rounded-full backdrop-blur-md cursor-not-allowed opacity-40"
              role="switch"
              aria-checked="true"
              aria-disabled="true"
            >
              <span className="absolute top-1 left-1 w-5 h-5 bg-white/60 rounded-full translate-x-7 transition-transform duration-300" />
            </button>
            <span className="text-sm font-medium text-white/40">Disabled On</span>
          </div>
        </div>
      </div>

      {/* Frosted Card Example */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-white/60 uppercase tracking-wide">In Context</h3>
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 max-w-md shadow-2xl">
          <h4 className="text-lg font-semibold text-white mb-6">Notification Settings</h4>
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white">Push Notifications</p>
                <p className="text-xs text-white/50">Receive alerts on your device</p>
              </div>
              <button
                className="relative w-12 h-6 bg-white/30 border border-white/50 rounded-full backdrop-blur-md transition-all duration-300 focus:outline-none"
                role="switch"
                aria-checked="true"
              >
                <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full translate-x-6 transition-transform duration-300 shadow-md" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white">Email Updates</p>
                <p className="text-xs text-white/50">Weekly digest emails</p>
              </div>
              <button
                className="relative w-12 h-6 bg-white/10 border border-white/20 rounded-full backdrop-blur-md transition-all duration-300 focus:outline-none"
                role="switch"
                aria-checked="false"
              >
                <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white/60 rounded-full transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
