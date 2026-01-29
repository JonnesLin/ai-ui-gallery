export default function FuturisticStats() {
  const stats = [
    { value: '10K+', label: 'Users', unit: 'K' },
    { value: '50M+', label: 'Downloads', unit: 'M' },
    { value: '4.9', label: 'Rating', unit: '/5' },
    { value: '99.9%', label: 'Uptime', unit: '%' },
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>

              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-6 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

                <div className="relative text-center">
                  <div className="text-xs font-mono text-blue-400 mb-2 opacity-60">
                    [METRIC_{index.toString().padStart(2, '0')}]
                  </div>

                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      {stat.value.replace(/[^0-9.]/g, '')}
                    </span>
                    <span className="text-2xl font-bold text-blue-400 ml-1">
                      {stat.value.match(/[^0-9.]/g)?.join('')}
                    </span>
                  </div>

                  <div className="text-xs text-gray-400 uppercase tracking-widest font-mono">
                    {stat.label}
                  </div>

                  <div className="mt-4 h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
