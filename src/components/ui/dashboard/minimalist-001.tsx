export default function MinimalistDashboard() {
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
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-neutral-100 p-8">
        <h1 className="text-lg font-light tracking-tight text-neutral-900 mb-12">Dashboard</h1>
        <nav className="space-y-1">
          <a href="#" className="block px-4 py-2 text-sm text-neutral-900 bg-neutral-50 rounded">Overview</a>
          <a href="#" className="block px-4 py-2 text-sm text-neutral-400 hover:text-neutral-900 transition-colors">Analytics</a>
          <a href="#" className="block px-4 py-2 text-sm text-neutral-400 hover:text-neutral-900 transition-colors">Reports</a>
          <a href="#" className="block px-4 py-2 text-sm text-neutral-400 hover:text-neutral-900 transition-colors">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12">
        <h2 className="text-2xl font-light tracking-tight text-neutral-900 mb-8">Overview</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 border border-neutral-100 rounded">
              <p className="text-xs text-neutral-400 uppercase tracking-wide mb-2">{stat.label}</p>
              <p className="text-3xl font-light text-neutral-900 mb-1">{stat.value}</p>
              <p className={`text-xs ${stat.change.startsWith('+') ? 'text-neutral-600' : 'text-neutral-400'}`}>
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="border border-neutral-100 rounded p-8 mb-12">
          <h3 className="text-sm font-medium text-neutral-900 mb-6">Revenue Over Time</h3>
          <div className="h-48 flex items-end gap-3">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, index) => (
              <div
                key={index}
                className="flex-1 bg-neutral-900 rounded-sm transition-all hover:bg-neutral-700"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs text-neutral-400">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="border border-neutral-100 rounded p-8">
          <h3 className="text-sm font-medium text-neutral-900 mb-6">Recent Activity</h3>
          <div className="divide-y divide-neutral-50">
            {activities.map((activity, index) => (
              <div key={index} className="py-4 flex justify-between items-center">
                <span className="text-sm text-neutral-700">{activity.text}</span>
                <span className="text-xs text-neutral-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
