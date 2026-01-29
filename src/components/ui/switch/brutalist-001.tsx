import { useState } from 'react'

export default function BrutalistSwitch() {
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
    <div className="flex flex-col gap-8 p-8 min-h-screen bg-[#f5f5dc]">
      <h2 className="text-sm font-black text-black uppercase tracking-widest">Brutalist Switches</h2>

      {/* Basic Switches with Labels */}
      <div className="space-y-6">
        <h3 className="text-xs font-black text-black uppercase tracking-wide">Basic Toggles</h3>
        <div className="space-y-4 max-w-sm p-6 bg-white border-4 border-black">
          {Object.entries(switches).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-sm font-bold text-black uppercase">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <button
                onClick={() => toggle(key as keyof typeof switches)}
                className={`relative w-16 h-8 border-4 border-black transition-colors duration-150 focus:outline-none ${
                  value ? 'bg-black' : 'bg-white'
                }`}
                role="switch"
                aria-checked={value}
              >
                <span
                  className={`absolute top-0 left-0 w-6 h-6 border-2 border-black transition-all duration-150 ${
                    value
                      ? 'translate-x-8 bg-yellow-400'
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
        <h3 className="text-xs font-black text-black uppercase tracking-wide">Sizes</h3>
        <div className="flex items-center gap-8">
          {/* Small */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-black text-black">SM</span>
            <button
              className="relative w-12 h-6 bg-black border-3 border-black transition-all duration-150 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-0 left-0 w-5 h-5 bg-yellow-400 border-2 border-black translate-x-6 transition-transform duration-150" />
            </button>
          </div>

          {/* Medium */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-black text-black">MD</span>
            <button
              className="relative w-16 h-8 bg-black border-4 border-black transition-all duration-150 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-0 left-0 w-6 h-6 bg-yellow-400 border-2 border-black translate-x-8 transition-transform duration-150" />
            </button>
          </div>

          {/* Large */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-black text-black">LG</span>
            <button
              className="relative w-20 h-10 bg-black border-4 border-black transition-all duration-150 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-0.5 left-0.5 w-8 h-8 bg-yellow-400 border-2 border-black translate-x-10 transition-transform duration-150" />
            </button>
          </div>
        </div>
      </div>

      {/* Color Variants */}
      <div className="space-y-6">
        <h3 className="text-xs font-black text-black uppercase tracking-wide">Color Variants</h3>
        <div className="flex items-center gap-6">
          <button
            className="relative w-16 h-8 bg-red-600 border-4 border-black transition-all duration-150 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-0 left-0 w-6 h-6 bg-white border-2 border-black translate-x-8 transition-transform duration-150" />
          </button>

          <button
            className="relative w-16 h-8 bg-blue-600 border-4 border-black transition-all duration-150 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-0 left-0 w-6 h-6 bg-white border-2 border-black translate-x-8 transition-transform duration-150" />
          </button>

          <button
            className="relative w-16 h-8 bg-green-600 border-4 border-black transition-all duration-150 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-0 left-0 w-6 h-6 bg-white border-2 border-black translate-x-8 transition-transform duration-150" />
          </button>

          <button
            className="relative w-16 h-8 bg-yellow-400 border-4 border-black transition-all duration-150 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-0 left-0 w-6 h-6 bg-black border-2 border-black translate-x-8 transition-transform duration-150" />
          </button>
        </div>
      </div>

      {/* Square Variant */}
      <div className="space-y-6">
        <h3 className="text-xs font-black text-black uppercase tracking-wide">Square Variant</h3>
        <div className="flex items-center gap-8">
          <button
            className="relative w-16 h-8 bg-black border-4 border-black transition-all duration-150 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-0 left-0 w-6 h-6 bg-yellow-400 translate-x-8 transition-transform duration-150" />
          </button>

          <button
            className="relative w-16 h-8 bg-white border-4 border-black transition-all duration-150 focus:outline-none"
            role="switch"
            aria-checked="false"
          >
            <span className="absolute top-0 left-0 w-6 h-6 bg-black transition-transform duration-150" />
          </button>
        </div>
      </div>

      {/* Offset Shadow */}
      <div className="space-y-6">
        <h3 className="text-xs font-black text-black uppercase tracking-wide">Offset Shadow</h3>
        <div className="flex items-center gap-8">
          <button
            className="relative w-16 h-8 bg-yellow-400 border-4 border-black shadow-[4px_4px_0_0_#000] transition-all duration-150 hover:shadow-[2px_2px_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-0 left-0 w-6 h-6 bg-black translate-x-8 transition-transform duration-150" />
          </button>

          <button
            className="relative w-16 h-8 bg-white border-4 border-black shadow-[4px_4px_0_0_#000] transition-all duration-150 hover:shadow-[2px_2px_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 focus:outline-none"
            role="switch"
            aria-checked="false"
          >
            <span className="absolute top-0 left-0 w-6 h-6 bg-black transition-transform duration-150" />
          </button>
        </div>
      </div>

      {/* Label Positions */}
      <div className="space-y-6">
        <h3 className="text-xs font-black text-black uppercase tracking-wide">Label Positions</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-black text-black uppercase w-28">Label Left</span>
            <button
              className="relative w-16 h-8 bg-black border-4 border-black transition-all duration-150 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-0 left-0 w-6 h-6 bg-yellow-400 border-2 border-black translate-x-8 transition-transform duration-150" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="relative w-16 h-8 bg-black border-4 border-black transition-all duration-150 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-0 left-0 w-6 h-6 bg-yellow-400 border-2 border-black translate-x-8 transition-transform duration-150" />
            </button>
            <span className="text-sm font-black text-black uppercase">Label Right</span>
          </div>
        </div>
      </div>

      {/* Disabled States */}
      <div className="space-y-6">
        <h3 className="text-xs font-black text-black uppercase tracking-wide">Disabled</h3>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <button
              disabled
              className="relative w-16 h-8 bg-gray-300 border-4 border-gray-400 cursor-not-allowed"
              role="switch"
              aria-checked="false"
              aria-disabled="true"
            >
              <span className="absolute top-0 left-0 w-6 h-6 bg-gray-400 border-2 border-gray-500 transition-transform duration-150" />
            </button>
            <span className="text-sm font-bold text-gray-400 uppercase">Disabled Off</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              disabled
              className="relative w-16 h-8 bg-gray-400 border-4 border-gray-500 cursor-not-allowed"
              role="switch"
              aria-checked="true"
              aria-disabled="true"
            >
              <span className="absolute top-0 left-0 w-6 h-6 bg-gray-300 border-2 border-gray-400 translate-x-8 transition-transform duration-150" />
            </button>
            <span className="text-sm font-bold text-gray-400 uppercase">Disabled On</span>
          </div>
        </div>
      </div>

      {/* Card Context */}
      <div className="space-y-6">
        <h3 className="text-xs font-black text-black uppercase tracking-wide">In Context</h3>
        <div className="p-6 bg-white border-4 border-black shadow-[8px_8px_0_0_#000] max-w-md">
          <h4 className="text-xl font-black text-black uppercase mb-6 pb-2 border-b-4 border-black">System Preferences</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-black text-black uppercase">Bold Mode</p>
                <p className="text-xs font-bold text-gray-600">Maximum contrast</p>
              </div>
              <button
                className="relative w-14 h-7 bg-black border-3 border-black transition-all duration-150 focus:outline-none"
                role="switch"
                aria-checked="true"
              >
                <span className="absolute top-0 left-0 w-5 h-5 bg-yellow-400 border-2 border-black translate-x-7 transition-transform duration-150" />
              </button>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-black text-black uppercase">Strict Mode</p>
                <p className="text-xs font-bold text-gray-600">No compromises</p>
              </div>
              <button
                className="relative w-14 h-7 bg-white border-3 border-black transition-all duration-150 focus:outline-none"
                role="switch"
                aria-checked="false"
              >
                <span className="absolute top-0 left-0 w-5 h-5 bg-black border-2 border-black transition-transform duration-150" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
