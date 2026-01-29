export default function CyberpunkTestimonial() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO',
      company: 'TechCorp',
      avatar: 'https://i.pravatar.cc/100?img=1',
      quote: 'This product has transformed how we work. Absolutely incredible experience.',
      rating: 5,
    },
    {
      name: 'Mike Johnson',
      role: 'Designer',
      company: 'Creative Co',
      avatar: 'https://i.pravatar.cc/100?img=2',
      quote: 'The best tool I have ever used. It saves me hours every week.',
      rating: 5,
    },
    {
      name: 'Emily Davis',
      role: 'Product Manager',
      company: 'StartupXYZ',
      avatar: 'https://i.pravatar.cc/100?img=3',
      quote: 'Our team productivity increased by 40% since we started using this.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 px-6 bg-black min-h-screen flex items-center relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.03) 2px, rgba(0, 255, 255, 0.03) 4px)'
      }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 font-mono">
          <span className="text-cyan-400">&lt;</span>
          <span className="text-white">TESTIMONIALS</span>
          <span className="text-cyan-400">/&gt;</span>
        </h2>
        <p className="text-cyan-400/60 text-center mb-16 font-mono text-sm tracking-widest">
          // USER_FEEDBACK.LOAD()
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative group"
            >
              {/* Glowing border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition-opacity duration-300" />

              <div className="relative bg-gray-950 border border-cyan-500/50 rounded-lg p-6 clip-corner">
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400" />
                <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-fuchsia-400" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-fuchsia-400" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-400" />

                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <span key={j} className="text-fuchsia-400 text-lg animate-pulse" style={{ animationDelay: `${j * 0.1}s` }}>&#9733;</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 font-mono text-sm leading-relaxed">
                  <span className="text-cyan-400">&gt;</span> "{t.quote}"
                </p>
                <div className="border-t border-cyan-500/30 pt-4 flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded border-2 border-cyan-500/50"
                      style={{ filter: 'hue-rotate(180deg)' }}
                    />
                    <div className="absolute inset-0 bg-cyan-500/20 mix-blend-overlay rounded" />
                  </div>
                  <div>
                    <p className="font-mono font-bold text-cyan-400">{t.name}</p>
                    <p className="text-xs font-mono text-fuchsia-400/80">
                      {t.role} :: {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
