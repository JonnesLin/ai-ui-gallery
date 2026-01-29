export default function NeumorphismDashboard() {
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
    <div className="flex min-h-screen bg-[#e0e5ec]">
      {/* Sidebar */}
      <aside className="w-64 p-6">
        <div className="rounded-2xl p-6 shadow-[8px_8px_16px_#b8bcc2,-8px_-8px_16px_#ffffff]">
          <h1 className="text-xl font-bold text-gray-700 mb-8">Dashboard</h1>
          <nav className="space-y-3">
            <a
              href="#"
              className="block px-4 py-3 text-gray-700 rounded-xl shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] font-medium"
            >
              Overview
            </a>
            <a
              href="#"
              className="block px-4 py-3 text-gray-500 rounded-xl hover:shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] transition-shadow"
            >
              Analytics
            </a>
            <a
              href="#"
              className="block px-4 py-3 text-gray-500 rounded-xl hover:shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] transition-shadow"
            >
              Reports
            </a>
            <a
              href="#"
              className="block px-4 py-3 text-gray-500 rounded-xl hover:shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] transition-shadow"
            >
              Settings
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Overview</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 shadow-[8px_8px_16px_#b8bcc2,-8px_-8px_16px_#ffffff]"
            >
              <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-700 mb-1">{stat.value}</p>
              <p className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="rounded-2xl p-6 shadow-[8px_8px_16px_#b8bcc2,-8px_-8px_16px_#ffffff] mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-6">Revenue Over Time</h3>
          <div className="h-64 flex items-end gap-3">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t-xl bg-gradient-to-t from-blue-400 to-blue-300 shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff]"
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
        <div className="rounded-2xl p-6 shadow-[8px_8px_16px_#b8bcc2,-8px_-8px_16px_#ffffff]">
          <h3 className="text-lg font-semibold text-gray-700 mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-3 px-4 rounded-xl shadow-[inset_2px_2px_4px_#b8bcc2,inset_-2px_-2px_4px_#ffffff]"
              >
                <span className="text-gray-700">{activity.text}</span>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
