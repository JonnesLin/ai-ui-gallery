export default function RetroDashboard() {
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
    <div className="flex min-h-screen bg-amber-50" style={{ fontFamily: 'Georgia, serif' }}>
      {/* Sidebar */}
      <aside className="w-64 bg-amber-100 border-r-4 border-amber-800 p-6">
        <h1 className="text-2xl font-bold text-amber-900 mb-8 italic">Dashboard</h1>
        <nav className="space-y-2">
          <a href="#" className="block px-4 py-3 text-amber-900 bg-amber-200 rounded border-2 border-amber-800 font-semibold">
            Overview
          </a>
          <a href="#" className="block px-4 py-3 text-amber-700 hover:bg-amber-200 rounded border-2 border-transparent hover:border-amber-800 transition-all">
            Analytics
          </a>
          <a href="#" className="block px-4 py-3 text-amber-700 hover:bg-amber-200 rounded border-2 border-transparent hover:border-amber-800 transition-all">
            Reports
          </a>
          <a href="#" className="block px-4 py-3 text-amber-700 hover:bg-amber-200 rounded border-2 border-transparent hover:border-amber-800 transition-all">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold text-amber-900 mb-6 italic">Overview</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-amber-100 border-4 border-amber-800 rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(146,64,14,0.5)]"
            >
              <p className="text-sm text-amber-700 mb-1 uppercase tracking-wide">{stat.label}</p>
              <p className="text-3xl font-bold text-amber-900 mb-1">{stat.value}</p>
              <p className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-700' : 'text-red-700'}`}>
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-amber-100 border-4 border-amber-800 rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(146,64,14,0.5)] mb-8">
          <h3 className="text-xl font-bold text-amber-900 mb-6 italic">Revenue Over Time</h3>
          <div className="h-64 flex items-end gap-2">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, index) => (
              <div
                key={index}
                className="flex-1 bg-gradient-to-t from-amber-800 to-amber-600 rounded-t border-2 border-amber-900"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs text-amber-700 italic">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-amber-100 border-4 border-amber-800 rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(146,64,14,0.5)]">
          <h3 className="text-xl font-bold text-amber-900 mb-6 italic">Recent Activity</h3>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-3 border-b-2 border-amber-300 last:border-0"
              >
                <span className="text-amber-900">{activity.text}</span>
                <span className="text-sm text-amber-600 italic">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
