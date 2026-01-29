export default function PastelTestimonial() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO',
      company: 'TechCorp',
      avatar: 'https://i.pravatar.cc/100?img=1',
      quote: 'This product has transformed how we work. Absolutely incredible experience.',
      rating: 5,
      color: 'bg-pink-100 border-pink-200',
      accent: 'text-pink-400',
    },
    {
      name: 'Mike Johnson',
      role: 'Designer',
      company: 'Creative Co',
      avatar: 'https://i.pravatar.cc/100?img=2',
      quote: 'The best tool I have ever used. It saves me hours every week.',
      rating: 5,
      color: 'bg-blue-100 border-blue-200',
      accent: 'text-blue-400',
    },
    {
      name: 'Emily Davis',
      role: 'Product Manager',
      company: 'StartupXYZ',
      avatar: 'https://i.pravatar.cc/100?img=3',
      quote: 'Our team productivity increased by 40% since we started using this.',
      rating: 5,
      color: 'bg-purple-100 border-purple-200',
      accent: 'text-purple-400',
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-700 text-center mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-500 text-center mb-16 max-w-xl mx-auto">
          Hear from our happy users
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`${t.color} border-2 rounded-3xl p-8 hover:scale-105 transition-transform duration-300`}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} className={`${t.accent} text-xl`}>&#9829;</span>
                ))}
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full border-4 border-white shadow-md"
                />
                <div>
                  <p className="font-semibold text-gray-700">{t.name}</p>
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
