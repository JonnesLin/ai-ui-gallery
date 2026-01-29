export default function RetroStatistic() {
  return (
    <div className="w-full min-h-screen bg-amber-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-b from-orange-200 to-orange-300 border-4 border-orange-800 rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(120,53,15,1)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-800 rounded-full flex items-center justify-center border-2 border-orange-900">
                <span className="text-2xl">📺</span>
              </div>
              <div className="text-orange-900 font-bold text-sm uppercase tracking-wide">Revenue</div>
            </div>
            <div className="text-5xl font-black text-orange-900 mb-3">$45.2K</div>
            <div className="flex items-center gap-2">
              <div className="bg-orange-800 text-amber-100 px-3 py-1 rounded font-bold text-sm">
                ↑ 18.5%
              </div>
              <span className="text-orange-700 text-sm">vs last month</span>
            </div>
          </div>

          <div className="bg-gradient-to-b from-teal-200 to-teal-300 border-4 border-teal-800 rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(17,94,89,1)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-teal-800 rounded-full flex items-center justify-center border-2 border-teal-900">
                <span className="text-2xl">🎮</span>
              </div>
              <div className="text-teal-900 font-bold text-sm uppercase tracking-wide">Players</div>
            </div>
            <div className="text-5xl font-black text-teal-900 mb-3">12,847</div>
            <div className="flex items-center gap-2">
              <div className="bg-teal-800 text-teal-100 px-3 py-1 rounded font-bold text-sm">
                ↑ 24.2%
              </div>
              <span className="text-teal-700 text-sm">online now</span>
            </div>
          </div>

          <div className="bg-gradient-to-b from-rose-200 to-rose-300 border-4 border-rose-800 rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(136,19,55,1)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-rose-800 rounded-full flex items-center justify-center border-2 border-rose-900">
                <span className="text-2xl">📻</span>
              </div>
              <div className="text-rose-900 font-bold text-sm uppercase tracking-wide">Songs</div>
            </div>
            <div className="text-5xl font-black text-rose-900 mb-3">8,429</div>
            <div className="flex items-center gap-2">
              <div className="bg-rose-800 text-rose-100 px-3 py-1 rounded font-bold text-sm">
                ↑ 12.8%
              </div>
              <span className="text-rose-700 text-sm">this week</span>
            </div>
          </div>

          <div className="bg-gradient-to-b from-yellow-200 to-yellow-300 border-4 border-yellow-800 rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(133,77,14,1)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-yellow-800 rounded-full flex items-center justify-center border-2 border-yellow-900">
                <span className="text-2xl">☎️</span>
              </div>
              <div className="text-yellow-900 font-bold text-sm uppercase tracking-wide">Calls</div>
            </div>
            <div className="text-5xl font-black text-yellow-900 mb-3">3,284</div>
            <div className="flex items-center gap-2">
              <div className="bg-yellow-800 text-yellow-100 px-3 py-1 rounded font-bold text-sm">
                ↓ 5.2%
              </div>
              <span className="text-yellow-700 text-sm">today</span>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-b from-purple-200 to-purple-300 border-4 border-purple-800 rounded-lg p-8 shadow-[4px_4px_0px_0px_rgba(88,28,135,1)]">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-3xl">🕹️</div>
            <h3 className="text-2xl font-black text-purple-900 uppercase tracking-wide">
              Arcade Stats
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-purple-800 border-2 border-purple-900 rounded-lg p-6 text-center">
              <div className="text-4xl font-black text-yellow-300 mb-2">HIGH SCORE</div>
              <div className="text-5xl font-black text-white">999,999</div>
            </div>
            <div className="bg-purple-800 border-2 border-purple-900 rounded-lg p-6 text-center">
              <div className="text-4xl font-black text-green-300 mb-2">LEVEL</div>
              <div className="text-5xl font-black text-white">42</div>
            </div>
            <div className="bg-purple-800 border-2 border-purple-900 rounded-lg p-6 text-center">
              <div className="text-4xl font-black text-pink-300 mb-2">COINS</div>
              <div className="text-5xl font-black text-white">8,492</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}