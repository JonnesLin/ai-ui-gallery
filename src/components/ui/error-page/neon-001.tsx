export default function NeonErrorPage() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_70%)]"></div>

      <style>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        @keyframes neonGlow {
          0%, 100% { filter: drop-shadow(0 0 5px currentColor) drop-shadow(0 0 15px currentColor); }
          50% { filter: drop-shadow(0 0 10px currentColor) drop-shadow(0 0 25px currentColor); }
        }
        .neon-text {
          text-shadow:
            0 0 7px #fff,
            0 0 10px #fff,
            0 0 21px #fff,
            0 0 42px #ec4899,
            0 0 82px #ec4899,
            0 0 92px #ec4899,
            0 0 102px #ec4899,
            0 0 151px #ec4899;
        }
      `}</style>

      <div className="text-center max-w-3xl relative z-10">
        <div className="mb-12">
          <h1 className="text-[10rem] font-black text-pink-500 neon-text leading-none mb-6 animate-[flicker_3s_ease-in-out_infinite]">
            404
          </h1>

          <div className="flex justify-center gap-4 mb-8">
            <div className="w-24 h-1 bg-pink-500 shadow-[0_0_10px_#ec4899]"></div>
            <div className="w-24 h-1 bg-cyan-500 shadow-[0_0_10px_#06b6d4]"></div>
            <div className="w-24 h-1 bg-purple-500 shadow-[0_0_10px_#a855f7]"></div>
          </div>
        </div>

        <div className="border-2 border-pink-500 bg-black/50 backdrop-blur-sm p-8 mb-8 shadow-[0_0_30px_rgba(236,72,153,0.5)] relative">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-cyan-500"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-cyan-500"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-cyan-500"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-cyan-500"></div>

          <h2 className="text-4xl font-bold mb-4 text-cyan-400 animate-[neonGlow_2s_ease-in-out_infinite]" style={{
            textShadow: '0 0 7px #06b6d4, 0 0 10px #06b6d4, 0 0 21px #06b6d4'
          }}>
            PAGE NOT FOUND
          </h2>

          <p className="text-purple-300 text-lg mb-6" style={{
            textShadow: '0 0 5px #a855f7'
          }}>
            The page you're looking for has disappeared into the neon void.
            Time to head back to reality.
          </p>

          <div className="grid grid-cols-3 gap-4 font-mono text-sm mb-6">
            <div className="border border-pink-500/50 p-3 bg-black/30">
              <div className="text-pink-400 mb-1">STATUS</div>
              <div className="text-white">404</div>
            </div>
            <div className="border border-cyan-500/50 p-3 bg-black/30">
              <div className="text-cyan-400 mb-1">TYPE</div>
              <div className="text-white">NOT_FOUND</div>
            </div>
            <div className="border border-purple-500/50 p-3 bg-black/30">
              <div className="text-purple-400 mb-1">TIME</div>
              <div className="text-white text-xs">{Date.now()}</div>
            </div>
          </div>
        </div>

        <div className="flex gap-6 justify-center flex-wrap">
          <button className="px-10 py-4 bg-pink-500 text-white font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(236,72,153,0.8)] hover:shadow-[0_0_30px_rgba(236,72,153,1)] transition-all border-2 border-pink-400">
            Go Home
          </button>
          <button className="px-10 py-4 bg-transparent text-cyan-400 font-bold uppercase tracking-wider border-2 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] transition-all">
            Retry
          </button>
        </div>
      </div>
    </div>
  );
}
