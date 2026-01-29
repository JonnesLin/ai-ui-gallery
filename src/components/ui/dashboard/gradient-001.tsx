export default function GradientDashboard() {
  const stats = [
    { label: 'Total Revenue', value: '$45,231', change: '+12.5%', gradient: 'from-rose-500 to-orange-400' },
    { label: 'Active Users', value: '2,345', change: '+8.2%', gradient: 'from-blue-500 to-cyan-400' },
    { label: 'Orders', value: '1,234', change: '+23.1%', gradient: 'from-violet-500 to-purple-400' },
    { label: 'Conversion', value: '3.2%', change: '-2.4%', gradient: 'from-emerald-500 to-teal-400' },
  ];

  const activities = [
    { text: 'New order #1234', time: '2 min ago' },
    { text: 'User signup: john@example.com', time: '5 min ago' },
    { text: 'Payment received: $299', time: '12 min ago' },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white/5 backdrop-blur-sm border-r border-white/10 p-6">
        <h1 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent mb-8">
          Dashboard
        </h1>
        <nav className="space-y-2">
          <a href="#" className="block px-4 py-3 text-white bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-lg font-medium border border-white/10">
            Overview
          </a>
          <a href="#" className="block px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">
            Analytics
          </a>
          <a href="#" className="block px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">
            Reports
          </a>
          <a href="#" className="block px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.gradient} opacity-20 blur-2xl`} />
              <p className="relative text-sm text-gray-400 mb-1">{stat.label}</p>
              <p className={`relative text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                {stat.value}
              </p>
              <p className={`relative text-sm ${stat.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-white mb-6">Revenue Over Time</h3>
          <div className="h-64 flex items-end gap-2">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, index) => (
              <div
                key={index}
                className="flex-1 bg-gradient-to-t from-pink-500 via-purple-500 to-cyan-400 rounded-t-lg opacity-70 hover:opacity-100 transition-opacity"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs text-gray-500">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-3 border-b border-white/10 last:border-0"
              >
                <span className="text-gray-300">{activity.text}</span>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
