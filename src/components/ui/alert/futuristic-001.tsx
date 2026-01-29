import { useState } from 'react'

export default function FuturisticAlert() {
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
    <div className="min-h-screen bg-slate-950 p-8 md:p-12 relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-2xl mx-auto space-y-4">
        {alerts.success && (
          <div className="group relative flex items-start gap-4 p-5 bg-slate-900/50 backdrop-blur-sm border border-emerald-500/30 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent" />
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-emerald-600" />
            <div className="relative w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="relative flex-1 min-w-0">
              <p className="text-sm font-medium text-emerald-300 tracking-wide">OPERATION COMPLETE</p>
              <p className="text-sm text-slate-400 mt-1">Your changes have been saved successfully.</p>
            </div>
            <button
              onClick={() => dismiss('success')}
              className="relative text-slate-500 hover:text-emerald-400 transition-colors p-1 rounded border border-transparent hover:border-emerald-500/30"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {alerts.info && (
          <div className="group relative flex items-start gap-4 p-5 bg-slate-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent" />
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-cyan-600" />
            <div className="relative w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="relative flex-1 min-w-0">
              <p className="text-sm font-medium text-cyan-300 tracking-wide">SYSTEM NOTIFICATION</p>
              <p className="text-sm text-slate-400 mt-1">A new software update is available for download.</p>
            </div>
            <button
              onClick={() => dismiss('info')}
              className="relative text-slate-500 hover:text-cyan-400 transition-colors p-1 rounded border border-transparent hover:border-cyan-500/30"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {alerts.warning && (
          <div className="group relative flex items-start gap-4 p-5 bg-slate-900/50 backdrop-blur-sm border border-amber-500/30 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent" />
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-amber-600" />
            <div className="relative w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="relative flex-1 min-w-0">
              <p className="text-sm font-medium text-amber-300 tracking-wide">CAUTION ADVISORY</p>
              <p className="text-sm text-slate-400 mt-1">Your storage is almost full. Consider upgrading your plan.</p>
            </div>
            <button
              onClick={() => dismiss('warning')}
              className="relative text-slate-500 hover:text-amber-400 transition-colors p-1 rounded border border-transparent hover:border-amber-500/30"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {alerts.error && (
          <div className="group relative flex items-start gap-4 p-5 bg-slate-900/50 backdrop-blur-sm border border-rose-500/30 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-transparent" />
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-400 to-rose-600 animate-pulse" />
            <div className="relative w-10 h-10 rounded-lg bg-rose-500/20 border border-rose-500/30 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="relative flex-1 min-w-0">
              <p className="text-sm font-medium text-rose-300 tracking-wide">CRITICAL ERROR</p>
              <p className="text-sm text-slate-400 mt-1">There was a problem processing your request. Please try again.</p>
            </div>
            <button
              onClick={() => dismiss('error')}
              className="relative text-slate-500 hover:text-rose-400 transition-colors p-1 rounded border border-transparent hover:border-rose-500/30"
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
