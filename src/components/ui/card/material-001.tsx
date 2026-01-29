import React from 'react';

export default function MaterialCard() {
  const cards = [
    {
      id: 1,
      type: 'image',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop',
      title: 'Mountain Landscape',
      category: 'Nature',
    },
    {
      id: 2,
      type: 'info',
      icon: '●',
      title: 'Material Design',
      description: 'Google Material Design principles with elevation, shadows, and tactile surfaces.',
      stats: { elevation: '8dp', ripple: 'Active' },
    },
    {
      id: 3,
      type: 'product',
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop',
      title: 'Smartphone Pro',
      price: '$699.00',
      rating: 4.7,
    },
    {
      id: 4,
      type: 'user',
      avatar: 'https://i.pravatar.cc/150?img=15',
      name: 'Material Designer',
      role: 'Product Designer',
      followers: '18.2k',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-medium text-gray-900 mb-3">Material Design Cards</h1>
          <p className="text-gray-600">Inspired by Google Material Design</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            if (card.type === 'image') {
              return (
                <div
                  key={card.id}
                  className="group relative overflow-hidden rounded-lg bg-white transition-all duration-300 hover:shadow-2xl"
                  style={{
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.05)',
                  }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-blue-600 rounded text-xs font-medium tracking-wide uppercase mb-2">
                      {card.category}
                    </span>
                    <h3 className="text-xl font-medium">{card.title}</h3>
                  </div>

                  {/* Ripple effect overlay */}
                  <div className="absolute inset-0 bg-white opacity-0 group-active:opacity-20 transition-opacity duration-150 pointer-events-none" />
                </div>
              );
            }

            if (card.type === 'info') {
              return (
                <div
                  key={card.id}
                  className="group relative overflow-hidden rounded-lg bg-white p-6 transition-all duration-300 hover:shadow-2xl"
                  style={{
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.05)',
                  }}
                >
                  <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl mb-4 group-hover:bg-blue-700 transition-colors duration-300">
                    {card.icon}
                  </div>

                  <h3 className="text-xl font-medium text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{card.description}</p>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Elevation</span>
                      <span className="text-sm font-bold text-blue-600">{card.stats!.elevation}</span>
                    </div>
                    <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-blue-600 rounded-full" />
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Ripple Effect</span>
                      <span className="text-sm font-bold text-green-600">{card.stats!.ripple}</span>
                    </div>
                    <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-green-600 rounded-full" />
                    </div>
                  </div>

                  {/* Ripple effect overlay */}
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-active:opacity-10 transition-opacity duration-150 pointer-events-none rounded-lg" />
                </div>
              );
            }

            if (card.type === 'product') {
              return (
                <div
                  key={card.id}
                  className="group relative overflow-hidden rounded-lg bg-white transition-all duration-300 hover:shadow-2xl"
                  style={{
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.05)',
                  }}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-50 relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <button
                      className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white active:scale-95"
                      style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
                    >
                      <span className="text-xl">♥</span>
                    </button>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-sm ${i < Math.floor(card.rating ?? 0) ? 'text-yellow-500' : 'text-gray-300'}`}
                        >
                          ★
                        </span>
                      ))}
                      <span className="text-gray-600 text-sm ml-1">({card.rating})</span>
                    </div>

                    <h3 className="text-lg font-medium text-gray-900 mb-3">{card.title}</h3>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-medium text-gray-900">{card.price}</span>
                      <button
                        className="px-6 py-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 transition-all duration-300 active:scale-95"
                        style={{ boxShadow: '0 2px 4px rgba(37, 99, 235, 0.3)' }}
                      >
                        Add
                      </button>
                    </div>
                  </div>

                  {/* Ripple effect overlay */}
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-active:opacity-10 transition-opacity duration-150 pointer-events-none rounded-lg" />
                </div>
              );
            }

            if (card.type === 'user') {
              return (
                <div
                  key={card.id}
                  className="group relative overflow-hidden rounded-lg bg-white p-6 text-center transition-all duration-300 hover:shadow-2xl"
                  style={{
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.05)',
                  }}
                >
                  <div className="inline-block relative mb-4">
                    <img
                      src={card.avatar}
                      alt={card.name}
                      className="w-24 h-24 rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
                      style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
                    />
                  </div>

                  <h3 className="text-xl font-medium text-gray-900 mb-1">{card.name}</h3>
                  <p className="text-gray-600 text-sm mb-1">{card.role}</p>
                  <p className="text-gray-500 text-xs mb-4">{card.followers} followers</p>

                  <button
                    className="w-full py-2.5 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 transition-all duration-300 active:scale-95"
                    style={{ boxShadow: '0 2px 4px rgba(37, 99, 235, 0.3)' }}
                  >
                    Follow
                  </button>

                  {/* Ripple effect overlay */}
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-active:opacity-10 transition-opacity duration-150 pointer-events-none rounded-lg" />
                </div>
              );
            }

            return null;
          })}
        </div>

        <div className="mt-16 bg-white rounded-lg p-8 text-center" style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.05)' }}>
          <h2 className="text-2xl font-medium text-gray-900 mb-2">Material Design Principles</h2>
          <p className="text-gray-600 mb-6">Tactile, bold, and intentional design</p>
          <div className="flex justify-center gap-4">
            <div className="w-16 h-16 bg-red-500 rounded-full" style={{ boxShadow: '0 4px 8px rgba(239, 68, 68, 0.3)' }} />
            <div className="w-16 h-16 bg-blue-600 rounded-full" style={{ boxShadow: '0 4px 8px rgba(37, 99, 235, 0.3)' }} />
            <div className="w-16 h-16 bg-green-500 rounded-full" style={{ boxShadow: '0 4px 8px rgba(34, 197, 94, 0.3)' }} />
            <div className="w-16 h-16 bg-yellow-500 rounded-full" style={{ boxShadow: '0 4px 8px rgba(234, 179, 8, 0.3)' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
