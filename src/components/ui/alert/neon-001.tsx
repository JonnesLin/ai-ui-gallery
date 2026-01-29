import { useState } from 'react'

export default function NeonAlert() {
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
    <div className="min-h-screen bg-gray-950 p-8 md:p-12">
      <div className="max-w-2xl mx-auto space-y-6">
        {alerts.success && (
          <div className="flex items-start gap-4 p-5 bg-gray-900 border-2 border-green-400 rounded-lg relative overflow-hidden"
            style={{ boxShadow: '0 0 20px rgba(74, 222, 128, 0.3), inset 0 0 20px rgba(74, 222, 128, 0.05)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent" />
            <div className="relative w-10 h-10 rounded-lg border-2 border-green-400 flex items-center justify-center flex-shrink-0"
              style={{ boxShadow: '0 0 10px rgba(74, 222, 128, 0.5)' }}
            >
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="relative flex-1 min-w-0">
              <p className="text-sm font-bold text-green-400 tracking-wide" style={{ textShadow: '0 0 10px rgba(74, 222, 128, 0.8)' }}>
                SUCCESS
              </p>
              <p className="text-sm text-gray-400 mt-1">Your changes have been saved successfully.</p>
            </div>
            <button
              onClick={() => dismiss('success')}
              className="relative text-green-400/50 hover:text-green-400 transition-colors p-1"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {alerts.info && (
          <div className="flex items-start gap-4 p-5 bg-gray-900 border-2 border-cyan-400 rounded-lg relative overflow-hidden"
            style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.3), inset 0 0 20px rgba(34, 211, 238, 0.05)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent" />
            <div className="relative w-10 h-10 rounded-lg border-2 border-cyan-400 flex items-center justify-center flex-shrink-0"
              style={{ boxShadow: '0 0 10px rgba(34, 211, 238, 0.5)' }}
            >
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="relative flex-1 min-w-0">
              <p className="text-sm font-bold text-cyan-400 tracking-wide" style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.8)' }}>
                INFORMATION
              </p>
              <p className="text-sm text-gray-400 mt-1">A new software update is available for download.</p>
            </div>
            <button
              onClick={() => dismiss('info')}
              className="relative text-cyan-400/50 hover:text-cyan-400 transition-colors p-1"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {alerts.warning && (
          <div className="flex items-start gap-4 p-5 bg-gray-900 border-2 border-yellow-400 rounded-lg relative overflow-hidden"
            style={{ boxShadow: '0 0 20px rgba(250, 204, 21, 0.3), inset 0 0 20px rgba(250, 204, 21, 0.05)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent" />
            <div className="relative w-10 h-10 rounded-lg border-2 border-yellow-400 flex items-center justify-center flex-shrink-0"
              style={{ boxShadow: '0 0 10px rgba(250, 204, 21, 0.5)' }}
            >
              <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="relative flex-1 min-w-0">
              <p className="text-sm font-bold text-yellow-400 tracking-wide" style={{ textShadow: '0 0 10px rgba(250, 204, 21, 0.8)' }}>
                WARNING
              </p>
              <p className="text-sm text-gray-400 mt-1">Your storage is almost full. Consider upgrading your plan.</p>
            </div>
            <button
              onClick={() => dismiss('warning')}
              className="relative text-yellow-400/50 hover:text-yellow-400 transition-colors p-1"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {alerts.error && (
          <div className="flex items-start gap-4 p-5 bg-gray-900 border-2 border-pink-500 rounded-lg relative overflow-hidden animate-pulse"
            style={{ boxShadow: '0 0 20px rgba(236, 72, 153, 0.3), inset 0 0 20px rgba(236, 72, 153, 0.05)', animation: 'none' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-transparent" />
            <div className="relative w-10 h-10 rounded-lg border-2 border-pink-500 flex items-center justify-center flex-shrink-0"
              style={{ boxShadow: '0 0 10px rgba(236, 72, 153, 0.5)' }}
            >
              <svg className="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="relative flex-1 min-w-0">
              <p className="text-sm font-bold text-pink-500 tracking-wide" style={{ textShadow: '0 0 10px rgba(236, 72, 153, 0.8)' }}>
                ERROR
              </p>
              <p className="text-sm text-gray-400 mt-1">There was a problem processing your request. Please try again.</p>
            </div>
            <button
              onClick={() => dismiss('error')}
              className="relative text-pink-500/50 hover:text-pink-500 transition-colors p-1"
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
