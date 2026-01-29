export default function GlassmorphismList() {
  const items = [
    { id: 1, title: 'Morning Meditation', time: '6:00 AM', status: 'completed', icon: '🧘' },
    { id: 2, title: 'Team Standup', time: '9:30 AM', status: 'upcoming', icon: '👥' },
    { id: 3, title: 'Design Review', time: '2:00 PM', status: 'upcoming', icon: '🎨' },
    { id: 4, title: 'Evening Workout', time: '6:30 PM', status: 'pending', icon: '💪' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Glass List with Blur */}
        <section>
          <h2 className="text-white/90 font-semibold mb-4 text-lg">Today's Schedule</h2>
          <ul className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
            {items.map((item, idx) => (
              <li
                key={item.id}
                className={`px-6 py-4 hover:bg-white/10 transition-all cursor-pointer ${
                  idx !== items.length - 1 ? 'border-b border-white/10' : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{item.title}</h3>
                    <p className="text-white/60 text-sm mt-1">{item.time}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === 'completed'
                        ? 'bg-green-400/20 text-green-100'
                        : item.status === 'upcoming'
                        ? 'bg-blue-400/20 text-blue-100'
                        : 'bg-white/10 text-white/60'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Frosted Glass Cards */}
        <section>
          <h2 className="text-white/90 font-semibold mb-4 text-lg">Featured Items</h2>
          <ul className="space-y-3">
            {items.slice(0, 3).map((item) => (
              <li
                key={item.id}
                className="backdrop-blur-lg bg-white/15 rounded-xl border border-white/20 p-5 hover:bg-white/20 hover:scale-[1.02] transition-all cursor-pointer shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-medium">{item.title}</h3>
                      <p className="text-white/60 text-sm">{item.time}</p>
                    </div>
                  </div>
                  <button className="text-white/80 hover:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Nested Glass List */}
        <section>
          <div className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-6 shadow-2xl">
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-3">
              <li className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all">
                <div className="text-white font-medium mb-3">Work Tasks</div>
                <ul className="space-y-2 pl-4 border-l-2 border-white/20">
                  <li className="text-white/70 text-sm hover:text-white transition-colors cursor-pointer">
                    Design Review
                  </li>
                  <li className="text-white/70 text-sm hover:text-white transition-colors cursor-pointer">
                    Team Standup
                  </li>
                  <li className="text-white/70 text-sm hover:text-white transition-colors cursor-pointer">
                    Client Meeting
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
