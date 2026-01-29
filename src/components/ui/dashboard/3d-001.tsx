export default function ThreeDDashboard() {
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
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100" style={{ perspective: '1000px' }}>
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 shadow-xl transform-gpu hover:translate-x-1 transition-transform" style={{ transformStyle: 'preserve-3d' }}>
        <h1 className="text-xl font-bold text-gray-800 mb-8">Dashboard</h1>
        <nav className="space-y-2">
          <a
            href="#"
            className="block px-4 py-3 text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl font-medium shadow-lg shadow-indigo-500/30 transform-gpu hover:translate-y-[-2px] hover:shadow-xl hover:shadow-indigo-500/40 transition-all"
          >
            Overview
          </a>
          <a
            href="#"
            className="block px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl transform-gpu hover:translate-x-1 transition-all"
          >
            Analytics
          </a>
          <a
            href="#"
            className="block px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl transform-gpu hover:translate-x-1 transition-all"
          >
            Reports
          </a>
          <a
            href="#"
            className="block px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl transform-gpu hover:translate-x-1 transition-all"
          >
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Overview</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const gradients = [
              'from-rose-400 to-pink-500',
              'from-blue-400 to-indigo-500',
              'from-emerald-400 to-teal-500',
              'from-amber-400 to-orange-500',
            ];
            const shadows = [
              'shadow-rose-500/30',
              'shadow-blue-500/30',
              'shadow-emerald-500/30',
              'shadow-amber-500/30',
            ];
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${gradients[index]} rounded-2xl p-6 shadow-xl ${shadows[index]} transform-gpu hover:translate-y-[-4px] hover:shadow-2xl transition-all`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <p className="text-sm text-white/80 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-white mb-1 drop-shadow-sm">{stat.value}</p>
                <p className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-white' : 'text-white/70'}`}>
                  {stat.change}
                </p>
              </div>
            );
          })}
        </div>

        {/* Chart */}
        <div
          className="bg-white rounded-2xl p-6 shadow-xl shadow-gray-200/50 mb-8 transform-gpu hover:translate-y-[-2px] transition-all"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Revenue Over Time</h3>
          <div className="h-64 flex items-end gap-3" style={{ perspective: '500px' }}>
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, index) => {
              const gradients = [
                'from-rose-400 to-pink-500',
                'from-blue-400 to-indigo-500',
                'from-emerald-400 to-teal-500',
                'from-amber-400 to-orange-500',
              ];
              return (
                <div
                  key={index}
                  className={`flex-1 bg-gradient-to-t ${gradients[index % 4]} rounded-t-xl shadow-lg transform-gpu hover:scale-y-105 origin-bottom transition-transform relative`}
                  style={{ height: `${height}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 rounded-t-xl" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 20%, 0 40%)' }} />
                </div>
              );
            })}
          </div>
          <div className="flex justify-between mt-4 text-xs text-gray-400">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div
          className="bg-white rounded-2xl p-6 shadow-xl shadow-gray-200/50 transform-gpu hover:translate-y-[-2px] transition-all"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Recent Activity</h3>
          <div className="space-y-3">
            {activities.map((activity, index) => {
              const colors = ['bg-rose-500', 'bg-blue-500', 'bg-emerald-500'];
              return (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-xl transform-gpu hover:translate-x-2 hover:bg-gray-100 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 ${colors[index]} rounded-full shadow-lg`} />
                    <span className="text-gray-700">{activity.text}</span>
                  </div>
                  <span className="text-sm text-gray-400">{activity.time}</span>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
