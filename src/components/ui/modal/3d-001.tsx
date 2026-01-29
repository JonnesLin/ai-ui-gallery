import { useState } from 'react'

export default function ThreeDModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-8" style={{ perspective: '1000px' }}>
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 text-sm font-medium text-white bg-gradient-to-b from-indigo-500 to-indigo-700 rounded-xl transition-all hover:-translate-y-1"
        style={{
          boxShadow: '0 10px 20px rgba(99, 102, 241, 0.4), 0 6px 6px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -2px 0 rgba(0,0,0,0.1)'
        }}
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ perspective: '1200px' }}>
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />

          <div
            className="relative max-w-md w-full transition-transform duration-300"
            style={{
              transform: 'rotateX(5deg)',
              transformStyle: 'preserve-3d'
            }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-b from-indigo-600 to-indigo-800 rounded-2xl"
              style={{
                transform: 'translateZ(-20px)',
                filter: 'blur(20px)',
                opacity: 0.5
              }}
            />

            <div
              className="relative bg-gradient-to-b from-white to-gray-100 rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(255,255,255,0.1) inset, 0 1px 3px rgba(0,0,0,0.1) inset',
                transform: 'translateZ(0)'
              }}
            >
              <div
                className="h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
                style={{ boxShadow: '0 4px 15px rgba(168, 85, 247, 0.4)' }}
              />

              <div className="p-8">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 bg-gray-100 rounded-full transition-all hover:scale-110"
                  style={{
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)'
                  }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="flex justify-center mb-6">
                  <div
                    className="w-20 h-20 bg-gradient-to-b from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center"
                    style={{
                      boxShadow: '0 10px 20px rgba(99, 102, 241, 0.3), inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.1)',
                      transform: 'translateZ(10px)'
                    }}
                  >
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-center text-gray-800 mb-2">
                  3D Package Tracking
                </h2>
                <p className="text-center text-gray-500 text-sm mb-6">
                  Your package is on its way! Track its journey in real-time.
                </p>

                <div
                  className="bg-gray-50 rounded-xl p-5 mb-6"
                  style={{
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.06), inset 0 -1px 0 rgba(255,255,255,0.8)'
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Tracking ID</span>
                    <span className="text-sm font-mono font-bold text-indigo-600">PKG-2024-7842</span>
                  </div>

                  <div className="relative">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden" style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)' }}>
                      <div
                        className="h-full w-3/4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                        style={{ boxShadow: '0 0 10px rgba(99, 102, 241, 0.5)' }}
                      />
                    </div>
                    <div className="flex justify-between mt-3">
                      {['Shipped', 'In Transit', 'Out for Delivery', 'Delivered'].map((step, i) => (
                        <span key={i} className={`text-xs ${i < 3 ? 'text-indigo-600 font-medium' : 'text-gray-400'}`}>
                          {step}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex-1 py-3 text-sm font-medium text-gray-600 bg-gray-100 rounded-xl transition-all hover:-translate-y-0.5"
                    style={{
                      boxShadow: '0 4px 6px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(0,0,0,0.05)'
                    }}
                  >
                    Close
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex-1 py-3 text-sm font-medium text-white bg-gradient-to-b from-indigo-500 to-indigo-700 rounded-xl transition-all hover:-translate-y-0.5"
                    style={{
                      boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -2px 0 rgba(0,0,0,0.1)'
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
