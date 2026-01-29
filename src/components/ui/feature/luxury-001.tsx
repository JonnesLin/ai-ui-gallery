export default function LuxuryFeature() {
  const features = [
    { icon: '⚡', title: 'Lightning Fast', desc: 'Built for speed with optimized performance.' },
    { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade security out of the box.' },
    { icon: '🎨', title: 'Customizable', desc: 'Tailor every aspect to your needs.' },
    { icon: '📱', title: 'Responsive', desc: 'Looks great on any device.' },
    { icon: '🔌', title: 'Integrations', desc: 'Connect with your favorite tools.' },
    { icon: '📊', title: 'Analytics', desc: 'Insights to grow your business.' },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-stone-950 to-stone-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-4 font-light">
            Excellence Defined
          </p>
          <h2 className="text-4xl font-light text-white mb-4 tracking-wide">
            Powerful Features
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6" />
          <p className="text-lg text-stone-400 max-w-2xl mx-auto font-light">
            Everything you need to build amazing products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="group bg-gradient-to-b from-stone-800/50 to-stone-900/50 border border-stone-700/50 p-10 hover:border-amber-400/30 transition-all duration-500"
            >
              <div className="w-14 h-14 border border-amber-400/30 flex items-center justify-center text-2xl mb-6 group-hover:border-amber-400 group-hover:bg-amber-400/5 transition-all duration-500">
                {f.icon}
              </div>
              <h3 className="text-xl font-light text-white mb-3 tracking-wide">{f.title}</h3>
              <p className="text-stone-400 font-light leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
