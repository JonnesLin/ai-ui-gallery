export default function FuturisticTooltip() {
  return (
    <div className="min-h-screen bg-black p-16 flex flex-col items-center justify-center gap-24 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

      <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-[0.3em] relative z-10 border border-cyan-500/30 px-6 py-2 bg-cyan-500/5 backdrop-blur-sm">
        &gt; Futuristic_Tooltips
      </h2>

      {/* Top */}
      <div className="group relative inline-block z-10">
        <button className="px-8 py-3 text-xs font-bold tracking-[0.2em] text-cyan-400 bg-slate-900/80 border border-cyan-500/50 backdrop-blur-sm relative overflow-hidden transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
          <span className="relative z-10">[HOVER_TOP]</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-5 px-6 py-4 text-xs font-mono tracking-wider text-cyan-300 bg-slate-900/95 border border-cyan-500/70 backdrop-blur-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.2)] whitespace-nowrap">
          &gt; SYSTEM_MESSAGE
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-slate-900 border-r border-b border-cyan-500/70 rotate-45 -mt-[6px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-cyan-500/10 to-cyan-500/5 animate-pulse"></div>
        </div>
      </div>

      {/* Bottom */}
      <div className="group relative inline-block z-10">
        <button className="px-8 py-3 text-xs font-bold tracking-[0.2em] text-blue-400 bg-slate-900/80 border border-blue-500/50 backdrop-blur-sm relative overflow-hidden transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
          <span className="relative z-10">[HOVER_BOTTOM]</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-5 px-6 py-4 text-xs font-mono tracking-wider text-blue-300 bg-slate-900/95 border border-blue-500/70 backdrop-blur-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.2)] whitespace-nowrap">
          &gt; INTERFACE_ACTIVE
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-slate-900 border-l border-t border-blue-500/70 rotate-45 mb-[-6px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-blue-500/10 to-blue-500/5 animate-pulse"></div>
        </div>
      </div>

      {/* Left & Right */}
      <div className="flex gap-40 z-10">
        <div className="group relative inline-block">
          <button className="px-8 py-3 text-xs font-bold tracking-[0.2em] text-purple-400 bg-slate-900/80 border border-purple-500/50 backdrop-blur-sm relative overflow-hidden transition-all duration-300 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            <span className="relative z-10">[HOVER_LEFT]</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </button>
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-5 px-6 py-4 text-xs font-mono tracking-wider text-purple-300 bg-slate-900/95 border border-purple-500/70 backdrop-blur-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.2)] whitespace-nowrap">
            &gt; DATA_STREAM
            <div className="absolute left-full top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-slate-900 border-r border-t border-purple-500/70 rotate-45 ml-[-6px]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-purple-500/10 to-purple-500/5 animate-pulse"></div>
          </div>
        </div>

        <div className="group relative inline-block">
          <button className="px-8 py-3 text-xs font-bold tracking-[0.2em] text-pink-400 bg-slate-900/80 border border-pink-500/50 backdrop-blur-sm relative overflow-hidden transition-all duration-300 hover:border-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]">
            <span className="relative z-10">[HOVER_RIGHT]</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </button>
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-5 px-6 py-4 text-xs font-mono tracking-wider text-pink-300 bg-slate-900/95 border border-pink-500/70 backdrop-blur-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-[0_0_30px_rgba(236,72,153,0.2)] whitespace-nowrap">
            &gt; NEURAL_LINK
            <div className="absolute right-full top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-slate-900 border-l border-b border-pink-500/70 rotate-45 mr-[-6px]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 via-pink-500/10 to-pink-500/5 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Multiline with scan effect */}
      <div className="group relative inline-block z-10">
        <span className="text-xs font-mono text-cyan-400 border-b border-cyan-500/50 border-dotted cursor-help tracking-wider">
          &gt; SCAN_HERE
        </span>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-5 px-6 py-5 text-xs font-mono tracking-wider text-cyan-300 bg-slate-900/95 border border-cyan-500/70 backdrop-blur-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.2)] w-80">
          <div className="space-y-2">
            <p>&gt; INITIALIZING_PROTOCOL...</p>
            <p>&gt; SYSTEMS_ONLINE</p>
            <p>&gt; NEURAL_INTERFACE_READY</p>
            <div className="mt-3 pt-3 border-t border-cyan-500/30">
              <p className="text-cyan-400">&gt; STATUS: CONNECTED</p>
            </div>
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-slate-900 border-r border-b border-cyan-500/70 rotate-45 -mt-[6px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 animate-[scan_2s_ease-in-out_infinite]"></div>
        </div>
      </div>

      {/* Interactive with action */}
      <div className="group relative inline-block z-10">
        <button className="px-8 py-3 text-xs font-bold tracking-[0.2em] text-green-400 bg-slate-900/80 border border-green-500/50 backdrop-blur-sm relative overflow-hidden transition-all duration-300 hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]">
          <span className="relative z-10">[EXECUTE]</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-5 px-6 py-5 bg-slate-900/95 border border-green-500/70 backdrop-blur-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.2)] w-72">
          <p className="text-xs font-mono tracking-wider text-green-300 mb-4">&gt; CONFIRM_ACTION</p>
          <button className="w-full px-4 py-3 text-xs font-bold tracking-[0.15em] text-black bg-green-400 border border-green-400 relative overflow-hidden transition-all duration-200 hover:bg-green-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]">
            <span className="relative z-10">[INITIALIZE]</span>
          </button>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-slate-900 border-l border-t border-green-500/70 rotate-45 mb-[-6px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-green-500/10 to-green-500/5 animate-pulse"></div>
        </div>
      </div>

      {/* Loading state tooltip */}
      <div className="group relative inline-block z-10">
        <div className="w-12 h-12 flex items-center justify-center text-xs font-mono text-cyan-400 bg-slate-900/80 border border-cyan-500/50 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
          [?]
        </div>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-5 px-6 py-4 text-xs font-mono tracking-wider text-cyan-300 bg-slate-900/95 border border-cyan-500/70 backdrop-blur-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.2)] whitespace-nowrap">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
            <span>&gt; PROCESSING...</span>
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-slate-900 border-r border-b border-cyan-500/70 rotate-45 -mt-[6px]"></div>
        </div>
      </div>
    </div>
  )
}
