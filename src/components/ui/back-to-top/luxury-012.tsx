export default function LuxuryBackToTop() {
  return (
    <div className="min-h-screen bg-slate-950 relative">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* Demo page content */}
      <div className="relative z-10 p-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-light text-amber-200 mb-6 tracking-[0.3em] uppercase">
          Luxury Back to Top
        </h1>
        <div className="rounded-none p-8 bg-slate-900/80 border border-amber-500/30">
          <p className="text-amber-100/80 leading-relaxed mb-4 tracking-wide">
            Luxury design embodies elegance, sophistication, and refined taste. Gold accents,
            deep blacks, and meticulous attention to detail create an exclusive experience.
          </p>
          {Array.from({ length: 5 }).map((_, i) => (
            <p key={i} className="text-slate-400 mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          ))}
        </div>
      </div>

      {/* Variant 1: Gold circle */}
      <button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full
                   bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-600
                   flex items-center justify-center transition-all duration-500
                   hover:scale-105 shadow-lg shadow-amber-500/20
                   hover:shadow-amber-500/40"
        aria-label="Back to top"
      >
        <svg
          className="w-5 h-5 text-slate-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Variant 2: Diamond shape */}
      <button
        className="fixed bottom-6 right-28 w-12 h-12 bg-slate-900
                   border border-amber-500/50 flex items-center justify-center
                   transition-all duration-500 hover:border-amber-400
                   hover:shadow-[0_0_20px_rgba(251,191,36,0.2)]
                   rotate-45"
        aria-label="Back to top"
      >
        <svg
          className="w-5 h-5 text-amber-400 -rotate-45"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Variant 3: Elegant pill */}
      <button
        className="fixed bottom-24 right-6 px-6 py-3 bg-transparent
                   border border-amber-500/50 flex items-center gap-3
                   transition-all duration-500 hover:bg-amber-500/10
                   hover:border-amber-400"
        aria-label="Back to top"
      >
        <svg
          className="w-4 h-4 text-amber-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 15l7-7 7 7" />
        </svg>
        <span className="text-xs text-amber-300 tracking-[0.2em] uppercase font-light">Return</span>
      </button>

      {/* Variant 4: Monogram style */}
      <button
        className="fixed bottom-6 left-6 w-14 h-14 rounded-full bg-slate-900
                   border-2 border-amber-500/30 flex items-center justify-center
                   transition-all duration-500 hover:border-amber-400
                   relative overflow-hidden group"
        aria-label="Back to top"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="text-amber-400 font-serif text-xl relative z-10">↑</span>
      </button>

      {/* Variant 5: Art deco */}
      <button
        className="fixed bottom-24 left-6 w-16 h-16 bg-slate-900
                   border border-amber-500/40 flex items-center justify-center
                   transition-all duration-500 hover:border-amber-400
                   relative"
        aria-label="Back to top"
      >
        {/* Art deco corner accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-amber-500" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-amber-500" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-amber-500" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-amber-500" />
        <svg
          className="w-5 h-5 text-amber-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19V5m-7 7l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
