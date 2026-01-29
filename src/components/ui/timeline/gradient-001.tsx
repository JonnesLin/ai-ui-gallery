export default function GradientTimeline() {
  const events = [
    { id: 1, date: '2024-01', title: 'Project Initiation', description: 'Started the development phase', gradient: 'from-purple-500 to-pink-500' },
    { id: 2, date: '2024-03', title: 'Alpha Release', description: 'First working prototype delivered', gradient: 'from-blue-500 to-cyan-500' },
    { id: 3, date: '2024-06', title: 'Beta Testing', description: 'Community feedback collection', gradient: 'from-green-500 to-emerald-500' },
    { id: 4, date: '2024-09', title: 'Production Launch', description: 'Full public release', gradient: 'from-orange-500 to-red-500' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-8 min-h-screen bg-gray-50">
      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={event.id} className="relative pl-14">
            {index !== events.length - 1 && (
              <div className={`absolute left-[23px] top-12 bottom-0 w-1 bg-gradient-to-b ${event.gradient} opacity-30`}></div>
            )}

            <div className={`absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br ${event.gradient} p-0.5 shadow-lg`}>
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${event.gradient}`}></div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className={`inline-block text-xs font-bold bg-gradient-to-r ${event.gradient} bg-clip-text text-transparent mb-2`}>
                {event.date}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {event.title}
              </h3>
              <p className="text-sm text-gray-600">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
