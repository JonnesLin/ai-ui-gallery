export default function PastelProgress() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-cyan-50 p-8 md:p-12">
      <div className="max-w-xl mx-auto space-y-10">
        {/* Basic Progress */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-purple-400 uppercase tracking-widest">Basic Progress</h3>
          <div className="space-y-4">
            <div className="h-3 bg-white/60 rounded-full overflow-hidden shadow-sm">
              <div className="h-full w-1/4 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full" />
            </div>
            <div className="h-3 bg-white/60 rounded-full overflow-hidden shadow-sm">
              <div className="h-full w-1/2 bg-gradient-to-r from-violet-300 to-purple-300 rounded-full" />
            </div>
            <div className="h-3 bg-white/60 rounded-full overflow-hidden shadow-sm">
              <div className="h-full w-3/4 bg-gradient-to-r from-cyan-300 to-sky-300 rounded-full" />
            </div>
          </div>
        </div>

        {/* With Label */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-purple-400 uppercase tracking-widest">With Label</h3>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50">
            <div className="flex justify-between text-sm mb-3">
              <span className="text-purple-500 font-medium">Uploading photos...</span>
              <span className="text-purple-400">65%</span>
            </div>
            <div className="h-4 bg-purple-100/50 rounded-full overflow-hidden">
              <div className="h-full w-[65%] bg-gradient-to-r from-purple-300 to-pink-300 rounded-full" />
            </div>
          </div>
        </div>

        {/* Colors */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-purple-400 uppercase tracking-widest">Status Colors</h3>
          <div className="space-y-4">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-emerald-100">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-emerald-500 font-medium">Complete</span>
                <span className="text-emerald-400">100%</span>
              </div>
              <div className="h-3 bg-emerald-50 rounded-full overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full" />
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-amber-100">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-amber-500 font-medium">In Progress</span>
                <span className="text-amber-400">70%</span>
              </div>
              <div className="h-3 bg-amber-50 rounded-full overflow-hidden">
                <div className="h-full w-[70%] bg-gradient-to-r from-amber-300 to-orange-300 rounded-full" />
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-rose-100">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-rose-500 font-medium">Needs Attention</span>
                <span className="text-rose-400">35%</span>
              </div>
              <div className="h-3 bg-rose-50 rounded-full overflow-hidden">
                <div className="h-full w-[35%] bg-gradient-to-r from-rose-300 to-pink-300 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Circular Progress */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-purple-400 uppercase tracking-widest">Circular</h3>
          <div className="flex items-center justify-around">
            <div className="relative w-28 h-28 bg-white/70 backdrop-blur-sm rounded-full p-3 shadow-sm">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 88 88">
                <circle cx="44" cy="44" r="38" fill="none" stroke="#fce7f3" strokeWidth="8" />
                <circle
                  cx="44"
                  cy="44"
                  r="38"
                  fill="none"
                  stroke="url(#pastelGrad1)"
                  strokeWidth="8"
                  strokeDasharray="238.76"
                  strokeDashoffset="179.07"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="pastelGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f9a8d4" />
                    <stop offset="100%" stopColor="#c4b5fd" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-pink-400">25%</span>
            </div>
            <div className="relative w-28 h-28 bg-white/70 backdrop-blur-sm rounded-full p-3 shadow-sm">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 88 88">
                <circle cx="44" cy="44" r="38" fill="none" stroke="#cffafe" strokeWidth="8" />
                <circle
                  cx="44"
                  cy="44"
                  r="38"
                  fill="none"
                  stroke="url(#pastelGrad2)"
                  strokeWidth="8"
                  strokeDasharray="238.76"
                  strokeDashoffset="59.69"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="pastelGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#67e8f9" />
                    <stop offset="100%" stopColor="#a5b4fc" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-cyan-400">75%</span>
            </div>
          </div>
        </div>

        {/* Cute Steps */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-purple-400 uppercase tracking-widest">Steps</h3>
          <div className="flex items-center justify-between px-4">
            {['Details', 'Payment', 'Review', 'Done'].map((step, i) => (
              <div key={step} className="flex flex-col items-center z-10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium shadow-sm ${
                    i < 2
                      ? 'bg-gradient-to-br from-violet-300 to-purple-300 text-white'
                      : 'bg-white/80 text-purple-300 border border-purple-100'
                  }`}
                >
                  {i < 2 ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </div>
                <span className="mt-2 text-xs text-purple-400">{step}</span>
              </div>
            ))}
          </div>
          <div className="relative h-1 bg-purple-100 mx-9 -mt-9 mb-6 rounded-full">
            <div className="absolute h-full w-[40%] bg-gradient-to-r from-violet-300 to-purple-300 rounded-full" />
          </div>
        </div>

        {/* Bubble Progress */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-purple-400 uppercase tracking-widest">Bubble Style</h3>
          <div className="flex gap-3 justify-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`w-10 h-10 rounded-full ${
                  i <= 3
                    ? 'bg-gradient-to-br from-pink-300 to-purple-300 shadow-lg'
                    : 'bg-white/60 border-2 border-dashed border-purple-200'
                }`}
              />
            ))}
          </div>
          <p className="text-center text-sm text-purple-400">3 of 5 complete</p>
        </div>

        {/* Multi-color */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-purple-400 uppercase tracking-widest">Storage</h3>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <div className="h-4 bg-gray-100 rounded-full overflow-hidden flex">
              <div className="h-full w-[30%] bg-gradient-to-r from-pink-300 to-rose-300" />
              <div className="h-full w-[25%] bg-gradient-to-r from-violet-300 to-purple-300" />
              <div className="h-full w-[15%] bg-gradient-to-r from-cyan-300 to-sky-300" />
            </div>
            <div className="mt-4 flex flex-wrap gap-4 text-xs">
              <span className="flex items-center gap-2 text-rose-400">
                <span className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-300 to-rose-300" />
                Photos 30%
              </span>
              <span className="flex items-center gap-2 text-purple-400">
                <span className="w-3 h-3 rounded-full bg-gradient-to-r from-violet-300 to-purple-300" />
                Music 25%
              </span>
              <span className="flex items-center gap-2 text-cyan-400">
                <span className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-300 to-sky-300" />
                Apps 15%
              </span>
            </div>
          </div>
        </div>

        {/* Animated */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-purple-400 uppercase tracking-widest">Animated</h3>
          <div className="h-4 bg-white/60 rounded-full overflow-hidden shadow-sm">
            <div
              className="h-full w-[70%] rounded-full animate-[pastelPulse_2s_ease-in-out_infinite]"
              style={{
                background: 'linear-gradient(90deg, #f9a8d4, #c4b5fd, #67e8f9, #c4b5fd, #f9a8d4)',
                backgroundSize: '200% 100%'
              }}
            />
          </div>
          <style>{`
            @keyframes pastelPulse {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
          `}</style>
        </div>
      </div>
    </div>
  )
}
