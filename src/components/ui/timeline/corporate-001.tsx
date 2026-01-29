export default function CorporateTimeline() {
  const events = [
    { id: 1, date: 'Q1 2024', title: 'Project Initiation', description: 'Started the development phase', status: 'completed' },
    { id: 2, date: 'Q2 2024', title: 'Alpha Release', description: 'First working prototype delivered', status: 'completed' },
    { id: 3, date: 'Q3 2024', title: 'Beta Testing', description: 'Community feedback collection', status: 'active' },
    { id: 4, date: 'Q4 2024', title: 'Production Launch', description: 'Full public release', status: 'pending' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-8 min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={event.id} className="relative pl-20">
              {index !== events.length - 1 && (
                <div className="absolute left-[39px] top-12 bottom-0 w-0.5 bg-blue-200"></div>
              )}

              <div className="absolute left-0 top-0 w-20 h-10 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">{event.date}</span>
              </div>

              <div className="border-l-4 border-blue-600 pl-6 py-2">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {event.description}
                    </p>
                  </div>
                  <div className={`ml-4 px-3 py-1 rounded-full text-xs font-medium ${
                    event.status === 'completed' ? 'bg-green-100 text-green-700' :
                    event.status === 'active' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {event.status === 'completed' ? 'Completed' :
                     event.status === 'active' ? 'In Progress' :
                     'Pending'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
