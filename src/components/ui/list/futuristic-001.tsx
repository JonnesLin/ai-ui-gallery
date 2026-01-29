export default function FuturisticList() {
  const items = [
    { id: 1, title: 'Neural Network Training', time: '08:00', status: 'active', progress: 87, icon: '🧠' },
    { id: 2, title: 'Quantum Algorithm Test', time: '10:30', status: 'queued', progress: 0, icon: '⚛️' },
    { id: 3, title: 'AI Model Deployment', time: '14:00', status: 'pending', progress: 42, icon: '🤖' },
    { id: 4, title: 'Data Synchronization', time: '16:45', status: 'scheduled', progress: 0, icon: '🔄' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Holographic List */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <h2 className="text-cyan-400 font-bold text-lg tracking-wider uppercase">System Tasks</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          </div>
          <ul className="bg-slate-900/50 border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.1)] overflow-hidden">
            {items.map((item, idx) => (
              <li
                key={item.id}
                className="px-6 py-5 border-b border-cyan-500/20 last:border-b-0 hover:bg-cyan-500/10 hover:shadow-[inset_0_0_20px_rgba(6,182,212,0.1)] transition-all cursor-pointer relative group"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-sm flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-cyan-100 font-semibold tracking-wide">{item.title}</h3>
                      <span className="text-cyan-400/60 text-xs font-mono">{item.time}</span>
                    </div>
                    {item.progress > 0 && (
                      <div className="relative h-1.5 bg-slate-800 overflow-hidden">
                        <div
                          className="absolute h-full bg-gradient-to-r from-cyan-400 to-blue-600 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                  <span
                    className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider border ${
                      item.status === 'active'
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                        : item.status === 'queued'
                        ? 'bg-blue-500/20 text-blue-300 border-blue-500/50'
                        : 'bg-slate-800/50 text-slate-400 border-slate-600/50'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Grid Cards */}
        <section>
          <h2 className="text-cyan-400 font-bold mb-4 text-lg tracking-wider uppercase">Active Processes</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.slice(0, 3).map((item) => (
              <li
                key={item.id}
                className="bg-slate-900/50 border border-cyan-500/30 p-6 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-all cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent blur-2xl group-hover:scale-150 transition-transform"></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 flex items-center justify-center text-3xl">
                      {item.icon}
                    </div>
                    <div className="text-cyan-400 font-mono text-sm">{item.time}</div>
                  </div>
                  <h3 className="text-cyan-100 font-semibold text-lg mb-3">{item.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="text-cyan-400/60 text-xs uppercase tracking-wider">{item.status}</div>
                    {item.progress > 0 && (
                      <div className="text-cyan-400 font-mono text-sm">{item.progress}%</div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Nested Tech List */}
        <section>
          <div className="bg-slate-900/50 border border-cyan-500/30 p-6 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
            <h3 className="text-cyan-400 font-bold mb-6 tracking-wider uppercase flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 animate-pulse"></div>
              System Modules
            </h3>
            <ul className="space-y-4">
              <li className="border-l-2 border-cyan-500 pl-5 bg-cyan-500/5 p-4">
                <div className="text-cyan-300 font-semibold mb-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400"></div>
                  Core Systems
                </div>
                <ul className="space-y-2.5 pl-4">
                  <li className="text-cyan-100/60 text-sm hover:text-cyan-100 hover:translate-x-1 transition-all cursor-pointer flex items-center gap-2">
                    <div className="w-1 h-1 bg-cyan-500"></div>
                    Authentication Layer
                  </li>
                  <li className="text-cyan-100/60 text-sm hover:text-cyan-100 hover:translate-x-1 transition-all cursor-pointer flex items-center gap-2">
                    <div className="w-1 h-1 bg-cyan-500"></div>
                    Database Engine
                  </li>
                  <li className="text-cyan-100/60 text-sm hover:text-cyan-100 hover:translate-x-1 transition-all cursor-pointer flex items-center gap-2">
                    <div className="w-1 h-1 bg-cyan-500"></div>
                    Network Protocol
                  </li>
                </ul>
              </li>
              <li className="border-l-2 border-blue-500 pl-5 bg-blue-500/5 p-4">
                <div className="text-blue-300 font-semibold mb-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400"></div>
                  AI Modules
                </div>
                <ul className="space-y-2.5 pl-4">
                  <li className="text-cyan-100/60 text-sm hover:text-cyan-100 hover:translate-x-1 transition-all cursor-pointer flex items-center gap-2">
                    <div className="w-1 h-1 bg-blue-500"></div>
                    Neural Processing
                  </li>
                  <li className="text-cyan-100/60 text-sm hover:text-cyan-100 hover:translate-x-1 transition-all cursor-pointer flex items-center gap-2">
                    <div className="w-1 h-1 bg-blue-500"></div>
                    Pattern Recognition
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* Ordered System List */}
        <section>
          <h2 className="text-cyan-400 font-bold mb-4 text-lg tracking-wider uppercase">Boot Sequence</h2>
          <ol className="bg-slate-900/50 border border-cyan-500/30">
            {['Initialize Core', 'Load Modules', 'Connect Network', 'Start Services'].map((step, idx) => (
              <li
                key={idx}
                className="p-5 border-b border-cyan-500/20 last:border-b-0 hover:bg-cyan-500/5 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-shadow">
                    {idx + 1}
                  </div>
                  <span className="text-cyan-100 font-semibold tracking-wide">{step}</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/50 to-transparent ml-4"></div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* List with Tech Actions */}
        <section>
          <h2 className="text-cyan-400 font-bold mb-4 text-lg tracking-wider uppercase">Connected Devices</h2>
          <ul className="bg-slate-900/50 border border-cyan-500/30">
            {[
              { name: 'Workstation Alpha', id: 'WS-001', status: 'online' },
              { name: 'Server Node Beta', id: 'SN-042', status: 'online' },
              { name: 'Terminal Gamma', id: 'TM-128', status: 'offline' },
            ].map((device, idx) => (
              <li
                key={idx}
                className="px-6 py-5 border-b border-cyan-500/20 last:border-b-0 hover:bg-cyan-500/5 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-800 border border-cyan-500/40 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs">
                      {device.id}
                    </div>
                    <div>
                      <h3 className="text-cyan-100 font-semibold">{device.name}</h3>
                      <p className="text-cyan-400/60 text-sm font-mono">{device.id}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${device.status === 'online' ? 'bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]' : 'bg-slate-600'}`}></div>
                      <span className={`text-xs uppercase tracking-wider font-bold ${device.status === 'online' ? 'text-cyan-400' : 'text-slate-500'}`}>
                        {device.status}
                      </span>
                    </div>
                    <button
                      className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border transition-all ${
                        device.status === 'online'
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 hover:bg-cyan-500/30'
                          : 'bg-slate-800/50 text-slate-500 border-slate-600/50 cursor-not-allowed'
                      }`}
                      disabled={device.status === 'offline'}
                    >
                      Access
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
