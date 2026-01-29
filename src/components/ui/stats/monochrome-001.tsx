export default function MonochromeStats() {
  const stats = [
    { value: '10K+', label: 'Active Users', bar: 85 },
    { value: '50M+', label: 'Downloads', bar: 95 },
    { value: '4.9', label: 'Rating', bar: 98 },
    { value: '99.9%', label: 'Uptime', bar: 100 },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t-4 border-b-4 border-black py-12 mb-12">
          <h2 className="text-5xl font-black text-black text-center uppercase tracking-tight">
            Statistics
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <div className="border-4 border-black p-8 bg-white hover:bg-black hover:text-white transition-colors duration-300 group">
                <div className="text-center">
                  <div className="text-5xl font-black mb-3">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-widest font-bold mb-4">
                    {stat.label}
                  </div>

                  <div className="w-full bg-gray-200 h-2 group-hover:bg-gray-700">
                    <div
                      className="bg-black h-full group-hover:bg-white transition-all duration-500"
                      style={{ width: `${stat.bar}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-2 -right-2 w-full h-full border-4 border-black -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
