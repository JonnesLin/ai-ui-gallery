export default function BrutalistLandingPage() {
  return (
    <div className="min-h-screen bg-white text-black font-mono">
      {/* Navbar */}
      <nav className="border-b-4 border-black bg-yellow-300">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <span className="text-2xl font-bold uppercase tracking-tighter">[BRUTAL]</span>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-lg font-bold uppercase hover:bg-black hover:text-white px-3 py-1 border-2 border-black">Features</a>
            <a href="#pricing" className="text-lg font-bold uppercase hover:bg-black hover:text-white px-3 py-1 border-2 border-black">Pricing</a>
          </div>
          <button className="px-6 py-3 bg-black text-white border-4 border-black hover:bg-white hover:text-black font-bold uppercase">
            START
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-32 px-4 border-b-4 border-black">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8 leading-none">
            NO BS.<br/>JUST WORK.
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl font-bold">
            Brutalism rejects decoration. We build raw, functional, honest interfaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-10 py-5 bg-black text-white text-xl font-bold uppercase border-4 border-black hover:bg-red-500">
              GET IT NOW
            </button>
            <button className="px-10 py-5 border-4 border-black text-xl font-bold uppercase hover:bg-black hover:text-white">
              DOCUMENTATION
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-4 bg-cyan-200 border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-16 text-center">[FEATURES]</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'RAW', desc: 'No polish. No sugar coating. Just pure functionality exposed.' },
              { title: 'HONEST', desc: 'What you see is what you get. Zero marketing nonsense.' },
              { title: 'BOLD', desc: 'Unapologetically different. Standing out is the default.' },
            ].map((feature, i) => (
              <div key={i} className="p-8 border-4 border-black bg-white">
                <div className="w-20 h-20 bg-black mb-6" />
                <h3 className="text-3xl font-black uppercase mb-4">{feature.title}</h3>
                <p className="text-lg font-bold">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-4 bg-pink-300 border-b-4 border-black">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '100%', label: 'BRUTAL' },
            { value: '0%', label: 'FLUFF' },
            { value: '∞', label: 'IMPACT' },
            { value: '24/7', label: 'ONLINE' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-8 border-4 border-black bg-white">
              <div className="text-5xl font-black mb-2">{stat.value}</div>
              <div className="text-xl font-bold uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 bg-green-300 border-b-4 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-8">READY?</h2>
          <p className="text-2xl font-bold mb-12">
            Stop wasting time. Start building now.
          </p>
          <button className="px-16 py-6 bg-black text-white text-2xl font-black uppercase border-4 border-black hover:bg-red-600 hover:border-red-600">
            JOIN NOW
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-lg font-bold uppercase">© 2024 BRUTAL CORP</span>
          <div className="flex gap-8">
            <a href="#" className="text-lg font-bold uppercase hover:text-yellow-300">TWITTER</a>
            <a href="#" className="text-lg font-bold uppercase hover:text-yellow-300">GITHUB</a>
            <a href="#" className="text-lg font-bold uppercase hover:text-yellow-300">EMAIL</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
