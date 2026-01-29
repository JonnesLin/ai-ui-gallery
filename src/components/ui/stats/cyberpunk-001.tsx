export default function CyberpunkStats() {
  const stats = [
    { value: '10K+', label: 'NEURAL_USERS', hex: '#00FFFF' },
    { value: '50M+', label: 'DATA_STREAMS', hex: '#FF00FF' },
    { value: '4.9', label: 'SYS_RATING', hex: '#FFFF00' },
    { value: '99.9%', label: 'GRID_UPTIME', hex: '#00FF00' },
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, cyan 2px, cyan 4px)',
          animation: 'scan 8s linear infinite'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative bg-black border-2 p-6 text-center group overflow-hidden"
              style={{ borderColor: stat.hex }}
            >
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity" style={{ backgroundColor: stat.hex }}></div>

              <div className="relative">
                <div className="text-xs font-mono mb-2 opacity-60" style={{ color: stat.hex }}>
                  [{index.toString().padStart(2, '0')}]
                </div>
                <div className="text-4xl md:text-5xl font-black font-mono mb-2" style={{
                  color: stat.hex,
                  textShadow: `0 0 10px ${stat.hex}, 0 0 20px ${stat.hex}`
                }}>
                  {stat.value}
                </div>
                <div className="text-xs font-mono tracking-widest" style={{ color: stat.hex }}>
                  {stat.label}
                </div>
              </div>

              <div className="absolute top-0 right-0 w-2 h-2" style={{ backgroundColor: stat.hex }}></div>
              <div className="absolute bottom-0 left-0 w-2 h-2" style={{ backgroundColor: stat.hex }}></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}
