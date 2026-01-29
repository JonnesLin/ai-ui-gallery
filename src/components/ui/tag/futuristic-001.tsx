export default function FuturisticTag() {
  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-sm font-medium text-cyan-400 mb-4 tracking-wider">Basic Tags</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 text-sm font-medium text-slate-300 bg-slate-900/50 border border-slate-700/50 rounded backdrop-blur-sm hover:border-slate-600 hover:shadow-[0_0_15px_rgba(148,163,184,0.3)] transition-all">
              Default
            </span>
            <span className="px-4 py-2 text-sm font-medium text-cyan-300 bg-cyan-950/30 border border-cyan-500/50 rounded backdrop-blur-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all">
              Primary
            </span>
            <span className="px-4 py-2 text-sm font-medium text-emerald-300 bg-emerald-950/30 border border-emerald-500/50 rounded backdrop-blur-sm hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all">
              Success
            </span>
            <span className="px-4 py-2 text-sm font-medium text-rose-300 bg-rose-950/30 border border-rose-500/50 rounded backdrop-blur-sm hover:shadow-[0_0_20px_rgba(244,63,94,0.5)] transition-all">
              Error
            </span>
            <span className="px-4 py-2 text-sm font-medium text-amber-300 bg-amber-950/30 border border-amber-500/50 rounded backdrop-blur-sm hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-all">
              Warning
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-cyan-400 mb-4 tracking-wider">Sizes</h2>
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-900/50 border border-slate-700/50 rounded backdrop-blur-sm">
              Small
            </span>
            <span className="px-4 py-2 text-sm font-medium text-slate-300 bg-slate-900/50 border border-slate-700/50 rounded backdrop-blur-sm">
              Medium
            </span>
            <span className="px-5 py-2.5 text-base font-medium text-slate-300 bg-slate-900/50 border border-slate-700/50 rounded backdrop-blur-sm">
              Large
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-cyan-400 mb-4 tracking-wider">With Icons</h2>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-300 bg-slate-900/50 border border-slate-700/50 rounded backdrop-blur-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
              User
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-purple-300 bg-purple-950/30 border border-purple-500/50 rounded backdrop-blur-sm hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Featured
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-emerald-300 bg-emerald-950/30 border border-emerald-500/50 rounded backdrop-blur-sm hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Verified
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-cyan-400 mb-4 tracking-wider">Removable Tags</h2>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-300 bg-slate-900/50 border border-slate-700/50 rounded backdrop-blur-sm group">
              React
              <button className="text-slate-500 hover:text-cyan-400 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-cyan-300 bg-cyan-950/30 border border-cyan-500/50 rounded backdrop-blur-sm group">
              TypeScript
              <button className="text-cyan-500 hover:text-cyan-300 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-emerald-300 bg-emerald-950/30 border border-emerald-500/50 rounded backdrop-blur-sm group">
              Tailwind
              <button className="text-emerald-500 hover:text-emerald-300 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-cyan-400 mb-4 tracking-wider">Selectable Tags</h2>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 text-sm font-medium text-slate-300 bg-slate-900/50 border border-slate-700/50 rounded backdrop-blur-sm hover:border-slate-600 hover:shadow-[0_0_15px_rgba(148,163,184,0.3)] transition-all">
              All
            </button>
            <button className="px-4 py-2 text-sm font-medium text-cyan-300 bg-cyan-950/30 border border-cyan-500 rounded backdrop-blur-sm shadow-[0_0_20px_rgba(6,182,212,0.5)]">
              Active
            </button>
            <button className="px-4 py-2 text-sm font-medium text-slate-300 bg-slate-900/50 border border-slate-700/50 rounded backdrop-blur-sm hover:border-slate-600 hover:shadow-[0_0_15px_rgba(148,163,184,0.3)] transition-all">
              Pending
            </button>
            <button className="px-4 py-2 text-sm font-medium text-slate-300 bg-slate-900/50 border border-slate-700/50 rounded backdrop-blur-sm hover:border-slate-600 hover:shadow-[0_0_15px_rgba(148,163,184,0.3)] transition-all">
              Completed
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-cyan-400 mb-4 tracking-wider">Tag Cloud</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 text-sm font-medium text-slate-300 bg-slate-900/50 border border-slate-700/50 rounded backdrop-blur-sm">JavaScript</span>
            <span className="px-4 py-2 text-sm font-medium text-slate-300 bg-slate-900/50 border border-slate-700/50 rounded backdrop-blur-sm">Python</span>
            <span className="px-4 py-2 text-sm font-medium text-slate-300 bg-slate-900/50 border border-slate-700/50 rounded backdrop-blur-sm">Java</span>
            <span className="px-4 py-2 text-sm font-medium text-slate-300 bg-slate-900/50 border border-slate-700/50 rounded backdrop-blur-sm">C++</span>
            <span className="px-4 py-2 text-sm font-medium text-slate-300 bg-slate-900/50 border border-slate-700/50 rounded backdrop-blur-sm">Ruby</span>
            <span className="px-4 py-2 text-sm font-medium text-slate-300 bg-slate-900/50 border border-slate-700/50 rounded backdrop-blur-sm">Go</span>
            <span className="px-4 py-2 text-sm font-medium text-slate-300 bg-slate-900/50 border border-slate-700/50 rounded backdrop-blur-sm">Rust</span>
            <span className="px-4 py-2 text-sm font-medium text-slate-300 bg-slate-900/50 border border-slate-700/50 rounded backdrop-blur-sm">Swift</span>
          </div>
        </div>
      </div>
    </div>
  );
}
