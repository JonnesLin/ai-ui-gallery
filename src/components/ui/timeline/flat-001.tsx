import { Timeline, TimelineItem, TimelineDot, TimelineContent } from './index';

export default function FlatTimeline() {
  const events = [
    { id: 1, date: 'Jan 2024', title: 'Project Initiation', description: 'Started the development phase', color: 'bg-blue-500', lightColor: 'bg-blue-100' },
    { id: 2, date: 'Mar 2024', title: 'Alpha Release', description: 'First working prototype delivered', color: 'bg-purple-500', lightColor: 'bg-purple-100' },
    { id: 3, date: 'Jun 2024', title: 'Beta Testing', description: 'Community feedback collection', color: 'bg-green-500', lightColor: 'bg-green-100' },
    { id: 4, date: 'Sep 2024', title: 'Production Launch', description: 'Full public release', color: 'bg-orange-500', lightColor: 'bg-orange-100' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-8 min-h-screen bg-gray-100">
      <Timeline theme="flat" mode="left" className="bg-gray-100">
        {events.map((event, index) => (
          <TimelineItem key={event.id} color="primary">
            <TimelineDot className={`w-14 h-14 ${event.color}`}>
              <div className="text-white font-bold text-xl">{index + 1}</div>
            </TimelineDot>
            <TimelineContent className={`${event.lightColor} rounded-lg`}>
              <div className={`inline-block ${event.color} text-white text-xs font-bold px-3 py-1 rounded mb-3`}>
                {event.date}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {event.title}
              </h3>
              <p className="text-sm text-gray-700">
                {event.description}
              </p>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
