export default function NatureAvatar() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-2">Nature Avatars</h1>
          <p className="text-green-700">Organic and earth-inspired avatar components</p>
        </div>

        {/* Circle Avatars */}
        <section className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-green-200">
          <h2 className="text-2xl font-bold text-green-700 mb-6">Circle Avatars</h2>
          <div className="flex flex-wrap gap-6 items-end">
            <div className="relative group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-200 to-emerald-300 flex items-center justify-center text-green-800 font-semibold border-2 border-green-400 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                JD
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
            </div>

            <div className="relative group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-200 to-teal-300 flex items-center justify-center text-green-800 font-semibold border-2 border-emerald-400 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                SK
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
            </div>

            <div className="relative group">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-lime-200 to-green-300 flex items-center justify-center text-green-900 font-semibold text-lg border-2 border-lime-400 shadow-xl hover:shadow-2xl transition-shadow cursor-pointer">
                AL
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-amber-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold shadow-md">
                3
              </div>
            </div>

            <div className="relative group">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-200 to-cyan-300 flex items-center justify-center text-teal-900 font-semibold text-xl border-3 border-teal-400 shadow-2xl hover:shadow-2xl transition-shadow cursor-pointer">
                MK
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full border-2 border-white shadow-md"></div>
            </div>
          </div>
        </section>

        {/* Square Avatars */}
        <section className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-emerald-200">
          <h2 className="text-2xl font-bold text-emerald-700 mb-6">Square Avatars</h2>
          <div className="flex flex-wrap gap-6 items-end">
            <div className="relative group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center text-amber-900 font-semibold border-2 border-amber-400 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                TC
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
            </div>

            <div className="relative group">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-rose-200 to-pink-300 flex items-center justify-center text-rose-900 font-semibold border-2 border-rose-400 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                RJ
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
            </div>

            <div className="relative group">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-sky-200 to-blue-300 flex items-center justify-center text-sky-900 font-semibold text-lg border-2 border-sky-400 shadow-xl hover:shadow-2xl transition-shadow cursor-pointer">
                BW
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-md"></div>
            </div>

            <div className="relative group">
              <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-violet-200 to-purple-300 flex items-center justify-center text-violet-900 font-semibold text-xl border-3 border-violet-400 shadow-2xl hover:shadow-2xl transition-shadow cursor-pointer">
                LN
              </div>
              <div className="absolute -top-1 -right-1 w-7 h-7 bg-amber-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold shadow-md">
                5
              </div>
            </div>
          </div>
        </section>

        {/* Avatar Groups */}
        <section className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-teal-200">
          <h2 className="text-2xl font-bold text-teal-700 mb-6">Avatar Groups</h2>

          <div className="space-y-8">
            {/* Stacked Group */}
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-4">Stacked Group</h3>
              <div className="flex -space-x-4">
                {[
                  { initials: 'JD', from: 'from-green-200', to: 'to-emerald-300', border: 'border-green-400' },
                  { initials: 'SK', from: 'from-emerald-200', to: 'to-teal-300', border: 'border-emerald-400' },
                  { initials: 'AL', from: 'from-lime-200', to: 'to-green-300', border: 'border-lime-400' },
                  { initials: 'MK', from: 'from-teal-200', to: 'to-cyan-300', border: 'border-teal-400' },
                  { initials: '+5', from: 'from-stone-200', to: 'to-stone-300', border: 'border-stone-400' },
                ].map((avatar, i) => (
                  <div
                    key={i}
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${avatar.from} ${avatar.to} flex items-center justify-center text-green-900 font-semibold border-3 ${avatar.border} shadow-lg hover:scale-110 hover:z-10 transition-transform cursor-pointer`}
                  >
                    {avatar.initials}
                  </div>
                ))}
              </div>
            </div>

            {/* Grid Group */}
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-4">Grid Group</h3>
              <div className="grid grid-cols-4 gap-4 max-w-md">
                {[
                  { initials: 'TC', from: 'from-amber-200', to: 'to-orange-300', border: 'border-amber-400' },
                  { initials: 'RJ', from: 'from-rose-200', to: 'to-pink-300', border: 'border-rose-400' },
                  { initials: 'BW', from: 'from-sky-200', to: 'to-blue-300', border: 'border-sky-400' },
                  { initials: 'LN', from: 'from-violet-200', to: 'to-purple-300', border: 'border-violet-400' },
                  { initials: 'PK', from: 'from-green-200', to: 'to-emerald-300', border: 'border-green-400' },
                  { initials: 'QM', from: 'from-yellow-200', to: 'to-amber-300', border: 'border-yellow-400' },
                  { initials: 'WX', from: 'from-indigo-200', to: 'to-blue-300', border: 'border-indigo-400' },
                  { initials: 'YZ', from: 'from-fuchsia-200', to: 'to-pink-300', border: 'border-fuchsia-400' },
                ].map((avatar, i) => (
                  <div
                    key={i}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${avatar.from} ${avatar.to} flex items-center justify-center text-green-900 font-semibold border-2 ${avatar.border} shadow-lg hover:scale-110 transition-transform cursor-pointer`}
                  >
                    {avatar.initials}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Status Indicators */}
        <section className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-green-200">
          <h2 className="text-2xl font-bold text-green-700 mb-6">Status Indicators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-200 to-emerald-300 flex items-center justify-center text-green-900 font-semibold text-lg border-2 border-green-400 shadow-xl">
                  ON
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-md"></div>
              </div>
              <p className="text-sm font-semibold text-green-700">Online</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-200 to-yellow-300 flex items-center justify-center text-amber-900 font-semibold text-lg border-2 border-amber-400 shadow-xl">
                  AW
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-amber-500 rounded-full border-2 border-white shadow-md"></div>
              </div>
              <p className="text-sm font-semibold text-amber-700">Away</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-200 to-red-300 flex items-center justify-center text-rose-900 font-semibold text-lg border-2 border-rose-400 shadow-xl">
                  BS
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-md"></div>
              </div>
              <p className="text-sm font-semibold text-rose-700">Busy</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center text-stone-600 font-semibold text-lg border-2 border-stone-400 shadow-xl opacity-60">
                  OF
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-stone-400 rounded-full border-2 border-white shadow-md"></div>
              </div>
              <p className="text-sm font-semibold text-stone-600">Offline</p>
            </div>
          </div>
        </section>

        {/* Responsive Sizes */}
        <section className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border-2 border-emerald-200">
          <h2 className="text-2xl font-bold text-emerald-700 mb-6">Responsive Sizes</h2>
          <div className="flex flex-wrap gap-6 items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-200 to-emerald-300 flex items-center justify-center text-green-800 text-xs font-semibold border border-green-400 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              XS
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-200 to-teal-300 flex items-center justify-center text-emerald-800 text-sm font-semibold border-2 border-emerald-400 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              SM
            </div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-lime-200 to-green-300 flex items-center justify-center text-lime-900 text-base font-semibold border-2 border-lime-400 shadow-xl hover:shadow-2xl transition-shadow cursor-pointer">
              MD
            </div>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-200 to-cyan-300 flex items-center justify-center text-teal-900 text-lg font-semibold border-2 border-teal-400 shadow-xl hover:shadow-2xl transition-shadow cursor-pointer">
              LG
            </div>
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-200 to-emerald-400 flex items-center justify-center text-green-900 text-xl font-semibold border-3 border-green-500 shadow-2xl hover:shadow-2xl transition-shadow cursor-pointer">
              XL
            </div>
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-200 to-teal-400 flex items-center justify-center text-emerald-900 text-2xl font-semibold border-4 border-emerald-500 shadow-2xl hover:shadow-2xl transition-shadow cursor-pointer">
              2XL
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
