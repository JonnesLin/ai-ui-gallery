export default function MaterialBadge() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 space-y-10">
      {/* Material Status Badges */}
      <section className="space-y-3">
        <h3 className="text-sm font-medium text-gray-900">Status</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded shadow-sm">
            Default
          </span>
          <span className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded shadow-sm">
            Primary
          </span>
          <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded shadow-sm">
            Success
          </span>
          <span className="px-3 py-1 text-xs font-medium text-amber-800 bg-amber-100 rounded shadow-sm">
            Warning
          </span>
          <span className="px-3 py-1 text-xs font-medium text-red-700 bg-red-100 rounded shadow-sm">
            Error
          </span>
        </div>
      </section>

      {/* Material Solid Badges */}
      <section className="space-y-3">
        <h3 className="text-sm font-medium text-gray-900">Filled</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-medium text-white bg-gray-600 rounded shadow-md">
            Default
          </span>
          <span className="px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded shadow-md">
            Primary
          </span>
          <span className="px-3 py-1 text-xs font-medium text-white bg-green-600 rounded shadow-md">
            Success
          </span>
          <span className="px-3 py-1 text-xs font-medium text-white bg-amber-600 rounded shadow-md">
            Warning
          </span>
          <span className="px-3 py-1 text-xs font-medium text-white bg-red-600 rounded shadow-md">
            Error
          </span>
          <span className="px-3 py-1 text-xs font-medium text-white bg-purple-600 rounded shadow-md">
            Info
          </span>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h3 className="text-sm font-medium text-gray-900">Sizes</h3>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 text-[10px] font-medium text-blue-700 bg-blue-100 rounded shadow-sm">
            Small
          </span>
          <span className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded shadow-sm">
            Medium
          </span>
          <span className="px-4 py-1.5 text-sm font-medium text-blue-700 bg-blue-100 rounded shadow-sm">
            Large
          </span>
        </div>
      </section>

      {/* With Dot Indicator */}
      <section className="space-y-3">
        <h3 className="text-sm font-medium text-gray-900">With Dot</h3>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded shadow-sm">
            <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
            Online
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded shadow-sm">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
            Offline
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-amber-700 bg-amber-100 rounded shadow-sm">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            Away
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-red-700 bg-red-100 rounded shadow-sm">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
            Busy
          </span>
        </div>
      </section>

      {/* Material Pills */}
      <section className="space-y-3">
        <h3 className="text-sm font-medium text-gray-900">Chips</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm">
            Technology
          </span>
          <span className="px-3 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm">
            Business
          </span>
          <span className="px-3 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm">
            Design
          </span>
          <span className="px-3 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm">
            Marketing
          </span>
        </div>
      </section>

      {/* Notification Badges */}
      <section className="space-y-3">
        <h3 className="text-sm font-medium text-gray-900">Notification Badges</h3>
        <div className="flex items-center gap-6">
          <div className="relative inline-flex">
            <button className="p-2 text-gray-700 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 text-[10px] font-medium text-white bg-red-600 rounded-full flex items-center justify-center shadow-md">
              4
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-2 text-gray-700 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-1.5 min-w-[18px] h-[18px] px-1 text-[10px] font-medium text-white bg-blue-600 rounded-full flex items-center justify-center shadow-md">
              18
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-2 text-gray-700 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-2 min-w-[22px] h-[18px] px-1 text-[10px] font-medium text-white bg-green-600 rounded-full flex items-center justify-center shadow-md">
              99+
            </span>
          </div>
        </div>
      </section>

      {/* Outlined Chips */}
      <section className="space-y-3">
        <h3 className="text-sm font-medium text-gray-900">Outlined Chips</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-medium text-blue-700 bg-white border border-blue-300 rounded-full shadow-sm">
            Primary
          </span>
          <span className="px-3 py-1 text-xs font-medium text-green-700 bg-white border border-green-300 rounded-full shadow-sm">
            Success
          </span>
          <span className="px-3 py-1 text-xs font-medium text-amber-700 bg-white border border-amber-300 rounded-full shadow-sm">
            Warning
          </span>
          <span className="px-3 py-1 text-xs font-medium text-red-700 bg-white border border-red-300 rounded-full shadow-sm">
            Error
          </span>
        </div>
      </section>

      {/* Removable Chips */}
      <section className="space-y-3">
        <h3 className="text-sm font-medium text-gray-900">Removable Chips</h3>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm">
            React
            <button className="text-gray-500 hover:text-gray-700 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm">
            TypeScript
            <button className="text-gray-500 hover:text-gray-700 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm">
            Tailwind
            <button className="text-gray-500 hover:text-gray-700 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
        </div>
      </section>

      {/* With Icons */}
      <section className="space-y-3">
        <h3 className="text-sm font-medium text-gray-900">With Icons</h3>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded-full shadow-md">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Verified
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-white bg-green-600 rounded-full shadow-md">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Secure
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-white bg-purple-600 rounded-full shadow-md">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            Premium
          </span>
        </div>
      </section>

      {/* Elevated Badges */}
      <section className="space-y-3">
        <h3 className="text-sm font-medium text-gray-900">Elevated</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-medium text-gray-700 bg-white rounded shadow-lg">
            Elevation 1
          </span>
          <span className="px-3 py-1 text-xs font-medium text-gray-700 bg-white rounded shadow-xl">
            Elevation 2
          </span>
          <span className="px-3 py-1 text-xs font-medium text-gray-700 bg-white rounded shadow-2xl">
            Elevation 3
          </span>
        </div>
      </section>
    </div>
  )
}
