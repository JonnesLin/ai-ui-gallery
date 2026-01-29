export default function PlayfulTestimonial() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO',
      company: 'TechCorp',
      avatar: 'https://i.pravatar.cc/100?img=1',
      quote: 'This product has transformed how we work. Absolutely incredible experience!',
      rating: 5,
      emoji: '🚀',
      bg: 'bg-yellow-400',
      rotate: '-rotate-2',
    },
    {
      name: 'Mike Johnson',
      role: 'Designer',
      company: 'Creative Co',
      avatar: 'https://i.pravatar.cc/100?img=2',
      quote: 'The best tool I have ever used. It saves me hours every week!',
      rating: 5,
      emoji: '✨',
      bg: 'bg-pink-400',
      rotate: 'rotate-1',
    },
    {
      name: 'Emily Davis',
      role: 'Product Manager',
      company: 'StartupXYZ',
      avatar: 'https://i.pravatar.cc/100?img=3',
      quote: 'Our team productivity increased by 40% since we started using this!',
      rating: 5,
      emoji: '🎉',
      bg: 'bg-cyan-400',
      rotate: '-rotate-1',
    },
  ];

  return (
    <section className="py-24 px-6 bg-violet-500 min-h-screen flex items-center relative overflow-hidden">
      {/* Fun background shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-60" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-pink-300 rounded-full opacity-60" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-cyan-300 rounded-lg rotate-45 opacity-60" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl font-black text-white text-center mb-4">
          People Love Us! 💜
        </h2>
        <p className="text-white/80 text-center mb-16 text-lg">
          See what our awesome community has to say
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`${t.bg} ${t.rotate} rounded-3xl p-8 hover:rotate-0 hover:scale-105 transition-all duration-300 shadow-xl`}
            >
              <div className="text-4xl mb-4">{t.emoji}</div>
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} className="text-white text-xl drop-shadow-md">★</span>
                ))}
              </div>
              <p className="text-white font-bold mb-6 text-lg leading-relaxed">
                "{t.quote}"
              </p>
              <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full border-4 border-white shadow-lg"
                />
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm text-white/80">
                    {t.role} @ {t.company}
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
