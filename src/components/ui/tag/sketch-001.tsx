export default function SketchTag() {
  return (
    <div className="min-h-screen bg-amber-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-sm font-bold text-gray-800 mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Basic Tags</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 text-sm font-bold text-gray-800 bg-white border-2 border-black rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all" style={{ transform: 'rotate(-1deg)' }}>
              Default
            </span>
            <span className="px-4 py-2 text-sm font-bold text-white bg-blue-400 border-2 border-black rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all" style={{ transform: 'rotate(1deg)' }}>
              Primary
            </span>
            <span className="px-4 py-2 text-sm font-bold text-white bg-green-400 border-2 border-black rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all" style={{ transform: 'rotate(-0.5deg)' }}>
              Success
            </span>
            <span className="px-4 py-2 text-sm font-bold text-white bg-red-400 border-2 border-black rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all" style={{ transform: 'rotate(0.5deg)' }}>
              Error
            </span>
            <span className="px-4 py-2 text-sm font-bold text-white bg-yellow-400 border-2 border-black rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all" style={{ transform: 'rotate(-1.5deg)' }}>
              Warning
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-gray-800 mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Sizes</h2>
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 text-xs font-bold text-gray-800 bg-white border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" style={{ transform: 'rotate(1deg)' }}>
              Small
            </span>
            <span className="px-4 py-2 text-sm font-bold text-gray-800 bg-white border-2 border-black rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" style={{ transform: 'rotate(-1deg)' }}>
              Medium
            </span>
            <span className="px-5 py-2.5 text-base font-bold text-gray-800 bg-white border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" style={{ transform: 'rotate(0.5deg)' }}>
              Large
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-gray-800 mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>With Icons</h2>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-800 bg-white border-2 border-black rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" style={{ transform: 'rotate(-0.5deg)' }}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
              User
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-purple-400 border-2 border-black rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" style={{ transform: 'rotate(1deg)' }}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Featured
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-green-400 border-2 border-black rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" style={{ transform: 'rotate(-1deg)' }}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Verified
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-gray-800 mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Removable Tags</h2>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-800 bg-white border-2 border-black rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group" style={{ transform: 'rotate(0.5deg)' }}>
              React
              <button className="text-gray-600 hover:text-black transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-blue-400 border-2 border-black rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group" style={{ transform: 'rotate(-1deg)' }}>
              TypeScript
              <button className="text-blue-100 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-green-400 border-2 border-black rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group" style={{ transform: 'rotate(1deg)' }}>
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
          <h2 className="text-sm font-bold text-gray-800 mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Selectable Tags</h2>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 text-sm font-bold text-gray-800 bg-white border-2 border-black rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all" style={{ transform: 'rotate(-1deg)' }}>
              All
            </button>
            <button className="px-4 py-2 text-sm font-bold text-white bg-blue-400 border-2 border-black rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" style={{ transform: 'rotate(1deg)' }}>
              Active
            </button>
            <button className="px-4 py-2 text-sm font-bold text-gray-800 bg-white border-2 border-black rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all" style={{ transform: 'rotate(0.5deg)' }}>
              Pending
            </button>
            <button className="px-4 py-2 text-sm font-bold text-gray-800 bg-white border-2 border-black rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all" style={{ transform: 'rotate(-0.5deg)' }}>
              Completed
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-gray-800 mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Tag Cloud</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 text-sm font-bold text-white bg-yellow-400 border-2 border-black rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" style={{ transform: 'rotate(1deg)' }}>JavaScript</span>
            <span className="px-4 py-2 text-sm font-bold text-white bg-blue-400 border-2 border-black rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" style={{ transform: 'rotate(-1deg)' }}>Python</span>
            <span className="px-4 py-2 text-sm font-bold text-white bg-red-400 border-2 border-black rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" style={{ transform: 'rotate(0.5deg)' }}>Java</span>
            <span className="px-4 py-2 text-sm font-bold text-white bg-purple-400 border-2 border-black rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" style={{ transform: 'rotate(-0.5deg)' }}>C++</span>
            <span className="px-4 py-2 text-sm font-bold text-white bg-pink-400 border-2 border-black rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" style={{ transform: 'rotate(1.5deg)' }}>Ruby</span>
            <span className="px-4 py-2 text-sm font-bold text-white bg-cyan-400 border-2 border-black rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" style={{ transform: 'rotate(-1deg)' }}>Go</span>
            <span className="px-4 py-2 text-sm font-bold text-white bg-orange-400 border-2 border-black rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" style={{ transform: 'rotate(0.5deg)' }}>Rust</span>
            <span className="px-4 py-2 text-sm font-bold text-white bg-indigo-400 border-2 border-black rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" style={{ transform: 'rotate(-1.5deg)' }}>Swift</span>
          </div>
        </div>
      </div>
    </div>
  );
}
