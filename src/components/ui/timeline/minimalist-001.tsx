import { Timeline, TimelineItem, TimelineDot, TimelineContent } from './index';

export default function MinimalistTimeline() {
  const events = [
    { id: 1, date: '2024-01', title: 'Project Initiation', description: 'Started the development phase', status: 'completed' },
    { id: 2, date: '2024-03', title: 'Alpha Release', description: 'First working prototype delivered', status: 'completed' },
    { id: 3, date: '2024-06', title: 'Beta Testing', description: 'Community feedback collection', status: 'active' },
    { id: 4, date: '2024-09', title: 'Production Launch', description: 'Full public release', status: 'pending' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-8 bg-white">
      <Timeline theme="minimalist" mode="left" className="space-y-8">
        {events.map((event, index) => (
          <div key={event.id} className="relative">
            {index !== events.length - 1 && (
              <div className="absolute left-[19px] top-10 bottom-[-2rem] w-0.5 bg-gray-200" />
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
                className="border-2 border-gray-900"
              >
                {event.status === 'completed' && (
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </TimelineDot>
              <TimelineContent className="border-none shadow-none p-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600">
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
