export default function SketchTimeline() {
  const events = [
    { id: 1, date: 'Jan 2024', title: 'Project Initiation', description: 'Started the development phase', status: 'completed' },
    { id: 2, date: 'Mar 2024', title: 'Alpha Release', description: 'First working prototype delivered', status: 'completed' },
    { id: 3, date: 'Jun 2024', title: 'Beta Testing', description: 'Community feedback collection', status: 'active' },
    { id: 4, date: 'Sep 2024', title: 'Production Launch', description: 'Full public release', status: 'pending' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-8 min-h-screen bg-yellow-50">
      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={event.id} className="relative pl-16" style={{ transform: `rotate(${Math.random() * 2 - 1}deg)` }}>
            {index !== events.length - 1 && (
              <div
                className="absolute left-[27px] top-14 bottom-0 w-1 border-l-2 border-dashed border-gray-400"
                style={{ transform: `rotate(${Math.random() * 4 - 2}deg)` }}
              ></div>
            )}

            <div
              className={`absolute left-0 top-0 w-14 h-14 rounded-full border-4 border-gray-800 bg-white flex items-center justify-center ${
                event.status === 'active' ? 'animate-pulse' : ''
              }`}
              style={{
                transform: `rotate(${Math.random() * 10 - 5}deg)`,
                borderRadius: '45% 55% 50% 50% / 50% 50% 45% 55%'
              }}
            >
              {event.status === 'completed' && (
                <svg className="w-7 h-7 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
              {event.status === 'active' && (
                <div className="w-5 h-5 bg-gray-800 rounded-full"></div>
              )}
              {event.status === 'pending' && (
                <div className="w-5 h-5 border-2 border-gray-400 rounded-full"></div>
              )}
            </div>

            <div
              className="bg-white border-3 border-gray-800 rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              style={{
                transform: `rotate(${Math.random() * 2 - 1}deg)`,
                borderRadius: '8px 12px 10px 8px'
              }}
            >
              <div
                className="inline-block bg-gray-800 text-white text-xs font-bold px-3 py-1 mb-3"
                style={{
                  transform: `rotate(${Math.random() * 4 - 2}deg)`,
                  borderRadius: '2px 6px 4px 3px'
                }}
              >
                {event.date}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'cursive' }}>
                {event.title}
              </h3>
              <p className="text-sm text-gray-700" style={{ fontFamily: 'cursive' }}>
                {event.description}
              </p>

              <svg className="absolute top-2 right-2 w-16 h-16 opacity-20" viewBox="0 0 100 100">
                <path d="M10,30 Q20,20 30,30 T50,30" stroke="#000" fill="none" strokeWidth="2" />
                <circle cx="20" cy="60" r="8" fill="#000" opacity="0.1" />
                <line x1="50" y1="70" x2="80" y2="75" stroke="#000" strokeWidth="2" opacity="0.2" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
