import { useState } from 'react'

export default function CyberpunkAlert() {
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
    <div className="min-h-screen bg-black p-8 md:p-12 relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto space-y-5">
        {alerts.success && (
          <div className="relative flex items-start gap-4 p-5 bg-black border border-emerald-500 clip-path-cyber">
            <div className="absolute inset-0 bg-emerald-500/10" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
            <div className="relative w-10 h-10 border border-emerald-500 bg-emerald-500/20 flex items-center justify-center flex-shrink-0 skew-x-[-5deg]">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="relative flex-1 min-w-0">
              <p className="text-sm font-bold text-emerald-400 uppercase tracking-[0.2em] font-mono">[SYS.SUCCESS]</p>
              <p className="text-sm text-emerald-300/70 mt-1 font-mono">Your changes have been saved successfully.</p>
            </div>
            <button
              onClick={() => dismiss('success')}
              className="relative text-emerald-500 hover:text-emerald-300 transition-colors p-1 border border-emerald-500/50 hover:border-emerald-400 hover:bg-emerald-500/20"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {alerts.info && (
          <div className="relative flex items-start gap-4 p-5 bg-black border border-cyan-500 clip-path-cyber">
            <div className="absolute inset-0 bg-cyan-500/10" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <div className="relative w-10 h-10 border border-cyan-500 bg-cyan-500/20 flex items-center justify-center flex-shrink-0 skew-x-[-5deg]">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="relative flex-1 min-w-0">
              <p className="text-sm font-bold text-cyan-400 uppercase tracking-[0.2em] font-mono">[SYS.INFO]</p>
              <p className="text-sm text-cyan-300/70 mt-1 font-mono">A new software update is available for download.</p>
            </div>
            <button
              onClick={() => dismiss('info')}
              className="relative text-cyan-500 hover:text-cyan-300 transition-colors p-1 border border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/20"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {alerts.warning && (
          <div className="relative flex items-start gap-4 p-5 bg-black border border-yellow-500 clip-path-cyber">
            <div className="absolute inset-0 bg-yellow-500/10" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
            <div className="relative w-10 h-10 border border-yellow-500 bg-yellow-500/20 flex items-center justify-center flex-shrink-0 skew-x-[-5deg]">
              <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="relative flex-1 min-w-0">
              <p className="text-sm font-bold text-yellow-400 uppercase tracking-[0.2em] font-mono">[SYS.WARNING]</p>
              <p className="text-sm text-yellow-300/70 mt-1 font-mono">Your storage is almost full. Consider upgrading your plan.</p>
            </div>
            <button
              onClick={() => dismiss('warning')}
              className="relative text-yellow-500 hover:text-yellow-300 transition-colors p-1 border border-yellow-500/50 hover:border-yellow-400 hover:bg-yellow-500/20"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {alerts.error && (
          <div className="relative flex items-start gap-4 p-5 bg-black border border-red-500 clip-path-cyber">
            <div className="absolute inset-0 bg-red-500/10" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-400 to-transparent animate-pulse" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-400 to-transparent animate-pulse" />
            <div className="relative w-10 h-10 border border-red-500 bg-red-500/20 flex items-center justify-center flex-shrink-0 skew-x-[-5deg]">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="relative flex-1 min-w-0">
              <p className="text-sm font-bold text-red-400 uppercase tracking-[0.2em] font-mono">[SYS.ERROR]</p>
              <p className="text-sm text-red-300/70 mt-1 font-mono">There was a problem processing your request. Please try again.</p>
            </div>
            <button
              onClick={() => dismiss('error')}
              className="relative text-red-500 hover:text-red-300 transition-colors p-1 border border-red-500/50 hover:border-red-400 hover:bg-red-500/20"
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
