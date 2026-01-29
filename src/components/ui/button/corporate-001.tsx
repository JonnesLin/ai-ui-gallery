export default function CorporateButton() {
  return (
    <div className="flex flex-col gap-6 p-8 min-h-screen bg-slate-50">
      <h2 className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Corporate Buttons</h2>

      <div className="flex flex-wrap items-center gap-4">
        {/* Primary blue */}
        <button className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-md transition-all duration-200 hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm">
          Get Started
        </button>

        {/* Secondary outline */}
        <button className="px-6 py-2.5 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-md transition-all duration-200 hover:bg-slate-50 hover:border-slate-400 active:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 shadow-sm">
          Learn More
        </button>

        {/* Tertiary ghost */}
        <button className="px-6 py-2.5 text-sm font-semibold text-blue-600 bg-transparent rounded-md transition-all duration-200 hover:bg-blue-50 active:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
          View Details
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Success */}
        <button className="px-6 py-2.5 text-sm font-semibold text-white bg-emerald-600 rounded-md transition-all duration-200 hover:bg-emerald-700 active:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 shadow-sm">
          Approve
        </button>

        {/* Warning */}
        <button className="px-6 py-2.5 text-sm font-semibold text-amber-900 bg-amber-400 rounded-md transition-all duration-200 hover:bg-amber-500 active:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 shadow-sm">
          Review
        </button>

        {/* Danger */}
        <button className="px-6 py-2.5 text-sm font-semibold text-white bg-red-600 rounded-md transition-all duration-200 hover:bg-red-700 active:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 shadow-sm">
          Delete
        </button>

        {/* Info */}
        <button className="px-6 py-2.5 text-sm font-semibold text-white bg-sky-600 rounded-md transition-all duration-200 hover:bg-sky-700 active:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 shadow-sm">
          Info
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Sizes */}
        <button className="px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-md transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm">
          Small
        </button>

        <button className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-md transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm">
          Medium
        </button>

        <button className="px-8 py-3 text-base font-semibold text-white bg-blue-600 rounded-md transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm">
          Large
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* With icons */}
        <button className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-md transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm inline-flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Add New
        </button>

        <button className="px-6 py-2.5 text-sm font-semibold text-white bg-emerald-600 rounded-md transition-all duration-200 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 shadow-sm inline-flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          Export
        </button>

        <button className="px-6 py-2.5 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-md transition-all duration-200 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 shadow-sm inline-flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Filter
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Icon only buttons */}
        <button className="p-2.5 text-slate-600 bg-white border border-slate-300 rounded-md transition-all duration-200 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 shadow-sm">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        <button className="p-2.5 text-slate-600 bg-white border border-slate-300 rounded-md transition-all duration-200 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 shadow-sm">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>

        <button className="p-2.5 text-white bg-blue-600 rounded-md transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Loading */}
        <button className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-md cursor-wait opacity-75 shadow-sm inline-flex items-center gap-2" disabled>
          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Processing
        </button>

        {/* Disabled */}
        <button className="px-6 py-2.5 text-sm font-semibold text-slate-400 bg-slate-100 border border-slate-200 rounded-md cursor-not-allowed shadow-sm" disabled>
          Disabled
        </button>
      </div>

      {/* Button group */}
      <div className="inline-flex rounded-md shadow-sm">
        <button className="px-4 py-2.5 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-l-md transition-all duration-200 hover:bg-slate-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Previous
        </button>
        <button className="px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 border-y border-blue-600 transition-all duration-200 hover:bg-blue-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Current
        </button>
        <button className="px-4 py-2.5 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-r-md transition-all duration-200 hover:bg-slate-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Next
        </button>
      </div>

      {/* Full width CTA */}
      <button className="w-full max-w-md px-6 py-3.5 text-base font-semibold text-white bg-blue-600 rounded-md transition-all duration-200 hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md">
        Schedule a Demo
      </button>
    </div>
  )
}
