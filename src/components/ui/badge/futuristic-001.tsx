export default function FuturisticBadge() {
  return (
    <div className="min-h-screen bg-black p-8 space-y-10">
      {/* Cyber Status Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">System Status</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-mono text-gray-300 bg-gray-900 border border-gray-700 rounded-sm shadow-[0_0_10px_rgba(75,85,99,0.3)]">
            IDLE
          </span>
          <span className="px-3 py-1 text-xs font-mono text-cyan-400 bg-cyan-950/30 border border-cyan-500/50 rounded-sm shadow-[0_0_10px_rgba(6,182,212,0.4)]">
            ACTIVE
          </span>
          <span className="px-3 py-1 text-xs font-mono text-green-400 bg-green-950/30 border border-green-500/50 rounded-sm shadow-[0_0_10px_rgba(34,197,94,0.4)]">
            ONLINE
          </span>
          <span className="px-3 py-1 text-xs font-mono text-amber-400 bg-amber-950/30 border border-amber-500/50 rounded-sm shadow-[0_0_10px_rgba(245,158,11,0.4)]">
            STANDBY
          </span>
          <span className="px-3 py-1 text-xs font-mono text-red-400 bg-red-950/30 border border-red-500/50 rounded-sm shadow-[0_0_10px_rgba(239,68,68,0.4)]">
            ERROR
          </span>
        </div>
      </section>

      {/* Holographic Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">Hologram Mode</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-mono text-white bg-gradient-to-r from-gray-800 to-gray-900 rounded-sm shadow-lg">
            STANDARD
          </span>
          <span className="px-3 py-1 text-xs font-mono text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-sm shadow-[0_0_15px_rgba(6,182,212,0.6)]">
            QUANTUM
          </span>
          <span className="px-3 py-1 text-xs font-mono text-black bg-gradient-to-r from-green-400 to-emerald-400 rounded-sm shadow-[0_0_15px_rgba(34,197,94,0.6)]">
            NEURAL
          </span>
          <span className="px-3 py-1 text-xs font-mono text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-sm shadow-[0_0_15px_rgba(168,85,247,0.6)]">
            PLASMA
          </span>
          <span className="px-3 py-1 text-xs font-mono text-black bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 rounded-sm shadow-[0_0_15px_rgba(251,191,36,0.6)] animate-pulse">
            FUSION
          </span>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h3 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">Resolution</h3>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 text-[9px] font-mono text-cyan-400 bg-cyan-950/30 border border-cyan-500/50 rounded-sm">
            1X
          </span>
          <span className="px-3 py-1 text-xs font-mono text-cyan-400 bg-cyan-950/30 border border-cyan-500/50 rounded-sm">
            2X
          </span>
          <span className="px-4 py-1.5 text-sm font-mono text-cyan-400 bg-cyan-950/30 border border-cyan-500/50 rounded-sm">
            4X
          </span>
        </div>
      </section>

      {/* With Scanning Indicator */}
      <section className="space-y-3">
        <h3 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">Connection</h3>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-green-400 bg-green-950/30 border border-green-500/50 rounded-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            LINKED
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-amber-400 bg-amber-950/30 border border-amber-500/50 rounded-sm">
            <span className="w-2 h-2 bg-amber-500 rounded-sm animate-pulse" />
            SYNCING
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-gray-400 bg-gray-900 border border-gray-700 rounded-sm">
            <span className="w-2 h-2 bg-gray-500 rounded-sm" />
            OFFLINE
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-red-400 bg-red-950/30 border border-red-500/50 rounded-sm">
            <span className="w-2 h-2 bg-red-500 rounded-sm animate-pulse" />
            CRITICAL
          </span>
        </div>
      </section>

      {/* Tech Pills */}
      <section className="space-y-3">
        <h3 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">Technology</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-mono text-cyan-300 bg-gradient-to-r from-cyan-950/50 to-blue-950/50 border border-cyan-500/30 rounded-full backdrop-blur-sm">
            AI/ML
          </span>
          <span className="px-3 py-1 text-xs font-mono text-purple-300 bg-gradient-to-r from-purple-950/50 to-pink-950/50 border border-purple-500/30 rounded-full backdrop-blur-sm">
            QUANTUM
          </span>
          <span className="px-3 py-1 text-xs font-mono text-green-300 bg-gradient-to-r from-green-950/50 to-emerald-950/50 border border-green-500/30 rounded-full backdrop-blur-sm">
            BLOCKCHAIN
          </span>
          <span className="px-3 py-1 text-xs font-mono text-blue-300 bg-gradient-to-r from-blue-950/50 to-cyan-950/50 border border-blue-500/30 rounded-full backdrop-blur-sm">
            IoT
          </span>
        </div>
      </section>

      {/* Notification Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">Alerts</h3>
        <div className="flex items-center gap-6">
          <div className="relative inline-flex">
            <button className="p-2.5 text-cyan-400 bg-gray-900 border border-gray-700 rounded-sm hover:bg-gray-800 hover:border-cyan-500/50 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 text-[9px] font-mono font-bold text-black bg-cyan-400 rounded-sm flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.8)]">
              7
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-2.5 text-cyan-400 bg-gray-900 border border-gray-700 rounded-sm hover:bg-gray-800 hover:border-cyan-500/50 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-1.5 min-w-[18px] h-[18px] px-1 text-[9px] font-mono font-bold text-black bg-green-400 rounded-sm flex items-center justify-center shadow-[0_0_10px_rgba(34,197,94,0.8)]">
              42
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-2.5 text-cyan-400 bg-gray-900 border border-gray-700 rounded-sm hover:bg-gray-800 hover:border-cyan-500/50 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-2 min-w-[24px] h-[18px] px-1 text-[9px] font-mono font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-sm flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.8)] animate-pulse">
              999+
            </span>
          </div>
        </div>
      </section>

      {/* Removable Tech Tags */}
      <section className="space-y-3">
        <h3 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">Active Protocols</h3>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-cyan-400 bg-cyan-950/30 border border-cyan-500/50 rounded-sm">
            TCP/IP
            <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-purple-400 bg-purple-950/30 border border-purple-500/50 rounded-sm">
            HTTPS/3
            <button className="text-purple-400 hover:text-purple-300 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-green-400 bg-green-950/30 border border-green-500/50 rounded-sm">
            WebRTC
            <button className="text-green-400 hover:text-green-300 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
        </div>
      </section>

      {/* Binary Pattern Background Effect */}
      <section className="space-y-3">
        <h3 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">Data Stream</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-mono text-green-400 bg-black border border-green-500/50 rounded-sm shadow-[0_0_15px_rgba(34,197,94,0.3)] relative overflow-hidden">
            <span className="relative z-10">UPLOAD</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent animate-pulse"></span>
          </span>
          <span className="px-3 py-1 text-xs font-mono text-blue-400 bg-black border border-blue-500/50 rounded-sm shadow-[0_0_15px_rgba(59,130,246,0.3)] relative overflow-hidden">
            <span className="relative z-10">DOWNLOAD</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-pulse"></span>
          </span>
          <span className="px-3 py-1 text-xs font-mono text-purple-400 bg-black border border-purple-500/50 rounded-sm shadow-[0_0_15px_rgba(168,85,247,0.3)] relative overflow-hidden">
            <span className="relative z-10">PROCESSING</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-pulse"></span>
          </span>
        </div>
      </section>
    </div>
  )
}
