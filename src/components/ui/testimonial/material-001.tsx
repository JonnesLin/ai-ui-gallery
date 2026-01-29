export default function MaterialTestimonial() {
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
    <section className="py-24 px-6 bg-gray-100 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-medium text-gray-900 text-center mb-2">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-xl mx-auto">
          Trusted by professionals worldwide
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Header with avatar */}
              <div className="bg-indigo-600 p-6 pb-12 relative">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, j) => (
                    <span key={j} className="text-white/80 text-sm">★</span>
                  ))}
                </div>
                <div className="absolute -bottom-8 left-6">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                  />
                </div>
              </div>

              <div className="p-6 pt-12">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-medium text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">
                    {t.role} at {t.company}
                  </p>
                </div>
              </div>

              {/* Ripple button */}
              <div className="px-6 pb-6">
                <button className="w-full py-3 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 active:bg-indigo-100 transition-colors duration-200 uppercase text-sm tracking-wide">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
