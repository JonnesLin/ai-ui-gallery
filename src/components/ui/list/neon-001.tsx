export default function NeonList() {
  const items = [
    { id: 1, title: 'Neon Nightclub Event', time: '22:00', status: 'live', color: 'pink', icon: '🎵' },
    { id: 2, title: 'Electric DJ Set', time: '23:30', status: 'upcoming', color: 'cyan', icon: '🎧' },
    { id: 3, title: 'Laser Light Show', time: '01:00', status: 'scheduled', color: 'purple', icon: '✨' },
    { id: 4, title: 'After Party Lounge', time: '03:00', status: 'pending', color: 'green', icon: '🍹' },
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Neon Glow List */}
        <section>
          <h2 className="text-pink-400 font-bold mb-6 text-2xl uppercase tracking-widest text-center" style={{
            textShadow: '0 0 10px rgb(244 114 182), 0 0 20px rgb(244 114 182), 0 0 30px rgb(244 114 182)'
          }}>
            Tonight's Events
          </h2>
          <ul className="bg-black border-2 border-pink-500 overflow-hidden" style={{
            boxShadow: '0 0 20px rgba(236, 72, 153, 0.5), inset 0 0 20px rgba(236, 72, 153, 0.1)'
          }}>
            {items.map((item, idx) => (
              <li
                key={item.id}
                className={`px-6 py-5 border-b-2 last:border-b-0 hover:bg-pink-500/10 transition-all cursor-pointer group relative ${
                  item.color === 'pink' ? 'border-pink-500' :
                  item.color === 'cyan' ? 'border-cyan-500' :
                  item.color === 'purple' ? 'border-purple-500' : 'border-green-500'
                }`}
              >
                <div className="flex items-center gap-5">
                  <div className={`w-16 h-16 border-2 rounded-lg flex items-center justify-center text-3xl ${
                    item.color === 'pink' ? 'border-pink-500 text-pink-400' :
                    item.color === 'cyan' ? 'border-cyan-500 text-cyan-400' :
                    item.color === 'purple' ? 'border-purple-500 text-purple-400' : 'border-green-500 text-green-400'
                  }`} style={{
                    boxShadow: item.color === 'pink' ? '0 0 15px rgba(236, 72, 153, 0.6)' :
                               item.color === 'cyan' ? '0 0 15px rgba(34, 211, 238, 0.6)' :
                               item.color === 'purple' ? '0 0 15px rgba(168, 85, 247, 0.6)' : '0 0 15px rgba(34, 197, 94, 0.6)'
                  }}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-bold text-lg mb-1 uppercase tracking-wide ${
                      item.color === 'pink' ? 'text-pink-400' :
                      item.color === 'cyan' ? 'text-cyan-400' :
                      item.color === 'purple' ? 'text-purple-400' : 'text-green-400'
                    }`} style={{
                      textShadow: item.color === 'pink' ? '0 0 10px rgb(236 72 153)' :
                                  item.color === 'cyan' ? '0 0 10px rgb(34 211 238)' :
                                  item.color === 'purple' ? '0 0 10px rgb(168 85 247)' : '0 0 10px rgb(34 197 94)'
                    }}>
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm font-mono">{item.time}</p>
                  </div>
                  <span className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border-2 ${
                    item.status === 'live'
                      ? 'bg-pink-500/20 text-pink-300 border-pink-500 animate-pulse'
                      : item.status === 'upcoming'
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500'
                      : 'bg-white/10 text-white/60 border-white/30'
                  }`} style={{
                    boxShadow: item.status === 'live' ? '0 0 15px rgba(236, 72, 153, 0.6)' :
                               item.status === 'upcoming' ? '0 0 15px rgba(34, 211, 238, 0.6)' : 'none'
                  }}>
                    {item.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Neon Cards */}
        <section>
          <h2 className="text-cyan-400 font-bold mb-6 text-2xl uppercase tracking-widest text-center" style={{
            textShadow: '0 0 10px rgb(34 211 238), 0 0 20px rgb(34 211 238)'
          }}>
            Featured Shows
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {items.slice(0, 3).map((item) => (
              <li
                key={item.id}
                className={`bg-black border-2 p-6 hover:scale-105 transition-all cursor-pointer ${
                  item.color === 'pink' ? 'border-pink-500' :
                  item.color === 'cyan' ? 'border-cyan-500' : 'border-purple-500'
                }`}
                style={{
                  boxShadow: item.color === 'pink' ? '0 0 25px rgba(236, 72, 153, 0.4), inset 0 0 25px rgba(236, 72, 153, 0.1)' :
                             item.color === 'cyan' ? '0 0 25px rgba(34, 211, 238, 0.4), inset 0 0 25px rgba(34, 211, 238, 0.1)' :
                             '0 0 25px rgba(168, 85, 247, 0.4), inset 0 0 25px rgba(168, 85, 247, 0.1)'
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 border-2 rounded-lg flex items-center justify-center text-4xl ${
                    item.color === 'pink' ? 'border-pink-500 text-pink-400' :
                    item.color === 'cyan' ? 'border-cyan-500 text-cyan-400' : 'border-purple-500 text-purple-400'
                  }`} style={{
                    boxShadow: item.color === 'pink' ? '0 0 20px rgba(236, 72, 153, 0.7)' :
                               item.color === 'cyan' ? '0 0 20px rgba(34, 211, 238, 0.7)' : '0 0 20px rgba(168, 85, 247, 0.7)'
                  }}>
                    {item.icon}
                  </div>
                  <span className="text-white/70 font-mono text-sm">{item.time}</span>
                </div>
                <h3 className={`font-bold text-xl mb-3 uppercase tracking-wide ${
                  item.color === 'pink' ? 'text-pink-400' :
                  item.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'
                }`} style={{
                  textShadow: item.color === 'pink' ? '0 0 10px rgb(236 72 153)' :
                              item.color === 'cyan' ? '0 0 10px rgb(34 211 238)' : '0 0 10px rgb(168 85 247)'
                }}>
                  {item.title}
                </h3>
                <button className={`w-full py-3 border-2 font-bold uppercase tracking-wider transition-all ${
                  item.color === 'pink' ? 'border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-black' :
                  item.color === 'cyan' ? 'border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black' :
                  'border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black'
                }`} style={{
                  boxShadow: item.color === 'pink' ? '0 0 15px rgba(236, 72, 153, 0.5)' :
                             item.color === 'cyan' ? '0 0 15px rgba(34, 211, 238, 0.5)' : '0 0 15px rgba(168, 85, 247, 0.5)'
                }}>
                  Get Tickets
                </button>
              </li>
            ))}
          </ul>
        </section>

        {/* Nested Neon List */}
        <section>
          <div className="bg-black border-2 border-purple-500 p-6" style={{
            boxShadow: '0 0 30px rgba(168, 85, 247, 0.4), inset 0 0 30px rgba(168, 85, 247, 0.1)'
          }}>
            <h3 className="text-purple-400 font-bold mb-6 text-xl uppercase tracking-wider" style={{
              textShadow: '0 0 10px rgb(168 85 247)'
            }}>
              Venue Zones
            </h3>
            <ul className="space-y-4">
              <li className="border-l-4 border-pink-500 pl-5 bg-pink-500/5 p-4">
                <div className="text-pink-400 font-bold mb-3 uppercase tracking-wide" style={{
                  textShadow: '0 0 8px rgb(236 72 153)'
                }}>
                  Main Stage
                </div>
                <ul className="space-y-2.5 pl-4">
                  <li className="text-white/70 hover:text-pink-400 transition-colors cursor-pointer flex items-center gap-2">
                    <span className="w-2 h-2 bg-pink-500 animate-pulse" style={{
                      boxShadow: '0 0 8px rgba(236, 72, 153, 0.8)'
                    }}></span>
                    Laser Show Area
                  </li>
                  <li className="text-white/70 hover:text-pink-400 transition-colors cursor-pointer flex items-center gap-2">
                    <span className="w-2 h-2 bg-pink-500 animate-pulse" style={{
                      boxShadow: '0 0 8px rgba(236, 72, 153, 0.8)'
                    }}></span>
                    DJ Booth
                  </li>
                  <li className="text-white/70 hover:text-pink-400 transition-colors cursor-pointer flex items-center gap-2">
                    <span className="w-2 h-2 bg-pink-500 animate-pulse" style={{
                      boxShadow: '0 0 8px rgba(236, 72, 153, 0.8)'
                    }}></span>
                    Dance Floor
                  </li>
                </ul>
              </li>
              <li className="border-l-4 border-cyan-500 pl-5 bg-cyan-500/5 p-4">
                <div className="text-cyan-400 font-bold mb-3 uppercase tracking-wide" style={{
                  textShadow: '0 0 8px rgb(34 211 238)'
                }}>
                  VIP Lounge
                </div>
                <ul className="space-y-2.5 pl-4">
                  <li className="text-white/70 hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-500 animate-pulse" style={{
                      boxShadow: '0 0 8px rgba(34, 211, 238, 0.8)'
                    }}></span>
                    Private Booths
                  </li>
                  <li className="text-white/70 hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-500 animate-pulse" style={{
                      boxShadow: '0 0 8px rgba(34, 211, 238, 0.8)'
                    }}></span>
                    Premium Bar
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* Neon Timeline */}
        <section>
          <h2 className="text-green-400 font-bold mb-6 text-2xl uppercase tracking-widest text-center" style={{
            textShadow: '0 0 10px rgb(34 197 94), 0 0 20px rgb(34 197 94)'
          }}>
            Night Schedule
          </h2>
          <ol className="bg-black border-2 border-green-500" style={{
            boxShadow: '0 0 25px rgba(34, 197, 94, 0.4)'
          }}>
            {['Doors Open', 'Opening Act', 'Main Event', 'After Party'].map((step, idx) => (
              <li
                key={idx}
                className="p-5 border-b-2 border-green-500/30 last:border-b-0 hover:bg-green-500/10 transition-all group"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-black border-2 border-green-500 text-green-400 font-bold flex items-center justify-center text-lg" style={{
                    boxShadow: '0 0 15px rgba(34, 197, 94, 0.7)'
                  }}>
                    {idx + 1}
                  </div>
                  <span className="text-green-400 font-bold text-lg uppercase tracking-wider" style={{
                    textShadow: '0 0 8px rgb(34 197 94)'
                  }}>
                    {step}
                  </span>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-green-500 to-transparent ml-4"></div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Neon Member List */}
        <section>
          <h2 className="text-purple-400 font-bold mb-6 text-2xl uppercase tracking-widest text-center" style={{
            textShadow: '0 0 10px rgb(168 85 247), 0 0 20px rgb(168 85 247)'
          }}>
            Guest List
          </h2>
          <ul className="bg-black border-2 border-purple-500" style={{
            boxShadow: '0 0 25px rgba(168, 85, 247, 0.4)'
          }}>
            {[
              { name: 'Alex Neon', status: 'VIP', table: '001' },
              { name: 'Maya Electric', status: 'Premium', table: '042' },
              { name: 'Jake Pulse', status: 'General', table: '128' },
            ].map((guest, idx) => (
              <li
                key={idx}
                className="px-6 py-5 border-b-2 border-purple-500/30 last:border-b-0 hover:bg-purple-500/10 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-black border-2 border-purple-500 text-purple-400 font-bold flex items-center justify-center text-lg" style={{
                      boxShadow: '0 0 15px rgba(168, 85, 247, 0.7)'
                    }}>
                      {guest.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-purple-400 font-bold text-lg uppercase tracking-wide" style={{
                        textShadow: '0 0 8px rgb(168 85 247)'
                      }}>
                        {guest.name}
                      </h3>
                      <p className="text-white/60 text-sm font-mono mt-1">Table #{guest.table}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border-2 ${
                      guest.status === 'VIP'
                        ? 'bg-pink-500/20 text-pink-400 border-pink-500'
                        : guest.status === 'Premium'
                        ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500'
                        : 'bg-white/10 text-white/60 border-white/30'
                    }`} style={{
                      boxShadow: guest.status === 'VIP' ? '0 0 12px rgba(236, 72, 153, 0.6)' :
                                 guest.status === 'Premium' ? '0 0 12px rgba(34, 211, 238, 0.6)' : 'none'
                    }}>
                      {guest.status}
                    </span>
                    <button className="px-5 py-2 border-2 border-purple-500 text-purple-400 font-bold uppercase text-sm tracking-wider hover:bg-purple-500 hover:text-black transition-all" style={{
                      boxShadow: '0 0 12px rgba(168, 85, 247, 0.5)'
                    }}>
                      Check In
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
