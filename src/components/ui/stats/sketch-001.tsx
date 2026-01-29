export default function SketchStats() {
  const stats = [
    { value: '10K+', label: 'Active Users' },
    { value: '50M+', label: 'Downloads' },
    { value: '4.9', label: 'Rating' },
    { value: '99.9%', label: 'Uptime' },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="sketch-lines" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 L20 10" stroke="currentColor" strokeWidth="0.5" className="text-gray-400"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sketch-lines)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative bg-white p-8 text-center group"
              style={{
                border: '3px solid #000',
                borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
                boxShadow: '5px 5px 0 rgba(0,0,0,0.1)',
              }}
            >
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-300 rounded-full opacity-70"
                style={{
                  borderRadius: '50% 45% 55% 50%/50% 55% 45% 50%',
                }}
              ></div>

              <div
                className="text-5xl font-black text-gray-900 mb-3 relative"
                style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  textShadow: '2px 2px 0 rgba(0,0,0,0.1)',
                }}
              >
                {stat.value}
                <svg className="absolute -bottom-1 left-0 w-full h-2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1 Q25 2 50 1 T100 1" stroke="#FCD34D" strokeWidth="2" fill="none"/>
                </svg>
              </div>

              <div
                className="text-sm text-gray-600 uppercase font-bold"
                style={{ fontFamily: 'Comic Sans MS, cursive' }}
              >
                {stat.label}
              </div>

              <svg className="absolute bottom-2 right-2 w-4 h-4 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M2 2 L18 18 M18 2 L2 18" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
