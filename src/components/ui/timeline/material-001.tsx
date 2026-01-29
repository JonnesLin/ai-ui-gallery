import { Timeline, TimelineItem, TimelineDot, TimelineContent } from './index';

export default function MaterialTimeline() {
  const events = [
    { id: 1, date: 'January 2024', title: 'Project Initiation', description: 'Started the development phase', status: 'completed' },
    { id: 2, date: 'March 2024', title: 'Alpha Release', description: 'First working prototype delivered', status: 'completed' },
    { id: 3, date: 'June 2024', title: 'Beta Testing', description: 'Community feedback collection', status: 'active' },
    { id: 4, date: 'September 2024', title: 'Production Launch', description: 'Full public release', status: 'pending' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-8 min-h-screen bg-gray-50">
      <Timeline theme="material" mode="left" className="space-y-8">
        {events.map((event, index) => (
          <div key={event.id} className="relative">
            {index !== events.length - 1 && (
              <div className="absolute left-[23px] top-12 bottom-[-2rem] w-0.5 bg-indigo-200" />
            )}
            <TimelineItem
              label={event.date}
              color={
                event.status === 'completed' ? 'success' :
                event.status === 'active' ? 'primary' :
                'gray'
              }
            >
              <TimelineDot
                color={event.status === 'completed' ? 'success' : event.status === 'active' ? 'primary' : 'gray'}
                className={`w-12 h-12 shadow-lg transition-all duration-300 ${
                  event.status === 'active' ? 'scale-110 animate-pulse' : ''
                }`}
              >
                {event.status === 'completed' && (
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {event.status === 'active' && (
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                )}
                {event.status === 'pending' && (
                  <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                )}
              </TimelineDot>
              <TimelineContent className="hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`h-6 w-1 rounded-full ${
                    event.status === 'completed' ? 'bg-indigo-600' :
                    event.status === 'active' ? 'bg-indigo-500' :
                    'bg-gray-300'
                  }`}></div>
                  <div className={`text-xs font-medium px-2 py-1 rounded ${
                    event.status === 'completed' ? 'bg-indigo-50 text-indigo-700' :
                    event.status === 'active' ? 'bg-indigo-100 text-indigo-800' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {event.status === 'completed' ? 'Completed' :
                     event.status === 'active' ? 'In Progress' :
                     'Pending'}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </TimelineContent>
            </TimelineItem>
          </div>
        ))}
      </Timeline>
    </div>
  );
}
