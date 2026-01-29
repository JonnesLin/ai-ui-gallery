import React from 'react';

export default function MonochromeCard() {
  const cards = [
    {
      id: 1,
      type: 'image',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop',
      title: 'Urban Architecture',
      category: 'Photography',
    },
    {
      id: 2,
      type: 'info',
      icon: '◆',
      title: 'Minimalist Design',
      description: 'Pure black and white aesthetics emphasizing form, contrast, and clarity.',
      stats: { views: '8.4k', likes: '1.2k' },
    },
    {
      id: 3,
      type: 'product',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
      title: 'Classic Headphones',
      price: '$149.00',
      rating: 4.7,
    },
    {
      id: 4,
      type: 'user',
      avatar: 'https://i.pravatar.cc/150?img=12',
      name: 'Morgan Gray',
      role: 'Photographer',
      followers: '24.8k',
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-black mb-3 tracking-tight">MONOCHROME</h1>
          <p className="text-gray-600 text-sm tracking-widest uppercase">Black & White Aesthetic</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            if (card.type === 'image') {
              return (
                <div
                  key={card.id}
                  className="group relative overflow-hidden bg-black shadow-2xl hover:shadow-3xl transition-all duration-500"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover filter grayscale group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block px-3 py-1 bg-white text-black text-xs font-bold tracking-wider uppercase mb-2">
                        {card.category}
                      </span>
                      <h3 className="text-xl font-bold">{card.title}</h3>
                    </div>
                  </div>

                  <div className="absolute top-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              );
            }

            if (card.type === 'info') {
              return (
                <div
                  key={card.id}
                  className="group bg-white border-2 border-black p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="relative">
                    <div className="w-14 h-14 bg-black text-white flex items-center justify-center text-2xl mb-4 group-hover:bg-white group-hover:text-black transition-all duration-500 border-2 border-black">
                      {card.icon}
                    </div>

                    <h3 className="text-xl font-bold text-black mb-3 tracking-tight">{card.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">{card.description}</p>

                    <div className="flex gap-6 pt-4 border-t-2 border-black">
                      <div>
                        <div className="text-2xl font-bold text-black">{card.stats!.views}</div>
                        <div className="text-xs text-gray-600 uppercase tracking-wider">Views</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-black">{card.stats!.likes}</div>
                        <div className="text-xs text-gray-600 uppercase tracking-wider">Likes</div>
                      </div>
                    </div>

                    <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-black opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-black opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              );
            }

            if (card.type === 'product') {
              return (
                <div
                  key={card.id}
                  className="group bg-white border-2 border-black overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative border-b-2 border-black">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover filter grayscale group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute top-4 right-4">
                      <button className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300 shadow-lg">
                        <span className="text-xl">♥</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-black text-sm">
                          {i < Math.floor(card.rating ?? 0) ? '■' : '□'}
                        </span>
                      ))}
                      <span className="text-gray-600 text-sm ml-2 font-mono">({card.rating})</span>
                    </div>

                    <h3 className="text-lg font-bold text-black mb-3 tracking-tight">{card.title}</h3>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-black">{card.price}</span>
                      <button className="px-6 py-2 bg-black text-white font-bold hover:bg-white hover:text-black transition-all duration-300 border-2 border-black uppercase tracking-wider text-sm">
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              );
            }

            if (card.type === 'user') {
              return (
                <div
                  key={card.id}
                  className="group bg-white border-2 border-black p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 text-center hover:-translate-y-1"
                >
                  <div className="relative inline-block mb-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-black relative z-10">
                      <img
                        src={card.avatar}
                        alt={card.name}
                        className="w-full h-full object-cover filter grayscale group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <div className="absolute inset-0 border-4 border-black rounded-full animate-ping opacity-0 group-hover:opacity-20" />
                  </div>

                  <h3 className="text-xl font-bold text-black mb-1 tracking-tight">{card.name}</h3>
                  <p className="text-gray-600 text-sm mb-1 uppercase tracking-wider">{card.role}</p>
                  <p className="text-black text-xs font-bold mb-4">{card.followers} FOLLOWERS</p>

                  <button className="w-full py-2.5 bg-black text-white font-bold hover:bg-white hover:text-black transition-all duration-300 border-2 border-black uppercase tracking-wider text-sm">
                    Follow
                  </button>

                  <div className="mt-4 flex justify-center gap-4">
                    <div className="w-2 h-2 bg-black" />
                    <div className="w-2 h-2 bg-black" />
                    <div className="w-2 h-2 bg-black" />
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4">
            <div className="w-16 h-0.5 bg-black" />
            <span className="text-xs tracking-widest uppercase text-gray-600">Timeless Design</span>
            <div className="w-16 h-0.5 bg-black" />
          </div>
        </div>
      </div>
    </div>
  );
}
