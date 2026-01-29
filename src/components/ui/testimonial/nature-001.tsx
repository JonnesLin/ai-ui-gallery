export default function NatureTestimonial() {
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
    <section className="py-24 px-6 bg-gradient-to-b from-emerald-50 to-teal-50 min-h-screen flex items-center relative overflow-hidden">
      {/* Leaf decorations */}
      <svg className="absolute top-10 left-10 w-32 h-32 text-emerald-200 opacity-50" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 5 C20 20 10 50 15 80 C30 70 60 75 75 55 C90 35 80 10 50 5" />
      </svg>
      <svg className="absolute bottom-10 right-10 w-40 h-40 text-teal-200 opacity-50 rotate-180" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 5 C20 20 10 50 15 80 C30 70 60 75 75 55 C90 35 80 10 50 5" />
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-semibold text-emerald-900 text-center mb-4">
          What Our Customers Say
        </h2>
        <p className="text-emerald-700/70 text-center mb-16 max-w-xl mx-auto">
          Growing together with our community
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-emerald-100 shadow-lg shadow-emerald-100/50 hover:shadow-xl hover:shadow-emerald-200/50 transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2 C8 2 6 4 6 6 C6 8 8 10 10 12 C12 10 14 8 14 6 C14 4 12 2 10 2" />
                  </svg>
                ))}
              </div>
              <p className="text-emerald-800 mb-8 leading-relaxed text-lg">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full border-4 border-emerald-100"
                />
                <div>
                  <p className="font-semibold text-emerald-900">{t.name}</p>
                  <p className="text-sm text-emerald-600">
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
