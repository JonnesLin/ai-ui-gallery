export default function ThreeDHero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden flex items-center justify-center px-6">
      {/* 3D floating cubes */}
      <div className="absolute inset-0 overflow-hidden perspective-[1000px]">
        {/* Cube 1 */}
        <div
          className="absolute top-20 left-[20%] w-20 h-20"
          style={{
            transform: 'rotateX(45deg) rotateY(45deg)',
            animation: 'float 6s ease-in-out infinite'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 opacity-80 transform-gpu"
               style={{ transform: 'translateZ(10px)' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-60 transform-gpu"
               style={{ transform: 'rotateY(90deg) translateZ(10px)' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-300 to-blue-400 opacity-40 transform-gpu"
               style={{ transform: 'rotateX(90deg) translateZ(10px)' }} />
        </div>

        {/* Cube 2 */}
        <div
          className="absolute bottom-32 right-[15%] w-32 h-32"
          style={{
            transform: 'rotateX(30deg) rotateY(60deg)',
            animation: 'float 8s ease-in-out infinite'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-500 opacity-80 transform-gpu"
               style={{ transform: 'translateZ(16px)' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 opacity-60 transform-gpu"
               style={{ transform: 'rotateY(90deg) translateZ(16px)' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-purple-400 opacity-40 transform-gpu"
               style={{ transform: 'rotateX(90deg) translateZ(16px)' }} />
        </div>

        {/* Sphere */}
        <div
          className="absolute top-1/3 right-[25%] w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-2xl"
          style={{
            boxShadow: 'inset -5px -5px 20px rgba(0,0,0,0.4), inset 5px 5px 20px rgba(255,255,255,0.2), 0 0 40px rgba(251,191,36,0.4)',
            animation: 'float 5s ease-in-out infinite'
          }}
        />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotateX(45deg) rotateY(45deg); }
          50% { transform: translateY(-30px) rotateX(45deg) rotateY(45deg); }
        }
      `}</style>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* 3D Text effect */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight">
          <span
            className="block text-white relative"
            style={{
              textShadow: `
                1px 1px 0 #6366f1,
                2px 2px 0 #6366f1,
                3px 3px 0 #4f46e5,
                4px 4px 0 #4f46e5,
                5px 5px 0 #4338ca,
                6px 6px 0 #4338ca,
                7px 7px 20px rgba(0,0,0,0.5)
              `
            }}
          >
            DEPTH
          </span>
          <span
            className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
            style={{
              textShadow: '0 0 40px rgba(139,92,246,0.5)'
            }}
          >
            & DIMENSION
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Enter a world where design breaks free from flat surfaces.
          Experience the power of three-dimensional creativity.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg rounded-xl overflow-hidden"
            style={{
              boxShadow: '0 10px 30px rgba(139,92,246,0.4), 0 5px 15px rgba(0,0,0,0.3)',
              transform: 'perspective(500px) rotateX(5deg)'
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Enter 3D Space
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button
            className="px-10 py-5 border-2 border-white/30 text-white font-semibold text-lg rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm"
            style={{
              boxShadow: '0 5px 20px rgba(0,0,0,0.2)',
              transform: 'perspective(500px) rotateX(5deg)'
            }}
          >
            View Gallery
          </button>
        </div>

        {/* 3D cards preview */}
        <div className="mt-20 flex justify-center gap-4" style={{ perspective: '1000px' }}>
          <div
            className="w-24 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg shadow-xl"
            style={{ transform: 'rotateY(-15deg) translateZ(20px)' }}
          />
          <div
            className="w-24 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg shadow-xl"
            style={{ transform: 'translateZ(40px)' }}
          />
          <div
            className="w-24 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg shadow-xl"
            style={{ transform: 'rotateY(15deg) translateZ(20px)' }}
          />
        </div>
      </div>
    </section>
  );
}
