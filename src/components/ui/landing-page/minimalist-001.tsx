export default function MinimalistLandingPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-lg font-medium tracking-tight">Minimal</span>
          <div className="hidden md:flex gap-10">
            <a href="#features" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Features</a>
            <a href="#pricing" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Pricing</a>
            <a href="#about" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">About</a>
          </div>
          <button className="px-5 py-2 text-sm font-medium bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
            Less is more.
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 max-w-xl mx-auto mb-12 leading-relaxed">
            Embrace simplicity. Build products that focus on what truly matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-800 transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-neutral-200 text-neutral-700 text-sm font-medium tracking-wide hover:border-neutral-400 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-4">Features</h2>
          <p className="text-neutral-500 text-center mb-16 max-w-xl mx-auto">
            Everything you need, nothing you don't.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Simple', desc: 'Clean interfaces that put content first. No distractions.' },
              { title: 'Fast', desc: 'Optimized performance. Every millisecond counts.' },
              { title: 'Reliable', desc: 'Built to last. Stable and dependable.' },
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-neutral-900 mx-auto mb-6" />
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '10K+', label: 'Users' },
              { value: '99.9%', label: 'Uptime' },
              { value: '50ms', label: 'Response' },
              { value: '24/7', label: 'Support' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-light mb-2">{stat.value}</div>
                <div className="text-sm text-neutral-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-neutral-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to simplify?</h2>
          <p className="text-neutral-400 mb-10 max-w-lg mx-auto">
            Join thousands who have embraced minimalism. Start your journey today.
          </p>
          <button className="px-10 py-4 bg-white text-neutral-900 text-sm font-medium tracking-wide hover:bg-neutral-100 transition-colors">
            Get Started Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-neutral-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-sm text-neutral-500">© 2024 Minimal. All rights reserved.</span>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Twitter</a>
            <a href="#" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">GitHub</a>
            <a href="#" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
