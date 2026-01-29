export default function FuturisticLandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-cyan-500 clip-path-polygon relative">
              <div className="absolute inset-0 bg-cyan-400 animate-pulse" />
            </div>
            <span className="text-xl font-bold tracking-wider">FUTURA</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-cyan-400 hover:text-cyan-300 transition-colors">FEATURES</a>
            <a href="#tech" className="text-cyan-400 hover:text-cyan-300 transition-colors">TECH</a>
            <a href="#access" className="text-cyan-400 hover:text-cyan-300 transition-colors">ACCESS</a>
          </div>
          <button className="px-6 py-2 bg-cyan-500 text-slate-950 font-bold clip-path-polygon hover:bg-cyan-400 transition-colors">
            INITIALIZE
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
          <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 mb-8">
            <div className="w-2 h-2 bg-cyan-500 animate-pulse" />
            <span className="text-sm text-cyan-400 tracking-wider">SYSTEM ONLINE</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              NEXT GENERATION
            </span>
            <br />
            <span className="text-white">INTERFACE</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Experience the future of digital interaction. Advanced technology meets seamless design in a revolutionary platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-cyan-500 text-slate-950 font-bold relative group overflow-hidden">
              <span className="relative z-10">LAUNCH SYSTEM</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-bold hover:bg-cyan-500/10 transition-colors">
              EXPLORE DOCS
            </button>
          </div>
        </div>

        {/* Geometric decorations */}
        <div className="absolute top-1/4 right-10 w-32 h-32 border-2 border-cyan-500/20 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-1/4 left-10 w-24 h-24 border-2 border-purple-500/20 rotate-12" />
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              ADVANCED CAPABILITIES
            </span>
          </h2>
          <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">
            Cutting-edge features powered by next-generation technology
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'QUANTUM SPEED', desc: 'Process data at unprecedented velocities with quantum-inspired algorithms.', icon: '⚡' },
              { title: 'NEURAL INTERFACE', desc: 'AI-powered interactions that adapt and learn from user behavior.', icon: '🧠' },
              { title: 'HOLOGRAPHIC UI', desc: 'Immersive visual experiences with depth and dimensionality.', icon: '◈' },
            ].map((feature, i) => (
              <div
                key={i}
                className="relative p-8 bg-slate-900/50 border border-cyan-500/20 clip-path-polygon-sm overflow-hidden group hover:border-cyan-500/50 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="text-4xl mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-cyan-400">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                </div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-500 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 border-y border-cyan-500/20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '99.99%', label: 'UPTIME', unit: '' },
              { value: '0.003', label: 'LATENCY', unit: 'MS' },
              { value: '256', label: 'PROCESSING', unit: 'TB/S' },
              { value: '∞', label: 'SCALABILITY', unit: '' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                  {stat.value}
                  {stat.unit && <span className="text-xl">{stat.unit}</span>}
                </div>
                <div className="text-sm text-cyan-400 tracking-widest">{stat.label}</div>
                <div className="mt-2 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">TESTIMONIALS</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'Dr. Alex Morgan', role: 'CTO', text: 'Revolutionary technology that pushes boundaries.' },
              { name: 'Sarah Chen', role: 'Lead Engineer', text: 'The most advanced platform I have ever used.' },
            ].map((testimonial, i) => (
              <div key={i} className="p-8 bg-slate-900/50 border border-cyan-500/20 relative">
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-cyan-500/50" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-cyan-500/50" />
                <p className="text-slate-300 mb-6 text-lg italic">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 clip-path-polygon" />
                  <div>
                    <div className="font-bold text-cyan-400">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              INITIALIZE YOUR FUTURE
            </span>
          </h2>
          <p className="text-slate-400 mb-10 max-w-lg mx-auto">
            Step into tomorrow. Join the pioneers shaping the next era of technology.
          </p>
          <button className="px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg clip-path-polygon relative group overflow-hidden">
            <span className="relative z-10">BEGIN TRANSMISSION</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-cyan-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { title: 'SYSTEM', links: ['Features', 'Technology', 'Security'] },
              { title: 'RESOURCES', links: ['Documentation', 'API', 'Guides'] },
              { title: 'NETWORK', links: ['About', 'Partners', 'Community'] },
              { title: 'LEGAL', links: ['Privacy', 'Terms', 'Compliance'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-bold text-cyan-400 mb-4 tracking-wider">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-cyan-500/20">
            <span className="text-slate-500 text-sm tracking-wider">© 2024 FUTURA. ALL SYSTEMS OPERATIONAL.</span>
            <div className="flex gap-6">
              <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">TWITTER</a>
              <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">GITHUB</a>
              <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">DISCORD</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
