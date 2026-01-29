import React from 'react';

export default function FlatCard() {
  const cards = [
    {
      id: 1,
      type: 'image',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      title: 'Clean Design',
      category: 'Minimal',
    },
    {
      id: 2,
      type: 'info',
      icon: '◉',
      title: 'Flat Design Principles',
      description: 'Simple, clean interface with bold colors and no dimensional effects or textures.',
      stats: { simplicity: '100%', clarity: '100%' },
    },
    {
      id: 3,
      type: 'product',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
      title: 'Minimalist Watch',
      price: '$129.00',
      rating: 4.6,
    },
    {
      id: 4,
      type: 'user',
      avatar: 'https://i.pravatar.cc/150?img=20',
      name: 'Flat Designer',
      role: 'UI Designer',
      works: '234',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-3">Flat Design Cards</h1>
          <p className="text-gray-600">Clean and simple interface</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            if (card.type === 'image') {
              return (
                <div
                  key={card.id}
                  className="group relative overflow-hidden bg-white transition-transform duration-300 hover:translate-y-[-4px]"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-blue-500 text-xs font-semibold tracking-wider uppercase mb-2">
                      {card.category}
                    </span>
                    <h3 className="text-xl font-bold">{card.title}</h3>
                  </div>
                </div>
              );
            }

            if (card.type === 'info') {
              return (
                <div
                  key={card.id}
                  className="group bg-white p-6 transition-all duration-300 hover:translate-y-[-4px]"
                >
                  <div className="w-14 h-14 bg-blue-500 text-white flex items-center justify-center text-3xl mb-4 group-hover:bg-purple-500 transition-colors duration-300">
                    {card.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{card.description}</p>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-xs font-semibold text-gray-700">SIMPLICITY</span>
                        <span className="text-xs font-bold text-blue-600">{card.stats!.simplicity}</span>
                      </div>
                      <div className="h-2 bg-gray-200 overflow-hidden">
                        <div className="h-full w-full bg-blue-500" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-xs font-semibold text-gray-700">CLARITY</span>
                        <span className="text-xs font-bold text-purple-600">{card.stats!.clarity}</span>
                      </div>
                      <div className="h-2 bg-gray-200 overflow-hidden">
                        <div className="h-full w-full bg-purple-500" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            if (card.type === 'product') {
              return (
                <div
                  key={card.id}
                  className="group bg-white overflow-hidden transition-all duration-300 hover:translate-y-[-4px]"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute top-4 right-4">
                      <button className="w-10 h-10 bg-white text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors duration-300">
                        <span className="text-xl">♥</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-sm ${i < Math.floor(card.rating ?? 0) ? 'text-yellow-500' : 'text-gray-300'}`}>
                          ★
                        </span>
                      ))}
                      <span className="text-gray-600 text-sm ml-1">({card.rating})</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3">{card.title}</h3>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900">{card.price}</span>
                      <button className="px-5 py-2 bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors">
                        Add
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
                  className="group bg-white p-6 text-center transition-all duration-300 hover:translate-y-[-4px]"
                >
                  <div className="inline-block relative mb-4">
                    <img
                      src={card.avatar}
                      alt={card.name}
                      className="w-24 h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                      style={{ borderRadius: '50%' }}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">{card.name}</h3>
                  <p className="text-gray-600 text-sm mb-1">{card.role}</p>
                  <p className="text-gray-500 text-xs mb-4">{card.works} works</p>

                  <button className="w-full py-2.5 bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors">
                    Follow
                  </button>
                </div>
              );
            }

            return null;
          })}
        </div>

        <div className="mt-16 grid grid-cols-4 gap-6">
          <div className="bg-red-500 h-20" />
          <div className="bg-blue-500 h-20" />
          <div className="bg-green-500 h-20" />
          <div className="bg-yellow-500 h-20" />
        </div>
      </div>
    </div>
  );
}
