export default function ThreeDimensionalBadge() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-8 space-y-10">
      {/* 3D Extruded Status Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-wider text-slate-800 uppercase">Status</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 text-xs font-bold text-gray-700 bg-gradient-to-b from-gray-200 to-gray-300 border-b-4 border-gray-400 rounded-lg shadow-lg transform hover:translate-y-0.5 hover:border-b-2 transition-all">
            Default
          </span>
          <span className="px-4 py-2 text-xs font-bold text-blue-700 bg-gradient-to-b from-blue-300 to-blue-400 border-b-4 border-blue-600 rounded-lg shadow-lg transform hover:translate-y-0.5 hover:border-b-2 transition-all">
            Primary
          </span>
          <span className="px-4 py-2 text-xs font-bold text-green-700 bg-gradient-to-b from-green-300 to-green-400 border-b-4 border-green-600 rounded-lg shadow-lg transform hover:translate-y-0.5 hover:border-b-2 transition-all">
            Success
          </span>
          <span className="px-4 py-2 text-xs font-bold text-amber-800 bg-gradient-to-b from-amber-300 to-amber-400 border-b-4 border-amber-600 rounded-lg shadow-lg transform hover:translate-y-0.5 hover:border-b-2 transition-all">
            Warning
          </span>
          <span className="px-4 py-2 text-xs font-bold text-red-700 bg-gradient-to-b from-red-300 to-red-400 border-b-4 border-red-600 rounded-lg shadow-lg transform hover:translate-y-0.5 hover:border-b-2 transition-all">
            Error
          </span>
        </div>
      </section>

      {/* Deep 3D Solid Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-wider text-slate-800 uppercase">Solid 3D</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-b from-gray-600 to-gray-700 border-b-4 border-gray-900 rounded-lg shadow-[0_4px_0_0_rgba(0,0,0,0.2),0_6px_12px_rgba(0,0,0,0.3)] transform hover:translate-y-1 hover:shadow-[0_2px_0_0_rgba(0,0,0,0.2),0_3px_6px_rgba(0,0,0,0.3)] transition-all">
            Dark
          </span>
          <span className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-b from-blue-500 to-blue-600 border-b-4 border-blue-800 rounded-lg shadow-[0_4px_0_0_rgba(30,58,138,0.5),0_6px_12px_rgba(0,0,0,0.3)] transform hover:translate-y-1 hover:shadow-[0_2px_0_0_rgba(30,58,138,0.5),0_3px_6px_rgba(0,0,0,0.3)] transition-all">
            Blue
          </span>
          <span className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-b from-emerald-500 to-emerald-600 border-b-4 border-emerald-800 rounded-lg shadow-[0_4px_0_0_rgba(6,78,59,0.5),0_6px_12px_rgba(0,0,0,0.3)] transform hover:translate-y-1 hover:shadow-[0_2px_0_0_rgba(6,78,59,0.5),0_3px_6px_rgba(0,0,0,0.3)] transition-all">
            Green
          </span>
          <span className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-b from-purple-500 to-purple-600 border-b-4 border-purple-800 rounded-lg shadow-[0_4px_0_0_rgba(88,28,135,0.5),0_6px_12px_rgba(0,0,0,0.3)] transform hover:translate-y-1 hover:shadow-[0_2px_0_0_rgba(88,28,135,0.5),0_3px_6px_rgba(0,0,0,0.3)] transition-all">
            Purple
          </span>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-wider text-slate-800 uppercase">Sizes</h3>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 text-[10px] font-bold text-blue-700 bg-gradient-to-b from-blue-300 to-blue-400 border-b-2 border-blue-600 rounded-lg shadow-md">
            Small
          </span>
          <span className="px-4 py-2 text-xs font-bold text-blue-700 bg-gradient-to-b from-blue-300 to-blue-400 border-b-4 border-blue-600 rounded-lg shadow-lg">
            Medium
          </span>
          <span className="px-5 py-2.5 text-sm font-bold text-blue-700 bg-gradient-to-b from-blue-300 to-blue-400 border-b-[6px] border-blue-600 rounded-lg shadow-xl">
            Large
          </span>
        </div>
      </section>

      {/* With 3D Indicator */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-wider text-slate-800 uppercase">Status Indicator</h3>
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-green-700 bg-gradient-to-b from-green-100 to-green-200 border-b-4 border-green-300 rounded-lg shadow-lg">
            <span className="w-2.5 h-2.5 bg-gradient-to-b from-green-400 to-green-600 rounded-full border-b-2 border-green-800 shadow-md" />
            Online
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-gray-700 bg-gradient-to-b from-gray-100 to-gray-200 border-b-4 border-gray-300 rounded-lg shadow-lg">
            <span className="w-2.5 h-2.5 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full border-b-2 border-gray-800 shadow-md" />
            Offline
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-amber-700 bg-gradient-to-b from-amber-100 to-amber-200 border-b-4 border-amber-300 rounded-lg shadow-lg">
            <span className="w-2.5 h-2.5 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full border-b-2 border-amber-800 shadow-md" />
            Away
          </span>
        </div>
      </section>

      {/* 3D Pills */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-wider text-slate-800 uppercase">Pill Style</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-5 py-2 text-xs font-bold text-pink-700 bg-gradient-to-b from-pink-300 to-pink-400 border-b-4 border-pink-600 rounded-full shadow-lg transform hover:translate-y-0.5 hover:border-b-2 transition-all">
            Design
          </span>
          <span className="px-5 py-2 text-xs font-bold text-cyan-700 bg-gradient-to-b from-cyan-300 to-cyan-400 border-b-4 border-cyan-600 rounded-full shadow-lg transform hover:translate-y-0.5 hover:border-b-2 transition-all">
            Creative
          </span>
          <span className="px-5 py-2 text-xs font-bold text-violet-700 bg-gradient-to-b from-violet-300 to-violet-400 border-b-4 border-violet-600 rounded-full shadow-lg transform hover:translate-y-0.5 hover:border-b-2 transition-all">
            Modern
          </span>
        </div>
      </section>

      {/* Count Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-wider text-slate-800 uppercase">Notifications</h3>
        <div className="flex items-center gap-6">
          <div className="relative inline-flex">
            <button className="p-3 text-slate-700 bg-gradient-to-b from-white to-slate-100 border-b-4 border-slate-300 rounded-xl shadow-lg transform hover:translate-y-0.5 hover:border-b-2 transition-all">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-1 min-w-[24px] h-6 px-2 text-[11px] font-bold text-white bg-gradient-to-b from-red-500 to-red-600 border-b-2 border-red-800 rounded-full shadow-lg flex items-center justify-center">
              8
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-3 text-slate-700 bg-gradient-to-b from-white to-slate-100 border-b-4 border-slate-300 rounded-xl shadow-lg transform hover:translate-y-0.5 hover:border-b-2 transition-all">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-1.5 min-w-[24px] h-6 px-2 text-[11px] font-bold text-white bg-gradient-to-b from-blue-500 to-blue-600 border-b-2 border-blue-800 rounded-full shadow-lg flex items-center justify-center">
              32
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-3 text-slate-700 bg-gradient-to-b from-white to-slate-100 border-b-4 border-slate-300 rounded-xl shadow-lg transform hover:translate-y-0.5 hover:border-b-2 transition-all">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-2 min-w-[28px] h-6 px-2 text-[11px] font-bold text-white bg-gradient-to-b from-purple-500 to-purple-600 border-b-2 border-purple-800 rounded-full shadow-lg flex items-center justify-center">
              999+
            </span>
          </div>
        </div>
      </section>

      {/* Removable 3D Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-wider text-slate-800 uppercase">Removable Tags</h3>
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-2 text-xs font-bold text-blue-700 bg-gradient-to-b from-blue-200 to-blue-300 border-b-4 border-blue-500 rounded-lg shadow-lg">
            3D Effect
            <button className="text-blue-600 hover:text-blue-800 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-2 text-xs font-bold text-purple-700 bg-gradient-to-b from-purple-200 to-purple-300 border-b-4 border-purple-500 rounded-lg shadow-lg">
            Depth
            <button className="text-purple-600 hover:text-purple-800 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-2 text-xs font-bold text-green-700 bg-gradient-to-b from-green-200 to-green-300 border-b-4 border-green-500 rounded-lg shadow-lg">
            Shadow
            <button className="text-green-600 hover:text-green-800 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
        </div>
      </section>

      {/* Embossed Style */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-wider text-slate-800 uppercase">Embossed</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 text-xs font-bold text-slate-700 bg-slate-200 rounded-lg shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(255,255,255,0.8),0_4px_6px_rgba(0,0,0,0.1)]">
            Pressed In
          </span>
          <span className="px-4 py-2 text-xs font-bold text-slate-700 bg-slate-200 rounded-lg shadow-[0_2px_4px_rgba(255,255,255,0.8),0_-2px_4px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]">
            Raised Up
          </span>
        </div>
      </section>
    </div>
  )
}
