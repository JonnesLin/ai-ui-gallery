export default function BrutalistStats() {
  const stats = [
    { value: '10K+', label: 'USERS' },
    { value: '50M+', label: 'DOWNLOADS' },
    { value: '4.9', label: 'RATING' },
    { value: '99.9%', label: 'UPTIME' },
  ];

  return (
    <section className="py-20 bg-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-black border-4 border-black p-6 text-center transform hover:translate-x-1 hover:translate-y-1 transition-transform duration-100"
              style={{
                boxShadow: '8px 8px 0 0 rgba(0,0,0,1)'
              }}
            >
              <div className="text-4xl md:text-5xl font-black text-white mb-2 font-mono">
                {stat.value}
              </div>
              <div className="text-xs text-yellow-400 font-black tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
