export default function GlassmorphismLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-pink-300 to-violet-300 bg-clip-text text-transparent">
            Glassmorphic
          </span>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-white/70 hover:text-white transition-colors">Pricing</a>
            <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
          </div>
          <button className="px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-medium hover:bg-white/20 transition-all">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-16 text-center shadow-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              The Future is
              <span className="block bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                Transparent
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
              Experience the next generation of design with our glassmorphic interfaces. Beautiful, modern, and immersive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-700 font-semibold rounded-xl hover:bg-white/90 transition-all shadow-lg">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Stunning Features</h2>
          <p className="text-white/60 text-center mb-16 max-w-xl mx-auto">
            Built with cutting-edge technology for the modern web.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '⚡', title: 'Lightning Fast', desc: 'Optimized performance with instant load times.' },
              { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade security to protect your data.' },
              { icon: '🎨', title: 'Beautiful', desc: 'Stunning glassmorphic design language.' },
            ].map((feature, i) => (
              <div
                key={i}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-white/60">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '50K+', label: 'Active Users' },
                { value: '99.9%', label: 'Uptime' },
                { value: '150+', label: 'Countries' },
                { value: '4.9', label: 'Rating' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-300 to-cyan-300 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-white/20 rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
            <p className="text-white/70 mb-10 max-w-lg mx-auto">
              Join thousands of teams building beautiful products with our platform.
            </p>
            <button className="px-10 py-4 bg-white text-purple-700 font-semibold rounded-xl hover:bg-white/90 transition-all shadow-lg shadow-white/20">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-white/50">© 2024 Glassmorphic. All rights reserved.</span>
          <div className="flex gap-8">
            <a href="#" className="text-white/50 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">GitHub</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">Discord</a>
          </div>
        </div>
      </footer>

      {/* Floating glass elements */}
      <div className="absolute top-32 left-10 w-20 h-20 backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 hidden lg:block" />
      <div className="absolute bottom-48 right-16 w-16 h-16 backdrop-blur-md bg-white/10 rounded-full border border-white/20 hidden lg:block" />
      <div className="absolute top-1/2 right-8 w-12 h-12 backdrop-blur-md bg-white/10 rounded-xl border border-white/20 hidden lg:block" />
    </div>
  );
}
