import { useState } from 'react';

export default function FuturisticAccordion() {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const items = [
    {
      title: 'Quantum Processing Unit',
      content: 'Our QPU delivers exponential computational advantages through superposition and entanglement principles. Process complex algorithms in microseconds that would take classical computers millennia.',
      status: 'ACTIVE',
      power: '98%',
    },
    {
      title: 'Neural Interface Protocol',
      content: 'Direct brain-computer communication enables thought-based control and data transfer. Secure encryption ensures complete privacy of neural transmissions.',
      status: 'STANDBY',
      power: '75%',
    },
    {
      title: 'Holographic Display Matrix',
      content: 'True 3D visualization without glasses or headsets. Our photonic array creates tangible light structures for immersive data interaction and presentation.',
      status: 'ACTIVE',
      power: '92%',
    },
    {
      title: 'Temporal Data Sync',
      content: 'Cross-dimensional backup system ensures data integrity across all timelines. Automatic synchronization with predictive recovery protocols.',
      status: 'SYNCING',
      power: '64%',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 p-4 sm:p-8 md:p-12 font-sans">
      {/* Background grid */}
      <div
        className="fixed inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-2xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-3 w-3 rounded-full bg-blue-500 animate-pulse shadow-lg shadow-blue-500/50" />
            <span className="text-xs tracking-widest text-blue-400 uppercase">System Online</span>
          </div>
          <h2 className="text-3xl font-light text-white sm:text-4xl tracking-wider">
            Knowledge Base
          </h2>
          <div className="mt-2 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-blue-500 to-transparent" />
            <span className="text-xs text-blue-500">v4.2.1</span>
          </div>
        </div>

        <div className="space-y-2">
          {items.map((item, index) => (
            <div
              key={index}
              className={`overflow-hidden backdrop-blur transition-all duration-300 ${
                openItems.includes(index)
                  ? 'bg-blue-950/50 border border-blue-500/50'
                  : 'bg-slate-900/50 border border-slate-800 hover:border-blue-800'
              }`}
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)',
              }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex w-full items-center gap-4 p-4 text-left sm:p-5"
              >
                <div className="flex flex-col items-center gap-1">
                  <span className={`text-[10px] px-2 py-0.5 rounded ${
                    item.status === 'ACTIVE' ? 'bg-green-500/20 text-green-400' :
                    item.status === 'SYNCING' ? 'bg-amber-500/20 text-amber-400' :
                    'bg-slate-500/20 text-slate-400'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <div className="flex-1">
                  <span className="text-base font-medium text-white sm:text-lg">
                    {item.title}
                  </span>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="h-1 w-20 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                        style={{ width: item.power }}
                      />
                    </div>
                    <span className="text-xs text-blue-400">{item.power}</span>
                  </div>
                </div>
                <div className={`flex h-8 w-8 items-center justify-center border transition-all duration-300 ${
                  openItems.includes(index)
                    ? 'border-blue-400 bg-blue-500/20 rotate-90'
                    : 'border-slate-700'
                }`}>
                  <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openItems.includes(index) ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="border-t border-blue-500/30 px-4 py-4 sm:px-5">
                  <p className="text-sm leading-relaxed text-blue-100/70 sm:text-base">
                    {item.content}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs">
                    <span className="text-slate-500">ID: {String(index + 1).padStart(4, '0')}</span>
                    <span className="text-slate-500">|</span>
                    <span className="text-blue-400">Access: Level 3+</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between border border-slate-800 bg-slate-900/50 p-4">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-slate-400">
              {openItems.length} modules expanded
            </span>
          </div>
          <button
            onClick={() => setOpenItems(openItems.length === items.length ? [] : items.map((_, i) => i))}
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            [{openItems.length === items.length ? 'COLLAPSE' : 'EXPAND'} ALL]
          </button>
        </div>
      </div>
    </div>
  );
}
