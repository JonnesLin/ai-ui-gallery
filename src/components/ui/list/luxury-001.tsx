export default function LuxuryList() {
  const items = [
    { id: 1, title: 'Diamond Collection 2024', price: '$25,000', category: 'Jewelry', icon: '💎' },
    { id: 2, title: 'Limited Edition Timepiece', price: '$18,500', category: 'Watches', icon: '⌚' },
    { id: 3, title: 'Premium Leather Portfolio', price: '$3,200', category: 'Accessories', icon: '👜' },
    { id: 4, title: 'Signature Fragrance', price: '$890', category: 'Perfume', icon: '🌹' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-amber-950 to-gray-900 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Premium Gold List */}
        <section>
          <h2 className="text-amber-400 font-serif text-3xl mb-8 text-center tracking-wider">
            Exclusive Collection
          </h2>
          <ul className="space-y-1">
            {items.map((item, idx) => (
              <li
                key={item.id}
                className={`bg-gradient-to-r from-amber-900/30 to-amber-950/30 border-y border-amber-700/30 px-8 py-6 hover:from-amber-900/50 hover:to-amber-950/50 hover:border-amber-600/50 transition-all cursor-pointer backdrop-blur-sm ${
                  idx === 0 ? 'rounded-t-lg' : ''
                } ${idx === items.length - 1 ? 'rounded-b-lg' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="text-4xl">{item.icon}</div>
                    <div>
                      <h3 className="text-amber-200 font-serif text-xl tracking-wide">{item.title}</h3>
                      <p className="text-amber-400/60 text-sm mt-1 font-light">{item.category}</p>
                    </div>
                  </div>
                  <span className="text-amber-300 font-serif text-xl tracking-wide">{item.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Elegant Cards */}
        <section>
          <h2 className="text-amber-400 font-serif text-3xl mb-8 text-center tracking-wider">
            Featured Items
          </h2>
          <ul className="space-y-6">
            {items.slice(0, 3).map((item) => (
              <li
                key={item.id}
                className="relative bg-gradient-to-br from-amber-900/20 to-gray-900/20 backdrop-blur-sm border border-amber-700/30 rounded-lg p-8 hover:border-amber-600/50 hover:shadow-2xl hover:shadow-amber-900/20 transition-all cursor-pointer group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-800 to-amber-950 rounded-full flex items-center justify-center text-4xl border-2 border-amber-700/50">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-amber-100 font-serif text-2xl tracking-wide mb-2">{item.title}</h3>
                      <p className="text-amber-400/70 text-sm font-light">{item.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-amber-300 font-serif text-2xl mb-2">{item.price}</div>
                    <button className="px-6 py-2 bg-amber-700/30 border border-amber-600/50 text-amber-200 rounded font-light text-sm hover:bg-amber-700/50 transition-all">
                      View Details
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Nested Luxury */}
        <section>
          <div className="bg-gradient-to-br from-amber-950/40 to-gray-900/40 backdrop-blur-sm border border-amber-700/30 rounded-lg p-8">
            <h3 className="text-amber-300 font-serif text-2xl mb-6 tracking-wider border-b border-amber-700/30 pb-4">
              Collections
            </h3>
            <ul className="space-y-4">
              <li className="bg-amber-900/20 border border-amber-800/30 rounded-lg p-6">
                <div className="text-amber-200 font-serif text-xl mb-4 flex items-center gap-3">
                  <span>👑</span> Royal Heritage
                </div>
                <ul className="space-y-3 pl-8 border-l border-amber-700/30">
                  <li className="text-amber-300/70 hover:text-amber-200 cursor-pointer transition-colors font-light">
                    Crown Jewels
                  </li>
                  <li className="text-amber-300/70 hover:text-amber-200 cursor-pointer transition-colors font-light">
                    Imperial Artifacts
                  </li>
                  <li className="text-amber-300/70 hover:text-amber-200 cursor-pointer transition-colors font-light">
                    Rare Gemstones
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* Premium Checklist */}
        <section>
          <div className="bg-gradient-to-br from-gray-900/90 to-amber-950/90 backdrop-blur-sm border border-amber-700/30 rounded-lg p-8">
            <h3 className="text-amber-300 font-serif text-2xl mb-6 tracking-wider">Wishlist</h3>
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-4 p-4 hover:bg-amber-900/20 rounded-lg cursor-pointer group transition-all"
                >
                  <div className="w-6 h-6 border-2 border-amber-600/50 rounded-sm group-hover:border-amber-500 group-hover:bg-amber-600/20 transition-all" />
                  <div className="flex-1">
                    <span className="text-amber-200 font-light tracking-wide">{item.title}</span>
                  </div>
                  <span className="text-amber-400/60 font-serif text-sm">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Prestige Grid */}
        <section>
          <h2 className="text-amber-400 font-serif text-3xl mb-8 text-center tracking-wider">
            Signature Series
          </h2>
          <ul className="grid grid-cols-2 gap-6">
            {items.map((item) => (
              <li
                key={item.id}
                className="relative bg-gradient-to-br from-amber-950/40 to-gray-900/40 backdrop-blur-sm border border-amber-700/30 rounded-lg p-6 hover:border-amber-600/50 hover:shadow-xl hover:shadow-amber-900/20 transition-all cursor-pointer group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-500/10 to-transparent rounded-bl-full" />
                <div className="relative text-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h4 className="text-amber-200 font-serif text-lg mb-2 tracking-wide">{item.title.split(' ')[0]}</h4>
                  <p className="text-amber-400/60 text-xs mb-3 font-light">{item.category}</p>
                  <div className="text-amber-300 font-serif text-xl">{item.price}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
