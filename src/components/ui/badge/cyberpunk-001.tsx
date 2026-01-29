export default function CyberpunkBadge() {
  return (
    <div className="min-h-screen bg-gray-950 p-8 space-y-10 font-mono">
      {/* Status Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-widest text-cyan-400 uppercase">&gt;&gt; Status</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 text-sm font-bold text-cyan-300 bg-cyan-950/50 border border-cyan-500 rounded-sm shadow-[0_0_10px_rgba(6,182,212,0.5)] hover:shadow-[0_0_20px_rgba(6,182,212,0.8)] transition-shadow">
            SYSTEM
          </span>
          <span className="px-3 py-1 text-sm font-bold text-pink-300 bg-pink-950/50 border border-pink-500 rounded-sm shadow-[0_0_10px_rgba(236,72,153,0.5)] hover:shadow-[0_0_20px_rgba(236,72,153,0.8)] transition-shadow">
            ACTIVE
          </span>
          <span className="px-3 py-1 text-sm font-bold text-green-300 bg-green-950/50 border border-green-500 rounded-sm shadow-[0_0_10px_rgba(34,197,94,0.5)] hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] transition-shadow">
            VERIFIED
          </span>
          <span className="px-3 py-1 text-sm font-bold text-yellow-300 bg-yellow-950/50 border border-yellow-500 rounded-sm shadow-[0_0_10px_rgba(234,179,8,0.5)] hover:shadow-[0_0_20px_rgba(234,179,8,0.8)] transition-shadow">
            WARNING
          </span>
          <span className="px-3 py-1 text-sm font-bold text-red-300 bg-red-950/50 border border-red-500 rounded-sm shadow-[0_0_10px_rgba(239,68,68,0.5)] hover:shadow-[0_0_20px_rgba(239,68,68,0.8)] transition-shadow">
            CRITICAL
          </span>
        </div>
      </section>

      {/* Glitch Effect */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-widest text-pink-400 uppercase">&gt;&gt; Glitch</h3>
        <div className="flex flex-wrap gap-3">
          <span className="relative px-3 py-1 text-sm font-bold text-cyan-300 bg-transparent border border-cyan-500 rounded-sm overflow-hidden group">
            <span className="relative z-10">NEURAL</span>
            <span className="absolute inset-0 bg-cyan-500/20 translate-x-full group-hover:translate-x-0 transition-transform" />
          </span>
          <span className="relative px-3 py-1 text-sm font-bold text-pink-300 bg-transparent border border-pink-500 rounded-sm overflow-hidden group">
            <span className="relative z-10">SYNTH</span>
            <span className="absolute inset-0 bg-pink-500/20 translate-x-full group-hover:translate-x-0 transition-transform" />
          </span>
          <span className="relative px-3 py-1 text-sm font-bold text-purple-300 bg-transparent border border-purple-500 rounded-sm overflow-hidden group">
            <span className="relative z-10">CYBER</span>
            <span className="absolute inset-0 bg-purple-500/20 translate-x-full group-hover:translate-x-0 transition-transform" />
          </span>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-widest text-cyan-400 uppercase">&gt;&gt; Sizes</h3>
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 text-xs font-bold text-cyan-300 bg-cyan-950/50 border border-cyan-500/70 rounded-sm">
            SM
          </span>
          <span className="px-3 py-1 text-sm font-bold text-cyan-300 bg-cyan-950/50 border border-cyan-500 rounded-sm shadow-[0_0_10px_rgba(6,182,212,0.3)]">
            MEDIUM
          </span>
          <span className="px-4 py-1.5 text-base font-bold text-cyan-300 bg-cyan-950/50 border-2 border-cyan-500 rounded-sm shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            LARGE
          </span>
        </div>
      </section>

      {/* With Dot */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-widest text-cyan-400 uppercase">&gt;&gt; Connection</h3>
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-bold text-cyan-300 bg-cyan-950/50 border border-cyan-500 rounded-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            ONLINE
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-bold text-cyan-300 bg-cyan-950/50 border border-cyan-500 rounded-sm">
            <span className="w-2 h-2 bg-gray-600 rounded-full" />
            OFFLINE
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-bold text-cyan-300 bg-cyan-950/50 border border-cyan-500 rounded-sm">
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
            SYNC
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-bold text-cyan-300 bg-cyan-950/50 border border-cyan-500 rounded-sm">
            <span className="w-2 h-2 bg-red-500 rounded-full" />
            ERROR
          </span>
        </div>
      </section>

      {/* Neon Tags */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-widest text-pink-400 uppercase">&gt;&gt; Neon</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-sm shadow-[0_0_20px_rgba(6,182,212,0.7)]">
            UPGRADE
          </span>
          <span className="px-3 py-1 text-sm font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-sm shadow-[0_0_20px_rgba(236,72,153,0.7)]">
            PREMIUM
          </span>
          <span className="px-3 py-1 text-sm font-bold text-white bg-gradient-to-r from-green-500 to-cyan-500 rounded-sm shadow-[0_0_20px_rgba(34,197,94,0.7)]">
            SECURE
          </span>
        </div>
      </section>

      {/* Count Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-widest text-cyan-400 uppercase">&gt;&gt; Count</h3>
        <div className="flex items-center gap-6">
          <div className="relative inline-flex">
            <button className="p-3 text-cyan-400 bg-gray-900 border border-cyan-500/50 rounded hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 text-xs font-bold text-white bg-pink-600 border border-pink-400 rounded-sm flex items-center justify-center shadow-[0_0_10px_rgba(236,72,153,0.7)]">
              7
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-3 text-cyan-400 bg-gray-900 border border-cyan-500/50 rounded hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-2 min-w-[24px] h-5 px-1.5 text-xs font-bold text-white bg-cyan-600 border border-cyan-400 rounded-sm flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.7)]">
              42
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-3 text-cyan-400 bg-gray-900 border border-cyan-500/50 rounded hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-2.5 min-w-[28px] h-5 px-1.5 text-xs font-bold text-white bg-green-600 border border-green-400 rounded-sm flex items-center justify-center shadow-[0_0_10px_rgba(34,197,94,0.7)]">
              99+
            </span>
          </div>
        </div>
      </section>

      {/* HUD Style */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-widest text-cyan-400 uppercase">&gt;&gt; HUD</h3>
        <div className="flex flex-wrap gap-3">
          <span className="relative px-4 py-1 text-sm font-bold text-cyan-300 border-l-2 border-r-2 border-cyan-500 bg-cyan-950/30">
            <span className="absolute top-0 left-0 w-2 h-[2px] bg-cyan-500" />
            <span className="absolute top-0 right-0 w-2 h-[2px] bg-cyan-500" />
            <span className="absolute bottom-0 left-0 w-2 h-[2px] bg-cyan-500" />
            <span className="absolute bottom-0 right-0 w-2 h-[2px] bg-cyan-500" />
            SECTOR_A
          </span>
          <span className="relative px-4 py-1 text-sm font-bold text-pink-300 border-l-2 border-r-2 border-pink-500 bg-pink-950/30">
            <span className="absolute top-0 left-0 w-2 h-[2px] bg-pink-500" />
            <span className="absolute top-0 right-0 w-2 h-[2px] bg-pink-500" />
            <span className="absolute bottom-0 left-0 w-2 h-[2px] bg-pink-500" />
            <span className="absolute bottom-0 right-0 w-2 h-[2px] bg-pink-500" />
            ZONE_X
          </span>
        </div>
      </section>

      {/* Removable Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-widest text-cyan-400 uppercase">&gt;&gt; Removable</h3>
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-bold text-cyan-300 bg-cyan-950/50 border border-cyan-500 rounded-sm">
            #REACT
            <button className="text-cyan-500 hover:text-pink-400 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-bold text-pink-300 bg-pink-950/50 border border-pink-500 rounded-sm">
            #TYPESCRIPT
            <button className="text-pink-500 hover:text-cyan-400 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-bold text-purple-300 bg-purple-950/50 border border-purple-500 rounded-sm">
            #TAILWIND
            <button className="text-purple-500 hover:text-cyan-400 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
        </div>
      </section>
    </div>
  )
}
