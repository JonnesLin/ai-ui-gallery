export default function LuxuryLandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-amber-50">
      {/* Navbar */}
      <nav className="border-b border-amber-900/30 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <span className="text-2xl font-serif text-amber-500 tracking-wider">ÉLÉGANCE</span>
          <div className="hidden md:flex gap-12">
            <a href="#collection" className="text-sm text-amber-100 hover:text-amber-500 transition-colors tracking-wide">Collection</a>
            <a href="#heritage" className="text-sm text-amber-100 hover:text-amber-500 transition-colors tracking-wide">Heritage</a>
            <a href="#atelier" className="text-sm text-amber-100 hover:text-amber-500 transition-colors tracking-wide">Atelier</a>
          </div>
          <button className="px-6 py-2 border border-amber-600 text-amber-500 text-sm tracking-wider hover:bg-amber-600 hover:text-zinc-950 transition-all">
            INQUIRE
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-28 px-8 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6 text-amber-600 text-xs uppercase tracking-[0.3em] font-light">
            Since 1925
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-8 text-amber-50 tracking-tight">
            Timeless Excellence
          </h1>
          <p className="text-lg md:text-xl text-amber-100/80 max-w-2xl mx-auto mb-14 leading-relaxed font-light tracking-wide">
            Crafted with uncompromising attention to detail. Where tradition meets innovation in perfect harmony.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-4 bg-amber-600 text-zinc-950 text-sm tracking-widest font-medium hover:bg-amber-500 transition-all">
              EXPLORE COLLECTION
            </button>
            <button className="px-12 py-4 border border-amber-600/50 text-amber-500 text-sm tracking-widest hover:border-amber-500 transition-all">
              PRIVATE VIEWING
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="collection" className="py-28 px-8 border-y border-amber-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-amber-50">Craftsmanship</h2>
            <div className="w-24 h-[1px] bg-amber-600 mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Heritage', desc: 'Over a century of mastery. Each piece tells a story of dedication and artistry.' },
              { title: 'Precision', desc: 'Meticulous attention to every detail. Perfection is not optional, it is essential.' },
              { title: 'Exclusivity', desc: 'Limited editions. Bespoke creations. For those who demand the extraordinary.' },
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 border border-amber-600/50 mx-auto mb-8 rotate-45" />
                <h3 className="text-2xl font-serif mb-4 text-amber-100 tracking-wide">{feature.title}</h3>
                <p className="text-amber-100/70 leading-relaxed font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="py-28 px-8 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-amber-600 text-xs uppercase tracking-[0.3em] mb-4 font-light">Signature Collection</div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-amber-50">
                The Pinnacle of Luxury
              </h2>
              <p className="text-amber-100/70 leading-relaxed mb-8 font-light">
                Each creation is a masterpiece, handcrafted by artisans who have dedicated their lives to perfection.
                Discover the extraordinary blend of timeless design and contemporary elegance.
              </p>
              <button className="px-10 py-3 border border-amber-600 text-amber-500 text-sm tracking-widest hover:bg-amber-600 hover:text-zinc-950 transition-all">
                DISCOVER MORE
              </button>
            </div>
            <div className="h-96 bg-gradient-to-br from-amber-900/20 to-zinc-800 border border-amber-900/30" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-8 border-y border-amber-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { value: '1925', label: 'Founded' },
              { value: '100+', label: 'Master Artisans' },
              { value: '50', label: 'Countries' },
              { value: '∞', label: 'Excellence' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-serif mb-3 text-amber-500">{stat.value}</div>
                <div className="text-xs text-amber-100/60 uppercase tracking-[0.3em] font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8 bg-gradient-to-b from-zinc-950 via-amber-950/10 to-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-1 h-24 bg-gradient-to-b from-transparent via-amber-600 to-transparent mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-amber-50">
            Experience True Luxury
          </h2>
          <p className="text-xl text-amber-100/70 mb-12 max-w-2xl mx-auto font-light tracking-wide">
            Schedule a private consultation. Discover pieces created exclusively for you.
          </p>
          <button className="px-16 py-5 bg-amber-600 text-zinc-950 text-sm tracking-[0.2em] font-medium hover:bg-amber-500 transition-all">
            SCHEDULE APPOINTMENT
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 border-t border-amber-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-serif text-amber-500 mb-4 tracking-wider">ÉLÉGANCE</div>
              <p className="text-sm text-amber-100/60 font-light leading-relaxed">
                Crafting excellence since 1925
              </p>
            </div>
            {[
              { title: 'Boutiques', links: ['Paris', 'Milan', 'New York', 'Tokyo'] },
              { title: 'Services', links: ['Bespoke', 'Restoration', 'Consultation', 'Authentication'] },
              { title: 'Connect', links: ['Instagram', 'Private Events', 'Newsletter', 'Contact'] },
            ].map((column, i) => (
              <div key={i}>
                <h4 className="text-sm uppercase tracking-wider mb-4 text-amber-100 font-light">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-sm text-amber-100/60 hover:text-amber-500 transition-colors font-light">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-8 border-t border-amber-900/30 text-center">
            <span className="text-xs text-amber-100/50 tracking-wider font-light">© 2024 ÉLÉGANCE. ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
