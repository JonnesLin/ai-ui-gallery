import { useState } from 'react'

export default function SketchAlert() {
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
    <div className="min-h-screen bg-amber-50 p-8 md:p-12" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23d4c5a9' stroke-width='0.5'%3E%3Cpath d='M0 50 Q 25 45, 50 50 T 100 50'/%3E%3Cpath d='M0 30 Q 25 25, 50 30 T 100 30'/%3E%3Cpath d='M0 70 Q 25 65, 50 70 T 100 70'/%3E%3C/g%3E%3C/svg%3E")` }}>
      <div className="max-w-2xl mx-auto space-y-5">
        {alerts.success && (
          <div
            className="flex items-start gap-4 p-5 bg-green-50 border-2 border-green-800 relative"
            style={{
              borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
              boxShadow: '2px 3px 0 #374151'
            }}
          >
            <div className="w-10 h-10 border-2 border-green-800 rounded-full flex items-center justify-center flex-shrink-0 bg-green-100">
              <span className="text-green-800 text-xl" style={{ fontFamily: 'cursive' }}>✓</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base font-bold text-green-900" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Success!</p>
              <p className="text-sm text-green-800 mt-1" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Your changes have been saved successfully.</p>
            </div>
            <button
              onClick={() => dismiss('success')}
              className="text-green-800 hover:text-green-600 transition-colors p-1"
              style={{ fontFamily: 'cursive' }}
            >
              <span className="text-xl">×</span>
            </button>
          </div>
        )}

        {alerts.info && (
          <div
            className="flex items-start gap-4 p-5 bg-blue-50 border-2 border-blue-800 relative"
            style={{
              borderRadius: '15px 225px 15px 255px/225px 15px 255px 15px',
              boxShadow: '2px 3px 0 #374151'
            }}
          >
            <div className="w-10 h-10 border-2 border-blue-800 rounded-full flex items-center justify-center flex-shrink-0 bg-blue-100">
              <span className="text-blue-800 text-lg" style={{ fontFamily: 'cursive' }}>i</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base font-bold text-blue-900" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Info</p>
              <p className="text-sm text-blue-800 mt-1" style={{ fontFamily: 'Comic Sans MS, cursive' }}>A new software update is available for download.</p>
            </div>
            <button
              onClick={() => dismiss('info')}
              className="text-blue-800 hover:text-blue-600 transition-colors p-1"
              style={{ fontFamily: 'cursive' }}
            >
              <span className="text-xl">×</span>
            </button>
          </div>
        )}

        {alerts.warning && (
          <div
            className="flex items-start gap-4 p-5 bg-yellow-50 border-2 border-yellow-700 relative"
            style={{
              borderRadius: '225px 15px 255px 15px/15px 255px 15px 225px',
              boxShadow: '2px 3px 0 #374151'
            }}
          >
            <div className="w-10 h-10 border-2 border-yellow-700 rounded-full flex items-center justify-center flex-shrink-0 bg-yellow-100">
              <span className="text-yellow-700 text-xl" style={{ fontFamily: 'cursive' }}>!</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base font-bold text-yellow-800" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Warning</p>
              <p className="text-sm text-yellow-700 mt-1" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Your storage is almost full. Consider upgrading your plan.</p>
            </div>
            <button
              onClick={() => dismiss('warning')}
              className="text-yellow-700 hover:text-yellow-600 transition-colors p-1"
              style={{ fontFamily: 'cursive' }}
            >
              <span className="text-xl">×</span>
            </button>
          </div>
        )}

        {alerts.error && (
          <div
            className="flex items-start gap-4 p-5 bg-red-50 border-2 border-red-800 relative"
            style={{
              borderRadius: '15px 255px 15px 225px/255px 15px 225px 15px',
              boxShadow: '2px 3px 0 #374151'
            }}
          >
            <div className="w-10 h-10 border-2 border-red-800 rounded-full flex items-center justify-center flex-shrink-0 bg-red-100">
              <span className="text-red-800 text-xl" style={{ fontFamily: 'cursive' }}>✗</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base font-bold text-red-900" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Error</p>
              <p className="text-sm text-red-800 mt-1" style={{ fontFamily: 'Comic Sans MS, cursive' }}>There was a problem processing your request. Please try again.</p>
            </div>
            <button
              onClick={() => dismiss('error')}
              className="text-red-800 hover:text-red-600 transition-colors p-1"
              style={{ fontFamily: 'cursive' }}
            >
              <span className="text-xl">×</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
