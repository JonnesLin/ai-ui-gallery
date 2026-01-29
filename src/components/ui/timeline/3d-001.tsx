export default function ThreeDTimeline() {
  const events = [
    { id: 1, date: 'January 2024', title: 'Project Initiation', description: 'Started the development phase', status: 'completed' },
    { id: 2, date: 'March 2024', title: 'Alpha Release', description: 'First working prototype delivered', status: 'completed' },
    { id: 3, date: 'June 2024', title: 'Beta Testing', description: 'Community feedback collection', status: 'active' },
    { id: 4, date: 'September 2024', title: 'Production Launch', description: 'Full public release', status: 'pending' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-8 min-h-screen bg-gradient-to-br from-slate-100 to-slate-200" style={{ perspective: '1000px' }}>
      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={event.id} className="relative pl-20" style={{ transformStyle: 'preserve-3d' }}>
            {index !== events.length - 1 && (
              <div className="absolute left-[39px] top-20 bottom-0 w-2 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full shadow-[4px_0_10px_rgba(0,0,0,0.3)]"
                   style={{ transform: 'translateZ(-20px)' }}></div>
            )}

            <div className={`absolute left-0 top-0 w-20 h-20 rounded-full bg-gradient-to-br ${
              event.status === 'completed' ? 'from-green-400 to-emerald-600' :
              event.status === 'active' ? 'from-blue-400 to-blue-600' :
              'from-gray-300 to-gray-500'
            } flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.3),inset_0_-10px_20px_rgba(0,0,0,0.2),inset_0_10px_20px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform duration-300`}
                 style={{ transform: 'translateZ(20px)' }}>
              <div className="w-14 h-14 rounded-full bg-white/30 flex items-center justify-center">
                <div className="text-white font-black text-2xl drop-shadow-lg">{index + 1}</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2),0_0_0_1px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.3),0_0_0_1px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2"
                 style={{
                   transform: 'translateZ(10px) rotateY(-2deg)',
                   transformStyle: 'preserve-3d'
                 }}>
              <div className="relative" style={{ transform: 'translateZ(10px)' }}>
                <div className="text-xs font-semibold text-blue-600 mb-2 uppercase tracking-wider">
                  {event.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 shadow-sm">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {event.description}
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl pointer-events-none"
                   style={{ transform: 'translateZ(-5px)' }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
