export default function NatureStatistic() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-green-200 hover:border-green-400 transition-colors">
            <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🌱</span>
            </div>
            <div className="text-sm font-medium text-green-600 mb-2">Trees Planted</div>
            <div className="text-4xl font-bold text-green-800 mb-3">24,847</div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-green-700">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold">18.5%</span>
              </div>
              <span className="text-green-500 text-xs">this month</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-blue-200 hover:border-blue-400 transition-colors">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">💧</span>
            </div>
            <div className="text-sm font-medium text-blue-600 mb-2">Water Saved (L)</div>
            <div className="text-4xl font-bold text-blue-800 mb-3">1.2M</div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-blue-700">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold">24.2%</span>
              </div>
              <span className="text-blue-500 text-xs">conservation</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-amber-200 hover:border-amber-400 transition-colors">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🐝</span>
            </div>
            <div className="text-sm font-medium text-amber-600 mb-2">Bees Protected</div>
            <div className="text-4xl font-bold text-amber-800 mb-3">8,429</div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-amber-700">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold">32.8%</span>
              </div>
              <span className="text-amber-500 text-xs">thriving</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-teal-200 hover:border-teal-400 transition-colors">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🌍</span>
            </div>
            <div className="text-sm font-medium text-teal-600 mb-2">CO₂ Offset (tons)</div>
            <div className="text-4xl font-bold text-teal-800 mb-3">3,284</div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-teal-700">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold">15.4%</span>
              </div>
              <span className="text-teal-500 text-xs">reduction</span>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-green-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-4xl">🌳</div>
              <div>
                <h3 className="text-xl font-bold text-green-800">Forest Impact</h3>
                <p className="text-green-600 text-sm">Environmental restoration metrics</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🌲</span>
                  <span className="text-green-700 font-medium">Pine Trees</span>
                </div>
                <span className="text-2xl font-bold text-green-800">8,429</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🍃</span>
                  <span className="text-emerald-700 font-medium">Oak Trees</span>
                </div>
                <span className="text-2xl font-bold text-emerald-800">6,247</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🌿</span>
                  <span className="text-teal-700 font-medium">Bamboo</span>
                </div>
                <span className="text-2xl font-bold text-teal-800">10,171</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 shadow-md text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-4xl">🌸</div>
              <div>
                <h3 className="text-xl font-bold">Biodiversity Stats</h3>
                <p className="text-green-100 text-sm">Wildlife conservation progress</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">🦋</div>
                <div className="text-3xl font-bold mb-1">247</div>
                <div className="text-green-100 text-xs">Species</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">🌺</div>
                <div className="text-3xl font-bold mb-1">1.8K</div>
                <div className="text-green-100 text-xs">Flowers</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">🐦</div>
                <div className="text-3xl font-bold mb-1">429</div>
                <div className="text-green-100 text-xs">Birds</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">🍄</div>
                <div className="text-3xl font-bold mb-1">842</div>
                <div className="text-green-100 text-xs">Fungi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}