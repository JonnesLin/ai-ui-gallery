export default function PastelDashboard() {
  const stats = [
    { label: 'Total Revenue', value: '$45,231', change: '+12.5%', bg: 'bg-pink-100', accent: 'bg-pink-300' },
    { label: 'Active Users', value: '2,345', change: '+8.2%', bg: 'bg-blue-100', accent: 'bg-blue-300' },
    { label: 'Orders', value: '1,234', change: '+23.1%', bg: 'bg-purple-100', accent: 'bg-purple-300' },
    { label: 'Conversion', value: '3.2%', change: '-2.4%', bg: 'bg-mint-100', accent: 'bg-emerald-200' },
  ];

  const activities = [
    { text: 'New order #1234', time: '2 min ago' },
    { text: 'User signup: john@example.com', time: '5 min ago' },
    { text: 'Payment received: $299', time: '12 min ago' },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white/60 backdrop-blur-sm border-r border-pink-100 p-6">
        <h1 className="text-xl font-semibold text-purple-400 mb-8">Dashboard</h1>
        <nav className="space-y-2">
          <a href="#" className="block px-4 py-3 text-purple-600 bg-purple-100 rounded-2xl font-medium">
            Overview
          </a>
          <a href="#" className="block px-4 py-3 text-purple-400 hover:bg-purple-50 rounded-2xl transition-colors">
            Analytics
          </a>
          <a href="#" className="block px-4 py-3 text-purple-400 hover:bg-purple-50 rounded-2xl transition-colors">
            Reports
          </a>
          <a href="#" className="block px-4 py-3 text-purple-400 hover:bg-purple-50 rounded-2xl transition-colors">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-semibold text-purple-500 mb-6">Overview</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bg} rounded-3xl p-6 shadow-sm`}
            >
              <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-700 mb-2">{stat.value}</p>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${stat.accent}`} />
                <p className={`text-sm ${stat.change.startsWith('+') ? 'text-emerald-500' : 'text-pink-500'}`}>
                  {stat.change}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-purple-500 mb-6">Revenue Over Time</h3>
          <div className="h-64 flex items-end gap-3">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, index) => {
              const colors = ['bg-pink-200', 'bg-blue-200', 'bg-purple-200', 'bg-emerald-200'];
              return (
                <div
                  key={index}
                  className={`flex-1 ${colors[index % 4]} rounded-t-2xl hover:opacity-80 transition-opacity`}
                  style={{ height: `${height}%` }}
                />
              );
            })}
          </div>
          <div className="flex justify-between mt-4 text-xs text-purple-300">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-purple-500 mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {activities.map((activity, index) => {
              const dots = ['bg-pink-300', 'bg-blue-300', 'bg-purple-300'];
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 py-3 border-b border-purple-50 last:border-0"
                >
                  <span className={`w-3 h-3 rounded-full ${dots[index % 3]}`} />
                  <span className="flex-1 text-gray-600">{activity.text}</span>
                  <span className="text-sm text-purple-300">{activity.time}</span>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
