export default function PlayfulAvatar() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-purple-600 mb-2">Playful Avatars</h1>
          <p className="text-gray-600">Fun and bouncy avatar components</p>
        </div>

        {/* Basic Avatars - Circle */}
        <section className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-purple-300">
          <h2 className="text-2xl font-bold text-purple-600 mb-6">Circle Avatars</h2>
          <div className="flex flex-wrap gap-6 items-end">
            <div className="relative group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center text-white font-bold transform transition-transform hover:scale-110 hover:rotate-12 cursor-pointer shadow-lg">
                JD
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
            </div>

            <div className="relative group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center text-white font-bold transform transition-transform hover:scale-110 hover:rotate-12 cursor-pointer shadow-xl">
                SK
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
            </div>

            <div className="relative group">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold text-lg transform transition-transform hover:scale-110 hover:rotate-12 cursor-pointer shadow-2xl">
                AL
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs">
                3
              </div>
            </div>

            <div className="relative group">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center text-white font-bold text-xl transform transition-transform hover:scale-110 hover:rotate-12 cursor-pointer shadow-2xl">
                MK
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-yellow-400 rounded-full border-2 border-white animate-bounce"></div>
            </div>
          </div>
        </section>

        {/* Square Avatars */}
        <section className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-blue-300">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Square Avatars</h2>
          <div className="flex flex-wrap gap-6 items-end">
            <div className="relative group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-400 to-pink-400 flex items-center justify-center text-white font-bold transform transition-transform hover:scale-110 hover:-rotate-6 cursor-pointer shadow-lg">
                TC
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
            </div>

            <div className="relative group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-400 flex items-center justify-center text-white font-bold transform transition-transform hover:scale-110 hover:-rotate-6 cursor-pointer shadow-xl">
                RJ
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-orange-400 rounded-full border-2 border-white"></div>
            </div>

            <div className="relative group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center text-white font-bold text-lg transform transition-transform hover:scale-110 hover:-rotate-6 cursor-pointer shadow-2xl">
                BW
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-pink-400 rounded-full border-2 border-white"></div>
            </div>

            <div className="relative group">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-400 flex items-center justify-center text-white font-bold text-xl transform transition-transform hover:scale-110 hover:-rotate-6 cursor-pointer shadow-2xl">
                LN
              </div>
              <div className="absolute -top-1 -right-1 w-7 h-7 bg-red-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs">
                5
              </div>
            </div>
          </div>
        </section>

        {/* Avatar Groups */}
        <section className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-pink-300">
          <h2 className="text-2xl font-bold text-pink-600 mb-6">Avatar Groups</h2>

          <div className="space-y-8">
            {/* Stacked Group */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Stacked Group</h3>
              <div className="flex -space-x-4">
                {[
                  { initials: 'JD', from: 'from-pink-400', to: 'to-purple-400' },
                  { initials: 'SK', from: 'from-blue-400', to: 'to-cyan-400' },
                  { initials: 'AL', from: 'from-green-400', to: 'to-teal-400' },
                  { initials: 'MK', from: 'from-yellow-400', to: 'to-orange-400' },
                  { initials: '+5', from: 'from-gray-400', to: 'to-gray-500' },
                ].map((avatar, i) => (
                  <div
                    key={i}
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${avatar.from} ${avatar.to} flex items-center justify-center text-white font-bold border-4 border-white transform transition-transform hover:scale-125 hover:z-10 cursor-pointer shadow-xl hover:rotate-6`}
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
                  { initials: 'TC', from: 'from-red-400', to: 'to-pink-400' },
                  { initials: 'RJ', from: 'from-purple-400', to: 'to-indigo-400' },
                  { initials: 'BW', from: 'from-teal-400', to: 'to-cyan-400' },
                  { initials: 'LN', from: 'from-amber-400', to: 'to-yellow-400' },
                  { initials: 'PK', from: 'from-green-400', to: 'to-emerald-400' },
                  { initials: 'QM', from: 'from-orange-400', to: 'to-red-400' },
                  { initials: 'WX', from: 'from-blue-400', to: 'to-purple-400' },
                  { initials: 'YZ', from: 'from-pink-400', to: 'to-rose-400' },
                ].map((avatar, i) => (
                  <div
                    key={i}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${avatar.from} ${avatar.to} flex items-center justify-center text-white font-bold transform transition-transform hover:scale-110 cursor-pointer shadow-xl hover:rotate-12`}
                  >
                    {avatar.initials}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Status Indicators */}
        <section className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-green-300">
          <h2 className="text-2xl font-bold text-green-600 mb-6">Status Indicators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center text-white font-bold text-lg shadow-2xl">
                  ON
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-3 border-white animate-pulse"></div>
              </div>
              <p className="text-sm font-semibold text-gray-600">Online</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center text-white font-bold text-lg shadow-2xl">
                  AW
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full border-3 border-white"></div>
              </div>
              <p className="text-sm font-semibold text-gray-600">Away</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-400 to-pink-400 flex items-center justify-center text-white font-bold text-lg shadow-2xl">
                  BS
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-3 border-white"></div>
              </div>
              <p className="text-sm font-semibold text-gray-600">Busy</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center text-white font-bold text-lg shadow-2xl opacity-60">
                  OF
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gray-400 rounded-full border-3 border-white"></div>
              </div>
              <p className="text-sm font-semibold text-gray-600">Offline</p>
            </div>
          </div>
        </section>

        {/* Responsive Showcase */}
        <section className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-yellow-300">
          <h2 className="text-2xl font-bold text-yellow-600 mb-6">Responsive Sizes</h2>
          <div className="flex flex-wrap gap-6 items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center text-white text-xs font-bold transform hover:scale-110 hover:rotate-12 cursor-pointer shadow-lg">
              XS
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white text-sm font-bold transform hover:scale-110 hover:rotate-12 cursor-pointer shadow-xl">
              SM
            </div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center text-white text-base font-bold transform hover:scale-110 hover:rotate-12 cursor-pointer shadow-xl">
              MD
            </div>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center text-white text-lg font-bold transform hover:scale-110 hover:rotate-12 cursor-pointer shadow-2xl">
              LG
            </div>
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-xl font-bold transform hover:scale-110 hover:rotate-12 cursor-pointer shadow-2xl">
              XL
            </div>
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-red-400 to-rose-400 flex items-center justify-center text-white text-2xl font-bold transform hover:scale-110 hover:rotate-12 cursor-pointer shadow-2xl">
              2XL
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
