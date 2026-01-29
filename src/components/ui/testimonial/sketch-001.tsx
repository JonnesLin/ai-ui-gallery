export default function SketchTestimonial() {
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
    <section
      className="py-24 px-6 bg-amber-50 min-h-screen flex items-center"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none' stroke='%23d4a574' stroke-width='0.5' stroke-dasharray='5,5'/%3E%3C/svg%3E")`,
        backgroundSize: '100px 100px'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-5xl text-gray-800 text-center mb-4"
          style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
        >
          What People Say ~
        </h2>
        <p className="text-gray-500 text-center mb-16" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
          (hand-picked reviews!)
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-8 relative"
              style={{
                borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
                border: '2px solid #333',
                boxShadow: '4px 4px 0 #333'
              }}
            >
              {/* Hand-drawn quote mark */}
              <div className="text-6xl text-gray-300 absolute -top-2 left-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                "
              </div>

              <div className="flex gap-1 mb-4 mt-4">
                {[...Array(t.rating)].map((_, j) => (
                  <span
                    key={j}
                    className="text-amber-500 text-xl"
                    style={{ transform: `rotate(${(j - 2) * 5}deg)` }}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p
                className="text-gray-700 mb-6 leading-relaxed text-lg"
                style={{ fontFamily: 'Comic Sans MS, cursive' }}
              >
                {t.quote}
              </p>
              <div className="border-t-2 border-dashed border-gray-300 pt-4 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14"
                  style={{
                    borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
                    border: '2px solid #333'
                  }}
                />
                <div>
                  <p className="font-bold text-gray-800" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                    {t.name}
                  </p>
                  <p className="text-sm text-gray-500" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
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
