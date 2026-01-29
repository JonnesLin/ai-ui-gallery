export default function NatureTag() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-sm font-medium text-green-700 mb-4">Basic Tags</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 text-sm font-medium text-green-800 bg-green-100 border border-green-300 rounded-full shadow-sm">
              Default
            </span>
            <span className="px-4 py-2 text-sm font-medium text-white bg-green-600 border border-green-700 rounded-full shadow-sm">
              Primary
            </span>
            <span className="px-4 py-2 text-sm font-medium text-emerald-800 bg-emerald-100 border border-emerald-300 rounded-full shadow-sm">
              Success
            </span>
            <span className="px-4 py-2 text-sm font-medium text-amber-800 bg-amber-100 border border-amber-300 rounded-full shadow-sm">
              Error
            </span>
            <span className="px-4 py-2 text-sm font-medium text-yellow-800 bg-yellow-100 border border-yellow-300 rounded-full shadow-sm">
              Warning
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-green-700 mb-4">Sizes</h2>
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 text-xs font-medium text-green-800 bg-green-100 border border-green-300 rounded-full shadow-sm">
              Small
            </span>
            <span className="px-4 py-2 text-sm font-medium text-green-800 bg-green-100 border border-green-300 rounded-full shadow-sm">
              Medium
            </span>
            <span className="px-5 py-2.5 text-base font-medium text-green-800 bg-green-100 border border-green-300 rounded-full shadow-sm">
              Large
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-green-700 mb-4">With Icons</h2>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-green-800 bg-green-100 border border-green-300 rounded-full shadow-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
              User
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-600 border border-green-700 rounded-full shadow-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Featured
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-emerald-800 bg-emerald-100 border border-emerald-300 rounded-full shadow-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Verified
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-green-700 mb-4">Removable Tags</h2>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-green-800 bg-green-100 border border-green-300 rounded-full shadow-sm group">
              React
              <button className="text-green-600 hover:text-green-800 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-600 border border-green-700 rounded-full shadow-sm group">
              TypeScript
              <button className="text-green-100 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-emerald-800 bg-emerald-100 border border-emerald-300 rounded-full shadow-sm group">
              Tailwind
              <button className="text-emerald-600 hover:text-emerald-800 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-green-700 mb-4">Selectable Tags</h2>
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 text-sm font-medium text-green-800 bg-green-100 border border-green-300 rounded-full shadow-sm hover:bg-green-200 transition-colors">
              All
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 border border-green-700 rounded-full shadow-sm">
              Active
            </button>
            <button className="px-4 py-2 text-sm font-medium text-green-800 bg-green-100 border border-green-300 rounded-full shadow-sm hover:bg-green-200 transition-colors">
              Pending
            </button>
            <button className="px-4 py-2 text-sm font-medium text-green-800 bg-green-100 border border-green-300 rounded-full shadow-sm hover:bg-green-200 transition-colors">
              Completed
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-green-700 mb-4">Tag Cloud</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 text-sm font-medium text-green-800 bg-green-100 border border-green-300 rounded-full shadow-sm">JavaScript</span>
            <span className="px-4 py-2 text-sm font-medium text-emerald-800 bg-emerald-100 border border-emerald-300 rounded-full shadow-sm">Python</span>
            <span className="px-4 py-2 text-sm font-medium text-teal-800 bg-teal-100 border border-teal-300 rounded-full shadow-sm">Java</span>
            <span className="px-4 py-2 text-sm font-medium text-lime-800 bg-lime-100 border border-lime-300 rounded-full shadow-sm">C++</span>
            <span className="px-4 py-2 text-sm font-medium text-green-800 bg-green-100 border border-green-300 rounded-full shadow-sm">Ruby</span>
            <span className="px-4 py-2 text-sm font-medium text-emerald-800 bg-emerald-100 border border-emerald-300 rounded-full shadow-sm">Go</span>
            <span className="px-4 py-2 text-sm font-medium text-teal-800 bg-teal-100 border border-teal-300 rounded-full shadow-sm">Rust</span>
            <span className="px-4 py-2 text-sm font-medium text-lime-800 bg-lime-100 border border-lime-300 rounded-full shadow-sm">Swift</span>
          </div>
        </div>
      </div>
    </div>
  );
}
