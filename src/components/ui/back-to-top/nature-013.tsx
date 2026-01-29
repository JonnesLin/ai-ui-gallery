export default function NatureBackToTop() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-green-100 relative">
      {/* Demo page content */}
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold text-emerald-800 mb-6">
          Nature Back to Top
        </h1>
        <div className="rounded-2xl p-6 bg-white/80 shadow-lg border border-emerald-200">
          <p className="text-emerald-700 leading-relaxed mb-4">
            Nature-inspired designs embrace organic shapes, earthy colors, and elements
            that evoke the beauty of the natural world. Calm, refreshing, and grounded.
          </p>
          {Array.from({ length: 6 }).map((_, i) => (
            <p key={i} className="text-emerald-600/70 mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          ))}
        </div>
      </div>

      {/* Variant 1: Leaf shape */}
      <button
        className="fixed bottom-6 right-6 w-14 h-14 bg-emerald-500
                   flex items-center justify-center transition-all duration-300
                   hover:bg-emerald-600 hover:scale-105 shadow-lg shadow-emerald-500/30"
        style={{ borderRadius: '50% 0 50% 50%' }}
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

      {/* Variant 2: Wood texture */}
      <button
        className="fixed bottom-6 right-28 w-14 h-14 rounded-xl bg-amber-700
                   flex items-center justify-center transition-all duration-300
                   hover:bg-amber-800 shadow-lg border-2 border-amber-900/30"
        aria-label="Back to top"
      >
        <svg
          className="w-5 h-5 text-amber-100"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Variant 3: Stone pebble */}
      <button
        className="fixed bottom-24 right-6 w-12 h-14 bg-gradient-to-br from-stone-400 to-stone-500
                   flex items-center justify-center transition-all duration-300
                   hover:from-stone-500 hover:to-stone-600 shadow-lg"
        style={{ borderRadius: '40% 60% 55% 45% / 55% 45% 55% 45%' }}
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

      {/* Variant 4: Forest green pill */}
      <button
        className="fixed bottom-6 left-6 px-5 py-3 rounded-full bg-green-700
                   flex items-center gap-2 transition-all duration-300
                   hover:bg-green-800 shadow-lg shadow-green-700/30"
        aria-label="Back to top"
      >
        <span className="text-green-100">🌿</span>
        <span className="text-sm text-green-100 font-medium">Back to Top</span>
      </button>

      {/* Variant 5: Water droplet */}
      <button
        className="fixed bottom-24 left-6 w-12 h-14 bg-gradient-to-b from-cyan-400 to-blue-500
                   flex items-center justify-center transition-all duration-300
                   hover:from-cyan-500 hover:to-blue-600 shadow-lg shadow-blue-500/30"
        style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
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
    </div>
  );
}
