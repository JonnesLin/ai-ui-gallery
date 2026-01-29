export default function LuxuryStats() {
  const stats = [
    { value: '10K+', label: 'Elite Members' },
    { value: '50M+', label: 'Premium Downloads' },
    { value: '4.9', label: 'Excellence Rating' },
    { value: '99.9%', label: 'Platinum Uptime' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 border border-yellow-500/30 rounded-full mb-6">
            <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">
              Premium Excellence
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Unparalleled Performance
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gray-900/50 border border-yellow-500/20 rounded-lg p-8 text-center backdrop-blur-sm hover:border-yellow-500/40 transition-all duration-300">
                <div className="text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-yellow-500 to-amber-600 mb-3">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300 uppercase tracking-widest font-light">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
