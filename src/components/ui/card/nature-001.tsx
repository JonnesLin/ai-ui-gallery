import React from 'react';

export default function NatureCard() {
  const cards = [
    {
      id: 1,
      type: 'image',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
      title: 'Forest Trail',
      category: 'Nature',
    },
    {
      id: 2,
      type: 'info',
      icon: '🌿',
      title: 'Eco Information',
      description: 'Learn about sustainable living and environmental conservation practices.',
      stats: { views: '2.3k', likes: '456' },
    },
    {
      id: 3,
      type: 'product',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop',
      title: 'Organic Tea Collection',
      price: '$24.99',
      rating: 4.8,
    },
    {
      id: 4,
      type: 'user',
      avatar: 'https://i.pravatar.cc/150?img=32',
      name: 'Emma Green',
      role: 'Environmental Activist',
      followers: '12.5k',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-900 mb-3">Nature Style Cards</h1>
          <p className="text-green-700">Organic and earth-inspired design</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            if (card.type === 'image') {
              return (
                <div
                  key={card.id}
                  className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border-2 border-green-200/50"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 bg-green-500/90 backdrop-blur-sm rounded-full text-xs font-medium mb-2">
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
                  className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-green-200/50 hover:border-green-400 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-100 rounded-full translate-y-12 -translate-x-12 group-hover:scale-150 transition-transform duration-700" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-green-900 mb-3">{card.title}</h3>
                    <p className="text-green-700 text-sm leading-relaxed mb-4">{card.description}</p>
                    <div className="flex gap-4 pt-4 border-t border-green-200">
                      <div className="flex items-center gap-2 text-green-600">
                        <span className="text-lg">👁️</span>
                        <span className="text-sm font-medium">{card.stats!.views}</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-600">
                        <span className="text-lg">🌱</span>
                        <span className="text-sm font-medium">{card.stats!.likes}</span>
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
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-green-200/50 hover:border-green-400"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-green-100 to-emerald-100 relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3">
                      <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-green-600 hover:bg-green-500 hover:text-white transition-colors shadow-lg">
                        ❤️
                      </button>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">
                          {i < Math.floor(card.rating ?? 0) ? '⭐' : '☆'}
                        </span>
                      ))}
                      <span className="text-green-700 text-sm ml-1">({card.rating})</span>
                    </div>
                    <h3 className="text-lg font-bold text-green-900 mb-2">{card.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-green-700">{card.price}</span>
                      <button className="px-5 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-medium hover:from-green-600 hover:to-emerald-700 transition-all shadow-md hover:shadow-lg">
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
                  className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-green-200/50 hover:border-green-400 text-center relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="inline-block relative mb-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                      <img
                        src={card.avatar}
                        alt={card.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-green-900 mb-1">{card.name}</h3>
                    <p className="text-green-600 text-sm mb-4">{card.role}</p>
                    <div className="flex items-center justify-center gap-2 mb-4 text-green-700">
                      <span className="text-lg">🌿</span>
                      <span className="font-semibold">{card.followers}</span>
                      <span className="text-sm">followers</span>
                    </div>
                    <button className="w-full py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-medium hover:from-green-600 hover:to-emerald-700 transition-all shadow-md hover:shadow-lg">
                      Follow
                    </button>
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </div>
  );
}
