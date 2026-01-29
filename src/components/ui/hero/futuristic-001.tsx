export default function FuturisticHero() {
  return (
    <section className="min-h-screen bg-slate-950 relative overflow-hidden flex items-center justify-center px-6">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)'
        }}
      />

      {/* Floating tech elements */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-500/30 rounded-lg rotate-12 hidden lg:flex items-center justify-center">
        <div className="w-16 h-16 border border-cyan-500/50 rounded animate-spin" style={{ animationDuration: '10s' }} />
      </div>
      <div className="absolute bottom-32 right-20 w-24 h-24 border border-blue-500/30 rounded-full hidden lg:flex items-center justify-center">
        <div className="w-12 h-12 bg-blue-500/20 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Status indicator */}
        <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 border border-cyan-500/30 rounded-full bg-cyan-500/5 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span className="text-cyan-400 text-sm font-mono">SYSTEM ONLINE</span>
          </div>
          <div className="w-px h-4 bg-cyan-500/30" />
          <span className="text-slate-400 text-sm font-mono">v3.0.0</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
          <span className="block">The Future</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
            Is Now
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Harness the power of next-generation technology. Build, innovate, and transform
          with cutting-edge AI and quantum computing solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="group relative px-8 py-4 overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative font-semibold text-white flex items-center justify-center gap-2">
              Launch System
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
          <button className="px-8 py-4 border border-slate-700 text-slate-300 font-medium rounded-lg hover:bg-slate-800/50 hover:border-slate-600 transition-all">
            View Documentation
          </button>
        </div>

        {/* Tech specs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="p-4 border border-slate-800 rounded-lg bg-slate-900/50 backdrop-blur-sm">
            <div className="text-2xl font-bold text-cyan-400 font-mono mb-1">0.01ms</div>
            <div className="text-slate-500 text-sm">Latency</div>
          </div>
          <div className="p-4 border border-slate-800 rounded-lg bg-slate-900/50 backdrop-blur-sm">
            <div className="text-2xl font-bold text-blue-400 font-mono mb-1">99.99%</div>
            <div className="text-slate-500 text-sm">Uptime</div>
          </div>
          <div className="p-4 border border-slate-800 rounded-lg bg-slate-900/50 backdrop-blur-sm">
            <div className="text-2xl font-bold text-violet-400 font-mono mb-1">10PB+</div>
            <div className="text-slate-500 text-sm">Data Processed</div>
          </div>
          <div className="p-4 border border-slate-800 rounded-lg bg-slate-900/50 backdrop-blur-sm">
            <div className="text-2xl font-bold text-pink-400 font-mono mb-1">256-bit</div>
            <div className="text-slate-500 text-sm">Encryption</div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
