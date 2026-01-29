export default function FuturisticInput() {
  return (
    <div className="min-h-screen p-8 flex flex-col gap-8 max-w-md bg-[#030712]">
      {/* Holographic Border Input */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
          Neural Link ID
        </label>
        <div className="relative">
          <div
            className="absolute inset-0 rounded-lg opacity-50 blur-sm"
            style={{
              background: 'linear-gradient(90deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 3s linear infinite',
            }}
          />
          <style>{`
            @keyframes shimmer {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }
          `}</style>
          <input
            type="text"
            placeholder="ENTER_ID_SEQUENCE"
            className="relative w-full px-4 py-4 rounded-lg text-cyan-300 placeholder-gray-600 bg-[#030712] border border-cyan-500/30 focus:border-cyan-400 focus:outline-none tracking-wider"
          />
        </div>
      </div>

      {/* Data Stream Input */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-medium uppercase tracking-[0.2em] text-violet-400">
          Quantum Search
        </label>
        <div className="relative overflow-hidden rounded-lg">
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-violet-500 via-fuchsia-500 to-violet-500" />
          <input
            type="text"
            placeholder="Query the multiverse..."
            className="w-full pl-6 pr-4 py-4 text-violet-300 placeholder-gray-600 bg-violet-950/20 border-y border-r border-violet-500/30 rounded-r-lg focus:border-violet-400 focus:outline-none"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 bg-violet-400 rounded-full"
                style={{
                  animation: `pulse 1s ease-in-out ${i * 0.2}s infinite`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scanning Input */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
          Bio-Signature
        </label>
        <div className="relative overflow-hidden rounded-lg">
          <input
            type="text"
            placeholder="Scanning..."
            className="w-full px-4 py-4 text-emerald-300 placeholder-emerald-700 bg-emerald-950/20 border border-emerald-500/30 rounded-lg focus:outline-none"
          />
          <div
            className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
            style={{
              animation: 'scan 2s ease-in-out infinite',
            }}
          />
          <style>{`
            @keyframes scan {
              0%, 100% { transform: translateY(0); opacity: 0; }
              50% { transform: translateY(56px); opacity: 1; }
            }
          `}</style>
        </div>
      </div>

      {/* Active State - Power Surge */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
          Power Core [Active]
        </label>
        <div className="relative">
          <input
            type="text"
            defaultValue="ENERGY_LEVEL_MAX"
            className="w-full px-4 py-4 rounded-lg text-blue-300 bg-blue-950/30 border-2 border-blue-400 focus:outline-none tracking-wider"
            style={{
              boxShadow: '0 0 30px rgba(59, 130, 246, 0.3), inset 0 0 30px rgba(59, 130, 246, 0.1)',
            }}
          />
          <div className="absolute -inset-px rounded-lg border border-blue-400 opacity-50 animate-ping" />
        </div>
      </div>

      {/* Error - System Failure */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-medium uppercase tracking-[0.2em] text-red-400 flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          System Alert
        </label>
        <input
          type="text"
          defaultValue="CRITICAL_FAILURE"
          className="w-full px-4 py-4 rounded-lg text-red-400 bg-red-950/20 border border-red-500/50 focus:outline-none tracking-wider"
          style={{
            boxShadow: '0 0 20px rgba(239, 68, 68, 0.2)',
            animation: 'glitch 0.5s ease-in-out infinite',
          }}
        />
        <style>{`
          @keyframes glitch {
            0%, 100% { transform: translateX(0); }
            10% { transform: translateX(-2px); }
            20% { transform: translateX(2px); }
            30% { transform: translateX(-1px); }
          }
        `}</style>
        <p className="text-xs text-red-400/70 uppercase tracking-wider">
          [!] Recalibration required
        </p>
      </div>

      {/* Disabled - Offline */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-medium uppercase tracking-[0.2em] text-gray-600">
          Module Offline
        </label>
        <input
          type="text"
          value="SUSPENDED"
          disabled
          className="w-full px-4 py-4 rounded-lg text-gray-600 bg-gray-900/50 border border-gray-800 cursor-not-allowed tracking-wider"
        />
      </div>

      {/* Futuristic Terminal Card */}
      <div className="relative p-6 rounded-xl mt-4 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] text-cyan-400">System Access</span>
          </div>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-red-500 rounded-full" />
            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
            <div className="w-2 h-2 bg-green-500 rounded-full" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="text-cyan-500 text-xs uppercase w-20">User_ID</span>
            <input
              type="text"
              placeholder="XXXXXX"
              className="flex-1 px-3 py-2 rounded text-sm text-cyan-300 placeholder-gray-700 bg-slate-900/50 border border-cyan-500/20 focus:border-cyan-500/50 focus:outline-none tracking-wider"
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-violet-500 text-xs uppercase w-20">Cipher</span>
            <input
              type="password"
              placeholder="************"
              className="flex-1 px-3 py-2 rounded text-sm text-violet-300 placeholder-gray-700 bg-slate-900/50 border border-violet-500/20 focus:border-violet-500/50 focus:outline-none tracking-[0.3em]"
            />
          </div>
          <button
            className="mt-2 py-3 rounded text-sm font-medium uppercase tracking-[0.2em] text-white bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 transition-all duration-300"
            style={{
              boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)',
            }}
          >
            Initialize
          </button>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-800">
          <p className="text-[10px] text-gray-600 uppercase tracking-wider text-center">
            Encrypted Connection Established
          </p>
        </div>
      </div>
    </div>
  );
}
