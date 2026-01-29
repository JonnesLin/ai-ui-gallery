export default function CyberpunkStatistic() {
  return (
    <div className="w-full min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative bg-black border border-cyan-500 p-6 overflow-hidden group hover:border-cyan-400 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl"></div>
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-cyan-500/20 border border-cyan-500 flex items-center justify-center">
                  <span className="text-cyan-500 text-lg">⚡</span>
                </div>
                <div className="text-cyan-500 text-xs font-mono uppercase tracking-wider">
                  [CREDITS]
                </div>
              </div>
              <div className="text-5xl font-black text-cyan-400 mb-2 font-mono">¥842K</div>
              <div className="flex items-center gap-2">
                <div className="bg-cyan-500/20 border border-cyan-500 px-2 py-1 text-cyan-400 text-xs font-mono">
                  ▲ 28.5%
                </div>
                <div className="text-cyan-500/60 text-xs font-mono">UPLINK</div>
              </div>
            </div>
          </div>

          <div className="relative bg-black border border-pink-500 p-6 overflow-hidden group hover:border-pink-400 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 blur-3xl"></div>
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-pink-500/20 border border-pink-500 flex items-center justify-center">
                  <span className="text-pink-500 text-lg">👁️</span>
                </div>
                <div className="text-pink-500 text-xs font-mono uppercase tracking-wider">
                  [USERS]
                </div>
              </div>
              <div className="text-5xl font-black text-pink-400 mb-2 font-mono">24.8K</div>
              <div className="flex items-center gap-2">
                <div className="bg-pink-500/20 border border-pink-500 px-2 py-1 text-pink-400 text-xs font-mono">
                  ▲ 42.1%
                </div>
                <div className="text-pink-500/60 text-xs font-mono">ONLINE</div>
              </div>
            </div>
          </div>

          <div className="relative bg-black border border-yellow-500 p-6 overflow-hidden group hover:border-yellow-400 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-3xl"></div>
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-yellow-500/20 border border-yellow-500 flex items-center justify-center">
                  <span className="text-yellow-500 text-lg">🔓</span>
                </div>
                <div className="text-yellow-500 text-xs font-mono uppercase tracking-wider">
                  [ACCESS]
                </div>
              </div>
              <div className="text-5xl font-black text-yellow-400 mb-2 font-mono">94.2%</div>
              <div className="flex items-center gap-2">
                <div className="bg-yellow-500/20 border border-yellow-500 px-2 py-1 text-yellow-400 text-xs font-mono">
                  ▲ 12.8%
                </div>
                <div className="text-yellow-500/60 text-xs font-mono">GRANTED</div>
              </div>
            </div>
          </div>

          <div className="relative bg-black border border-purple-500 p-6 overflow-hidden group hover:border-purple-400 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl"></div>
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-purple-500/20 border border-purple-500 flex items-center justify-center">
                  <span className="text-purple-500 text-lg">🧬</span>
                </div>
                <div className="text-purple-500 text-xs font-mono uppercase tracking-wider">
                  [NEURAL]
                </div>
              </div>
              <div className="text-5xl font-black text-purple-400 mb-2 font-mono">8,429</div>
              <div className="flex items-center gap-2">
                <div className="bg-purple-500/20 border border-purple-500 px-2 py-1 text-purple-400 text-xs font-mono">
                  ▼ 5.2%
                </div>
                <div className="text-purple-500/60 text-xs font-mono">SYNC</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 relative bg-black border border-green-500 p-8 overflow-hidden">
          <div className="absolute inset-0 bg-green-500/5 backdrop-blur-sm"></div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-green-500/10 blur-3xl"></div>
          <div className="relative">
            <div className="flex items-center gap-3 mb-8">
              <div className="text-3xl">🌐</div>
              <h3 className="text-2xl font-black text-green-400 font-mono uppercase tracking-wider">
                [SYSTEM_STATUS]
              </h3>
              <div className="ml-auto flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-500 text-xs font-mono">ACTIVE</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-500/10 border border-green-500 p-6">
                <div className="text-green-500 text-xs font-mono mb-2">&gt; BANDWIDTH</div>
                <div className="text-4xl font-black text-green-400 font-mono mb-1">2.84 TB</div>
                <div className="text-green-500/60 text-xs font-mono">TRANSFERRED</div>
              </div>
              <div className="bg-green-500/10 border border-green-500 p-6">
                <div className="text-green-500 text-xs font-mono mb-2">&gt; LATENCY</div>
                <div className="text-4xl font-black text-green-400 font-mono mb-1">12ms</div>
                <div className="text-green-500/60 text-xs font-mono">AVERAGE</div>
              </div>
              <div className="bg-green-500/10 border border-green-500 p-6">
                <div className="text-green-500 text-xs font-mono mb-2">&gt; UPTIME</div>
                <div className="text-4xl font-black text-green-400 font-mono mb-1">99.9%</div>
                <div className="text-green-500/60 text-xs font-mono">OPERATIONAL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}