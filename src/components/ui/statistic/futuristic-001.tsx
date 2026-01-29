export default function FuturisticStatistic() {
  return (
    <div className="w-full min-h-screen bg-slate-950 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-slate-900 border border-blue-500/30 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-400 text-xs font-mono uppercase tracking-wider">QUANTUM</span>
                </div>
                <div className="text-blue-400 text-xl">⚛️</div>
              </div>
              <div className="text-blue-300/60 text-xs font-mono mb-2">PROCESSING_UNITS</div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-3">
                8.4M
              </div>
              <div className="flex items-center gap-2 text-xs font-mono">
                <div className="px-2 py-1 bg-blue-500/20 border border-blue-500/50 rounded text-blue-300">
                  ▲ 28.5%
                </div>
                <span className="text-blue-400/60">EFFICIENCY</span>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-slate-900 border border-purple-500/30 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-purple-400 text-xs font-mono uppercase tracking-wider">NEURAL</span>
                </div>
                <div className="text-purple-400 text-xl">🧠</div>
              </div>
              <div className="text-purple-300/60 text-xs font-mono mb-2">AI_NODES</div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3">
                24.8K
              </div>
              <div className="flex items-center gap-2 text-xs font-mono">
                <div className="px-2 py-1 bg-purple-500/20 border border-purple-500/50 rounded text-purple-300">
                  ▲ 42.1%
                </div>
                <span className="text-purple-400/60">LEARNING</span>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-slate-900 border border-emerald-500/30 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-400 text-xs font-mono uppercase tracking-wider">ENERGY</span>
                </div>
                <div className="text-emerald-400 text-xl">⚡</div>
              </div>
              <div className="text-emerald-300/60 text-xs font-mono mb-2">POWER_OUTPUT</div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-3">
                94.2%
              </div>
              <div className="flex items-center gap-2 text-xs font-mono">
                <div className="px-2 py-1 bg-emerald-500/20 border border-emerald-500/50 rounded text-emerald-300">
                  ▲ 12.8%
                </div>
                <span className="text-emerald-400/60">OPTIMAL</span>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-slate-900 border border-orange-500/30 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                  <span className="text-orange-400 text-xs font-mono uppercase tracking-wider">PLASMA</span>
                </div>
                <div className="text-orange-400 text-xl">🔥</div>
              </div>
              <div className="text-orange-300/60 text-xs font-mono mb-2">CORE_TEMP</div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-3">
                3,284°
              </div>
              <div className="flex items-center gap-2 text-xs font-mono">
                <div className="px-2 py-1 bg-orange-500/20 border border-orange-500/50 rounded text-orange-300">
                  ▲ 5.2%
                </div>
                <span className="text-orange-400/60">STABLE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <div className="relative bg-slate-900 border border-slate-700/50 rounded-2xl p-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

            <div className="relative">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">🛸</div>
                  <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      SYSTEM_ANALYTICS
                    </h3>
                    <p className="text-slate-500 text-sm font-mono">REAL_TIME_MONITORING</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-end">
                    <span className="text-emerald-400 text-xs font-mono">STATUS</span>
                    <span className="text-emerald-400 text-sm font-bold">ONLINE</span>
                  </div>
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative group/card">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl blur"></div>
                  <div className="relative bg-slate-800/50 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-cyan-400/60 text-xs font-mono mb-2 tracking-wider">DATA_STREAM</div>
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">
                      2.84 PB
                    </div>
                    <div className="text-cyan-400/60 text-xs font-mono">TRANSFERRED</div>
                    <div className="mt-3 h-1 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="relative group/card">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur"></div>
                  <div className="relative bg-slate-800/50 border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-purple-400/60 text-xs font-mono mb-2 tracking-wider">LATENCY</div>
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                      0.8ms
                    </div>
                    <div className="text-purple-400/60 text-xs font-mono">RESPONSE_TIME</div>
                    <div className="mt-3 h-1 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="relative group/card">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl blur"></div>
                  <div className="relative bg-slate-800/50 border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-emerald-400/60 text-xs font-mono mb-2 tracking-wider">UPTIME</div>
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-2">
                      99.99%
                    </div>
                    <div className="text-emerald-400/60 text-xs font-mono">RELIABILITY</div>
                    <div className="mt-3 h-1 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}