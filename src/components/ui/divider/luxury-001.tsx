export default function LuxuryDivider() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black p-8 space-y-12">
      {/* Horizontal Dividers */}
      <section className="space-y-8">
        <h2 className="text-sm font-light text-amber-400 mb-6 uppercase tracking-[0.3em]">Horizontal</h2>

        {/* Gold Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

        {/* Thick Gold */}
        <div className="w-full h-0.5 bg-gradient-to-r from-amber-600 via-amber-300 to-amber-600"></div>

        {/* Diamond Pattern */}
        <div className="flex gap-4 items-center justify-center">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-500"></div>
          <div className="w-2 h-2 bg-amber-400 rotate-45"></div>
          <div className="w-3 h-3 bg-amber-300 rotate-45"></div>
          <div className="w-2 h-2 bg-amber-400 rotate-45"></div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-500"></div>
        </div>

        {/* Elegant Double */}
        <div className="space-y-3">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"></div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
        </div>
      </section>

      {/* With Text */}
      <section className="space-y-8">
        <h2 className="text-sm font-light text-amber-400 mb-6 uppercase tracking-[0.3em]">With Text</h2>

        {/* Elegant Center */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-400 to-amber-400"></div>
          <span className="text-xs text-amber-400 uppercase tracking-[0.4em] font-light">Exclusive</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-amber-400 to-amber-400"></div>
        </div>

        {/* Royal Badge */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500 to-amber-500"></div>
          <div className="relative px-10 py-3 bg-gradient-to-r from-amber-900/50 to-amber-800/50 border border-amber-500/50">
            <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-amber-400 rotate-45"></div>
            <span className="text-sm text-amber-200 uppercase tracking-[0.3em] font-light">Premium</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-amber-500 to-amber-500"></div>
        </div>

        {/* Ornate Frame */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-px bg-amber-500/40"></div>
          <div className="relative px-8 py-4 border-2 border-amber-500/60 bg-gradient-to-b from-amber-950/40 to-black/40">
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-amber-400"></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-amber-400"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-amber-400"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-amber-400"></div>
            <span className="text-sm text-amber-300 uppercase tracking-[0.3em] font-serif">Prestige</span>
          </div>
          <div className="flex-1 h-px bg-amber-500/40"></div>
        </div>
      </section>

      {/* With Icon */}
      <section className="space-y-8">
        <h2 className="text-sm font-light text-amber-400 mb-6 uppercase tracking-[0.3em]">With Icon</h2>

        {/* Crown Icon */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500 to-amber-500"></div>
          <div className="p-3 bg-gradient-to-br from-amber-600 to-amber-800 border border-amber-400/50">
            <svg className="w-5 h-5 text-amber-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l2.5 5 5.5.5-4 4 1 5.5L12 14l-5 3 1-5.5-4-4 5.5-.5L12 2z"/>
            </svg>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-amber-500 to-amber-500"></div>
        </div>

        {/* Diamond Frame */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-px bg-amber-500/40"></div>
          <div className="relative p-4">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-amber-900 rotate-45"></div>
            <div className="absolute inset-0.5 bg-black rotate-45"></div>
            <svg className="w-6 h-6 text-amber-400 relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div className="flex-1 h-px bg-amber-500/40"></div>
        </div>
      </section>

      {/* Vertical Dividers */}
      <section>
        <h2 className="text-sm font-light text-amber-400 mb-6 uppercase tracking-[0.3em]">Vertical</h2>
        <div className="flex items-center justify-center gap-12 h-40 bg-gradient-to-r from-black via-amber-950/20 to-black border border-amber-500/30 p-8">
          <div className="text-sm text-amber-300 uppercase tracking-[0.2em] font-light">Collection A</div>
          <div className="w-px h-full bg-gradient-to-b from-transparent via-amber-400 to-transparent"></div>
          <div className="text-sm text-amber-300 uppercase tracking-[0.2em] font-light">Collection B</div>
          <div className="w-px h-full bg-gradient-to-b from-transparent via-amber-500 to-transparent"></div>
          <div className="text-sm text-amber-300 uppercase tracking-[0.2em] font-light">Collection C</div>
        </div>
      </section>

      {/* Special Effects */}
      <section className="space-y-8">
        <h2 className="text-sm font-light text-amber-400 mb-6 uppercase tracking-[0.3em]">Special</h2>

        {/* Shimmer Effect */}
        <div className="w-full h-1 bg-gradient-to-r from-amber-600 via-amber-300 via-amber-600 to-amber-900 shadow-[0_0_20px_rgba(251,191,36,0.5)]"></div>

        {/* Ornamental */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-1 h-1 bg-amber-500 rotate-45"></div>
          <div className="w-2 h-2 bg-amber-400 rotate-45"></div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-500"></div>
          <div className="w-3 h-3 bg-amber-300 rotate-45"></div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-500"></div>
          <div className="w-2 h-2 bg-amber-400 rotate-45"></div>
          <div className="w-1 h-1 bg-amber-500 rotate-45"></div>
        </div>
      </section>
    </div>
  );
}