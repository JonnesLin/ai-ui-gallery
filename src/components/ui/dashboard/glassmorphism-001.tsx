export default function GlassmorphismDashboard() {
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
    <div className="flex min-h-screen bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-800 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Sidebar */}
      <aside className="relative z-10 w-64 backdrop-blur-xl bg-white/10 border-r border-white/20 p-6">
        <h1 className="text-xl font-bold text-white mb-8">Dashboard</h1>
        <nav className="space-y-2">
          <a href="#" className="block px-4 py-3 text-white bg-white/20 backdrop-blur-sm rounded-xl border border-white/10">Overview</a>
          <a href="#" className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all">Analytics</a>
          <a href="#" className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all">Reports</a>
          <a href="#" className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="relative z-10 flex-1 p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg"
            >
              <p className="text-sm text-white/60 mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-300' : 'text-red-300'}`}>
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg mb-8">
          <h3 className="text-lg font-semibold text-white mb-6">Revenue Over Time</h3>
          <div className="h-64 flex items-end gap-2">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, index) => (
              <div
                key={index}
                className="flex-1 bg-gradient-to-t from-pink-400 to-yellow-300 rounded-t-lg opacity-80 hover:opacity-100 transition-opacity"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs text-white/50">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-white mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-3 border-b border-white/10 last:border-0"
              >
                <span className="text-white/90">{activity.text}</span>
                <span className="text-sm text-white/50">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
