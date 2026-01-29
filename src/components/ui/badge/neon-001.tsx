export default function NeonBadge() {
  return (
    <div className="min-h-screen bg-black p-8 space-y-10">
      {/* Neon Glow Status Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-widest text-pink-500 uppercase" style={{ textShadow: '0 0 10px rgba(236,72,153,0.8)' }}>Status</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1.5 text-xs font-bold text-gray-300 bg-gray-900 border border-gray-700 rounded-md shadow-[0_0_10px_rgba(156,163,175,0.3)]">
            DEFAULT
          </span>
          <span className="px-3 py-1.5 text-xs font-bold text-cyan-400 bg-cyan-950/50 border border-cyan-500 rounded-md shadow-[0_0_15px_rgba(34,211,238,0.6)]">
            ACTIVE
          </span>
          <span className="px-3 py-1.5 text-xs font-bold text-green-400 bg-green-950/50 border border-green-500 rounded-md shadow-[0_0_15px_rgba(34,197,94,0.6)]">
            SUCCESS
          </span>
          <span className="px-3 py-1.5 text-xs font-bold text-yellow-400 bg-yellow-950/50 border border-yellow-500 rounded-md shadow-[0_0_15px_rgba(234,179,8,0.6)]">
            WARNING
          </span>
          <span className="px-3 py-1.5 text-xs font-bold text-red-400 bg-red-950/50 border border-red-500 rounded-md shadow-[0_0_15px_rgba(239,68,68,0.6)]">
            ERROR
          </span>
        </div>
      </section>

      {/* Bright Neon Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-widest text-pink-500 uppercase" style={{ textShadow: '0 0 10px rgba(236,72,153,0.8)' }}>Neon Colors</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1.5 text-xs font-bold text-pink-400 bg-transparent border-2 border-pink-500 rounded-lg shadow-[0_0_20px_rgba(236,72,153,0.8),inset_0_0_10px_rgba(236,72,153,0.2)]">
            PINK
          </span>
          <span className="px-3 py-1.5 text-xs font-bold text-cyan-400 bg-transparent border-2 border-cyan-500 rounded-lg shadow-[0_0_20px_rgba(34,211,238,0.8),inset_0_0_10px_rgba(34,211,238,0.2)]">
            CYAN
          </span>
          <span className="px-3 py-1.5 text-xs font-bold text-purple-400 bg-transparent border-2 border-purple-500 rounded-lg shadow-[0_0_20px_rgba(168,85,247,0.8),inset_0_0_10px_rgba(168,85,247,0.2)]">
            PURPLE
          </span>
          <span className="px-3 py-1.5 text-xs font-bold text-green-400 bg-transparent border-2 border-green-500 rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.8),inset_0_0_10px_rgba(34,197,94,0.2)]">
            GREEN
          </span>
          <span className="px-3 py-1.5 text-xs font-bold text-yellow-400 bg-transparent border-2 border-yellow-500 rounded-lg shadow-[0_0_20px_rgba(234,179,8,0.8),inset_0_0_10px_rgba(234,179,8,0.2)]">
            YELLOW
          </span>
          <span className="px-3 py-1.5 text-xs font-bold text-orange-400 bg-transparent border-2 border-orange-500 rounded-lg shadow-[0_0_20px_rgba(249,115,22,0.8),inset_0_0_10px_rgba(249,115,22,0.2)]">
            ORANGE
          </span>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-widest text-pink-500 uppercase" style={{ textShadow: '0 0 10px rgba(236,72,153,0.8)' }}>Sizes</h3>
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 text-[10px] font-bold text-pink-400 bg-transparent border border-pink-500 rounded shadow-[0_0_8px_rgba(236,72,153,0.6)]">
            SMALL
          </span>
          <span className="px-3 py-1.5 text-xs font-bold text-pink-400 bg-transparent border-2 border-pink-500 rounded-lg shadow-[0_0_15px_rgba(236,72,153,0.8)]">
            MEDIUM
          </span>
          <span className="px-4 py-2 text-sm font-bold text-pink-400 bg-transparent border-2 border-pink-500 rounded-lg shadow-[0_0_20px_rgba(236,72,153,1)]">
            LARGE
          </span>
        </div>
      </section>

      {/* With Glowing Indicator */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-widest text-pink-500 uppercase" style={{ textShadow: '0 0 10px rgba(236,72,153,0.8)' }}>Live Status</h3>
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-green-400 bg-transparent border-2 border-green-500 rounded-lg shadow-[0_0_15px_rgba(34,197,94,0.8)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400 shadow-[0_0_8px_rgba(34,197,94,1)]"></span>
            </span>
            ONLINE
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-gray-400 bg-transparent border-2 border-gray-600 rounded-lg">
            <span className="w-2.5 h-2.5 bg-gray-500 rounded-full" />
            OFFLINE
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-yellow-400 bg-transparent border-2 border-yellow-500 rounded-lg shadow-[0_0_15px_rgba(234,179,8,0.8)]">
            <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full shadow-[0_0_8px_rgba(234,179,8,1)] animate-pulse" />
            AWAY
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-red-400 bg-transparent border-2 border-red-500 rounded-lg shadow-[0_0_15px_rgba(239,68,68,0.8)]">
            <span className="w-2.5 h-2.5 bg-red-400 rounded-full shadow-[0_0_8px_rgba(239,68,68,1)] animate-pulse" />
            BUSY
          </span>
        </div>
      </section>

      {/* Neon Pills */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-widest text-pink-500 uppercase" style={{ textShadow: '0 0 10px rgba(236,72,153,0.8)' }}>Categories</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-1.5 text-xs font-bold text-pink-400 bg-pink-950/30 border-2 border-pink-500 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.8)] backdrop-blur-sm">
            NIGHTCLUB
          </span>
          <span className="px-4 py-1.5 text-xs font-bold text-cyan-400 bg-cyan-950/30 border-2 border-cyan-500 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)] backdrop-blur-sm">
            ELECTRIC
          </span>
          <span className="px-4 py-1.5 text-xs font-bold text-purple-400 bg-purple-950/30 border-2 border-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.8)] backdrop-blur-sm">
            SYNTHWAVE
          </span>
          <span className="px-4 py-1.5 text-xs font-bold text-green-400 bg-green-950/30 border-2 border-green-500 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.8)] backdrop-blur-sm">
            MATRIX
          </span>
        </div>
      </section>

      {/* Count Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-widest text-pink-500 uppercase" style={{ textShadow: '0 0 10px rgba(236,72,153,0.8)' }}>Notifications</h3>
        <div className="flex items-center gap-6">
          <div className="relative inline-flex">
            <button className="p-3 text-cyan-400 bg-transparent border-2 border-cyan-500 rounded-lg hover:shadow-[0_0_25px_rgba(34,211,238,1)] transition-shadow shadow-[0_0_15px_rgba(34,211,238,0.6)]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 text-[10px] font-bold text-black bg-pink-400 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,1)] animate-pulse">
              9
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-3 text-purple-400 bg-transparent border-2 border-purple-500 rounded-lg hover:shadow-[0_0_25px_rgba(168,85,247,1)] transition-shadow shadow-[0_0_15px_rgba(168,85,247,0.6)]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-1.5 min-w-[20px] h-5 px-1.5 text-[10px] font-bold text-black bg-cyan-400 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,1)]">
              24
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-3 text-green-400 bg-transparent border-2 border-green-500 rounded-lg hover:shadow-[0_0_25px_rgba(34,197,94,1)] transition-shadow shadow-[0_0_15px_rgba(34,197,94,0.6)]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-2 min-w-[24px] h-5 px-1.5 text-[10px] font-bold text-black bg-yellow-400 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,1)]">
              99+
            </span>
          </div>
        </div>
      </section>

      {/* Removable Neon Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-widest text-pink-500 uppercase" style={{ textShadow: '0 0 10px rgba(236,72,153,0.8)' }}>Removable Tags</h3>
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-pink-400 bg-transparent border-2 border-pink-500 rounded-lg shadow-[0_0_15px_rgba(236,72,153,0.8)]">
            NEON
            <button className="text-pink-400 hover:text-pink-300 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-cyan-400 bg-transparent border-2 border-cyan-500 rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.8)]">
            GLOW
            <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-purple-400 bg-transparent border-2 border-purple-500 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.8)]">
            BRIGHT
            <button className="text-purple-400 hover:text-purple-300 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
        </div>
      </section>
    </div>
  )
}
