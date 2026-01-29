export default function GradientFeature() {
  const features = [
    { icon: '⚡', title: 'Lightning Fast', desc: 'Built for speed with optimized performance.', gradient: 'from-rose-500 to-orange-500' },
    { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade security out of the box.', gradient: 'from-violet-500 to-purple-500' },
    { icon: '🎨', title: 'Customizable', desc: 'Tailor every aspect to your needs.', gradient: 'from-cyan-500 to-blue-500' },
    { icon: '📱', title: 'Responsive', desc: 'Looks great on any device.', gradient: 'from-emerald-500 to-teal-500' },
    { icon: '🔌', title: 'Integrations', desc: 'Connect with your favorite tools.', gradient: 'from-amber-500 to-yellow-500' },
    { icon: '📊', title: 'Analytics', desc: 'Insights to grow your business.', gradient: 'from-pink-500 to-rose-500' },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to build amazing products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className={`w-14 h-14 bg-gradient-to-br ${f.gradient} rounded-xl flex items-center justify-center text-2xl mb-5`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
