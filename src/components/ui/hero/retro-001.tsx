export default function RetroHero() {
  return (
    <section className="min-h-screen bg-[#1a0a2e] relative overflow-hidden flex items-center justify-center px-6">
      {/* Retro sun */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[600px]">
        <div className="w-full h-full rounded-full bg-gradient-to-b from-[#ff6b6b] via-[#feca57] to-[#ff9ff3] opacity-90" />
        {/* Horizontal lines */}
        <div className="absolute inset-0 overflow-hidden rounded-full">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute left-0 right-0 h-2 bg-[#1a0a2e]"
              style={{ top: `${45 + i * 5}%` }}
            />
          ))}
        </div>
      </div>

      {/* Grid floor */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, #1a0a2e 100%),
                       linear-gradient(90deg, #ff6b6b 1px, transparent 1px),
                       linear-gradient(0deg, #ff6b6b 1px, transparent 1px)`,
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'bottom'
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="mb-4 text-[#00ffff] font-mono text-lg tracking-widest uppercase animate-pulse">
          Welcome to the Future
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight">
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#ff6b6b] to-[#feca57]">
            SYNTHWAVE
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#00ffff] to-[#ff9ff3]">
            DREAMS
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-[#ff9ff3] mb-12 max-w-xl mx-auto font-light">
          Step into a neon-lit world where the 80s never ended
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-10 py-4 bg-gradient-to-r from-[#ff6b6b] to-[#feca57] text-[#1a0a2e] font-bold text-lg rounded hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,107,107,0.5)]">
            ENTER THE GRID
          </button>
          <button className="px-10 py-4 border-2 border-[#00ffff] text-[#00ffff] font-bold text-lg rounded hover:bg-[#00ffff] hover:text-[#1a0a2e] transition-colors shadow-[0_0_30px_rgba(0,255,255,0.3)]">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Scanlines overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)'
        }}
      />

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
}
