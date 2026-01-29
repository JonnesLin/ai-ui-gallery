export default function ThreeDStatistic() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            className="relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-6 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-[0_32px_64px_-12px_rgba(59,130,246,0.5)]"
            style={{
              boxShadow:
                '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2), inset 0 -8px 16px rgba(0, 0, 0, 0.2), inset 0 2px 16px rgba(255, 255, 255, 0.15)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center text-2xl backdrop-blur-sm"
                  style={{
                    boxShadow:
                      '0 8px 16px rgba(0, 0, 0, 0.2), inset 0 2px 8px rgba(255, 255, 255, 0.2)',
                  }}
                >
                  💰
                </div>
                <div
                  className="px-3 py-1.5 rounded-full bg-gradient-to-r from-green-400 to-green-500 text-xs font-bold text-white"
                  style={{
                    boxShadow:
                      '0 4px 8px rgba(0, 0, 0, 0.2), inset 0 1px 4px rgba(255, 255, 255, 0.3)',
                  }}
                >
                  ↑ 12.5%
                </div>
              </div>
              <div className="text-white/80 text-xs uppercase tracking-wider mb-2 font-semibold">
                Total Revenue
              </div>
              <div className="text-4xl font-bold text-white mb-4" style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
                $124,592
              </div>
              <div
                className="h-3 rounded-full bg-black/20 overflow-hidden"
                style={{
                  boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div
                  className="h-full bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full"
                  style={{
                    width: '75%',
                    boxShadow: '0 0 8px rgba(250, 204, 21, 0.6)',
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div
            className="relative bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl p-6 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-[0_32px_64px_-12px_rgba(168,85,247,0.5)]"
            style={{
              boxShadow:
                '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2), inset 0 -8px 16px rgba(0, 0, 0, 0.2), inset 0 2px 16px rgba(255, 255, 255, 0.15)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center text-2xl backdrop-blur-sm"
                  style={{
                    boxShadow:
                      '0 8px 16px rgba(0, 0, 0, 0.2), inset 0 2px 8px rgba(255, 255, 255, 0.2)',
                  }}
                >
                  👥
                </div>
                <div
                  className="px-3 py-1.5 rounded-full bg-gradient-to-r from-green-400 to-green-500 text-xs font-bold text-white"
                  style={{
                    boxShadow:
                      '0 4px 8px rgba(0, 0, 0, 0.2), inset 0 1px 4px rgba(255, 255, 255, 0.3)',
                  }}
                >
                  ↑ 8.3%
                </div>
              </div>
              <div className="text-white/80 text-xs uppercase tracking-wider mb-2 font-semibold">
                Active Users
              </div>
              <div className="text-4xl font-bold text-white mb-4" style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
                24,847
              </div>
              <div
                className="h-3 rounded-full bg-black/20 overflow-hidden"
                style={{
                  boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div
                  className="h-full bg-gradient-to-r from-pink-400 to-pink-300 rounded-full"
                  style={{
                    width: '80%',
                    boxShadow: '0 0 8px rgba(244, 114, 182, 0.6)',
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div
            className="relative bg-gradient-to-br from-orange-500 to-orange-700 rounded-3xl p-6 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-[0_32px_64px_-12px_rgba(249,115,22,0.5)]"
            style={{
              boxShadow:
                '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2), inset 0 -8px 16px rgba(0, 0, 0, 0.2), inset 0 2px 16px rgba(255, 255, 255, 0.15)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center text-2xl backdrop-blur-sm"
                  style={{
                    boxShadow:
                      '0 8px 16px rgba(0, 0, 0, 0.2), inset 0 2px 8px rgba(255, 255, 255, 0.2)',
                  }}
                >
                  📦
                </div>
                <div
                  className="px-3 py-1.5 rounded-full bg-gradient-to-r from-red-400 to-red-500 text-xs font-bold text-white"
                  style={{
                    boxShadow:
                      '0 4px 8px rgba(0, 0, 0, 0.2), inset 0 1px 4px rgba(255, 255, 255, 0.3)',
                  }}
                >
                  ↓ 2.4%
                </div>
              </div>
              <div className="text-white/80 text-xs uppercase tracking-wider mb-2 font-semibold">
                Total Orders
              </div>
              <div className="text-4xl font-bold text-white mb-4" style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
                8,429
              </div>
              <div
                className="h-3 rounded-full bg-black/20 overflow-hidden"
                style={{
                  boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div
                  className="h-full bg-gradient-to-r from-red-400 to-red-300 rounded-full"
                  style={{
                    width: '65%',
                    boxShadow: '0 0 8px rgba(248, 113, 113, 0.6)',
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div
            className="relative bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-3xl p-6 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-[0_32px_64px_-12px_rgba(16,185,129,0.5)]"
            style={{
              boxShadow:
                '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2), inset 0 -8px 16px rgba(0, 0, 0, 0.2), inset 0 2px 16px rgba(255, 255, 255, 0.15)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center text-2xl backdrop-blur-sm"
                  style={{
                    boxShadow:
                      '0 8px 16px rgba(0, 0, 0, 0.2), inset 0 2px 8px rgba(255, 255, 255, 0.2)',
                  }}
                >
                  ⚡
                </div>
                <div
                  className="px-3 py-1.5 rounded-full bg-gradient-to-r from-green-400 to-green-500 text-xs font-bold text-white"
                  style={{
                    boxShadow:
                      '0 4px 8px rgba(0, 0, 0, 0.2), inset 0 1px 4px rgba(255, 255, 255, 0.3)',
                  }}
                >
                  ↑ 15.7%
                </div>
              </div>
              <div className="text-white/80 text-xs uppercase tracking-wider mb-2 font-semibold">
                Conversion
              </div>
              <div className="text-4xl font-bold text-white mb-4" style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
                4.82%
              </div>
              <div
                className="h-3 rounded-full bg-black/20 overflow-hidden"
                style={{
                  boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-full"
                  style={{
                    width: '95%',
                    boxShadow: '0 0 8px rgba(34, 211, 238, 0.6)',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-8 relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 transition-all duration-300 hover:translate-y-[-4px]"
          style={{
            boxShadow:
              '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 12px 24px -8px rgba(0, 0, 0, 0.3), inset 0 -8px 16px rgba(0, 0, 0, 0.2), inset 0 2px 16px rgba(255, 255, 255, 0.05)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
          <div className="relative z-10">
            <div className="border-b border-white/10 pb-6 mb-8">
              <div className="flex items-center gap-4">
                <div
                  className="text-4xl w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center"
                  style={{
                    boxShadow:
                      '0 8px 16px rgba(0, 0, 0, 0.3), inset 0 2px 8px rgba(255, 255, 255, 0.1)',
                  }}
                >
                  📊
                </div>
                <div>
                  <h2
                    className="text-3xl font-bold text-white"
                    style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}
                  >
                    Performance Dashboard
                  </h2>
                  <p className="text-slate-400 text-sm">Real-time analytics and metrics</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent"
                style={{
                  boxShadow:
                    '0 8px 16px rgba(0, 0, 0, 0.2), inset 0 1px 4px rgba(255, 255, 255, 0.05)',
                }}
              >
                <div
                  className="text-5xl font-bold text-white mb-3"
                  style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.4)' }}
                >
                  245,892
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-400 mb-3">Page Views</div>
                <div
                  className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-green-600/20 text-xs font-bold text-green-300 border border-green-500/30"
                  style={{
                    boxShadow:
                      '0 4px 8px rgba(0, 0, 0, 0.2), inset 0 1px 4px rgba(255, 255, 255, 0.1)',
                  }}
                >
                  ↑ 18.2%
                </div>
              </div>

              <div
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent"
                style={{
                  boxShadow:
                    '0 8px 16px rgba(0, 0, 0, 0.2), inset 0 1px 4px rgba(255, 255, 255, 0.05)',
                }}
              >
                <div
                  className="text-5xl font-bold text-white mb-3"
                  style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.4)' }}
                >
                  4m 32s
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-400 mb-3">Session Time</div>
                <div
                  className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-green-600/20 text-xs font-bold text-green-300 border border-green-500/30"
                  style={{
                    boxShadow:
                      '0 4px 8px rgba(0, 0, 0, 0.2), inset 0 1px 4px rgba(255, 255, 255, 0.1)',
                  }}
                >
                  ↑ 12.5%
                </div>
              </div>

              <div
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent"
                style={{
                  boxShadow:
                    '0 8px 16px rgba(0, 0, 0, 0.2), inset 0 1px 4px rgba(255, 255, 255, 0.05)',
                }}
              >
                <div
                  className="text-5xl font-bold text-white mb-3"
                  style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.4)' }}
                >
                  32.4%
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-400 mb-3">Bounce Rate</div>
                <div
                  className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-red-600/20 text-xs font-bold text-red-300 border border-red-500/30"
                  style={{
                    boxShadow:
                      '0 4px 8px rgba(0, 0, 0, 0.2), inset 0 1px 4px rgba(255, 255, 255, 0.1)',
                  }}
                >
                  ↓ 5.8%
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 transition-all duration-300 hover:translate-y-[-4px]"
            style={{
              boxShadow:
                '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2), inset 0 -8px 16px rgba(0, 0, 0, 0.2), inset 0 2px 16px rgba(255, 255, 255, 0.05)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
            <div className="relative z-10">
              <h3
                className="text-xl font-bold text-white mb-6 pb-3 border-b border-white/10"
                style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
              >
                Revenue Breakdown
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="text-slate-300 text-sm font-medium">Direct Sales</span>
                  <span
                    className="text-white font-bold text-lg"
                    style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
                  >
                    $87,429
                  </span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="text-slate-300 text-sm font-medium">Subscriptions</span>
                  <span
                    className="text-white font-bold text-lg"
                    style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
                  >
                    $24,893
                  </span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="text-slate-300 text-sm font-medium">Referrals</span>
                  <span
                    className="text-white font-bold text-lg"
                    style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
                  >
                    $12,270
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 transition-all duration-300 hover:translate-y-[-4px]"
            style={{
              boxShadow:
                '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2), inset 0 -8px 16px rgba(0, 0, 0, 0.2), inset 0 2px 16px rgba(255, 255, 255, 0.05)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
            <div className="relative z-10">
              <h3
                className="text-xl font-bold text-white mb-6 pb-3 border-b border-white/10"
                style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
              >
                Growth Metrics
              </h3>
              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-300 text-sm">Customer Satisfaction</span>
                    <span
                      className="text-white font-bold"
                      style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
                    >
                      92.8%
                    </span>
                  </div>
                  <div
                    className="h-3 rounded-full bg-black/30 overflow-hidden"
                    style={{
                      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
                      style={{
                        width: '92.8%',
                        boxShadow: '0 0 12px rgba(59, 130, 246, 0.6)',
                      }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-300 text-sm">Retention Rate</span>
                    <span
                      className="text-white font-bold"
                      style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
                    >
                      87.5%
                    </span>
                  </div>
                  <div
                    className="h-3 rounded-full bg-black/30 overflow-hidden"
                    style={{
                      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    <div
                      className="h-full bg-gradient-to-r from-purple-400 to-purple-500 rounded-full"
                      style={{
                        width: '87.5%',
                        boxShadow: '0 0 12px rgba(168, 85, 247, 0.6)',
                      }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-300 text-sm">Growth Rate</span>
                    <span
                      className="text-white font-bold"
                      style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
                    >
                      64.2%
                    </span>
                  </div>
                  <div
                    className="h-3 rounded-full bg-black/30 overflow-hidden"
                    style={{
                      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    <div
                      className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"
                      style={{
                        width: '64.2%',
                        boxShadow: '0 0 12px rgba(52, 211, 153, 0.6)',
                      }}
                    ></div>
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
