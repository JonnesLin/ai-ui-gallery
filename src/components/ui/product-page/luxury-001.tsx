export default function LuxuryProductPage() {
  return (
    <div className="min-h-screen bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          <div className="aspect-square bg-gradient-to-br from-amber-900 to-neutral-800 border border-amber-700/30"></div>

          <div className="flex flex-col justify-center space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-px h-12 bg-amber-600"></div>
                <span className="text-amber-600 text-sm uppercase tracking-[0.3em] font-light">
                  Limited Edition
                </span>
              </div>
              <h1 className="text-5xl font-serif text-amber-100 mb-6 tracking-tight">
                Prestige Timepiece
              </h1>
              <p className="text-neutral-400 text-lg leading-relaxed font-light">
                Handcrafted Swiss movement. 18-karat gold case.
                A masterpiece of horological excellence.
              </p>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-serif text-amber-100">$12,500</span>
              <span className="text-neutral-500 text-sm">USD</span>
            </div>

            <div className="space-y-8">
              <div>
                <label className="text-neutral-400 text-xs uppercase tracking-widest mb-4 block">
                  Case Material
                </label>
                <div className="space-y-3">
                  <button className="w-full px-6 py-4 border border-amber-600 bg-amber-600/10 text-amber-100 text-left">
                    <div className="font-serif">18K Yellow Gold</div>
                    <div className="text-sm text-neutral-400 mt-1">Classic finish</div>
                  </button>
                  <button className="w-full px-6 py-4 border border-neutral-700 text-neutral-400 text-left hover:border-neutral-600">
                    <div className="font-serif">18K White Gold</div>
                    <div className="text-sm text-neutral-500 mt-1">Contemporary elegance</div>
                  </button>
                  <button className="w-full px-6 py-4 border border-neutral-700 text-neutral-400 text-left hover:border-neutral-600">
                    <div className="font-serif">Platinum</div>
                    <div className="text-sm text-neutral-500 mt-1">Ultimate luxury</div>
                  </button>
                </div>
              </div>

              <div>
                <label className="text-neutral-400 text-xs uppercase tracking-widest mb-4 block">
                  Strap Options
                </label>
                <div className="flex gap-3">
                  <button className="flex-1 py-4 border border-amber-600 bg-amber-600/10 text-amber-100 text-sm uppercase tracking-wider">
                    Leather
                  </button>
                  <button className="flex-1 py-4 border border-neutral-700 text-neutral-400 text-sm uppercase tracking-wider">
                    Metal
                  </button>
                </div>
              </div>
            </div>

            <button className="w-full py-5 bg-amber-600 text-neutral-900 font-serif text-lg tracking-wide hover:bg-amber-500 transition-colors">
              Request Private Consultation
            </button>

            <div className="flex gap-8 pt-8 border-t border-neutral-800">
              <div>
                <div className="text-neutral-400 text-xs uppercase tracking-widest mb-2">Warranty</div>
                <div className="text-amber-100 font-serif">Lifetime</div>
              </div>
              <div>
                <div className="text-neutral-400 text-xs uppercase tracking-widest mb-2">Delivery</div>
                <div className="text-amber-100 font-serif">White Glove</div>
              </div>
              <div>
                <div className="text-neutral-400 text-xs uppercase tracking-widest mb-2">Returns</div>
                <div className="text-amber-100 font-serif">30 Days</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-16 mb-24">
          <div className="flex gap-16 mb-12 border-b border-neutral-800">
            <button className="pb-6 border-b border-amber-600 text-amber-100 font-serif text-lg">
              Heritage
            </button>
            <button className="pb-6 text-neutral-500 font-serif text-lg">Specifications</button>
            <button className="pb-6 text-neutral-500 font-serif text-lg">Craftsmanship</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-neutral-400">
            <div>
              <h3 className="text-amber-100 font-serif text-xl mb-3">Movement</h3>
              <p className="font-light leading-relaxed">Hand-wound mechanical caliber with 72-hour power reserve</p>
            </div>
            <div>
              <h3 className="text-amber-100 font-serif text-xl mb-3">Complications</h3>
              <p className="font-light leading-relaxed">Perpetual calendar, moon phase, chronograph</p>
            </div>
            <div>
              <h3 className="text-amber-100 font-serif text-xl mb-3">Limited</h3>
              <p className="font-light leading-relaxed">Only 100 pieces worldwide, individually numbered</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-serif text-amber-100 mb-12">Our Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-amber-900 to-neutral-800 border border-neutral-800 mb-6 group-hover:border-amber-700/50 transition-colors"></div>
                <h3 className="text-amber-100 font-serif mb-2">Heritage Collection {i}</h3>
                <p className="text-neutral-500 font-light">From $8,500</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}