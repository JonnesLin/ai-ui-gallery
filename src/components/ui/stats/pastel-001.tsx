export default function PastelStats() {
  const stats = [
    { value: '10K+', label: 'Happy Users', bg: 'bg-pink-100', text: 'text-pink-600' },
    { value: '50M+', label: 'Downloads', bg: 'bg-purple-100', text: 'text-purple-600' },
    { value: '4.9', label: 'Average Rating', bg: 'bg-blue-100', text: 'text-blue-600' },
    { value: '99.9%', label: 'Uptime', bg: 'bg-green-100', text: 'text-green-600' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Our Achievements
          </h2>
          <p className="text-gray-600">Making dreams come true, one stat at a time</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bg} rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300 shadow-sm`}
            >
              <div className={`text-4xl md:text-5xl font-bold ${stat.text} mb-3`}>
                {stat.value}
              </div>
              <div className={`text-sm ${stat.text} font-medium`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
