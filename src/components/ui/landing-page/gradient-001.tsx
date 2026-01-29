export default function GradientLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-2xl font-bold">Gradient</span>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
          </div>
          <button className="px-5 py-2.5 bg-white text-fuchsia-600 font-semibold rounded-full hover:bg-white/90 transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight">
            Color Your
            <span className="block bg-gradient-to-r from-yellow-200 via-pink-200 to-cyan-200 bg-clip-text text-transparent">
              Digital World
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Create stunning experiences with vibrant gradients that capture attention and inspire action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-white text-fuchsia-600 font-bold text-lg rounded-full hover:bg-white/90 transition-all hover:scale-105 shadow-xl">
              Start Free Trial
            </button>
            <button className="px-10 py-5 border-2 border-white/50 font-bold text-lg rounded-full hover:bg-white/10 transition-all">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Amazing Features</h2>
          <p className="text-white/70 text-center mb-16 max-w-xl mx-auto text-lg">
            Everything you need to build beautiful products.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { gradient: 'from-orange-400 to-pink-500', title: 'Powerful', desc: 'Advanced features that scale with your business.' },
              { gradient: 'from-green-400 to-cyan-500', title: 'Intuitive', desc: 'Designed for simplicity and ease of use.' },
              { gradient: 'from-purple-400 to-indigo-500', title: 'Flexible', desc: 'Adapt to any workflow or requirement.' },
            ].map((feature, i) => (
              <div
                key={i}
                className={`p-8 rounded-3xl bg-gradient-to-br ${feature.gradient} shadow-2xl hover:scale-105 transition-transform`}
              >
                <div className="w-14 h-14 bg-white/20 rounded-2xl mb-6 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-lg" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/80">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '1M+', label: 'Downloads' },
                { value: '50K+', label: 'Creators' },
                { value: '200+', label: 'Templates' },
                { value: '4.9', label: 'App Rating' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl md:text-5xl font-extrabold mb-2">{stat.value}</div>
                  <div className="text-white/60 uppercase tracking-wider text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Loved by Creators</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Sarah Chen', role: 'Designer', quote: 'The gradient tools are incredible. I have never created more beautiful designs.' },
              { name: 'Alex Rivera', role: 'Developer', quote: 'Integration was seamless. My apps look stunning with zero extra effort.' },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-3xl p-8">
                <p className="text-xl mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full" />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-white/60 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-16 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to Create Magic?</h2>
            <p className="text-gray-600 mb-10 text-lg max-w-lg mx-auto">
              Join thousands of creators building beautiful products with vibrant gradients.
            </p>
            <button className="px-12 py-5 bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 text-white font-bold text-lg rounded-full hover:opacity-90 transition-opacity shadow-xl">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-white/60">© 2024 Gradient. All rights reserved.</span>
          <div className="flex gap-8">
            <a href="#" className="text-white/60 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Dribbble</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
