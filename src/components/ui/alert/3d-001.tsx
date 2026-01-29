import { useState } from 'react'

export default function ThreeDAlert() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-200 to-slate-300 p-8 md:p-12" style={{ perspective: '1000px' }}>
      <div className="max-w-2xl mx-auto space-y-6">
        {alerts.success && (
          <div
            className="flex items-start gap-4 p-5 bg-gradient-to-b from-emerald-400 to-emerald-500 rounded-xl relative transform hover:-translate-y-1 transition-transform duration-200"
            style={{
              boxShadow: '0 10px 0 0 #059669, 0 15px 20px rgba(0,0,0,0.2)',
              transform: 'rotateX(2deg)'
            }}
          >
            <div className="w-12 h-12 rounded-xl bg-white/30 flex items-center justify-center flex-shrink-0 shadow-inner">
              <svg className="w-6 h-6 text-white drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base font-bold text-white drop-shadow-sm">Success!</p>
              <p className="text-sm text-white/90 mt-1">Your changes have been saved successfully.</p>
            </div>
            <button
              onClick={() => dismiss('success')}
              className="w-8 h-8 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors flex items-center justify-center shadow-inner"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {alerts.info && (
          <div
            className="flex items-start gap-4 p-5 bg-gradient-to-b from-blue-400 to-blue-500 rounded-xl relative transform hover:-translate-y-1 transition-transform duration-200"
            style={{
              boxShadow: '0 10px 0 0 #2563eb, 0 15px 20px rgba(0,0,0,0.2)',
              transform: 'rotateX(2deg)'
            }}
          >
            <div className="w-12 h-12 rounded-xl bg-white/30 flex items-center justify-center flex-shrink-0 shadow-inner">
              <svg className="w-6 h-6 text-white drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base font-bold text-white drop-shadow-sm">Information</p>
              <p className="text-sm text-white/90 mt-1">A new software update is available for download.</p>
            </div>
            <button
              onClick={() => dismiss('info')}
              className="w-8 h-8 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors flex items-center justify-center shadow-inner"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {alerts.warning && (
          <div
            className="flex items-start gap-4 p-5 bg-gradient-to-b from-amber-400 to-amber-500 rounded-xl relative transform hover:-translate-y-1 transition-transform duration-200"
            style={{
              boxShadow: '0 10px 0 0 #d97706, 0 15px 20px rgba(0,0,0,0.2)',
              transform: 'rotateX(2deg)'
            }}
          >
            <div className="w-12 h-12 rounded-xl bg-white/30 flex items-center justify-center flex-shrink-0 shadow-inner">
              <svg className="w-6 h-6 text-white drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base font-bold text-white drop-shadow-sm">Warning</p>
              <p className="text-sm text-white/90 mt-1">Your storage is almost full. Consider upgrading your plan.</p>
            </div>
            <button
              onClick={() => dismiss('warning')}
              className="w-8 h-8 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors flex items-center justify-center shadow-inner"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {alerts.error && (
          <div
            className="flex items-start gap-4 p-5 bg-gradient-to-b from-rose-400 to-rose-500 rounded-xl relative transform hover:-translate-y-1 transition-transform duration-200"
            style={{
              boxShadow: '0 10px 0 0 #e11d48, 0 15px 20px rgba(0,0,0,0.2)',
              transform: 'rotateX(2deg)'
            }}
          >
            <div className="w-12 h-12 rounded-xl bg-white/30 flex items-center justify-center flex-shrink-0 shadow-inner">
              <svg className="w-6 h-6 text-white drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base font-bold text-white drop-shadow-sm">Error</p>
              <p className="text-sm text-white/90 mt-1">There was a problem processing your request. Please try again.</p>
            </div>
            <button
              onClick={() => dismiss('error')}
              className="w-8 h-8 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors flex items-center justify-center shadow-inner"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
