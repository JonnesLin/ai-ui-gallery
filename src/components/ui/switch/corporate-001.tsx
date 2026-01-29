import { useState } from 'react'

export default function CorporateSwitch() {
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
      <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Corporate Switches</h2>

      {/* Basic Switches with Labels */}
      <div className="space-y-6">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Basic Toggles</h3>
        <div className="space-y-4 max-w-sm p-6 bg-white rounded-lg shadow-sm border border-slate-200">
          {Object.entries(switches).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <button
                onClick={() => toggle(key as keyof typeof switches)}
                className={`relative w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  value
                    ? 'bg-blue-600'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                role="switch"
                aria-checked={value}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm ${
                    value ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-6">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Sizes</h3>
        <div className="flex items-center gap-8">
          {/* Small */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-500">SM</span>
            <button
              className="relative w-9 h-5 bg-blue-600 rounded-full transition-colors duration-200 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full translate-x-4 transition-transform duration-200 shadow-sm" />
            </button>
          </div>

          {/* Medium */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-500">MD</span>
            <button
              className="relative w-11 h-6 bg-blue-600 rounded-full transition-colors duration-200 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full translate-x-5 transition-transform duration-200 shadow-sm" />
            </button>
          </div>

          {/* Large */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-500">LG</span>
            <button
              className="relative w-14 h-8 bg-blue-600 rounded-full transition-colors duration-200 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full translate-x-6 transition-transform duration-200 shadow-sm" />
            </button>
          </div>
        </div>
      </div>

      {/* Status Colors */}
      <div className="space-y-6">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Status Colors</h3>
        <div className="flex items-center gap-6">
          {/* Success */}
          <div className="flex items-center gap-2">
            <button
              className="relative w-11 h-6 bg-emerald-600 rounded-full transition-colors duration-200 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full translate-x-5 transition-transform duration-200 shadow-sm" />
            </button>
            <span className="text-xs font-medium text-slate-500">Success</span>
          </div>

          {/* Warning */}
          <div className="flex items-center gap-2">
            <button
              className="relative w-11 h-6 bg-amber-500 rounded-full transition-colors duration-200 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full translate-x-5 transition-transform duration-200 shadow-sm" />
            </button>
            <span className="text-xs font-medium text-slate-500">Warning</span>
          </div>

          {/* Danger */}
          <div className="flex items-center gap-2">
            <button
              className="relative w-11 h-6 bg-red-600 rounded-full transition-colors duration-200 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full translate-x-5 transition-transform duration-200 shadow-sm" />
            </button>
            <span className="text-xs font-medium text-slate-500">Danger</span>
          </div>
        </div>
      </div>

      {/* With Icons */}
      <div className="space-y-6">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide">With Icons</h3>
        <div className="flex items-center gap-8">
          <button
            className="relative w-11 h-6 bg-blue-600 rounded-full transition-colors duration-200 focus:outline-none"
            role="switch"
            aria-checked="true"
          >
            <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full translate-x-5 transition-transform duration-200 shadow-sm flex items-center justify-center">
              <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
          </button>

          <button
            className="relative w-11 h-6 bg-slate-300 rounded-full transition-colors duration-200 focus:outline-none"
            role="switch"
            aria-checked="false"
          >
            <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 shadow-sm flex items-center justify-center">
              <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Label Positions */}
      <div className="space-y-6">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Label Positions</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-slate-700 w-24">Label Left</span>
            <button
              className="relative w-11 h-6 bg-blue-600 rounded-full transition-colors duration-200 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full translate-x-5 transition-transform duration-200 shadow-sm" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="relative w-11 h-6 bg-blue-600 rounded-full transition-colors duration-200 focus:outline-none"
              role="switch"
              aria-checked="true"
            >
              <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full translate-x-5 transition-transform duration-200 shadow-sm" />
            </button>
            <span className="text-sm font-medium text-slate-700">Label Right</span>
          </div>
        </div>
      </div>

      {/* Disabled States */}
      <div className="space-y-6">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Disabled</h3>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <button
              disabled
              className="relative w-11 h-6 bg-slate-200 rounded-full cursor-not-allowed"
              role="switch"
              aria-checked="false"
              aria-disabled="true"
            >
              <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-slate-100 rounded-full transition-transform duration-200" />
            </button>
            <span className="text-sm font-medium text-slate-400">Disabled Off</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              disabled
              className="relative w-11 h-6 bg-blue-300 rounded-full cursor-not-allowed"
              role="switch"
              aria-checked="true"
              aria-disabled="true"
            >
              <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full translate-x-5 transition-transform duration-200 opacity-70" />
            </button>
            <span className="text-sm font-medium text-slate-400">Disabled On</span>
          </div>
        </div>
      </div>

      {/* Form Group */}
      <div className="space-y-6">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Form Group</h3>
        <div className="max-w-lg">
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 divide-y divide-slate-200">
            <div className="flex items-center justify-between p-4">
              <div>
                <p className="text-sm font-medium text-slate-900">Email Notifications</p>
                <p className="text-xs text-slate-500 mt-0.5">Receive emails about account activity</p>
              </div>
              <button
                className="relative w-11 h-6 bg-blue-600 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                role="switch"
                aria-checked="true"
              >
                <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full translate-x-5 transition-transform duration-200 shadow-sm" />
              </button>
            </div>
            <div className="flex items-center justify-between p-4">
              <div>
                <p className="text-sm font-medium text-slate-900">SMS Alerts</p>
                <p className="text-xs text-slate-500 mt-0.5">Get important updates via text message</p>
              </div>
              <button
                className="relative w-11 h-6 bg-slate-300 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                role="switch"
                aria-checked="false"
              >
                <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 shadow-sm" />
              </button>
            </div>
            <div className="flex items-center justify-between p-4">
              <div>
                <p className="text-sm font-medium text-slate-900">Push Notifications</p>
                <p className="text-xs text-slate-500 mt-0.5">Browser and mobile push alerts</p>
              </div>
              <button
                className="relative w-11 h-6 bg-blue-600 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                role="switch"
                aria-checked="true"
              >
                <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full translate-x-5 transition-transform duration-200 shadow-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Card Context */}
      <div className="space-y-6">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide">In Context</h3>
        <div className="p-6 bg-white rounded-lg shadow-sm border border-slate-200 max-w-md">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
            <h4 className="text-base font-semibold text-slate-900">Account Settings</h4>
            <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded">v2.4.1</span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-900">Two-Factor Auth</p>
                <p className="text-xs text-slate-500">Enhanced security</p>
              </div>
              <button
                className="relative w-11 h-6 bg-emerald-600 rounded-full transition-colors duration-200 focus:outline-none"
                role="switch"
                aria-checked="true"
              >
                <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full translate-x-5 transition-transform duration-200 shadow-sm" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-900">API Access</p>
                <p className="text-xs text-slate-500">External integrations</p>
              </div>
              <button
                className="relative w-11 h-6 bg-slate-300 rounded-full transition-colors duration-200 focus:outline-none"
                role="switch"
                aria-checked="false"
              >
                <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 shadow-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
