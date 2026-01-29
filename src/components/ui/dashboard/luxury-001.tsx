export default function LuxuryDashboard() {
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
    <div className="flex min-h-screen bg-neutral-950">
      {/* Sidebar */}
      <aside className="w-72 bg-gradient-to-b from-neutral-900 to-neutral-950 border-r border-amber-900/20 p-8">
        <h1 className="text-xl font-light tracking-[0.3em] text-amber-200 mb-12 uppercase">Prestige</h1>
        <nav className="space-y-1">
          <a href="#" className="block px-6 py-4 text-amber-200 bg-amber-900/20 border-l-2 border-amber-500 font-light tracking-wider">
            Overview
          </a>
          <a href="#" className="block px-6 py-4 text-neutral-500 hover:text-amber-200 border-l-2 border-transparent hover:border-amber-900/50 font-light tracking-wider transition-all">
            Analytics
          </a>
          <a href="#" className="block px-6 py-4 text-neutral-500 hover:text-amber-200 border-l-2 border-transparent hover:border-amber-900/50 font-light tracking-wider transition-all">
            Reports
          </a>
          <a href="#" className="block px-6 py-4 text-neutral-500 hover:text-amber-200 border-l-2 border-transparent hover:border-amber-900/50 font-light tracking-wider transition-all">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12">
        <h2 className="text-3xl font-light tracking-wider text-amber-100 mb-10">Overview</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-neutral-900 to-neutral-950 border border-amber-900/30 p-8 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
              <p className="text-xs text-amber-700 uppercase tracking-[0.2em] mb-3">{stat.label}</p>
              <p className="text-4xl font-light text-amber-100 mb-2">{stat.value}</p>
              <p className={`text-sm font-light ${stat.change.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                {stat.change}
              </p>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-amber-500/5 to-transparent" />
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-950 border border-amber-900/30 p-8 mb-12 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
          <h3 className="text-lg font-light tracking-wider text-amber-200 mb-8">Revenue Performance</h3>
          <div className="h-64 flex items-end gap-4">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, index) => (
              <div
                key={index}
                className="flex-1 bg-gradient-to-t from-amber-900/50 to-amber-500/30 border border-amber-700/20 hover:from-amber-800/60 hover:to-amber-400/40 transition-all"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-6 text-xs text-amber-800 tracking-wider">
            {['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'].map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-950 border border-amber-900/30 p-8 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
          <h3 className="text-lg font-light tracking-wider text-amber-200 mb-8">Recent Activity</h3>
          <div className="space-y-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-4 border-b border-amber-900/20 last:border-0"
              >
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-amber-500 rounded-full" />
                  <span className="font-light text-amber-100/80 tracking-wide">{activity.text}</span>
                </div>
                <span className="text-sm text-amber-800">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
