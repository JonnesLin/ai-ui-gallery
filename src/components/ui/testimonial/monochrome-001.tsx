export default function MonochromeTestimonial() {
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
    <section className="py-24 px-6 bg-neutral-100 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-neutral-900 text-center mb-4 tracking-tight">
          Client Feedback
        </h2>
        <p className="text-neutral-500 text-center mb-16 max-w-xl mx-auto">
          Words from those who matter most
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-neutral-200 rounded-lg p-8 hover:border-neutral-400 transition-colors duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} className="text-neutral-900 text-lg">&#9679;</span>
                ))}
              </div>
              <p className="text-neutral-700 mb-8 leading-relaxed text-lg">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full grayscale"
                />
                <div>
                  <p className="font-semibold text-neutral-900">{t.name}</p>
                  <p className="text-sm text-neutral-500">
                    {t.role}, {t.company}
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
