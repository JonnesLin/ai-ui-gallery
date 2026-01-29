import { useState } from 'react'

export default function PlayfulAlert() {
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
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-100 via-violet-100 to-cyan-100 p-8 md:p-12">
      <div className="max-w-2xl mx-auto space-y-5">
        {alerts.success && (
          <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-emerald-400 to-green-400 rounded-[2rem] rounded-tl-lg shadow-lg transform hover:scale-[1.02] transition-transform">
            <div className="w-14 h-14 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0 text-3xl animate-bounce">
              <span role="img" aria-label="success">🎉</span>
            </div>
            <div className="flex-1 min-w-0 pt-1">
              <p className="text-lg font-bold text-white">Woohoo! Success!</p>
              <p className="text-sm text-white/90 mt-1">Your changes have been saved successfully.</p>
            </div>
            <button
              onClick={() => dismiss('success')}
              className="w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors flex items-center justify-center text-xl font-bold"
            >
              ×
            </button>
          </div>
        )}

        {alerts.info && (
          <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-[2rem] rounded-tr-lg shadow-lg transform hover:scale-[1.02] transition-transform">
            <div className="w-14 h-14 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0 text-3xl">
              <span role="img" aria-label="info">💡</span>
            </div>
            <div className="flex-1 min-w-0 pt-1">
              <p className="text-lg font-bold text-white">Hey, did you know?</p>
              <p className="text-sm text-white/90 mt-1">A new software update is available for download.</p>
            </div>
            <button
              onClick={() => dismiss('info')}
              className="w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors flex items-center justify-center text-xl font-bold"
            >
              ×
            </button>
          </div>
        )}

        {alerts.warning && (
          <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-[2rem] rounded-bl-lg shadow-lg transform hover:scale-[1.02] transition-transform">
            <div className="w-14 h-14 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0 text-3xl animate-pulse">
              <span role="img" aria-label="warning">⚡</span>
            </div>
            <div className="flex-1 min-w-0 pt-1">
              <p className="text-lg font-bold text-white">Heads up!</p>
              <p className="text-sm text-white/90 mt-1">Your storage is almost full. Consider upgrading your plan.</p>
            </div>
            <button
              onClick={() => dismiss('warning')}
              className="w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors flex items-center justify-center text-xl font-bold"
            >
              ×
            </button>
          </div>
        )}

        {alerts.error && (
          <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-rose-400 to-pink-400 rounded-[2rem] rounded-br-lg shadow-lg transform hover:scale-[1.02] transition-transform">
            <div className="w-14 h-14 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0 text-3xl">
              <span role="img" aria-label="error">😅</span>
            </div>
            <div className="flex-1 min-w-0 pt-1">
              <p className="text-lg font-bold text-white">Oops! Something went wrong</p>
              <p className="text-sm text-white/90 mt-1">There was a problem processing your request. Please try again.</p>
            </div>
            <button
              onClick={() => dismiss('error')}
              className="w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors flex items-center justify-center text-xl font-bold"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
