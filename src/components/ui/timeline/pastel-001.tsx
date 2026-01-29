export default function PastelTimeline() {
  const events = [
    { id: 1, date: 'January 2024', title: 'Project Initiation', description: 'Started the development phase', color: 'bg-pink-200', dotColor: 'bg-pink-400' },
    { id: 2, date: 'March 2024', title: 'Alpha Release', description: 'First working prototype delivered', color: 'bg-purple-200', dotColor: 'bg-purple-400' },
    { id: 3, date: 'June 2024', title: 'Beta Testing', description: 'Community feedback collection', color: 'bg-blue-200', dotColor: 'bg-blue-400' },
    { id: 4, date: 'September 2024', title: 'Production Launch', description: 'Full public release', color: 'bg-green-200', dotColor: 'bg-green-400' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-8 min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={event.id} className="relative pl-14">
            {index !== events.length - 1 && (
              <div className="absolute left-[23px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-pink-200 via-purple-200 to-blue-200"></div>
            )}

            <div className={`absolute left-0 top-0 w-12 h-12 ${event.color} rounded-full flex items-center justify-center shadow-lg`}>
              <div className={`w-6 h-6 ${event.dotColor} rounded-full`}></div>
            </div>

            <div className={`${event.color} rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300`}>
              <div className="text-xs font-semibold text-gray-600 mb-2">
                {event.date}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {event.title}
              </h3>
              <p className="text-sm text-gray-700">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
