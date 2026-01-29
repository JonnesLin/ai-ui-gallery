import React from 'react';

export default function NeonCard() {
  const cards = [
    {
      id: 1,
      type: 'image',
      image: 'https://images.unsplash.com/photo-1514897575457-c4db467cf78e?w=800&h=600&fit=crop',
      title: 'Neon Nights',
      category: 'Urban',
    },
    {
      id: 2,
      type: 'info',
      icon: '⚡',
      title: 'Electric Dreams',
      description: 'Vibrant neon aesthetics inspired by 80s retro-futurism and cyberpunk culture.',
      stats: { energy: '98%', frequency: '440Hz' },
    },
    {
      id: 3,
      type: 'product',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
      title: 'Neon LED Strips',
      price: '$79.99',
      rating: 4.9,
    },
    {
      id: 4,
      type: 'user',
      avatar: 'https://i.pravatar.cc/150?img=40',
      name: 'Neon Nova',
      role: 'Digital Artist',
      status: 'Creating',
    },
  ];

  return (
    <div className="min-h-screen bg-black p-8 relative overflow-hidden">
      {/* Neon grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ff00ff15_1px,transparent_1px),linear-gradient(to_bottom,#00ffff15_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1
            className="text-6xl font-black text-white mb-4 tracking-wider"
            style={{
              textShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #ff00ff',
            }}
          >
            NEON CARDS
          </h1>
          <p
            className="text-cyan-400 text-sm tracking-widest"
            style={{ textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff' }}
          >
            ELECTRIC AESTHETIC
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            if (card.type === 'image') {
              return (
                <div
                  key={card.id}
                  className="group relative overflow-hidden rounded-lg bg-black border-2 transition-all duration-500"
                  style={{
                    borderColor: '#ff00ff',
                    boxShadow: '0 0 20px rgba(255, 0, 255, 0.5), inset 0 0 20px rgba(255, 0, 255, 0.1)',
                  }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      style={{ filter: 'brightness(0.8) contrast(1.2) saturate(1.5)' }}
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span
                      className="inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase mb-2 border"
                      style={{
                        color: '#ff00ff',
                        borderColor: '#ff00ff',
                        textShadow: '0 0 10px #ff00ff',
                        boxShadow: '0 0 10px rgba(255, 0, 255, 0.5)',
                      }}
                    >
                      {card.category}
                    </span>
                    <h3
                      className="text-xl font-bold"
                      style={{
                        color: '#00ffff',
                        textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff',
                      }}
                    >
                      {card.title}
                    </h3>
                  </div>

                  {/* Scanning line effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/20 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1500" />
                </div>
              );
            }

            if (card.type === 'info') {
              return (
                <div
                  key={card.id}
                  className="group relative overflow-hidden rounded-lg bg-black border-2 p-6 transition-all duration-500"
                  style={{
                    borderColor: '#00ffff',
                    boxShadow: '0 0 20px rgba(0, 255, 255, 0.5), inset 0 0 20px rgba(0, 255, 255, 0.1)',
                  }}
                >
                  <div className="relative z-10">
                    <div
                      className="w-14 h-14 rounded-lg flex items-center justify-center text-3xl mb-4 border-2 group-hover:scale-110 transition-transform"
                      style={{
                        borderColor: '#ff00ff',
                        color: '#ff00ff',
                        textShadow: '0 0 20px #ff00ff',
                        boxShadow: '0 0 30px rgba(255, 0, 255, 0.5), inset 0 0 30px rgba(255, 0, 255, 0.2)',
                      }}
                    >
                      {card.icon}
                    </div>

                    <h3
                      className="text-xl font-bold mb-3"
                      style={{
                        color: '#ff00ff',
                        textShadow: '0 0 10px #ff00ff',
                      }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{card.description}</p>

                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span
                            className="text-xs font-mono"
                            style={{ color: '#00ffff', textShadow: '0 0 5px #00ffff' }}
                          >
                            ENERGY
                          </span>
                          <span
                            className="text-xs font-bold"
                            style={{ color: '#ff00ff', textShadow: '0 0 5px #ff00ff' }}
                          >
                            {card.stats!.energy}
                          </span>
                        </div>
                        <div
                          className="h-2 bg-gray-900 rounded-full overflow-hidden"
                          style={{ boxShadow: 'inset 0 0 10px rgba(255, 0, 255, 0.3)' }}
                        >
                          <div
                            className="h-full rounded-full animate-pulse"
                            style={{
                              width: card.stats!.energy,
                              background: 'linear-gradient(90deg, #ff00ff, #00ffff)',
                              boxShadow: '0 0 20px #ff00ff',
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span
                            className="text-xs font-mono"
                            style={{ color: '#00ffff', textShadow: '0 0 5px #00ffff' }}
                          >
                            FREQUENCY
                          </span>
                          <span
                            className="text-xs font-bold"
                            style={{ color: '#ff00ff', textShadow: '0 0 5px #ff00ff' }}
                          >
                            {card.stats!.frequency}
                          </span>
                        </div>
                        <div
                          className="h-2 bg-gray-900 rounded-full overflow-hidden"
                          style={{ boxShadow: 'inset 0 0 10px rgba(0, 255, 255, 0.3)' }}
                        >
                          <div
                            className="h-full rounded-full animate-pulse"
                            style={{
                              width: '75%',
                              background: 'linear-gradient(90deg, #00ffff, #ff00ff)',
                              boxShadow: '0 0 20px #00ffff',
                            }}
                          />
                        </div>
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
                  className="group relative overflow-hidden rounded-lg bg-black border-2 transition-all duration-500"
                  style={{
                    borderColor: '#ff00ff',
                    boxShadow: '0 0 20px rgba(255, 0, 255, 0.5), inset 0 0 20px rgba(255, 0, 255, 0.1)',
                  }}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-900 relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      style={{ filter: 'brightness(0.8) contrast(1.2) saturate(1.5)' }}
                    />

                    <div className="absolute top-3 right-3">
                      <button
                        className="w-10 h-10 bg-black border-2 rounded-lg flex items-center justify-center transition-all"
                        style={{
                          borderColor: '#ff00ff',
                          color: '#ff00ff',
                          textShadow: '0 0 10px #ff00ff',
                          boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)',
                        }}
                      >
                        <span className="text-lg">♥</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className="text-sm"
                          style={{
                            color: i < Math.floor(card.rating ?? 0) ? '#ff00ff' : '#555',
                            textShadow: i < Math.floor(card.rating ?? 0) ? '0 0 10px #ff00ff' : 'none',
                          }}
                        >
                          ★
                        </span>
                      ))}
                      <span className="text-gray-400 text-xs ml-1 font-mono">({card.rating})</span>
                    </div>

                    <h3
                      className="text-lg font-bold mb-3"
                      style={{
                        color: '#00ffff',
                        textShadow: '0 0 10px #00ffff',
                      }}
                    >
                      {card.title}
                    </h3>

                    <div className="flex items-center justify-between">
                      <span
                        className="text-2xl font-black"
                        style={{
                          color: '#ff00ff',
                          textShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff',
                        }}
                      >
                        {card.price}
                      </span>
                      <button
                        className="px-5 py-2 font-bold rounded-lg transition-all border-2"
                        style={{
                          background: 'linear-gradient(135deg, #ff00ff, #00ffff)',
                          color: '#000',
                          borderColor: '#00ffff',
                          boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)',
                        }}
                      >
                        BUY
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
                  className="group relative overflow-hidden rounded-lg bg-black border-2 p-6 transition-all duration-500 text-center"
                  style={{
                    borderColor: '#00ffff',
                    boxShadow: '0 0 20px rgba(0, 255, 255, 0.5), inset 0 0 20px rgba(0, 255, 255, 0.1)',
                  }}
                >
                  <div className="relative z-10">
                    <div className="inline-block relative mb-4">
                      <div
                        className="absolute inset-0 rounded-full blur-xl opacity-75 animate-pulse"
                        style={{ background: 'linear-gradient(135deg, #ff00ff, #00ffff)' }}
                      />
                      <img
                        src={card.avatar}
                        alt={card.name}
                        className="w-24 h-24 rounded-full object-cover border-2 relative z-10 group-hover:scale-110 transition-transform"
                        style={{
                          borderColor: '#ff00ff',
                          boxShadow: '0 0 30px rgba(255, 0, 255, 0.7)',
                          filter: 'brightness(1.1) contrast(1.2) saturate(1.3)',
                        }}
                      />
                    </div>

                    <h3
                      className="text-xl font-bold mb-1"
                      style={{
                        color: '#ff00ff',
                        textShadow: '0 0 10px #ff00ff',
                      }}
                    >
                      {card.name}
                    </h3>
                    <p
                      className="text-sm mb-1"
                      style={{
                        color: '#00ffff',
                        textShadow: '0 0 5px #00ffff',
                      }}
                    >
                      {card.role}
                    </p>
                    <p className="text-gray-400 text-xs mb-4">● {card.status}</p>

                    <button
                      className="w-full py-2.5 font-bold rounded-lg transition-all border-2"
                      style={{
                        background: 'linear-gradient(135deg, #ff00ff, #00ffff)',
                        color: '#000',
                        borderColor: '#ff00ff',
                        boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)',
                      }}
                    >
                      FOLLOW
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
