export default function NeonTestimonial() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO',
      company: 'TechCorp',
      avatar: 'https://i.pravatar.cc/100?img=1',
      quote: 'This product has transformed how we work. Absolutely incredible experience.',
      rating: 5,
      glow: 'shadow-[0_0_30px_rgba(236,72,153,0.5)]',
      border: 'border-pink-500',
      text: 'text-pink-500',
    },
    {
      name: 'Mike Johnson',
      role: 'Designer',
      company: 'Creative Co',
      avatar: 'https://i.pravatar.cc/100?img=2',
      quote: 'The best tool I have ever used. It saves me hours every week.',
      rating: 5,
      glow: 'shadow-[0_0_30px_rgba(34,211,238,0.5)]',
      border: 'border-cyan-400',
      text: 'text-cyan-400',
    },
    {
      name: 'Emily Davis',
      role: 'Product Manager',
      company: 'StartupXYZ',
      avatar: 'https://i.pravatar.cc/100?img=3',
      quote: 'Our team productivity increased by 40% since we started using this.',
      rating: 5,
      glow: 'shadow-[0_0_30px_rgba(163,230,53,0.5)]',
      border: 'border-lime-400',
      text: 'text-lime-400',
    },
  ];

  return (
    <section className="py-24 px-6 bg-gray-950 min-h-screen flex items-center relative overflow-hidden">
      {/* Neon light streaks */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-pink-500/50 to-transparent" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl font-bold text-center mb-4">
          <span className="text-white" style={{ textShadow: '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3)' }}>
            TESTIMONIALS
          </span>
        </h2>
        <p className="text-gray-500 text-center mb-16 tracking-widest uppercase text-sm">
          Illuminating feedback
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-gray-900/50 backdrop-blur-sm border-2 ${t.border} rounded-xl p-8 ${t.glow} hover:scale-105 transition-all duration-300`}
            >
              <div className="flex gap-2 mb-6">
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} className={`${t.text} text-xl`} style={{ textShadow: '0 0 10px currentColor' }}>
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className={`p-1 rounded-full ${t.border} border-2 ${t.glow}`}>
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div>
                  <p className={`font-bold ${t.text}`} style={{ textShadow: '0 0 10px currentColor' }}>
                    {t.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {t.role} at {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
