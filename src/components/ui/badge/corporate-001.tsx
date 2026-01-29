export default function CorporateBadge() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 space-y-10">
      {/* Status Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-semibold tracking-wide text-gray-700 uppercase">Status Indicators</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded shadow-sm">
            PENDING
          </span>
          <span className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-300 rounded shadow-sm">
            IN PROGRESS
          </span>
          <span className="px-3 py-1 text-xs font-semibold text-green-700 bg-green-50 border border-green-300 rounded shadow-sm">
            APPROVED
          </span>
          <span className="px-3 py-1 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-300 rounded shadow-sm">
            REVIEW
          </span>
          <span className="px-3 py-1 text-xs font-semibold text-red-700 bg-red-50 border border-red-300 rounded shadow-sm">
            REJECTED
          </span>
        </div>
      </section>

      {/* Professional Solid Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-semibold tracking-wide text-gray-700 uppercase">Priority Levels</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-semibold text-white bg-gray-600 rounded shadow-sm">
            LOW
          </span>
          <span className="px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded shadow-sm">
            MEDIUM
          </span>
          <span className="px-3 py-1 text-xs font-semibold text-white bg-amber-600 rounded shadow-sm">
            HIGH
          </span>
          <span className="px-3 py-1 text-xs font-semibold text-white bg-red-600 rounded shadow-sm">
            URGENT
          </span>
          <span className="px-3 py-1 text-xs font-semibold text-white bg-purple-600 rounded shadow-sm">
            CRITICAL
          </span>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h3 className="text-xs font-semibold tracking-wide text-gray-700 uppercase">Size Variants</h3>
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 text-[10px] font-semibold text-gray-700 bg-white border border-gray-300 rounded shadow-sm">
            COMPACT
          </span>
          <span className="px-3 py-1 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded shadow-sm">
            STANDARD
          </span>
          <span className="px-4 py-1.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded shadow-sm">
            EXTENDED
          </span>
        </div>
      </section>

      {/* With Status Indicator */}
      <section className="space-y-3">
        <h3 className="text-xs font-semibold tracking-wide text-gray-700 uppercase">Live Status</h3>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-green-700 bg-white border border-gray-300 rounded shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full shadow-sm" />
            ACTIVE
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded shadow-sm">
            <span className="w-2 h-2 bg-gray-400 rounded-full shadow-sm" />
            INACTIVE
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-amber-700 bg-white border border-gray-300 rounded shadow-sm">
            <span className="w-2 h-2 bg-amber-500 rounded-full shadow-sm" />
            STANDBY
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-red-700 bg-white border border-gray-300 rounded shadow-sm">
            <span className="w-2 h-2 bg-red-500 rounded-full shadow-sm" />
            ERROR
          </span>
        </div>
      </section>

      {/* Department Tags */}
      <section className="space-y-3">
        <h3 className="text-xs font-semibold tracking-wide text-gray-700 uppercase">Departments</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-semibold text-gray-700 bg-white border-l-4 border-l-blue-600 border-y border-r border-gray-300 rounded-r shadow-sm">
            IT
          </span>
          <span className="px-3 py-1 text-xs font-semibold text-gray-700 bg-white border-l-4 border-l-green-600 border-y border-r border-gray-300 rounded-r shadow-sm">
            FINANCE
          </span>
          <span className="px-3 py-1 text-xs font-semibold text-gray-700 bg-white border-l-4 border-l-purple-600 border-y border-r border-gray-300 rounded-r shadow-sm">
            HR
          </span>
          <span className="px-3 py-1 text-xs font-semibold text-gray-700 bg-white border-l-4 border-l-amber-600 border-y border-r border-gray-300 rounded-r shadow-sm">
            LEGAL
          </span>
        </div>
      </section>

      {/* Notification Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-semibold tracking-wide text-gray-700 uppercase">Notifications</h3>
        <div className="flex items-center gap-6">
          <div className="relative inline-flex">
            <button className="p-2.5 text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 text-[10px] font-bold text-white bg-blue-600 rounded shadow-sm flex items-center justify-center">
              5
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-2.5 text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-1.5 min-w-[20px] h-5 px-1.5 text-[10px] font-bold text-white bg-red-600 rounded shadow-sm flex items-center justify-center">
              24
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-2.5 text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-2 min-w-[24px] h-5 px-1.5 text-[10px] font-bold text-white bg-amber-600 rounded shadow-sm flex items-center justify-center">
              142
            </span>
          </div>
        </div>
      </section>

      {/* Assignee Tags */}
      <section className="space-y-3">
        <h3 className="text-xs font-semibold tracking-wide text-gray-700 uppercase">Team Members</h3>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded shadow-sm">
            J. Smith
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded shadow-sm">
            M. Johnson
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded shadow-sm">
            A. Williams
            <button className="text-gray-400 hover:text-gray-600">
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
