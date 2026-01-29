export default function PastelBadge() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-8 space-y-10">
      {/* Status Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Status</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-2.5 py-0.5 text-xs font-medium text-gray-600 bg-gray-100 border border-gray-200/50 rounded">
            Default
          </span>
          <span className="px-2.5 py-0.5 text-xs font-medium text-blue-600 bg-blue-100 border border-blue-200/50 rounded">
            Primary
          </span>
          <span className="px-2.5 py-0.5 text-xs font-medium text-green-600 bg-green-100 border border-green-200/50 rounded">
            Success
          </span>
          <span className="px-2.5 py-0.5 text-xs font-medium text-amber-600 bg-amber-100 border border-amber-200/50 rounded">
            Warning
          </span>
          <span className="px-2.5 py-0.5 text-xs font-medium text-red-600 bg-red-100 border border-red-200/50 rounded">
            Error
          </span>
          <span className="px-2.5 py-0.5 text-xs font-medium text-purple-600 bg-purple-100 border border-purple-200/50 rounded">
            Info
          </span>
        </div>
      </section>

      {/* Soft Solid Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Soft</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-2.5 py-0.5 text-xs font-medium text-pink-700 bg-pink-200/60 rounded-lg">
            Pink
          </span>
          <span className="px-2.5 py-0.5 text-xs font-medium text-purple-700 bg-purple-200/60 rounded-lg">
            Purple
          </span>
          <span className="px-2.5 py-0.5 text-xs font-medium text-blue-700 bg-blue-200/60 rounded-lg">
            Blue
          </span>
          <span className="px-2.5 py-0.5 text-xs font-medium text-teal-700 bg-teal-200/60 rounded-lg">
            Teal
          </span>
          <span className="px-2.5 py-0.5 text-xs font-medium text-lime-700 bg-lime-200/60 rounded-lg">
            Lime
          </span>
          <span className="px-2.5 py-0.5 text-xs font-medium text-yellow-700 bg-yellow-200/60 rounded-lg">
            Yellow
          </span>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Sizes</h3>
        <div className="flex items-center gap-2">
          <span className="px-1.5 py-px text-[10px] font-medium text-purple-600 bg-purple-100 border border-purple-200/50 rounded">
            Small
          </span>
          <span className="px-2.5 py-0.5 text-xs font-medium text-purple-600 bg-purple-100 border border-purple-200/50 rounded">
            Medium
          </span>
          <span className="px-3 py-1 text-sm font-medium text-purple-600 bg-purple-100 border border-purple-200/50 rounded">
            Large
          </span>
        </div>
      </section>

      {/* With Dot */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">With Dot</h3>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium text-green-700 bg-green-100 border border-green-200/50 rounded-lg">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            Online
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium text-gray-700 bg-gray-100 border border-gray-200/50 rounded-lg">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
            Offline
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium text-amber-700 bg-amber-100 border border-amber-200/50 rounded-lg">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            Away
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium text-red-700 bg-red-100 border border-red-200/50 rounded-lg">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
            Busy
          </span>
        </div>
      </section>

      {/* Pill Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Pill</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-medium text-pink-700 bg-pink-200/60 rounded-full">
            Design
          </span>
          <span className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-200/60 rounded-full">
            Development
          </span>
          <span className="px-3 py-1 text-xs font-medium text-purple-700 bg-purple-200/60 rounded-full">
            Creative
          </span>
          <span className="px-3 py-1 text-xs font-medium text-teal-700 bg-teal-200/60 rounded-full">
            Fresh
          </span>
        </div>
      </section>

      {/* Count Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Count</h3>
        <div className="flex items-center gap-6">
          <div className="relative inline-flex">
            <button className="p-2 text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 text-[10px] font-medium text-purple-700 bg-purple-200 rounded-full flex items-center justify-center border border-purple-300">
              3
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-2 text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-1.5 min-w-[18px] h-[18px] px-1 text-[10px] font-medium text-pink-700 bg-pink-200 rounded-full flex items-center justify-center border border-pink-300">
              12
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-2 text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-2 min-w-[22px] h-[18px] px-1 text-[10px] font-medium text-blue-700 bg-blue-200 rounded-full flex items-center justify-center border border-blue-300">
              99+
            </span>
          </div>
        </div>
      </section>

      {/* Removable Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Removable</h3>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-pink-700 bg-pink-200/60 rounded-lg">
            Sweet
            <button className="ml-0.5 text-pink-500 hover:text-pink-700 transition-colors">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-purple-700 bg-purple-200/60 rounded-lg">
            Dreamy
            <button className="ml-0.5 text-purple-500 hover:text-purple-700 transition-colors">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-blue-700 bg-blue-200/60 rounded-lg">
            Calm
            <button className="ml-0.5 text-blue-500 hover:text-blue-700 transition-colors">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
        </div>
      </section>
    </div>
  )
}
