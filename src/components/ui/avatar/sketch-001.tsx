export default function SketchAvatar() {
  return (
    <div className="min-h-screen bg-white p-8" style={{
      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 19px, #e5e7eb 19px, #e5e7eb 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, #e5e7eb 19px, #e5e7eb 20px)'
    }}>
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
            Sketch Avatars
          </h1>
          <p className="text-gray-600">Hand-drawn style avatar components</p>
        </div>

        {/* Circle Avatars */}
        <section className="bg-white p-8 shadow-lg relative" style={{
          border: '3px solid #1f2937',
          borderRadius: '8px',
          transform: 'rotate(-0.5deg)'
        }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
            Circle Avatars
          </h2>
          <div className="flex flex-wrap gap-6 items-end">
            <div className="relative group" style={{ transform: 'rotate(1deg)' }}>
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-gray-900 font-bold cursor-pointer" style={{
                border: '2px solid #1f2937',
                boxShadow: '2px 2px 0 #1f2937'
              }}>
                JD
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full" style={{
                border: '2px solid #1f2937'
              }}></div>
            </div>

            <div className="relative group" style={{ transform: 'rotate(-1deg)' }}>
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center text-gray-900 font-bold cursor-pointer" style={{
                border: '2px solid #1f2937',
                boxShadow: '3px 3px 0 #1f2937'
              }}>
                SK
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full" style={{
                border: '2px solid #1f2937'
              }}></div>
            </div>

            <div className="relative group" style={{ transform: 'rotate(0.5deg)' }}>
              <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center text-gray-900 font-bold text-lg cursor-pointer" style={{
                border: '3px solid #1f2937',
                boxShadow: '4px 4px 0 #1f2937'
              }}>
                AL
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-400 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{
                border: '2px solid #1f2937'
              }}>
                3
              </div>
            </div>

            <div className="relative group" style={{ transform: 'rotate(-0.5deg)' }}>
              <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center text-gray-900 font-bold text-xl cursor-pointer" style={{
                border: '3px solid #1f2937',
                boxShadow: '5px 5px 0 #1f2937'
              }}>
                MK
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-400 rounded-full" style={{
                border: '2px solid #1f2937'
              }}></div>
            </div>
          </div>
        </section>

        {/* Square Avatars */}
        <section className="bg-white p-8 shadow-lg relative" style={{
          border: '3px solid #1f2937',
          borderRadius: '8px',
          transform: 'rotate(0.5deg)'
        }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
            Square Avatars
          </h2>
          <div className="flex flex-wrap gap-6 items-end">
            <div className="relative group" style={{ transform: 'rotate(-1deg)' }}>
              <div className="w-12 h-12 rounded-md bg-orange-100 flex items-center justify-center text-gray-900 font-bold cursor-pointer" style={{
                border: '2px solid #1f2937',
                boxShadow: '2px 2px 0 #1f2937'
              }}>
                TC
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full" style={{
                border: '2px solid #1f2937'
              }}></div>
            </div>

            <div className="relative group" style={{ transform: 'rotate(1deg)' }}>
              <div className="w-16 h-16 rounded-md bg-teal-100 flex items-center justify-center text-gray-900 font-bold cursor-pointer" style={{
                border: '2px solid #1f2937',
                boxShadow: '3px 3px 0 #1f2937'
              }}>
                RJ
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full" style={{
                border: '2px solid #1f2937'
              }}></div>
            </div>

            <div className="relative group" style={{ transform: 'rotate(-0.5deg)' }}>
              <div className="w-20 h-20 rounded-md bg-indigo-100 flex items-center justify-center text-gray-900 font-bold text-lg cursor-pointer" style={{
                border: '3px solid #1f2937',
                boxShadow: '4px 4px 0 #1f2937'
              }}>
                BW
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full" style={{
                border: '2px solid #1f2937'
              }}></div>
            </div>

            <div className="relative group" style={{ transform: 'rotate(0.5deg)' }}>
              <div className="w-24 h-24 rounded-md bg-rose-100 flex items-center justify-center text-gray-900 font-bold text-xl cursor-pointer" style={{
                border: '3px solid #1f2937',
                boxShadow: '5px 5px 0 #1f2937'
              }}>
                LN
              </div>
              <div className="absolute -top-1 -right-1 w-7 h-7 bg-red-400 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{
                border: '2px solid #1f2937'
              }}>
                5
              </div>
            </div>
          </div>
        </section>

        {/* Avatar Groups */}
        <section className="bg-white p-8 shadow-lg relative" style={{
          border: '3px solid #1f2937',
          borderRadius: '8px',
          transform: 'rotate(-0.5deg)'
        }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
            Avatar Groups
          </h2>

          <div className="space-y-8">
            {/* Stacked Group */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Stacked Group</h3>
              <div className="flex -space-x-4">
                {[
                  { initials: 'JD', bg: 'bg-blue-100', rotate: 'rotate(1deg)' },
                  { initials: 'SK', bg: 'bg-yellow-100', rotate: 'rotate(-1deg)' },
                  { initials: 'AL', bg: 'bg-pink-100', rotate: 'rotate(0.5deg)' },
                  { initials: 'MK', bg: 'bg-purple-100', rotate: 'rotate(-0.5deg)' },
                  { initials: '+5', bg: 'bg-gray-100', rotate: 'rotate(1deg)' },
                ].map((avatar, i) => (
                  <div
                    key={i}
                    className={`w-14 h-14 rounded-full ${avatar.bg} flex items-center justify-center text-gray-900 font-bold hover:scale-110 hover:z-10 transition-transform cursor-pointer`}
                    style={{
                      border: '3px solid #1f2937',
                      boxShadow: '3px 3px 0 #1f2937',
                      transform: avatar.rotate
                    }}
                  >
                    {avatar.initials}
                  </div>
                ))}
              </div>
            </div>

            {/* Grid Group */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Grid Group</h3>
              <div className="grid grid-cols-4 gap-4 max-w-md">
                {[
                  { initials: 'TC', bg: 'bg-orange-100', rotate: 'rotate(-1deg)' },
                  { initials: 'RJ', bg: 'bg-teal-100', rotate: 'rotate(1deg)' },
                  { initials: 'BW', bg: 'bg-indigo-100', rotate: 'rotate(-0.5deg)' },
                  { initials: 'LN', bg: 'bg-rose-100', rotate: 'rotate(0.5deg)' },
                  { initials: 'PK', bg: 'bg-green-100', rotate: 'rotate(1deg)' },
                  { initials: 'QM', bg: 'bg-amber-100', rotate: 'rotate(-1deg)' },
                  { initials: 'WX', bg: 'bg-violet-100', rotate: 'rotate(0.5deg)' },
                  { initials: 'YZ', bg: 'bg-fuchsia-100', rotate: 'rotate(-0.5deg)' },
                ].map((avatar, i) => (
                  <div
                    key={i}
                    className={`w-16 h-16 rounded-full ${avatar.bg} flex items-center justify-center text-gray-900 font-bold hover:scale-110 transition-transform cursor-pointer`}
                    style={{
                      border: '2px solid #1f2937',
                      boxShadow: '3px 3px 0 #1f2937',
                      transform: avatar.rotate
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
        <section className="bg-white p-8 shadow-lg relative" style={{
          border: '3px solid #1f2937',
          borderRadius: '8px',
          transform: 'rotate(0.5deg)'
        }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
            Status Indicators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative inline-block mb-3" style={{ transform: 'rotate(-1deg)' }}>
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-gray-900 font-bold text-lg" style={{
                  border: '3px solid #1f2937',
                  boxShadow: '4px 4px 0 #1f2937'
                }}>
                  ON
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full" style={{
                  border: '2px solid #1f2937'
                }}></div>
              </div>
              <p className="text-sm font-semibold text-gray-700">Online</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-3" style={{ transform: 'rotate(1deg)' }}>
                <div className="w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center text-gray-900 font-bold text-lg" style={{
                  border: '3px solid #1f2937',
                  boxShadow: '4px 4px 0 #1f2937'
                }}>
                  AW
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full" style={{
                  border: '2px solid #1f2937'
                }}></div>
              </div>
              <p className="text-sm font-semibold text-gray-700">Away</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-3" style={{ transform: 'rotate(-0.5deg)' }}>
                <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center text-gray-900 font-bold text-lg" style={{
                  border: '3px solid #1f2937',
                  boxShadow: '4px 4px 0 #1f2937'
                }}>
                  BS
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-400 rounded-full" style={{
                  border: '2px solid #1f2937'
                }}></div>
              </div>
              <p className="text-sm font-semibold text-gray-700">Busy</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-3" style={{ transform: 'rotate(0.5deg)' }}>
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-lg opacity-60" style={{
                  border: '3px solid #1f2937',
                  boxShadow: '4px 4px 0 #1f2937'
                }}>
                  OF
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gray-400 rounded-full" style={{
                  border: '2px solid #1f2937'
                }}></div>
              </div>
              <p className="text-sm font-semibold text-gray-700">Offline</p>
            </div>
          </div>
        </section>

        {/* Responsive Sizes */}
        <section className="bg-white p-8 shadow-lg relative" style={{
          border: '3px solid #1f2937',
          borderRadius: '8px',
          transform: 'rotate(-0.5deg)'
        }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
            Responsive Sizes
          </h2>
          <div className="flex flex-wrap gap-6 items-center justify-center">
            {[
              { size: 'w-8 h-8', text: 'text-xs', label: 'XS', rotate: 'rotate(1deg)', shadow: '1px 1px 0' },
              { size: 'w-12 h-12', text: 'text-sm', label: 'SM', rotate: 'rotate(-1deg)', shadow: '2px 2px 0' },
              { size: 'w-16 h-16', text: 'text-base', label: 'MD', rotate: 'rotate(0.5deg)', shadow: '3px 3px 0' },
              { size: 'w-20 h-20', text: 'text-lg', label: 'LG', rotate: 'rotate(-0.5deg)', shadow: '4px 4px 0' },
              { size: 'w-24 h-24', text: 'text-xl', label: 'XL', rotate: 'rotate(1deg)', shadow: '5px 5px 0' },
              { size: 'w-32 h-32', text: 'text-2xl', label: '2XL', rotate: 'rotate(-1deg)', shadow: '6px 6px 0' },
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.size} rounded-full bg-blue-100 flex items-center justify-center text-gray-900 ${item.text} font-bold cursor-pointer`}
                style={{
                  border: '2px solid #1f2937',
                  boxShadow: `${item.shadow} #1f2937`,
                  transform: item.rotate
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
