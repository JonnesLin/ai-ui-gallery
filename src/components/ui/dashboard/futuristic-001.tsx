export default function FuturisticDashboard() {
  const stats = [
    { label: 'Total Revenue', value: '$45,231', change: '+12.5%' },
    { label: 'Active Users', value: '2,345', change: '+8.2%' },
    { label: 'Orders', value: '1,234', change: '+23.1%' },
    { label: 'Conversion', value: '3.2%', change: '-2.4%' },
  ];

  const activities = [
    { text: 'New order #1234', time: '2 min ago' },
    { text: 'User signup: john@example.com', time: '5 min ago' },
    { text: 'Payment received: $299', time: '12 min ago' },
  ];

  return (
    <div className="flex min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      {/* Sidebar */}
      <aside className="relative z-10 w-72 bg-slate-900/50 backdrop-blur-xl border-r border-blue-500/20 p-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">N</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-white">NovaTech</h1>
            <p className="text-xs text-blue-400">v3.0.1</p>
          </div>
        </div>
        <nav className="space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30 font-medium">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            Overview
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-xl transition-all">
            <div className="w-2 h-2 bg-slate-600 rounded-full" />
            Analytics
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-xl transition-all">
            <div className="w-2 h-2 bg-slate-600 rounded-full" />
            Reports
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-xl transition-all">
            <div className="w-2 h-2 bg-slate-600 rounded-full" />
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="relative z-10 flex-1 p-8">
        <h2 className="text-2xl font-semibold text-white mb-6">System Overview</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative bg-slate-900/50 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 overflow-hidden group hover:border-blue-500/40 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="relative text-sm text-slate-400 mb-1">{stat.label}</p>
              <p className="relative text-3xl font-semibold text-white mb-1">{stat.value}</p>
              <p className={`relative text-sm ${stat.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                {stat.change}
              </p>
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="relative bg-slate-900/50 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 mb-8 overflow-hidden">
          <h3 className="text-lg font-semibold text-white mb-6">Revenue Analytics</h3>
          <div className="h-64 flex items-end gap-2">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, index) => (
              <div
                key={index}
                className="flex-1 bg-gradient-to-t from-blue-600 via-blue-500 to-purple-500 rounded-t-lg opacity-60 hover:opacity-100 transition-all relative overflow-hidden"
                style={{ height: `${height}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20" />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs text-slate-500">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="relative bg-slate-900/50 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 overflow-hidden">
          <h3 className="text-lg font-semibold text-white mb-6">Activity Stream</h3>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-3 border-b border-slate-800 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  </div>
                  <span className="text-slate-300">{activity.text}</span>
                </div>
                <span className="text-sm text-slate-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
