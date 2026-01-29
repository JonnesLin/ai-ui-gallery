export default function NeonStats() {
  const stats = [
    { value: '10K+', label: 'ACTIVE USERS', color: 'from-pink-500 to-rose-500', glow: 'rgba(236, 72, 153, 0.5)' },
    { value: '50M+', label: 'DOWNLOADS', color: 'from-cyan-500 to-blue-500', glow: 'rgba(6, 182, 212, 0.5)' },
    { value: '4.9', label: 'RATING', color: 'from-purple-500 to-pink-500', glow: 'rgba(168, 85, 247, 0.5)' },
    { value: '99.9%', label: 'UPTIME', color: 'from-green-500 to-emerald-500', glow: 'rgba(34, 197, 94, 0.5)' },
  ];

  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div
                className="absolute inset-0 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${stat.glow}, transparent)`,
                  boxShadow: `0 0 40px ${stat.glow}`
                }}
              ></div>

              <div className="relative bg-gray-900 border-2 border-gray-800 rounded-2xl p-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>

                <div className="relative">
                  <div
                    className={`text-5xl md:text-6xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}
                    style={{
                      filter: `drop-shadow(0 0 20px ${stat.glow})`,
                    }}
                  >
                    {stat.value}
                  </div>

                  <div
                    className={`text-xs font-bold tracking-widest bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  >
                    {stat.label}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
