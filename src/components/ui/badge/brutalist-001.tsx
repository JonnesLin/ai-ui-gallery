export default function BrutalistBadge() {
  return (
    <div className="min-h-screen bg-yellow-300 p-8 space-y-10">
      {/* Status Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-black tracking-widest text-black uppercase">Status</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 text-sm font-black text-black bg-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            DEFAULT
          </span>
          <span className="px-3 py-1 text-sm font-black text-white bg-blue-600 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            PRIMARY
          </span>
          <span className="px-3 py-1 text-sm font-black text-black bg-green-400 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            SUCCESS
          </span>
          <span className="px-3 py-1 text-sm font-black text-black bg-orange-400 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            WARNING
          </span>
          <span className="px-3 py-1 text-sm font-black text-white bg-red-600 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            ERROR
          </span>
        </div>
      </section>

      {/* Inverted Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-black tracking-widest text-black uppercase">Inverted</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 text-sm font-black text-white bg-black border-3 border-black">
            INVERTED
          </span>
          <span className="px-3 py-1 text-sm font-black text-black bg-yellow-300 border-3 border-black">
            HIGHLIGHT
          </span>
          <span className="px-3 py-1 text-sm font-black text-white bg-pink-600 border-3 border-black">
            ACCENT
          </span>
          <span className="px-3 py-1 text-sm font-black text-black bg-cyan-400 border-3 border-black">
            INFO
          </span>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h3 className="text-xs font-black tracking-widest text-black uppercase">Sizes</h3>
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 text-xs font-black text-black bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            SMALL
          </span>
          <span className="px-3 py-1 text-sm font-black text-black bg-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            MEDIUM
          </span>
          <span className="px-4 py-2 text-base font-black text-black bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            LARGE
          </span>
        </div>
      </section>

      {/* With Dot */}
      <section className="space-y-3">
        <h3 className="text-xs font-black tracking-widest text-black uppercase">With Dot</h3>
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-black text-black bg-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="w-3 h-3 bg-green-500 border-2 border-black" />
            ONLINE
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-black text-black bg-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="w-3 h-3 bg-gray-400 border-2 border-black" />
            OFFLINE
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-black text-black bg-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="w-3 h-3 bg-orange-400 border-2 border-black" />
            AWAY
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-black text-black bg-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="w-3 h-3 bg-red-500 border-2 border-black" />
            BUSY
          </span>
        </div>
      </section>

      {/* Rotated Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-black tracking-widest text-black uppercase">Rotated</h3>
        <div className="flex flex-wrap gap-6 pt-2">
          <span className="px-3 py-1 text-sm font-black text-black bg-pink-400 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2">
            TILTED
          </span>
          <span className="px-3 py-1 text-sm font-black text-white bg-purple-600 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-2">
            ANGLED
          </span>
          <span className="px-3 py-1 text-sm font-black text-black bg-lime-400 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-1">
            SKEWED
          </span>
        </div>
      </section>

      {/* Count Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-black tracking-widest text-black uppercase">Count</h3>
        <div className="flex items-center gap-8">
          <div className="relative inline-flex">
            <button className="p-3 text-black bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="square" strokeLinejoin="miter" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <span className="absolute -top-2 -right-2 min-w-[24px] h-6 px-1.5 text-xs font-black text-white bg-red-600 border-2 border-black flex items-center justify-center">
              5
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-3 text-black bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="square" strokeLinejoin="miter" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            <span className="absolute -top-2 -right-3 min-w-[28px] h-6 px-1.5 text-xs font-black text-black bg-yellow-300 border-2 border-black flex items-center justify-center">
              24
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-3 text-black bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="square" strokeLinejoin="miter" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
            <span className="absolute -top-2 -right-4 min-w-[36px] h-6 px-1.5 text-xs font-black text-white bg-blue-600 border-2 border-black flex items-center justify-center">
              99+
            </span>
          </div>
        </div>
      </section>

      {/* Sticker Effect */}
      <section className="space-y-3">
        <h3 className="text-xs font-black tracking-widest text-black uppercase">Sticker</h3>
        <div className="flex flex-wrap gap-4">
          <span className="px-4 py-2 text-sm font-black text-black bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-3 hover:rotate-0 transition-transform">
            REACT
          </span>
          <span className="px-4 py-2 text-sm font-black text-white bg-blue-600 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-2 hover:rotate-0 transition-transform">
            TYPESCRIPT
          </span>
          <span className="px-4 py-2 text-sm font-black text-black bg-cyan-400 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-1 hover:rotate-0 transition-transform">
            TAILWIND
          </span>
        </div>
      </section>

      {/* Removable Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-black tracking-widest text-black uppercase">Removable</h3>
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-black text-black bg-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            TAG
            <button className="p-0.5 bg-black text-white hover:bg-red-600 transition-colors">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="square" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-black text-white bg-pink-600 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            LABEL
            <button className="p-0.5 bg-black text-white hover:bg-white hover:text-black transition-colors">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="square" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
        </div>
      </section>
    </div>
  )
}
