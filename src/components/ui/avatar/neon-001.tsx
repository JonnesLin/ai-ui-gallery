export default function NeonAvatar() {
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2" style={{
            color: '#fff',
            textShadow: '0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff'
          }}>
            Neon Avatars
          </h1>
          <p className="text-gray-400">Glowing neon avatar components</p>
        </div>

        {/* Circle Avatars */}
        <section className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 shadow-2xl">
          <h2 className="text-2xl font-bold mb-6" style={{
            color: '#0ff',
            textShadow: '0 0 10px #0ff'
          }}>
            Circle Avatars
          </h2>
          <div className="flex flex-wrap gap-6 items-end">
            <div className="relative group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-cyan-400 font-bold border-2 border-cyan-400" style={{
                boxShadow: '0 0 10px #0ff, 0 0 20px #0ff, inset 0 0 10px #0ff'
              }}>
                JD
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-lime-400 rounded-full border-2 border-black" style={{
                boxShadow: '0 0 10px #0f0, 0 0 20px #0f0'
              }}></div>
            </div>

            <div className="relative group cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center text-pink-400 font-bold border-2 border-pink-400" style={{
                boxShadow: '0 0 15px #f0f, 0 0 30px #f0f, inset 0 0 10px #f0f'
              }}>
                SK
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-lime-400 rounded-full border-2 border-black" style={{
                boxShadow: '0 0 10px #0f0, 0 0 20px #0f0'
              }}></div>
            </div>

            <div className="relative group cursor-pointer">
              <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center text-yellow-400 font-bold text-lg border-2 border-yellow-400" style={{
                boxShadow: '0 0 20px #ff0, 0 0 40px #ff0, inset 0 0 10px #ff0'
              }}>
                AL
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-2 border-black flex items-center justify-center text-white text-xs font-bold" style={{
                boxShadow: '0 0 10px #f00, 0 0 20px #f00'
              }}>
                3
              </div>
            </div>

            <div className="relative group cursor-pointer">
              <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center text-purple-400 font-bold text-xl border-2 border-purple-400" style={{
                boxShadow: '0 0 25px #90f, 0 0 50px #90f, inset 0 0 10px #90f'
              }}>
                MK
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-lime-400 rounded-full border-2 border-black" style={{
                boxShadow: '0 0 10px #0f0, 0 0 20px #0f0'
              }}></div>
            </div>
          </div>
        </section>

        {/* Square Avatars */}
        <section className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/30 shadow-2xl">
          <h2 className="text-2xl font-bold mb-6" style={{
            color: '#f0f',
            textShadow: '0 0 10px #f0f'
          }}>
            Square Avatars
          </h2>
          <div className="flex flex-wrap gap-6 items-end">
            <div className="relative group cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center text-cyan-400 font-bold border-2 border-cyan-400" style={{
                boxShadow: '0 0 10px #0ff, 0 0 20px #0ff, inset 0 0 10px #0ff'
              }}>
                TC
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-lime-400 rounded-full border-2 border-black" style={{
                boxShadow: '0 0 10px #0f0, 0 0 20px #0f0'
              }}></div>
            </div>

            <div className="relative group cursor-pointer">
              <div className="w-16 h-16 rounded-lg bg-black flex items-center justify-center text-lime-400 font-bold border-2 border-lime-400" style={{
                boxShadow: '0 0 15px #0f0, 0 0 30px #0f0, inset 0 0 10px #0f0'
              }}>
                RJ
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-lime-400 rounded-full border-2 border-black" style={{
                boxShadow: '0 0 10px #0f0, 0 0 20px #0f0'
              }}></div>
            </div>

            <div className="relative group cursor-pointer">
              <div className="w-20 h-20 rounded-lg bg-black flex items-center justify-center text-orange-400 font-bold text-lg border-2 border-orange-400" style={{
                boxShadow: '0 0 20px #f90, 0 0 40px #f90, inset 0 0 10px #f90'
              }}>
                BW
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-lime-400 rounded-full border-2 border-black" style={{
                boxShadow: '0 0 10px #0f0, 0 0 20px #0f0'
              }}></div>
            </div>

            <div className="relative group cursor-pointer">
              <div className="w-24 h-24 rounded-lg bg-black flex items-center justify-center text-blue-400 font-bold text-xl border-2 border-blue-400" style={{
                boxShadow: '0 0 25px #00f, 0 0 50px #00f, inset 0 0 10px #00f'
              }}>
                LN
              </div>
              <div className="absolute -top-1 -right-1 w-7 h-7 bg-red-500 rounded-full border-2 border-black flex items-center justify-center text-white text-xs font-bold" style={{
                boxShadow: '0 0 10px #f00, 0 0 20px #f00'
              }}>
                5
              </div>
            </div>
          </div>
        </section>

        {/* Avatar Groups */}
        <section className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/30 shadow-2xl">
          <h2 className="text-2xl font-bold mb-6" style={{
            color: '#ff0',
            textShadow: '0 0 10px #ff0'
          }}>
            Avatar Groups
          </h2>

          <div className="space-y-8">
            {/* Stacked Group */}
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-4">Stacked Group</h3>
              <div className="flex -space-x-4">
                {[
                  { initials: 'JD', color: 'text-cyan-400', border: 'border-cyan-400', shadow: '#0ff' },
                  { initials: 'SK', color: 'text-pink-400', border: 'border-pink-400', shadow: '#f0f' },
                  { initials: 'AL', color: 'text-yellow-400', border: 'border-yellow-400', shadow: '#ff0' },
                  { initials: 'MK', color: 'text-purple-400', border: 'border-purple-400', shadow: '#90f' },
                  { initials: '+5', color: 'text-gray-400', border: 'border-gray-400', shadow: '#666' },
                ].map((avatar, i) => (
                  <div
                    key={i}
                    className={`w-14 h-14 rounded-full bg-black flex items-center justify-center ${avatar.color} font-bold border-2 ${avatar.border} hover:scale-110 hover:z-10 transition-transform cursor-pointer`}
                    style={{
                      boxShadow: `0 0 15px ${avatar.shadow}, 0 0 30px ${avatar.shadow}, inset 0 0 10px ${avatar.shadow}`
                    }}
                  >
                    {avatar.initials}
                  </div>
                ))}
              </div>
            </div>

            {/* Grid Group */}
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-4">Grid Group</h3>
              <div className="grid grid-cols-4 gap-4 max-w-md">
                {[
                  { initials: 'TC', color: 'text-cyan-400', border: 'border-cyan-400', shadow: '#0ff' },
                  { initials: 'RJ', color: 'text-lime-400', border: 'border-lime-400', shadow: '#0f0' },
                  { initials: 'BW', color: 'text-orange-400', border: 'border-orange-400', shadow: '#f90' },
                  { initials: 'LN', color: 'text-blue-400', border: 'border-blue-400', shadow: '#00f' },
                  { initials: 'PK', color: 'text-green-400', border: 'border-green-400', shadow: '#0f0' },
                  { initials: 'QM', color: 'text-red-400', border: 'border-red-400', shadow: '#f00' },
                  { initials: 'WX', color: 'text-violet-400', border: 'border-violet-400', shadow: '#90f' },
                  { initials: 'YZ', color: 'text-fuchsia-400', border: 'border-fuchsia-400', shadow: '#f0f' },
                ].map((avatar, i) => (
                  <div
                    key={i}
                    className={`w-16 h-16 rounded-full bg-black flex items-center justify-center ${avatar.color} font-bold border-2 ${avatar.border} hover:scale-110 transition-transform cursor-pointer`}
                    style={{
                      boxShadow: `0 0 10px ${avatar.shadow}, 0 0 20px ${avatar.shadow}, inset 0 0 10px ${avatar.shadow}`
                    }}
                  >
                    {avatar.initials}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Status Indicators */}
        <section className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-lime-500/30 shadow-2xl">
          <h2 className="text-2xl font-bold mb-6" style={{
            color: '#0f0',
            textShadow: '0 0 10px #0f0'
          }}>
            Status Indicators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center text-lime-400 font-bold text-lg border-2 border-lime-400" style={{
                  boxShadow: '0 0 20px #0f0, 0 0 40px #0f0, inset 0 0 10px #0f0'
                }}>
                  ON
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-lime-400 rounded-full border-2 border-black animate-pulse" style={{
                  boxShadow: '0 0 10px #0f0, 0 0 20px #0f0'
                }}></div>
              </div>
              <p className="text-sm font-semibold text-gray-400">Online</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center text-yellow-400 font-bold text-lg border-2 border-yellow-400" style={{
                  boxShadow: '0 0 20px #ff0, 0 0 40px #ff0, inset 0 0 10px #ff0'
                }}>
                  AW
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full border-2 border-black" style={{
                  boxShadow: '0 0 10px #ff0, 0 0 20px #ff0'
                }}></div>
              </div>
              <p className="text-sm font-semibold text-gray-400">Away</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center text-red-400 font-bold text-lg border-2 border-red-400" style={{
                  boxShadow: '0 0 20px #f00, 0 0 40px #f00, inset 0 0 10px #f00'
                }}>
                  BS
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-400 rounded-full border-2 border-black" style={{
                  boxShadow: '0 0 10px #f00, 0 0 20px #f00'
                }}></div>
              </div>
              <p className="text-sm font-semibold text-gray-400">Busy</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center text-gray-500 font-bold text-lg border-2 border-gray-500 opacity-50" style={{
                  boxShadow: '0 0 10px #666, 0 0 20px #666'
                }}>
                  OF
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gray-500 rounded-full border-2 border-black" style={{
                  boxShadow: '0 0 5px #666'
                }}></div>
              </div>
              <p className="text-sm font-semibold text-gray-500">Offline</p>
            </div>
          </div>
        </section>

        {/* Responsive Sizes */}
        <section className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 shadow-2xl">
          <h2 className="text-2xl font-bold mb-6" style={{
            color: '#90f',
            textShadow: '0 0 10px #90f'
          }}>
            Responsive Sizes
          </h2>
          <div className="flex flex-wrap gap-6 items-center justify-center">
            {[
              { size: 'w-8 h-8', text: 'text-xs', label: 'XS', color: 'text-cyan-400', border: 'border-cyan-400', shadow: '#0ff' },
              { size: 'w-12 h-12', text: 'text-sm', label: 'SM', color: 'text-pink-400', border: 'border-pink-400', shadow: '#f0f' },
              { size: 'w-16 h-16', text: 'text-base', label: 'MD', color: 'text-yellow-400', border: 'border-yellow-400', shadow: '#ff0' },
              { size: 'w-20 h-20', text: 'text-lg', label: 'LG', color: 'text-lime-400', border: 'border-lime-400', shadow: '#0f0' },
              { size: 'w-24 h-24', text: 'text-xl', label: 'XL', color: 'text-purple-400', border: 'border-purple-400', shadow: '#90f' },
              { size: 'w-32 h-32', text: 'text-2xl', label: '2XL', color: 'text-orange-400', border: 'border-orange-400', shadow: '#f90' },
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.size} rounded-full bg-black flex items-center justify-center ${item.color} ${item.text} font-bold border-2 ${item.border} cursor-pointer`}
                style={{
                  boxShadow: `0 0 ${10 + i * 2}px ${item.shadow}, 0 0 ${20 + i * 4}px ${item.shadow}, inset 0 0 10px ${item.shadow}`
                }}
              >
                {item.label}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
