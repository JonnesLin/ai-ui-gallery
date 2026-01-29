import React from 'react';

export default function FuturisticCard() {
  const cards = [
    {
      id: 1,
      type: 'image',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      title: 'Digital Future',
      category: 'Technology',
    },
    {
      id: 2,
      type: 'info',
      icon: '⚡',
      title: 'Quantum Computing',
      description: 'Next-generation computing power with quantum mechanics and AI integration.',
      stats: { connections: '89.2k', processing: '99.9%' },
    },
    {
      id: 3,
      type: 'product',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
      title: 'Neural Interface Pro',
      price: '$899.00',
      rating: 5.0,
    },
    {
      id: 4,
      type: 'user',
      avatar: 'https://i.pravatar.cc/150?img=60',
      name: 'Aria Nova',
      role: 'AI Engineer',
      status: 'Online',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 p-8 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-3">
            FUTURISTIC INTERFACE
          </h1>
          <p className="text-cyan-400 font-mono text-sm tracking-widest">NEXT_GEN_DESIGN_SYSTEM</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            if (card.type === 'image') {
              return (
                <div
                  key={card.id}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-500"
                >
                  {/* Scan line effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000" />

                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/50 to-transparent" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-slate-950 to-transparent">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                      <span className="text-cyan-400 text-xs font-mono tracking-wider">{card.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{card.title}</h3>
                  </div>

                  {/* Corner decorations */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              );
            }

            if (card.type === 'info') {
              return (
                <div
                  key={card.id}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-purple-500/30 hover:border-purple-400 transition-all duration-500 p-6"
                >
                  {/* Circuit pattern background */}
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="currentColor" className="text-purple-400" />
                        <path d="M2 2h15M2 2v15" stroke="currentColor" strokeWidth="0.5" className="text-purple-400" />
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#circuit)" />
                    </svg>
                  </div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-3xl mb-4 relative group-hover:scale-110 transition-transform duration-500">
                      <div className="absolute inset-0 bg-purple-400 rounded-lg blur-xl opacity-50 group-hover:opacity-75 animate-pulse" />
                      <span className="relative z-10">{card.icon}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{card.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{card.description}</p>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-cyan-400 font-mono">CONNECTIONS</span>
                        <span className="text-white font-bold">{card.stats!.connections}</span>
                      </div>
                      <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full" />
                      </div>

                      <div className="flex items-center justify-between text-xs mt-3">
                        <span className="text-purple-400 font-mono">PROCESSING</span>
                        <span className="text-white font-bold">{card.stats!.processing}</span>
                      </div>
                      <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-gradient-to-r from-purple-500 to-pink-600 rounded-full animate-pulse" />
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
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-500/30 hover:border-blue-400 transition-all duration-500"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-900/20 to-purple-900/20 relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />

                    <div className="absolute top-3 right-3">
                      <button className="w-10 h-10 bg-slate-900/80 backdrop-blur-sm border border-cyan-400/50 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all">
                        <span className="text-xl">♥</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-cyan-400 text-sm">
                          {i < Math.floor(card.rating ?? 0) ? '★' : '☆'}
                        </span>
                      ))}
                      <span className="text-slate-400 text-xs ml-1 font-mono">({card.rating})</span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                        {card.price}
                      </span>
                      <button className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg font-bold transition-all shadow-lg shadow-cyan-500/50 hover:shadow-cyan-400/70">
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
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-500 p-6 text-center"
                >
                  {/* Hologram effect */}
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(6,182,212,0.05)_25%,rgba(6,182,212,0.05)_26%,transparent_27%,transparent_74%,rgba(6,182,212,0.05)_75%,rgba(6,182,212,0.05)_76%,transparent_77%,transparent)] bg-[length:100%_8px] opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    <div className="inline-block relative mb-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-2xl opacity-50 group-hover:opacity-100 animate-pulse transition-opacity" />
                      <img
                        src={card.avatar}
                        alt={card.name}
                        className="w-24 h-24 rounded-full object-cover border-2 border-cyan-400 shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-slate-900 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">{card.name}</h3>
                    <p className="text-cyan-400 text-sm font-mono mb-1">{card.role}</p>
                    <p className="text-green-400 text-xs font-mono mb-4">● {card.status}</p>

                    <button className="w-full py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg font-bold transition-all shadow-lg shadow-cyan-500/50 hover:shadow-cyan-400/70 relative overflow-hidden group/btn">
                      <span className="relative z-10">CONNECT</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
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
