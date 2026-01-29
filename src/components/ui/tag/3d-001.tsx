export default function ThreeDTag() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-sm font-medium text-slate-600 mb-4">Basic Tags</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 text-sm font-semibold text-slate-700 bg-white rounded-lg shadow-[0_4px_0_0_rgb(203,213,225),0_8px_16px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_0_0_rgb(203,213,225),0_4px_8px_-2px_rgba(0,0,0,0.1)] hover:translate-y-0.5 transition-all">
              Default
            </span>
            <span className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg shadow-[0_4px_0_0_rgb(37,99,235),0_8px_16px_-4px_rgba(59,130,246,0.5)] hover:shadow-[0_2px_0_0_rgb(37,99,235),0_4px_8px_-2px_rgba(59,130,246,0.5)] hover:translate-y-0.5 transition-all">
              Primary
            </span>
            <span className="px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-lg shadow-[0_4px_0_0_rgb(22,163,74),0_8px_16px_-4px_rgba(34,197,94,0.5)] hover:shadow-[0_2px_0_0_rgb(22,163,74),0_4px_8px_-2px_rgba(34,197,94,0.5)] hover:translate-y-0.5 transition-all">
              Success
            </span>
            <span className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-lg shadow-[0_4px_0_0_rgb(220,38,38),0_8px_16px_-4px_rgba(239,68,68,0.5)] hover:shadow-[0_2px_0_0_rgb(220,38,38),0_4px_8px_-2px_rgba(239,68,68,0.5)] hover:translate-y-0.5 transition-all">
              Error
            </span>
            <span className="px-4 py-2 text-sm font-semibold text-white bg-amber-500 rounded-lg shadow-[0_4px_0_0_rgb(217,119,6),0_8px_16px_-4px_rgba(245,158,11,0.5)] hover:shadow-[0_2px_0_0_rgb(217,119,6),0_4px_8px_-2px_rgba(245,158,11,0.5)] hover:translate-y-0.5 transition-all">
              Warning
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-slate-600 mb-4">Sizes</h2>
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 text-xs font-semibold text-slate-700 bg-white rounded-md shadow-[0_3px_0_0_rgb(203,213,225),0_6px_12px_-3px_rgba(0,0,0,0.1)] hover:shadow-[0_1px_0_0_rgb(203,213,225),0_3px_6px_-1px_rgba(0,0,0,0.1)] hover:translate-y-0.5 transition-all">
              Small
            </span>
            <span className="px-4 py-2 text-sm font-semibold text-slate-700 bg-white rounded-lg shadow-[0_4px_0_0_rgb(203,213,225),0_8px_16px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_0_0_rgb(203,213,225),0_4px_8px_-2px_rgba(0,0,0,0.1)] hover:translate-y-0.5 transition-all">
              Medium
            </span>
            <span className="px-5 py-2.5 text-base font-semibold text-slate-700 bg-white rounded-lg shadow-[0_5px_0_0_rgb(203,213,225),0_10px_20px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_0_0_rgb(203,213,225),0_5px_10px_-2px_rgba(0,0,0,0.1)] hover:translate-y-0.5 transition-all">
              Large
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-slate-600 mb-4">With Icons</h2>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 bg-white rounded-lg shadow-[0_4px_0_0_rgb(203,213,225),0_8px_16px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_0_0_rgb(203,213,225),0_4px_8px_-2px_rgba(0,0,0,0.1)] hover:translate-y-0.5 transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
              User
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-purple-500 rounded-lg shadow-[0_4px_0_0_rgb(126,34,206),0_8px_16px_-4px_rgba(168,85,247,0.5)] hover:shadow-[0_2px_0_0_rgb(126,34,206),0_4px_8px_-2px_rgba(168,85,247,0.5)] hover:translate-y-0.5 transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Featured
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-lg shadow-[0_4px_0_0_rgb(22,163,74),0_8px_16px_-4px_rgba(34,197,94,0.5)] hover:shadow-[0_2px_0_0_rgb(22,163,74),0_4px_8px_-2px_rgba(34,197,94,0.5)] hover:translate-y-0.5 transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Verified
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-slate-600 mb-4">Removable Tags</h2>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 bg-white rounded-lg shadow-[0_4px_0_0_rgb(203,213,225),0_8px_16px_-4px_rgba(0,0,0,0.1)] group">
              React
              <button className="text-slate-400 hover:text-slate-700 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg shadow-[0_4px_0_0_rgb(37,99,235),0_8px_16px_-4px_rgba(59,130,246,0.5)] group">
              TypeScript
              <button className="text-blue-100 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-lg shadow-[0_4px_0_0_rgb(22,163,74),0_8px_16px_-4px_rgba(34,197,94,0.5)] group">
              Tailwind
              <button className="text-green-100 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-slate-600 mb-4">Selectable Tags</h2>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 text-sm font-semibold text-slate-700 bg-white rounded-lg shadow-[0_4px_0_0_rgb(203,213,225),0_8px_16px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_0_0_rgb(203,213,225),0_4px_8px_-2px_rgba(0,0,0,0.1)] hover:translate-y-0.5 transition-all">
              All
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-[0_4px_0_0_rgb(29,78,216),0_8px_16px_-4px_rgba(37,99,235,0.5)] translate-y-0.5">
              Active
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-slate-700 bg-white rounded-lg shadow-[0_4px_0_0_rgb(203,213,225),0_8px_16px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_0_0_rgb(203,213,225),0_4px_8px_-2px_rgba(0,0,0,0.1)] hover:translate-y-0.5 transition-all">
              Pending
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-slate-700 bg-white rounded-lg shadow-[0_4px_0_0_rgb(203,213,225),0_8px_16px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_0_0_rgb(203,213,225),0_4px_8px_-2px_rgba(0,0,0,0.1)] hover:translate-y-0.5 transition-all">
              Completed
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-slate-600 mb-4">Tag Cloud</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 text-sm font-semibold text-slate-700 bg-white rounded-lg shadow-[0_4px_0_0_rgb(203,213,225),0_8px_16px_-4px_rgba(0,0,0,0.1)]">JavaScript</span>
            <span className="px-4 py-2 text-sm font-semibold text-slate-700 bg-white rounded-lg shadow-[0_4px_0_0_rgb(203,213,225),0_8px_16px_-4px_rgba(0,0,0,0.1)]">Python</span>
            <span className="px-4 py-2 text-sm font-semibold text-slate-700 bg-white rounded-lg shadow-[0_4px_0_0_rgb(203,213,225),0_8px_16px_-4px_rgba(0,0,0,0.1)]">Java</span>
            <span className="px-4 py-2 text-sm font-semibold text-slate-700 bg-white rounded-lg shadow-[0_4px_0_0_rgb(203,213,225),0_8px_16px_-4px_rgba(0,0,0,0.1)]">C++</span>
            <span className="px-4 py-2 text-sm font-semibold text-slate-700 bg-white rounded-lg shadow-[0_4px_0_0_rgb(203,213,225),0_8px_16px_-4px_rgba(0,0,0,0.1)]">Ruby</span>
            <span className="px-4 py-2 text-sm font-semibold text-slate-700 bg-white rounded-lg shadow-[0_4px_0_0_rgb(203,213,225),0_8px_16px_-4px_rgba(0,0,0,0.1)]">Go</span>
            <span className="px-4 py-2 text-sm font-semibold text-slate-700 bg-white rounded-lg shadow-[0_4px_0_0_rgb(203,213,225),0_8px_16px_-4px_rgba(0,0,0,0.1)]">Rust</span>
            <span className="px-4 py-2 text-sm font-semibold text-slate-700 bg-white rounded-lg shadow-[0_4px_0_0_rgb(203,213,225),0_8px_16px_-4px_rgba(0,0,0,0.1)]">Swift</span>
          </div>
        </div>
      </div>
    </div>
  );
}
