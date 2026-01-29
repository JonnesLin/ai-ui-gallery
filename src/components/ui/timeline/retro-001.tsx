export default function RetroTimeline() {
  const events = [
    { id: 1, date: 'JAN 2024', title: 'Project Initiation', description: 'Started the development phase', color: 'bg-orange-400' },
    { id: 2, date: 'MAR 2024', title: 'Alpha Release', description: 'First working prototype delivered', color: 'bg-pink-400' },
    { id: 3, date: 'JUN 2024', title: 'Beta Testing', description: 'Community feedback collection', color: 'bg-purple-400' },
    { id: 4, date: 'SEP 2024', title: 'Production Launch', description: 'Full public release', color: 'bg-cyan-400' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-8 min-h-screen bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100">
      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={event.id} className="relative pl-16">
            {index !== events.length - 1 && (
              <div className="absolute left-[31px] top-16 bottom-0 w-2 bg-gradient-to-b from-orange-300 via-pink-300 to-purple-300"></div>
            )}

            <div className={`absolute left-0 top-0 w-16 h-16 ${event.color} rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] flex items-center justify-center transform -rotate-6`}>
              <div className="text-white font-black text-2xl">{index + 1}</div>
            </div>

            <div className="bg-white rounded-lg border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-1 transition-transform duration-200">
              <div className="text-xs font-black text-black mb-2 tracking-widest bg-yellow-300 inline-block px-3 py-1">
                {event.date}
              </div>
              <h3 className="text-2xl font-black text-black mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                {event.title}
              </h3>
              <p className="text-sm font-medium text-gray-700">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
