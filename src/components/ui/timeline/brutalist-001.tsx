import { Timeline, TimelineItem, TimelineDot, TimelineContent } from './index';

export default function BrutalistTimeline() {
  const events = [
    { id: 1, date: '2024-01', title: 'PROJECT INITIATION', description: 'STARTED THE DEVELOPMENT PHASE', status: 'completed' },
    { id: 2, date: '2024-03', title: 'ALPHA RELEASE', description: 'FIRST WORKING PROTOTYPE DELIVERED', status: 'completed' },
    { id: 3, date: '2024-06', title: 'BETA TESTING', description: 'COMMUNITY FEEDBACK COLLECTION', status: 'active' },
    { id: 4, date: '2024-09', title: 'PRODUCTION LAUNCH', description: 'FULL PUBLIC RELEASE', status: 'pending' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-8 min-h-screen bg-yellow-50">
      <Timeline theme="flat" mode="left" className="bg-yellow-50 space-y-0">
        {events.map((event) => (
          <TimelineItem
            key={event.id}
            color={event.status === 'completed' ? 'success' : event.status === 'active' ? 'error' : 'gray'}
            className="border-l-8 border-black"
          >
            <TimelineDot className={`-left-3 w-6 h-6 rotate-45 ${
              event.status === 'completed' ? 'bg-black' :
              event.status === 'active' ? 'bg-red-600' :
              'bg-white border-4 border-black'
            }`} />
            <TimelineContent className="ml-0 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
              <div className="bg-black text-white text-xs font-black px-3 py-1 inline-block mb-3 uppercase tracking-widest">
                {event.date}
              </div>
              <h3 className="text-2xl font-black text-black mb-3 uppercase tracking-tight">
                {event.title}
              </h3>
              <p className="text-sm font-bold text-black uppercase">
                {event.description}
              </p>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
