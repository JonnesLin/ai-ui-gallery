export default function NatureFeature() {
  const features = [
    { icon: '⚡', title: 'Lightning Fast', desc: 'Built for speed with optimized performance.' },
    { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade security out of the box.' },
    { icon: '🎨', title: 'Customizable', desc: 'Tailor every aspect to your needs.' },
    { icon: '📱', title: 'Responsive', desc: 'Looks great on any device.' },
    { icon: '🔌', title: 'Integrations', desc: 'Connect with your favorite tools.' },
    { icon: '📊', title: 'Analytics', desc: 'Insights to grow your business.' },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-emerald-50 to-green-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-4xl">🌿</span>
          </div>
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">Powerful Features</h2>
          <p className="text-lg text-emerald-700 max-w-2xl mx-auto">
            Everything you need to build amazing products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-emerald-200 shadow-lg shadow-emerald-100 hover:shadow-xl hover:shadow-emerald-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center text-2xl mb-5 shadow-md">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold text-emerald-900 mb-2">{f.title}</h3>
              <p className="text-emerald-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
