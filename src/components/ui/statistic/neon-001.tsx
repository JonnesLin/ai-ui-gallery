export default function NeonStatistic() {
  return (
    <div className="w-full min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-pink-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative bg-black border-2 border-pink-500 rounded-lg p-6 shadow-[0_0_30px_rgba(236,72,153,0.5)]">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 border-2 border-pink-500 rounded-lg flex items-center justify-center text-pink-500 text-2xl shadow-[0_0_20px_rgba(236,72,153,0.6)]">
                  💰
                </div>
                <div className="px-3 py-1 border border-pink-500 rounded text-pink-500 text-xs font-bold shadow-[0_0_10px_rgba(236,72,153,0.6)]">
                  ↑ 12.5%
                </div>
              </div>
              <div className="text-pink-500/70 text-xs uppercase tracking-widest mb-2 font-bold">Revenue</div>
              <div className="text-4xl font-bold text-pink-500 mb-3 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">$124,592</div>
              <div className="h-2 bg-black border border-pink-500 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.8)]"></div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-cyan-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative bg-black border-2 border-cyan-500 rounded-lg p-6 shadow-[0_0_30px_rgba(6,182,212,0.5)]">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 border-2 border-cyan-500 rounded-lg flex items-center justify-center text-cyan-500 text-2xl shadow-[0_0_20px_rgba(6,182,212,0.6)]">
                  👥
                </div>
                <div className="px-3 py-1 border border-cyan-500 rounded text-cyan-500 text-xs font-bold shadow-[0_0_10px_rgba(6,182,212,0.6)]">
                  ↑ 8.3%
                </div>
              </div>
              <div className="text-cyan-500/70 text-xs uppercase tracking-widest mb-2 font-bold">Active Users</div>
              <div className="text-4xl font-bold text-cyan-500 mb-3 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">24,847</div>
              <div className="h-2 bg-black border border-cyan-500 rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]"></div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-purple-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative bg-black border-2 border-purple-500 rounded-lg p-6 shadow-[0_0_30px_rgba(168,85,247,0.5)]">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 border-2 border-purple-500 rounded-lg flex items-center justify-center text-purple-500 text-2xl shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                  📦
                </div>
                <div className="px-3 py-1 border border-purple-500 rounded text-purple-500 text-xs font-bold shadow-[0_0_10px_rgba(168,85,247,0.6)]">
                  ↓ 2.4%
                </div>
              </div>
              <div className="text-purple-500/70 text-xs uppercase tracking-widest mb-2 font-bold">Orders</div>
              <div className="text-4xl font-bold text-purple-500 mb-3 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">8,429</div>
              <div className="h-2 bg-black border border-purple-500 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-lime-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative bg-black border-2 border-lime-500 rounded-lg p-6 shadow-[0_0_30px_rgba(132,204,22,0.5)]">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 border-2 border-lime-500 rounded-lg flex items-center justify-center text-lime-500 text-2xl shadow-[0_0_20px_rgba(132,204,22,0.6)]">
                  ⚡
                </div>
                <div className="px-3 py-1 border border-lime-500 rounded text-lime-500 text-xs font-bold shadow-[0_0_10px_rgba(132,204,22,0.6)]">
                  ↑ 15.7%
                </div>
              </div>
              <div className="text-lime-500/70 text-xs uppercase tracking-widest mb-2 font-bold">Conversion</div>
              <div className="text-4xl font-bold text-lime-500 mb-3 drop-shadow-[0_0_10px_rgba(132,204,22,0.8)]">4.82%</div>
              <div className="h-2 bg-black border border-lime-500 rounded-full overflow-hidden">
                <div className="h-full w-full bg-lime-500 shadow-[0_0_15px_rgba(132,204,22,0.8)]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
          <div className="relative bg-black border-2 border-pink-500 rounded-xl p-8 shadow-[0_0_50px_rgba(236,72,153,0.4)]">
            <div className="flex items-center justify-between mb-8 pb-6 border-b-2 border-pink-500/30">
              <div>
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mb-2 drop-shadow-[0_0_20px_rgba(236,72,153,0.6)]">
                  NEON ANALYTICS
                </h2>
                <p className="text-pink-500/70 text-sm uppercase tracking-widest">Real-time monitoring</p>
              </div>
              <div className="w-4 h-4 bg-pink-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(236,72,153,0.8)]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 border-2 border-cyan-500/30 rounded-lg">
                <div className="text-5xl font-bold text-cyan-500 mb-3 drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]">245,892</div>
                <div className="text-cyan-500/70 text-sm uppercase tracking-wider mb-3">Page Views</div>
                <div className="flex items-center justify-center gap-2">
                  <div className="px-2 py-1 border border-cyan-500 rounded text-cyan-500 text-xs shadow-[0_0_10px_rgba(6,182,212,0.6)]">
                    ↑ 18.2%
                  </div>
                </div>
              </div>

              <div className="text-center p-6 border-2 border-purple-500/30 rounded-lg">
                <div className="text-5xl font-bold text-purple-500 mb-3 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">4m 32s</div>
                <div className="text-purple-500/70 text-sm uppercase tracking-wider mb-3">Session Time</div>
                <div className="flex items-center justify-center gap-2">
                  <div className="px-2 py-1 border border-purple-500 rounded text-purple-500 text-xs shadow-[0_0_10px_rgba(168,85,247,0.6)]">
                    ↑ 12.5%
                  </div>
                </div>
              </div>

              <div className="text-center p-6 border-2 border-lime-500/30 rounded-lg">
                <div className="text-5xl font-bold text-lime-500 mb-3 drop-shadow-[0_0_15px_rgba(132,204,22,0.8)]">32.4%</div>
                <div className="text-lime-500/70 text-sm uppercase tracking-wider mb-3">Bounce Rate</div>
                <div className="flex items-center justify-center gap-2">
                  <div className="px-2 py-1 border border-lime-500 rounded text-lime-500 text-xs shadow-[0_0_10px_rgba(132,204,22,0.6)]">
                    ↓ 5.8%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-pink-500 blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-black border-2 border-pink-500 rounded-lg p-6 shadow-[0_0_30px_rgba(236,72,153,0.3)]">
              <h3 className="text-xl font-bold text-pink-500 mb-6 uppercase tracking-wider drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">
                Revenue Streams
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-pink-500/30">
                  <span className="text-pink-500/80 text-sm uppercase tracking-wide">Direct Sales</span>
                  <span className="text-pink-500 font-bold text-lg drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]">$87,429</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-pink-500/30">
                  <span className="text-pink-500/80 text-sm uppercase tracking-wide">Subscriptions</span>
                  <span className="text-pink-500 font-bold text-lg drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]">$24,893</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-pink-500/30">
                  <span className="text-pink-500/80 text-sm uppercase tracking-wide">Referrals</span>
                  <span className="text-pink-500 font-bold text-lg drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]">$12,270</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-cyan-500 blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-black border-2 border-cyan-500 rounded-lg p-6 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <h3 className="text-xl font-bold text-cyan-500 mb-6 uppercase tracking-wider drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">
                Growth Metrics
              </h3>
              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-500/80 text-sm uppercase">Customer Sat.</span>
                    <span className="text-cyan-500 font-bold">92.8%</span>
                  </div>
                  <div className="h-2 bg-black border border-cyan-500 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]" style={{ width: '92.8%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-500/80 text-sm uppercase">Retention</span>
                    <span className="text-cyan-500 font-bold">87.5%</span>
                  </div>
                  <div className="h-2 bg-black border border-cyan-500 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]" style={{ width: '87.5%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-500/80 text-sm uppercase">Growth</span>
                    <span className="text-cyan-500 font-bold">64.2%</span>
                  </div>
                  <div className="h-2 bg-black border border-cyan-500 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]" style={{ width: '64.2%' }}></div>
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
