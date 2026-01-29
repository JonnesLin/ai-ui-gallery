export default function PastelLandingPage() {
  return (
    <div className="min-h-screen bg-pink-50 text-purple-900">
      {/* Navbar */}
      <nav className="bg-white/70 backdrop-blur-md border-b border-pink-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-semibold text-purple-600">Pastelify</span>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-sm text-purple-500 hover:text-pink-500 transition-colors">Features</a>
            <a href="#pricing" className="text-sm text-purple-500 hover:text-pink-500 transition-colors">Pricing</a>
            <a href="#about" className="text-sm text-purple-500 hover:text-pink-500 transition-colors">About</a>
          </div>
          <button className="px-5 py-2 bg-gradient-to-r from-pink-300 to-purple-300 text-white text-sm font-medium rounded-full hover:from-pink-400 hover:to-purple-400 transition-all shadow-md">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Soft & Dreamy
          </h1>
          <p className="text-lg md:text-xl text-purple-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Create beautiful interfaces with gentle colors and smooth transitions. Embrace the soft aesthetic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-gradient-to-r from-pink-300 to-purple-300 text-white font-medium rounded-full hover:from-pink-400 hover:to-purple-400 transition-all shadow-lg hover:shadow-xl">
              Start Creating
            </button>
            <button className="px-10 py-4 bg-white text-purple-600 font-medium rounded-full border-2 border-purple-200 hover:border-purple-300 transition-all shadow-md">
              View Examples
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-purple-700">Sweet Features</h2>
          <p className="text-center text-purple-500 mb-16 max-w-xl mx-auto">
            Everything you need to create delightful experiences
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Gentle', desc: 'Soft colors that are easy on the eyes. Perfect for long sessions.', bg: 'from-pink-100 to-pink-200', icon: 'bg-pink-300' },
              { title: 'Dreamy', desc: 'Smooth animations and graceful transitions. Everything flows beautifully.', bg: 'from-purple-100 to-purple-200', icon: 'bg-purple-300' },
              { title: 'Lovely', desc: 'Charming interfaces that users fall in love with instantly.', bg: 'from-blue-100 to-blue-200', icon: 'bg-blue-300' },
            ].map((feature, i) => (
              <div key={i} className={`p-8 bg-gradient-to-br ${feature.bg} rounded-3xl shadow-md hover:shadow-xl transition-all`}>
                <div className={`w-16 h-16 ${feature.icon} rounded-2xl mb-6 shadow-sm`} />
                <h3 className="text-2xl font-bold mb-3 text-purple-800">{feature.title}</h3>
                <p className="text-purple-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '10K+', label: 'Happy Users', color: 'pink' },
              { value: '99%', label: 'Satisfaction', color: 'purple' },
              { value: '50+', label: 'Color Palettes', color: 'blue' },
              { value: '24/7', label: 'Support', color: 'indigo' },
            ].map((stat, i) => (
              <div key={i} className={`text-center p-6 bg-${stat.color}-50 rounded-2xl shadow-md`}>
                <div className={`text-4xl font-bold mb-2 text-${stat.color}-500`}>{stat.value}</div>
                <div className={`text-sm text-${stat.color}-600 font-medium`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple-800">Ready to Dream?</h2>
          <p className="text-xl text-purple-600 mb-10 max-w-xl mx-auto">
            Join thousands creating beautiful, soft interfaces. Start your journey today.
          </p>
          <button className="px-14 py-5 bg-gradient-to-r from-pink-400 to-purple-400 text-white text-lg font-semibold rounded-full hover:from-pink-500 hover:to-purple-500 transition-all shadow-xl hover:shadow-2xl">
            Begin Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t border-pink-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-sm text-purple-500">© 2024 Pastelify. Made with love.</span>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-purple-500 hover:text-pink-500 transition-colors">Instagram</a>
            <a href="#" className="text-sm text-purple-500 hover:text-pink-500 transition-colors">Pinterest</a>
            <a href="#" className="text-sm text-purple-500 hover:text-pink-500 transition-colors">Dribbble</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
