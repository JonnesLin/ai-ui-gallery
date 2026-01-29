export default function NeonEmpty() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <div className="flex flex-col items-center max-w-md px-8 text-center">
        <div className="relative mb-10">
          <div className="absolute inset-0 bg-pink-500 blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute inset-0 bg-cyan-500 blur-2xl opacity-30 animate-pulse delay-75"></div>

          <div className="relative w-40 h-40 border-4 border-pink-500 rounded-lg flex items-center justify-center shadow-[0_0_30px_#ec4899,inset_0_0_30px_#ec4899]">
            <svg
              className="w-20 h-20 text-cyan-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ filter: 'drop-shadow(0 0 10px #22d3ee)' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
        </div>

        <h2
          className="text-5xl font-black text-pink-500 mb-6 uppercase tracking-wider"
          style={{ textShadow: '0 0 20px #ec4899, 0 0 40px #ec4899' }}
        >
          NO SIGNAL
        </h2>

        <p
          className="text-cyan-400 text-base mb-10 leading-relaxed"
          style={{ textShadow: '0 0 10px #22d3ee' }}
        >
          Connection to data stream lost. Activate new transmission to restore signal.
        </p>

        <button
          className="px-10 py-4 bg-transparent border-4 border-pink-500 text-pink-500 font-black uppercase tracking-widest hover:bg-pink-500 hover:text-gray-950 transition-all"
          style={{ boxShadow: '0 0 20px #ec4899, inset 0 0 20px rgba(236,72,153,0.2)' }}
        >
          ACTIVATE
        </button>

        <div className="mt-10 flex gap-4">
          <div className="w-3 h-3 bg-pink-500 rounded-full shadow-[0_0_10px_#ec4899] animate-pulse"></div>
          <div className="w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_10px_#22d3ee] animate-pulse delay-100"></div>
          <div className="w-3 h-3 bg-pink-500 rounded-full shadow-[0_0_10px_#ec4899] animate-pulse delay-200"></div>
        </div>
      </div>
    </div>
  );
}
