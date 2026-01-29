export default function SketchProfilePage() {
  return (
    <div className="min-h-screen bg-white" style={{
      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(0,0,0,0.03) 24px, rgba(0,0,0,0.03) 25px)`
    }}>
      <div className="max-w-5xl mx-auto">
        {/* Cover - Sketched */}
        <div className="relative h-64 bg-blue-50 border-4 border-black" style={{
          borderStyle: 'solid',
          borderImage: 'repeating-linear-gradient(45deg, black 0px, black 5px, transparent 5px, transparent 8px, black 8px) 4'
        }}>
          <div className="absolute inset-4 border-2 border-gray-800" style={{
            borderStyle: 'dashed',
            borderRadius: '5px 15px 10px 20px'
          }}></div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="absolute bg-gray-800" style={{
              width: '2px',
              height: `${Math.random() * 100 + 50}px`,
              left: `${i * 20 + 10}%`,
              top: `${Math.random() * 100}px`,
              transform: `rotate(${Math.random() * 20 - 10}deg)`,
              opacity: 0.2
            }}></div>
          ))}
        </div>

        {/* Profile Section */}
        <div className="relative -mt-24 px-6 py-8">
          <div className="flex flex-col md:flex-row gap-6 items-start mb-8">
            <div className="relative">
              <div className="w-40 h-40 bg-yellow-100 border-4 border-black shadow-lg" style={{
                borderRadius: '45% 55% 52% 48% / 48% 45% 55% 52%',
                transform: 'rotate(-2deg)',
                boxShadow: '6px 6px 0px rgba(0,0,0,0.2)'
              }}>
                <div className="absolute inset-2 border-2 border-gray-700" style={{
                  borderRadius: '45% 55% 52% 48% / 48% 45% 55% 52%',
                  borderStyle: 'dashed'
                }}></div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-200 border-3 border-black flex items-center justify-center font-bold text-xl" style={{
                borderRadius: '50% 48% 52% 50%',
                transform: 'rotate(5deg)',
                boxShadow: '3px 3px 0px rgba(0,0,0,0.2)'
              }}>
                ✓
              </div>
            </div>
            <div className="flex-1 md:mt-16">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2" style={{
                    textShadow: '2px 2px 0px rgba(0,0,0,0.1)',
                    transform: 'rotate(-1deg)',
                    display: 'inline-block'
                  }}>
                    Sketch McGraw
                  </h1>
                  <p className="text-gray-600 font-medium" style={{ transform: 'rotate(-0.5deg)', display: 'inline-block' }}>
                    @sketchmcgraw
                  </p>
                </div>
                <div className="flex gap-3">
                  <button className="px-6 py-2.5 bg-black text-white font-bold border-3 border-black hover:bg-gray-900 transition-all" style={{
                    borderRadius: '8px 12px 10px 8px',
                    transform: 'rotate(-1deg)',
                    boxShadow: '4px 4px 0px rgba(0,0,0,0.2)'
                  }}>
                    Follow
                  </button>
                  <button className="px-6 py-2.5 bg-white border-3 border-black text-black font-bold hover:bg-gray-50 transition-all" style={{
                    borderRadius: '10px 8px 12px 10px',
                    transform: 'rotate(1deg)',
                    boxShadow: '4px 4px 0px rgba(0,0,0,0.2)'
                  }}>
                    Message
                  </button>
                </div>
              </div>
              <div className="bg-blue-50 border-3 border-black p-4 mb-6" style={{
                borderRadius: '8px 15px 12px 10px',
                borderStyle: 'solid',
                transform: 'rotate(-0.5deg)',
                boxShadow: '3px 3px 0px rgba(0,0,0,0.15)'
              }}>
                <p className="text-gray-800 leading-relaxed">
                  Hand-drawn designer • Sketch enthusiast • Turning doodles into designs • Creating one squiggly line at a time ✏️
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-sm font-semibold">
                <div className="flex items-center gap-2 bg-pink-100 border-2 border-black px-3 py-1.5" style={{
                  borderRadius: '6px 10px 8px 12px',
                  transform: 'rotate(-1deg)',
                  boxShadow: '2px 2px 0px rgba(0,0,0,0.15)'
                }}>
                  <span>📍</span>
                  <span>Pencilvania, USA</span>
                </div>
                <div className="flex items-center gap-2 bg-green-100 border-2 border-black px-3 py-1.5" style={{
                  borderRadius: '10px 8px 12px 6px',
                  transform: 'rotate(0.5deg)',
                  boxShadow: '2px 2px 0px rgba(0,0,0,0.15)'
                }}>
                  <span>🔗</span>
                  <span>sketchmcgraw.art</span>
                </div>
                <div className="flex items-center gap-2 bg-yellow-100 border-2 border-black px-3 py-1.5" style={{
                  borderRadius: '8px 12px 6px 10px',
                  transform: 'rotate(-0.5deg)',
                  boxShadow: '2px 2px 0px rgba(0,0,0,0.15)'
                }}>
                  <span>📅</span>
                  <span>Joined Mar 2020</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Sketches', value: '1,247', bg: 'bg-red-100' },
              { label: 'Followers', value: '34.2k', bg: 'bg-blue-100' },
              { label: 'Following', value: '892', bg: 'bg-green-100' },
              { label: 'Doodles', value: '∞', bg: 'bg-yellow-100' }
            ].map((stat, i) => (
              <div key={i} className={`${stat.bg} border-3 border-black p-6`} style={{
                borderRadius: `${10 + i * 2}px ${12 - i}px ${8 + i}px ${15 - i * 2}px`,
                transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)`,
                boxShadow: '4px 4px 0px rgba(0,0,0,0.2)'
              }}>
                <div className="text-3xl font-bold text-gray-900 mb-1" style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.1)' }}>
                  {stat.value}
                </div>
                <div className="text-gray-700 text-sm font-bold uppercase">{stat.label}</div>
                <div className="absolute top-1 right-1 w-3 h-3 border-2 border-black" style={{
                  borderRadius: '50% 45% 55% 50%'
                }}></div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="bg-white border-b-4 border-black mb-8" style={{
            borderBottomStyle: 'dashed'
          }}>
            <div className="flex gap-6">
              {['Gallery', 'Sketches', 'WIP', 'About'].map((tab, i) => (
                <button key={i} className={`pb-3 font-bold text-sm uppercase tracking-wide transition-all ${
                  i === 0
                    ? 'border-b-4 border-black -mb-1 text-black'
                    : 'text-gray-500 hover:text-gray-800'
                }`} style={i === 0 ? { transform: 'rotate(-0.5deg)' } : {}}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="space-y-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white border-3 border-black p-6" style={{
                borderRadius: `${12 + i}px ${15 - i}px ${10 + i * 2}px ${13 - i}px`,
                transform: `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)`,
                boxShadow: '5px 5px 0px rgba(0,0,0,0.15)'
              }}>
                <div className="flex gap-4">
                  <div className={`w-14 h-14 flex-shrink-0 border-3 border-black ${
                    i % 3 === 0 ? 'bg-pink-200' : i % 3 === 1 ? 'bg-blue-200' : 'bg-green-200'
                  }`} style={{
                    borderRadius: '45% 55% 50% 50%',
                    transform: `rotate(${-5 + i * 3}deg)`,
                    boxShadow: '3px 3px 0px rgba(0,0,0,0.15)'
                  }}></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-bold text-gray-900">Sketch McGraw</span>
                      <span className="text-gray-600 text-sm">@sketchmcgraw</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500 text-sm">{i + 2}h ago</span>
                    </div>
                    <p className="text-gray-800 mb-4 leading-relaxed">
                      {i === 0 && "Just finished a new sketch series! There's something magical about pencil on paper. Digital is great, but nothing beats the texture of real graphite. ✏️✨"}
                      {i === 1 && "Pro tip: Embrace the imperfect lines. That's where the character lives. A perfectly straight line drawn by hand tells a story that a ruler never could. 📐❌"}
                      {i === 2 && "Working on a commission today. The client wants 'sketchy but refined' - my favorite kind of challenge! Sometimes messiness is the goal. 🎨"}
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="aspect-square bg-gray-100 border-3 border-black" style={{
                        borderRadius: '8px 12px 10px 15px',
                        transform: 'rotate(-1deg)',
                        boxShadow: '3px 3px 0px rgba(0,0,0,0.1)'
                      }}></div>
                      <div className="aspect-square bg-gray-100 border-3 border-black" style={{
                        borderRadius: '12px 10px 15px 8px',
                        transform: 'rotate(1deg)',
                        boxShadow: '3px 3px 0px rgba(0,0,0,0.1)'
                      }}></div>
                    </div>
                    <div className="flex gap-6 text-gray-700 text-sm font-bold">
                      <button className="flex items-center gap-2 hover:text-black transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>{42 + i * 15}</span>
                      </button>
                      <button className="flex items-center gap-2 hover:text-black transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <span>{18 + i * 6}</span>
                      </button>
                      <button className="flex items-center gap-2 hover:text-black transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span>{234 + i * 67}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
