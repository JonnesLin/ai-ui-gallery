export default function MonochromeTag() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-sm font-medium text-gray-500 mb-4">Basic Tags</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded">
              Default
            </span>
            <span className="px-3 py-1.5 text-sm font-medium text-white bg-gray-800 border border-gray-900 rounded">
              Primary
            </span>
            <span className="px-3 py-1.5 text-sm font-medium text-gray-900 bg-gray-200 border border-gray-400 rounded">
              Success
            </span>
            <span className="px-3 py-1.5 text-sm font-medium text-white bg-gray-700 border border-gray-800 rounded">
              Error
            </span>
            <span className="px-3 py-1.5 text-sm font-medium text-gray-900 bg-gray-300 border border-gray-500 rounded">
              Warning
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-500 mb-4">Sizes</h2>
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 text-xs font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded">
              Small
            </span>
            <span className="px-3 py-1.5 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded">
              Medium
            </span>
            <span className="px-4 py-2 text-base font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded">
              Large
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-500 mb-4">With Icons</h2>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
              User
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white bg-gray-800 border border-gray-900 rounded">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Featured
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-900 bg-gray-200 border border-gray-400 rounded">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Verified
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-500 mb-4">Removable Tags</h2>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded group">
              React
              <button className="text-gray-500 hover:text-gray-900 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-gray-800 border border-gray-900 rounded group">
              TypeScript
              <button className="text-gray-400 hover:text-gray-200 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-900 bg-gray-200 border border-gray-400 rounded group">
              Tailwind
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-500 mb-4">Selectable Tags</h2>
          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-1.5 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 transition-colors">
              All
            </button>
            <button className="px-3 py-1.5 text-sm font-medium text-white bg-gray-900 border border-gray-900 rounded">
              Active
            </button>
            <button className="px-3 py-1.5 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 transition-colors">
              Pending
            </button>
            <button className="px-3 py-1.5 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 transition-colors">
              Completed
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-gray-500 mb-4">Tag Cloud</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded">JavaScript</span>
            <span className="px-3 py-1.5 text-sm font-medium text-white bg-gray-800 border border-gray-900 rounded">Python</span>
            <span className="px-3 py-1.5 text-sm font-medium text-gray-900 bg-gray-200 border border-gray-400 rounded">Java</span>
            <span className="px-3 py-1.5 text-sm font-medium text-white bg-gray-700 border border-gray-800 rounded">C++</span>
            <span className="px-3 py-1.5 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded">Ruby</span>
            <span className="px-3 py-1.5 text-sm font-medium text-white bg-gray-600 border border-gray-700 rounded">Go</span>
            <span className="px-3 py-1.5 text-sm font-medium text-gray-900 bg-gray-300 border border-gray-500 rounded">Rust</span>
            <span className="px-3 py-1.5 text-sm font-medium text-white bg-gray-800 border border-gray-900 rounded">Swift</span>
          </div>
        </div>
      </div>
    </div>
  );
}
