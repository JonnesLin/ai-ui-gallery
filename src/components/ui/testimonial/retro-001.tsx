export default function RetroTestimonial() {
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
    <section className="py-24 px-6 bg-amber-50 min-h-screen flex items-center" style={{ backgroundImage: 'radial-gradient(circle, #d4a574 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-serif text-amber-900 text-center mb-4 italic">
          Customer Reviews
        </h2>
        <div className="flex justify-center mb-16">
          <div className="h-1 w-32 bg-amber-600" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-amber-100 rounded-sm p-8 border-2 border-amber-300 shadow-lg relative"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-serif text-xl">
                "
              </div>
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} className="text-amber-600 text-lg">&#9733;</span>
                ))}
              </div>
              <p className="text-amber-900 mb-6 font-serif text-lg leading-relaxed text-center italic">
                {t.quote}
              </p>
              <div className="border-t border-amber-300 pt-4 text-center">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mx-auto mb-3 border-4 border-amber-200 sepia"
                />
                <p className="font-serif font-bold text-amber-900">{t.name}</p>
                <p className="text-sm text-amber-700 font-serif">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
