export default function LuxuryHero() {
  return (
    <section className="min-h-screen bg-[#0c0c0c] relative overflow-hidden flex items-center justify-center px-6">
      {/* Subtle gold gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-amber-900/10" />

      {/* Gold particle effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
          50% { transform: translateY(-20px) scale(1.5); opacity: 1; }
        }
      `}</style>

      {/* Decorative frame */}
      <div className="absolute inset-12 md:inset-20 border border-amber-500/20" />
      <div className="absolute top-12 md:top-20 left-12 md:left-20 w-8 h-8 border-t-2 border-l-2 border-amber-500/60" />
      <div className="absolute top-12 md:top-20 right-12 md:right-20 w-8 h-8 border-t-2 border-r-2 border-amber-500/60" />
      <div className="absolute bottom-12 md:bottom-20 left-12 md:left-20 w-8 h-8 border-b-2 border-l-2 border-amber-500/60" />
      <div className="absolute bottom-12 md:bottom-20 right-12 md:right-20 w-8 h-8 border-b-2 border-r-2 border-amber-500/60" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo/Brand mark */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 border border-amber-500/40 rotate-45">
            <span className="text-amber-500 text-2xl font-serif -rotate-45">L</span>
          </div>
        </div>

        {/* Subtitle */}
        <div className="mb-6 tracking-[0.4em] text-amber-500/80 text-sm uppercase font-light">
          Established MMXXIV
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight tracking-wide">
          <span className="font-serif italic">Timeless</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 font-serif">
            Elegance
          </span>
        </h1>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-amber-500/60" />
          <div className="w-2 h-2 rotate-45 border border-amber-500/60" />
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-amber-500/60" />
        </div>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Discover a world where exceptional craftsmanship meets unparalleled sophistication.
          Every detail, meticulously perfected.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="group px-12 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-black font-medium uppercase tracking-widest text-sm hover:from-amber-500 hover:to-amber-400 transition-all">
            <span className="flex items-center gap-3">
              Explore Collection
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          <button className="px-12 py-4 border border-amber-500/40 text-amber-500 font-medium uppercase tracking-widest text-sm hover:bg-amber-500/10 hover:border-amber-500/60 transition-all">
            Private Viewing
          </button>
        </div>

        {/* Luxury attributes */}
        <div className="mt-20 flex flex-wrap justify-center gap-12 text-center">
          <div>
            <div className="text-amber-500/80 font-serif italic text-lg mb-1">Handcrafted</div>
            <div className="text-gray-600 text-xs uppercase tracking-widest">Artisan Quality</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-amber-500/20" />
          <div>
            <div className="text-amber-500/80 font-serif italic text-lg mb-1">Exclusive</div>
            <div className="text-gray-600 text-xs uppercase tracking-widest">Limited Editions</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-amber-500/20" />
          <div>
            <div className="text-amber-500/80 font-serif italic text-lg mb-1">Bespoke</div>
            <div className="text-gray-600 text-xs uppercase tracking-widest">Made to Order</div>
          </div>
        </div>
      </div>
    </section>
  );
}
