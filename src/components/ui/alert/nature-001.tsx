import { useState } from 'react'

export default function NatureAlert() {
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
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-green-100 p-8 md:p-12">
      <div className="max-w-2xl mx-auto space-y-4">
        {alerts.success && (
          <div className="flex items-start gap-4 p-5 bg-white/80 backdrop-blur-sm border border-green-200 rounded-2xl shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-200">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base font-semibold text-green-800">Growth Achieved</p>
              <p className="text-sm text-green-700/70 mt-1">Your changes have been saved successfully.</p>
            </div>
            <button
              onClick={() => dismiss('success')}
              className="w-8 h-8 rounded-lg bg-green-100 text-green-600 hover:bg-green-200 transition-colors flex items-center justify-center"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {alerts.info && (
          <div className="flex items-start gap-4 p-5 bg-white/80 backdrop-blur-sm border border-sky-200 rounded-2xl shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-sky-200">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base font-semibold text-sky-800">Ocean of Knowledge</p>
              <p className="text-sm text-sky-700/70 mt-1">A new software update is available for download.</p>
            </div>
            <button
              onClick={() => dismiss('info')}
              className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 hover:bg-sky-200 transition-colors flex items-center justify-center"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {alerts.warning && (
          <div className="flex items-start gap-4 p-5 bg-white/80 backdrop-blur-sm border border-amber-200 rounded-2xl shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-200">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base font-semibold text-amber-800">Autumn Reminder</p>
              <p className="text-sm text-amber-700/70 mt-1">Your storage is almost full. Consider upgrading your plan.</p>
            </div>
            <button
              onClick={() => dismiss('warning')}
              className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors flex items-center justify-center"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {alerts.error && (
          <div className="flex items-start gap-4 p-5 bg-white/80 backdrop-blur-sm border border-rose-200 rounded-2xl shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-400 to-red-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-rose-200">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base font-semibold text-rose-800">Storm Warning</p>
              <p className="text-sm text-rose-700/70 mt-1">There was a problem processing your request. Please try again.</p>
            </div>
            <button
              onClick={() => dismiss('error')}
              className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 hover:bg-rose-200 transition-colors flex items-center justify-center"
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
