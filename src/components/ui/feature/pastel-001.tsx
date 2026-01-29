export default function PastelFeature() {
  const features = [
    { icon: '⚡', title: 'Lightning Fast', desc: 'Built for speed with optimized performance.', bg: 'bg-pink-100', accent: 'bg-pink-200' },
    { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade security out of the box.', bg: 'bg-purple-100', accent: 'bg-purple-200' },
    { icon: '🎨', title: 'Customizable', desc: 'Tailor every aspect to your needs.', bg: 'bg-blue-100', accent: 'bg-blue-200' },
    { icon: '📱', title: 'Responsive', desc: 'Looks great on any device.', bg: 'bg-green-100', accent: 'bg-green-200' },
    { icon: '🔌', title: 'Integrations', desc: 'Connect with your favorite tools.', bg: 'bg-yellow-100', accent: 'bg-yellow-200' },
    { icon: '📊', title: 'Analytics', desc: 'Insights to grow your business.', bg: 'bg-orange-100', accent: 'bg-orange-200' },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-700 mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Everything you need to build amazing products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className={`${f.bg} rounded-3xl p-8 hover:scale-105 transition-transform duration-300`}
            >
              <div className={`w-14 h-14 ${f.accent} rounded-2xl flex items-center justify-center text-2xl mb-5`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{f.title}</h3>
              <p className="text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
