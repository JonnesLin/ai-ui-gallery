export default function SketchBackToTop() {
  return (
    <div className="min-h-screen bg-amber-50 relative" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23d4a574\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}>
      {/* Demo page content */}
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-2xl text-amber-900 mb-6" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
          Sketch Back to Top
        </h1>
        <div className="rounded-lg p-6 bg-white border-2 border-amber-900/20"
             style={{
               borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
               boxShadow: '2px 2px 0 rgba(0,0,0,0.1)'
             }}>
          <p className="text-amber-800 leading-relaxed mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            Sketch style mimics hand-drawn aesthetics with wobbly lines, imperfect shapes,
            and a charming handmade feel that adds warmth and personality.
          </p>
          {Array.from({ length: 5 }).map((_, i) => (
            <p key={i} className="text-amber-700/70 mb-4 leading-relaxed" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
            </p>
          ))}
        </div>
      </div>

      {/* Variant 1: Wobbly circle */}
      <button
        className="fixed bottom-6 right-6 w-14 h-14 bg-amber-100
                   border-2 border-amber-900 flex items-center justify-center
                   transition-all duration-200 hover:bg-amber-200
                   hover:-rotate-3"
        style={{ borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%' }}
        aria-label="Back to top"
      >
        <span className="text-amber-900 text-xl" style={{ fontFamily: 'Comic Sans MS, cursive' }}>↑</span>
      </button>

      {/* Variant 2: Doodle box */}
      <button
        className="fixed bottom-6 right-28 px-4 py-3 bg-white
                   border-2 border-amber-900 flex items-center gap-2
                   transition-all duration-200 hover:bg-amber-50 hover:rotate-1"
        style={{ borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}
        aria-label="Back to top"
      >
        <span className="text-amber-900 text-lg">↑</span>
        <span className="text-amber-900 text-sm" style={{ fontFamily: 'Comic Sans MS, cursive' }}>top!</span>
      </button>

      {/* Variant 3: Scribble style */}
      <button
        className="fixed bottom-24 right-6 w-12 h-12 bg-yellow-200
                   border-2 border-amber-900 flex items-center justify-center
                   transition-all duration-200 hover:bg-yellow-300 hover:-rotate-6
                   relative"
        style={{ borderRadius: '30% 70% 50% 50% / 60% 40% 60% 40%' }}
        aria-label="Back to top"
      >
        {/* Scribble underline */}
        <svg className="absolute -bottom-3 left-0 w-full h-3" viewBox="0 0 50 10">
          <path d="M0,5 Q10,0 20,5 T40,5 T50,5" stroke="#78350f" fill="none" strokeWidth="1.5" />
        </svg>
        <span className="text-amber-900 text-lg font-bold">↑</span>
      </button>

      {/* Variant 4: Sticky note */}
      <button
        className="fixed bottom-6 left-6 w-16 h-16 bg-yellow-300
                   flex flex-col items-center justify-center
                   transition-all duration-200 hover:scale-105 hover:-rotate-3
                   shadow-[3px_3px_0_rgba(0,0,0,0.15)]"
        style={{ transform: 'rotate(2deg)' }}
        aria-label="Back to top"
      >
        <span className="text-amber-900 text-xl">↑</span>
        <span className="text-amber-900 text-[10px]" style={{ fontFamily: 'Comic Sans MS, cursive' }}>go up</span>
      </button>

      {/* Variant 5: Hand-drawn arrow */}
      <button
        className="fixed bottom-24 left-6 w-14 h-14 bg-amber-100
                   border-2 border-amber-800 flex items-center justify-center
                   transition-all duration-200 hover:bg-amber-200 hover:rotate-6"
        style={{ borderRadius: '40% 60% 45% 55% / 55% 45% 55% 45%' }}
        aria-label="Back to top"
      >
        <svg className="w-8 h-8 text-amber-900" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 19c0 0 0.5-4 0-7s-1-5 0-7c0.5 1 2 2.5 4 3.5M12 5c-0.5 1-2 2.5-4 3.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
