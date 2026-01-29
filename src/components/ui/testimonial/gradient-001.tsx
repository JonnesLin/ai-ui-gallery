export default function GradientTestimonial() {
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

  const gradients = [
    'from-blue-500 to-cyan-400',
    'from-purple-500 to-pink-400',
    'from-orange-500 to-yellow-400',
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            What Our Customers Say
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">
          Success stories from amazing teams
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative group"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${gradients[i]} rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300`} />
              <div className="relative bg-gray-900 rounded-2xl p-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, j) => (
                    <span key={j} className={`bg-gradient-to-r ${gradients[i]} bg-clip-text text-transparent text-lg`}>★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className={`p-0.5 rounded-full bg-gradient-to-r ${gradients[i]}`}>
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-gray-500">
                      {t.role} at {t.company}
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
