export default function RetroFeature() {
  const features = [
    { icon: '⚡', title: 'Lightning Fast', desc: 'Built for speed with optimized performance.' },
    { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade security out of the box.' },
    { icon: '🎨', title: 'Customizable', desc: 'Tailor every aspect to your needs.' },
    { icon: '📱', title: 'Responsive', desc: 'Looks great on any device.' },
    { icon: '🔌', title: 'Integrations', desc: 'Connect with your favorite tools.' },
    { icon: '📊', title: 'Analytics', desc: 'Insights to grow your business.' },
  ]

  return (
    <section className="py-20 px-4 bg-amber-50 bg-[radial-gradient(#d4a574_1px,transparent_1px)] bg-[size:20px_20px]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">
            Powerful Features
          </h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-4" />
          <p className="text-lg text-amber-800 max-w-2xl mx-auto font-serif italic">
            Everything you need to build amazing products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-amber-100 rounded-lg p-8 border-2 border-amber-300 shadow-[4px_4px_0px_0px_rgba(180,83,9,0.3)]"
            >
              <div className="w-14 h-14 bg-amber-200 border-2 border-amber-400 rounded-full flex items-center justify-center text-2xl mb-5">
                {f.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-amber-900 mb-2">{f.title}</h3>
              <p className="text-amber-700 font-serif">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
