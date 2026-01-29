export default function FuturisticTimeline() {
  const events = [
    { id: 1, date: '2024.Q1', title: 'SYSTEM INIT', description: 'Development protocol activated', progress: 100 },
    { id: 2, date: '2024.Q2', title: 'ALPHA BUILD', description: 'Prototype version deployed', progress: 100 },
    { id: 3, date: '2024.Q3', title: 'BETA PHASE', description: 'Testing sequence in progress', progress: 65 },
    { id: 4, date: '2024.Q4', title: 'LAUNCH SEQ', description: 'Production deployment scheduled', progress: 0 },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-8 min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={event.id} className="relative pl-20 group">
            {index !== events.length - 1 && (
              <div className="absolute left-[39px] top-20 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-purple-500/50">
                <div className="absolute inset-0 w-full bg-gradient-to-b from-blue-400 to-purple-400 blur-sm"></div>
              </div>
            )}

            <div className="absolute left-0 top-0 w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-0.5 shadow-[0_0_30px_rgba(59,130,246,0.5)] group-hover:shadow-[0_0_50px_rgba(59,130,246,0.8)] transition-all duration-300">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs font-mono text-blue-400">{event.date}</div>
                  <div className="text-2xl font-black text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                    {index + 1}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-slate-900/50 to-blue-900/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 shadow-xl overflow-hidden group-hover:border-blue-500/60 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-mono font-black text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-2 uppercase tracking-wider">
                  {event.title}
                </h3>
                <p className="text-sm text-blue-200/80 mb-4 font-mono">
                  {event.description}
                </p>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-blue-400">
                    <span>PROGRESS</span>
                    <span>{event.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                      style={{ width: `${event.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
