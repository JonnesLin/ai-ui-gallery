export default function MonochromeBadge() {
  return (
    <div className="min-h-screen bg-neutral-100 p-8 space-y-10">
      {/* Grayscale Status Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-wider text-neutral-900 uppercase">Status</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-semibold text-neutral-600 bg-white border border-neutral-300 rounded">
            Default
          </span>
          <span className="px-3 py-1 text-xs font-semibold text-neutral-700 bg-neutral-100 border border-neutral-400 rounded">
            Active
          </span>
          <span className="px-3 py-1 text-xs font-semibold text-neutral-800 bg-neutral-200 border border-neutral-500 rounded">
            Processing
          </span>
          <span className="px-3 py-1 text-xs font-semibold text-neutral-900 bg-neutral-300 border border-neutral-600 rounded">
            Warning
          </span>
          <span className="px-3 py-1 text-xs font-semibold text-white bg-neutral-800 border border-neutral-900 rounded">
            Error
          </span>
        </div>
      </section>

      {/* Black and White Solid Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-wider text-neutral-900 uppercase">Solid Variants</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-semibold text-white bg-black rounded shadow-md">
            Black
          </span>
          <span className="px-3 py-1 text-xs font-semibold text-white bg-neutral-800 rounded shadow-md">
            Dark
          </span>
          <span className="px-3 py-1 text-xs font-semibold text-white bg-neutral-600 rounded shadow-md">
            Gray
          </span>
          <span className="px-3 py-1 text-xs font-semibold text-neutral-900 bg-neutral-400 rounded shadow-md">
            Light
          </span>
          <span className="px-3 py-1 text-xs font-semibold text-neutral-900 bg-neutral-200 rounded shadow-md">
            Lighter
          </span>
          <span className="px-3 py-1 text-xs font-semibold text-neutral-900 bg-white border border-neutral-300 rounded shadow-md">
            White
          </span>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-wider text-neutral-900 uppercase">Sizes</h3>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 text-[10px] font-semibold text-neutral-700 bg-white border border-neutral-400 rounded">
            XS
          </span>
          <span className="px-3 py-1 text-xs font-semibold text-neutral-700 bg-white border border-neutral-400 rounded">
            SM
          </span>
          <span className="px-4 py-1.5 text-sm font-semibold text-neutral-700 bg-white border border-neutral-400 rounded">
            MD
          </span>
          <span className="px-5 py-2 text-base font-semibold text-neutral-700 bg-white border border-neutral-400 rounded">
            LG
          </span>
        </div>
      </section>

      {/* With Indicator Dots */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-wider text-neutral-900 uppercase">Status Indicators</h3>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-neutral-900 bg-white border border-neutral-400 rounded">
            <span className="w-2 h-2 bg-neutral-900 rounded-full" />
            Online
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-neutral-600 bg-white border border-neutral-300 rounded">
            <span className="w-2 h-2 bg-neutral-400 rounded-full" />
            Offline
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-neutral-700 bg-white border border-neutral-400 rounded">
            <span className="w-2 h-2 bg-neutral-600 rounded-full animate-pulse" />
            Syncing
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-neutral-800 bg-white border border-neutral-500 rounded">
            <span className="w-2 h-2 bg-neutral-700 rounded-full" />
            Busy
          </span>
        </div>
      </section>

      {/* Monochrome Pills */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-wider text-neutral-900 uppercase">Categories</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-1 text-xs font-semibold text-white bg-black rounded-full">
            Category A
          </span>
          <span className="px-4 py-1 text-xs font-semibold text-white bg-neutral-700 rounded-full">
            Category B
          </span>
          <span className="px-4 py-1 text-xs font-semibold text-neutral-900 bg-neutral-300 rounded-full">
            Category C
          </span>
          <span className="px-4 py-1 text-xs font-semibold text-neutral-900 bg-white border-2 border-neutral-900 rounded-full">
            Category D
          </span>
        </div>
      </section>

      {/* Count Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-wider text-neutral-900 uppercase">Notifications</h3>
        <div className="flex items-center gap-6">
          <div className="relative inline-flex">
            <button className="p-2.5 text-neutral-900 bg-white border-2 border-neutral-400 rounded hover:bg-neutral-50 shadow-sm">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 text-[10px] font-bold text-white bg-black rounded-full flex items-center justify-center shadow-md">
              3
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-2.5 text-neutral-900 bg-white border-2 border-neutral-400 rounded hover:bg-neutral-50 shadow-sm">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-1.5 min-w-[20px] h-5 px-1.5 text-[10px] font-bold text-white bg-neutral-800 rounded-full flex items-center justify-center shadow-md">
              17
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-2.5 text-neutral-900 bg-white border-2 border-neutral-400 rounded hover:bg-neutral-50 shadow-sm">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-2 min-w-[24px] h-5 px-1.5 text-[10px] font-bold text-white bg-neutral-600 rounded-full flex items-center justify-center shadow-md">
              99+
            </span>
          </div>
        </div>
      </section>

      {/* Striped Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-wider text-neutral-900 uppercase">Striped Pattern</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-semibold text-white bg-black rounded relative overflow-hidden">
            <span className="relative z-10">Pattern A</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></span>
          </span>
          <span className="px-3 py-1 text-xs font-semibold text-white bg-neutral-700 rounded relative overflow-hidden">
            <span className="relative z-10">Pattern B</span>
            <span className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.05) 4px, rgba(255,255,255,0.05) 8px)' }}></span>
          </span>
          <span className="px-3 py-1 text-xs font-semibold text-neutral-900 bg-neutral-300 rounded relative overflow-hidden">
            <span className="relative z-10">Pattern C</span>
            <span className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(0,0,0,0.05) 4px, rgba(0,0,0,0.05) 8px)' }}></span>
          </span>
        </div>
      </section>

      {/* Removable Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-wider text-neutral-900 uppercase">Removable Tags</h3>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-white bg-black rounded">
            Black
            <button className="text-white/70 hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-white bg-neutral-700 rounded">
            Gray
            <button className="text-white/70 hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-neutral-900 bg-white border border-neutral-400 rounded">
            White
            <button className="text-neutral-600 hover:text-neutral-900 transition-colors">
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
