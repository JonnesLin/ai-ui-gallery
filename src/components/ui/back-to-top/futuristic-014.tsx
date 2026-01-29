export default function FuturisticBackToTop() {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      {/* Demo page content */}
      <div className="relative z-10 p-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-light text-blue-100 mb-6 tracking-wider">
          Futuristic Back to Top
        </h1>
        <div className="rounded-xl p-6 bg-slate-800/50 border border-blue-500/20 backdrop-blur-sm">
          <p className="text-blue-200 leading-relaxed mb-4">
            Futuristic designs look forward with sleek lines, light effects, and a sense
            of advanced technology. Clean, precise, and boldly innovative.
          </p>
          {Array.from({ length: 6 }).map((_, i) => (
            <p key={i} className="text-slate-400 mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          ))}
        </div>
      </div>

      {/* Variant 1: Hexagon with glow */}
      <button
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600/80
                   flex items-center justify-center transition-all duration-300
                   hover:bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.5)]
                   hover:shadow-[0_0_40px_rgba(59,130,246,0.7)]"
        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        aria-label="Back to top"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Variant 2: Scanning line effect */}
      <button
        className="fixed bottom-6 right-28 w-14 h-14 rounded-lg bg-slate-800
                   border border-cyan-500/50 flex items-center justify-center
                   transition-all duration-300 hover:border-cyan-400
                   relative overflow-hidden group"
        aria-label="Back to top"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-transparent
                        translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        <svg
          className="w-5 h-5 text-cyan-400 relative z-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Variant 3: Ring loader style */}
      <button
        className="fixed bottom-24 right-6 w-14 h-14 rounded-full
                   bg-slate-800 border-2 border-indigo-500/50
                   flex items-center justify-center transition-all duration-300
                   hover:border-indigo-400 relative"
        aria-label="Back to top"
      >
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-indigo-400 animate-spin" />
        <svg
          className="w-5 h-5 text-indigo-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Variant 4: HUD style */}
      <button
        className="fixed bottom-6 left-6 px-5 py-3 bg-slate-900/80
                   border border-blue-400/40 flex items-center gap-3
                   transition-all duration-300 hover:border-blue-400
                   backdrop-blur-sm relative"
        style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
        aria-label="Back to top"
      >
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-400" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-400" />
        <svg
          className="w-4 h-4 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
        <span className="text-xs text-blue-300 font-mono tracking-wider">RETURN</span>
      </button>

      {/* Variant 5: Power button */}
      <button
        className="fixed bottom-24 left-6 w-16 h-16 rounded-full
                   bg-gradient-to-br from-slate-800 to-slate-900
                   border-2 border-violet-500/50 flex items-center justify-center
                   transition-all duration-300 hover:border-violet-400
                   shadow-[inset_0_0_20px_rgba(139,92,246,0.2)]
                   hover:shadow-[inset_0_0_30px_rgba(139,92,246,0.4),0_0_20px_rgba(139,92,246,0.3)]"
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6 text-violet-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
