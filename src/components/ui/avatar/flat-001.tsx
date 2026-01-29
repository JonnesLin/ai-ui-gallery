export default function FlatAvatar() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Flat Avatars</h1>
          <p className="text-gray-600">Flat design avatar components</p>
        </div>

        {/* Circle Avatars */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Circle Avatars</h2>
          <div className="flex flex-wrap gap-6 items-end">
            <div className="relative group">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold cursor-pointer hover:bg-blue-600 transition-colors">
                JD
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>

            <div className="relative group">
              <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center text-white font-semibold cursor-pointer hover:bg-purple-600 transition-colors">
                SK
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>

            <div className="relative group">
              <div className="w-20 h-20 rounded-full bg-pink-500 flex items-center justify-center text-white font-semibold text-lg cursor-pointer hover:bg-pink-600 transition-colors">
                AL
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold">
                3
              </div>
            </div>

            <div className="relative group">
              <div className="w-24 h-24 rounded-full bg-teal-500 flex items-center justify-center text-white font-semibold text-xl cursor-pointer hover:bg-teal-600 transition-colors">
                MK
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
          </div>
        </section>

        {/* Square Avatars */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Square Avatars</h2>
          <div className="flex flex-wrap gap-6 items-end">
            <div className="relative group">
              <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center text-white font-semibold cursor-pointer hover:bg-orange-600 transition-colors">
                TC
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>

            <div className="relative group">
              <div className="w-16 h-16 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-semibold cursor-pointer hover:bg-indigo-600 transition-colors">
                RJ
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>

            <div className="relative group">
              <div className="w-20 h-20 rounded-lg bg-cyan-500 flex items-center justify-center text-white font-semibold text-lg cursor-pointer hover:bg-cyan-600 transition-colors">
                BW
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
            </div>

            <div className="relative group">
              <div className="w-24 h-24 rounded-lg bg-amber-500 flex items-center justify-center text-white font-semibold text-xl cursor-pointer hover:bg-amber-600 transition-colors">
                LN
              </div>
              <div className="absolute -top-1 -right-1 w-7 h-7 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold">
                5
              </div>
            </div>
          </div>
        </section>

        {/* Avatar Groups */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Avatar Groups</h2>

          <div className="space-y-8">
            {/* Stacked Group */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Stacked Group</h3>
              <div className="flex -space-x-4">
                {[
                  { initials: 'JD', bg: 'bg-blue-500', hover: 'hover:bg-blue-600' },
                  { initials: 'SK', bg: 'bg-purple-500', hover: 'hover:bg-purple-600' },
                  { initials: 'AL', bg: 'bg-pink-500', hover: 'hover:bg-pink-600' },
                  { initials: 'MK', bg: 'bg-teal-500', hover: 'hover:bg-teal-600' },
                  { initials: '+5', bg: 'bg-gray-500', hover: 'hover:bg-gray-600' },
                ].map((avatar, i) => (
                  <div
                    key={i}
                    className={`w-14 h-14 rounded-full ${avatar.bg} flex items-center justify-center text-white font-semibold border-3 border-white hover:scale-110 hover:z-10 transition-all cursor-pointer ${avatar.hover}`}
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
                  { initials: 'TC', bg: 'bg-orange-500', hover: 'hover:bg-orange-600' },
                  { initials: 'RJ', bg: 'bg-indigo-500', hover: 'hover:bg-indigo-600' },
                  { initials: 'BW', bg: 'bg-cyan-500', hover: 'hover:bg-cyan-600' },
                  { initials: 'LN', bg: 'bg-amber-500', hover: 'hover:bg-amber-600' },
                  { initials: 'PK', bg: 'bg-emerald-500', hover: 'hover:bg-emerald-600' },
                  { initials: 'QM', bg: 'bg-rose-500', hover: 'hover:bg-rose-600' },
                  { initials: 'WX', bg: 'bg-violet-500', hover: 'hover:bg-violet-600' },
                  { initials: 'YZ', bg: 'bg-fuchsia-500', hover: 'hover:bg-fuchsia-600' },
                ].map((avatar, i) => (
                  <div
                    key={i}
                    className={`w-16 h-16 rounded-full ${avatar.bg} flex items-center justify-center text-white font-semibold hover:scale-110 transition-all cursor-pointer ${avatar.hover}`}
                  >
                    {avatar.initials}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Status Indicators */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Status Indicators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold text-lg">
                  ON
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <p className="text-sm font-semibold text-gray-700">Online</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center text-white font-semibold text-lg">
                  AW
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full border-2 border-white"></div>
              </div>
              <p className="text-sm font-semibold text-gray-700">Away</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white font-semibold text-lg">
                  BS
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-2 border-white"></div>
              </div>
              <p className="text-sm font-semibold text-gray-700">Busy</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="w-20 h-20 rounded-full bg-gray-400 flex items-center justify-center text-white font-semibold text-lg opacity-60">
                  OF
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gray-400 rounded-full border-2 border-white"></div>
              </div>
              <p className="text-sm font-semibold text-gray-700">Offline</p>
            </div>
          </div>
        </section>

        {/* Responsive Sizes */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Responsive Sizes</h2>
          <div className="flex flex-wrap gap-6 items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-semibold cursor-pointer hover:bg-blue-600 transition-colors">
              XS
            </div>
            <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-semibold cursor-pointer hover:bg-purple-600 transition-colors">
              SM
            </div>
            <div className="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center text-white text-base font-semibold cursor-pointer hover:bg-pink-600 transition-colors">
              MD
            </div>
            <div className="w-20 h-20 rounded-full bg-teal-500 flex items-center justify-center text-white text-lg font-semibold cursor-pointer hover:bg-teal-600 transition-colors">
              LG
            </div>
            <div className="w-24 h-24 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl font-semibold cursor-pointer hover:bg-orange-600 transition-colors">
              XL
            </div>
            <div className="w-32 h-32 rounded-full bg-indigo-500 flex items-center justify-center text-white text-2xl font-semibold cursor-pointer hover:bg-indigo-600 transition-colors">
              2XL
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
