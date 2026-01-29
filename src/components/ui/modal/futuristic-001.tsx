import { useState } from 'react'

export default function FuturisticModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-8">
      <button
        onClick={() => setIsOpen(true)}
        className="group relative px-8 py-3 text-sm font-medium tracking-wider uppercase text-white bg-transparent border border-white/20 overflow-hidden transition-all hover:border-white/40"
      >
        <span className="relative z-10">Open Modal</span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 translate-y-full group-hover:translate-y-0 transition-transform" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-950/90"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative max-w-md w-full">
            <div className="absolute -inset-px bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 opacity-50 blur-xl animate-pulse" />

            <div className="relative bg-slate-950 border border-white/10 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
              <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
              <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent" />

              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-blue-500" />
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-blue-500" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-purple-500" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-purple-500" />

              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-xs font-medium tracking-widest uppercase text-white/60">
                      Quantum Interface
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border border-blue-500/30 flex items-center justify-center animate-spin" style={{ animationDuration: '10s' }}>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
                      </div>
                    </div>
                    <div className="absolute -inset-2 rounded-full border border-white/5 animate-ping" style={{ animationDuration: '2s' }} />
                  </div>
                </div>

                <h2 className="text-center text-xl font-light text-white mb-2 tracking-wide">
                  Dimensional Gateway
                </h2>
                <p className="text-center text-white/50 text-sm mb-8">
                  Initializing hyperspace coordinates. Prepare for quantum leap.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-xs uppercase tracking-wider text-white/40">Status</span>
                    <span className="text-sm text-green-400">ONLINE</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-xs uppercase tracking-wider text-white/40">Dimension</span>
                    <span className="text-sm text-white">7-Alpha</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-xs uppercase tracking-wider text-white/40">Energy</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-4/5 h-full bg-gradient-to-r from-blue-500 to-purple-500" />
                      </div>
                      <span className="text-sm text-white">87%</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex-1 py-3 text-sm font-medium tracking-wider uppercase text-white/60 border border-white/10 hover:border-white/30 hover:text-white transition-all"
                  >
                    Abort
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex-1 py-3 text-sm font-medium tracking-wider uppercase text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all"
                  >
                    Initialize
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
