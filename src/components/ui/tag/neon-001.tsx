export default function NeonTag() {
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-sm font-medium text-pink-400 mb-4 tracking-wider">Basic Tags</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 text-sm font-bold text-gray-100 bg-black border-2 border-gray-500 rounded shadow-[0_0_10px_rgba(156,163,175,0.5)] hover:shadow-[0_0_20px_rgba(156,163,175,0.8)] transition-shadow">
              Default
            </span>
            <span className="px-4 py-2 text-sm font-bold text-cyan-300 bg-black border-2 border-cyan-400 rounded shadow-[0_0_15px_rgba(34,211,238,0.6)] hover:shadow-[0_0_25px_rgba(34,211,238,1)] transition-shadow">
              Primary
            </span>
            <span className="px-4 py-2 text-sm font-bold text-green-300 bg-black border-2 border-green-400 rounded shadow-[0_0_15px_rgba(74,222,128,0.6)] hover:shadow-[0_0_25px_rgba(74,222,128,1)] transition-shadow">
              Success
            </span>
            <span className="px-4 py-2 text-sm font-bold text-pink-300 bg-black border-2 border-pink-400 rounded shadow-[0_0_15px_rgba(244,114,182,0.6)] hover:shadow-[0_0_25px_rgba(244,114,182,1)] transition-shadow">
              Error
            </span>
            <span className="px-4 py-2 text-sm font-bold text-yellow-300 bg-black border-2 border-yellow-400 rounded shadow-[0_0_15px_rgba(250,204,21,0.6)] hover:shadow-[0_0_25px_rgba(250,204,21,1)] transition-shadow">
              Warning
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-pink-400 mb-4 tracking-wider">Sizes</h2>
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 text-xs font-bold text-gray-100 bg-black border-2 border-gray-500 rounded shadow-[0_0_10px_rgba(156,163,175,0.5)]">
              Small
            </span>
            <span className="px-4 py-2 text-sm font-bold text-gray-100 bg-black border-2 border-gray-500 rounded shadow-[0_0_10px_rgba(156,163,175,0.5)]">
              Medium
            </span>
            <span className="px-5 py-2.5 text-base font-bold text-gray-100 bg-black border-2 border-gray-500 rounded shadow-[0_0_10px_rgba(156,163,175,0.5)]">
              Large
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-pink-400 mb-4 tracking-wider">With Icons</h2>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-100 bg-black border-2 border-gray-500 rounded shadow-[0_0_10px_rgba(156,163,175,0.5)]">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
              User
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-purple-300 bg-black border-2 border-purple-400 rounded shadow-[0_0_15px_rgba(192,132,252,0.6)] hover:shadow-[0_0_25px_rgba(192,132,252,1)] transition-shadow">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Featured
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-green-300 bg-black border-2 border-green-400 rounded shadow-[0_0_15px_rgba(74,222,128,0.6)] hover:shadow-[0_0_25px_rgba(74,222,128,1)] transition-shadow">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Verified
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-pink-400 mb-4 tracking-wider">Removable Tags</h2>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-100 bg-black border-2 border-gray-500 rounded shadow-[0_0_10px_rgba(156,163,175,0.5)] group">
              React
              <button className="text-gray-400 hover:text-gray-100 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-cyan-300 bg-black border-2 border-cyan-400 rounded shadow-[0_0_15px_rgba(34,211,238,0.6)] group">
              TypeScript
              <button className="text-cyan-400 hover:text-cyan-200 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-green-300 bg-black border-2 border-green-400 rounded shadow-[0_0_15px_rgba(74,222,128,0.6)] group">
              Tailwind
              <button className="text-green-400 hover:text-green-200 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-pink-400 mb-4 tracking-wider">Selectable Tags</h2>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 text-sm font-bold text-gray-100 bg-black border-2 border-gray-500 rounded shadow-[0_0_10px_rgba(156,163,175,0.5)] hover:shadow-[0_0_20px_rgba(156,163,175,0.8)] transition-shadow">
              All
            </button>
            <button className="px-4 py-2 text-sm font-bold text-cyan-300 bg-black border-2 border-cyan-400 rounded shadow-[0_0_20px_rgba(34,211,238,1)]">
              Active
            </button>
            <button className="px-4 py-2 text-sm font-bold text-gray-100 bg-black border-2 border-gray-500 rounded shadow-[0_0_10px_rgba(156,163,175,0.5)] hover:shadow-[0_0_20px_rgba(156,163,175,0.8)] transition-shadow">
              Pending
            </button>
            <button className="px-4 py-2 text-sm font-bold text-gray-100 bg-black border-2 border-gray-500 rounded shadow-[0_0_10px_rgba(156,163,175,0.5)] hover:shadow-[0_0_20px_rgba(156,163,175,0.8)] transition-shadow">
              Completed
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-pink-400 mb-4 tracking-wider">Tag Cloud</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 text-sm font-bold text-pink-300 bg-black border-2 border-pink-400 rounded shadow-[0_0_15px_rgba(244,114,182,0.6)]">JavaScript</span>
            <span className="px-4 py-2 text-sm font-bold text-cyan-300 bg-black border-2 border-cyan-400 rounded shadow-[0_0_15px_rgba(34,211,238,0.6)]">Python</span>
            <span className="px-4 py-2 text-sm font-bold text-orange-300 bg-black border-2 border-orange-400 rounded shadow-[0_0_15px_rgba(251,146,60,0.6)]">Java</span>
            <span className="px-4 py-2 text-sm font-bold text-purple-300 bg-black border-2 border-purple-400 rounded shadow-[0_0_15px_rgba(192,132,252,0.6)]">C++</span>
            <span className="px-4 py-2 text-sm font-bold text-red-300 bg-black border-2 border-red-400 rounded shadow-[0_0_15px_rgba(248,113,113,0.6)]">Ruby</span>
            <span className="px-4 py-2 text-sm font-bold text-blue-300 bg-black border-2 border-blue-400 rounded shadow-[0_0_15px_rgba(96,165,250,0.6)]">Go</span>
            <span className="px-4 py-2 text-sm font-bold text-amber-300 bg-black border-2 border-amber-400 rounded shadow-[0_0_15px_rgba(251,191,36,0.6)]">Rust</span>
            <span className="px-4 py-2 text-sm font-bold text-rose-300 bg-black border-2 border-rose-400 rounded shadow-[0_0_15px_rgba(251,113,133,0.6)]">Swift</span>
          </div>
        </div>
      </div>
    </div>
  );
}
