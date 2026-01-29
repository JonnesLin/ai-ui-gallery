export default function CyberpunkLandingPage() {
  return (
    <div className="min-h-screen bg-black text-cyan-400 font-mono">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.5)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-fuchsia-500 glitch">[CYBER//PUNK]</span>
          <div className="hidden md:flex gap-10">
            <a href="#features" className="text-sm text-cyan-400 hover:text-fuchsia-500 hover:drop-shadow-[0_0_8px_rgba(217,70,239,0.8)] transition-all">&gt; FEATURES</a>
            <a href="#pricing" className="text-sm text-cyan-400 hover:text-fuchsia-500 hover:drop-shadow-[0_0_8px_rgba(217,70,239,0.8)] transition-all">&gt; PRICING</a>
            <a href="#about" className="text-sm text-cyan-400 hover:text-fuchsia-500 hover:drop-shadow-[0_0_8px_rgba(217,70,239,0.8)] transition-all">&gt; ABOUT</a>
          </div>
          <button className="px-6 py-2 bg-fuchsia-600 text-white text-sm font-bold hover:bg-fuchsia-500 border border-fuchsia-400 shadow-[0_0_10px_rgba(217,70,239,0.6)] hover:shadow-[0_0_20px_rgba(217,70,239,0.9)] transition-all">
            JACK IN
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 bg-gradient-to-b from-black via-purple-950/20 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 text-cyan-500 text-sm font-mono">
            &gt; SYSTEM ONLINE _ NEURAL LINK ESTABLISHED
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">
            FUTURE.NOW
          </h1>
          <p className="text-lg md:text-xl text-cyan-300 max-w-2xl mb-12 leading-relaxed">
            Enter the matrix. Transcend reality. Build the interfaces of tomorrow, today. High-tech, low-life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-10 py-4 bg-cyan-500 text-black text-sm font-bold hover:bg-cyan-400 border-2 border-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.6)] hover:shadow-[0_0_30px_rgba(34,211,238,0.9)] transition-all">
              &gt; INITIALIZE_
            </button>
            <button className="px-10 py-4 border-2 border-fuchsia-500 text-fuchsia-400 text-sm font-bold hover:bg-fuchsia-500/20 shadow-[0_0_15px_rgba(217,70,239,0.4)] hover:shadow-[0_0_25px_rgba(217,70,239,0.7)] transition-all">
              &gt; EXPLORE_
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 border-y border-cyan-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-fuchsia-500">[SYSTEM.FEATURES]</h2>
          <p className="text-center text-cyan-400 mb-16 font-mono text-sm">
            &gt; Enhanced capabilities for the digital frontier
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'NEURAL_SYNC', desc: 'Direct brain-computer interface. Thought-speed interactions.', color: 'cyan' },
              { title: 'QUANTUM_CORE', desc: 'Infinite processing power. Zero latency execution.', color: 'fuchsia' },
              { title: 'GHOST_PROTOCOL', desc: 'Maximum security. Complete anonymity guaranteed.', color: 'purple' },
            ].map((feature, i) => (
              <div key={i} className={`p-6 bg-gradient-to-br from-${feature.color}-950/40 to-black border border-${feature.color}-500/50 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all`}>
                <div className={`w-16 h-16 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-700 mb-6 shadow-[0_0_20px_rgba(34,211,238,0.5)]`} />
                <h3 className="text-xl font-bold mb-3 text-cyan-400 font-mono">{feature.title}</h3>
                <p className="text-cyan-300/80 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 bg-gradient-to-r from-black via-purple-950/30 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '99.9%', label: 'UPLINK', color: 'cyan' },
              { value: '< 1ms', label: 'LATENCY', color: 'fuchsia' },
              { value: '∞', label: 'BANDWIDTH', color: 'purple' },
              { value: '24/7', label: 'ONLINE', color: 'cyan' },
            ].map((stat, i) => (
              <div key={i} className={`text-center p-6 border border-${stat.color}-500/50 bg-${stat.color}-950/20 shadow-[0_0_15px_rgba(34,211,238,0.2)]`}>
                <div className={`text-4xl font-bold mb-2 text-${stat.color}-400`}>{stat.value}</div>
                <div className={`text-xs font-mono text-${stat.color}-500 uppercase tracking-wider`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-black border-y border-fuchsia-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4 text-cyan-500 font-mono text-sm">
            &gt; READY TO TRANSCEND?
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
            PLUG IN NOW
          </h2>
          <p className="text-cyan-300 mb-12 text-lg max-w-xl mx-auto">
            The future doesn't wait. Join the revolution. Become more than human.
          </p>
          <button className="px-16 py-5 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white text-lg font-bold hover:from-cyan-400 hover:to-fuchsia-500 border-2 border-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:shadow-[0_0_50px_rgba(217,70,239,0.8)] transition-all">
            &gt; CONNECT_NOW_
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-cyan-900/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-sm text-cyan-500 font-mono">© 2077 CYBER//CORP - ALL_RIGHTS_RESERVED</span>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-cyan-400 hover:text-fuchsia-500 font-mono transition-colors">&gt; DARKNET</a>
            <a href="#" className="text-sm text-cyan-400 hover:text-fuchsia-500 font-mono transition-colors">&gt; GHOST_NET</a>
            <a href="#" className="text-sm text-cyan-400 hover:text-fuchsia-500 font-mono transition-colors">&gt; NEURAL_LINK</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
