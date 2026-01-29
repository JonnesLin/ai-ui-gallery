import { Timeline, TimelineItem, TimelineDot, TimelineContent } from './index';

export default function GlassmorphismTimeline() {
  const events = [
    { id: 1, date: '2024-01', title: 'Project Initiation', description: 'Started the development phase', status: 'completed' },
    { id: 2, date: '2024-03', title: 'Alpha Release', description: 'First working prototype delivered', status: 'completed' },
    { id: 3, date: '2024-06', title: 'Beta Testing', description: 'Community feedback collection', status: 'active' },
    { id: 4, date: '2024-09', title: 'Production Launch', description: 'Full public release', status: 'pending' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-8 min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400">
      <Timeline theme="glassmorphism" mode="left">
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
              className="bg-white/20 backdrop-blur-md border border-white/40"
            >
              <div className={`w-4 h-4 rounded-full ${
                event.status === 'completed' ? 'bg-green-400' :
                event.status === 'active' ? 'bg-blue-400 animate-pulse' :
                'bg-gray-300/50'
              }`}></div>
            </TimelineDot>
            <TimelineContent className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                {event.title}
              </h3>
              <p className="text-sm text-white/80">
                {event.description}
              </p>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
