export default function FuturisticAvatar() {
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
            Futuristic Avatars
          </h1>
          <p className="text-gray-400">Next-generation avatar components</p>
        </div>

        {/* Circle Avatars */}
        <section className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-cyan-500/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 pointer-events-none"></div>
          <h2 className="text-2xl font-bold text-cyan-400 mb-6 relative">Circle Avatars</h2>
          <div className="flex flex-wrap gap-6 items-end relative">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold border border-cyan-400 shadow-2xl cursor-pointer">
                JD
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black shadow-lg animate-pulse"></div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold border border-blue-400 shadow-2xl cursor-pointer">
                SK
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-black shadow-lg animate-pulse"></div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-lg border border-purple-400 shadow-2xl cursor-pointer">
                AL
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-2 border-black flex items-center justify-center text-white text-xs font-bold shadow-lg">
                3
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center text-white font-bold text-xl border-2 border-pink-400 shadow-2xl cursor-pointer">
                MK
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full border-2 border-black shadow-lg animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Square Avatars */}
        <section className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-purple-500/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 pointer-events-none"></div>
          <h2 className="text-2xl font-bold text-purple-400 mb-6 relative">Square Avatars</h2>
          <div className="flex flex-wrap gap-6 items-end relative">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-white font-bold border border-cyan-400 shadow-2xl cursor-pointer">
                TC
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black shadow-lg"></div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-16 h-16 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold border border-indigo-400 shadow-2xl cursor-pointer">
                RJ
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-black shadow-lg"></div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-20 h-20 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center text-white font-bold text-lg border border-violet-400 shadow-2xl cursor-pointer">
                BW
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-black shadow-lg"></div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-lg blur-3xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-24 h-24 rounded-lg bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center text-white font-bold text-xl border-2 border-fuchsia-400 shadow-2xl cursor-pointer">
                LN
              </div>
              <div className="absolute -top-1 -right-1 w-7 h-7 bg-red-500 rounded-full border-2 border-black flex items-center justify-center text-white text-xs font-bold shadow-lg">
                5
              </div>
            </div>
          </div>
        </section>

        {/* Avatar Groups */}
        <section className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-blue-500/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 pointer-events-none"></div>
          <h2 className="text-2xl font-bold text-blue-400 mb-6 relative">Avatar Groups</h2>

          <div className="space-y-8 relative">
            {/* Stacked Group */}
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-4">Stacked Group</h3>
              <div className="flex -space-x-4">
                {[
                  { initials: 'JD', from: 'from-cyan-500', to: 'to-blue-600' },
                  { initials: 'SK', from: 'from-blue-500', to: 'to-purple-600' },
                  { initials: 'AL', from: 'from-purple-500', to: 'to-pink-600' },
                  { initials: 'MK', from: 'from-pink-500', to: 'to-red-600' },
                  { initials: '+5', from: 'from-gray-600', to: 'to-gray-700' },
                ].map((avatar, i) => (
                  <div key={i} className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-r ${avatar.from} ${avatar.to} rounded-full blur-lg opacity-50`}></div>
                    <div
                      className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${avatar.from} ${avatar.to} flex items-center justify-center text-white font-bold border-2 border-black shadow-2xl hover:scale-110 hover:z-10 transition-transform cursor-pointer`}
                    >
                      {avatar.initials}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Grid Group */}
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-4">Grid Group</h3>
              <div className="grid grid-cols-4 gap-4 max-w-md">
                {[
                  { initials: 'TC', from: 'from-cyan-500', to: 'to-teal-600' },
                  { initials: 'RJ', from: 'from-indigo-500', to: 'to-purple-600' },
                  { initials: 'BW', from: 'from-violet-500', to: 'to-fuchsia-600' },
                  { initials: 'LN', from: 'from-fuchsia-500', to: 'to-pink-600' },
                  { initials: 'PK', from: 'from-emerald-500', to: 'to-teal-600' },
                  { initials: 'QM', from: 'from-blue-500', to: 'to-indigo-600' },
                  { initials: 'WX', from: 'from-purple-500', to: 'to-violet-600' },
                  { initials: 'YZ', from: 'from-pink-500', to: 'to-rose-600' },
                ].map((avatar, i) => (
                  <div key={i} className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-r ${avatar.from} ${avatar.to} rounded-full blur-md opacity-50`}></div>
                    <div
                      className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${avatar.from} ${avatar.to} flex items-center justify-center text-white font-bold border border-white/20 shadow-2xl hover:scale-110 transition-transform cursor-pointer`}
                    >
                      {avatar.initials}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Status Indicators */}
        <section className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-green-500/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-cyan-500/5 pointer-events-none"></div>
          <h2 className="text-2xl font-bold text-green-400 mb-6 relative">Status Indicators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-2xl opacity-50"></div>
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-lg border border-green-400 shadow-2xl">
                  ON
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-black shadow-lg animate-pulse"></div>
              </div>
              <p className="text-sm font-semibold text-gray-400">Online</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full blur-2xl opacity-50"></div>
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center text-white font-bold text-lg border border-yellow-400 shadow-2xl">
                  AW
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full border-2 border-black shadow-lg"></div>
              </div>
              <p className="text-sm font-semibold text-gray-400">Away</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-rose-500 rounded-full blur-2xl opacity-50"></div>
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white font-bold text-lg border border-red-400 shadow-2xl">
                  BS
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-2 border-black shadow-lg"></div>
              </div>
              <p className="text-sm font-semibold text-gray-400">Busy</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-3">
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center text-gray-400 font-bold text-lg border border-gray-600 shadow-2xl opacity-50">
                  OF
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gray-500 rounded-full border-2 border-black shadow-lg"></div>
              </div>
              <p className="text-sm font-semibold text-gray-500">Offline</p>
            </div>
          </div>
        </section>

        {/* Responsive Sizes */}
        <section className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-cyan-500/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 pointer-events-none"></div>
          <h2 className="text-2xl font-bold text-cyan-400 mb-6 relative">Responsive Sizes</h2>
          <div className="flex flex-wrap gap-6 items-center justify-center relative">
            {[
              { size: 'w-8 h-8', text: 'text-xs', label: 'XS' },
              { size: 'w-12 h-12', text: 'text-sm', label: 'SM' },
              { size: 'w-16 h-16', text: 'text-base', label: 'MD' },
              { size: 'w-20 h-20', text: 'text-lg', label: 'LG' },
              { size: 'w-24 h-24', text: 'text-xl', label: 'XL' },
              { size: 'w-32 h-32', text: 'text-2xl', label: '2XL' },
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className={`relative ${item.size} rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white ${item.text} font-bold border border-cyan-400 shadow-2xl cursor-pointer`}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
