export default function RetroList() {
  const items = [
    { id: 1, title: 'Arcade Games Collection', year: '1985', icon: '🕹️', color: 'bg-pink-400' },
    { id: 2, title: 'Vinyl Records Archive', year: '1978', icon: '💿', color: 'bg-cyan-400' },
    { id: 3, title: 'Classic Movies Database', year: '1982', icon: '📼', color: 'bg-yellow-400' },
    { id: 4, title: 'Retro Computing Museum', year: '1990', icon: '💾', color: 'bg-green-400' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700 p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Retro Terminal List */}
        <section>
          <h2 className="text-green-400 font-mono text-2xl mb-6 border-4 border-green-400 bg-black p-4 shadow-[8px_8px_0px_0px_rgba(34,197,94,0.4)]">
            {'>'} MAIN_DIRECTORY.EXE
          </h2>
          <ul className="bg-black border-4 border-green-400 shadow-[8px_8px_0px_0px_rgba(34,197,94,0.4)]">
            {items.map((item, idx) => (
              <li
                key={item.id}
                className={`p-4 ${idx !== items.length - 1 ? 'border-b-2 border-green-400/30' : ''} hover:bg-green-400/20 transition-colors cursor-pointer font-mono`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-green-400 text-xl">[{idx + 1}]</span>
                  <span className="text-2xl">{item.icon}</span>
                  <div className="flex-1">
                    <div className="text-green-400 text-lg">{item.title}</div>
                    <div className="text-green-400/60 text-sm mt-1">EST. {item.year}</div>
                  </div>
                  <span className="text-green-400 animate-pulse">▶</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Colorful Retro Cards */}
        <section>
          <h2 className="text-white font-black text-3xl mb-6 uppercase" style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.5)' }}>
            Featured Collections
          </h2>
          <ul className="space-y-4">
            {items.slice(0, 3).map((item) => (
              <li
                key={item.id}
                className={`${item.color} border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{item.icon}</span>
                    <div>
                      <h3 className="text-black font-black text-xl" style={{ textShadow: '2px 2px 0px rgba(255,255,255,0.5)' }}>
                        {item.title}
                      </h3>
                      <p className="text-black/70 font-bold mt-1">Since {item.year}</p>
                    </div>
                  </div>
                  <div className="bg-black text-white px-4 py-2 font-black rotate-3">
                    NEW!
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Dotted Matrix Style */}
        <section>
          <div className="bg-amber-50 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-mono text-2xl mb-6 uppercase border-b-4 border-dotted border-black pb-3">
              SYSTEM_FILES.DIR
            </h3>
            <ul className="space-y-3">
              <li className="bg-white border-2 border-black p-4 font-mono">
                <div className="text-lg font-bold mb-2">└── ARCHIVES/</div>
                <ul className="space-y-1 pl-8 border-l-4 border-dotted border-black">
                  <li className="hover:bg-yellow-100 transition-colors cursor-pointer p-1">
                    ├── music.dat
                  </li>
                  <li className="hover:bg-yellow-100 transition-colors cursor-pointer p-1">
                    ├── games.dat
                  </li>
                  <li className="hover:bg-yellow-100 transition-colors cursor-pointer p-1">
                    └── media.dat
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* VHS Style List */}
        <section>
          <h2 className="text-white font-black text-3xl mb-6 uppercase tracking-wider">
            ◄◄ REWIND COLLECTION ►►
          </h2>
          <ul className="space-y-3">
            {items.map((item, idx) => (
              <li
                key={item.id}
                className="bg-gradient-to-r from-gray-900 to-gray-800 border-2 border-gray-600 p-5 hover:border-white transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 border-2 border-white flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg tracking-wide">{item.title}</div>
                      <div className="text-gray-400 text-sm font-mono mt-1">TAPE #{idx + 1} - {item.year}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse delay-75" />
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse delay-150" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Pixel Art Style */}
        <section>
          <div className="bg-indigo-900 border-4 border-cyan-400 p-6 shadow-[0_0_20px_rgba(34,211,238,0.5)]">
            <h3 className="text-cyan-400 font-mono text-xl mb-4 tracking-widest">
              ▓▓▓ GAME LIBRARY ▓▓▓
            </h3>
            <ul className="space-y-2">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="bg-black/40 border-2 border-cyan-400/50 p-3 hover:bg-cyan-400/20 hover:border-cyan-400 transition-all cursor-pointer font-mono"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-cyan-400">■ {item.title}</span>
                    </div>
                    <span className="text-pink-400 text-sm">SCORE: {Math.floor(Math.random() * 9000 + 1000)}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
