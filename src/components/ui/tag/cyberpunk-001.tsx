export default function CyberpunkTag() {
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-sm font-bold text-cyan-400 mb-4 uppercase tracking-wider border-l-4 border-cyan-400 pl-2">Basic Tags</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 text-sm font-bold text-gray-300 bg-gray-900 border border-gray-700 shadow-[0_0_10px_rgba(156,163,175,0.5)] uppercase tracking-wide">
              Default
            </span>
            <span className="px-4 py-2 text-sm font-bold text-cyan-400 bg-cyan-950 border border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] uppercase tracking-wide">
              Primary
            </span>
            <span className="px-4 py-2 text-sm font-bold text-lime-400 bg-lime-950 border border-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.5)] uppercase tracking-wide">
              Success
            </span>
            <span className="px-4 py-2 text-sm font-bold text-rose-400 bg-rose-950 border border-rose-400 shadow-[0_0_10px_rgba(251,113,133,0.5)] uppercase tracking-wide">
              Error
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-cyan-400 mb-4 uppercase tracking-wider border-l-4 border-cyan-400 pl-2">Sizes</h2>
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 text-xs font-bold text-purple-400 bg-purple-950 border border-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.5)] uppercase tracking-wide">
              Small
            </span>
            <span className="px-4 py-2 text-sm font-bold text-purple-400 bg-purple-950 border border-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.5)] uppercase tracking-wide">
              Medium
            </span>
            <span className="px-5 py-2.5 text-base font-bold text-purple-400 bg-purple-950 border border-purple-400 shadow-[0_0_12px_rgba(192,132,252,0.5)] uppercase tracking-wide">
              Large
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-cyan-400 mb-4 uppercase tracking-wider border-l-4 border-cyan-400 pl-2">With Icons</h2>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-cyan-400 bg-cyan-950 border border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] uppercase tracking-wide">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
              User
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-fuchsia-400 bg-fuchsia-950 border border-fuchsia-400 shadow-[0_0_10px_rgba(232,121,249,0.5)] uppercase tracking-wide">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
              Neural
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-yellow-400 bg-yellow-950 border border-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)] uppercase tracking-wide">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Verified
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-cyan-400 mb-4 uppercase tracking-wider border-l-4 border-cyan-400 pl-2">Removable Tags</h2>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-cyan-400 bg-cyan-950 border border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] uppercase tracking-wide group">
              Matrix
              <button className="hover:text-red-400 hover:shadow-[0_0_8px_rgba(248,113,113,0.5)] transition-all">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-lime-400 bg-lime-950 border border-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.5)] uppercase tracking-wide group">
              Cyber
              <button className="hover:text-red-400 hover:shadow-[0_0_8px_rgba(248,113,113,0.5)] transition-all">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-fuchsia-400 bg-fuchsia-950 border border-fuchsia-400 shadow-[0_0_10px_rgba(232,121,249,0.5)] uppercase tracking-wide group">
              Neon
              <button className="hover:text-red-400 hover:shadow-[0_0_8px_rgba(248,113,113,0.5)] transition-all">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-cyan-400 mb-4 uppercase tracking-wider border-l-4 border-cyan-400 pl-2">Selectable Tags</h2>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 text-sm font-bold text-gray-400 bg-gray-900 border border-gray-700 shadow-[0_0_10px_rgba(156,163,175,0.3)] hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:text-cyan-400 hover:border-cyan-400 transition-all uppercase tracking-wide">
              All
            </button>
            <button className="px-4 py-2 text-sm font-bold text-cyan-400 bg-cyan-950 border border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] uppercase tracking-wide">
              Active
            </button>
            <button className="px-4 py-2 text-sm font-bold text-gray-400 bg-gray-900 border border-gray-700 shadow-[0_0_10px_rgba(156,163,175,0.3)] hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:text-cyan-400 hover:border-cyan-400 transition-all uppercase tracking-wide">
              Offline
            </button>
            <button className="px-4 py-2 text-sm font-bold text-gray-400 bg-gray-900 border border-gray-700 shadow-[0_0_10px_rgba(156,163,175,0.3)] hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:text-cyan-400 hover:border-cyan-400 transition-all uppercase tracking-wide">
              Ghost
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-cyan-400 mb-4 uppercase tracking-wider border-l-4 border-cyan-400 pl-2">Tag Cloud</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 text-sm font-bold text-cyan-400 bg-cyan-950 border border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] uppercase tracking-wide">AI</span>
            <span className="px-4 py-2 text-sm font-bold text-lime-400 bg-lime-950 border border-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.5)] uppercase tracking-wide">Neural</span>
            <span className="px-4 py-2 text-sm font-bold text-fuchsia-400 bg-fuchsia-950 border border-fuchsia-400 shadow-[0_0_10px_rgba(232,121,249,0.5)] uppercase tracking-wide">Crypto</span>
            <span className="px-4 py-2 text-sm font-bold text-yellow-400 bg-yellow-950 border border-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)] uppercase tracking-wide">Hack</span>
            <span className="px-4 py-2 text-sm font-bold text-rose-400 bg-rose-950 border border-rose-400 shadow-[0_0_10px_rgba(251,113,133,0.5)] uppercase tracking-wide">Virus</span>
            <span className="px-4 py-2 text-sm font-bold text-purple-400 bg-purple-950 border border-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.5)] uppercase tracking-wide">VR</span>
            <span className="px-4 py-2 text-sm font-bold text-teal-400 bg-teal-950 border border-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.5)] uppercase tracking-wide">Grid</span>
            <span className="px-4 py-2 text-sm font-bold text-orange-400 bg-orange-950 border border-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.5)] uppercase tracking-wide">Data</span>
          </div>
        </div>
      </div>
    </div>
  );
}
