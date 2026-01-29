export default function MaterialFeature() {
  const features = [
    { icon: '⚡', title: 'Lightning Fast', desc: 'Built for speed with optimized performance.' },
    { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade security out of the box.' },
    { icon: '🎨', title: 'Customizable', desc: 'Tailor every aspect to your needs.' },
    { icon: '📱', title: 'Responsive', desc: 'Looks great on any device.' },
    { icon: '🔌', title: 'Integrations', desc: 'Connect with your favorite tools.' },
    { icon: '📊', title: 'Analytics', desc: 'Insights to grow your business.' },
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium text-gray-900 mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to build amazing products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-indigo-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-indigo-100 group-hover:bg-white/20 rounded-full flex items-center justify-center text-2xl mb-5 transition-colors duration-300">
                  {f.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/80 transition-colors duration-300">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
