export default function RetroBadge() {
  return (
    <div className="min-h-screen bg-amber-50 p-8 space-y-10 font-serif">
      {/* Status Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-widest text-amber-800 uppercase">Status</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 text-sm font-bold text-amber-900 bg-amber-100 border-2 border-amber-800 rounded shadow-[inset_0_-2px_0_0_rgba(120,53,15,0.3)]">
            Default
          </span>
          <span className="px-3 py-1 text-sm font-bold text-blue-900 bg-blue-100 border-2 border-blue-800 rounded shadow-[inset_0_-2px_0_0_rgba(30,58,138,0.3)]">
            Primary
          </span>
          <span className="px-3 py-1 text-sm font-bold text-green-900 bg-green-100 border-2 border-green-800 rounded shadow-[inset_0_-2px_0_0_rgba(22,101,52,0.3)]">
            Success
          </span>
          <span className="px-3 py-1 text-sm font-bold text-orange-900 bg-orange-100 border-2 border-orange-800 rounded shadow-[inset_0_-2px_0_0_rgba(154,52,18,0.3)]">
            Warning
          </span>
          <span className="px-3 py-1 text-sm font-bold text-red-900 bg-red-100 border-2 border-red-800 rounded shadow-[inset_0_-2px_0_0_rgba(127,29,29,0.3)]">
            Error
          </span>
        </div>
      </section>

      {/* Vintage Ribbons */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-widest text-amber-800 uppercase">Ribbons</h3>
        <div className="flex flex-wrap gap-6">
          <span className="relative px-6 py-1.5 text-sm font-bold text-amber-50 bg-amber-700 shadow-md">
            <span className="absolute left-0 top-full border-l-[8px] border-l-transparent border-t-[8px] border-t-amber-900" />
            <span className="absolute right-0 top-full border-r-[8px] border-r-transparent border-t-[8px] border-t-amber-900" />
            Premium
          </span>
          <span className="relative px-6 py-1.5 text-sm font-bold text-red-50 bg-red-700 shadow-md">
            <span className="absolute left-0 top-full border-l-[8px] border-l-transparent border-t-[8px] border-t-red-900" />
            <span className="absolute right-0 top-full border-r-[8px] border-r-transparent border-t-[8px] border-t-red-900" />
            Sale
          </span>
          <span className="relative px-6 py-1.5 text-sm font-bold text-green-50 bg-green-700 shadow-md">
            <span className="absolute left-0 top-full border-l-[8px] border-l-transparent border-t-[8px] border-t-green-900" />
            <span className="absolute right-0 top-full border-r-[8px] border-r-transparent border-t-[8px] border-t-green-900" />
            Organic
          </span>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-widest text-amber-800 uppercase">Sizes</h3>
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 text-xs font-bold text-amber-900 bg-amber-100 border border-amber-700 rounded">
            Small
          </span>
          <span className="px-3 py-1 text-sm font-bold text-amber-900 bg-amber-100 border-2 border-amber-700 rounded">
            Medium
          </span>
          <span className="px-4 py-1.5 text-base font-bold text-amber-900 bg-amber-100 border-2 border-amber-700 rounded">
            Large
          </span>
        </div>
      </section>

      {/* With Dot */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-widest text-amber-800 uppercase">With Dot</h3>
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-bold text-amber-900 bg-amber-100 border-2 border-amber-700 rounded">
            <span className="w-2 h-2 bg-green-600 rounded-full border border-green-800" />
            Active
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-bold text-amber-900 bg-amber-100 border-2 border-amber-700 rounded">
            <span className="w-2 h-2 bg-gray-500 rounded-full border border-gray-700" />
            Inactive
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-bold text-amber-900 bg-amber-100 border-2 border-amber-700 rounded">
            <span className="w-2 h-2 bg-amber-500 rounded-full border border-amber-700" />
            Pending
          </span>
        </div>
      </section>

      {/* Stamp Effect */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-widest text-amber-800 uppercase">Stamps</h3>
        <div className="flex flex-wrap gap-4">
          <span className="px-4 py-2 text-sm font-black uppercase text-red-700 border-4 border-red-700 rounded rotate-[-8deg] opacity-80">
            Approved
          </span>
          <span className="px-4 py-2 text-sm font-black uppercase text-green-700 border-4 border-green-700 rounded rotate-[5deg] opacity-80">
            Certified
          </span>
          <span className="px-4 py-2 text-sm font-black uppercase text-blue-700 border-4 border-blue-700 rounded rotate-[-3deg] opacity-80">
            Original
          </span>
        </div>
      </section>

      {/* Count Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-widest text-amber-800 uppercase">Count</h3>
        <div className="flex items-center gap-6">
          <div className="relative inline-flex">
            <button className="p-3 text-amber-800 bg-amber-100 border-2 border-amber-700 rounded-lg shadow-md hover:bg-amber-200 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 text-xs font-bold text-amber-50 bg-red-700 rounded-full flex items-center justify-center border-2 border-red-900">
              3
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-3 text-amber-800 bg-amber-100 border-2 border-amber-700 rounded-lg shadow-md hover:bg-amber-200 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-2 min-w-[24px] h-5 px-1.5 text-xs font-bold text-amber-50 bg-amber-700 rounded-full flex items-center justify-center border-2 border-amber-900">
              12
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-3 text-amber-800 bg-amber-100 border-2 border-amber-700 rounded-lg shadow-md hover:bg-amber-200 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-2.5 min-w-[28px] h-5 px-1.5 text-xs font-bold text-amber-50 bg-green-700 rounded-full flex items-center justify-center border-2 border-green-900">
              99+
            </span>
          </div>
        </div>
      </section>

      {/* Label Tags */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-widest text-amber-800 uppercase">Tags</h3>
        <div className="flex flex-wrap gap-3">
          <span className="relative pl-4 pr-3 py-1 text-sm font-bold text-amber-900 bg-amber-200 border-2 border-amber-700 rounded-r">
            <span className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-amber-50 border-2 border-amber-700 rounded-full" />
            Vintage
          </span>
          <span className="relative pl-4 pr-3 py-1 text-sm font-bold text-red-900 bg-red-200 border-2 border-red-700 rounded-r">
            <span className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-50 border-2 border-red-700 rounded-full" />
            Classic
          </span>
          <span className="relative pl-4 pr-3 py-1 text-sm font-bold text-green-900 bg-green-200 border-2 border-green-700 rounded-r">
            <span className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-green-50 border-2 border-green-700 rounded-full" />
            Antique
          </span>
        </div>
      </section>

      {/* Removable Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold tracking-widest text-amber-800 uppercase">Removable</h3>
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-bold text-amber-900 bg-amber-100 border-2 border-amber-700 rounded">
            Handmade
            <button className="p-0.5 text-amber-700 hover:text-red-700 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-bold text-blue-900 bg-blue-100 border-2 border-blue-700 rounded">
            Artisan
            <button className="p-0.5 text-blue-700 hover:text-red-700 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-bold text-green-900 bg-green-100 border-2 border-green-700 rounded">
            Heritage
            <button className="p-0.5 text-green-700 hover:text-red-700 transition-colors">
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
