export default function LuxuryTag() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-sm font-medium text-amber-400 mb-4 tracking-wider uppercase">Basic Tags</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 text-sm font-semibold text-amber-100 bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-900/30 rounded-lg shadow-lg">
              Default
            </span>
            <span className="px-4 py-2 text-sm font-semibold text-amber-50 bg-gradient-to-br from-amber-600 to-amber-800 border border-amber-400/20 rounded-lg shadow-[0_8px_32px_rgba(251,191,36,0.25)]">
              Primary
            </span>
            <span className="px-4 py-2 text-sm font-semibold text-emerald-50 bg-gradient-to-br from-emerald-600 to-emerald-800 border border-emerald-400/20 rounded-lg shadow-[0_8px_32px_rgba(16,185,129,0.25)]">
              Success
            </span>
            <span className="px-4 py-2 text-sm font-semibold text-rose-50 bg-gradient-to-br from-rose-600 to-rose-800 border border-rose-400/20 rounded-lg shadow-[0_8px_32px_rgba(244,63,94,0.25)]">
              Error
            </span>
            <span className="px-4 py-2 text-sm font-semibold text-amber-50 bg-gradient-to-br from-amber-500 to-orange-700 border border-amber-400/20 rounded-lg shadow-[0_8px_32px_rgba(245,158,11,0.25)]">
              Warning
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-amber-400 mb-4 tracking-wider uppercase">Sizes</h2>
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 text-xs font-semibold text-amber-100 bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-900/30 rounded-md shadow-lg">
              Small
            </span>
            <span className="px-4 py-2 text-sm font-semibold text-amber-100 bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-900/30 rounded-lg shadow-lg">
              Medium
            </span>
            <span className="px-5 py-2.5 text-base font-semibold text-amber-100 bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-900/30 rounded-lg shadow-lg">
              Large
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-amber-400 mb-4 tracking-wider uppercase">With Icons</h2>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-amber-100 bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-900/30 rounded-lg shadow-lg">
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
              User
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-amber-50 bg-gradient-to-br from-amber-600 to-amber-800 border border-amber-400/20 rounded-lg shadow-[0_8px_32px_rgba(251,191,36,0.25)]">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Featured
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-emerald-50 bg-gradient-to-br from-emerald-600 to-emerald-800 border border-emerald-400/20 rounded-lg shadow-[0_8px_32px_rgba(16,185,129,0.25)]">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Verified
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-amber-400 mb-4 tracking-wider uppercase">Removable Tags</h2>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-amber-100 bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-900/30 rounded-lg shadow-lg group">
              React
              <button className="text-amber-600 hover:text-amber-400 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-amber-50 bg-gradient-to-br from-amber-600 to-amber-800 border border-amber-400/20 rounded-lg shadow-[0_8px_32px_rgba(251,191,36,0.25)] group">
              TypeScript
              <button className="text-amber-200 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-emerald-50 bg-gradient-to-br from-emerald-600 to-emerald-800 border border-emerald-400/20 rounded-lg shadow-[0_8px_32px_rgba(16,185,129,0.25)] group">
              Tailwind
              <button className="text-emerald-200 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-amber-400 mb-4 tracking-wider uppercase">Selectable Tags</h2>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 text-sm font-semibold text-amber-100 bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-900/30 rounded-lg shadow-lg hover:border-amber-800/50 transition-all">
              All
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-amber-50 bg-gradient-to-br from-amber-600 to-amber-800 border border-amber-400/20 rounded-lg shadow-[0_8px_32px_rgba(251,191,36,0.25)]">
              Active
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-amber-100 bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-900/30 rounded-lg shadow-lg hover:border-amber-800/50 transition-all">
              Pending
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-amber-100 bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-900/30 rounded-lg shadow-lg hover:border-amber-800/50 transition-all">
              Completed
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-amber-400 mb-4 tracking-wider uppercase">Tag Cloud</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 text-sm font-semibold text-amber-100 bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-900/30 rounded-lg shadow-lg">JavaScript</span>
            <span className="px-4 py-2 text-sm font-semibold text-amber-100 bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-900/30 rounded-lg shadow-lg">Python</span>
            <span className="px-4 py-2 text-sm font-semibold text-amber-100 bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-900/30 rounded-lg shadow-lg">Java</span>
            <span className="px-4 py-2 text-sm font-semibold text-amber-100 bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-900/30 rounded-lg shadow-lg">C++</span>
            <span className="px-4 py-2 text-sm font-semibold text-amber-100 bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-900/30 rounded-lg shadow-lg">Ruby</span>
            <span className="px-4 py-2 text-sm font-semibold text-amber-100 bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-900/30 rounded-lg shadow-lg">Go</span>
            <span className="px-4 py-2 text-sm font-semibold text-amber-100 bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-900/30 rounded-lg shadow-lg">Rust</span>
            <span className="px-4 py-2 text-sm font-semibold text-amber-100 bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-900/30 rounded-lg shadow-lg">Swift</span>
          </div>
        </div>
      </div>
    </div>
  );
}
