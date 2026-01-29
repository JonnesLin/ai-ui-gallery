import React from 'react';

export default function SketchCard() {
  const cards = [
    {
      id: 1,
      type: 'image',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop',
      title: 'Mountain Sketch',
      category: 'Landscape',
    },
    {
      id: 2,
      type: 'info',
      icon: '✏️',
      title: 'Creative Process',
      description: 'Hand-drawn designs bring authenticity and human touch to digital experiences.',
      stats: { sketches: '127', drafts: '45' },
    },
    {
      id: 3,
      type: 'product',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
      title: 'Designer Notebook',
      price: '$18.50',
      rating: 4.5,
    },
    {
      id: 4,
      type: 'user',
      avatar: 'https://i.pravatar.cc/150?img=25',
      name: 'Alex Sketch',
      role: 'Illustrator',
      projects: '89',
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8 relative">
      {/* Paper texture background */}
      <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-gray-900 mb-3 relative inline-block">
            Sketch Style Cards
            <svg
              className="absolute -bottom-2 left-0 w-full h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 12"
            >
              <path
                d="M5 6 Q 150 2, 295 6"
                stroke="#000"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </h1>
          <p className="text-gray-600 mt-6 font-handwriting text-lg">Hand-drawn aesthetic design</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card) => {
            if (card.type === 'image') {
              return (
                <div
                  key={card.id}
                  className="group relative bg-white p-3 transition-all duration-300 hover:-rotate-1 hover:scale-105"
                  style={{
                    filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))',
                    clipPath: 'polygon(0 2%, 2% 0, 98% 0, 100% 2%, 100% 98%, 98% 100%, 2% 100%, 0 98%)',
                  }}
                >
                  {/* Hand-drawn border */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="calc(100% - 4px)"
                      height="calc(100% - 4px)"
                      fill="none"
                      stroke="#000"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      strokeLinecap="round"
                      opacity="0.3"
                    />
                  </svg>

                  <div className="aspect-[4/3] overflow-hidden mb-3 relative" style={{ clipPath: 'polygon(1% 1%, 99% 0, 100% 99%, 0 100%)' }}>
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover filter grayscale contrast-125 brightness-110"
                    />
                    {/* Sketch overlay */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20" />
                  </div>

                  <div className="px-2">
                    <span className="inline-block px-2 py-1 bg-yellow-100 text-gray-800 text-xs font-medium mb-2 relative">
                      {card.category}
                      <svg className="absolute -top-1 -right-1 w-3 h-3" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0 L3 0 L3 3 Z" fill="#000" opacity="0.1" />
                      </svg>
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 relative">
                      {card.title}
                      <svg className="absolute -bottom-1 left-0 w-full h-2" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0 1 Q 50 2, 100 1"
                          stroke="#000"
                          strokeWidth="1"
                          fill="none"
                          opacity="0.2"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    </h3>
                  </div>
                </div>
              );
            }

            if (card.type === 'info') {
              return (
                <div
                  key={card.id}
                  className="group relative bg-white p-6 transition-all duration-300 hover:rotate-1 hover:scale-105"
                  style={{
                    filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))',
                    clipPath: 'polygon(0 1%, 1% 0, 99% 0, 100% 1%, 100% 99%, 99% 100%, 1% 100%, 0 99%)',
                  }}
                >
                  {/* Hand-drawn border */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M 10 5 L 290 8 L 288 195 L 8 192 Z"
                      fill="none"
                      stroke="#000"
                      strokeWidth="3"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>

                  <div className="relative z-10">
                    <div className="w-14 h-14 border-3 border-black rounded-lg flex items-center justify-center text-3xl mb-4 bg-yellow-50 relative group-hover:rotate-6 transition-transform">
                      {card.icon}
                      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <rect
                          x="1"
                          y="1"
                          width="calc(100% - 2px)"
                          height="calc(100% - 2px)"
                          fill="none"
                          stroke="#000"
                          strokeWidth="2.5"
                          rx="8"
                        />
                      </svg>
                    </div>

                    <h3 className="text-xl font-black text-gray-900 mb-3">{card.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">{card.description}</p>

                    <div className="flex gap-6 pt-4 border-t-2 border-dashed border-gray-300">
                      <div className="text-center">
                        <div className="text-2xl font-black text-gray-900">{card.stats!.sketches}</div>
                        <div className="text-xs text-gray-600">Sketches</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-black text-gray-900">{card.stats!.drafts}</div>
                        <div className="text-xs text-gray-600">Drafts</div>
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
                  className="group relative bg-white overflow-hidden transition-all duration-300 hover:-rotate-1 hover:scale-105"
                  style={{
                    filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))',
                    clipPath: 'polygon(0 2%, 2% 0, 98% 0, 100% 2%, 100% 98%, 98% 100%, 2% 100%, 0 98%)',
                  }}
                >
                  {/* Hand-drawn border */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" xmlns="http://www.w3.org/2000/svg">
                    <rect
                      x="3"
                      y="3"
                      width="calc(100% - 6px)"
                      height="calc(100% - 6px)"
                      fill="none"
                      stroke="#000"
                      strokeWidth="2.5"
                    />
                  </svg>

                  <div className="aspect-[4/3] overflow-hidden bg-gray-50 relative p-3">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover filter grayscale contrast-110"
                    />
                    <div className="absolute top-5 right-5">
                      <button className="w-10 h-10 bg-white border-2 border-black rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-colors relative">
                        <span className="text-lg">♡</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-5 bg-white">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-gray-900 text-sm">
                          {i < Math.floor(card.rating ?? 0) ? '★' : '☆'}
                        </span>
                      ))}
                      <span className="text-gray-600 text-sm ml-1">({card.rating})</span>
                    </div>

                    <h3 className="text-lg font-black text-gray-900 mb-3">{card.title}</h3>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-gray-900">{card.price}</span>
                      <button className="px-5 py-2 bg-black text-white font-bold hover:bg-gray-800 transition-colors relative">
                        ADD
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" fill="none" stroke="#fff" strokeWidth="1" opacity="0.5" />
                        </svg>
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
                  className="group relative bg-white p-6 text-center transition-all duration-300 hover:rotate-1 hover:scale-105"
                  style={{
                    filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))',
                    clipPath: 'polygon(0 1%, 1% 0, 99% 0, 100% 1%, 100% 99%, 99% 100%, 1% 100%, 0 99%)',
                  }}
                >
                  {/* Hand-drawn border */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M 8 5 L 292 7 L 290 245 L 6 243 Z"
                      fill="none"
                      stroke="#000"
                      strokeWidth="3"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>

                  <div className="relative z-10">
                    <div className="inline-block relative mb-4">
                      <img
                        src={card.avatar}
                        alt={card.name}
                        className="w-24 h-24 rounded-full object-cover border-3 border-black filter grayscale contrast-110 group-hover:scale-110 transition-transform"
                      />
                      {/* Scribble circle */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="48" cy="48" r="46" fill="none" stroke="#000" strokeWidth="2.5" />
                      </svg>
                    </div>

                    <h3 className="text-xl font-black text-gray-900 mb-1">{card.name}</h3>
                    <p className="text-gray-600 text-sm mb-1">{card.role}</p>
                    <p className="text-gray-500 text-xs mb-4">{card.projects} projects</p>

                    <button className="w-full py-2.5 bg-black text-white font-bold hover:bg-gray-800 transition-colors relative">
                      FOLLOW
                      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" fill="none" stroke="#fff" strokeWidth="1" opacity="0.5" />
                      </svg>
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
