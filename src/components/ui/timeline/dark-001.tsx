import { Timeline, TimelineItem, TimelineDot, TimelineContent } from './index';

export default function DarkTimeline() {
  const events = [
    { id: 1, date: '2024-01', title: 'Project Initiation', description: 'Started the development phase', status: 'completed' },
    { id: 2, date: '2024-03', title: 'Alpha Release', description: 'First working prototype delivered', status: 'completed' },
    { id: 3, date: '2024-06', title: 'Beta Testing', description: 'Community feedback collection', status: 'active' },
    { id: 4, date: '2024-09', title: 'Production Launch', description: 'Full public release', status: 'pending' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-8 min-h-screen bg-gray-950">
      <Timeline theme="dark" mode="left" className="space-y-6">
        {events.map((event, index) => (
          <div key={event.id} className="relative">
            {index !== events.length - 1 && (
              <div className="absolute left-[19px] top-10 bottom-[-1.5rem] w-0.5 bg-gradient-to-b from-gray-700 to-gray-800" />
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
                className={`border-2 transition-all duration-300 ${
                  event.status === 'completed' ? 'bg-green-500/10 border-green-500' :
                  event.status === 'active' ? 'bg-blue-500/10 border-blue-500 animate-pulse' :
                  'bg-gray-800 border-gray-700'
                }`}
              >
                {event.status === 'completed' && (
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {event.status === 'active' && (
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                )}
                {event.status === 'pending' && (
                  <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                )}
              </TimelineDot>
              <TimelineContent className="bg-gray-900 border-gray-800 rounded-xl hover:border-gray-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gray-950/50">
                <h3 className="text-lg font-bold text-gray-100 mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-400">
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
