export default function ThreeDStats() {
  const stats = [
    { value: '10K+', label: 'Active Users', color: 'bg-gradient-to-br from-blue-400 to-blue-600' },
    { value: '50M+', label: 'Downloads', color: 'bg-gradient-to-br from-purple-400 to-purple-600' },
    { value: '4.9', label: 'Rating', color: 'bg-gradient-to-br from-pink-400 to-pink-600' },
    { value: '99.9%', label: 'Uptime', color: 'bg-gradient-to-br from-green-400 to-green-600' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-200 perspective-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <div
                className="relative transition-all duration-500 ease-out group-hover:translate-y-2"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'rotateX(15deg) rotateY(-10deg)',
                }}
              >
                <div className={`${stat.color} rounded-2xl p-8 text-center shadow-2xl`}>
                  <div className="text-5xl font-black text-white mb-3 drop-shadow-lg">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/90 font-bold uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>

                <div
                  className="absolute inset-0 bg-black/30 rounded-2xl -z-10"
                  style={{
                    transform: 'translateZ(-20px)',
                  }}
                ></div>

                <div
                  className="absolute inset-0 bg-black/20 rounded-2xl -z-20"
                  style={{
                    transform: 'translateZ(-40px)',
                  }}
                ></div>

                <div
                  className="absolute inset-0 bg-black/10 rounded-2xl -z-30"
                  style={{
                    transform: 'translateZ(-60px)',
                  }}
                ></div>
              </div>

              <div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-4/5 h-4 bg-black/20 rounded-full blur-md"
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
