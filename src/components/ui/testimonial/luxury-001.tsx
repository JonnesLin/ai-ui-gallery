export default function LuxuryTestimonial() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Chief Executive Officer',
      company: 'TechCorp',
      avatar: 'https://i.pravatar.cc/100?img=1',
      quote: 'This product has transformed how we work. An absolutely exquisite experience that exceeds all expectations.',
      rating: 5,
    },
    {
      name: 'Michael Johnson',
      role: 'Creative Director',
      company: 'Atelier Creative',
      avatar: 'https://i.pravatar.cc/100?img=2',
      quote: 'The finest tool in our arsenal. It saves precious hours every week with unparalleled elegance.',
      rating: 5,
    },
    {
      name: 'Emily Davis',
      role: 'Managing Partner',
      company: 'Davis & Associates',
      avatar: 'https://i.pravatar.cc/100?img=3',
      quote: 'Our team productivity increased dramatically since we embraced this remarkable platform.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 px-6 bg-stone-950 min-h-screen flex items-center relative">
      {/* Subtle gold accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-4 block font-light">
            Testimonials
          </span>
          <h2 className="text-4xl font-light text-white mb-4 tracking-wide">
            Distinguished Clientele
          </h2>
          <div className="flex justify-center items-center gap-4">
            <div className="h-px w-16 bg-amber-600/50" />
            <span className="text-amber-500">&#9830;</span>
            <div className="h-px w-16 bg-amber-600/50" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="text-center group"
            >
              <div className="relative inline-block mb-8">
                <div className="absolute -inset-2 border border-amber-600/30 rounded-full group-hover:border-amber-500/50 transition-colors duration-500" />
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-20 h-20 rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="flex gap-2 mb-6 justify-center">
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} className="text-amber-500 text-sm">&#9830;</span>
                ))}
              </div>
              <p className="text-stone-400 mb-8 leading-relaxed font-light text-lg italic">
                "{t.quote}"
              </p>
              <p className="font-medium text-white tracking-wide uppercase text-sm">{t.name}</p>
              <p className="text-stone-500 text-sm mt-1">
                {t.role}
              </p>
              <p className="text-amber-600/80 text-xs mt-1 tracking-widest uppercase">
                {t.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
