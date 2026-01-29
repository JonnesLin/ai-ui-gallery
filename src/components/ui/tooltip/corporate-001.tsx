export default function CorporateTooltip() {
  return (
    <div className="min-h-screen bg-slate-50 p-16 flex flex-col items-center justify-center gap-20">
      <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Corporate Tooltips</h2>

      {/* Top - Primary */}
      <div className="group relative inline-block">
        <button className="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-md transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Hover Top
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 text-xs font-medium text-white bg-slate-800 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-lg">
          Professional tooltip message
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
        </div>
      </div>

      {/* Bottom - Secondary */}
      <div className="group relative inline-block">
        <button className="px-6 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-md transition-all duration-200 hover:bg-slate-50 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Hover Bottom
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 text-xs font-medium text-white bg-slate-800 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-lg">
          Clean business aesthetic
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-slate-800"></div>
        </div>
      </div>

      {/* Left & Right */}
      <div className="flex gap-24">
        <div className="group relative inline-block">
          <button className="px-6 py-2.5 text-sm font-medium text-white bg-slate-700 rounded-md transition-all duration-200 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
            Hover Left
          </button>
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 px-3 py-2 text-xs font-medium text-white bg-slate-800 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-lg">
            Left aligned info
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-slate-800"></div>
          </div>
        </div>

        <div className="group relative inline-block">
          <button className="px-6 py-2.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-md transition-all duration-200 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Hover Right
          </button>
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-2 text-xs font-medium text-white bg-slate-800 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-lg">
            Right aligned info
            <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-slate-800"></div>
          </div>
        </div>
      </div>

      {/* Info tooltip with icon */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-slate-600">Annual Revenue</span>
        <div className="group relative inline-block">
          <div className="w-5 h-5 flex items-center justify-center text-slate-400 border border-slate-300 rounded-full cursor-help transition-colors hover:text-slate-600 hover:border-slate-400">
            <span className="text-xs font-medium">i</span>
          </div>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 text-xs font-medium text-white bg-slate-800 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-lg z-10">
            Total revenue for fiscal year 2024
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
          </div>
        </div>
      </div>

      {/* Warning tooltip */}
      <div className="group relative inline-block">
        <button className="px-6 py-2.5 text-sm font-medium text-amber-700 bg-amber-50 border border-amber-200 rounded-md transition-all duration-200 hover:bg-amber-100">
          Caution
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 text-xs font-medium text-amber-900 bg-amber-100 border border-amber-200 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-lg">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Action requires approval
          </span>
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-amber-100"></div>
        </div>
      </div>

      {/* Success tooltip */}
      <div className="group relative inline-block">
        <button className="px-6 py-2.5 text-sm font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-md transition-all duration-200 hover:bg-emerald-100">
          Verified
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 text-xs font-medium text-emerald-900 bg-emerald-100 border border-emerald-200 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-lg">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Successfully verified
          </span>
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-emerald-100"></div>
        </div>
      </div>
    </div>
  )
}
