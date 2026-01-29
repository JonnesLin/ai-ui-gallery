export default function MonochromeDashboard() {
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
    <div className="flex min-h-screen bg-zinc-100">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-900 p-6">
        <h1 className="text-xl font-bold text-white mb-8 tracking-tight">Dashboard</h1>
        <nav className="space-y-1">
          <a href="#" className="block px-4 py-3 text-white bg-zinc-800 rounded-lg font-medium">
            Overview
          </a>
          <a href="#" className="block px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors">
            Analytics
          </a>
          <a href="#" className="block px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors">
            Reports
          </a>
          <a href="#" className="block px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold text-zinc-900 mb-6">Overview</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm"
            >
              <p className="text-sm text-zinc-500 mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-zinc-900 mb-1">{stat.value}</p>
              <p className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-zinc-700' : 'text-zinc-400'}`}>
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-zinc-900 mb-6">Revenue Over Time</h3>
          <div className="h-64 flex items-end gap-2">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, index) => (
              <div
                key={index}
                className="flex-1 bg-zinc-900 rounded-t hover:bg-zinc-700 transition-colors"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs text-zinc-400">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-zinc-900 mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-3 border-b border-zinc-100 last:border-0"
              >
                <span className="text-zinc-700">{activity.text}</span>
                <span className="text-sm text-zinc-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
