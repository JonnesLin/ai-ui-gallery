export default function NatureBadge() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-8 space-y-10">
      {/* Organic Status Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-wide text-green-800 uppercase">Status</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-medium text-stone-700 bg-stone-100 border border-stone-300 rounded-md">
            Default
          </span>
          <span className="px-3 py-1 text-xs font-medium text-teal-800 bg-teal-50 border border-teal-300 rounded-md">
            Fresh
          </span>
          <span className="px-3 py-1 text-xs font-medium text-green-800 bg-green-50 border border-green-300 rounded-md">
            Organic
          </span>
          <span className="px-3 py-1 text-xs font-medium text-amber-800 bg-amber-50 border border-amber-300 rounded-md">
            Seasonal
          </span>
          <span className="px-3 py-1 text-xs font-medium text-lime-800 bg-lime-50 border border-lime-300 rounded-md">
            Natural
          </span>
        </div>
      </section>

      {/* Earthy Solid Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-wide text-green-800 uppercase">Earth Tones</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-medium text-white bg-stone-600 rounded-md shadow-sm">
            Stone
          </span>
          <span className="px-3 py-1 text-xs font-medium text-white bg-emerald-600 rounded-md shadow-sm">
            Forest
          </span>
          <span className="px-3 py-1 text-xs font-medium text-white bg-green-700 rounded-md shadow-sm">
            Moss
          </span>
          <span className="px-3 py-1 text-xs font-medium text-white bg-teal-600 rounded-md shadow-sm">
            Ocean
          </span>
          <span className="px-3 py-1 text-xs font-medium text-stone-900 bg-amber-400 rounded-md shadow-sm">
            Sand
          </span>
          <span className="px-3 py-1 text-xs font-medium text-white bg-lime-600 rounded-md shadow-sm">
            Leaf
          </span>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-wide text-green-800 uppercase">Sizes</h3>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 text-[10px] font-medium text-green-800 bg-green-50 border border-green-300 rounded">
            Seed
          </span>
          <span className="px-3 py-1 text-xs font-medium text-green-800 bg-green-50 border border-green-300 rounded">
            Sprout
          </span>
          <span className="px-4 py-1.5 text-sm font-medium text-green-800 bg-green-50 border border-green-300 rounded">
            Bloom
          </span>
        </div>
      </section>

      {/* With Nature Indicators */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-wide text-green-800 uppercase">Growth Status</h3>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-green-800 bg-white border border-green-300 rounded-lg shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            Growing
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-amber-800 bg-white border border-amber-300 rounded-lg shadow-sm">
            <span className="w-2 h-2 bg-amber-500 rounded-full" />
            Maturing
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-emerald-800 bg-white border border-emerald-300 rounded-lg shadow-sm">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Thriving
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-stone-700 bg-white border border-stone-300 rounded-lg shadow-sm">
            <span className="w-2 h-2 bg-stone-400 rounded-full" />
            Dormant
          </span>
        </div>
      </section>

      {/* Nature Pills */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-wide text-green-800 uppercase">Eco Categories</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-1 text-xs font-medium text-green-800 bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 rounded-full">
            🌱 Sustainable
          </span>
          <span className="px-4 py-1 text-xs font-medium text-teal-800 bg-gradient-to-r from-teal-100 to-cyan-100 border border-teal-200 rounded-full">
            💧 Water-Wise
          </span>
          <span className="px-4 py-1 text-xs font-medium text-amber-800 bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-200 rounded-full">
            ♻️ Recycled
          </span>
          <span className="px-4 py-1 text-xs font-medium text-lime-800 bg-gradient-to-r from-lime-100 to-green-100 border border-lime-200 rounded-full">
            🌿 Organic
          </span>
        </div>
      </section>

      {/* Count Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-wide text-green-800 uppercase">Notifications</h3>
        <div className="flex items-center gap-6">
          <div className="relative inline-flex">
            <button className="p-2.5 text-green-700 bg-white border border-green-300 rounded-lg hover:bg-green-50 shadow-sm transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 text-[10px] font-medium text-white bg-green-600 rounded-full flex items-center justify-center shadow-sm">
              4
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-2.5 text-green-700 bg-white border border-green-300 rounded-lg hover:bg-green-50 shadow-sm transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-1.5 min-w-[18px] h-[18px] px-1 text-[10px] font-medium text-white bg-teal-600 rounded-full flex items-center justify-center shadow-sm">
              15
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-2.5 text-green-700 bg-white border border-green-300 rounded-lg hover:bg-green-50 shadow-sm transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-2 min-w-[22px] h-[18px] px-1 text-[10px] font-medium text-white bg-emerald-600 rounded-full flex items-center justify-center shadow-sm">
              eco
            </span>
          </div>
        </div>
      </section>

      {/* Removable Nature Tags */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-wide text-green-800 uppercase">Environment Tags</h3>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-green-800 bg-green-100 border border-green-300 rounded-md">
            Forest
            <button className="text-green-600 hover:text-green-800 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-teal-800 bg-teal-100 border border-teal-300 rounded-md">
            Ocean
            <button className="text-teal-600 hover:text-teal-800 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-lime-800 bg-lime-100 border border-lime-300 rounded-md">
            Meadow
            <button className="text-lime-600 hover:text-lime-800 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-stone-800 bg-stone-100 border border-stone-300 rounded-md">
            Mountain
            <button className="text-stone-600 hover:text-stone-800 transition-colors">
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
