export default function RetroStats() {
  const stats = [
    { value: '10K+', label: 'Active Users', color: 'bg-orange-400' },
    { value: '50M+', label: 'Downloads', color: 'bg-pink-400' },
    { value: '4.9', label: 'Rating', color: 'bg-purple-400' },
    { value: '99.9%', label: 'Uptime', color: 'bg-blue-400' },
  ];

  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-orange-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            Our Numbers Speak
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative"
            >
              <div className={`${stat.color} rounded-lg p-8 text-center transform rotate-1 hover:rotate-0 transition-transform duration-300`}>
                <div className="text-5xl font-black text-white mb-2" style={{ fontFamily: 'Georgia, serif', textShadow: '3px 3px 0 rgba(0,0,0,0.2)' }}>
                  {stat.value}
                </div>
                <div className="text-sm text-white/90 font-bold uppercase">
                  {stat.label}
                </div>
              </div>
              <div className="absolute inset-0 bg-gray-900 rounded-lg -z-10 transform translate-x-1 translate-y-1"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
