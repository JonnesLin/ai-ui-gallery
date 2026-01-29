export default function ThreeDAvatar() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-200 via-gray-200 to-zinc-200 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}>
            3D Avatars
          </h1>
          <p className="text-gray-600">Three-dimensional avatar components</p>
        </div>

        {/* Circle Avatars */}
        <section className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Circle Avatars</h2>
          <div className="flex flex-wrap gap-6 items-end">
            <div className="relative group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center text-white font-bold border-2 border-blue-700" style={{
                boxShadow: '0 4px 8px rgba(0,0,0,0.3), inset 0 -2px 4px rgba(0,0,0,0.2), inset 0 2px 4px rgba(255,255,255,0.4)'
              }}>
                JD
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white" style={{
                boxShadow: '0 2px 4px rgba(0,0,0,0.3), inset 0 -1px 2px rgba(0,0,0,0.2)'
              }}></div>
            </div>

            <div className="relative group cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 flex items-center justify-center text-white font-bold border-2 border-purple-700" style={{
                boxShadow: '0 6px 12px rgba(0,0,0,0.3), inset 0 -3px 6px rgba(0,0,0,0.2), inset 0 3px 6px rgba(255,255,255,0.4)'
              }}>
                SK
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white" style={{
                boxShadow: '0 2px 4px rgba(0,0,0,0.3), inset 0 -1px 2px rgba(0,0,0,0.2)'
              }}></div>
            </div>

            <div className="relative group cursor-pointer">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 flex items-center justify-center text-white font-bold text-lg border-3 border-pink-700" style={{
                boxShadow: '0 8px 16px rgba(0,0,0,0.3), inset 0 -4px 8px rgba(0,0,0,0.2), inset 0 4px 8px rgba(255,255,255,0.4)'
              }}>
                AL
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-red-400 to-red-600 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold" style={{
                boxShadow: '0 3px 6px rgba(0,0,0,0.3), inset 0 -2px 4px rgba(0,0,0,0.2)'
              }}>
                3
              </div>
            </div>

            <div className="relative group cursor-pointer">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600 flex items-center justify-center text-white font-bold text-xl border-3 border-teal-700" style={{
                boxShadow: '0 10px 20px rgba(0,0,0,0.3), inset 0 -5px 10px rgba(0,0,0,0.2), inset 0 5px 10px rgba(255,255,255,0.4)'
              }}>
                MK
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white" style={{
                boxShadow: '0 3px 6px rgba(0,0,0,0.3), inset 0 -2px 4px rgba(0,0,0,0.2)'
              }}></div>
            </div>
          </div>
        </section>

        {/* Square Avatars */}
        <section className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Square Avatars</h2>
          <div className="flex flex-wrap gap-6 items-end">
            <div className="relative group cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 flex items-center justify-center text-white font-bold border-2 border-orange-700" style={{
                boxShadow: '0 4px 8px rgba(0,0,0,0.3), inset 0 -2px 4px rgba(0,0,0,0.2), inset 0 2px 4px rgba(255,255,255,0.4)'
              }}>
                TC
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white" style={{
                boxShadow: '0 2px 4px rgba(0,0,0,0.3), inset 0 -1px 2px rgba(0,0,0,0.2)'
              }}></div>
            </div>

            <div className="relative group cursor-pointer">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-600 flex items-center justify-center text-white font-bold border-2 border-indigo-700" style={{
                boxShadow: '0 6px 12px rgba(0,0,0,0.3), inset 0 -3px 6px rgba(0,0,0,0.2), inset 0 3px 6px rgba(255,255,255,0.4)'
              }}>
                RJ
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white" style={{
                boxShadow: '0 2px 4px rgba(0,0,0,0.3), inset 0 -1px 2px rgba(0,0,0,0.2)'
              }}></div>
            </div>

            <div className="relative group cursor-pointer">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-600 flex items-center justify-center text-white font-bold text-lg border-3 border-cyan-700" style={{
                boxShadow: '0 8px 16px rgba(0,0,0,0.3), inset 0 -4px 8px rgba(0,0,0,0.2), inset 0 4px 8px rgba(255,255,255,0.4)'
              }}>
                BW
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white" style={{
                boxShadow: '0 3px 6px rgba(0,0,0,0.3), inset 0 -2px 4px rgba(0,0,0,0.2)'
              }}></div>
            </div>

            <div className="relative group cursor-pointer">
              <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center text-white font-bold text-xl border-3 border-amber-700" style={{
                boxShadow: '0 10px 20px rgba(0,0,0,0.3), inset 0 -5px 10px rgba(0,0,0,0.2), inset 0 5px 10px rgba(255,255,255,0.4)'
              }}>
                LN
              </div>
              <div className="absolute -top-1 -right-1 w-7 h-7 bg-gradient-to-br from-red-400 to-red-600 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold" style={{
                boxShadow: '0 3px 6px rgba(0,0,0,0.3), inset 0 -2px 4px rgba(0,0,0,0.2)'
              }}>
                5
              </div>
            </div>
          </div>
        </section>

        {/* Avatar Groups */}
        <section className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Avatar Groups</h2>

          <div className="space-y-8">
            {/* Stacked Group */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Stacked Group</h3>
              <div className="flex -space-x-4">
                {[
                  { initials: 'JD', from: 'from-blue-400', via: 'via-blue-500', to: 'to-blue-600', border: 'border-blue-700' },
                  { initials: 'SK', from: 'from-purple-400', via: 'via-purple-500', to: 'to-purple-600', border: 'border-purple-700' },
                  { initials: 'AL', from: 'from-pink-400', via: 'via-pink-500', to: 'to-pink-600', border: 'border-pink-700' },
                  { initials: 'MK', from: 'from-teal-400', via: 'via-teal-500', to: 'to-teal-600', border: 'border-teal-700' },
                  { initials: '+5', from: 'from-gray-400', via: 'via-gray-500', to: 'to-gray-600', border: 'border-gray-700' },
                ].map((avatar, i) => (
                  <div
                    key={i}
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${avatar.from} ${avatar.via} ${avatar.to} flex items-center justify-center text-white font-bold border-3 ${avatar.border} hover:scale-110 hover:z-10 transition-transform cursor-pointer`}
                    style={{
                      boxShadow: '0 6px 12px rgba(0,0,0,0.3), inset 0 -3px 6px rgba(0,0,0,0.2), inset 0 3px 6px rgba(255,255,255,0.4)'
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
                  { initials: 'TC', from: 'from-orange-400', to: 'to-orange-600', border: 'border-orange-700' },
                  { initials: 'RJ', from: 'from-indigo-400', to: 'to-indigo-600', border: 'border-indigo-700' },
                  { initials: 'BW', from: 'from-cyan-400', to: 'to-cyan-600', border: 'border-cyan-700' },
                  { initials: 'LN', from: 'from-amber-400', to: 'to-amber-600', border: 'border-amber-700' },
                  { initials: 'PK', from: 'from-emerald-400', to: 'to-emerald-600', border: 'border-emerald-700' },
                  { initials: 'QM', from: 'from-rose-400', to: 'to-rose-600', border: 'border-rose-700' },
                  { initials: 'WX', from: 'from-violet-400', to: 'to-violet-600', border: 'border-violet-700' },
                  { initials: 'YZ', from: 'from-fuchsia-400', to: 'to-fuchsia-600', border: 'border-fuchsia-700' },
                ].map((avatar, i) => (
                  <div
                    key={i}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${avatar.from} ${avatar.to} flex items-center justify-center text-white font-bold border-2 ${avatar.border} hover:scale-110 transition-transform cursor-pointer`}
                    style={{
                      boxShadow: '0 6px 12px rgba(0,0,0,0.3), inset 0 -3px 6px rgba(0,0,0,0.2), inset 0 3px 6px rgba(255,255,255,0.4)'
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
        <section className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Status Indicators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 via-green-500 to-green-600 flex items-center justify-center text-white font-bold text-lg border-2 border-green-700" style={{
                  boxShadow: '0 8px 16px rgba(0,0,0,0.3), inset 0 -4px 8px rgba(0,0,0,0.2), inset 0 4px 8px rgba(255,255,255,0.4)'
                }}>
                  ON
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white" style={{
                  boxShadow: '0 3px 6px rgba(0,0,0,0.3), inset 0 -2px 4px rgba(0,0,0,0.2)'
                }}></div>
              </div>
              <p className="text-sm font-semibold text-gray-700">Online</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 flex items-center justify-center text-white font-bold text-lg border-2 border-yellow-700" style={{
                  boxShadow: '0 8px 16px rgba(0,0,0,0.3), inset 0 -4px 8px rgba(0,0,0,0.2), inset 0 4px 8px rgba(255,255,255,0.4)'
                }}>
                  AW
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full border-2 border-white" style={{
                  boxShadow: '0 3px 6px rgba(0,0,0,0.3), inset 0 -2px 4px rgba(0,0,0,0.2)'
                }}></div>
              </div>
              <p className="text-sm font-semibold text-gray-700">Away</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-400 via-red-500 to-red-600 flex items-center justify-center text-white font-bold text-lg border-2 border-red-700" style={{
                  boxShadow: '0 8px 16px rgba(0,0,0,0.3), inset 0 -4px 8px rgba(0,0,0,0.2), inset 0 4px 8px rgba(255,255,255,0.4)'
                }}>
                  BS
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-red-400 to-red-600 rounded-full border-2 border-white" style={{
                  boxShadow: '0 3px 6px rgba(0,0,0,0.3), inset 0 -2px 4px rgba(0,0,0,0.2)'
                }}></div>
              </div>
              <p className="text-sm font-semibold text-gray-700">Busy</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 flex items-center justify-center text-gray-600 font-bold text-lg border-2 border-gray-600 opacity-60" style={{
                  boxShadow: '0 8px 16px rgba(0,0,0,0.2), inset 0 -4px 8px rgba(0,0,0,0.1), inset 0 4px 8px rgba(255,255,255,0.3)'
                }}>
                  OF
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full border-2 border-white" style={{
                  boxShadow: '0 3px 6px rgba(0,0,0,0.2), inset 0 -2px 4px rgba(0,0,0,0.1)'
                }}></div>
              </div>
              <p className="text-sm font-semibold text-gray-700">Offline</p>
            </div>
          </div>
        </section>

        {/* Responsive Sizes */}
        <section className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Responsive Sizes</h2>
          <div className="flex flex-wrap gap-6 items-center justify-center">
            {[
              { size: 'w-8 h-8', text: 'text-xs', label: 'XS', shadow: '0 2px 4px' },
              { size: 'w-12 h-12', text: 'text-sm', label: 'SM', shadow: '0 4px 8px' },
              { size: 'w-16 h-16', text: 'text-base', label: 'MD', shadow: '0 6px 12px' },
              { size: 'w-20 h-20', text: 'text-lg', label: 'LG', shadow: '0 8px 16px' },
              { size: 'w-24 h-24', text: 'text-xl', label: 'XL', shadow: '0 10px 20px' },
              { size: 'w-32 h-32', text: 'text-2xl', label: '2XL', shadow: '0 12px 24px' },
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.size} rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center text-white ${item.text} font-bold border-2 border-blue-700 cursor-pointer`}
                style={{
                  boxShadow: `${item.shadow} rgba(0,0,0,0.3), inset 0 -${2 + i}px ${4 + i * 2}px rgba(0,0,0,0.2), inset 0 ${2 + i}px ${4 + i * 2}px rgba(255,255,255,0.4)`
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
