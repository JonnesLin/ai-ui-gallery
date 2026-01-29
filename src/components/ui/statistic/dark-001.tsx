export default function DarkStatistic() {
  return (
    <div className="w-full min-h-screen bg-gray-950 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <span className="text-xl">💎</span>
              </div>
              <div className="px-2 py-1 rounded-md bg-green-500/10 text-green-400 text-xs font-medium">
                +12.5%
              </div>
            </div>
            <div className="text-gray-400 text-sm mb-2">Total Revenue</div>
            <div className="text-3xl font-bold text-white mb-1">$124,592</div>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <span>↑</span>
              <span>vs last period</span>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <span className="text-xl">👥</span>
              </div>
              <div className="px-2 py-1 rounded-md bg-green-500/10 text-green-400 text-xs font-medium">
                +8.3%
              </div>
            </div>
            <div className="text-gray-400 text-sm mb-2">Active Users</div>
            <div className="text-3xl font-bold text-white mb-1">18,429</div>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <span>↑</span>
              <span>vs last period</span>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <span className="text-xl">📦</span>
              </div>
              <div className="px-2 py-1 rounded-md bg-red-500/10 text-red-400 text-xs font-medium">
                -2.4%
              </div>
            </div>
            <div className="text-gray-400 text-sm mb-2">Orders</div>
            <div className="text-3xl font-bold text-white mb-1">3,254</div>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <span>↓</span>
              <span>vs last period</span>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                <span className="text-xl">⚡</span>
              </div>
              <div className="px-2 py-1 rounded-md bg-green-500/10 text-green-400 text-xs font-medium">
                +18.7%
              </div>
            </div>
            <div className="text-gray-400 text-sm mb-2">Conversion</div>
            <div className="text-3xl font-bold text-white mb-1">5.42%</div>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <span>↑</span>
              <span>vs last period</span>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-6">Performance Metrics</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Page Views</span>
                <span className="text-white font-bold">245,892</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Session Duration</span>
                <span className="text-white font-bold">4m 32s</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Bounce Rate</span>
                <span className="text-white font-bold">34.2%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-6">Revenue Breakdown</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Direct Sales</span>
                <span className="text-white font-bold">$87,429</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Subscriptions</span>
                <span className="text-white font-bold">$24,893</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Referrals</span>
                <span className="text-white font-bold">$12,270</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}