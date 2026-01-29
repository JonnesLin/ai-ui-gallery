export default function PlayfulFeature() {
  const features = [
    { icon: '⚡', title: 'Lightning Fast', desc: 'Built for speed with optimized performance.', rotate: '-rotate-2' },
    { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade security out of the box.', rotate: 'rotate-1' },
    { icon: '🎨', title: 'Customizable', desc: 'Tailor every aspect to your needs.', rotate: '-rotate-1' },
    { icon: '📱', title: 'Responsive', desc: 'Looks great on any device.', rotate: 'rotate-2' },
    { icon: '🔌', title: 'Integrations', desc: 'Connect with your favorite tools.', rotate: '-rotate-1' },
    { icon: '📊', title: 'Analytics', desc: 'Insights to grow your business.', rotate: 'rotate-1' },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-fuchsia-100 via-violet-100 to-cyan-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-600 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-violet-600 max-w-2xl mx-auto font-medium">
            Everything you need to build amazing products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className={`${f.rotate} bg-white rounded-3xl p-8 shadow-xl border-4 border-violet-200 hover:rotate-0 hover:scale-105 hover:shadow-2xl transition-all duration-300`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-cyan-400 rounded-2xl flex items-center justify-center text-3xl mb-5 shadow-lg">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold text-violet-900 mb-2">{f.title}</h3>
              <p className="text-violet-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
