export default function ThreeDBackToTop() {
  return (
    <div className="min-h-screen bg-slate-100 relative">
      {/* Demo page content */}
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-800 mb-6">
          3D Back to Top
        </h1>
        <div className="rounded-xl p-6 bg-white shadow-xl">
          <p className="text-slate-600 leading-relaxed mb-4">
            3D design adds depth and dimension through shadows, perspective, and layering.
            Elements appear to float above or sink into the surface.
          </p>
          {Array.from({ length: 6 }).map((_, i) => (
            <p key={i} className="text-slate-500 mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          ))}
        </div>
      </div>

      {/* Variant 1: Floating button */}
      <button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-2xl bg-white
                   flex items-center justify-center transition-all duration-300
                   shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3),0_5px_15px_-3px_rgba(0,0,0,0.2)]
                   hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.3),0_10px_20px_-3px_rgba(0,0,0,0.2)]
                   hover:-translate-y-1 active:translate-y-0 active:shadow-[0_5px_15px_-5px_rgba(0,0,0,0.3)]"
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6 text-slate-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Variant 2: Stacked layers */}
      <button
        className="fixed bottom-6 right-28 w-14 h-14 rounded-xl relative
                   transition-all duration-300 hover:-translate-y-1 group"
        aria-label="Back to top"
      >
        <div className="absolute inset-0 bg-blue-300 rounded-xl translate-x-2 translate-y-2" />
        <div className="absolute inset-0 bg-blue-400 rounded-xl translate-x-1 translate-y-1" />
        <div className="absolute inset-0 bg-blue-500 rounded-xl flex items-center justify-center
                        group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-transform">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </div>
      </button>

      {/* Variant 3: Extruded button */}
      <button
        className="fixed bottom-24 right-6 w-12 h-12 bg-emerald-500
                   rounded-lg flex items-center justify-center
                   transition-all duration-100
                   shadow-[0_6px_0_0_#059669,0_8px_10px_rgba(0,0,0,0.2)]
                   hover:shadow-[0_4px_0_0_#059669,0_6px_8px_rgba(0,0,0,0.2)]
                   hover:translate-y-[2px]
                   active:shadow-[0_0px_0_0_#059669,0_2px_4px_rgba(0,0,0,0.2)]
                   active:translate-y-[6px]"
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

      {/* Variant 4: Pill with depth */}
      <button
        className="fixed bottom-6 left-6 px-5 py-3 bg-gradient-to-b from-rose-400 to-rose-500
                   rounded-full flex items-center gap-2 transition-all duration-200
                   shadow-[0_4px_0_0_#be123c,inset_0_-2px_4px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.2)]
                   hover:shadow-[0_2px_0_0_#be123c,inset_0_-2px_4px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.2)]
                   hover:translate-y-[2px]
                   active:shadow-[0_0px_0_0_#be123c] active:translate-y-1"
        aria-label="Back to top"
      >
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
        <span className="text-sm text-white font-semibold">Top</span>
      </button>

      {/* Variant 5: Isometric cube */}
      <button
        className="fixed bottom-24 left-6 w-16 h-16 relative transition-all duration-300
                   hover:scale-105 group"
        style={{ perspective: '200px' }}
        aria-label="Back to top"
      >
        {/* Top face */}
        <div className="absolute inset-0 bg-violet-400 rounded-t-lg"
             style={{
               transform: 'rotateX(60deg) translateY(-8px)',
               transformOrigin: 'bottom'
             }} />
        {/* Front face */}
        <div className="absolute inset-0 bg-violet-500 rounded-lg flex items-center justify-center
                        shadow-lg">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </div>
        {/* Right shadow */}
        <div className="absolute top-2 -right-2 w-2 h-full bg-violet-700 rounded-r-lg"
             style={{ transform: 'skewY(-45deg)', transformOrigin: 'top' }} />
        {/* Bottom shadow */}
        <div className="absolute -bottom-2 left-2 w-full h-2 bg-violet-700 rounded-b-lg"
             style={{ transform: 'skewX(-45deg)', transformOrigin: 'left' }} />
      </button>
    </div>
  );
}
