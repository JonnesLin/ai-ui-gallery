export default function LuxuryBadge() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black p-8 space-y-10">
      {/* Premium Status Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-light tracking-[0.2em] text-amber-200/70 uppercase">Membership Tier</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-1.5 text-xs font-medium tracking-wide text-gray-300 bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600/50 rounded backdrop-blur-sm shadow-lg">
            STANDARD
          </span>
          <span className="px-4 py-1.5 text-xs font-medium tracking-wide text-blue-200 bg-gradient-to-r from-blue-900/50 to-blue-800/50 border border-blue-500/30 rounded backdrop-blur-sm shadow-lg shadow-blue-900/20">
            PREMIUM
          </span>
          <span className="px-4 py-1.5 text-xs font-medium tracking-wide text-amber-200 bg-gradient-to-r from-amber-900/50 to-yellow-900/50 border border-amber-500/40 rounded backdrop-blur-sm shadow-lg shadow-amber-900/30">
            ELITE
          </span>
          <span className="px-4 py-1.5 text-xs font-medium tracking-wide text-purple-200 bg-gradient-to-r from-purple-900/50 to-violet-900/50 border border-purple-500/40 rounded backdrop-blur-sm shadow-lg shadow-purple-900/30">
            PLATINUM
          </span>
          <span className="px-4 py-1.5 text-xs font-medium tracking-wide text-yellow-100 bg-gradient-to-r from-yellow-700/60 to-amber-600/60 border border-yellow-400/50 rounded backdrop-blur-sm shadow-[0_0_20px_rgba(250,204,21,0.3)]">
            DIAMOND
          </span>
        </div>
      </section>

      {/* Elegant Solid Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-light tracking-[0.2em] text-amber-200/70 uppercase">Collection Status</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-1.5 text-xs font-medium tracking-wide text-white bg-gradient-to-br from-gray-700 to-gray-800 rounded shadow-xl">
            CLASSIC
          </span>
          <span className="px-4 py-1.5 text-xs font-medium tracking-wide text-white bg-gradient-to-br from-emerald-700 to-emerald-900 rounded shadow-xl shadow-emerald-900/40">
            SIGNATURE
          </span>
          <span className="px-4 py-1.5 text-xs font-medium tracking-wide text-white bg-gradient-to-br from-amber-600 to-amber-800 rounded shadow-xl shadow-amber-900/40">
            LIMITED
          </span>
          <span className="px-4 py-1.5 text-xs font-medium tracking-wide text-white bg-gradient-to-br from-rose-700 to-rose-900 rounded shadow-xl shadow-rose-900/40">
            EXCLUSIVE
          </span>
          <span className="px-4 py-1.5 text-xs font-medium tracking-wide text-black bg-gradient-to-br from-yellow-400 via-yellow-300 to-amber-400 rounded shadow-[0_0_30px_rgba(250,204,21,0.4)]">
            PRESTIGE
          </span>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h3 className="text-xs font-light tracking-[0.2em] text-amber-200/70 uppercase">Proportions</h3>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 text-[10px] font-medium tracking-wider text-amber-200 bg-gradient-to-r from-amber-900/40 to-yellow-900/40 border border-amber-500/30 rounded">
            PETITE
          </span>
          <span className="px-4 py-1.5 text-xs font-medium tracking-wide text-amber-200 bg-gradient-to-r from-amber-900/40 to-yellow-900/40 border border-amber-500/30 rounded">
            STANDARD
          </span>
          <span className="px-5 py-2 text-sm font-medium tracking-wide text-amber-200 bg-gradient-to-r from-amber-900/40 to-yellow-900/40 border border-amber-500/30 rounded">
            GRANDE
          </span>
        </div>
      </section>

      {/* With Indicator */}
      <section className="space-y-3">
        <h3 className="text-xs font-light tracking-[0.2em] text-amber-200/70 uppercase">Availability</h3>
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 text-xs font-medium tracking-wide text-emerald-200 bg-gradient-to-r from-emerald-900/40 to-green-900/40 border border-emerald-500/30 rounded backdrop-blur-sm">
            <span className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            AVAILABLE
          </span>
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 text-xs font-medium tracking-wide text-amber-200 bg-gradient-to-r from-amber-900/40 to-yellow-900/40 border border-amber-500/30 rounded backdrop-blur-sm">
            <span className="w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
            RESERVED
          </span>
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 text-xs font-medium tracking-wide text-gray-300 bg-gradient-to-r from-gray-800/40 to-gray-700/40 border border-gray-500/30 rounded backdrop-blur-sm">
            <span className="w-2 h-2 bg-gray-400 rounded-full" />
            SOLD OUT
          </span>
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 text-xs font-medium tracking-wide text-purple-200 bg-gradient-to-r from-purple-900/40 to-violet-900/40 border border-purple-500/30 rounded backdrop-blur-sm">
            <span className="w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_8px_rgba(192,132,252,0.6)]" />
            VIP ONLY
          </span>
        </div>
      </section>

      {/* Premium Pills */}
      <section className="space-y-3">
        <h3 className="text-xs font-light tracking-[0.2em] text-amber-200/70 uppercase">Categories</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-5 py-1.5 text-xs font-medium tracking-widest text-amber-100 bg-gradient-to-r from-amber-800/60 to-yellow-800/60 border border-amber-400/40 rounded-full shadow-lg shadow-amber-900/30">
            HAUTE COUTURE
          </span>
          <span className="px-5 py-1.5 text-xs font-medium tracking-widest text-blue-100 bg-gradient-to-r from-blue-900/60 to-cyan-900/60 border border-blue-400/40 rounded-full shadow-lg shadow-blue-900/30">
            FINE JEWELRY
          </span>
          <span className="px-5 py-1.5 text-xs font-medium tracking-widest text-purple-100 bg-gradient-to-r from-purple-900/60 to-violet-900/60 border border-purple-400/40 rounded-full shadow-lg shadow-purple-900/30">
            TIMEPIECES
          </span>
        </div>
      </section>

      {/* Notification Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-light tracking-[0.2em] text-amber-200/70 uppercase">Alerts</h3>
        <div className="flex items-center gap-6">
          <div className="relative inline-flex">
            <button className="p-3 text-amber-200 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 rounded-lg shadow-xl hover:from-gray-700 hover:to-gray-800 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 text-[10px] font-bold text-black bg-gradient-to-br from-yellow-400 to-amber-400 rounded-full shadow-[0_0_12px_rgba(250,204,21,0.6)] flex items-center justify-center">
              3
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-3 text-amber-200 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 rounded-lg shadow-xl hover:from-gray-700 hover:to-gray-800 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-1.5 min-w-[20px] h-5 px-1.5 text-[10px] font-bold text-white bg-gradient-to-br from-rose-600 to-rose-700 rounded-full shadow-lg shadow-rose-900/40 flex items-center justify-center">
              8
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-3 text-amber-200 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 rounded-lg shadow-xl hover:from-gray-700 hover:to-gray-800 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-2 min-w-[24px] h-5 px-1.5 text-[10px] font-bold text-black bg-gradient-to-br from-yellow-400 to-amber-400 rounded-full shadow-[0_0_12px_rgba(250,204,21,0.6)] flex items-center justify-center">
              VIP
            </span>
          </div>
        </div>
      </section>

      {/* Removable Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-light tracking-[0.2em] text-amber-200/70 uppercase">Preferences</h3>
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium tracking-wide text-amber-200 bg-gradient-to-r from-amber-900/40 to-yellow-900/40 border border-amber-500/30 rounded backdrop-blur-sm">
            ELEGANCE
            <button className="text-amber-400/70 hover:text-amber-200 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium tracking-wide text-blue-200 bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded backdrop-blur-sm">
            SOPHISTICATION
            <button className="text-blue-400/70 hover:text-blue-200 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium tracking-wide text-purple-200 bg-gradient-to-r from-purple-900/40 to-violet-900/40 border border-purple-500/30 rounded backdrop-blur-sm">
            REFINEMENT
            <button className="text-purple-400/70 hover:text-purple-200 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
        </div>
      </section>
    </div>
  )
}
