export default function PlayfulTimeline() {
  const events = [
    { id: 1, date: 'Jan 2024', title: 'Project Initiation', description: 'Started the development phase', emoji: '🚀', color: 'bg-yellow-400' },
    { id: 2, date: 'Mar 2024', title: 'Alpha Release', description: 'First working prototype delivered', emoji: '🎨', color: 'bg-pink-400' },
    { id: 3, date: 'Jun 2024', title: 'Beta Testing', description: 'Community feedback collection', emoji: '🧪', color: 'bg-purple-400' },
    { id: 4, date: 'Sep 2024', title: 'Production Launch', description: 'Full public release', emoji: '🎉', color: 'bg-blue-400' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-8 min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100">
      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={event.id} className="relative pl-20">
            {index !== events.length - 1 && (
              <div className="absolute left-[35px] top-16 bottom-0 w-1 border-l-4 border-dashed border-gray-300"></div>
            )}

            <div className={`absolute left-0 top-0 w-16 h-16 ${event.color} rounded-full flex items-center justify-center text-3xl shadow-lg transform hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer`}>
              {event.emoji}
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-4 border-gray-200 hover:border-gray-300 transform hover:-translate-y-1 hover:rotate-1 transition-all duration-300">
              <div className="inline-block bg-gradient-to-r from-yellow-400 to-pink-400 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
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
