export default function MonochromeTimeline() {
  const events = [
    { id: 1, date: '2024-01', title: 'Project Initiation', description: 'Started the development phase', status: 'completed' },
    { id: 2, date: '2024-03', title: 'Alpha Release', description: 'First working prototype delivered', status: 'completed' },
    { id: 3, date: '2024-06', title: 'Beta Testing', description: 'Community feedback collection', status: 'active' },
    { id: 4, date: '2024-09', title: 'Production Launch', description: 'Full public release', status: 'pending' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-8 min-h-screen bg-black">
      <div className="space-y-0">
        {events.map((event, index) => (
          <div key={event.id} className="relative border-l-4 border-white">
            <div className={`absolute -left-3 top-6 w-5 h-5 ${
              event.status === 'completed' ? 'bg-white' :
              event.status === 'active' ? 'bg-white animate-pulse' :
              'bg-black border-2 border-white'
            }`}></div>

            <div className="ml-8 py-8 border-b border-white/20 last:border-b-0">
              <div className="flex items-baseline gap-4 mb-4">
                <div className="text-sm font-mono text-white/60 tracking-widest">
                  {event.date}
                </div>
                <div className={`px-2 py-0.5 text-xs font-mono uppercase tracking-wider ${
                  event.status === 'completed' ? 'bg-white text-black' :
                  event.status === 'active' ? 'bg-white/20 text-white border border-white' :
                  'bg-transparent text-white/60 border border-white/40'
                }`}>
                  {event.status}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                {event.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
