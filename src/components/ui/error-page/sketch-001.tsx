export default function SketchErrorPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4" style={{
      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 19px, #e5e7eb 19px, #e5e7eb 20px),
                        repeating-linear-gradient(90deg, transparent, transparent 19px, #e5e7eb 19px, #e5e7eb 20px)`
    }}>
      <div className="text-center max-w-2xl">
        <div className="mb-12 relative">
          <svg className="w-80 h-80 mx-auto" viewBox="0 0 300 300">
            <defs>
              <filter id="sketch">
                <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" />
                <feDisplacementMap in="SourceGraphic" scale="3" />
              </filter>
            </defs>

            <circle cx="150" cy="150" r="100" fill="none" stroke="#000" strokeWidth="3" filter="url(#sketch)" opacity="0.1" />

            <path d="M 120 120 Q 118 125 120 130" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 180 120 Q 178 125 180 130" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />

            <path d="M 110 180 Q 150 200 190 180" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" filter="url(#sketch)" />

            <text x="150" y="170" fontSize="32" fontWeight="bold" fill="#000" textAnchor="middle" fontFamily="Comic Sans MS, cursive">
              404
            </text>

            <path d="M 140 100 L 145 85 L 150 100 L 155 85 L 160 100" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        <div className="bg-white border-4 border-black p-8 mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative" style={{
          transform: 'rotate(-1deg)'
        }}>
          <div className="absolute top-2 right-2 text-2xl">✏️</div>

          <h2 className="text-5xl font-bold mb-4 relative" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            Oops!
            <svg className="absolute -bottom-2 left-0 right-0" height="4" viewBox="0 0 100 4">
              <path d="M 0 2 Q 25 0, 50 2 T 100 2" stroke="#000" strokeWidth="2" fill="none" />
            </svg>
          </h2>

          <p className="text-xl mb-6" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            This page seems to have been erased!
          </p>

          <div className="bg-yellow-100 border-2 border-black p-4 mb-6 inline-block transform rotate-2">
            <p className="font-bold" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Error 404: Page not found
            </p>
          </div>

          <div className="flex gap-2 justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-black rounded-full"></div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-4 bg-white border-4 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all transform -rotate-1" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            ← Go Home
          </button>
          <button className="px-8 py-4 bg-yellow-300 border-4 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all transform rotate-1" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            Try Again →
          </button>
        </div>
      </div>
    </div>
  );
}
