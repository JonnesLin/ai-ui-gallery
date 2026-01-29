export default function NeonLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-pink-500/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
            NEON
          </span>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-pink-400 hover:text-pink-300 transition-colors font-medium">Features</a>
            <a href="#pricing" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">Pricing</a>
            <a href="#contact" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">Contact</a>
          </div>
          <button className="px-6 py-2 bg-pink-500 text-black font-bold shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_30px_rgba(236,72,153,0.8)] transition-all">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-950/20 via-black to-cyan-950/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px]" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]">
              LIGHT UP
            </span>
            <br />
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              THE NIGHT
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Experience the electric energy of neon design. Vibrant glows, bold colors, and unforgettable visual impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg shadow-[0_0_30px_rgba(236,72,153,0.6)] hover:shadow-[0_0_50px_rgba(236,72,153,0.9)] transition-all">
              Get Started
            </button>
            <button className="px-10 py-4 border-2 border-cyan-500 text-cyan-400 font-bold text-lg shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.7)] transition-all">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              FEATURES
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">
            Glowing with possibilities
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Neon Effects', desc: 'Stunning glow effects that capture attention instantly.', color: 'pink' },
              { title: 'Vibrant Colors', desc: 'Bold color combinations that pop off the screen.', color: 'cyan' },
              { title: 'Night Mode', desc: 'Optimized for dark environments and night viewing.', color: 'purple' },
            ].map((feature, i) => (
              <div
                key={i}
                className={`p-8 bg-black border-2 border-${feature.color}-500/50 shadow-[0_0_30px_rgba(236,72,153,0.2)] hover:shadow-[0_0_50px_rgba(236,72,153,0.4)] transition-all`}
                style={{
                  borderColor: feature.color === 'pink' ? 'rgb(236 72 153 / 0.5)' : feature.color === 'cyan' ? 'rgb(34 211 238 / 0.5)' : 'rgb(168 85 247 / 0.5)',
                }}
              >
                <div className="text-6xl mb-6">
                  {i === 0 ? '◈' : i === 1 ? '◆' : '◇'}
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{
                    color: feature.color === 'pink' ? '#ec4899' : feature.color === 'cyan' ? '#22d3ee' : '#a855f7',
                    textShadow: feature.color === 'pink' ? '0 0 20px rgba(236,72,153,0.5)' : feature.color === 'cyan' ? '0 0 20px rgba(34,211,238,0.5)' : '0 0 20px rgba(168,85,247,0.5)',
                  }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 border-y border-pink-500/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              GLOWING REVIEWS
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Luna Star', role: 'Creative Director', text: 'Electric design that truly shines!', glow: 'pink' },
              { name: 'Max Volt', role: 'Brand Designer', text: 'The glow effect is mesmerizing.', glow: 'cyan' },
              { name: 'Nova Ray', role: 'UI Designer', text: 'Perfect for nightlife brands.', glow: 'purple' },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="p-8 bg-black border border-gray-800 relative"
                style={{
                  boxShadow: testimonial.glow === 'pink' ? '0 0 30px rgba(236,72,153,0.3)' : testimonial.glow === 'cyan' ? '0 0 30px rgba(34,211,238,0.3)' : '0 0 30px rgba(168,85,247,0.3)',
                }}
              >
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-full`}
                    style={{
                      background: testimonial.glow === 'pink' ? 'linear-gradient(135deg, #ec4899, #a855f7)' : testimonial.glow === 'cyan' ? 'linear-gradient(135deg, #22d3ee, #3b82f6)' : 'linear-gradient(135deg, #a855f7, #ec4899)',
                      boxShadow: testimonial.glow === 'pink' ? '0 0 20px rgba(236,72,153,0.6)' : testimonial.glow === 'cyan' ? '0 0 20px rgba(34,211,238,0.6)' : '0 0 20px rgba(168,85,247,0.6)',
                    }}
                  />
                  <div>
                    <div
                      className="font-bold"
                      style={{
                        color: testimonial.glow === 'pink' ? '#ec4899' : testimonial.glow === 'cyan' ? '#22d3ee' : '#a855f7',
                      }}
                    >
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
              PRICING
            </span>
          </h2>
          <p className="text-gray-400 mb-12">Light up your project</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { name: 'STARTER', price: '29', features: ['Neon Effects', '10 Projects', 'Basic Support'], glow: 'cyan' },
              { name: 'PRO', price: '79', features: ['All Effects', 'Unlimited Projects', 'Priority Support'], glow: 'pink' },
            ].map((plan, i) => (
              <div
                key={i}
                className="p-10 bg-black border-2"
                style={{
                  borderColor: plan.glow === 'pink' ? 'rgb(236 72 153 / 0.5)' : 'rgb(34 211 238 / 0.5)',
                  boxShadow: plan.glow === 'pink' ? '0 0 40px rgba(236,72,153,0.3)' : '0 0 40px rgba(34,211,238,0.3)',
                }}
              >
                <h3
                  className="text-3xl font-bold mb-4 tracking-wider"
                  style={{
                    color: plan.glow === 'pink' ? '#ec4899' : '#22d3ee',
                    textShadow: plan.glow === 'pink' ? '0 0 20px rgba(236,72,153,0.5)' : '0 0 20px rgba(34,211,238,0.5)',
                  }}
                >
                  {plan.name}
                </h3>
                <div className="mb-8">
                  <span className="text-6xl font-bold">${plan.price}</span>
                  <span className="text-gray-500">/mo</span>
                </div>
                <ul className="space-y-4 mb-10 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-300">
                      <span
                        style={{
                          color: plan.glow === 'pink' ? '#ec4899' : '#22d3ee',
                          textShadow: plan.glow === 'pink' ? '0 0 10px rgba(236,72,153,0.8)' : '0 0 10px rgba(34,211,238,0.8)',
                        }}
                      >
                        ◆
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full py-4 font-bold tracking-wider transition-all"
                  style={{
                    background: plan.glow === 'pink' ? 'linear-gradient(90deg, #ec4899, #a855f7)' : 'linear-gradient(90deg, #22d3ee, #3b82f6)',
                    color: '#000',
                    boxShadow: plan.glow === 'pink' ? '0 0 30px rgba(236,72,153,0.5)' : '0 0 30px rgba(34,211,238,0.5)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = plan.glow === 'pink' ? '0 0 50px rgba(236,72,153,0.8)' : '0 0 50px rgba(34,211,238,0.8)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = plan.glow === 'pink' ? '0 0 30px rgba(236,72,153,0.5)' : '0 0 30px rgba(34,211,238,0.5)';
                  }}
                >
                  CHOOSE PLAN
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]">
              LIGHT UP YOUR BRAND
            </span>
          </h2>
          <p className="text-gray-400 mb-10 max-w-lg mx-auto text-lg">
            Join the neon revolution. Make your project shine brighter than ever.
          </p>
          <button className="px-12 py-5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-bold text-xl shadow-[0_0_50px_rgba(236,72,153,0.6)] hover:shadow-[0_0_80px_rgba(236,72,153,0.9)] transition-all">
            START GLOWING
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-pink-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { title: 'PRODUCT', links: ['Features', 'Pricing', 'Updates'], color: 'pink' },
              { title: 'SUPPORT', links: ['Help', 'Tutorials', 'Contact'], color: 'cyan' },
              { title: 'COMPANY', links: ['About', 'Blog', 'Careers'], color: 'purple' },
              { title: 'LEGAL', links: ['Privacy', 'Terms', 'License'], color: 'pink' },
            ].map((col, i) => (
              <div key={i}>
                <h4
                  className="font-bold mb-4 tracking-wider"
                  style={{
                    color: col.color === 'pink' ? '#ec4899' : col.color === 'cyan' ? '#22d3ee' : '#a855f7',
                  }}
                >
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-pink-500/20">
            <span className="text-gray-600">© 2024 NEON. All rights reserved.</span>
            <div className="flex gap-8">
              <a href="#" className="text-pink-500 hover:text-pink-400 transition-colors">Twitter</a>
              <a href="#" className="text-cyan-500 hover:text-cyan-400 transition-colors">GitHub</a>
              <a href="#" className="text-purple-500 hover:text-purple-400 transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
