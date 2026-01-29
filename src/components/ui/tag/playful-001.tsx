export default function PlayfulTag() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-sm font-bold text-purple-600 mb-4">Basic Tags</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 text-sm font-bold text-gray-700 bg-white border-2 border-gray-300 rounded-full shadow-md hover:rotate-2 transition-transform">
              Default
            </span>
            <span className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-purple-600 rounded-full shadow-md hover:-rotate-2 transition-transform">
              Primary
            </span>
            <span className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-green-400 to-emerald-500 border-2 border-green-600 rounded-full shadow-md hover:rotate-2 transition-transform">
              Success
            </span>
            <span className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-red-400 to-pink-500 border-2 border-pink-600 rounded-full shadow-md hover:-rotate-2 transition-transform">
              Error
            </span>
            <span className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-yellow-400 to-orange-500 border-2 border-orange-600 rounded-full shadow-md hover:rotate-2 transition-transform">
              Warning
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-purple-600 mb-4">Sizes</h2>
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 text-xs font-bold text-white bg-gradient-to-r from-pink-400 to-rose-500 border-2 border-rose-600 rounded-full shadow-md">
              Small
            </span>
            <span className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-pink-400 to-rose-500 border-2 border-rose-600 rounded-full shadow-md">
              Medium
            </span>
            <span className="px-5 py-2.5 text-base font-bold text-white bg-gradient-to-r from-pink-400 to-rose-500 border-2 border-rose-600 rounded-full shadow-md">
              Large
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-purple-600 mb-4">With Icons</h2>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-blue-400 to-cyan-500 border-2 border-cyan-600 rounded-full shadow-md">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
              User
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-purple-400 to-pink-500 border-2 border-pink-600 rounded-full shadow-md">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Featured
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-green-400 to-emerald-500 border-2 border-emerald-600 rounded-full shadow-md">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Verified
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-purple-600 mb-4">Removable Tags</h2>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-blue-400 to-cyan-500 border-2 border-cyan-600 rounded-full shadow-md group">
              React
              <button className="text-white/80 hover:text-white hover:scale-125 transition-transform">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-purple-400 to-pink-500 border-2 border-pink-600 rounded-full shadow-md group">
              TypeScript
              <button className="text-white/80 hover:text-white hover:scale-125 transition-transform">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-green-400 to-emerald-500 border-2 border-emerald-600 rounded-full shadow-md group">
              Tailwind
              <button className="text-white/80 hover:text-white hover:scale-125 transition-transform">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-purple-600 mb-4">Selectable Tags</h2>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 text-sm font-bold text-gray-700 bg-white border-2 border-gray-300 rounded-full shadow-md hover:scale-105 hover:rotate-1 transition-transform">
              All
            </button>
            <button className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-purple-600 rounded-full shadow-md scale-105">
              Active
            </button>
            <button className="px-4 py-2 text-sm font-bold text-gray-700 bg-white border-2 border-gray-300 rounded-full shadow-md hover:scale-105 hover:-rotate-1 transition-transform">
              Pending
            </button>
            <button className="px-4 py-2 text-sm font-bold text-gray-700 bg-white border-2 border-gray-300 rounded-full shadow-md hover:scale-105 hover:rotate-1 transition-transform">
              Completed
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-purple-600 mb-4">Tag Cloud</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-yellow-400 to-orange-500 border-2 border-orange-600 rounded-full shadow-md">JavaScript</span>
            <span className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-blue-400 to-cyan-500 border-2 border-cyan-600 rounded-full shadow-md">Python</span>
            <span className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-red-400 to-pink-500 border-2 border-pink-600 rounded-full shadow-md">Java</span>
            <span className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-purple-400 to-indigo-500 border-2 border-indigo-600 rounded-full shadow-md">C++</span>
            <span className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-rose-400 to-red-500 border-2 border-red-600 rounded-full shadow-md">Ruby</span>
            <span className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-400 to-green-500 border-2 border-green-600 rounded-full shadow-md">Go</span>
            <span className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-amber-400 to-yellow-500 border-2 border-yellow-600 rounded-full shadow-md">Rust</span>
            <span className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-orange-400 to-red-500 border-2 border-red-600 rounded-full shadow-md">Swift</span>
          </div>
        </div>
      </div>
    </div>
  );
}
