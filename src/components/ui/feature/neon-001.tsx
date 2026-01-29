export default function NeonFeature() {
  const features = [
    { icon: '⚡', title: 'Lightning Fast', desc: 'Built for speed with optimized performance.', glow: 'shadow-[0_0_20px_rgba(236,72,153,0.5)]', border: 'border-pink-500', text: 'text-pink-400' },
    { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade security out of the box.', glow: 'shadow-[0_0_20px_rgba(168,85,247,0.5)]', border: 'border-purple-500', text: 'text-purple-400' },
    { icon: '🎨', title: 'Customizable', desc: 'Tailor every aspect to your needs.', glow: 'shadow-[0_0_20px_rgba(34,211,238,0.5)]', border: 'border-cyan-400', text: 'text-cyan-400' },
    { icon: '📱', title: 'Responsive', desc: 'Looks great on any device.', glow: 'shadow-[0_0_20px_rgba(74,222,128,0.5)]', border: 'border-green-400', text: 'text-green-400' },
    { icon: '🔌', title: 'Integrations', desc: 'Connect with your favorite tools.', glow: 'shadow-[0_0_20px_rgba(251,191,36,0.5)]', border: 'border-amber-400', text: 'text-amber-400' },
    { icon: '📊', title: 'Analytics', desc: 'Insights to grow your business.', glow: 'shadow-[0_0_20px_rgba(239,68,68,0.5)]', border: 'border-red-500', text: 'text-red-400' },
  ]

  return (
    <section className="py-20 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
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
              className={`bg-gray-900/50 border-2 ${f.border} rounded-xl p-8 ${f.glow} hover:scale-105 transition-all duration-300`}
            >
              <div className={`w-14 h-14 bg-gray-800 border ${f.border} rounded-lg flex items-center justify-center text-2xl mb-5 ${f.glow}`}>
                {f.icon}
              </div>
              <h3 className={`text-xl font-bold ${f.text} mb-2`}>{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
