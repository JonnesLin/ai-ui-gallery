export default function FlatBadge() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 space-y-10">
      {/* Flat Status Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-semibold tracking-wide text-gray-700 uppercase">Status</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded">
            Default
          </span>
          <span className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-200 rounded">
            Primary
          </span>
          <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-200 rounded">
            Success
          </span>
          <span className="px-3 py-1 text-xs font-medium text-amber-700 bg-amber-200 rounded">
            Warning
          </span>
          <span className="px-3 py-1 text-xs font-medium text-red-700 bg-red-200 rounded">
            Error
          </span>
          <span className="px-3 py-1 text-xs font-medium text-purple-700 bg-purple-200 rounded">
            Info
          </span>
        </div>
      </section>

      {/* Flat Solid Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-semibold tracking-wide text-gray-700 uppercase">Solid</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-medium text-white bg-gray-700 rounded">
            Gray
          </span>
          <span className="px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded">
            Blue
          </span>
          <span className="px-3 py-1 text-xs font-medium text-white bg-green-600 rounded">
            Green
          </span>
          <span className="px-3 py-1 text-xs font-medium text-white bg-red-600 rounded">
            Red
          </span>
          <span className="px-3 py-1 text-xs font-medium text-white bg-purple-600 rounded">
            Purple
          </span>
          <span className="px-3 py-1 text-xs font-medium text-white bg-pink-600 rounded">
            Pink
          </span>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h3 className="text-xs font-semibold tracking-wide text-gray-700 uppercase">Sizes</h3>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 text-[10px] font-medium text-blue-700 bg-blue-200 rounded">
            XS
          </span>
          <span className="px-2.5 py-0.5 text-xs font-medium text-blue-700 bg-blue-200 rounded">
            SM
          </span>
          <span className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-200 rounded">
            MD
          </span>
          <span className="px-4 py-1.5 text-base font-medium text-blue-700 bg-blue-200 rounded">
            LG
          </span>
        </div>
      </section>

      {/* With Dot Indicator */}
      <section className="space-y-3">
        <h3 className="text-xs font-semibold tracking-wide text-gray-700 uppercase">With Indicator</h3>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-green-700 bg-green-200 rounded">
            <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
            Active
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded">
            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
            Inactive
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-amber-700 bg-amber-200 rounded">
            <span className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
            Pending
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-red-700 bg-red-200 rounded">
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
            Failed
          </span>
        </div>
      </section>

      {/* Flat Pills */}
      <section className="space-y-3">
        <h3 className="text-xs font-semibold tracking-wide text-gray-700 uppercase">Pills</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-200 rounded-full">
            Technology
          </span>
          <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-200 rounded-full">
            Business
          </span>
          <span className="px-3 py-1 text-xs font-medium text-purple-700 bg-purple-200 rounded-full">
            Design
          </span>
          <span className="px-3 py-1 text-xs font-medium text-pink-700 bg-pink-200 rounded-full">
            Creative
          </span>
        </div>
      </section>

      {/* Count Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-semibold tracking-wide text-gray-700 uppercase">Count Badges</h3>
        <div className="flex items-center gap-6">
          <div className="relative inline-flex">
            <button className="p-2 text-gray-700 bg-white rounded hover:bg-gray-50">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-1 min-w-[16px] h-4 px-1 text-[10px] font-medium text-white bg-red-600 rounded-full flex items-center justify-center">
              5
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-2 text-gray-700 bg-white rounded hover:bg-gray-50">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-1.5 min-w-[16px] h-4 px-1 text-[10px] font-medium text-white bg-blue-600 rounded-full flex items-center justify-center">
              23
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-2 text-gray-700 bg-white rounded hover:bg-gray-50">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-2 min-w-[20px] h-4 px-1 text-[10px] font-medium text-white bg-green-600 rounded-full flex items-center justify-center">
              99+
            </span>
          </div>
        </div>
      </section>

      {/* Removable Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-semibold tracking-wide text-gray-700 uppercase">Removable</h3>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-blue-700 bg-blue-200 rounded">
            React
            <button className="text-blue-600 hover:text-blue-800">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-green-700 bg-green-200 rounded">
            Vue
            <button className="text-green-600 hover:text-green-800">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-purple-700 bg-purple-200 rounded">
            Angular
            <button className="text-purple-600 hover:text-purple-800">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
        </div>
      </section>

      {/* Outlined Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-semibold tracking-wide text-gray-700 uppercase">Outlined</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-medium text-blue-700 bg-white border border-blue-700 rounded">
            Outlined Blue
          </span>
          <span className="px-3 py-1 text-xs font-medium text-green-700 bg-white border border-green-700 rounded">
            Outlined Green
          </span>
          <span className="px-3 py-1 text-xs font-medium text-red-700 bg-white border border-red-700 rounded">
            Outlined Red
          </span>
          <span className="px-3 py-1 text-xs font-medium text-purple-700 bg-white border border-purple-700 rounded">
            Outlined Purple
          </span>
        </div>
      </section>

      {/* Icon Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-semibold tracking-wide text-gray-700 uppercase">With Icons</h3>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-blue-700 bg-blue-200 rounded">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Lightning
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-green-700 bg-green-200 rounded">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Verified
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-purple-700 bg-purple-200 rounded">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            Featured
          </span>
        </div>
      </section>
    </div>
  )
}
