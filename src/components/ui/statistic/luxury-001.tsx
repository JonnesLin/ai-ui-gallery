export default function LuxuryStatistic() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative bg-gradient-to-br from-amber-900/20 to-yellow-900/20 backdrop-blur-sm border border-amber-500/30 rounded-xl p-6 overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💎</span>
                </div>
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
              </div>
              <div className="text-xs uppercase tracking-widest text-amber-400/70 font-light mb-2">Premium Revenue</div>
              <div className="text-4xl font-light text-amber-200 mb-4">$2.4M</div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-amber-400">▲</span>
                <span className="text-amber-300/80">18.5% Growth</span>
              </div>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">👑</span>
                </div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              </div>
              <div className="text-xs uppercase tracking-widest text-purple-400/70 font-light mb-2">Elite Members</div>
              <div className="text-4xl font-light text-purple-200 mb-4">8,429</div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-purple-400">▲</span>
                <span className="text-purple-300/80">24.2% Increase</span>
              </div>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
              <div className="text-xs uppercase tracking-widest text-blue-400/70 font-light mb-2">Satisfaction Score</div>
              <div className="text-4xl font-light text-blue-200 mb-4">98.4%</div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-blue-400">▲</span>
                <span className="text-blue-300/80">2.8% Higher</span>
              </div>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-emerald-900/20 to-teal-900/20 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-6 overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              </div>
              <div className="text-xs uppercase tracking-widest text-emerald-400/70 font-light mb-2">Luxury Index</div>
              <div className="text-4xl font-light text-emerald-200 mb-4">9.8</div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-emerald-400">▲</span>
                <span className="text-emerald-300/80">0.5 Points</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

          <div className="relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-4xl">🎩</div>
              <div>
                <h3 className="text-2xl font-light text-slate-200 tracking-wide">Exclusive Portfolio</h3>
                <p className="text-slate-400 text-sm font-light">Curated metrics for distinguished clientele</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 border-l border-amber-500/30">
                <div className="text-amber-400/70 text-xs uppercase tracking-widest mb-3 font-light">Annual Value</div>
                <div className="text-5xl font-light text-amber-200 mb-2">$8.4M</div>
                <div className="text-amber-300/60 text-sm">Premium Tier</div>
              </div>

              <div className="text-center p-6 border-l border-purple-500/30">
                <div className="text-purple-400/70 text-xs uppercase tracking-widest mb-3 font-light">Retention Rate</div>
                <div className="text-5xl font-light text-purple-200 mb-2">96.8%</div>
                <div className="text-purple-300/60 text-sm">Best in Class</div>
              </div>

              <div className="text-center p-6 border-l border-blue-500/30">
                <div className="text-blue-400/70 text-xs uppercase tracking-widest mb-3 font-light">Lifetime Value</div>
                <div className="text-5xl font-light text-blue-200 mb-2">$124K</div>
                <div className="text-blue-300/60 text-sm">Per Member</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}