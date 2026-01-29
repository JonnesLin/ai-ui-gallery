export default function CyberpunkList() {
  const items = [
    { id: 1, title: 'Neural Interface v2.1', status: 'ONLINE', threat: 'LOW', icon: '🧠', color: 'cyan' },
    { id: 2, title: 'Quantum Processor', status: 'ACTIVE', threat: 'MEDIUM', icon: '⚡', color: 'purple' },
    { id: 3, title: 'Holographic Display', status: 'STANDBY', threat: 'LOW', icon: '👁️', color: 'pink' },
    { id: 4, title: 'Cyber Defense Grid', status: 'ARMED', threat: 'HIGH', icon: '🛡️', color: 'red' },
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Neon Grid List */}
        <section>
          <h2 className="text-cyan-400 font-mono text-2xl mb-6 uppercase tracking-widest border-l-4 border-cyan-400 pl-4 shadow-[0_0_10px_rgba(34,211,238,0.5)]">
            {'// SYSTEM MODULES'}
          </h2>
          <ul className="space-y-1">
            {items.map((item) => (
              <li
                key={item.id}
                className="bg-gradient-to-r from-gray-900 to-black border border-cyan-400/30 p-5 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform">{item.icon}</div>
                    <div>
                      <div className="text-cyan-400 font-mono text-lg tracking-wide">{item.title}</div>
                      <div className="text-gray-500 text-xs font-mono mt-1">ID: {String(item.id).padStart(4, '0')}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 border font-mono text-xs ${
                      item.status === 'ONLINE' ? 'border-green-400 text-green-400' :
                      item.status === 'ACTIVE' ? 'border-cyan-400 text-cyan-400' :
                      item.status === 'ARMED' ? 'border-red-400 text-red-400' :
                      'border-yellow-400 text-yellow-400'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Holographic Cards */}
        <section>
          <h2 className="text-pink-500 font-mono text-2xl mb-6 uppercase tracking-widest">
            {'<'} THREAT ANALYSIS {'>'}
          </h2>
          <ul className="space-y-4">
            {items.slice(0, 3).map((item) => (
              <li
                key={item.id}
                className="relative bg-black border-2 border-purple-500/50 p-6 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all cursor-pointer group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 border-2 border-purple-500 flex items-center justify-center text-3xl group-hover:animate-pulse">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-purple-400 font-mono text-xl tracking-wide">{item.title}</h3>
                      <p className="text-gray-500 text-sm font-mono mt-1">THREAT LEVEL: {item.threat}</p>
                    </div>
                  </div>
                  <div className={`px-4 py-2 font-mono text-sm border-2 ${
                    item.threat === 'HIGH' ? 'border-red-500 text-red-500' :
                    item.threat === 'MEDIUM' ? 'border-yellow-500 text-yellow-500' :
                    'border-green-500 text-green-500'
                  }`}>
                    {item.threat}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Matrix Style Nested */}
        <section>
          <div className="bg-black border-2 border-green-400 p-6 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
            <h3 className="text-green-400 font-mono text-xl mb-4 tracking-widest">
              {'>'} DIRECTORY_TREE.SYS
            </h3>
            <ul className="space-y-3">
              <li className="border-l-2 border-green-400/50 pl-4 hover:border-green-400 transition-colors">
                <div className="text-green-400 font-mono mb-2">└─ ROOT/SYSTEM/</div>
                <ul className="space-y-1 pl-4 border-l border-green-400/30">
                  <li className="text-green-400/70 font-mono text-sm hover:text-green-400 cursor-pointer">
                    ├─ neural_core.exe
                  </li>
                  <li className="text-green-400/70 font-mono text-sm hover:text-green-400 cursor-pointer">
                    ├─ quantum_link.dll
                  </li>
                  <li className="text-green-400/70 font-mono text-sm hover:text-green-400 cursor-pointer">
                    └─ defense_matrix.sys
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* Glitch Effect List */}
        <section>
          <h2 className="text-red-500 font-mono text-2xl mb-6 uppercase tracking-widest">
            [!] CRITICAL SYSTEMS
          </h2>
          <ul className="bg-gray-900 border border-red-500/30">
            {items.map((item, idx) => (
              <li
                key={item.id}
                className={`p-5 ${idx !== items.length - 1 ? 'border-b border-red-500/20' : ''} hover:bg-red-500/10 transition-all cursor-pointer group`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-red-400 font-mono tracking-wide group-hover:animate-pulse">
                      {item.title}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse delay-75" />
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse delay-150" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Hexagonal Progress List */}
        <section>
          <h2 className="text-cyan-400 font-mono text-2xl mb-6 uppercase tracking-widest">
            {'[>'} LOADING PROTOCOLS
          </h2>
          <ul className="space-y-4">
            {items.map((item, idx) => (
              <li
                key={item.id}
                className="bg-gradient-to-r from-black to-gray-900 border border-cyan-400/30 p-5 hover:border-cyan-400 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-cyan-400 font-mono">{item.title}</span>
                  </div>
                  <span className="text-cyan-400 font-mono text-sm">{(idx + 1) * 25}%</span>
                </div>
                <div className="w-full bg-gray-800 h-1 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                    style={{ width: `${(idx + 1) * 25}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
