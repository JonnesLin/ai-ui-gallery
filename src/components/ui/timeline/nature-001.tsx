export default function NatureTimeline() {
  const events = [
    { id: 1, date: 'Spring 2024', title: 'Project Initiation', description: 'Seeds of innovation planted', status: 'completed' },
    { id: 2, date: 'Early Summer 2024', title: 'Alpha Release', description: 'First sprouts emerging from the ground', status: 'completed' },
    { id: 3, date: 'Mid Summer 2024', title: 'Beta Testing', description: 'Growth and flourishing continues', status: 'active' },
    { id: 4, date: 'Autumn 2024', title: 'Production Launch', description: 'Ready for harvest', status: 'pending' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-8 min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={event.id} className="relative pl-16">
            {index !== events.length - 1 && (
              <div className="absolute left-[27px] top-14 bottom-0 w-2 bg-gradient-to-b from-green-600 via-emerald-500 to-teal-500 opacity-40 rounded-full"></div>
            )}

            <div className={`absolute left-0 top-0 w-14 h-14 rounded-full flex items-center justify-center shadow-lg ${
              event.status === 'completed' ? 'bg-green-600' :
              event.status === 'active' ? 'bg-emerald-500 animate-pulse' :
              'bg-teal-300'
            }`}>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                {event.status === 'completed' && (
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                  </svg>
                )}
                {event.status === 'active' && (
                  <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                )}
                {event.status === 'pending' && (
                  <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
                  </svg>
                )}
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 border-green-200 hover:border-green-300 transition-colors duration-300">
              <div className="text-xs font-semibold text-green-700 mb-2 uppercase tracking-wide">
                {event.date}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
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
