import { useState } from 'react'

export default function NeumorphismSwitch() {
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
    <div className="flex flex-col gap-8 p-8 min-h-screen bg-[#e0e5ec]">
      <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest">Neumorphism Switches</h2>

      {/* Basic Switches with Labels */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">Basic Toggles</h3>
        <div className="space-y-5 max-w-sm p-6 rounded-2xl bg-[#e0e5ec] shadow-[8px_8px_16px_#b8bcc2,-8px_-8px_16px_#ffffff]">
          {Object.entries(switches).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <button
                onClick={() => toggle(key as keyof typeof switches)}
                className={`relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none ${
                  value
                    ? 'shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] bg-[#e0e5ec]'
                    : 'shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] bg-[#e0e5ec]'
                }`}
                role="switch"
                aria-checked={value}
              >
                <span
                  className={`absolute top-1 left-1 w-5 h-5 rounded-full transition-all duration-300 ${
                    value
                      ? 'translate-x-7 bg-blue-500 shadow-[2px_2px_4px_#b8bcc2,-2px_-2px_4px_#ffffff]'
                      : 'translate-x-0 bg-[#e0e5ec] shadow-[2px_2px_4px_#b8bcc2,-2px_-2px_4px_#ffffff]'
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
              className="relative w-10 h-5 rounded-full bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#b8bcc2,inset_-3px_-3px_6px_#ffffff] transition-all duration-300 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-0.5 left-0.5 w-4 h-4 bg-blue-500 rounded-full translate-x-5 transition-transform duration-300 shadow-[2px_2px_4px_#b8bcc2]" />
            </button>
          </div>

          {/* Medium */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-gray-500">MD</span>
            <button
              className="relative w-14 h-7 rounded-full bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] transition-all duration-300 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-1 left-1 w-5 h-5 bg-blue-500 rounded-full translate-x-7 transition-transform duration-300 shadow-[2px_2px_4px_#b8bcc2]" />
            </button>
          </div>

          {/* Large */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-gray-500">LG</span>
            <button
              className="relative w-18 h-9 rounded-full bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#b8bcc2,inset_-5px_-5px_10px_#ffffff] transition-all duration-300 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-1.5 left-1.5 w-6 h-6 bg-blue-500 rounded-full translate-x-9 transition-transform duration-300 shadow-[3px_3px_6px_#b8bcc2]" />
            </button>
          </div>
        </div>
      </div>

      {/* Color Variants */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">Color Variants</h3>
        <div className="flex items-center gap-8">
          <button
            className="relative w-14 h-7 rounded-full bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-emerald-500 rounded-full translate-x-7 transition-transform duration-300 shadow-[2px_2px_4px_#b8bcc2]" />
          </button>

          <button
            className="relative w-14 h-7 rounded-full bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-purple-500 rounded-full translate-x-7 transition-transform duration-300 shadow-[2px_2px_4px_#b8bcc2]" />
          </button>

          <button
            className="relative w-14 h-7 rounded-full bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] transition-all duration-300 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-orange-500 rounded-full translate-x-7 transition-transform duration-300 shadow-[2px_2px_4px_#b8bcc2]" />
          </button>
        </div>
      </div>

      {/* Convex Style */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">Convex Style</h3>
        <div className="flex items-center gap-8">
          <button
            className="relative w-14 h-7 rounded-full bg-[#e0e5ec] shadow-[6px_6px_12px_#b8bcc2,-6px_-6px_12px_#ffffff] transition-all duration-300 focus:outline-none hover:shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff]"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full translate-x-7 transition-transform duration-300 shadow-[3px_3px_6px_#b8bcc2,-1px_-1px_3px_#ffffff]" />
          </button>

          <button
            className="relative w-14 h-7 rounded-full bg-[#e0e5ec] shadow-[6px_6px_12px_#b8bcc2,-6px_-6px_12px_#ffffff] transition-all duration-300 focus:outline-none hover:shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff]"
            role="switch"
            aria-checked="false"
          >
            <span className="absolute top-1 left-1 w-5 h-5 bg-[#e0e5ec] rounded-full transition-transform duration-300 shadow-[inset_2px_2px_4px_#b8bcc2,inset_-2px_-2px_4px_#ffffff]" />
          </button>
        </div>
      </div>

      {/* Label Positions */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">Label Positions</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600 w-24">Label Left</span>
            <button
              className="relative w-14 h-7 rounded-full bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] transition-all duration-300 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-1 left-1 w-5 h-5 bg-blue-500 rounded-full translate-x-7 transition-transform duration-300 shadow-[2px_2px_4px_#b8bcc2]" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="relative w-14 h-7 rounded-full bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] transition-all duration-300 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-1 left-1 w-5 h-5 bg-blue-500 rounded-full translate-x-7 transition-transform duration-300 shadow-[2px_2px_4px_#b8bcc2]" />
            </button>
            <span className="text-sm font-medium text-gray-600">Label Right</span>
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
              className="relative w-14 h-7 rounded-full bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] cursor-not-allowed opacity-50"
              role="switch"
              aria-checked="false"
              aria-disabled="true"
            >
              <span className="absolute top-1 left-1 w-5 h-5 bg-gray-400 rounded-full transition-transform duration-300" />
            </button>
            <span className="text-sm font-medium text-gray-400">Disabled Off</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              disabled
              className="relative w-14 h-7 rounded-full bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] cursor-not-allowed opacity-50"
              role="switch"
              aria-checked="true"
              aria-disabled="true"
            >
              <span className="absolute top-1 left-1 w-5 h-5 bg-blue-300 rounded-full translate-x-7 transition-transform duration-300" />
            </button>
            <span className="text-sm font-medium text-gray-400">Disabled On</span>
          </div>
        </div>
      </div>

      {/* Card Context */}
      <div className="space-y-6">
        <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">In Context</h3>
        <div className="p-8 rounded-3xl bg-[#e0e5ec] shadow-[12px_12px_24px_#b8bcc2,-12px_-12px_24px_#ffffff] max-w-md">
          <h4 className="text-lg font-semibold text-gray-700 mb-6">Privacy Settings</h4>
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-700">Location Services</p>
                <p className="text-xs text-gray-400">Allow app to access location</p>
              </div>
              <button
                className="relative w-12 h-6 rounded-full bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#b8bcc2,inset_-3px_-3px_6px_#ffffff] transition-all duration-300 focus:outline-none"
                role="switch"
                aria-checked="true"
              >
                <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-blue-500 rounded-full translate-x-6 transition-transform duration-300 shadow-[2px_2px_4px_#b8bcc2]" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-700">Analytics</p>
                <p className="text-xs text-gray-400">Share usage data</p>
              </div>
              <button
                className="relative w-12 h-6 rounded-full bg-[#e0e5ec] shadow-[3px_3px_6px_#b8bcc2,-3px_-3px_6px_#ffffff] transition-all duration-300 focus:outline-none"
                role="switch"
                aria-checked="false"
              >
                <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-[#e0e5ec] rounded-full transition-transform duration-300 shadow-[inset_1px_1px_2px_#b8bcc2,inset_-1px_-1px_2px_#ffffff]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
