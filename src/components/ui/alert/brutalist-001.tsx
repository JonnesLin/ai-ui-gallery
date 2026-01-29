import { useState } from 'react'

export default function BrutalistAlert() {
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
    <div className="min-h-screen bg-white p-8 md:p-12">
      <div className="max-w-2xl mx-auto space-y-6">
        {alerts.success && (
          <div className="flex items-start gap-4 p-5 bg-lime-300 border-4 border-black shadow-[8px_8px_0_0_#000]">
            <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-lime-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-lg font-black text-black uppercase tracking-wide">SUCCESS</p>
              <p className="text-sm font-bold text-black mt-1">Your changes have been saved successfully.</p>
            </div>
            <button
              onClick={() => dismiss('success')}
              className="w-10 h-10 bg-black text-lime-300 font-black text-xl hover:bg-lime-300 hover:text-black hover:border-2 hover:border-black transition-colors flex items-center justify-center"
            >
              X
            </button>
          </div>
        )}

        {alerts.info && (
          <div className="flex items-start gap-4 p-5 bg-cyan-300 border-4 border-black shadow-[8px_8px_0_0_#000]">
            <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-lg font-black text-black uppercase tracking-wide">INFO</p>
              <p className="text-sm font-bold text-black mt-1">A new software update is available for download.</p>
            </div>
            <button
              onClick={() => dismiss('info')}
              className="w-10 h-10 bg-black text-cyan-300 font-black text-xl hover:bg-cyan-300 hover:text-black hover:border-2 hover:border-black transition-colors flex items-center justify-center"
            >
              X
            </button>
          </div>
        )}

        {alerts.warning && (
          <div className="flex items-start gap-4 p-5 bg-yellow-300 border-4 border-black shadow-[8px_8px_0_0_#000]">
            <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-lg font-black text-black uppercase tracking-wide">WARNING</p>
              <p className="text-sm font-bold text-black mt-1">Your storage is almost full. Consider upgrading your plan.</p>
            </div>
            <button
              onClick={() => dismiss('warning')}
              className="w-10 h-10 bg-black text-yellow-300 font-black text-xl hover:bg-yellow-300 hover:text-black hover:border-2 hover:border-black transition-colors flex items-center justify-center"
            >
              X
            </button>
          </div>
        )}

        {alerts.error && (
          <div className="flex items-start gap-4 p-5 bg-red-400 border-4 border-black shadow-[8px_8px_0_0_#000]">
            <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-lg font-black text-black uppercase tracking-wide">ERROR</p>
              <p className="text-sm font-bold text-black mt-1">There was a problem processing your request. Please try again.</p>
            </div>
            <button
              onClick={() => dismiss('error')}
              className="w-10 h-10 bg-black text-red-400 font-black text-xl hover:bg-red-400 hover:text-black hover:border-2 hover:border-black transition-colors flex items-center justify-center"
            >
              X
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
