import { Timeline, TimelineItem, TimelineDot, TimelineContent } from './index';

export default function CyberpunkTimeline() {
  const events = [
    { id: 1, date: '2024.01', title: 'PROJECT_INIT', description: 'SYSTEM DEVELOPMENT PHASE ACTIVATED', status: 'completed' },
    { id: 2, date: '2024.03', title: 'ALPHA_RELEASE', description: 'PROTOTYPE V1.0 DEPLOYED', status: 'completed' },
    { id: 3, date: '2024.06', title: 'BETA_TESTING', description: 'COMMUNITY FEEDBACK PROTOCOL RUNNING', status: 'active' },
    { id: 4, date: '2024.09', title: 'PRODUCTION_LAUNCH', description: 'FULL SYSTEM DEPLOYMENT PENDING', status: 'pending' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-8 min-h-screen bg-black">
      <Timeline theme="cyberpunk" mode="left" className="bg-black">
        {events.map((event) => (
          <TimelineItem
            key={event.id}
            label={event.date}
            color={
              event.status === 'completed' ? 'primary' :
              event.status === 'active' ? 'error' :
              'gray'
            }
          >
            <TimelineDot
              color={event.status === 'completed' ? 'primary' : event.status === 'active' ? 'error' : 'gray'}
              className="w-14 h-14 bg-black border-2 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.5)] clip-corner"
            >
              <div className={`w-8 h-8 ${
                event.status === 'completed' ? 'bg-cyan-500' :
                event.status === 'active' ? 'bg-pink-500 animate-pulse' :
                'bg-gray-700'
              } clip-corner`}></div>
            </TimelineDot>
            <TimelineContent className="bg-black border-cyan-500/50 clip-corner shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all duration-300 hover:border-cyan-500">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-pink-500 animate-pulse"></div>
                  <div className="w-1 h-1 bg-cyan-500 animate-pulse delay-75"></div>
                  <div className="w-1 h-1 bg-purple-500 animate-pulse delay-150"></div>
                </div>
              </div>
              <h3 className="text-xl font-mono font-black text-white mb-2 uppercase tracking-tight">
                {event.title}
              </h3>
              <p className="text-sm font-mono text-cyan-300/80 uppercase tracking-wide">
                {event.description}
              </p>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>

      <style>{`
        .clip-corner {
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }
      `}</style>
    </div>
  );
}
