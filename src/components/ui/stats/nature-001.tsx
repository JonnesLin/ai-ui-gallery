export default function NatureStats() {
  const stats = [
    { value: '10K+', label: 'Community Members', icon: '🌱' },
    { value: '50M+', label: 'Seeds Planted', icon: '🌿' },
    { value: '4.9', label: 'Growth Rating', icon: '🌳' },
    { value: '99.9%', label: 'Sustainability', icon: '🌍' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-emerald-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="leaf-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M50 10 Q60 30 50 50 Q40 30 50 10" fill="currentColor" className="text-green-600"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-900 mb-3">
            Growing Together Naturally
          </h2>
          <p className="text-green-700">Nurturing success organically</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm border-2 border-green-200 rounded-2xl p-8 text-center hover:border-green-400 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-green-800 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-green-700 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
