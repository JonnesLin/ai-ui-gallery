export default function GradientStatistic() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-orange-400 to-rose-500 rounded-2xl p-6 text-white shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl">🔥</div>
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                HOT
              </div>
            </div>
            <div className="text-sm opacity-90 mb-2">Total Sales</div>
            <div className="text-4xl font-bold mb-3">$284K</div>
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded">↑ 24.8%</span>
              <span className="opacity-80">from last month</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl p-6 text-white shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl">💫</div>
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                LIVE
              </div>
            </div>
            <div className="text-sm opacity-90 mb-2">Active Now</div>
            <div className="text-4xl font-bold mb-3">1,429</div>
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded">↑ 12.3%</span>
              <span className="opacity-80">from last hour</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-violet-400 to-purple-600 rounded-2xl p-6 text-white shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl">🎯</div>
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                TARGET
              </div>
            </div>
            <div className="text-sm opacity-90 mb-2">Goal Progress</div>
            <div className="text-4xl font-bold mb-3">87%</div>
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded">↑ 15.2%</span>
              <span className="opacity-80">this quarter</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl p-6 text-white shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl">⭐</div>
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                TOP
              </div>
            </div>
            <div className="text-sm opacity-90 mb-2">Rating Score</div>
            <div className="text-4xl font-bold mb-3">4.95</div>
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded">↑ 0.15</span>
              <span className="opacity-80">from reviews</span>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white shadow-2xl">
          <h3 className="text-2xl font-bold mb-8">Weekly Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-block p-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <div className="text-4xl font-bold mb-2">42.8K</div>
              <div className="text-sm opacity-80">New Users</div>
              <div className="mt-2 text-green-400 text-sm">+28.5%</div>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <div className="text-4xl font-bold mb-2">$892K</div>
              <div className="text-sm opacity-80">Revenue</div>
              <div className="mt-2 text-green-400 text-sm">+34.2%</div>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 mb-4">
                <span className="text-3xl">📈</span>
              </div>
              <div className="text-4xl font-bold mb-2">156%</div>
              <div className="text-sm opacity-80">Growth Rate</div>
              <div className="mt-2 text-green-400 text-sm">+18.9%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}