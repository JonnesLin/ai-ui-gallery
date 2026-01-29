export default function RetroLandingPage() {
  return (
    <div className="min-h-screen bg-amber-50 text-amber-950 font-serif">
      {/* Navbar */}
      <nav className="bg-orange-400 border-b-4 border-amber-900 shadow-[4px_4px_0px_0px_rgba(120,53,15,1)]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <span className="text-2xl font-bold text-amber-950">RetroWave</span>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-lg hover:underline decoration-4 decoration-amber-900">Features</a>
            <a href="#pricing" className="text-lg hover:underline decoration-4 decoration-amber-900">Pricing</a>
            <a href="#about" className="text-lg hover:underline decoration-4 decoration-amber-900">About</a>
          </div>
          <button className="px-6 py-3 bg-amber-900 text-amber-50 font-bold rounded-none shadow-[3px_3px_0px_0px_rgba(217,119,6,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(217,119,6,1)] transition-all">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-24 px-6 bg-gradient-to-b from-orange-300 to-amber-50">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-8 px-6 py-2 bg-red-500 text-white font-bold text-sm rotate-[-2deg] shadow-[4px_4px_0px_0px_rgba(120,53,15,1)]">
            BACK TO THE FUTURE
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-amber-950 drop-shadow-[3px_3px_0px_rgba(251,191,36,1)]">
            Groovy Design
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-amber-900">
            Experience the golden age of the web. Bold colors, funky patterns, and pure nostalgia.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-4 bg-teal-500 text-white font-bold text-lg rounded-none shadow-[5px_5px_0px_0px_rgba(20,83,88,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0px_0px_rgba(20,83,88,1)] transition-all">
              Get Started
            </button>
            <button className="px-10 py-4 border-4 border-amber-900 bg-amber-50 text-amber-900 font-bold text-lg rounded-none shadow-[5px_5px_0px_0px_rgba(120,53,15,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0px_0px_rgba(120,53,15,1)] transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 bg-yellow-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 text-amber-950">Far Out Features</h2>
          <p className="text-center text-xl text-amber-800 mb-16 max-w-2xl mx-auto">
            Totally rad capabilities that'll blow your mind
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Radical', desc: 'Bold designs that make a statement. No boring interfaces here.', color: 'bg-pink-400' },
              { title: 'Tubular', desc: 'Smooth animations and transitions. Everything flows naturally.', color: 'bg-cyan-400' },
              { title: 'Gnarly', desc: 'Powerful features that deliver results. Function meets form.', color: 'bg-lime-400' },
            ].map((feature, i) => (
              <div key={i} className="p-8 bg-white border-4 border-amber-900 shadow-[6px_6px_0px_0px_rgba(120,53,15,1)]">
                <div className={`w-16 h-16 ${feature.color} mb-6 border-4 border-amber-900 rotate-45`} />
                <h3 className="text-2xl font-bold mb-4 text-amber-950">{feature.title}</h3>
                <p className="text-lg text-amber-800">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '80s', label: 'VIBES' },
              { value: '100%', label: 'FUNKY' },
              { value: '∞', label: 'STYLE' },
              { value: '#1', label: 'RETRO' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white border-4 border-amber-900 shadow-[4px_4px_0px_0px_rgba(120,53,15,1)]">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-amber-950">{stat.value}</div>
                <div className="text-sm font-bold text-amber-800 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-orange-300 border-y-4 border-amber-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-amber-950">Ready to Get Down?</h2>
          <p className="text-xl mb-12 text-amber-900 max-w-xl mx-auto">
            Join the revolution. Embrace the retro renaissance.
          </p>
          <button className="px-14 py-5 bg-red-500 text-white font-bold text-xl rounded-none shadow-[6px_6px_0px_0px_rgba(127,29,29,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[2px_2px_0px_0px_rgba(127,29,29,1)] transition-all">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-amber-900 text-amber-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-lg font-bold">© 1989-2024 RetroWave Inc.</span>
          <div className="flex gap-8">
            <a href="#" className="text-lg hover:text-yellow-300 font-bold">MySpace</a>
            <a href="#" className="text-lg hover:text-yellow-300 font-bold">GeoCities</a>
            <a href="#" className="text-lg hover:text-yellow-300 font-bold">Webring</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
