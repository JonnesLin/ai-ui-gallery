export default function FuturisticErrorPage() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>

      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-blue-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${1 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>

      <div className="relative text-center max-w-4xl z-10">
        <div className="mb-12 relative">
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 opacity-50 blur-xl animate-[glow_3s_ease-in-out_infinite]"></div>
            <h1 className="relative text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 leading-none">
              404
            </h1>
          </div>

          <div className="absolute top-0 left-0 right-0 h-full">
            <div className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 animate-[scan_3s_linear_infinite]"></div>
          </div>
        </div>

        <div className="relative border border-blue-500/30 bg-gradient-to-br from-blue-950/50 to-gray-950/50 backdrop-blur-xl rounded-2xl p-10 mb-10 shadow-[0_0_50px_rgba(59,130,246,0.2)]">
          <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

          <h2 className="text-4xl font-bold text-white mb-4 tracking-wider">
            SYSTEM ALERT
          </h2>
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-6"></div>

          <p className="text-blue-200 text-lg mb-8 font-light">
            The quantum pathway you requested exists in a parallel dimension.
            Our neural networks are unable to establish a connection at this time.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-950/50 border border-blue-500/30 rounded-lg p-4">
              <div className="text-cyan-400 text-xs mb-1 font-mono">STATUS</div>
              <div className="text-white font-bold">NOT FOUND</div>
            </div>
            <div className="bg-blue-950/50 border border-blue-500/30 rounded-lg p-4">
              <div className="text-cyan-400 text-xs mb-1 font-mono">CODE</div>
              <div className="text-white font-bold">404</div>
            </div>
            <div className="bg-blue-950/50 border border-blue-500/30 rounded-lg p-4">
              <div className="text-cyan-400 text-xs mb-1 font-mono">TIMESTAMP</div>
              <div className="text-white font-bold text-xs">{Date.now()}</div>
            </div>
          </div>
        </div>

        <div className="flex gap-6 justify-center flex-wrap">
          <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all border border-blue-400/30">
            RETURN TO BASE
          </button>
          <button className="px-10 py-4 bg-transparent text-cyan-400 font-bold rounded-lg border-2 border-cyan-500/50 hover:bg-cyan-500/10 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all">
            RESTART SCAN
          </button>
        </div>
      </div>
    </div>
  );
}
