export default function PlayfulStatistic() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-300 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-6 shadow-lg transform hover:rotate-2 hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center mb-4 animate-bounce">
              <span className="text-3xl">🎉</span>
            </div>
            <div className="text-sm font-bold text-orange-500 mb-2">Party Points!</div>
            <div className="text-4xl font-black text-purple-600 mb-2 transform -rotate-3">24,847</div>
            <div className="inline-block bg-yellow-200 px-3 py-1 rounded-full text-purple-600 text-xs font-bold transform rotate-2">
              ↑ Woohoo! +18%
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg transform hover:-rotate-2 hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-300 to-red-400 rounded-full flex items-center justify-center mb-4 animate-pulse">
              <span className="text-3xl">💝</span>
            </div>
            <div className="text-sm font-bold text-pink-500 mb-2">Happy Vibes</div>
            <div className="text-4xl font-black text-blue-600 mb-2 transform rotate-3">8,429</div>
            <div className="inline-block bg-pink-200 px-3 py-1 rounded-full text-blue-600 text-xs font-bold transform -rotate-2">
              ↑ Yay! +24%
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg transform hover:rotate-2 hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-gradient-to-br from-green-300 to-teal-400 rounded-full flex items-center justify-center mb-4 animate-bounce">
              <span className="text-3xl">🚀</span>
            </div>
            <div className="text-sm font-bold text-teal-500 mb-2">Super Stars!</div>
            <div className="text-4xl font-black text-pink-600 mb-2 transform -rotate-3">3,284</div>
            <div className="inline-block bg-green-200 px-3 py-1 rounded-full text-pink-600 text-xs font-bold transform rotate-2">
              ↑ Amazing! +42%
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg transform hover:-rotate-2 hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-300 to-indigo-400 rounded-full flex items-center justify-center mb-4 animate-pulse">
              <span className="text-3xl">🌟</span>
            </div>
            <div className="text-sm font-bold text-indigo-500 mb-2">Magic Dust</div>
            <div className="text-4xl font-black text-orange-600 mb-2 transform rotate-3">1,892</div>
            <div className="inline-block bg-purple-200 px-3 py-1 rounded-full text-orange-600 text-xs font-bold transform -rotate-2">
              ↑ Sweet! +12%
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-8 shadow-lg transform hover:rotate-1 transition-transform">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-5xl animate-spin" style={{ animationDuration: '3s' }}>🎪</div>
              <h3 className="text-2xl font-black text-purple-600 transform -rotate-2">Fun Metrics!</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl transform hover:scale-105 transition-transform">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎈</span>
                  <span className="text-purple-600 font-bold">Balloons Popped</span>
                </div>
                <span className="text-2xl font-black text-orange-600">842</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl transform hover:scale-105 transition-transform">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🍭</span>
                  <span className="text-purple-600 font-bold">Candies Collected</span>
                </div>
                <span className="text-2xl font-black text-pink-600">1,247</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-100 to-teal-100 rounded-2xl transform hover:scale-105 transition-transform">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎮</span>
                  <span className="text-purple-600 font-bold">Games Won</span>
                </div>
                <span className="text-2xl font-black text-teal-600">429</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl p-8 shadow-lg transform hover:-rotate-1 transition-transform">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-5xl animate-bounce">🎁</div>
              <h3 className="text-2xl font-black text-white transform rotate-2">Surprise Box!</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl text-center transform hover:scale-110 transition-transform">
                <div className="text-3xl mb-2">🏆</div>
                <div className="text-3xl font-black text-white mb-1">94</div>
                <div className="text-white/80 text-xs font-bold">Trophies</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl text-center transform hover:scale-110 transition-transform">
                <div className="text-3xl mb-2">⭐</div>
                <div className="text-3xl font-black text-white mb-1">5.0</div>
                <div className="text-white/80 text-xs font-bold">Rating</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl text-center transform hover:scale-110 transition-transform">
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-3xl font-black text-white mb-1">100%</div>
                <div className="text-white/80 text-xs font-bold">Score</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl text-center transform hover:scale-110 transition-transform">
                <div className="text-3xl mb-2">🌈</div>
                <div className="text-3xl font-black text-white mb-1">∞</div>
                <div className="text-white/80 text-xs font-bold">Fun</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}