export default function ThreeDTestimonial() {
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
    <section className="py-24 px-6 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 min-h-screen flex items-center" style={{ perspective: '1000px' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-xl mx-auto">
          Real stories from real people
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group"
              style={{ perspective: '1000px' }}
            >
              <div
                className="bg-white rounded-2xl p-8 transition-all duration-500 group-hover:[transform:rotateY(5deg)_rotateX(5deg)] relative"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)'
                }}
              >
                {/* 3D floating element */}
                <div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg transition-all duration-500 group-hover:[transform:translateZ(30px)]"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  "
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, j) => (
                    <span key={j} className="text-amber-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  "{t.quote}"
                </p>
                <div
                  className="flex items-center gap-4 transition-all duration-500 group-hover:[transform:translateZ(20px)]"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full border-4 border-white shadow-lg"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{t.name}</p>
                    <p className="text-sm text-gray-500">
                      {t.role} at {t.company}
                    </p>
                  </div>
                </div>

                {/* Bottom shadow for 3D effect */}
                <div
                  className="absolute -bottom-4 left-4 right-4 h-4 bg-gradient-to-b from-black/10 to-transparent rounded-b-2xl blur-sm transition-all duration-500 group-hover:opacity-50"
                  style={{ transform: 'translateZ(-10px)' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
