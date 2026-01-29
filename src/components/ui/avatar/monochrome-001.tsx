export default function MonochromeAvatar() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Monochrome Avatars</h1>
          <p className="text-gray-600">Black and white avatar components</p>
        </div>

        {/* Circle Avatars */}
        <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Circle Avatars</h2>
          <div className="flex flex-wrap gap-6 items-end">
            <div className="relative group">
              <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white font-semibold border-2 border-gray-800 shadow-md hover:shadow-lg transition-all cursor-pointer">
                JD
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-600 rounded-full border-2 border-white"></div>
            </div>

            <div className="relative group">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center text-white font-semibold border-2 border-gray-700 shadow-lg hover:shadow-xl transition-all cursor-pointer">
                SK
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gray-600 rounded-full border-2 border-white"></div>
            </div>

            <div className="relative group">
              <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center text-white font-semibold text-lg border-2 border-gray-600 shadow-xl hover:shadow-2xl transition-all cursor-pointer">
                AL
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gray-900 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold">
                3
              </div>
            </div>

            <div className="relative group">
              <div className="w-24 h-24 rounded-full bg-gray-600 flex items-center justify-center text-white font-semibold text-xl border-3 border-gray-500 shadow-2xl hover:shadow-2xl transition-all cursor-pointer">
                MK
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-gray-600 rounded-full border-2 border-white"></div>
            </div>
          </div>
        </section>

        {/* Square Avatars */}
        <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Square Avatars</h2>
          <div className="flex flex-wrap gap-6 items-end">
            <div className="relative group">
              <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center text-white font-semibold border-2 border-gray-800 shadow-md hover:shadow-lg transition-all cursor-pointer">
                TC
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-600 rounded-full border-2 border-white"></div>
            </div>

            <div className="relative group">
              <div className="w-16 h-16 rounded-lg bg-gray-800 flex items-center justify-center text-white font-semibold border-2 border-gray-700 shadow-lg hover:shadow-xl transition-all cursor-pointer">
                RJ
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-gray-600 rounded-full border-2 border-white"></div>
            </div>

            <div className="relative group">
              <div className="w-20 h-20 rounded-lg bg-gray-700 flex items-center justify-center text-white font-semibold text-lg border-2 border-gray-600 shadow-xl hover:shadow-2xl transition-all cursor-pointer">
                BW
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-gray-600 rounded-full border-2 border-white"></div>
            </div>

            <div className="relative group">
              <div className="w-24 h-24 rounded-lg bg-gray-600 flex items-center justify-center text-white font-semibold text-xl border-3 border-gray-500 shadow-2xl hover:shadow-2xl transition-all cursor-pointer">
                LN
              </div>
              <div className="absolute -top-1 -right-1 w-7 h-7 bg-gray-900 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold">
                5
              </div>
            </div>
          </div>
        </section>

        {/* Avatar Groups */}
        <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Avatar Groups</h2>

          <div className="space-y-8">
            {/* Stacked Group */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Stacked Group</h3>
              <div className="flex -space-x-4">
                {[
                  { initials: 'JD', bg: 'bg-gray-900' },
                  { initials: 'SK', bg: 'bg-gray-800' },
                  { initials: 'AL', bg: 'bg-gray-700' },
                  { initials: 'MK', bg: 'bg-gray-600' },
                  { initials: '+5', bg: 'bg-gray-500' },
                ].map((avatar, i) => (
                  <div
                    key={i}
                    className={`w-14 h-14 rounded-full ${avatar.bg} flex items-center justify-center text-white font-semibold border-3 border-white shadow-lg hover:scale-110 hover:z-10 transition-transform cursor-pointer`}
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
                  { initials: 'TC', bg: 'bg-gray-900' },
                  { initials: 'RJ', bg: 'bg-gray-800' },
                  { initials: 'BW', bg: 'bg-gray-700' },
                  { initials: 'LN', bg: 'bg-gray-600' },
                  { initials: 'PK', bg: 'bg-gray-500' },
                  { initials: 'QM', bg: 'bg-gray-800' },
                  { initials: 'WX', bg: 'bg-gray-700' },
                  { initials: 'YZ', bg: 'bg-gray-900' },
                ].map((avatar, i) => (
                  <div
                    key={i}
                    className={`w-16 h-16 rounded-full ${avatar.bg} flex items-center justify-center text-white font-semibold border-2 border-white shadow-lg hover:scale-110 transition-transform cursor-pointer`}
                  >
                    {avatar.initials}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Status Indicators */}
        <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Status Indicators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center text-white font-semibold text-lg border-2 border-gray-800 shadow-xl">
                  ON
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gray-600 rounded-full border-2 border-white"></div>
              </div>
              <p className="text-sm font-semibold text-gray-700">Online</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center text-white font-semibold text-lg border-2 border-gray-600 shadow-xl">
                  AW
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gray-500 rounded-full border-2 border-white"></div>
              </div>
              <p className="text-sm font-semibold text-gray-700">Away</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center text-white font-semibold text-lg border-2 border-gray-700 shadow-xl">
                  BS
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gray-600 rounded-full border-2 border-white"></div>
              </div>
              <p className="text-sm font-semibold text-gray-700">Busy</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="w-20 h-20 rounded-full bg-gray-400 flex items-center justify-center text-gray-600 font-semibold text-lg border-2 border-gray-300 shadow-xl opacity-60">
                  OF
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gray-400 rounded-full border-2 border-white"></div>
              </div>
              <p className="text-sm font-semibold text-gray-700">Offline</p>
            </div>
          </div>
        </section>

        {/* Responsive Sizes */}
        <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Responsive Sizes</h2>
          <div className="flex flex-wrap gap-6 items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white text-xs font-semibold border border-gray-800 shadow-md hover:shadow-lg transition-all cursor-pointer">
              XS
            </div>
            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white text-sm font-semibold border-2 border-gray-700 shadow-lg hover:shadow-xl transition-all cursor-pointer">
              SM
            </div>
            <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center text-white text-base font-semibold border-2 border-gray-600 shadow-xl hover:shadow-2xl transition-all cursor-pointer">
              MD
            </div>
            <div className="w-20 h-20 rounded-full bg-gray-600 flex items-center justify-center text-white text-lg font-semibold border-2 border-gray-500 shadow-xl hover:shadow-2xl transition-all cursor-pointer">
              LG
            </div>
            <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center text-white text-xl font-semibold border-3 border-gray-600 shadow-2xl hover:shadow-2xl transition-all cursor-pointer">
              XL
            </div>
            <div className="w-32 h-32 rounded-full bg-gray-800 flex items-center justify-center text-white text-2xl font-semibold border-4 border-gray-700 shadow-2xl hover:shadow-2xl transition-all cursor-pointer">
              2XL
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
