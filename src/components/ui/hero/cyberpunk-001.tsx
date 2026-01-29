export default function CyberpunkHero() {
  return (
    <section className="min-h-screen bg-[#0a0a0f] relative overflow-hidden flex items-center justify-center px-6">
      {/* Glitch background lines */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20"
            style={{
              top: `${i * 5}%`,
              left: 0,
              right: 0,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>

      {/* Neon frame */}
      <div className="absolute inset-8 md:inset-16 lg:inset-24 border border-cyan-500/30" />
      <div className="absolute inset-10 md:inset-20 lg:inset-28 border border-pink-500/20" />

      {/* Circuit pattern corners */}
      <div className="absolute top-8 left-8 w-32 h-32 border-l-2 border-t-2 border-cyan-500 opacity-60">
        <div className="absolute top-4 left-4 w-3 h-3 bg-cyan-500 animate-pulse" />
        <div className="absolute top-4 left-12 w-2 h-2 bg-pink-500" />
      </div>
      <div className="absolute bottom-8 right-8 w-32 h-32 border-r-2 border-b-2 border-pink-500 opacity-60">
        <div className="absolute bottom-4 right-4 w-3 h-3 bg-pink-500 animate-pulse" />
        <div className="absolute bottom-4 right-12 w-2 h-2 bg-cyan-500" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl">
        {/* Glitch effect heading */}
        <div className="relative mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-wider text-white relative">
            <span className="relative inline-block">
              CYBER
              <span className="absolute top-0 left-0.5 text-cyan-500 opacity-70 blur-[1px]" aria-hidden="true">CYBER</span>
              <span className="absolute top-0 -left-0.5 text-pink-500 opacity-70 blur-[1px]" aria-hidden="true">CYBER</span>
            </span>
            <br />
            <span className="relative inline-block">
              PUNK
              <span className="absolute top-0 left-0.5 text-cyan-500 opacity-70 blur-[1px]" aria-hidden="true">PUNK</span>
              <span className="absolute top-0 -left-0.5 text-pink-500 opacity-70 blur-[1px]" aria-hidden="true">PUNK</span>
            </span>
          </h1>
        </div>

        {/* Subtitle with cyber styling */}
        <div className="inline-block mb-12">
          <div className="relative px-8 py-4 bg-black/50 border border-cyan-500/50 backdrop-blur-sm">
            <p className="text-lg md:text-xl text-gray-300 font-mono">
              &gt; WELCOME TO THE NEON-LIT FUTURE_
              <span className="animate-pulse">|</span>
            </p>
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-cyan-500" />
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-cyan-500" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-pink-500" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-pink-500" />
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group relative px-10 py-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-400 skew-x-[-12deg] group-hover:skew-x-0 transition-transform" />
            <span className="relative font-bold text-black uppercase tracking-wider">
              JACK IN
            </span>
          </button>
          <button className="group relative px-10 py-4 overflow-hidden border border-pink-500/50">
            <div className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/20 transition-colors" />
            <span className="relative font-bold text-pink-500 uppercase tracking-wider">
              DECRYPT
            </span>
          </button>
        </div>

        {/* Stats bar */}
        <div className="mt-16 flex justify-center gap-8 md:gap-16 font-mono text-sm">
          <div>
            <div className="text-cyan-500 text-2xl md:text-3xl font-bold">2077</div>
            <div className="text-gray-500 uppercase">Year</div>
          </div>
          <div>
            <div className="text-pink-500 text-2xl md:text-3xl font-bold">NEO-NYC</div>
            <div className="text-gray-500 uppercase">Location</div>
          </div>
          <div>
            <div className="text-yellow-500 text-2xl md:text-3xl font-bold">ONLINE</div>
            <div className="text-gray-500 uppercase">Status</div>
          </div>
        </div>
      </div>

      {/* Scan line animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent animate-scan" style={{
          animation: 'scan 3s linear infinite'
        }} />
      </div>
      <style>{`
        @keyframes scan {
          0% { top: -10%; }
          100% { top: 110%; }
        }
      `}</style>
    </section>
  );
}
