export default function NeonTimeline() {
  const events = [
    { id: 1, date: '2024.01', title: 'PROJECT INIT', description: 'Development phase activated', color: 'from-pink-500 to-purple-500' },
    { id: 2, date: '2024.03', title: 'ALPHA BUILD', description: 'Prototype v1.0 deployed', color: 'from-cyan-500 to-blue-500' },
    { id: 3, date: '2024.06', title: 'BETA TESTING', description: 'Feedback collection online', color: 'from-green-500 to-emerald-500' },
    { id: 4, date: '2024.09', title: 'PRODUCTION', description: 'Full launch scheduled', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-8 min-h-screen bg-gray-950">
      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={event.id} className="relative pl-20 group">
            {index !== events.length - 1 && (
              <div className={`absolute left-[39px] top-20 bottom-0 w-1 bg-gradient-to-b ${event.color} shadow-[0_0_20px_currentColor] opacity-60`}></div>
            )}

            <div className="absolute left-0 top-0 w-20 h-20 rounded-full bg-gray-950 border-4 border-current flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                 style={{
                   color: `rgb(var(--tw-gradient-stops))`,
                   borderImage: `linear-gradient(135deg, rgb(var(--tw-gradient-from)), rgb(var(--tw-gradient-to))) 1`,
                 }}>
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center shadow-[0_0_30px_currentColor] animate-pulse`}>
                <div className="text-white font-black text-2xl">{index + 1}</div>
              </div>
            </div>

            <div className="bg-gray-900 border-2 border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all duration-300 overflow-hidden relative group-hover:shadow-2xl">
              <div className={`absolute inset-0 bg-gradient-to-r ${event.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                <div className="text-xs font-mono font-black text-gray-500 mb-3 tracking-widest">
                  {event.date}
                </div>
                <h3 className={`text-2xl font-black text-transparent bg-gradient-to-r ${event.color} bg-clip-text mb-2 uppercase tracking-tight`}
                    style={{ textShadow: '0 0 30px currentColor' }}>
                  {event.title}
                </h3>
                <p className="text-sm text-gray-400 font-mono">
                  {event.description}
                </p>
              </div>

              <div className={`absolute -bottom-1 -right-1 w-32 h-32 bg-gradient-to-br ${event.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-300`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
