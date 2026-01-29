export default function NeumorphismLandingPage() {
  return (
    <div className="min-h-screen bg-[#e0e5ec] text-gray-700">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#e0e5ec]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span
            className="text-xl font-bold text-gray-700"
            style={{ textShadow: '1px 1px 1px #fff, -1px -1px 1px rgba(0,0,0,0.1)' }}
          >
            Neumorph
          </span>
          <div className="hidden md:flex gap-8">
            {['Features', 'Pricing', 'About'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <button
            className="px-6 py-2.5 rounded-xl font-medium text-gray-700 transition-all duration-200"
            style={{
              background: '#e0e5ec',
              boxShadow: '5px 5px 10px #b8bec7, -5px -5px 10px #ffffff',
            }}
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-block p-12 md:p-16 rounded-3xl mb-8"
            style={{
              background: '#e0e5ec',
              boxShadow: '20px 20px 60px #b8bec7, -20px -20px 60px #ffffff',
            }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-700 mb-6">
              Soft Design
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Elevated UX
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
              Experience the tactile beauty of neumorphic design. Soft shadows, subtle depth, and intuitive interfaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-8 py-4 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105"
                style={{
                  background: 'linear-gradient(145deg, #6366f1, #4f46e5)',
                  boxShadow: '5px 5px 15px #b8bec7, -5px -5px 15px #ffffff',
                }}
              >
                Get Started Free
              </button>
              <button
                className="px-8 py-4 rounded-xl font-semibold text-gray-600 transition-all duration-200"
                style={{
                  background: '#e0e5ec',
                  boxShadow: '5px 5px 10px #b8bec7, -5px -5px 10px #ffffff',
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-700">Features</h2>
          <p className="text-gray-500 text-center mb-16 max-w-xl mx-auto">
            Designed with precision, built for performance.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🎯', title: 'Intuitive', desc: 'Natural interactions that feel familiar and comfortable.' },
              { icon: '⚡', title: 'Performant', desc: 'Optimized rendering for smooth 60fps animations.' },
              { icon: '🎨', title: 'Customizable', desc: 'Fully themeable with CSS variables.' },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl text-center transition-all duration-300 hover:scale-105"
                style={{
                  background: '#e0e5ec',
                  boxShadow: '10px 10px 30px #b8bec7, -10px -10px 30px #ffffff',
                }}
              >
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center text-3xl"
                  style={{
                    background: '#e0e5ec',
                    boxShadow: 'inset 5px 5px 10px #b8bec7, inset -5px -5px 10px #ffffff',
                  }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-700">{feature.title}</h3>
                <p className="text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className="p-8 md:p-12 rounded-3xl"
            style={{
              background: '#e0e5ec',
              boxShadow: 'inset 10px 10px 30px #b8bec7, inset -10px -10px 30px #ffffff',
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '25K+', label: 'Users' },
                { value: '99%', label: 'Satisfaction' },
                { value: '500+', label: 'Components' },
                { value: '24/7', label: 'Support' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div
            className="p-8 md:p-16 rounded-3xl text-center"
            style={{
              background: 'linear-gradient(145deg, #6366f1, #4f46e5)',
              boxShadow: '20px 20px 60px #b8bec7, -20px -20px 60px #ffffff',
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your UI?</h2>
            <p className="text-white/80 mb-10 max-w-lg mx-auto">
              Join the neumorphic revolution. Build beautiful, tactile interfaces today.
            </p>
            <button
              className="px-10 py-4 rounded-xl font-semibold text-indigo-600 transition-all duration-200 hover:scale-105"
              style={{
                background: '#e0e5ec',
                boxShadow: '5px 5px 15px rgba(0,0,0,0.2)',
              }}
            >
              Start Building Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-gray-500">© 2024 Neumorph. All rights reserved.</span>
          <div className="flex gap-8">
            {['Twitter', 'GitHub', 'Dribbble'].map((link) => (
              <a key={link} href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
