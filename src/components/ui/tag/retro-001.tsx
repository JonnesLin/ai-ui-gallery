export default function RetroTag() {
  return (
    <div className="min-h-screen bg-amber-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-sm font-bold text-amber-900 mb-4 font-mono">BASIC TAGS</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 text-sm font-bold text-amber-900 bg-amber-200 border-2 border-amber-900 rounded-sm shadow-[2px_2px_0px_0px_rgba(120,53,15,1)] font-mono">
              Default
            </span>
            <span className="px-4 py-2 text-sm font-bold text-blue-900 bg-blue-200 border-2 border-blue-900 rounded-sm shadow-[2px_2px_0px_0px_rgba(30,58,138,1)] font-mono">
              Primary
            </span>
            <span className="px-4 py-2 text-sm font-bold text-green-900 bg-green-200 border-2 border-green-900 rounded-sm shadow-[2px_2px_0px_0px_rgba(20,83,45,1)] font-mono">
              Success
            </span>
            <span className="px-4 py-2 text-sm font-bold text-red-900 bg-red-200 border-2 border-red-900 rounded-sm shadow-[2px_2px_0px_0px_rgba(127,29,29,1)] font-mono">
              Error
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-amber-900 mb-4 font-mono">SIZES</h2>
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 text-xs font-bold text-orange-900 bg-orange-200 border-2 border-orange-900 rounded-sm shadow-[2px_2px_0px_0px_rgba(124,45,18,1)] font-mono">
              SMALL
            </span>
            <span className="px-4 py-2 text-sm font-bold text-orange-900 bg-orange-200 border-2 border-orange-900 rounded-sm shadow-[2px_2px_0px_0px_rgba(124,45,18,1)] font-mono">
              MEDIUM
            </span>
            <span className="px-5 py-2.5 text-base font-bold text-orange-900 bg-orange-200 border-2 border-orange-900 rounded-sm shadow-[2px_2px_0px_0px_rgba(124,45,18,1)] font-mono">
              LARGE
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-amber-900 mb-4 font-mono">WITH ICONS</h2>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-teal-900 bg-teal-200 border-2 border-teal-900 rounded-sm shadow-[2px_2px_0px_0px_rgba(19,78,74,1)] font-mono">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
              USER
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-purple-900 bg-purple-200 border-2 border-purple-900 rounded-sm shadow-[2px_2px_0px_0px_rgba(76,29,149,1)] font-mono">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              MAIL
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-pink-900 bg-pink-200 border-2 border-pink-900 rounded-sm shadow-[2px_2px_0px_0px_rgba(131,24,67,1)] font-mono">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              LIKE
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-amber-900 mb-4 font-mono">REMOVABLE TAGS</h2>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-lime-900 bg-lime-200 border-2 border-lime-900 rounded-sm shadow-[2px_2px_0px_0px_rgba(54,83,20,1)] font-mono group">
              RETRO
              <button className="border border-lime-900 bg-lime-100 hover:bg-lime-300 transition-colors p-0.5">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-cyan-900 bg-cyan-200 border-2 border-cyan-900 rounded-sm shadow-[2px_2px_0px_0px_rgba(22,78,99,1)] font-mono group">
              VINTAGE
              <button className="border border-cyan-900 bg-cyan-100 hover:bg-cyan-300 transition-colors p-0.5">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-rose-900 bg-rose-200 border-2 border-rose-900 rounded-sm shadow-[2px_2px_0px_0px_rgba(136,19,55,1)] font-mono group">
              CLASSIC
              <button className="border border-rose-900 bg-rose-100 hover:bg-rose-300 transition-colors p-0.5">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-amber-900 mb-4 font-mono">SELECTABLE TAGS</h2>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 text-sm font-bold text-amber-900 bg-amber-200 border-2 border-amber-900 rounded-sm shadow-[2px_2px_0px_0px_rgba(120,53,15,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_rgba(120,53,15,1)] transition-all font-mono">
              ALL
            </button>
            <button className="px-4 py-2 text-sm font-bold text-amber-100 bg-amber-900 border-2 border-amber-900 rounded-sm translate-x-0.5 translate-y-0.5 font-mono">
              ACTIVE
            </button>
            <button className="px-4 py-2 text-sm font-bold text-amber-900 bg-amber-200 border-2 border-amber-900 rounded-sm shadow-[2px_2px_0px_0px_rgba(120,53,15,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_rgba(120,53,15,1)] transition-all font-mono">
              DONE
            </button>
            <button className="px-4 py-2 text-sm font-bold text-amber-900 bg-amber-200 border-2 border-amber-900 rounded-sm shadow-[2px_2px_0px_0px_rgba(120,53,15,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_rgba(120,53,15,1)] transition-all font-mono">
              ARCHIVE
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-amber-900 mb-4 font-mono">TAG CLOUD</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 text-sm font-bold text-red-900 bg-red-200 border-2 border-red-900 rounded-sm shadow-[2px_2px_0px_0px_rgba(127,29,29,1)] font-mono">80s</span>
            <span className="px-4 py-2 text-sm font-bold text-blue-900 bg-blue-200 border-2 border-blue-900 rounded-sm shadow-[2px_2px_0px_0px_rgba(30,58,138,1)] font-mono">90s</span>
            <span className="px-4 py-2 text-sm font-bold text-green-900 bg-green-200 border-2 border-green-900 rounded-sm shadow-[2px_2px_0px_0px_rgba(20,83,45,1)] font-mono">PIXEL</span>
            <span className="px-4 py-2 text-sm font-bold text-yellow-900 bg-yellow-200 border-2 border-yellow-900 rounded-sm shadow-[2px_2px_0px_0px_rgba(113,63,18,1)] font-mono">ARCADE</span>
            <span className="px-4 py-2 text-sm font-bold text-purple-900 bg-purple-200 border-2 border-purple-900 rounded-sm shadow-[2px_2px_0px_0px_rgba(76,29,149,1)] font-mono">NEON</span>
            <span className="px-4 py-2 text-sm font-bold text-pink-900 bg-pink-200 border-2 border-pink-900 rounded-sm shadow-[2px_2px_0px_0px_rgba(131,24,67,1)] font-mono">VHS</span>
            <span className="px-4 py-2 text-sm font-bold text-teal-900 bg-teal-200 border-2 border-teal-900 rounded-sm shadow-[2px_2px_0px_0px_rgba(19,78,74,1)] font-mono">8BIT</span>
            <span className="px-4 py-2 text-sm font-bold text-orange-900 bg-orange-200 border-2 border-orange-900 rounded-sm shadow-[2px_2px_0px_0px_rgba(124,45,18,1)] font-mono">RETRO</span>
          </div>
        </div>
      </div>
    </div>
  );
}
