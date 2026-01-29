export default function NeumorphismBadge() {
  return (
    <div className="min-h-screen bg-[#e0e5ec] p-8 space-y-10">
      {/* Status Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Status</h3>
        <div className="flex flex-wrap gap-4">
          <span className="px-4 py-1.5 text-sm font-medium text-gray-600 bg-[#e0e5ec] rounded-full shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff]">
            Default
          </span>
          <span className="px-4 py-1.5 text-sm font-medium text-blue-600 bg-[#e0e5ec] rounded-full shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff]">
            Primary
          </span>
          <span className="px-4 py-1.5 text-sm font-medium text-green-600 bg-[#e0e5ec] rounded-full shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff]">
            Success
          </span>
          <span className="px-4 py-1.5 text-sm font-medium text-amber-600 bg-[#e0e5ec] rounded-full shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff]">
            Warning
          </span>
          <span className="px-4 py-1.5 text-sm font-medium text-red-600 bg-[#e0e5ec] rounded-full shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff]">
            Error
          </span>
        </div>
      </section>

      {/* Inset Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Inset</h3>
        <div className="flex flex-wrap gap-4">
          <span className="px-4 py-1.5 text-sm font-medium text-gray-600 bg-[#e0e5ec] rounded-full shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]">
            Default
          </span>
          <span className="px-4 py-1.5 text-sm font-medium text-blue-600 bg-[#e0e5ec] rounded-full shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]">
            Primary
          </span>
          <span className="px-4 py-1.5 text-sm font-medium text-green-600 bg-[#e0e5ec] rounded-full shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]">
            Success
          </span>
          <span className="px-4 py-1.5 text-sm font-medium text-amber-600 bg-[#e0e5ec] rounded-full shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]">
            Warning
          </span>
          <span className="px-4 py-1.5 text-sm font-medium text-red-600 bg-[#e0e5ec] rounded-full shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]">
            Error
          </span>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Sizes</h3>
        <div className="flex items-center gap-4">
          <span className="px-2.5 py-0.5 text-xs font-medium text-gray-600 bg-[#e0e5ec] rounded-full shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff]">
            Small
          </span>
          <span className="px-4 py-1.5 text-sm font-medium text-gray-600 bg-[#e0e5ec] rounded-full shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff]">
            Medium
          </span>
          <span className="px-5 py-2 text-base font-medium text-gray-600 bg-[#e0e5ec] rounded-full shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff]">
            Large
          </span>
        </div>
      </section>

      {/* With Dot */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">With Dot</h3>
        <div className="flex flex-wrap gap-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-gray-600 bg-[#e0e5ec] rounded-full shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff]">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[2px_2px_4px_#b8bec7,-2px_-2px_4px_#ffffff]" />
            Online
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-gray-600 bg-[#e0e5ec] rounded-full shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff]">
            <span className="w-2.5 h-2.5 bg-gray-400 rounded-full shadow-[inset_2px_2px_4px_#b8bec7,inset_-2px_-2px_4px_#ffffff]" />
            Offline
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-gray-600 bg-[#e0e5ec] rounded-full shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff]">
            <span className="w-2.5 h-2.5 bg-amber-500 rounded-full shadow-[2px_2px_4px_#b8bec7,-2px_-2px_4px_#ffffff]" />
            Away
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-gray-600 bg-[#e0e5ec] rounded-full shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff]">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full shadow-[2px_2px_4px_#b8bec7,-2px_-2px_4px_#ffffff]" />
            Busy
          </span>
        </div>
      </section>

      {/* Squared Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Squared</h3>
        <div className="flex flex-wrap gap-4">
          <span className="px-4 py-1.5 text-sm font-medium text-gray-600 bg-[#e0e5ec] rounded-lg shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff]">
            Tag
          </span>
          <span className="px-4 py-1.5 text-sm font-medium text-blue-600 bg-[#e0e5ec] rounded-lg shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff]">
            Feature
          </span>
          <span className="px-4 py-1.5 text-sm font-medium text-purple-600 bg-[#e0e5ec] rounded-lg shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff]">
            Beta
          </span>
        </div>
      </section>

      {/* Count Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Count</h3>
        <div className="flex items-center gap-8">
          <div className="relative inline-flex">
            <button className="p-4 text-gray-600 bg-[#e0e5ec] rounded-xl shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] transition-shadow">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-1 min-w-[22px] h-[22px] px-1.5 text-xs font-bold text-white bg-red-500 rounded-full flex items-center justify-center shadow-[3px_3px_6px_#b8bec7,-3px_-3px_6px_#ffffff]">
              3
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-4 text-gray-600 bg-[#e0e5ec] rounded-xl shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] transition-shadow">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-1.5 min-w-[22px] h-[22px] px-1.5 text-xs font-bold text-white bg-blue-500 rounded-full flex items-center justify-center shadow-[3px_3px_6px_#b8bec7,-3px_-3px_6px_#ffffff]">
              12
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-4 text-gray-600 bg-[#e0e5ec] rounded-xl shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] transition-shadow">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-2.5 min-w-[28px] h-[22px] px-1.5 text-xs font-bold text-white bg-green-500 rounded-full flex items-center justify-center shadow-[3px_3px_6px_#b8bec7,-3px_-3px_6px_#ffffff]">
              99+
            </span>
          </div>
        </div>
      </section>

      {/* Removable Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-medium tracking-widest text-gray-500 uppercase">Removable</h3>
        <div className="flex flex-wrap gap-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-gray-600 bg-[#e0e5ec] rounded-full shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff]">
            React
            <button className="p-1 rounded-full shadow-[inset_2px_2px_4px_#b8bec7,inset_-2px_-2px_4px_#ffffff] hover:shadow-[2px_2px_4px_#b8bec7,-2px_-2px_4px_#ffffff] transition-shadow">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-blue-600 bg-[#e0e5ec] rounded-full shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff]">
            TypeScript
            <button className="p-1 rounded-full shadow-[inset_2px_2px_4px_#b8bec7,inset_-2px_-2px_4px_#ffffff] hover:shadow-[2px_2px_4px_#b8bec7,-2px_-2px_4px_#ffffff] transition-shadow">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-green-600 bg-[#e0e5ec] rounded-full shadow-[6px_6px_12px_#b8bec7,-6px_-6px_12px_#ffffff]">
            Tailwind
            <button className="p-1 rounded-full shadow-[inset_2px_2px_4px_#b8bec7,inset_-2px_-2px_4px_#ffffff] hover:shadow-[2px_2px_4px_#b8bec7,-2px_-2px_4px_#ffffff] transition-shadow">
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
