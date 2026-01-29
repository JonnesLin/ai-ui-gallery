export default function PastelStatistic() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-gradient-to-br from-pink-200 to-pink-300 rounded-2xl flex items-center justify-center mb-4 shadow-md">
              <span className="text-2xl">💖</span>
            </div>
            <div className="text-sm font-medium text-pink-400 mb-2">Love Score</div>
            <div className="text-4xl font-bold text-pink-500 mb-3">9,847</div>
            <div className="flex items-center gap-2">
              <div className="bg-pink-100 px-3 py-1 rounded-full text-pink-600 text-xs font-medium">
                ↑ 15.2%
              </div>
              <span className="text-pink-300 text-xs">this week</span>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-200 to-purple-300 rounded-2xl flex items-center justify-center mb-4 shadow-md">
              <span className="text-2xl">🌸</span>
            </div>
            <div className="text-sm font-medium text-purple-400 mb-2">Blooms</div>
            <div className="text-4xl font-bold text-purple-500 mb-3">3,429</div>
            <div className="flex items-center gap-2">
              <div className="bg-purple-100 px-3 py-1 rounded-full text-purple-600 text-xs font-medium">
                ↑ 22.8%
              </div>
              <span className="text-purple-300 text-xs">growing</span>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl flex items-center justify-center mb-4 shadow-md">
              <span className="text-2xl">🦋</span>
            </div>
            <div className="text-sm font-medium text-blue-400 mb-2">Butterflies</div>
            <div className="text-4xl font-bold text-blue-500 mb-3">1,284</div>
            <div className="flex items-center gap-2">
              <div className="bg-blue-100 px-3 py-1 rounded-full text-blue-600 text-xs font-medium">
                ↑ 8.5%
              </div>
              <span className="text-blue-300 text-xs">flying</span>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-200 to-teal-300 rounded-2xl flex items-center justify-center mb-4 shadow-md">
              <span className="text-2xl">🌈</span>
            </div>
            <div className="text-sm font-medium text-teal-400 mb-2">Rainbows</div>
            <div className="text-4xl font-bold text-teal-500 mb-3">542</div>
            <div className="flex items-center gap-2">
              <div className="bg-teal-100 px-3 py-1 rounded-full text-teal-600 text-xs font-medium">
                ↑ 18.4%
              </div>
              <span className="text-teal-300 text-xs">spotted</span>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">🌺</div>
              <h3 className="text-xl font-semibold text-pink-500">Garden Stats</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-pink-50 rounded-xl">
                <span className="text-pink-400 font-medium">Roses Planted</span>
                <span className="text-pink-600 font-bold text-lg">842</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-xl">
                <span className="text-purple-400 font-medium">Tulips Growing</span>
                <span className="text-purple-600 font-bold text-lg">1,247</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
                <span className="text-blue-400 font-medium">Sunflowers Blooming</span>
                <span className="text-blue-600 font-bold text-lg">429</span>
              </div>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">✨</div>
              <h3 className="text-xl font-semibold text-purple-500">Magic Moments</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl">
                <div className="text-3xl font-bold text-pink-500 mb-1">2.8K</div>
                <div className="text-pink-400 text-sm font-medium">Smiles</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                <div className="text-3xl font-bold text-purple-500 mb-1">94%</div>
                <div className="text-purple-400 text-sm font-medium">Joy</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                <div className="text-3xl font-bold text-blue-500 mb-1">1.2K</div>
                <div className="text-blue-400 text-sm font-medium">Dreams</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl">
                <div className="text-3xl font-bold text-teal-500 mb-1">∞</div>
                <div className="text-teal-400 text-sm font-medium">Love</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}