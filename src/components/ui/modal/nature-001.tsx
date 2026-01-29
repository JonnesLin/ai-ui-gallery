import { useState } from 'react'

export default function NatureModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-800 to-emerald-950 flex items-center justify-center p-8">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 text-sm font-medium text-emerald-900 bg-lime-300 rounded-full hover:bg-lime-400 shadow-lg shadow-lime-400/20 transition-all"
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-emerald-950/70 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative bg-gradient-to-b from-stone-50 to-stone-100 rounded-3xl shadow-2xl max-w-md w-full overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-emerald-500/20 to-transparent" />

            <div className="relative p-8">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-stone-400 hover:text-stone-600 hover:bg-stone-200 rounded-full transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              <h2 className="text-xl font-semibold text-center text-emerald-900 mb-2">
                Go Carbon Neutral
              </h2>
              <p className="text-center text-stone-600 text-sm mb-6">
                Offset your carbon footprint and help preserve our planet for future generations.
              </p>

              <div className="bg-emerald-50 rounded-2xl p-5 mb-6 border border-emerald-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-emerald-900">Plant 10 Trees</p>
                    <p className="text-xs text-emerald-600">Offset 250kg CO2 per year</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-white rounded-xl p-3">
                    <span className="text-lg">🌳</span>
                    <p className="text-xs text-stone-600 mt-1">Oak Trees</p>
                  </div>
                  <div className="bg-white rounded-xl p-3">
                    <span className="text-lg">🌲</span>
                    <p className="text-xs text-stone-600 mt-1">Pine Trees</p>
                  </div>
                  <div className="bg-white rounded-xl p-3">
                    <span className="text-lg">🌴</span>
                    <p className="text-xs text-stone-600 mt-1">Palm Trees</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between bg-lime-100 rounded-xl p-4 mb-6">
                <div>
                  <p className="text-xs text-lime-700 font-medium">Monthly Contribution</p>
                  <p className="text-2xl font-bold text-emerald-900">$9.99</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-lime-700">Impact</p>
                  <p className="text-sm font-semibold text-emerald-800">120 trees/year</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-3 text-sm font-medium text-stone-600 bg-stone-200 rounded-xl hover:bg-stone-300 transition-colors"
                >
                  Not Now
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-3 text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl hover:from-emerald-600 hover:to-teal-600 shadow-lg shadow-emerald-500/20 transition-all"
                >
                  Start Planting
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
