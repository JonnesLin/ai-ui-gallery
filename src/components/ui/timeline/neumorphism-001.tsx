import { Timeline, TimelineItem, TimelineDot, TimelineContent } from './index';

export default function NeumorphismTimeline() {
  const events = [
    { id: 1, date: '2024-01', title: 'Project Initiation', description: 'Started the development phase', status: 'completed' },
    { id: 2, date: '2024-03', title: 'Alpha Release', description: 'First working prototype delivered', status: 'completed' },
    { id: 3, date: '2024-06', title: 'Beta Testing', description: 'Community feedback collection', status: 'active' },
    { id: 4, date: '2024-09', title: 'Production Launch', description: 'Full public release', status: 'pending' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-8 min-h-screen bg-gray-200">
      <Timeline theme="neumorphism" mode="left" className="bg-gray-200">
        {events.map((event) => (
          <TimelineItem
            key={event.id}
            label={event.date}
            color={
              event.status === 'completed' ? 'success' :
              event.status === 'active' ? 'primary' :
              'gray'
            }
          >
            <TimelineDot
              color={event.status === 'completed' ? 'success' : event.status === 'active' ? 'primary' : 'gray'}
              className="w-14 h-14 bg-gray-200 shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_12px_rgba(255,255,255,0.7)]"
            >
              <div className={`w-6 h-6 rounded-full ${
                event.status === 'completed' ? 'bg-green-500 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)]' :
                event.status === 'active' ? 'bg-blue-500 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)] animate-pulse' :
                'bg-gray-300 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)]'
              }`}></div>
            </TimelineDot>
            <TimelineContent className="bg-gray-200 rounded-2xl shadow-[8px_8px_16px_rgba(0,0,0,0.15),-8px_-8px_16px_rgba(255,255,255,0.7)]">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {event.title}
              </h3>
              <p className="text-sm text-gray-600">
                {event.description}
              </p>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
