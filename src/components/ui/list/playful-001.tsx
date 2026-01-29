export default function PlayfulList() {
  const items = [
    { id: 1, title: 'Super Fun Adventure', emoji: '🎮', color: 'bg-yellow-300', rotate: 'rotate-2' },
    { id: 2, title: 'Rainbow Magic Quest', emoji: '🌈', color: 'bg-pink-300', rotate: '-rotate-1' },
    { id: 3, title: 'Cosmic Exploration', emoji: '🚀', color: 'bg-blue-300', rotate: 'rotate-1' },
    { id: 4, title: 'Treasure Hunt Party', emoji: '🎉', color: 'bg-purple-300', rotate: '-rotate-2' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200 p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Bouncy Cards */}
        <section>
          <h2 className="text-4xl font-black text-purple-600 mb-6 transform -rotate-2">
            ✨ Awesome Activities! ✨
          </h2>
          <ul className="space-y-4">
            {items.map((item) => (
              <li
                key={item.id}
                className={`${item.color} ${item.rotate} p-6 rounded-3xl shadow-lg hover:scale-105 hover:rotate-0 transition-all cursor-pointer border-4 border-black`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-6xl animate-bounce">{item.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-gray-900">{item.title}</h3>
                    <p className="text-gray-700 font-bold mt-1">Click me for fun!</p>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl border-4 border-black hover:animate-spin">
                    ⭐
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Sticker Style */}
        <section>
          <h2 className="text-3xl font-black text-blue-600 mb-6 transform rotate-1">
            🎨 Creative Collection
          </h2>
          <ul className="flex flex-wrap gap-4">
            {items.map((item) => (
              <li
                key={item.id}
                className={`${item.color} ${item.rotate} px-8 py-6 rounded-full shadow-xl hover:scale-110 transition-transform cursor-pointer border-4 border-black`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{item.emoji}</span>
                  <span className="text-lg font-black text-gray-900">{item.title.split(' ')[0]}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Comic Style List */}
        <section>
          <div className="bg-white border-8 border-black rounded-3xl p-6 shadow-2xl transform -rotate-1">
            <h3 className="text-3xl font-black text-red-600 mb-6 transform rotate-2">
              💥 POW! Featured Items 💥
            </h3>
            <ul className="space-y-4">
              {items.slice(0, 3).map((item) => (
                <li
                  key={item.id}
                  className="relative bg-gradient-to-r from-yellow-200 to-yellow-300 border-4 border-black rounded-2xl p-5 hover:translate-y-[-4px] transition-transform cursor-pointer"
                >
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-red-500 border-4 border-black rounded-full flex items-center justify-center text-white font-black text-xs transform rotate-12">
                    NEW!
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">{item.emoji}</div>
                    <div>
                      <h4 className="text-xl font-black text-gray-900">{item.title}</h4>
                      <p className="text-gray-700 font-bold text-sm mt-1">Super awesome content!</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Nested Playful */}
        <section>
          <div className="bg-gradient-to-br from-green-300 to-blue-300 border-8 border-black rounded-3xl p-6 shadow-2xl transform rotate-1">
            <h3 className="text-3xl font-black text-white mb-4 transform -rotate-2 drop-shadow-lg">
              🎪 Fun Categories!
            </h3>
            <ul className="space-y-3">
              <li className="bg-white/90 border-4 border-black rounded-2xl p-4 hover:bg-white transition-colors">
                <div className="text-2xl font-black text-purple-600 mb-3 flex items-center gap-2">
                  🎮 Games Corner
                </div>
                <ul className="space-y-2 pl-6 border-l-4 border-purple-400">
                  <li className="text-gray-700 font-bold hover:text-purple-600 cursor-pointer py-1 flex items-center gap-2">
                    <span className="text-xl">🎯</span> Action Games
                  </li>
                  <li className="text-gray-700 font-bold hover:text-purple-600 cursor-pointer py-1 flex items-center gap-2">
                    <span className="text-xl">🧩</span> Puzzle Games
                  </li>
                  <li className="text-gray-700 font-bold hover:text-purple-600 cursor-pointer py-1 flex items-center gap-2">
                    <span className="text-xl">🏃</span> Adventure Games
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* Emoji Progress List */}
        <section>
          <h2 className="text-3xl font-black text-green-600 mb-6 transform -rotate-1">
            🏆 Achievement Tracker
          </h2>
          <ul className="bg-white border-8 border-black rounded-3xl p-6 space-y-5">
            {items.map((item, idx) => (
              <li key={item.id}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{item.emoji}</span>
                    <span className="text-lg font-black text-gray-900">{item.title}</span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="text-2xl">
                        {i < idx + 1 ? '⭐' : '☆'}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 border-4 border-black overflow-hidden">
                  <div
                    className={`h-full ${item.color} border-r-4 border-black transition-all duration-300`}
                    style={{ width: `${(idx + 1) * 25}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Badge List */}
        <section>
          <h2 className="text-3xl font-black text-orange-600 mb-6 transform rotate-1">
            🎁 Special Rewards
          </h2>
          <ul className="grid grid-cols-2 gap-4">
            {items.map((item) => (
              <li
                key={item.id}
                className={`${item.color} ${item.rotate} border-8 border-black rounded-3xl p-6 hover:scale-105 hover:rotate-0 transition-all cursor-pointer shadow-xl text-center`}
              >
                <div className="text-5xl mb-3">{item.emoji}</div>
                <h4 className="text-lg font-black text-gray-900">{item.title.split(' ')[0]}</h4>
                <p className="text-gray-700 font-bold text-sm mt-1">Unlocked!</p>
                <div className="mt-4 flex justify-center gap-1">
                  <div className="w-3 h-3 bg-black rounded-full" />
                  <div className="w-3 h-3 bg-black rounded-full" />
                  <div className="w-3 h-3 bg-black rounded-full" />
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
