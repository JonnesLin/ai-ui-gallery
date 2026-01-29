export default function CyberpunkTooltip() {
  return (
    <div className="min-h-screen bg-slate-950 p-16 flex flex-col items-center justify-center gap-20">
      <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.3em]">Cyberpunk Tooltips</h2>

      {/* Top - Neon cyan */}
      <div className="group relative inline-block">
        <button className="px-6 py-3 text-sm font-bold uppercase tracking-wider text-cyan-400 bg-transparent border border-cyan-400 clip-corner transition-all duration-300 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:text-cyan-300">
          Hover Top
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-4 py-2 text-sm font-mono text-cyan-400 bg-slate-900/90 border border-cyan-400/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap shadow-[0_0_15px_rgba(34,211,238,0.3)] clip-corner">
          <span className="text-cyan-300">&gt;</span> System override active
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-cyan-400/50"></div>
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400 animate-pulse"></div>
        </div>
      </div>

      {/* Bottom - Neon magenta */}
      <div className="group relative inline-block">
        <button className="px-6 py-3 text-sm font-bold uppercase tracking-wider text-fuchsia-400 bg-transparent border border-fuchsia-400 clip-corner transition-all duration-300 hover:bg-fuchsia-400/10 hover:shadow-[0_0_20px_rgba(217,70,239,0.5)]">
          Hover Bottom
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 px-4 py-2 text-sm font-mono text-fuchsia-400 bg-slate-900/90 border border-fuchsia-400/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap shadow-[0_0_15px_rgba(217,70,239,0.3)] clip-corner">
          <span className="text-fuchsia-300">//</span> Neural link established
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-b-fuchsia-400/50"></div>
        </div>
      </div>

      {/* Left & Right */}
      <div className="flex gap-24">
        <div className="group relative inline-block">
          <button className="px-6 py-3 text-sm font-bold uppercase tracking-wider text-yellow-400 bg-transparent border border-yellow-400 transition-all duration-300 hover:bg-yellow-400/10 hover:shadow-[0_0_20px_rgba(250,204,21,0.5)]">
            Left
          </button>
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-4 py-2 text-sm font-mono text-yellow-400 bg-slate-900/90 border border-yellow-400/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap shadow-[0_0_15px_rgba(250,204,21,0.3)]">
            [WARNING] Left sector
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-l-yellow-400/50"></div>
          </div>
        </div>

        <div className="group relative inline-block">
          <button className="px-6 py-3 text-sm font-bold uppercase tracking-wider text-green-400 bg-transparent border border-green-400 transition-all duration-300 hover:bg-green-400/10 hover:shadow-[0_0_20px_rgba(74,222,128,0.5)]">
            Right
          </button>
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-4 py-2 text-sm font-mono text-green-400 bg-slate-900/90 border border-green-400/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap shadow-[0_0_15px_rgba(74,222,128,0.3)]">
            ACCESS_GRANTED
            <div className="absolute right-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-r-green-400/50"></div>
          </div>
        </div>
      </div>

      {/* Glitch effect */}
      <div className="group relative inline-block">
        <button className="px-6 py-3 text-sm font-bold uppercase tracking-wider text-red-500 bg-red-500/10 border border-red-500 transition-all duration-300 hover:bg-red-500/20 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] animate-pulse">
          DANGER
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-4 py-2 text-sm font-mono text-red-500 bg-slate-900/95 border border-red-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap shadow-[0_0_20px_rgba(239,68,68,0.5),inset_0_0_20px_rgba(239,68,68,0.1)]">
          <span className="animate-pulse">!</span> CRITICAL_ERROR_0x7F
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-red-500"></div>
        </div>
      </div>

      {/* Hologram style */}
      <div className="group relative inline-block">
        <div className="w-12 h-12 flex items-center justify-center border border-cyan-400 rounded-full cursor-help transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">
          <span className="text-cyan-400 font-mono text-lg">?</span>
        </div>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-4 py-3 text-sm font-mono bg-gradient-to-b from-cyan-400/20 to-transparent border border-cyan-400/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap backdrop-blur-sm">
          <div className="text-cyan-300">HOLOGRAM_v2.077</div>
          <div className="text-cyan-400/60 text-xs mt-1">Projection active</div>
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(34,211,238,0.03)_2px,rgba(34,211,238,0.03)_4px)] pointer-events-none"></div>
        </div>
      </div>

      <style>{`
        .clip-corner {
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }
      `}</style>
    </div>
  )
}
