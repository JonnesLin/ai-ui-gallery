export default function CyberpunkCards() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] p-8 md:p-12 relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(#ff00ff 1px, transparent 1px), linear-gradient(90deg, #ff00ff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Glitch Profile Card */}
          <div className="bg-black/80 backdrop-blur-sm border border-cyan-500/50 p-6 relative group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-yellow-500" />
            <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-cyan-500 via-pink-500 to-yellow-500" />

            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src="https://picsum.photos/seed/cyber1/100/100"
                  alt="Avatar"
                  className="w-16 h-16 object-cover"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)' }}
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-cyan-500 animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-cyan-400 font-mono tracking-wider">NETRUNNER_X</h3>
                <p className="text-xs text-pink-500 font-mono">// ELITE HACKER</p>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-gray-500">REP:</span>
                <span className="text-cyan-400">████████░░ 82%</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-gray-500">CRED:</span>
                <span className="text-pink-500">§847,293</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-gray-500">STATUS:</span>
                <span className="text-green-400 animate-pulse">● ONLINE</span>
              </div>
            </div>

            <button className="mt-6 w-full py-2 border border-cyan-500 text-cyan-400 font-mono text-sm hover:bg-cyan-500/20 transition-colors relative overflow-hidden group">
              <span className="relative z-10">&lt;CONNECT/&gt;</span>
            </button>
          </div>

          {/* Data Stream Card */}
          <div className="bg-black/80 backdrop-blur-sm border border-pink-500/50 p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-2 bg-pink-500" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-pink-500" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-pink-500" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-pink-500" />

            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-pink-500 font-mono tracking-widest">// DATA_STREAM</span>
              <span className="text-xs text-gray-500 font-mono">v2.4.7</span>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-pink-500/10 border-l-2 border-pink-500">
                <p className="text-xs text-gray-400 font-mono">INCOMING TRANSMISSION</p>
                <p className="text-sm text-white font-mono mt-1">New job available in Sector 7</p>
                <p className="text-xs text-pink-500 font-mono mt-2">02:47:33 UTC</p>
              </div>
              <div className="p-3 bg-cyan-500/10 border-l-2 border-cyan-500">
                <p className="text-xs text-gray-400 font-mono">SYSTEM ALERT</p>
                <p className="text-sm text-white font-mono mt-1">Firewall breach detected</p>
                <p className="text-xs text-cyan-500 font-mono mt-2">02:45:12 UTC</p>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button className="flex-1 py-2 bg-pink-500/20 border border-pink-500/50 text-pink-400 font-mono text-xs hover:bg-pink-500/30 transition-colors">
                ACCEPT
              </button>
              <button className="flex-1 py-2 bg-transparent border border-gray-600 text-gray-400 font-mono text-xs hover:border-gray-400 transition-colors">
                IGNORE
              </button>
            </div>
          </div>

          {/* Stats HUD Card */}
          <div className="bg-black/80 backdrop-blur-sm border border-yellow-500/50 p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-yellow-500 animate-pulse" />
              <span className="text-xs text-yellow-500 font-mono tracking-widest">SYSTEM_STATS</span>
            </div>

            <div className="text-center mb-6">
              <p className="text-5xl font-bold text-yellow-400 font-mono">98.7%</p>
              <p className="text-xs text-gray-500 font-mono mt-1">EFFICIENCY RATING</p>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-gray-400">CPU LOAD</span>
                  <span className="text-cyan-400">67%</span>
                </div>
                <div className="h-2 bg-gray-800 overflow-hidden">
                  <div className="h-full w-[67%] bg-gradient-to-r from-cyan-500 to-cyan-400" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-gray-400">MEMORY</span>
                  <span className="text-pink-400">84%</span>
                </div>
                <div className="h-2 bg-gray-800 overflow-hidden">
                  <div className="h-full w-[84%] bg-gradient-to-r from-pink-500 to-pink-400" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-gray-400">BANDWIDTH</span>
                  <span className="text-yellow-400">45%</span>
                </div>
                <div className="h-2 bg-gray-800 overflow-hidden">
                  <div className="h-full w-[45%] bg-gradient-to-r from-yellow-500 to-yellow-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Neon Product Card */}
          <div className="lg:col-span-2 bg-black/80 backdrop-blur-sm border border-cyan-500/50 p-6 flex flex-col md:flex-row gap-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-pink-500/5" />

            <div className="md:w-1/2 relative">
              <img
                src="https://picsum.photos/seed/cyber2/400/300"
                alt="Product"
                className="w-full h-full object-cover"
                style={{
                  clipPath: 'polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0 95%)',
                  filter: 'hue-rotate(180deg) saturate(1.5)'
                }}
              />
              <div className="absolute top-2 left-2 px-2 py-1 bg-pink-500 text-xs font-mono font-bold">
                NEW
              </div>
            </div>

            <div className="md:w-1/2 flex flex-col justify-center relative">
              <span className="text-xs text-cyan-500 font-mono tracking-widest">// TECH_GEAR</span>
              <h3 className="mt-2 text-2xl font-bold text-white font-mono">NEURAL INTERFACE v3.0</h3>
              <p className="mt-2 text-sm text-gray-400 font-mono leading-relaxed">
                Direct brain-computer interface. 500ms latency. Military-grade encryption.
              </p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-pink-500 font-mono">§12,499</span>
                <span className="text-sm text-gray-500 font-mono line-through">§15,999</span>
              </div>
              <button className="mt-6 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-black font-mono font-bold hover:opacity-90 transition-opacity">
                &lt;ACQUIRE/&gt;
              </button>
            </div>
          </div>

          {/* Glitch Alert Card */}
          <div className="bg-black/80 backdrop-blur-sm border border-red-500/50 p-6 relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-red-500 animate-pulse" />

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border-2 border-red-500 flex items-center justify-center animate-pulse">
                <span className="text-red-500 font-mono text-2xl font-bold">!</span>
              </div>
              <div className="flex-1">
                <h3 className="text-red-500 font-mono font-bold">WARNING</h3>
                <p className="text-sm text-gray-400 font-mono mt-1">
                  Unauthorized access attempt detected. Countermeasures activated.
                </p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30">
              <p className="text-xs text-red-400 font-mono">
                &gt; TRACE_ORIGIN: 192.168.█.███<br />
                &gt; THREAT_LEVEL: HIGH<br />
                &gt; ACTION: BLOCKED
              </p>
            </div>

            <button className="mt-4 w-full py-2 border border-red-500 text-red-500 font-mono text-sm hover:bg-red-500/20 transition-colors">
              ACKNOWLEDGE
            </button>
          </div>

          {/* Holographic Price Card */}
          <div
            className="bg-black/80 backdrop-blur-sm p-6 relative overflow-hidden"
            style={{
              border: '1px solid transparent',
              backgroundImage: 'linear-gradient(black, black), linear-gradient(135deg, #00ffff, #ff00ff, #ffff00, #00ffff)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box'
            }}
          >
            <span className="text-xs text-cyan-400 font-mono tracking-widest">// PREMIUM_TIER</span>
            <h3 className="mt-4 text-xl font-bold text-white font-mono">CHROME ACCESS</h3>

            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent font-mono">
                §299
              </span>
              <span className="text-gray-500 font-mono">/cycle</span>
            </div>

            <ul className="mt-6 space-y-2">
              {['Unlimited bandwidth', 'Priority queue', 'Custom mods', 'Support 24/7'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-300 font-mono">
                  <span className="text-cyan-400">▸</span>
                  {item}
                </li>
              ))}
            </ul>

            <button
              className="mt-6 w-full py-3 font-mono font-bold text-black"
              style={{
                background: 'linear-gradient(135deg, #00ffff, #ff00ff)'
              }}
            >
              UPGRADE
            </button>
          </div>

          {/* Mission Card */}
          <div className="bg-black/80 backdrop-blur-sm border border-green-500/50 p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-green-500 font-mono tracking-widest">// ACTIVE_MISSION</span>
              <span className="text-xs text-green-400 font-mono animate-pulse">● LIVE</span>
            </div>

            <h3 className="text-lg font-bold text-white font-mono">DATA EXTRACTION</h3>
            <p className="text-sm text-gray-400 font-mono mt-2">
              Infiltrate Arasaka subnet. Extract classified files. Leave no trace.
            </p>

            <div className="mt-4 p-3 bg-green-500/10 border-l-2 border-green-500">
              <p className="text-xs text-gray-400 font-mono">PROGRESS</p>
              <div className="mt-2 h-2 bg-gray-800 overflow-hidden">
                <div className="h-full w-[73%] bg-gradient-to-r from-green-500 to-green-400 relative">
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-white animate-pulse" />
                </div>
              </div>
              <p className="text-xs text-green-400 font-mono mt-1">73% COMPLETE</p>
            </div>

            <div className="mt-4 flex justify-between text-xs font-mono text-gray-500">
              <span>REWARD: §45,000</span>
              <span>TIME: 02:34:17</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
