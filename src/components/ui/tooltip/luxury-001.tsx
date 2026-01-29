export default function LuxuryTooltip() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-neutral-900 to-zinc-900 p-16 flex flex-col items-center justify-center gap-24">
      <h2 className="text-sm font-light text-amber-300 uppercase tracking-[0.3em] border-b border-amber-300/30 pb-2">Luxury Tooltips</h2>

      {/* Top */}
      <div className="group relative inline-block">
        <button className="px-10 py-4 text-sm font-light tracking-[0.2em] text-amber-100 bg-gradient-to-r from-amber-900/40 to-yellow-900/40 border border-amber-500/50 backdrop-blur-sm transition-all duration-500 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]">
          HOVER TOP
        </button>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 px-6 py-4 text-xs font-light tracking-[0.15em] text-amber-100 bg-gradient-to-br from-neutral-900 to-zinc-900 border border-amber-500/50 backdrop-blur-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.6)] whitespace-nowrap">
          PREMIUM EXPERIENCE
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-neutral-900 to-zinc-900 border-r border-b border-amber-500/50 rotate-45 -mt-[7px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10 pointer-events-none"></div>
        </div>
      </div>

      {/* Bottom */}
      <div className="group relative inline-block">
        <button className="px-10 py-4 text-sm font-light tracking-[0.2em] text-amber-100 bg-gradient-to-r from-amber-900/40 to-yellow-900/40 border border-amber-500/50 backdrop-blur-sm transition-all duration-500 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]">
          HOVER BOTTOM
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 px-6 py-4 text-xs font-light tracking-[0.15em] text-amber-100 bg-gradient-to-br from-neutral-900 to-zinc-900 border border-amber-500/50 backdrop-blur-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.6)] whitespace-nowrap">
          SOPHISTICATED DESIGN
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-neutral-900 to-zinc-900 border-l border-t border-amber-500/50 rotate-45 mb-[-7px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10 pointer-events-none"></div>
        </div>
      </div>

      {/* Left & Right */}
      <div className="flex gap-32">
        <div className="group relative inline-block">
          <button className="px-10 py-4 text-sm font-light tracking-[0.2em] text-amber-100 bg-gradient-to-r from-amber-900/40 to-yellow-900/40 border border-amber-500/50 backdrop-blur-sm transition-all duration-500 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]">
            HOVER LEFT
          </button>
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-6 px-6 py-4 text-xs font-light tracking-[0.15em] text-amber-100 bg-gradient-to-br from-neutral-900 to-zinc-900 border border-amber-500/50 backdrop-blur-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.6)] whitespace-nowrap">
            EXCLUSIVE
            <div className="absolute left-full top-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-neutral-900 to-zinc-900 border-r border-t border-amber-500/50 rotate-45 ml-[-7px]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-amber-500/10 pointer-events-none"></div>
          </div>
        </div>

        <div className="group relative inline-block">
          <button className="px-10 py-4 text-sm font-light tracking-[0.2em] text-amber-100 bg-gradient-to-r from-amber-900/40 to-yellow-900/40 border border-amber-500/50 backdrop-blur-sm transition-all duration-500 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]">
            HOVER RIGHT
          </button>
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-6 px-6 py-4 text-xs font-light tracking-[0.15em] text-amber-100 bg-gradient-to-br from-neutral-900 to-zinc-900 border border-amber-500/50 backdrop-blur-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.6)] whitespace-nowrap">
            REFINED
            <div className="absolute right-full top-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-neutral-900 to-zinc-900 border-l border-b border-amber-500/50 rotate-45 mr-[-7px]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-amber-500/10 pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Multiline luxury */}
      <div className="group relative inline-block">
        <span className="text-sm font-light text-amber-300 border-b border-amber-300/50 cursor-help tracking-[0.15em]">
          DISCOVER MORE
        </span>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 px-8 py-6 text-xs font-light tracking-[0.1em] text-amber-100 bg-gradient-to-br from-neutral-900 to-zinc-900 border border-amber-500/50 backdrop-blur-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.6)] w-80">
          <div className="space-y-3">
            <p className="leading-relaxed">Crafted with meticulous attention to detail</p>
            <p className="leading-relaxed">Experience unparalleled elegance</p>
            <p className="text-amber-300">Exclusively designed for distinction</p>
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-neutral-900 to-zinc-900 border-r border-b border-amber-500/50 rotate-45 -mt-[7px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10 pointer-events-none"></div>
        </div>
      </div>

      {/* With link */}
      <div className="group relative inline-block">
        <button className="px-10 py-4 text-sm font-light tracking-[0.2em] text-amber-100 bg-gradient-to-r from-amber-900/40 to-yellow-900/40 border border-amber-500/50 backdrop-blur-sm transition-all duration-500 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]">
          MEMBERSHIP
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 px-8 py-6 bg-gradient-to-br from-neutral-900 to-zinc-900 border border-amber-500/50 backdrop-blur-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.6)] w-72">
          <p className="text-xs font-light tracking-[0.1em] text-amber-100 mb-4 leading-relaxed">Join our exclusive circle</p>
          <a href="#" className="block text-center px-6 py-3 text-xs font-light tracking-[0.2em] text-neutral-900 bg-gradient-to-r from-amber-400 to-yellow-500 border border-amber-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.5)]">
            APPLY NOW
          </a>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-neutral-900 to-zinc-900 border-l border-t border-amber-500/50 rotate-45 mb-[-7px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10 pointer-events-none"></div>
        </div>
      </div>
    </div>
  )
}
