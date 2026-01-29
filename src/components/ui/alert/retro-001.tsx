import { useState } from 'react'

export default function RetroAlert() {
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
    <div className="min-h-screen bg-amber-50 p-8 md:p-12" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23d4a574\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M0 0h20v20H0V0zm20 20h20v20H20V20z\'/%3E%3C/g%3E%3C/svg%3E")' }}>
      <div className="max-w-2xl mx-auto space-y-5">
        {alerts.success && (
          <div className="flex items-start gap-4 p-5 bg-green-100 border-2 border-green-800 rounded-sm shadow-[4px_4px_0_0_#166534]">
            <div className="w-10 h-10 rounded-full border-2 border-green-800 bg-green-200 flex items-center justify-center flex-shrink-0">
              <span className="text-green-800 text-xl font-serif">✓</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base font-bold text-green-900 font-serif">Success!</p>
              <p className="text-sm text-green-800 mt-1 font-serif">Your changes have been saved successfully.</p>
            </div>
            <button
              onClick={() => dismiss('success')}
              className="w-8 h-8 rounded-full border-2 border-green-800 bg-green-200 text-green-800 font-serif text-sm hover:bg-green-300 transition-colors flex items-center justify-center"
            >
              ×
            </button>
          </div>
        )}

        {alerts.info && (
          <div className="flex items-start gap-4 p-5 bg-blue-100 border-2 border-blue-800 rounded-sm shadow-[4px_4px_0_0_#1e40af]">
            <div className="w-10 h-10 rounded-full border-2 border-blue-800 bg-blue-200 flex items-center justify-center flex-shrink-0">
              <span className="text-blue-800 text-xl font-serif">i</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base font-bold text-blue-900 font-serif">Information</p>
              <p className="text-sm text-blue-800 mt-1 font-serif">A new software update is available for download.</p>
            </div>
            <button
              onClick={() => dismiss('info')}
              className="w-8 h-8 rounded-full border-2 border-blue-800 bg-blue-200 text-blue-800 font-serif text-sm hover:bg-blue-300 transition-colors flex items-center justify-center"
            >
              ×
            </button>
          </div>
        )}

        {alerts.warning && (
          <div className="flex items-start gap-4 p-5 bg-orange-100 border-2 border-orange-800 rounded-sm shadow-[4px_4px_0_0_#9a3412]">
            <div className="w-10 h-10 rounded-full border-2 border-orange-800 bg-orange-200 flex items-center justify-center flex-shrink-0">
              <span className="text-orange-800 text-xl font-serif">!</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base font-bold text-orange-900 font-serif">Warning</p>
              <p className="text-sm text-orange-800 mt-1 font-serif">Your storage is almost full. Consider upgrading your plan.</p>
            </div>
            <button
              onClick={() => dismiss('warning')}
              className="w-8 h-8 rounded-full border-2 border-orange-800 bg-orange-200 text-orange-800 font-serif text-sm hover:bg-orange-300 transition-colors flex items-center justify-center"
            >
              ×
            </button>
          </div>
        )}

        {alerts.error && (
          <div className="flex items-start gap-4 p-5 bg-red-100 border-2 border-red-800 rounded-sm shadow-[4px_4px_0_0_#991b1b]">
            <div className="w-10 h-10 rounded-full border-2 border-red-800 bg-red-200 flex items-center justify-center flex-shrink-0">
              <span className="text-red-800 text-xl font-serif">✗</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base font-bold text-red-900 font-serif">Error</p>
              <p className="text-sm text-red-800 mt-1 font-serif">There was a problem processing your request. Please try again.</p>
            </div>
            <button
              onClick={() => dismiss('error')}
              className="w-8 h-8 rounded-full border-2 border-red-800 bg-red-200 text-red-800 font-serif text-sm hover:bg-red-300 transition-colors flex items-center justify-center"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
