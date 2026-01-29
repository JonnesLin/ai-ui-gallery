export default function NeonBackToTop() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Demo page content */}
      <div className="relative z-10 p-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-pink-400 mb-6 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">
          Neon Back to Top
        </h1>
        <div className="rounded-xl p-6 bg-slate-900/50 border border-pink-500/30 backdrop-blur-sm">
          <p className="text-pink-200 leading-relaxed mb-4">
            Neon design brings the vibrant glow of city lights to the screen. Bright, saturated
            colors against dark backgrounds create electric, eye-catching effects.
          </p>
          {Array.from({ length: 5 }).map((_, i) => (
            <p key={i} className="text-slate-400 mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          ))}
        </div>
      </div>

      {/* Variant 1: Pink neon glow */}
      <button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-pink-500/20
                   border-2 border-pink-400 flex items-center justify-center
                   transition-all duration-300 hover:bg-pink-500/40
                   shadow-[0_0_15px_#ec4899,0_0_30px_#ec4899,inset_0_0_15px_rgba(236,72,153,0.3)]
                   hover:shadow-[0_0_20px_#ec4899,0_0_40px_#ec4899,0_0_60px_#ec4899]"
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6 text-pink-300 drop-shadow-[0_0_8px_rgba(236,72,153,1)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Variant 2: Cyan neon */}
      <button
        className="fixed bottom-6 right-28 w-14 h-14 rounded-lg bg-transparent
                   border-2 border-cyan-400 flex items-center justify-center
                   transition-all duration-300 hover:bg-cyan-400/20
                   shadow-[0_0_15px_#22d3ee,0_0_30px_#22d3ee]
                   hover:shadow-[0_0_20px_#22d3ee,0_0_40px_#22d3ee,0_0_60px_#22d3ee]"
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6 text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,1)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Variant 3: Green neon pill */}
      <button
        className="fixed bottom-24 right-6 px-5 py-3 rounded-full bg-transparent
                   border-2 border-green-400 flex items-center gap-2
                   transition-all duration-300 hover:bg-green-400/20
                   shadow-[0_0_15px_#4ade80,0_0_30px_#4ade80]
                   hover:shadow-[0_0_20px_#4ade80,0_0_40px_#4ade80,0_0_60px_#4ade80]"
        aria-label="Back to top"
      >
        <svg
          className="w-4 h-4 text-green-300 drop-shadow-[0_0_8px_rgba(74,222,128,1)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
        <span className="text-sm text-green-300 font-medium drop-shadow-[0_0_8px_rgba(74,222,128,1)]">
          TOP
        </span>
      </button>

      {/* Variant 4: Yellow neon */}
      <button
        className="fixed bottom-6 left-6 w-14 h-14 rounded-full bg-yellow-400/10
                   border-2 border-yellow-400 flex items-center justify-center
                   transition-all duration-300 hover:bg-yellow-400/30
                   shadow-[0_0_15px_#facc15,0_0_30px_#facc15]
                   hover:shadow-[0_0_20px_#facc15,0_0_40px_#facc15,0_0_60px_#facc15]
                   animate-pulse"
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6 text-yellow-300 drop-shadow-[0_0_8px_rgba(250,204,21,1)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Variant 5: Purple neon with flicker */}
      <button
        className="fixed bottom-24 left-6 w-14 h-14 rounded-xl bg-purple-500/10
                   border-2 border-purple-400 flex items-center justify-center
                   transition-all duration-300 hover:bg-purple-400/30
                   shadow-[0_0_15px_#c084fc,0_0_30px_#c084fc]
                   hover:shadow-[0_0_20px_#c084fc,0_0_40px_#c084fc,0_0_60px_#c084fc]"
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6 text-purple-300 drop-shadow-[0_0_8px_rgba(192,132,252,1)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5m-7 7l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
