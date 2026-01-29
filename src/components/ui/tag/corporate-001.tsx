export default function CorporateTag() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wide">Basic Tags</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded uppercase tracking-wide">
              Default
            </span>
            <span className="px-3 py-1.5 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-300 rounded uppercase tracking-wide">
              Primary
            </span>
            <span className="px-3 py-1.5 text-xs font-semibold text-green-700 bg-green-50 border border-green-300 rounded uppercase tracking-wide">
              Success
            </span>
            <span className="px-3 py-1.5 text-xs font-semibold text-red-700 bg-red-50 border border-red-300 rounded uppercase tracking-wide">
              Error
            </span>
            <span className="px-3 py-1.5 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-300 rounded uppercase tracking-wide">
              Warning
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wide">Sizes</h2>
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2 py-1 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded uppercase tracking-wide">
              Small
            </span>
            <span className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded uppercase tracking-wide">
              Medium
            </span>
            <span className="px-4 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded uppercase tracking-wide">
              Large
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wide">With Icons</h2>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded uppercase tracking-wide">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
              Employee
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-300 rounded uppercase tracking-wide">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Contact
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-green-700 bg-green-50 border border-green-300 rounded uppercase tracking-wide">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Certified
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wide">Removable Tags</h2>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded uppercase tracking-wide group">
              Finance
              <button className="text-slate-500 hover:text-slate-700 transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded uppercase tracking-wide group">
              Legal
              <button className="text-slate-500 hover:text-slate-700 transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded uppercase tracking-wide group">
              Marketing
              <button className="text-slate-500 hover:text-slate-700 transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wide">Selectable Tags</h2>
          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded uppercase tracking-wide hover:bg-slate-50 transition-colors">
              Q1
            </button>
            <button className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-700 border border-slate-700 rounded uppercase tracking-wide">
              Q2
            </button>
            <button className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded uppercase tracking-wide hover:bg-slate-50 transition-colors">
              Q3
            </button>
            <button className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded uppercase tracking-wide hover:bg-slate-50 transition-colors">
              Q4
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wide">Tag Cloud</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded uppercase tracking-wide">Strategy</span>
            <span className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded uppercase tracking-wide">Operations</span>
            <span className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded uppercase tracking-wide">Finance</span>
            <span className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded uppercase tracking-wide">HR</span>
            <span className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded uppercase tracking-wide">Legal</span>
            <span className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded uppercase tracking-wide">IT</span>
            <span className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded uppercase tracking-wide">Sales</span>
            <span className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded uppercase tracking-wide">Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}
