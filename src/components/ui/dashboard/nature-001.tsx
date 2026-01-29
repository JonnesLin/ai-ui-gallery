export default function NatureDashboard() {
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
    <div className="flex min-h-screen bg-gradient-to-b from-emerald-50 to-teal-100">
      {/* Decorative leaves */}
      <div className="fixed top-0 right-0 w-96 h-96 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full text-emerald-600 fill-current">
          <path d="M100 0C60 40 30 80 30 120C30 160 60 200 100 200C140 200 170 160 170 120C170 80 140 40 100 0Z" />
        </svg>
      </div>

      {/* Sidebar */}
      <aside className="w-64 bg-white/60 backdrop-blur-sm border-r border-emerald-200 p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h1 className="text-xl font-semibold text-emerald-800">EcoDash</h1>
        </div>
        <nav className="space-y-2">
          <a href="#" className="block px-4 py-3 text-emerald-800 bg-emerald-100 rounded-xl font-medium">
            Overview
          </a>
          <a href="#" className="block px-4 py-3 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors">
            Analytics
          </a>
          <a href="#" className="block px-4 py-3 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors">
            Reports
          </a>
          <a href="#" className="block px-4 py-3 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-semibold text-emerald-800 mb-6">Overview</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200 shadow-sm"
            >
              <p className="text-sm text-emerald-600 mb-1">{stat.label}</p>
              <p className="text-3xl font-semibold text-emerald-900 mb-1">{stat.value}</p>
              <p className={`text-sm ${stat.change.startsWith('+') ? 'text-teal-600' : 'text-rose-500'}`}>
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200 shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-emerald-800 mb-6">Revenue Over Time</h3>
          <div className="h-64 flex items-end gap-2">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, index) => (
              <div
                key={index}
                className="flex-1 bg-gradient-to-t from-emerald-600 to-teal-400 rounded-t-lg opacity-80 hover:opacity-100 transition-opacity"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs text-emerald-500">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200 shadow-sm">
          <h3 className="text-lg font-semibold text-emerald-800 mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-3 border-b border-emerald-100 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  <span className="text-emerald-800">{activity.text}</span>
                </div>
                <span className="text-sm text-emerald-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
