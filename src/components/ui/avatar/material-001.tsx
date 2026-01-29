export default function MaterialAvatar() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Material Avatars</h1>
          <p className="text-gray-600">Material Design avatar components</p>
        </div>

        {/* Circle Avatars */}
        <section className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Circle Avatars</h2>
          <div className="flex flex-wrap gap-6 items-end">
            <div className="relative group">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium cursor-pointer hover:shadow-lg transition-shadow">
                JD
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
            </div>

            <div className="relative group">
              <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium cursor-pointer hover:shadow-lg transition-shadow">
                SK
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
            </div>

            <div className="relative group">
              <div className="w-20 h-20 rounded-full bg-pink-600 flex items-center justify-center text-white font-medium text-lg cursor-pointer hover:shadow-xl transition-shadow">
                AL
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-600 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-medium shadow-md">
                3
              </div>
            </div>

            <div className="relative group">
              <div className="w-24 h-24 rounded-full bg-teal-600 flex items-center justify-center text-white font-medium text-xl cursor-pointer hover:shadow-xl transition-shadow">
                MK
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full border-2 border-white shadow-md"></div>
            </div>
          </div>
        </section>

        {/* Square Avatars */}
        <section className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Square Avatars</h2>
          <div className="flex flex-wrap gap-6 items-end">
            <div className="relative group">
              <div className="w-12 h-12 rounded bg-orange-600 flex items-center justify-center text-white font-medium cursor-pointer hover:shadow-lg transition-shadow">
                TC
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
            </div>

            <div className="relative group">
              <div className="w-16 h-16 rounded bg-indigo-600 flex items-center justify-center text-white font-medium cursor-pointer hover:shadow-lg transition-shadow">
                RJ
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
            </div>

            <div className="relative group">
              <div className="w-20 h-20 rounded bg-cyan-600 flex items-center justify-center text-white font-medium text-lg cursor-pointer hover:shadow-xl transition-shadow">
                BW
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-md"></div>
            </div>

            <div className="relative group">
              <div className="w-24 h-24 rounded bg-amber-600 flex items-center justify-center text-white font-medium text-xl cursor-pointer hover:shadow-xl transition-shadow">
                LN
              </div>
              <div className="absolute -top-1 -right-1 w-7 h-7 bg-red-600 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-medium shadow-md">
                5
              </div>
            </div>
          </div>
        </section>

        {/* Avatar Groups */}
        <section className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Avatar Groups</h2>

          <div className="space-y-8">
            {/* Stacked Group */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Stacked Group</h3>
              <div className="flex -space-x-4">
                {[
                  { initials: 'JD', bg: 'bg-blue-600' },
                  { initials: 'SK', bg: 'bg-purple-600' },
                  { initials: 'AL', bg: 'bg-pink-600' },
                  { initials: 'MK', bg: 'bg-teal-600' },
                  { initials: '+5', bg: 'bg-gray-600' },
                ].map((avatar, i) => (
                  <div
                    key={i}
                    className={`w-14 h-14 rounded-full ${avatar.bg} flex items-center justify-center text-white font-medium border-3 border-white shadow-md hover:scale-110 hover:z-10 hover:shadow-lg transition-all cursor-pointer`}
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
                  { initials: 'TC', bg: 'bg-orange-600' },
                  { initials: 'RJ', bg: 'bg-indigo-600' },
                  { initials: 'BW', bg: 'bg-cyan-600' },
                  { initials: 'LN', bg: 'bg-amber-600' },
                  { initials: 'PK', bg: 'bg-emerald-600' },
                  { initials: 'QM', bg: 'bg-rose-600' },
                  { initials: 'WX', bg: 'bg-violet-600' },
                  { initials: 'YZ', bg: 'bg-fuchsia-600' },
                ].map((avatar, i) => (
                  <div
                    key={i}
                    className={`w-16 h-16 rounded-full ${avatar.bg} flex items-center justify-center text-white font-medium shadow-md hover:scale-110 hover:shadow-lg transition-all cursor-pointer`}
                  >
                    {avatar.initials}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Status Indicators */}
        <section className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Status Indicators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="w-20 h-20 rounded-full bg-green-600 flex items-center justify-center text-white font-medium text-lg shadow-md">
                  ON
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-md"></div>
              </div>
              <p className="text-sm font-medium text-gray-700">Online</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="w-20 h-20 rounded-full bg-yellow-600 flex items-center justify-center text-white font-medium text-lg shadow-md">
                  AW
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full border-2 border-white shadow-md"></div>
              </div>
              <p className="text-sm font-medium text-gray-700">Away</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center text-white font-medium text-lg shadow-md">
                  BS
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-md"></div>
              </div>
              <p className="text-sm font-medium text-gray-700">Busy</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="w-20 h-20 rounded-full bg-gray-500 flex items-center justify-center text-white font-medium text-lg shadow-md opacity-60">
                  OF
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gray-400 rounded-full border-2 border-white shadow-md"></div>
              </div>
              <p className="text-sm font-medium text-gray-700">Offline</p>
            </div>
          </div>
        </section>

        {/* Responsive Sizes */}
        <section className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Responsive Sizes</h2>
          <div className="flex flex-wrap gap-6 items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-medium shadow-sm cursor-pointer hover:shadow-md transition-shadow">
              XS
            </div>
            <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white text-sm font-medium shadow-sm cursor-pointer hover:shadow-lg transition-shadow">
              SM
            </div>
            <div className="w-16 h-16 rounded-full bg-pink-600 flex items-center justify-center text-white text-base font-medium shadow-md cursor-pointer hover:shadow-lg transition-shadow">
              MD
            </div>
            <div className="w-20 h-20 rounded-full bg-teal-600 flex items-center justify-center text-white text-lg font-medium shadow-md cursor-pointer hover:shadow-xl transition-shadow">
              LG
            </div>
            <div className="w-24 h-24 rounded-full bg-orange-600 flex items-center justify-center text-white text-xl font-medium shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
              XL
            </div>
            <div className="w-32 h-32 rounded-full bg-indigo-600 flex items-center justify-center text-white text-2xl font-medium shadow-xl cursor-pointer hover:shadow-2xl transition-shadow">
              2XL
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
