import { useState } from 'react'

export default function MonochromeAlert() {
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
    <div className="min-h-screen bg-neutral-100 p-8 md:p-12">
      <div className="max-w-2xl mx-auto space-y-4">
        {alerts.success && (
          <div className="flex items-start gap-4 p-5 bg-white border border-neutral-200 rounded-lg shadow-sm">
            <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-neutral-900">Success</p>
              <p className="text-sm text-neutral-500 mt-1">Your changes have been saved successfully.</p>
            </div>
            <button
              onClick={() => dismiss('success')}
              className="text-neutral-400 hover:text-neutral-600 transition-colors p-1"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {alerts.info && (
          <div className="flex items-start gap-4 p-5 bg-white border border-neutral-200 rounded-lg shadow-sm">
            <div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-neutral-900">Information</p>
              <p className="text-sm text-neutral-500 mt-1">A new software update is available for download.</p>
            </div>
            <button
              onClick={() => dismiss('info')}
              className="text-neutral-400 hover:text-neutral-600 transition-colors p-1"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {alerts.warning && (
          <div className="flex items-start gap-4 p-5 bg-white border border-neutral-200 rounded-lg shadow-sm">
            <div className="w-10 h-10 rounded-full bg-neutral-500 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-neutral-900">Warning</p>
              <p className="text-sm text-neutral-500 mt-1">Your storage is almost full. Consider upgrading your plan.</p>
            </div>
            <button
              onClick={() => dismiss('warning')}
              className="text-neutral-400 hover:text-neutral-600 transition-colors p-1"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {alerts.error && (
          <div className="flex items-start gap-4 p-5 bg-white border border-neutral-200 rounded-lg shadow-sm">
            <div className="w-10 h-10 rounded-full bg-neutral-300 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-neutral-900">Error</p>
              <p className="text-sm text-neutral-500 mt-1">There was a problem processing your request. Please try again.</p>
            </div>
            <button
              onClick={() => dismiss('error')}
              className="text-neutral-400 hover:text-neutral-600 transition-colors p-1"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
