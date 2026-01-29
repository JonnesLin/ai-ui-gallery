export default function PlayfulStats() {
  const stats = [
    { value: '10K+', label: 'Happy Users', emoji: '🎉', rotation: '-3deg' },
    { value: '50M+', label: 'Downloads', emoji: '🚀', rotation: '2deg' },
    { value: '4.9', label: 'Stars', emoji: '⭐', rotation: '-2deg' },
    { value: '99.9%', label: 'Uptime', emoji: '💪', rotation: '3deg' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200 relative overflow-hidden">
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-bounce">✨</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }}>🌟</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            We're Crushing It! 🎊
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 text-center shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 transform"
              style={{
                transform: `rotate(${stat.rotation})`,
                transition: 'all 0.3s ease'
              }}
            >
              <div className="text-6xl mb-4 animate-pulse">
                {stat.emoji}
              </div>
              <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-gray-700 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
