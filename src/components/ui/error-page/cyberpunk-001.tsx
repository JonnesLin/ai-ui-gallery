export default function CyberpunkErrorPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse"></div>

      <div className="relative text-center max-w-3xl z-10">
        <div className="mb-8">
          <div className="text-cyan-400 font-mono text-sm mb-4 animate-pulse">
            [ SYSTEM ERROR ]
          </div>
          <h1 className="text-[8rem] font-black leading-none mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 [text-shadow:0_0_30px_rgba(6,182,212,0.5)]">
            404
          </h1>
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-4"></div>
        </div>

        <div className="border border-cyan-500/30 bg-black/80 backdrop-blur-sm p-8 mb-8 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
          <div className="font-mono text-cyan-400 text-left mb-4 text-xs">
            <div className="mb-1">{'>'} ERROR_CODE: 404</div>
            <div className="mb-1">{'>'} STATUS: RESOURCE_NOT_FOUND</div>
            <div className="mb-1">{'>'} TIMESTAMP: {Date.now()}</div>
            <div>{'>'} LOCATION: UNKNOWN_SECTOR</div>
          </div>

          <h2 className="text-3xl font-bold mb-4 text-white [text-shadow:0_0_10px_rgba(255,255,255,0.5)]">
            CONNECTION LOST
          </h2>
          <p className="text-gray-400 font-mono mb-6">
            The requested neural pathway could not be established.
            This sector of the network appears to be corrupted or non-existent.
          </p>

          <div className="bg-pink-500/10 border border-pink-500/30 p-4 font-mono text-sm text-pink-400">
            WARNING: Continued attempts may result in system instability
          </div>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold uppercase border border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] transition-all">
            [RETURN_HOME]
          </button>
          <button className="px-8 py-3 bg-transparent text-pink-500 font-bold uppercase border border-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_30px_rgba(236,72,153,0.8)] transition-all">
            [RETRY_CONNECTION]
          </button>
        </div>
      </div>
    </div>
  );
}
