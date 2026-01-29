export default function FuturisticCTA() {
  return (
    <section className="py-20 px-4 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(59,130,246,0.15),_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(139,92,246,0.15),_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-blue-400 text-sm font-mono">SYSTEM.READY</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Future is
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400">
              Already Here
            </span>
          </h2>
          <p className="text-lg text-slate-400 mb-12 max-w-xl mx-auto font-light">
            Harness the power of next-generation technology. Built for tomorrow, available today.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 rounded-2xl blur-xl opacity-30"></div>
          <div className="relative bg-slate-800/80 backdrop-blur border border-slate-700/50 rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Quantum Core Engine</div>
                  <div className="text-slate-400 text-sm">10x faster processing</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-violet-500/25 transition-all">
                  Launch Now
                </button>
                <button className="px-8 py-3 text-slate-300 font-semibold rounded-xl border border-slate-600 hover:border-slate-500 hover:bg-slate-700/50 transition-all">
                  View Specs
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-8 text-sm text-slate-500 font-mono">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            0ms Latency
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
            AI Powered
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-violet-500 rounded-full"></span>
            Edge Computing
          </span>
        </div>
      </div>
    </section>
  )
}
