export default function MonochromeFeature() {
  const features = [
    { icon: '⚡', title: 'Lightning Fast', desc: 'Built for speed with optimized performance.' },
    { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade security out of the box.' },
    { icon: '🎨', title: 'Customizable', desc: 'Tailor every aspect to your needs.' },
    { icon: '📱', title: 'Responsive', desc: 'Looks great on any device.' },
    { icon: '🔌', title: 'Integrations', desc: 'Connect with your favorite tools.' },
    { icon: '📊', title: 'Analytics', desc: 'Insights to grow your business.' },
  ]

  return (
    <section className="py-20 px-4 bg-neutral-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Powerful Features</h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            Everything you need to build amazing products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white border border-neutral-200 p-8 hover:bg-neutral-900 group transition-all duration-300"
            >
              <div className="w-12 h-12 bg-neutral-900 group-hover:bg-white rounded flex items-center justify-center text-2xl mb-5 transition-colors duration-300 grayscale">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-white mb-2 transition-colors duration-300">
                {f.title}
              </h3>
              <p className="text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
