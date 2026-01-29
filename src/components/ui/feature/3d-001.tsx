export default function ThreeDFeature() {
  const features = [
    { icon: '⚡', title: 'Lightning Fast', desc: 'Built for speed with optimized performance.' },
    { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade security out of the box.' },
    { icon: '🎨', title: 'Customizable', desc: 'Tailor every aspect to your needs.' },
    { icon: '📱', title: 'Responsive', desc: 'Looks great on any device.' },
    { icon: '🔌', title: 'Integrations', desc: 'Connect with your favorite tools.' },
    { icon: '📊', title: 'Analytics', desc: 'Insights to grow your business.' },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100" style={{ perspective: '1000px' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to build amazing products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div
                className="bg-white rounded-2xl p-8 shadow-xl transition-all duration-500 group-hover:-translate-y-2"
                style={{
                  transform: 'rotateX(5deg)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 10px 20px -5px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div
                  className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl mb-5 shadow-lg"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
              <div
                className="absolute inset-x-4 bottom-0 h-4 bg-gradient-to-b from-gray-200 to-transparent rounded-b-2xl opacity-50"
                style={{ transform: 'rotateX(90deg) translateZ(-10px)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
