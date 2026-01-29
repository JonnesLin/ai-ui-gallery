export default function CorporateTestimonial() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Chief Technology Officer',
      company: 'TechCorp International',
      avatar: 'https://i.pravatar.cc/100?img=1',
      quote: 'This product has transformed how we work. Absolutely incredible experience that has revolutionized our entire workflow.',
      rating: 5,
      logo: 'TC',
    },
    {
      name: 'Michael Johnson',
      role: 'Head of Design',
      company: 'Creative Solutions Ltd',
      avatar: 'https://i.pravatar.cc/100?img=2',
      quote: 'The best enterprise tool I have ever used. It saves our team countless hours every week.',
      rating: 5,
      logo: 'CS',
    },
    {
      name: 'Emily Davis',
      role: 'VP of Product',
      company: 'StartupXYZ Inc',
      avatar: 'https://i.pravatar.cc/100?img=3',
      quote: 'Our team productivity increased by 40% since we started using this platform.',
      rating: 5,
      logo: 'SX',
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            See why Fortune 500 companies choose our platform for their business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-slate-900 rounded flex items-center justify-center text-white font-bold text-sm">
                  {t.logo}
                </div>
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-500 text-sm">&#9733;</span>
                  ))}
                </div>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="border-t border-slate-100 pt-6 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                  <p className="text-xs text-blue-600 font-medium">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
