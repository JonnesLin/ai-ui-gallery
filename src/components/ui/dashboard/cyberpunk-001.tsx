export default function CyberpunkDashboard() {
  const stats = [
    { label: 'TOTAL.REVENUE', value: '$45,231', change: '+12.5%' },
    { label: 'ACTIVE.USERS', value: '2,345', change: '+8.2%' },
    { label: 'ORDERS', value: '1,234', change: '+23.1%' },
    { label: 'CONVERSION', value: '3.2%', change: '-2.4%' },
  ];

  const activities = [
    { text: 'New order #1234', time: '2 min ago' },
    { text: 'User signup: john@example.com', time: '5 min ago' },
    { text: 'Payment received: $299', time: '12 min ago' },
  ];

  return (
    <div className="flex min-h-screen bg-black relative overflow-hidden">
      {/* Scanlines effect */}
      <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,255,0.03)_2px,rgba(0,255,255,0.03)_4px)]" />

      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Sidebar */}
      <aside className="relative z-10 w-64 bg-black/80 border-r border-cyan-500/50 p-6">
        <h1 className="text-xl font-mono font-bold text-cyan-400 mb-8 tracking-wider glitch-text">
          <span className="text-pink-500">&gt;</span>DASHBOARD_
        </h1>
        <nav className="space-y-2 font-mono text-sm">
          <a href="#" className="block px-4 py-3 text-cyan-400 bg-cyan-500/20 border border-cyan-500 rounded">
            [01] OVERVIEW
          </a>
          <a href="#" className="block px-4 py-3 text-cyan-600 hover:text-cyan-400 border border-transparent hover:border-cyan-500/50 rounded transition-all">
            [02] ANALYTICS
          </a>
          <a href="#" className="block px-4 py-3 text-cyan-600 hover:text-cyan-400 border border-transparent hover:border-cyan-500/50 rounded transition-all">
            [03] REPORTS
          </a>
          <a href="#" className="block px-4 py-3 text-cyan-600 hover:text-cyan-400 border border-transparent hover:border-cyan-500/50 rounded transition-all">
            [04] SETTINGS
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="relative z-10 flex-1 p-8">
        <h2 className="text-2xl font-mono font-bold text-cyan-400 mb-6 tracking-wider">
          <span className="text-pink-500">{"///"}</span> SYSTEM.OVERVIEW
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative bg-black/50 border border-cyan-500/50 p-6 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500" />
              <p className="font-mono text-xs text-cyan-600 mb-2 tracking-wider">{stat.label}</p>
              <p className="font-mono text-3xl font-bold text-cyan-400 mb-1">{stat.value}</p>
              <p className={`font-mono text-sm ${stat.change.startsWith('+') ? 'text-green-400' : 'text-pink-500'}`}>
                {stat.change.startsWith('+') ? '++' : '--'}{stat.change}
              </p>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cyan-500/30" />
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="relative bg-black/50 border border-cyan-500/50 p-6 mb-8 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-cyan-500 to-pink-500" />
          <h3 className="font-mono text-lg text-cyan-400 mb-6 tracking-wider">REVENUE.DATA_STREAM</h3>
          <div className="h-64 flex items-end gap-1">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, index) => (
              <div
                key={index}
                className="flex-1 bg-gradient-to-t from-pink-600 via-cyan-500 to-cyan-400 opacity-80 hover:opacity-100 transition-opacity relative"
                style={{ height: `${height}%` }}
              >
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_4px,rgba(0,0,0,0.3)_4px,rgba(0,0,0,0.3)_8px)]" />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 font-mono text-xs text-cyan-600">
            {['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'].map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="relative bg-black/50 border border-cyan-500/50 p-6 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500" />
          <h3 className="font-mono text-lg text-cyan-400 mb-6 tracking-wider">ACTIVITY.LOG</h3>
          <div className="space-y-2 font-mono text-sm">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-3 border-b border-cyan-500/20 last:border-0"
              >
                <span className="text-cyan-300">
                  <span className="text-pink-500">&gt;</span> {activity.text}
                </span>
                <span className="text-cyan-600 text-xs">[{activity.time}]</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
