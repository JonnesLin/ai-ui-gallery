export default function FlatFeature() {
  const features = [
    { icon: '⚡', title: 'Lightning Fast', desc: 'Built for speed with optimized performance.', bg: 'bg-red-500' },
    { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade security out of the box.', bg: 'bg-blue-500' },
    { icon: '🎨', title: 'Customizable', desc: 'Tailor every aspect to your needs.', bg: 'bg-green-500' },
    { icon: '📱', title: 'Responsive', desc: 'Looks great on any device.', bg: 'bg-yellow-500' },
    { icon: '🔌', title: 'Integrations', desc: 'Connect with your favorite tools.', bg: 'bg-purple-500' },
    { icon: '📊', title: 'Analytics', desc: 'Insights to grow your business.', bg: 'bg-pink-500' },
  ]

  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to build amazing products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white p-8 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className={`w-12 h-12 ${f.bg} flex items-center justify-center text-2xl mb-5`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
