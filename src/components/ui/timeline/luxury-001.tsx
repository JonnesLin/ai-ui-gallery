export default function LuxuryTimeline() {
  const events = [
    { id: 1, date: 'January 2024', title: 'Project Initiation', description: 'Commenced the development phase with strategic planning', status: 'completed' },
    { id: 2, date: 'March 2024', title: 'Alpha Release', description: 'Delivered the first working prototype to stakeholders', status: 'completed' },
    { id: 3, date: 'June 2024', title: 'Beta Testing', description: 'Gathering valuable community feedback and insights', status: 'active' },
    { id: 4, date: 'September 2024', title: 'Production Launch', description: 'Preparing for the full public release', status: 'pending' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-8 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={event.id} className="relative pl-24">
            {index !== events.length - 1 && (
              <div className="absolute left-[47px] top-16 bottom-0 w-px bg-gradient-to-b from-amber-500 to-amber-700"></div>
            )}

            <div className="absolute left-0 top-0 w-24 h-16 bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center">
              <div className="w-20 h-12 bg-black flex items-center justify-center">
                <div className="text-amber-500 font-serif text-xs tracking-widest">
                  {event.date.split(' ')[0].toUpperCase()}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/30 p-8 shadow-2xl hover:border-amber-500/50 transition-all duration-500">
              <div className="border-l-2 border-amber-500 pl-6">
                <h3 className="text-2xl font-serif text-amber-500 mb-3 tracking-wide">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed tracking-wide">
                  {event.description}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    event.status === 'completed' ? 'bg-amber-500' :
                    event.status === 'active' ? 'bg-amber-500 animate-pulse' :
                    'bg-gray-600'
                  }`}></div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">
                    {event.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
