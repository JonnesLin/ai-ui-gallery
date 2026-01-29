export default function BrutalistDashboard() {
  const stats = [
    { label: 'TOTAL REVENUE', value: '$45,231', change: '+12.5%' },
    { label: 'ACTIVE USERS', value: '2,345', change: '+8.2%' },
    { label: 'ORDERS', value: '1,234', change: '+23.1%' },
    { label: 'CONVERSION', value: '3.2%', change: '-2.4%' },
  ];

  const activities = [
    { text: 'New order #1234', time: '2 min ago' },
    { text: 'User signup: john@example.com', time: '5 min ago' },
    { text: 'Payment received: $299', time: '12 min ago' },
  ];

  return (
    <div className="flex min-h-screen bg-yellow-300">
      {/* Sidebar */}
      <aside className="w-64 bg-black p-6">
        <h1 className="text-2xl font-black text-yellow-300 mb-8 uppercase tracking-tight">DASH</h1>
        <nav className="space-y-2">
          <a href="#" className="block px-4 py-3 text-black bg-yellow-300 font-black uppercase border-4 border-black">
            Overview
          </a>
          <a href="#" className="block px-4 py-3 text-yellow-300 font-bold uppercase border-4 border-yellow-300 hover:bg-yellow-300 hover:text-black transition-colors">
            Analytics
          </a>
          <a href="#" className="block px-4 py-3 text-yellow-300 font-bold uppercase border-4 border-yellow-300 hover:bg-yellow-300 hover:text-black transition-colors">
            Reports
          </a>
          <a href="#" className="block px-4 py-3 text-yellow-300 font-bold uppercase border-4 border-yellow-300 hover:bg-yellow-300 hover:text-black transition-colors">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-4xl font-black text-black mb-8 uppercase">OVERVIEW</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <p className="text-xs font-bold text-black mb-2 tracking-widest">{stat.label}</p>
              <p className="text-4xl font-black text-black mb-2">{stat.value}</p>
              <p className={`text-sm font-bold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h3 className="text-xl font-black text-black mb-6 uppercase">REVENUE OVER TIME</h3>
          <div className="h-64 flex items-end gap-1">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, index) => (
              <div
                key={index}
                className="flex-1 bg-black hover:bg-red-500 transition-colors"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs font-bold text-black uppercase">
            {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'].map((month, i) => (
              <span key={i}>{month}</span>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-xl font-black text-black mb-6 uppercase">RECENT ACTIVITY</h3>
          <div className="space-y-2">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-3 border-b-4 border-black last:border-0"
              >
                <span className="font-bold text-black">{activity.text}</span>
                <span className="text-sm font-mono bg-black text-yellow-300 px-2 py-1">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
