export default function NeonDashboard() {
  const stats = [
    { label: 'Total Revenue', value: '$45,231', change: '+12.5%', color: 'text-pink-500 shadow-pink-500/50' },
    { label: 'Active Users', value: '2,345', change: '+8.2%', color: 'text-cyan-400 shadow-cyan-400/50' },
    { label: 'Orders', value: '1,234', change: '+23.1%', color: 'text-green-400 shadow-green-400/50' },
    { label: 'Conversion', value: '3.2%', change: '-2.4%', color: 'text-yellow-400 shadow-yellow-400/50' },
  ];

  const activities = [
    { text: 'New order #1234', time: '2 min ago' },
    { text: 'User signup: john@example.com', time: '5 min ago' },
    { text: 'Payment received: $299', time: '12 min ago' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-950">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 border-r border-pink-500/30 p-6">
        <h1 className="text-2xl font-bold text-pink-500 mb-8 drop-shadow-[0_0_10px_rgba(236,72,153,0.7)]">
          NeonBoard
        </h1>
        <nav className="space-y-2">
          <a
            href="#"
            className="block px-4 py-3 text-pink-400 bg-pink-500/10 rounded-lg border border-pink-500/50 font-medium shadow-[0_0_10px_rgba(236,72,153,0.3),inset_0_0_10px_rgba(236,72,153,0.1)]"
          >
            Overview
          </a>
          <a
            href="#"
            className="block px-4 py-3 text-gray-400 hover:text-cyan-400 rounded-lg border border-transparent hover:border-cyan-500/30 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all"
          >
            Analytics
          </a>
          <a
            href="#"
            className="block px-4 py-3 text-gray-400 hover:text-green-400 rounded-lg border border-transparent hover:border-green-500/30 hover:shadow-[0_0_10px_rgba(34,197,94,0.2)] transition-all"
          >
            Reports
          </a>
          <a
            href="#"
            className="block px-4 py-3 text-gray-400 hover:text-yellow-400 rounded-lg border border-transparent hover:border-yellow-500/30 hover:shadow-[0_0_10px_rgba(250,204,21,0.2)] transition-all"
          >
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const borderColors = ['border-pink-500/50', 'border-cyan-500/50', 'border-green-500/50', 'border-yellow-500/50'];
            const glowColors = ['shadow-pink-500/20', 'shadow-cyan-500/20', 'shadow-green-500/20', 'shadow-yellow-500/20'];
            return (
              <div
                key={index}
                className={`bg-gray-900 rounded-xl p-6 border ${borderColors[index]} shadow-[0_0_20px] ${glowColors[index]}`}
              >
                <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                <p className={`text-3xl font-bold mb-1 drop-shadow-[0_0_10px] ${stat.color}`}>
                  {stat.value}
                </p>
                <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.change}
                </p>
              </div>
            );
          })}
        </div>

        {/* Chart */}
        <div className="bg-gray-900 rounded-xl p-6 border border-cyan-500/30 shadow-[0_0_20px_rgba(34,211,238,0.15)] mb-8">
          <h3 className="text-lg font-semibold text-cyan-400 mb-6 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">
            Revenue Over Time
          </h3>
          <div className="h-64 flex items-end gap-2">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, index) => {
              const colors = [
                'bg-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.7)]',
                'bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.7)]',
                'bg-green-400 shadow-[0_0_15px_rgba(34,197,94,0.7)]',
                'bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.7)]',
              ];
              return (
                <div
                  key={index}
                  className={`flex-1 ${colors[index % 4]} rounded-t-lg`}
                  style={{ height: `${height}%` }}
                />
              );
            })}
          </div>
          <div className="flex justify-between mt-4 text-xs text-gray-500">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gray-900 rounded-xl p-6 border border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.15)]">
          <h3 className="text-lg font-semibold text-green-400 mb-6 drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {activities.map((activity, index) => {
              const dotColors = ['bg-pink-500', 'bg-cyan-400', 'bg-yellow-400'];
              const glows = ['shadow-pink-500/50', 'shadow-cyan-400/50', 'shadow-yellow-400/50'];
              return (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-gray-800 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 ${dotColors[index]} rounded-full shadow-[0_0_8px] ${glows[index]}`} />
                    <span className="text-gray-300">{activity.text}</span>
                  </div>
                  <span className="text-sm text-gray-600">{activity.time}</span>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
