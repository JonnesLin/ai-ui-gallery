export default function CorporateFeature() {
  const features = [
    { icon: '⚡', title: 'Lightning Fast', desc: 'Built for speed with optimized performance.' },
    { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade security out of the box.' },
    { icon: '🎨', title: 'Customizable', desc: 'Tailor every aspect to your needs.' },
    { icon: '📱', title: 'Responsive', desc: 'Looks great on any device.' },
    { icon: '🔌', title: 'Integrations', desc: 'Connect with your favorite tools.' },
    { icon: '📊', title: 'Analytics', desc: 'Insights to grow your business.' },
  ]

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Why Choose Us
          </p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Powerful Features</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to build amazing products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-8 shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-200 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mb-5">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
