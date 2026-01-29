export default function LuxuryAvatar() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-zinc-900 to-neutral-900 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-serif text-amber-400 mb-2 tracking-wider">Luxury Avatars</h1>
          <p className="text-gray-400 font-light">Elegant and premium avatar components</p>
        </div>

        {/* Circle Avatars */}
        <section className="bg-gradient-to-br from-zinc-800/50 to-neutral-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-amber-500/20">
          <h2 className="text-2xl font-serif text-amber-400 mb-6 tracking-wide">Circle Avatars</h2>
          <div className="flex flex-wrap gap-8 items-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 flex items-center justify-center text-zinc-900 font-semibold border-2 border-amber-300 shadow-xl cursor-pointer">
                JD
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-zinc-900 shadow-lg"></div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 flex items-center justify-center text-zinc-900 font-semibold border-2 border-amber-300 shadow-2xl cursor-pointer">
                SK
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-zinc-900 shadow-lg"></div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 flex items-center justify-center text-zinc-900 font-semibold text-lg border-2 border-amber-300 shadow-2xl cursor-pointer">
                AL
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-2 border-zinc-900 flex items-center justify-center text-white text-xs font-semibold shadow-lg">
                3
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 flex items-center justify-center text-zinc-900 font-semibold text-xl border-3 border-amber-300 shadow-2xl cursor-pointer">
                MK
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-emerald-500 rounded-full border-2 border-zinc-900 shadow-lg"></div>
            </div>
          </div>
        </section>

        {/* Square Avatars */}
        <section className="bg-gradient-to-br from-zinc-800/50 to-neutral-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-amber-500/20">
          <h2 className="text-2xl font-serif text-amber-400 mb-6 tracking-wide">Square Avatars</h2>
          <div className="flex flex-wrap gap-8 items-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-600 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-rose-400 via-pink-500 to-rose-600 flex items-center justify-center text-white font-semibold border-2 border-rose-300 shadow-xl cursor-pointer">
                TC
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-zinc-900 shadow-lg"></div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-16 h-16 rounded-lg bg-gradient-to-br from-violet-400 via-purple-500 to-violet-600 flex items-center justify-center text-white font-semibold border-2 border-violet-300 shadow-2xl cursor-pointer">
                RJ
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-zinc-900 shadow-lg"></div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-600 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-20 h-20 rounded-lg bg-gradient-to-br from-sky-400 via-blue-500 to-sky-600 flex items-center justify-center text-white font-semibold text-lg border-2 border-sky-300 shadow-2xl cursor-pointer">
                BW
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-zinc-900 shadow-lg"></div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-600 rounded-lg blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-24 h-24 rounded-lg bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 flex items-center justify-center text-white font-semibold text-xl border-3 border-amber-300 shadow-2xl cursor-pointer">
                LN
              </div>
              <div className="absolute -top-1 -right-1 w-7 h-7 bg-red-500 rounded-full border-2 border-zinc-900 flex items-center justify-center text-white text-xs font-semibold shadow-lg">
                5
              </div>
            </div>
          </div>
        </section>

        {/* Avatar Groups */}
        <section className="bg-gradient-to-br from-zinc-800/50 to-neutral-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-amber-500/20">
          <h2 className="text-2xl font-serif text-amber-400 mb-6 tracking-wide">Avatar Groups</h2>

          <div className="space-y-8">
            {/* Stacked Group */}
            <div>
              <h3 className="text-lg font-serif text-gray-300 mb-4">Stacked Group</h3>
              <div className="flex -space-x-4">
                {[
                  { initials: 'JD', from: 'from-amber-400', via: 'via-yellow-500', to: 'to-amber-600' },
                  { initials: 'SK', from: 'from-rose-400', via: 'via-pink-500', to: 'to-rose-600' },
                  { initials: 'AL', from: 'from-violet-400', via: 'via-purple-500', to: 'to-violet-600' },
                  { initials: 'MK', from: 'from-sky-400', via: 'via-blue-500', to: 'to-sky-600' },
                  { initials: '+5', from: 'from-zinc-600', via: 'via-zinc-700', to: 'to-zinc-800' },
                ].map((avatar, i) => (
                  <div
                    key={i}
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${avatar.from} ${avatar.via} ${avatar.to} flex items-center justify-center text-white font-semibold border-3 border-zinc-900 shadow-2xl hover:scale-110 hover:z-10 transition-transform cursor-pointer`}
                  >
                    {avatar.initials}
                  </div>
                ))}
              </div>
            </div>

            {/* Grid Group */}
            <div>
              <h3 className="text-lg font-serif text-gray-300 mb-4">Grid Group</h3>
              <div className="grid grid-cols-4 gap-4 max-w-md">
                {[
                  { initials: 'TC', from: 'from-amber-400', to: 'to-yellow-600' },
                  { initials: 'RJ', from: 'from-rose-400', to: 'to-pink-600' },
                  { initials: 'BW', from: 'from-violet-400', to: 'to-purple-600' },
                  { initials: 'LN', from: 'from-sky-400', to: 'to-blue-600' },
                  { initials: 'PK', from: 'from-emerald-400', to: 'to-green-600' },
                  { initials: 'QM', from: 'from-orange-400', to: 'to-red-600' },
                  { initials: 'WX', from: 'from-indigo-400', to: 'to-purple-600' },
                  { initials: 'YZ', from: 'from-fuchsia-400', to: 'to-pink-600' },
                ].map((avatar, i) => (
                  <div
                    key={i}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${avatar.from} ${avatar.to} flex items-center justify-center text-white font-semibold border-2 border-zinc-900 shadow-2xl hover:scale-110 transition-transform cursor-pointer`}
                  >
                    {avatar.initials}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Status Indicators */}
        <section className="bg-gradient-to-br from-zinc-800/50 to-neutral-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-amber-500/20">
          <h2 className="text-2xl font-serif text-amber-400 mb-6 tracking-wide">Status Indicators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-600 rounded-full blur-xl opacity-50"></div>
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-600 flex items-center justify-center text-white font-semibold text-lg border-2 border-emerald-300 shadow-2xl">
                  ON
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-zinc-900 shadow-lg"></div>
              </div>
              <p className="text-sm font-serif text-gray-400">Online</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full blur-xl opacity-50"></div>
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 flex items-center justify-center text-zinc-900 font-semibold text-lg border-2 border-amber-300 shadow-2xl">
                  AW
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-amber-500 rounded-full border-2 border-zinc-900 shadow-lg"></div>
              </div>
              <p className="text-sm font-serif text-gray-400">Away</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-rose-600 rounded-full blur-xl opacity-50"></div>
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-red-400 via-rose-500 to-red-600 flex items-center justify-center text-white font-semibold text-lg border-2 border-red-300 shadow-2xl">
                  BS
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-2 border-zinc-900 shadow-lg"></div>
              </div>
              <p className="text-sm font-serif text-gray-400">Busy</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-zinc-600 via-zinc-700 to-zinc-800 flex items-center justify-center text-gray-400 font-semibold text-lg border-2 border-zinc-700 shadow-2xl opacity-60">
                  OF
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-zinc-600 rounded-full border-2 border-zinc-900 shadow-lg"></div>
              </div>
              <p className="text-sm font-serif text-gray-400">Offline</p>
            </div>
          </div>
        </section>

        {/* Responsive Sizes */}
        <section className="bg-gradient-to-br from-zinc-800/50 to-neutral-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-amber-500/20">
          <h2 className="text-2xl font-serif text-amber-400 mb-6 tracking-wide">Responsive Sizes</h2>
          <div className="flex flex-wrap gap-6 items-center justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full blur-sm opacity-50"></div>
              <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center text-zinc-900 text-xs font-semibold border border-amber-300 shadow-xl cursor-pointer">
                XS
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full blur-md opacity-50"></div>
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center text-zinc-900 text-sm font-semibold border-2 border-amber-300 shadow-xl cursor-pointer">
                SM
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full blur-lg opacity-50"></div>
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center text-zinc-900 text-base font-semibold border-2 border-amber-300 shadow-2xl cursor-pointer">
                MD
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full blur-xl opacity-50"></div>
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center text-zinc-900 text-lg font-semibold border-2 border-amber-300 shadow-2xl cursor-pointer">
                LG
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full blur-2xl opacity-50"></div>
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center text-zinc-900 text-xl font-semibold border-3 border-amber-300 shadow-2xl cursor-pointer">
                XL
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full blur-3xl opacity-50"></div>
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center text-zinc-900 text-2xl font-semibold border-4 border-amber-300 shadow-2xl cursor-pointer">
                2XL
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
