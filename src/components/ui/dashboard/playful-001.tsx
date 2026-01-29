export default function PlayfulDashboard() {
  const stats = [
    { label: 'Total Revenue', value: '$45,231', change: '+12.5%', emoji: '💰', bg: 'bg-yellow-400' },
    { label: 'Active Users', value: '2,345', change: '+8.2%', emoji: '👥', bg: 'bg-blue-400' },
    { label: 'Orders', value: '1,234', change: '+23.1%', emoji: '📦', bg: 'bg-green-400' },
    { label: 'Conversion', value: '3.2%', change: '-2.4%', emoji: '📊', bg: 'bg-pink-400' },
  ];

  const activities = [
    { text: 'New order #1234', time: '2 min ago', emoji: '🎉' },
    { text: 'User signup: john@example.com', time: '5 min ago', emoji: '👋' },
    { text: 'Payment received: $299', time: '12 min ago', emoji: '💸' },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white rounded-r-3xl shadow-xl p-6">
        <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 mb-8">
          Dashboard ✨
        </h1>
        <nav className="space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-white bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl font-bold shadow-lg">
            <span>🏠</span> Overview
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-2xl font-semibold transition-colors">
            <span>📈</span> Analytics
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-2xl font-semibold transition-colors">
            <span>📄</span> Reports
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-2xl font-semibold transition-colors">
            <span>⚙️</span> Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-black text-gray-800 mb-6">Hey there! 👋</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bg} rounded-3xl p-6 shadow-lg transform hover:scale-105 hover:rotate-1 transition-all`}
            >
              <div className="text-4xl mb-2">{stat.emoji}</div>
              <p className="text-sm text-white/80 font-medium mb-1">{stat.label}</p>
              <p className="text-3xl font-black text-white mb-1">{stat.value}</p>
              <p className={`text-sm font-bold ${stat.change.startsWith('+') ? 'text-white' : 'text-red-100'}`}>
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-white rounded-3xl p-6 shadow-lg mb-8">
          <h3 className="text-xl font-black text-gray-800 mb-6">Revenue Chart 📊</h3>
          <div className="h-64 flex items-end gap-3">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, index) => {
              const colors = [
                'bg-gradient-to-t from-yellow-400 to-orange-400',
                'bg-gradient-to-t from-pink-400 to-rose-400',
                'bg-gradient-to-t from-blue-400 to-cyan-400',
                'bg-gradient-to-t from-green-400 to-emerald-400',
              ];
              return (
                <div
                  key={index}
                  className={`flex-1 ${colors[index % 4]} rounded-t-2xl transform hover:scale-y-110 origin-bottom transition-transform`}
                  style={{ height: `${height}%` }}
                />
              );
            })}
          </div>
          <div className="flex justify-between mt-4 text-sm font-bold text-gray-400">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h3 className="text-xl font-black text-gray-800 mb-6">What&apos;s New 🔔</h3>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center gap-4 py-4 px-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
              >
                <span className="text-2xl">{activity.emoji}</span>
                <span className="flex-1 font-semibold text-gray-700">{activity.text}</span>
                <span className="text-sm font-medium text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
