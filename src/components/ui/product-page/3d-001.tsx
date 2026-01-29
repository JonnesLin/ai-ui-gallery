export default function ThreeDProductPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-500 relative transform perspective-1000 rotate-y-12" style={{ transformStyle: 'preserve-3d' }}>
            <div className="absolute inset-4 bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl" style={{ transform: 'translateZ(50px)' }}></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300/30 to-purple-400/30 backdrop-blur-sm"></div>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <div className="inline-block px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold mb-4 shadow-xl transform hover:scale-105 transition-transform" style={{ transform: 'translateZ(20px) rotateX(-5deg)', transformStyle: 'preserve-3d' }}>
                3D EXPERIENCE
              </div>
              <h1 className="text-6xl font-black text-white mb-4 drop-shadow-2xl">
                Dimension
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Pro Headset
                </span>
              </h1>
              <p className="text-slate-300 text-xl leading-relaxed">
                Step into another dimension. Revolutionary spatial computing in a sleek, immersive design.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-5xl font-black text-white drop-shadow-lg" style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}>
                $899
              </div>
              <div className="px-4 py-2 bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold shadow-xl transform -rotate-3">
                NEW 3D
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-slate-300 text-sm font-bold mb-4 block">SELECT MODEL</label>
                <div className="space-y-3">
                  <button className="w-full p-5 bg-gradient-to-br from-blue-600 to-purple-700 text-white text-left rounded-xl shadow-2xl transform hover:scale-105 transition-all" style={{ transform: 'translateZ(10px)', transformStyle: 'preserve-3d' }}>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-bold text-lg">Standard 3D</div>
                        <div className="text-blue-200 text-sm mt-1">90Hz refresh • 1080p per eye</div>
                      </div>
                      <div className="text-2xl font-black">$899</div>
                    </div>
                  </button>
                  <button className="w-full p-5 bg-slate-800 border-2 border-slate-700 text-white text-left rounded-xl shadow-xl hover:border-blue-500 hover:shadow-2xl transition-all">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-bold text-lg">Pro 3D</div>
                        <div className="text-slate-400 text-sm mt-1">120Hz refresh • 1440p per eye</div>
                      </div>
                      <div className="text-2xl font-black">$1,299</div>
                    </div>
                  </button>
                </div>
              </div>

              <div>
                <label className="text-slate-300 text-sm font-bold mb-4 block">DEPTH SENSOR</label>
                <div className="grid grid-cols-2 gap-3">
                  <button className="py-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold rounded-lg shadow-xl transform hover:scale-105 transition-transform">
                    Inside-Out
                  </button>
                  <button className="py-4 bg-slate-800 border-2 border-slate-700 text-slate-400 font-bold rounded-lg">
                    External
                  </button>
                </div>
              </div>
            </div>

            <button className="w-full py-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-black text-2xl rounded-xl shadow-2xl transform hover:scale-105 transition-all" style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
              ADD TO CART
            </button>

            <div className="grid grid-cols-3 gap-4">
              <div className="p-5 bg-slate-800 rounded-xl shadow-xl transform hover:scale-105 transition-transform" style={{ transform: 'translateZ(5px)', transformStyle: 'preserve-3d' }}>
                <div className="text-blue-400 font-black text-2xl mb-1">120°</div>
                <div className="text-slate-400 text-xs uppercase">FOV</div>
              </div>
              <div className="p-5 bg-slate-800 rounded-xl shadow-xl transform hover:scale-105 transition-transform" style={{ transform: 'translateZ(5px)', transformStyle: 'preserve-3d' }}>
                <div className="text-purple-400 font-black text-2xl mb-1">4K</div>
                <div className="text-slate-400 text-xs uppercase">Display</div>
              </div>
              <div className="p-5 bg-slate-800 rounded-xl shadow-xl transform hover:scale-105 transition-transform" style={{ transform: 'translateZ(5px)', transformStyle: 'preserve-3d' }}>
                <div className="text-pink-400 font-black text-2xl mb-1">8hrs</div>
                <div className="text-slate-400 text-xs uppercase">Battery</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 rounded-3xl p-10 mb-16 shadow-2xl transform hover:scale-[1.01] transition-transform">
          <div className="flex gap-8 mb-10 border-b-2 border-slate-700 pb-6">
            <button className="text-blue-400 font-bold text-lg border-b-4 border-blue-500 pb-2 shadow-lg">
              3D Features
            </button>
            <button className="text-slate-400 text-lg">Specifications</button>
            <button className="text-slate-400 text-lg">Compatibility</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl shadow-xl transform hover:scale-105 transition-all" style={{ transform: 'translateZ(10px)', transformStyle: 'preserve-3d' }}>
              <div className="text-5xl mb-4">🎮</div>
              <h3 className="text-white font-bold text-xl mb-2">6DOF Tracking</h3>
              <p className="text-slate-300">Full freedom of movement with precision tracking</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl shadow-xl transform hover:scale-105 transition-all" style={{ transform: 'translateZ(10px)', transformStyle: 'preserve-3d' }}>
              <div className="text-5xl mb-4">👁️</div>
              <h3 className="text-white font-bold text-xl mb-2">Eye Tracking</h3>
              <p className="text-slate-300">Advanced foveated rendering for ultra-realistic graphics</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-pink-600/20 to-orange-600/20 border border-pink-500/30 rounded-2xl shadow-xl transform hover:scale-105 transition-all" style={{ transform: 'translateZ(10px)', transformStyle: 'preserve-3d' }}>
              <div className="text-5xl mb-4">🎧</div>
              <h3 className="text-white font-bold text-xl mb-2">Spatial Audio</h3>
              <p className="text-slate-300">3D sound that surrounds you from every direction</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 rounded-3xl p-10 shadow-2xl">
          <h2 className="text-4xl font-black text-white mb-10">
            3D Accessories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all" style={{ transform: `translateZ(${i * 5}px)`, transformStyle: 'preserve-3d' }}>
                <div className="aspect-square bg-gradient-to-br from-blue-500/30 to-purple-500/30"></div>
                <div className="p-5">
                  <h3 className="text-white font-bold mb-2">3D Controller {i}</h3>
                  <p className="text-blue-400 font-bold text-xl">$149</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}