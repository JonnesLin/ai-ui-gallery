export default function CyberpunkInput() {
  return (
    <div className="min-h-screen p-8 flex flex-col gap-8 max-w-md bg-[#0a0a0f]">
      {/* Neon Cyan Input */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
          Neural ID
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="ENTER_ID_SEQUENCE"
            className="w-full px-4 py-4 text-cyan-300 placeholder-cyan-800 bg-cyan-950/30 border border-cyan-500/50 focus:border-cyan-400 focus:outline-none uppercase tracking-wider"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
              boxShadow: '0 0 20px rgba(6, 182, 212, 0.3), inset 0 0 20px rgba(6, 182, 212, 0.1)',
            }}
          />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
        </div>
      </div>

      {/* Magenta Glitch Input */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-[0.3em] text-fuchsia-400">
          Access Code
        </label>
        <div className="relative group">
          <div
            className="absolute inset-0 bg-fuchsia-500/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"
          />
          <input
            type="password"
            placeholder="************"
            className="relative w-full px-4 py-4 text-fuchsia-300 placeholder-fuchsia-800 bg-fuchsia-950/30 border-2 border-fuchsia-500/50 focus:border-fuchsia-400 focus:outline-none tracking-[0.5em]"
            style={{
              boxShadow: '0 0 15px rgba(217, 70, 239, 0.2)',
            }}
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1">
            <div className="w-1.5 h-3 bg-fuchsia-500" />
            <div className="w-1.5 h-3 bg-fuchsia-500/60" />
            <div className="w-1.5 h-3 bg-fuchsia-500/30" />
          </div>
        </div>
      </div>

      {/* Holographic Scanner */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-400">
          Biometric Scan
        </label>
        <div className="relative overflow-hidden">
          <input
            type="text"
            placeholder="INITIATING SCAN..."
            className="w-full px-4 py-4 text-yellow-300 placeholder-yellow-800 bg-yellow-950/20 border border-yellow-500/50 focus:outline-none uppercase"
          />
          <div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
            style={{
              animation: 'scan 2s linear infinite',
            }}
          />
          <style>{`
            @keyframes scan {
              0% { transform: translateY(0); opacity: 1; }
              100% { transform: translateY(56px); opacity: 0; }
            }
          `}</style>
        </div>
      </div>

      {/* Error State - System Alert */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-[0.3em] text-red-400 flex items-center gap-2">
          <span
            className="inline-block w-2 h-2 bg-red-500 rounded-full"
            style={{ animation: 'pulse 1s infinite' }}
          />
          <style>{`
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.3; }
            }
          `}</style>
          Security Breach
        </label>
        <div className="relative">
          <input
            type="text"
            defaultValue="UNAUTHORIZED"
            className="w-full px-4 py-4 text-red-400 bg-red-950/30 border-2 border-red-500 focus:outline-none uppercase tracking-wider"
            style={{
              boxShadow: '0 0 30px rgba(239, 68, 68, 0.3)',
              animation: 'glitch 0.3s infinite',
            }}
          />
          <style>{`
            @keyframes glitch {
              0%, 100% { transform: translateX(0); }
              20% { transform: translateX(-2px); }
              40% { transform: translateX(2px); }
              60% { transform: translateX(-1px); }
              80% { transform: translateX(1px); }
            }
          `}</style>
        </div>
        <p className="text-xs text-red-400 uppercase tracking-wider">
          [!] INTRUSION DETECTED
        </p>
      </div>

      {/* Success State */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-[0.3em] text-green-400">
          Connection Status
        </label>
        <div className="relative">
          <input
            type="text"
            defaultValue="LINK ESTABLISHED"
            className="w-full px-4 py-4 text-green-400 bg-green-950/30 border border-green-500/50 focus:outline-none uppercase tracking-wider"
            style={{
              boxShadow: '0 0 20px rgba(34, 197, 94, 0.2)',
            }}
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
            <span className="text-green-400 text-xs">ONLINE</span>
          </div>
        </div>
      </div>

      {/* Cyber Terminal Panel */}
      <div
        className="relative p-6 mt-4"
        style={{
          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(217, 70, 239, 0.1) 100%)',
          border: '1px solid rgba(6, 182, 212, 0.3)',
          clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
        }}
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-fuchsia-500" />

        <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400 mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-cyan-400" />
          System Access
          <span className="w-8 h-px bg-cyan-400" />
        </h3>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="text-cyan-500 text-xs uppercase w-16">Corp_ID</span>
            <input
              type="text"
              placeholder="XXXXXX"
              className="flex-1 px-3 py-2 text-cyan-300 placeholder-cyan-800 bg-cyan-950/30 border border-cyan-500/30 focus:border-cyan-400 focus:outline-none uppercase text-sm tracking-wider"
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-fuchsia-500 text-xs uppercase w-16">Cipher</span>
            <input
              type="password"
              placeholder="************"
              className="flex-1 px-3 py-2 text-fuchsia-300 placeholder-fuchsia-800 bg-fuchsia-950/30 border border-fuchsia-500/30 focus:border-fuchsia-400 focus:outline-none uppercase text-sm tracking-[0.3em]"
            />
          </div>
          <button
            className="mt-2 py-3 text-sm font-bold uppercase tracking-[0.3em] text-black bg-gradient-to-r from-cyan-400 to-fuchsia-400 hover:from-cyan-300 hover:to-fuchsia-300 transition-all duration-200"
            style={{
              clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
            }}
          >
            Initialize
          </button>
        </div>
      </div>
    </div>
  );
}
