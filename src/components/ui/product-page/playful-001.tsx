export default function PlayfulProductPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="aspect-square bg-gradient-to-br from-orange-300 via-pink-300 to-purple-300 rounded-[4rem] transform hover:rotate-2 transition-transform shadow-2xl"></div>

          <div className="flex flex-col justify-center space-y-6">
            <div>
              <div className="inline-block px-4 py-2 bg-yellow-300 text-purple-700 font-bold text-sm rounded-full mb-4 transform -rotate-2">
                🎉 Super Fun!
              </div>
              <h1 className="text-6xl font-black text-purple-600 mb-4 transform -rotate-1">
                Rainbow Speaker
              </h1>
              <p className="text-2xl text-purple-500 leading-relaxed">
                Music sounds better when it's colorful! Dance, play, and enjoy! 🎵
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-5xl font-black text-purple-600">$99</span>
              <div className="px-4 py-2 bg-pink-400 text-white font-bold rounded-full transform rotate-3 shadow-lg">
                WOW! 🌟
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <label className="text-purple-600 text-lg font-bold mb-3 block">Pick Your Vibe! 🎨</label>
                <div className="flex gap-3">
                  <button className="w-16 h-16 rounded-full bg-gradient-to-br from-red-400 to-pink-500 border-4 border-white shadow-xl transform hover:scale-110 transition-transform"></button>
                  <button className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border-4 border-white shadow-xl transform hover:scale-110 transition-transform"></button>
                  <button className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-blue-500 border-4 border-white shadow-xl transform hover:scale-110 transition-transform"></button>
                  <button className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-4 border-yellow-300 shadow-xl transform scale-110"></button>
                </div>
              </div>

              <div>
                <label className="text-purple-600 text-lg font-bold mb-3 block">How Loud? 🔊</label>
                <div className="flex gap-3">
                  <button className="flex-1 py-4 bg-blue-300 text-blue-800 font-bold rounded-3xl transform hover:-rotate-2 transition-transform shadow-lg">
                    Small 🐭
                  </button>
                  <button className="flex-1 py-4 bg-pink-400 text-white font-bold rounded-3xl transform rotate-1 shadow-xl">
                    Medium 🎪
                  </button>
                  <button className="flex-1 py-4 bg-purple-300 text-purple-800 font-bold rounded-3xl transform hover:rotate-2 transition-transform shadow-lg">
                    Large 🎸
                  </button>
                </div>
              </div>
            </div>

            <button className="w-full py-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white text-2xl font-black rounded-full shadow-2xl hover:scale-105 transition-transform">
              Add to Cart! 🛒✨
            </button>

            <div className="grid grid-cols-3 gap-3">
              <div className="p-4 bg-yellow-200 rounded-2xl text-center transform -rotate-2">
                <div className="text-3xl mb-1">🎁</div>
                <div className="text-sm font-bold text-yellow-800">Free Gift Wrap!</div>
              </div>
              <div className="p-4 bg-blue-200 rounded-2xl text-center transform rotate-1">
                <div className="text-3xl mb-1">🚀</div>
                <div className="text-sm font-bold text-blue-800">Fast Ship!</div>
              </div>
              <div className="p-4 bg-pink-200 rounded-2xl text-center transform -rotate-1">
                <div className="text-3xl mb-1">💝</div>
                <div className="text-sm font-bold text-pink-800">Love It!</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[4rem] p-10 mb-12 shadow-2xl transform -rotate-1">
          <div className="flex gap-6 mb-8">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white font-black text-lg rounded-full shadow-lg transform rotate-1">
              Cool Features! ⭐
            </button>
            <button className="px-8 py-4 bg-gray-100 text-gray-600 font-bold rounded-full">
              Reviews 💬
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl transform hover:-rotate-2 transition-transform">
              <div className="text-5xl mb-3">🎵</div>
              <h3 className="font-black text-purple-600 text-xl mb-2">Amazing Sound!</h3>
              <p className="text-purple-500">Crystal clear audio that makes you dance!</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl transform hover:rotate-2 transition-transform">
              <div className="text-5xl mb-3">🌈</div>
              <h3 className="font-black text-purple-600 text-xl mb-2">LED Lights!</h3>
              <p className="text-purple-500">Rainbow effects that sync with your music!</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-pink-100 to-yellow-100 rounded-3xl transform hover:-rotate-1 transition-transform">
              <div className="text-5xl mb-3">⚡</div>
              <h3 className="font-black text-purple-600 text-xl mb-2">Long Battery!</h3>
              <p className="text-purple-500">Party for 12 hours straight!</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-200 to-pink-200 rounded-[4rem] p-10 shadow-2xl transform rotate-1">
          <h2 className="text-4xl font-black text-purple-600 mb-8 transform -rotate-1">
            More Fun Stuff! 🎈
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-3xl p-4 shadow-xl transform hover:scale-105 hover:rotate-3 transition-all">
                <div className="aspect-square bg-gradient-to-br from-yellow-200 to-pink-200 rounded-2xl mb-4"></div>
                <h3 className="text-purple-600 font-black text-lg mb-2">Fun Item {i}!</h3>
                <p className="text-purple-500 font-bold text-xl">$79 🎉</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}