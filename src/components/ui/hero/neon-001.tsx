export default function NeonHero() {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center px-6">
      {/* Neon glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
        <div className="absolute inset-0 bg-pink-500/20 blur-[150px] rounded-full" />
        <div className="absolute inset-20 bg-cyan-500/20 blur-[100px] rounded-full" />
        <div className="absolute inset-40 bg-purple-500/20 blur-[80px] rounded-full" />
      </div>

      {/* Grid floor effect */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%),
                       linear-gradient(90deg, rgba(255,0,128,0.2) 1px, transparent 1px),
                       linear-gradient(0deg, rgba(255,0,128,0.2) 1px, transparent 1px)`,
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'bottom'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Neon text */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tight">
          <span
            className="block text-white"
            style={{
              textShadow: `
                0 0 10px #fff,
                0 0 20px #fff,
                0 0 30px #ff00ff,
                0 0 40px #ff00ff,
                0 0 50px #ff00ff,
                0 0 60px #ff00ff
              `
            }}
          >
            NEON
          </span>
          <span
            className="block text-cyan-400"
            style={{
              textShadow: `
                0 0 10px #0ff,
                0 0 20px #0ff,
                0 0 30px #0ff,
                0 0 40px #0ff,
                0 0 50px #0ff
              `
            }}
          >
            LIGHTS
          </span>
        </h1>

        <p
          className="text-xl md:text-2xl text-pink-200 mb-12 max-w-2xl mx-auto"
          style={{
            textShadow: '0 0 10px rgba(255,0,128,0.5)'
          }}
        >
          Step into the glow. Experience design that electrifies.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            className="px-12 py-5 bg-transparent text-white font-bold text-lg border-2 border-pink-500 rounded hover:bg-pink-500/20 transition-colors"
            style={{
              boxShadow: `
                0 0 10px rgba(255,0,128,0.5),
                0 0 20px rgba(255,0,128,0.3),
                inset 0 0 10px rgba(255,0,128,0.1)
              `
            }}
          >
            POWER ON
          </button>
          <button
            className="px-12 py-5 bg-transparent text-cyan-400 font-bold text-lg border-2 border-cyan-400 rounded hover:bg-cyan-400/20 transition-colors"
            style={{
              boxShadow: `
                0 0 10px rgba(0,255,255,0.5),
                0 0 20px rgba(0,255,255,0.3),
                inset 0 0 10px rgba(0,255,255,0.1)
              `
            }}
          >
            EXPLORE
          </button>
        </div>

        {/* Neon signs */}
        <div className="mt-20 flex justify-center gap-16">
          <div
            className="text-4xl font-bold text-pink-500"
            style={{
              textShadow: `
                0 0 5px #ff00ff,
                0 0 10px #ff00ff,
                0 0 20px #ff00ff
              `,
              animation: 'flicker 3s infinite'
            }}
          >
            24/7
          </div>
          <div
            className="text-4xl font-bold text-cyan-400"
            style={{
              textShadow: `
                0 0 5px #0ff,
                0 0 10px #0ff,
                0 0 20px #0ff
              `,
              animation: 'flicker 2s infinite'
            }}
          >
            OPEN
          </div>
          <div
            className="text-4xl font-bold text-yellow-400"
            style={{
              textShadow: `
                0 0 5px #ffff00,
                0 0 10px #ffff00,
                0 0 20px #ffff00
              `,
              animation: 'flicker 4s infinite'
            }}
          >
            LIVE
          </div>
        </div>
      </div>

      <style>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
          52% { opacity: 1; }
          54% { opacity: 0.9; }
          56% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
