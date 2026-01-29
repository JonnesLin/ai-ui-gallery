import React from 'react';

export default function ThreeDCard() {
  const cards = [
    {
      id: 1,
      type: 'image',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
      title: '3D Visualization',
      category: 'Design',
    },
    {
      id: 2,
      type: 'info',
      icon: '◆',
      title: 'Dimensional Design',
      description: 'Realistic depth and shadows create immersive three-dimensional card experiences.',
      stats: { depth: '100px', layers: '8' },
    },
    {
      id: 3,
      type: 'product',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
      title: '3D Rendered Model',
      price: '$299.00',
      rating: 4.8,
    },
    {
      id: 4,
      type: 'user',
      avatar: 'https://i.pravatar.cc/150?img=33',
      name: 'Dimension Dev',
      role: '3D Designer',
      projects: '156',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200 p-8 relative">
      {/* Perspective grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1
            className="text-5xl font-black text-gray-900 mb-3"
            style={{
              textShadow: '3px 3px 0 rgba(0,0,0,0.1), 6px 6px 0 rgba(0,0,0,0.05)',
              transform: 'perspective(500px) rotateX(10deg)',
            }}
          >
            3D DEPTH CARDS
          </h1>
          <p className="text-gray-600">Three-dimensional interface design</p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          style={{ perspective: '1000px' }}
        >
          {cards.map((card, index) => {
            if (card.type === 'image') {
              return (
                <div
                  key={card.id}
                  className="group relative cursor-pointer"
                  style={{
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.6s',
                    animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width;
                    const y = (e.clientY - rect.top) / rect.height;
                    e.currentTarget.style.transform = `
                      perspective(1000px)
                      rotateY(${(x - 0.5) * 20}deg)
                      rotateX(${(0.5 - y) * 20}deg)
                      translateZ(20px)
                    `;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)';
                  }}
                >
                  <div
                    className="relative overflow-hidden rounded-2xl bg-white"
                    style={{
                      boxShadow: '0 20px 50px rgba(0,0,0,0.2), 0 10px 20px rgba(0,0,0,0.15)',
                    }}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                      style={{ transform: 'translateZ(10px)' }}
                    />

                    <div
                      className="absolute bottom-0 left-0 right-0 p-5 text-white"
                      style={{ transform: 'translateZ(30px)' }}
                    >
                      <span
                        className="inline-block px-3 py-1 bg-blue-500 rounded-full text-xs font-bold tracking-wider uppercase mb-2"
                        style={{
                          boxShadow: '0 4px 10px rgba(59, 130, 246, 0.5)',
                          transform: 'translateZ(10px)',
                        }}
                      >
                        {card.category}
                      </span>
                      <h3 className="text-xl font-bold">{card.title}</h3>
                    </div>
                  </div>
                </div>
              );
            }

            if (card.type === 'info') {
              return (
                <div
                  key={card.id}
                  className="group relative cursor-pointer"
                  style={{
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.6s',
                    animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width;
                    const y = (e.clientY - rect.top) / rect.height;
                    e.currentTarget.style.transform = `
                      perspective(1000px)
                      rotateY(${(x - 0.5) * 20}deg)
                      rotateX(${(0.5 - y) * 20}deg)
                      translateZ(20px)
                    `;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)';
                  }}
                >
                  <div
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6"
                    style={{
                      boxShadow: '0 20px 50px rgba(0,0,0,0.2), 0 10px 20px rgba(0,0,0,0.15)',
                    }}
                  >
                    <div
                      className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-3xl mb-4 text-white"
                      style={{
                        boxShadow: '0 10px 25px rgba(168, 85, 247, 0.4)',
                        transform: 'translateZ(40px)',
                      }}
                    >
                      {card.icon}
                    </div>

                    <h3
                      className="text-xl font-bold text-gray-900 mb-3"
                      style={{ transform: 'translateZ(30px)' }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="text-gray-700 text-sm leading-relaxed mb-4"
                      style={{ transform: 'translateZ(20px)' }}
                    >
                      {card.description}
                    </p>

                    <div
                      className="grid grid-cols-2 gap-4"
                      style={{ transform: 'translateZ(10px)' }}
                    >
                      <div
                        className="bg-white rounded-lg p-3 text-center"
                        style={{ boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
                      >
                        <div className="text-2xl font-black text-purple-600">{card.stats!.depth}</div>
                        <div className="text-xs text-gray-600">Depth</div>
                      </div>
                      <div
                        className="bg-white rounded-lg p-3 text-center"
                        style={{ boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
                      >
                        <div className="text-2xl font-black text-pink-600">{card.stats!.layers}</div>
                        <div className="text-xs text-gray-600">Layers</div>
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
                  className="group relative cursor-pointer"
                  style={{
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.6s',
                    animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width;
                    const y = (e.clientY - rect.top) / rect.height;
                    e.currentTarget.style.transform = `
                      perspective(1000px)
                      rotateY(${(x - 0.5) * 20}deg)
                      rotateX(${(0.5 - y) * 20}deg)
                      translateZ(20px)
                    `;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)';
                  }}
                >
                  <div
                    className="relative overflow-hidden rounded-2xl bg-white"
                    style={{
                      boxShadow: '0 20px 50px rgba(0,0,0,0.2), 0 10px 20px rgba(0,0,0,0.15)',
                    }}
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 relative">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />

                      <button
                        className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-500 transition-all"
                        style={{
                          boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
                          transform: 'translateZ(50px)',
                        }}
                      >
                        <span className="text-xl">♥</span>
                      </button>
                    </div>

                    <div className="p-5" style={{ transform: 'translateZ(20px)' }}>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-sm">
                            {i < Math.floor(card.rating ?? 0) ? '★' : '☆'}
                          </span>
                        ))}
                        <span className="text-gray-600 text-sm ml-1">({card.rating})</span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-3">{card.title}</h3>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-black text-gray-900">{card.price}</span>
                        <button
                          className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold transition-all"
                          style={{
                            boxShadow: '0 6px 20px rgba(59, 130, 246, 0.4)',
                            transform: 'translateZ(10px)',
                          }}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            if (card.type === 'user') {
              return (
                <div
                  key={card.id}
                  className="group relative cursor-pointer"
                  style={{
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.6s',
                    animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width;
                    const y = (e.clientY - rect.top) / rect.height;
                    e.currentTarget.style.transform = `
                      perspective(1000px)
                      rotateY(${(x - 0.5) * 20}deg)
                      rotateX(${(0.5 - y) * 20}deg)
                      translateZ(20px)
                    `;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)';
                  }}
                >
                  <div
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6 text-center"
                    style={{
                      boxShadow: '0 20px 50px rgba(0,0,0,0.2), 0 10px 20px rgba(0,0,0,0.15)',
                    }}
                  >
                    <div className="inline-block relative mb-4" style={{ transform: 'translateZ(50px)' }}>
                      <img
                        src={card.avatar}
                        alt={card.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-white"
                        style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
                      />
                    </div>

                    <h3
                      className="text-xl font-bold text-gray-900 mb-1"
                      style={{ transform: 'translateZ(30px)' }}
                    >
                      {card.name}
                    </h3>
                    <p
                      className="text-gray-600 text-sm mb-1"
                      style={{ transform: 'translateZ(20px)' }}
                    >
                      {card.role}
                    </p>
                    <p
                      className="text-gray-500 text-xs mb-4"
                      style={{ transform: 'translateZ(10px)' }}
                    >
                      {card.projects} projects
                    </p>

                    <button
                      className="w-full py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold transition-all"
                      style={{
                        boxShadow: '0 8px 20px rgba(59, 130, 246, 0.4)',
                        transform: 'translateZ(20px)',
                      }}
                    >
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

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
