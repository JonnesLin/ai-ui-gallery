export default function RetroCards() {
  return (
    <div className="min-h-screen bg-[#1a1a2e] p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Arcade Card */}
          <div className="bg-[#16213e] rounded-lg border-4 border-[#0f3460] p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-pink-500 animate-pulse" />
              <span className="text-pink-500 font-mono text-sm uppercase tracking-widest">High Score</span>
            </div>
            <p className="text-5xl font-bold text-cyan-400 font-mono">999,999</p>
            <p className="text-purple-400 font-mono text-sm mt-2">PLAYER ONE</p>
            <div className="mt-6 grid grid-cols-3 gap-2">
              {['1ST', '2ND', '3RD'].map((place, i) => (
                <div key={place} className="text-center p-2 bg-[#0f3460] rounded">
                  <p className="text-xs text-gray-500 font-mono">{place}</p>
                  <p className="text-lg font-bold text-[#e94560] font-mono">{900000 - i * 50000}</p>
                </div>
              ))}
            </div>
          </div>

          {/* VHS Card */}
          <div className="bg-gradient-to-br from-[#2d1b4e] to-[#1a1a2e] rounded-lg p-6 border-2 border-purple-900">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-purple-400 font-mono tracking-widest">REC ●</span>
              <span className="text-xs text-purple-400 font-mono">00:42:16</span>
            </div>
            <div className="aspect-video bg-black rounded overflow-hidden relative mb-4">
              <img
                src="https://picsum.photos/seed/retro1/400/225"
                alt="VHS"
                className="w-full h-full object-cover opacity-80"
                style={{ filter: 'saturate(1.5) contrast(1.2)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
              <div className="absolute bottom-2 left-2 text-xs text-white font-mono">PLAY ▶</div>
            </div>
            <h3 className="text-lg font-bold text-pink-400 font-mono">Summer Memories '86</h3>
            <p className="text-sm text-purple-300 font-mono mt-1">Neon Dreams Collection</p>
          </div>

          {/* Cassette Card */}
          <div className="bg-[#f4d03f] rounded-lg p-6 border-4 border-[#c9a227]">
            <div className="bg-white rounded p-4 border-2 border-gray-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 rounded-full border-4 border-gray-800 flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-800 rounded-full" />
                </div>
                <div className="flex-1 h-1 bg-gray-800" />
                <div className="w-8 h-8 rounded-full border-4 border-gray-800 flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-800 rounded-full" />
                </div>
              </div>
              <div className="text-center">
                <p className="font-bold text-gray-800 text-sm uppercase">Side A</p>
                <p className="text-xs text-gray-600 mt-1">90 MIN</p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-bold text-gray-800">Synthwave Hits</h3>
              <p className="text-sm text-gray-700">Mixed Tape Vol. 3</p>
            </div>
          </div>

          {/* Pixel Art Profile */}
          <div className="bg-[#1f1f3d] rounded-lg p-6 border-4 border-[#4a4a8a]">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#4a4a8a] rounded-lg flex items-center justify-center">
                <img
                  src="https://picsum.photos/seed/retro2/64/64"
                  alt="Pixel Avatar"
                  className="w-12 h-12 rounded"
                  style={{ imageRendering: 'pixelated' }}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-cyan-400 font-mono">PLAYER_01</h3>
                <p className="text-sm text-pink-400 font-mono">LVL 42</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div>
                <div className="flex justify-between text-xs text-gray-400 font-mono mb-1">
                  <span>HP</span>
                  <span>85/100</span>
                </div>
                <div className="h-3 bg-[#4a4a8a] rounded-sm overflow-hidden">
                  <div className="h-full w-[85%] bg-gradient-to-r from-green-500 to-green-400" style={{ imageRendering: 'pixelated' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-gray-400 font-mono mb-1">
                  <span>EXP</span>
                  <span>7,240/10,000</span>
                </div>
                <div className="h-3 bg-[#4a4a8a] rounded-sm overflow-hidden">
                  <div className="h-full w-[72%] bg-gradient-to-r from-purple-500 to-pink-400" style={{ imageRendering: 'pixelated' }} />
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="flex-1 py-2 bg-cyan-500 text-[#1f1f3d] font-bold text-sm uppercase rounded font-mono hover:bg-cyan-400 transition-colors">
                Stats
              </button>
              <button className="flex-1 py-2 bg-pink-500 text-white font-bold text-sm uppercase rounded font-mono hover:bg-pink-400 transition-colors">
                Items
              </button>
            </div>
          </div>

          {/* Neon Sign Card */}
          <div className="lg:col-span-2 bg-[#0a0a0a] rounded-lg p-8 border-2 border-pink-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-cyan-500/10" />
            <div className="relative">
              <h3
                className="text-4xl md:text-5xl font-bold text-center"
                style={{
                  color: '#ff6b9d',
                  textShadow: '0 0 10px #ff6b9d, 0 0 20px #ff6b9d, 0 0 40px #ff6b9d'
                }}
              >
                OPEN 24/7
              </h3>
              <p className="text-center text-gray-400 font-mono mt-4 uppercase tracking-widest">
                The Future Is Now
              </p>
              <div className="mt-6 flex justify-center gap-4">
                <button
                  className="px-6 py-3 rounded font-bold uppercase font-mono text-sm"
                  style={{
                    color: '#00ffff',
                    border: '2px solid #00ffff',
                    boxShadow: '0 0 10px #00ffff, inset 0 0 10px rgba(0,255,255,0.1)'
                  }}
                >
                  Enter
                </button>
                <button
                  className="px-6 py-3 rounded font-bold uppercase font-mono text-sm"
                  style={{
                    color: '#ff6b9d',
                    border: '2px solid #ff6b9d',
                    boxShadow: '0 0 10px #ff6b9d, inset 0 0 10px rgba(255,107,157,0.1)'
                  }}
                >
                  Info
                </button>
              </div>
            </div>
          </div>

          {/* Retro Computer Card */}
          <div className="bg-[#c0c0c0] rounded-lg p-1 border-t-2 border-l-2 border-white border-r-2 border-b-2 border-r-gray-600 border-b-gray-600">
            <div className="bg-[#000080] p-2 flex items-center justify-between">
              <span className="text-white font-mono text-sm">system.exe</span>
              <div className="flex gap-1">
                <button className="w-4 h-4 bg-[#c0c0c0] border border-t-white border-l-white border-r-gray-600 border-b-gray-600 text-xs">_</button>
                <button className="w-4 h-4 bg-[#c0c0c0] border border-t-white border-l-white border-r-gray-600 border-b-gray-600 text-xs">□</button>
                <button className="w-4 h-4 bg-[#c0c0c0] border border-t-white border-l-white border-r-gray-600 border-b-gray-600 text-xs">×</button>
              </div>
            </div>
            <div className="bg-white p-4 border-2 border-t-gray-600 border-l-gray-600 border-r-white border-b-white">
              <p className="font-mono text-sm text-gray-800">C:\Users\Guest&gt;</p>
              <p className="font-mono text-sm text-green-600 mt-2">System Status: ONLINE</p>
              <p className="font-mono text-sm text-gray-600 mt-1">Memory: 640K</p>
              <p className="font-mono text-sm text-gray-600">Disk: 20MB</p>
              <div className="mt-4 flex gap-2">
                <button className="px-4 py-1 bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600 font-mono text-sm active:border-t-gray-600 active:border-l-gray-600 active:border-r-white active:border-b-white">
                  OK
                </button>
                <button className="px-4 py-1 bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600 font-mono text-sm active:border-t-gray-600 active:border-l-gray-600 active:border-r-white active:border-b-white">
                  Cancel
                </button>
              </div>
            </div>
          </div>

          {/* Disco Card */}
          <div
            className="rounded-lg p-6 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 25%, #48dbfb 50%, #ff9ff3 75%, #ff6b6b 100%)'
            }}
          >
            <div className="text-center text-white">
              <h3 className="text-3xl font-bold italic" style={{ textShadow: '2px 2px 0 #000' }}>DISCO NIGHT</h3>
              <p className="font-bold mt-2" style={{ textShadow: '1px 1px 0 #000' }}>Saturday 10PM</p>
              <div className="mt-6 space-y-2">
                <p className="text-sm font-bold" style={{ textShadow: '1px 1px 0 #000' }}>★ DJ MIXMASTER ★</p>
                <p className="text-sm" style={{ textShadow: '1px 1px 0 #000' }}>Special Guest Performance</p>
              </div>
              <button className="mt-6 px-6 py-2 bg-black text-white font-bold rounded-full hover:bg-white hover:text-black transition-colors">
                GET TICKETS
              </button>
            </div>
          </div>

          {/* Game Over Card */}
          <div className="bg-black rounded-lg p-6 border-4 border-red-600">
            <div className="text-center">
              <h3
                className="text-4xl font-bold text-red-500 font-mono animate-pulse"
                style={{ textShadow: '0 0 10px #ef4444' }}
              >
                GAME OVER
              </h3>
              <p className="text-gray-400 font-mono mt-4">FINAL SCORE</p>
              <p className="text-5xl font-bold text-white font-mono mt-2">847,320</p>
              <div className="mt-6 space-y-2">
                <button className="w-full py-3 bg-red-600 text-white font-bold font-mono uppercase hover:bg-red-500 transition-colors">
                  Continue?
                </button>
                <p className="text-xs text-gray-500 font-mono">INSERT COIN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
