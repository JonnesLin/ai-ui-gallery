export default function FuturisticEmpty() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>

      <div className="relative flex flex-col items-center max-w-md px-8 text-center">
        <div className="relative mb-10">
          <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 animate-pulse"></div>

          <div className="relative w-40 h-40 border border-blue-400/30 rounded-lg flex items-center justify-center backdrop-blur-sm transform rotate-45">
            <div className="w-32 h-32 border border-blue-400/50 rounded-lg flex items-center justify-center -rotate-45">
              <svg
                className="w-16 h-16 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
        </div>

        <h2 className="text-3xl font-bold text-blue-100 mb-2 tracking-wider">
          SYSTEM IDLE
        </h2>

        <p className="text-blue-400/60 text-xs mb-6 font-mono tracking-widest">
          STATUS: AWAITING INPUT
        </p>

        <p className="text-gray-400 text-base mb-10 leading-relaxed">
          No active data streams detected. Initialize a new session to begin processing.
        </p>

        <button className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-md hover:from-blue-500 hover:to-cyan-500 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] border border-blue-400/30">
          <span className="flex items-center gap-2">
            INITIALIZE
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
