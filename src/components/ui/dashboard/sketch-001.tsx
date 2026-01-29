export default function SketchDashboard() {
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
    <div className="flex min-h-screen bg-amber-50" style={{ fontFamily: "'Caveat', cursive, 'Comic Sans MS', cursive" }}>
      {/* Notebook lines background */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_31px,#e0d5c7_31px,#e0d5c7_32px)] pointer-events-none opacity-50" />

      {/* Sidebar */}
      <aside className="relative z-10 w-64 bg-amber-100/50 border-r-2 border-dashed border-amber-300 p-6">
        <h1 className="text-3xl text-amber-800 mb-8 transform -rotate-2">Dashboard</h1>
        <nav className="space-y-2">
          <a href="#" className="block px-4 py-3 text-amber-900 bg-amber-200/50 rounded border-2 border-amber-400 transform rotate-1 font-bold">
            ~ Overview
          </a>
          <a href="#" className="block px-4 py-3 text-amber-700 hover:bg-amber-100 rounded border-2 border-dashed border-transparent hover:border-amber-300 transform -rotate-1 transition-all">
            ~ Analytics
          </a>
          <a href="#" className="block px-4 py-3 text-amber-700 hover:bg-amber-100 rounded border-2 border-dashed border-transparent hover:border-amber-300 transform rotate-1 transition-all">
            ~ Reports
          </a>
          <a href="#" className="block px-4 py-3 text-amber-700 hover:bg-amber-100 rounded border-2 border-dashed border-transparent hover:border-amber-300 transform -rotate-1 transition-all">
            ~ Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="relative z-10 flex-1 p-8">
        <h2 className="text-4xl text-amber-800 mb-8 transform -rotate-1">Overview</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/70 border-2 border-amber-300 rounded-lg p-6 transform hover:rotate-1 transition-transform shadow-[4px_4px_0px_0px_rgba(180,83,9,0.2)]"
              style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}
            >
              <p className="text-sm text-amber-600 mb-1 underline decoration-wavy">{stat.label}</p>
              <p className="text-4xl text-amber-900 mb-1">{stat.value}</p>
              <p className={`text-lg ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change} !
              </p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-white/70 border-2 border-amber-300 rounded-lg p-6 mb-8 shadow-[4px_4px_0px_0px_rgba(180,83,9,0.2)] transform -rotate-1">
          <h3 className="text-2xl text-amber-800 mb-6 underline">Revenue Chart</h3>
          <div className="h-64 flex items-end gap-2">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, index) => (
              <div
                key={index}
                className="flex-1 bg-amber-400 rounded-t border-2 border-amber-600 opacity-80 hover:opacity-100 transition-opacity"
                style={{
                  height: `${height}%`,
                  transform: `rotate(${(index - 6) * 0.5}deg)`,
                }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-4 text-amber-600">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
              <span key={month} className="text-sm">{month}</span>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/70 border-2 border-amber-300 rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(180,83,9,0.2)] transform rotate-1">
          <h3 className="text-2xl text-amber-800 mb-6 underline">Recent Stuff</h3>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-3 border-b-2 border-dashed border-amber-200 last:border-0"
              >
                <span className="text-amber-900">* {activity.text}</span>
                <span className="text-amber-600 text-sm">({activity.time})</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
