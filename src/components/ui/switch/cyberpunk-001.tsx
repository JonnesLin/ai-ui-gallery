import { useState } from 'react'

export default function CyberpunkSwitch() {
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
      <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.3em]" style={{ fontFamily: 'monospace' }}>// Cyberpunk Switches</h2>

      {/* Basic Switches with Labels */}
      <div className="space-y-6">
        <h3 className="text-xs font-bold text-pink-500 uppercase tracking-wide" style={{ fontFamily: 'monospace' }}>&gt; Basic_Toggles</h3>
        <div className="space-y-4 max-w-sm p-6 bg-gray-900/50 border border-cyan-500/30 rounded-sm">
          {Object.entries(switches).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-sm font-medium text-cyan-300 uppercase" style={{ fontFamily: 'monospace' }}>
                {key.replace(/([A-Z])/g, '_$1').trim()}
              </span>
              <button
                onClick={() => toggle(key as keyof typeof switches)}
                className={`relative w-16 h-7 transition-all duration-300 focus:outline-none ${
                  value
                    ? 'bg-cyan-500/20 border border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5),inset_0_0_10px_rgba(34,211,238,0.2)]'
                    : 'bg-gray-800 border border-gray-600 hover:border-pink-500/50'
                }`}
                style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}
                role="switch"
                aria-checked={value}
              >
                <span
                  className={`absolute top-1 left-1 w-5 h-5 transition-all duration-300 ${
                    value
                      ? 'translate-x-9 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]'
                      : 'translate-x-0 bg-gray-500'
                  }`}
                  style={{ clipPath: 'polygon(0 0, calc(100% - 2px) 0, 100% 2px, 100% 100%, 2px 100%, 0 calc(100% - 2px))' }}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-6">
        <h3 className="text-xs font-bold text-pink-500 uppercase tracking-wide" style={{ fontFamily: 'monospace' }}>&gt; Sizes</h3>
        <div className="flex items-center gap-8">
          {/* Small */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-cyan-500" style={{ fontFamily: 'monospace' }}>SM</span>
            <button
              className="relative w-12 h-5 bg-cyan-500/20 border border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-300 focus:outline-none"
              style={{ clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))' }}
              role="switch"
              aria-checked="true"
            >
              <span
                className="absolute top-0.5 left-0.5 w-4 h-4 bg-cyan-400 translate-x-7 transition-transform duration-300 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                style={{ clipPath: 'polygon(0 0, calc(100% - 2px) 0, 100% 2px, 100% 100%, 2px 100%, 0 calc(100% - 2px))' }}
              />
            </button>
          </div>

          {/* Medium */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-cyan-500" style={{ fontFamily: 'monospace' }}>MD</span>
            <button
              className="relative w-16 h-7 bg-cyan-500/20 border border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-300 focus:outline-none"
              style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}
              role="switch"
              aria-checked="true"
            >
              <span
                className="absolute top-1 left-1 w-5 h-5 bg-cyan-400 translate-x-9 transition-transform duration-300 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                style={{ clipPath: 'polygon(0 0, calc(100% - 2px) 0, 100% 2px, 100% 100%, 2px 100%, 0 calc(100% - 2px))' }}
              />
            </button>
          </div>

          {/* Large */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-cyan-500" style={{ fontFamily: 'monospace' }}>LG</span>
            <button
              className="relative w-20 h-9 bg-cyan-500/20 border border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-300 focus:outline-none"
              style={{ clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))' }}
              role="switch"
              aria-checked="true"
            >
              <span
                className="absolute top-1 left-1 w-7 h-7 bg-cyan-400 translate-x-11 transition-transform duration-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                style={{ clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))' }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Neon Color Variants */}
      <div className="space-y-6">
        <h3 className="text-xs font-bold text-pink-500 uppercase tracking-wide" style={{ fontFamily: 'monospace' }}>&gt; Neon_Variants</h3>
        <div className="flex items-center gap-6">
          {/* Magenta */}
          <button
            className="relative w-16 h-7 bg-pink-500/20 border border-pink-400 shadow-[0_0_10px_rgba(236,72,153,0.5)] transition-all duration-300 focus:outline-none"
            style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}
            role="switch"
            aria-checked="true"
          >
            <span
              className="absolute top-1 left-1 w-5 h-5 bg-pink-400 translate-x-9 transition-transform duration-300 shadow-[0_0_10px_rgba(236,72,153,0.8)]"
              style={{ clipPath: 'polygon(0 0, calc(100% - 2px) 0, 100% 2px, 100% 100%, 2px 100%, 0 calc(100% - 2px))' }}
            />
          </button>

          {/* Yellow */}
          <button
            className="relative w-16 h-7 bg-yellow-500/20 border border-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)] transition-all duration-300 focus:outline-none"
            style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}
            role="switch"
            aria-checked="true"
          >
            <span
              className="absolute top-1 left-1 w-5 h-5 bg-yellow-400 translate-x-9 transition-transform duration-300 shadow-[0_0_10px_rgba(250,204,21,0.8)]"
              style={{ clipPath: 'polygon(0 0, calc(100% - 2px) 0, 100% 2px, 100% 100%, 2px 100%, 0 calc(100% - 2px))' }}
            />
          </button>

          {/* Purple */}
          <button
            className="relative w-16 h-7 bg-violet-500/20 border border-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.5)] transition-all duration-300 focus:outline-none"
            style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}
            role="switch"
            aria-checked="true"
          >
            <span
              className="absolute top-1 left-1 w-5 h-5 bg-violet-400 translate-x-9 transition-transform duration-300 shadow-[0_0_10px_rgba(167,139,250,0.8)]"
              style={{ clipPath: 'polygon(0 0, calc(100% - 2px) 0, 100% 2px, 100% 100%, 2px 100%, 0 calc(100% - 2px))' }}
            />
          </button>

          {/* Green */}
          <button
            className="relative w-16 h-7 bg-green-500/20 border border-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)] transition-all duration-300 focus:outline-none"
            style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}
            role="switch"
            aria-checked="true"
          >
            <span
              className="absolute top-1 left-1 w-5 h-5 bg-green-400 translate-x-9 transition-transform duration-300 shadow-[0_0_10px_rgba(74,222,128,0.8)]"
              style={{ clipPath: 'polygon(0 0, calc(100% - 2px) 0, 100% 2px, 100% 100%, 2px 100%, 0 calc(100% - 2px))' }}
            />
          </button>
        </div>
      </div>

      {/* Glitch Effect */}
      <div className="space-y-6">
        <h3 className="text-xs font-bold text-pink-500 uppercase tracking-wide" style={{ fontFamily: 'monospace' }}>&gt; Glitch_Effect</h3>
        <div className="flex items-center gap-8">
          <button
            className="relative w-16 h-7 bg-cyan-500/20 border border-cyan-400 transition-all duration-300 focus:outline-none group"
            style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}
            role="switch"
            aria-checked="true"
          >
            <span className="absolute inset-0 bg-pink-500/20 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity" />
            <span
              className="absolute top-1 left-1 w-5 h-5 bg-cyan-400 translate-x-9 transition-transform duration-300 shadow-[0_0_10px_rgba(34,211,238,0.8),2px_0_0_rgba(236,72,153,0.5),-2px_0_0_rgba(250,204,21,0.5)]"
              style={{ clipPath: 'polygon(0 0, calc(100% - 2px) 0, 100% 2px, 100% 100%, 2px 100%, 0 calc(100% - 2px))' }}
            />
          </button>
        </div>
      </div>

      {/* Label Positions */}
      <div className="space-y-6">
        <h3 className="text-xs font-bold text-pink-500 uppercase tracking-wide" style={{ fontFamily: 'monospace' }}>&gt; Label_Positions</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-cyan-300 w-28" style={{ fontFamily: 'monospace' }}>LABEL_LEFT</span>
            <button
              className="relative w-16 h-7 bg-cyan-500/20 border border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-300 focus:outline-none"
              style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}
              role="switch"
              aria-checked="true"
            >
              <span
                className="absolute top-1 left-1 w-5 h-5 bg-cyan-400 translate-x-9 transition-transform duration-300 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                style={{ clipPath: 'polygon(0 0, calc(100% - 2px) 0, 100% 2px, 100% 100%, 2px 100%, 0 calc(100% - 2px))' }}
              />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="relative w-16 h-7 bg-cyan-500/20 border border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-300 focus:outline-none"
              style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}
              role="switch"
              aria-checked="true"
            >
              <span
                className="absolute top-1 left-1 w-5 h-5 bg-cyan-400 translate-x-9 transition-transform duration-300 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                style={{ clipPath: 'polygon(0 0, calc(100% - 2px) 0, 100% 2px, 100% 100%, 2px 100%, 0 calc(100% - 2px))' }}
              />
            </button>
            <span className="text-sm font-medium text-cyan-300" style={{ fontFamily: 'monospace' }}>LABEL_RIGHT</span>
          </div>
        </div>
      </div>

      {/* Disabled States */}
      <div className="space-y-6">
        <h3 className="text-xs font-bold text-pink-500 uppercase tracking-wide" style={{ fontFamily: 'monospace' }}>&gt; Disabled</h3>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <button
              disabled
              className="relative w-16 h-7 bg-gray-800 border border-gray-700 cursor-not-allowed opacity-40"
              style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}
              role="switch"
              aria-checked="false"
              aria-disabled="true"
            >
              <span
                className="absolute top-1 left-1 w-5 h-5 bg-gray-600"
                style={{ clipPath: 'polygon(0 0, calc(100% - 2px) 0, 100% 2px, 100% 100%, 2px 100%, 0 calc(100% - 2px))' }}
              />
            </button>
            <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'monospace' }}>DISABLED_OFF</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              disabled
              className="relative w-16 h-7 bg-cyan-900/30 border border-cyan-800 cursor-not-allowed opacity-40"
              style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}
              role="switch"
              aria-checked="true"
              aria-disabled="true"
            >
              <span
                className="absolute top-1 left-1 w-5 h-5 bg-cyan-700 translate-x-9"
                style={{ clipPath: 'polygon(0 0, calc(100% - 2px) 0, 100% 2px, 100% 100%, 2px 100%, 0 calc(100% - 2px))' }}
              />
            </button>
            <span className="text-sm font-medium text-gray-600" style={{ fontFamily: 'monospace' }}>DISABLED_ON</span>
          </div>
        </div>
      </div>

      {/* Card Context */}
      <div className="space-y-6">
        <h3 className="text-xs font-bold text-pink-500 uppercase tracking-wide" style={{ fontFamily: 'monospace' }}>&gt; In_Context</h3>
        <div className="p-6 bg-gray-900/80 border border-cyan-500/30 max-w-md" style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}>
          <div className="flex items-center gap-3 mb-6 pb-3 border-b border-cyan-500/30">
            <div className="w-2 h-2 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <h4 className="text-lg font-bold text-cyan-400 uppercase tracking-wider" style={{ fontFamily: 'monospace' }}>System.Config</h4>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-cyan-300" style={{ fontFamily: 'monospace' }}>NEURAL_LINK</p>
                <p className="text-xs text-pink-400/70" style={{ fontFamily: 'monospace' }}>// Direct interface</p>
              </div>
              <button
                className="relative w-14 h-6 bg-cyan-500/20 border border-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.4)] transition-all duration-300 focus:outline-none"
                style={{ clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))' }}
                role="switch"
                aria-checked="true"
              >
                <span
                  className="absolute top-0.5 left-0.5 w-5 h-5 bg-cyan-400 translate-x-8 transition-transform duration-300 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 2px) 0, 100% 2px, 100% 100%, 2px 100%, 0 calc(100% - 2px))' }}
                />
              </button>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-cyan-300" style={{ fontFamily: 'monospace' }}>STEALTH_MODE</p>
                <p className="text-xs text-pink-400/70" style={{ fontFamily: 'monospace' }}>// Ghost protocol</p>
              </div>
              <button
                className="relative w-14 h-6 bg-gray-800 border border-gray-600 transition-all duration-300 focus:outline-none"
                style={{ clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))' }}
                role="switch"
                aria-checked="false"
              >
                <span
                  className="absolute top-0.5 left-0.5 w-5 h-5 bg-gray-500 transition-transform duration-300"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 2px) 0, 100% 2px, 100% 100%, 2px 100%, 0 calc(100% - 2px))' }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
