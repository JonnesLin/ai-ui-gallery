export default function FuturisticProductPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="aspect-square bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 backdrop-blur-3xl"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]"></div>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold mb-4 clip-path-polygon">
                NEXT GEN TECH
              </div>
              <h1 className="text-6xl font-black text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  HoloLens
                </span>
                <br />
                <span className="text-white">Pro X</span>
              </h1>
              <p className="text-blue-200 text-xl leading-relaxed">
                Experience reality reimagined. Advanced holographic technology meets AI-powered computing.
              </p>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-5xl font-black text-white">$3,499</span>
              <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold">
                PRE-ORDER
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-blue-300 text-sm font-bold mb-4 block uppercase tracking-wider">
                  Select Edition
                </label>
                <div className="space-y-3">
                  <button className="w-full p-5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-500 text-left rounded-lg backdrop-blur-sm">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-white font-bold text-lg">Developer Edition</div>
                        <div className="text-blue-300 text-sm mt-1">8GB RAM • 256GB Storage</div>
                      </div>
                      <div className="text-blue-400 font-black">$3,499</div>
                    </div>
                  </button>
                  <button className="w-full p-5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 text-left rounded-lg backdrop-blur-sm hover:border-purple-500 transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-white font-bold text-lg">Professional Edition</div>
                        <div className="text-purple-300 text-sm mt-1">16GB RAM • 512GB Storage</div>
                      </div>
                      <div className="text-purple-400 font-black">$4,999</div>
                    </div>
                  </button>
                  <button className="w-full p-5 bg-gradient-to-r from-pink-500/10 to-orange-500/10 border border-pink-500/30 text-left rounded-lg backdrop-blur-sm hover:border-pink-500 transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-white font-bold text-lg">Enterprise Edition</div>
                        <div className="text-pink-300 text-sm mt-1">32GB RAM • 1TB Storage</div>
                      </div>
                      <div className="text-pink-400 font-black">$6,999</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <button className="w-full py-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-black text-xl relative overflow-hidden group">
              <span className="relative z-10">RESERVE NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="p-4 border border-blue-500/30 rounded-lg backdrop-blur-sm text-center">
                <div className="text-blue-400 font-black text-2xl mb-1">120°</div>
                <div className="text-blue-300 text-xs uppercase">Field of View</div>
              </div>
              <div className="p-4 border border-purple-500/30 rounded-lg backdrop-blur-sm text-center">
                <div className="text-purple-400 font-black text-2xl mb-1">8K</div>
                <div className="text-purple-300 text-xs uppercase">Resolution</div>
              </div>
              <div className="p-4 border border-pink-500/30 rounded-lg backdrop-blur-sm text-center">
                <div className="text-pink-400 font-black text-2xl mb-1">6hrs</div>
                <div className="text-pink-300 text-xs uppercase">Battery</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-blue-500/30 rounded-2xl p-10 mb-16 backdrop-blur-sm bg-blue-500/5">
          <div className="flex gap-8 mb-10 border-b border-blue-500/20 pb-6">
            <button className="text-white font-bold text-lg border-b-2 border-blue-500 pb-2">
              Technology
            </button>
            <button className="text-blue-400 text-lg">Applications</button>
            <button className="text-blue-400 text-lg">Specifications</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-white font-bold text-xl mb-2">AI Processing</h3>
              <p className="text-blue-300">Neural network chip for real-time environment understanding</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-white font-bold text-xl mb-2">Eye Tracking</h3>
              <p className="text-purple-300">Precision iris scanning with 0.5° accuracy</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-pink-500/10 to-orange-500/10 border border-pink-500/20 rounded-xl">
              <div className="text-4xl mb-4">🤚</div>
              <h3 className="text-white font-bold text-xl mb-2">Gesture Control</h3>
              <p className="text-pink-300">Advanced hand tracking with haptic feedback</p>
            </div>
          </div>
        </div>

        <div className="border border-purple-500/30 rounded-2xl p-10 backdrop-blur-sm bg-purple-500/5">
          <h2 className="text-4xl font-black text-white mb-10">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Explore More
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl mb-4 group-hover:border-blue-500 transition-colors"></div>
                <h3 className="text-white font-bold mb-2">Accessory {i}</h3>
                <p className="text-blue-400">From $299</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}