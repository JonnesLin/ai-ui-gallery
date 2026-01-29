import { useState } from 'react'

export default function LuxuryAlert() {
  const [alerts, setAlerts] = useState({
    success: true,
    info: true,
    warning: true,
    error: true,
  })

  const dismiss = (type: keyof typeof alerts) => {
    setAlerts((prev) => ({ ...prev, [type]: false }))
  }

  return (
    <div className="min-h-screen bg-stone-950 p-8 md:p-12">
      <div className="max-w-2xl mx-auto space-y-5">
        {alerts.success && (
          <div className="flex items-start gap-5 p-6 bg-gradient-to-r from-stone-900 to-stone-800 border border-amber-600/30 rounded-sm">
            <div className="w-12 h-12 rounded-full border-2 border-amber-500 bg-amber-500/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-light tracking-[0.3em] text-amber-400 uppercase">Success</p>
              <p className="text-sm text-stone-400 mt-2 leading-relaxed">Your changes have been saved successfully.</p>
            </div>
            <button
              onClick={() => dismiss('success')}
              className="text-stone-600 hover:text-amber-400 transition-colors p-1"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {alerts.info && (
          <div className="flex items-start gap-5 p-6 bg-gradient-to-r from-stone-900 to-stone-800 border border-stone-600/30 rounded-sm">
            <div className="w-12 h-12 rounded-full border-2 border-stone-400 bg-stone-400/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-stone-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-light tracking-[0.3em] text-stone-300 uppercase">Information</p>
              <p className="text-sm text-stone-400 mt-2 leading-relaxed">A new software update is available for download.</p>
            </div>
            <button
              onClick={() => dismiss('info')}
              className="text-stone-600 hover:text-stone-300 transition-colors p-1"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {alerts.warning && (
          <div className="flex items-start gap-5 p-6 bg-gradient-to-r from-stone-900 to-stone-800 border border-amber-700/30 rounded-sm">
            <div className="w-12 h-12 rounded-full border-2 border-amber-600 bg-amber-600/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-light tracking-[0.3em] text-amber-500 uppercase">Attention</p>
              <p className="text-sm text-stone-400 mt-2 leading-relaxed">Your storage is almost full. Consider upgrading your plan.</p>
            </div>
            <button
              onClick={() => dismiss('warning')}
              className="text-stone-600 hover:text-amber-500 transition-colors p-1"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {alerts.error && (
          <div className="flex items-start gap-5 p-6 bg-gradient-to-r from-stone-900 to-stone-800 border border-rose-800/30 rounded-sm">
            <div className="w-12 h-12 rounded-full border-2 border-rose-600 bg-rose-600/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-light tracking-[0.3em] text-rose-400 uppercase">Error</p>
              <p className="text-sm text-stone-400 mt-2 leading-relaxed">There was a problem processing your request. Please try again.</p>
            </div>
            <button
              onClick={() => dismiss('error')}
              className="text-stone-600 hover:text-rose-400 transition-colors p-1"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
