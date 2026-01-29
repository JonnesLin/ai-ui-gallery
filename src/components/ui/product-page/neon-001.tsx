export default function NeonProductPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="aspect-square bg-black border-2 border-pink-500 shadow-[0_0_50px_rgba(236,72,153,0.5)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-cyan-500/20"></div>
            <div className="absolute top-10 left-10 w-32 h-32 bg-pink-500 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-cyan-500 rounded-full blur-3xl opacity-50"></div>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <div className="inline-block px-4 py-2 bg-pink-500 text-white text-sm font-bold mb-4 shadow-[0_0_20px_rgba(236,72,153,0.8)] animate-pulse">
                NEON EDITION
              </div>
              <h1 className="text-6xl font-black mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 drop-shadow-[0_0_30px_rgba(236,72,153,0.8)]">
                  GLOW
                </span>
                <br />
                <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                  SPEAKER
                </span>
              </h1>
              <p className="text-cyan-300 text-xl leading-relaxed drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                Light up the night. 360° RGB lighting synced to your beats.
                Sound and color in perfect harmony.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-5xl font-black text-white drop-shadow-[0_0_20px_rgba(236,72,153,0.8)]">$249</span>
              <span className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold shadow-[0_0_30px_rgba(236,72,153,0.8)]">
                LIMITED
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-cyan-400 text-sm font-bold mb-4 block drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">
                  NEON COLOR
                </label>
                <div className="flex gap-4">
                  <button className="w-16 h-16 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 border-4 border-pink-400 shadow-[0_0_30px_rgba(236,72,153,0.8)]"></button>
                  <button className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 border-2 border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.5)]"></button>
                  <button className="w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 border-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.5)]"></button>
                  <button className="w-16 h-16 rounded-lg bg-gradient-to-br from-green-500 to-green-600 border-2 border-green-400 shadow-[0_0_20px_rgba(34,197,94,0.5)]"></button>
                </div>
              </div>

              <div>
                <label className="text-purple-400 text-sm font-bold mb-4 block drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
                  LIGHT MODE
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button className="py-4 bg-gradient-to-r from-pink-600 to-purple-600 border-2 border-pink-400 text-white font-bold shadow-[0_0_20px_rgba(236,72,153,0.6)]">
                    PULSE
                  </button>
                  <button className="py-4 bg-gray-800 border-2 border-gray-700 text-purple-400 font-bold">
                    WAVE
                  </button>
                  <button className="py-4 bg-gray-800 border-2 border-gray-700 text-cyan-400 font-bold">
                    BREATHE
                  </button>
                  <button className="py-4 bg-gray-800 border-2 border-gray-700 text-pink-400 font-bold">
                    STROBE
                  </button>
                </div>
              </div>
            </div>

            <button className="w-full py-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-black text-2xl shadow-[0_0_40px_rgba(236,72,153,0.8)] hover:shadow-[0_0_60px_rgba(236,72,153,1)] transition-all">
              ADD TO CART
            </button>

            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-gray-800 border-2 border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.3)] text-center">
                <div className="text-pink-400 font-black text-2xl drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">360°</div>
                <div className="text-pink-300 text-xs mt-1">RGB LIGHTS</div>
              </div>
              <div className="p-4 bg-gray-800 border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)] text-center">
                <div className="text-purple-400 font-black text-2xl drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">24H</div>
                <div className="text-purple-300 text-xs mt-1">BATTERY</div>
              </div>
              <div className="p-4 bg-gray-800 border-2 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)] text-center">
                <div className="text-cyan-400 font-black text-2xl drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">50W</div>
                <div className="text-cyan-300 text-xs mt-1">POWER</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 border-2 border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.4)] p-10 mb-16">
          <div className="flex gap-8 mb-10 border-b-2 border-purple-500/30 pb-6">
            <button className="text-pink-400 font-black text-lg border-b-2 border-pink-500 pb-2 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">
              FEATURES
            </button>
            <button className="text-purple-400 text-lg">SPECS</button>
            <button className="text-cyan-400 text-lg">REVIEWS</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-pink-500/10 to-purple-500/10 border-2 border-pink-500/30 shadow-[0_0_20px_rgba(236,72,153,0.2)]">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-pink-400 font-bold text-xl mb-2 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
                RGB SYNC
              </h3>
              <p className="text-gray-300">Lights dance to your music in real-time</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-2 border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
              <div className="text-5xl mb-4">🔊</div>
              <h3 className="text-purple-400 font-bold text-xl mb-2 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                BASS BOOST
              </h3>
              <p className="text-gray-300">Deep bass that you can feel</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-green-500/10 border-2 border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-cyan-400 font-bold text-xl mb-2 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                APP CONTROL
              </h3>
              <p className="text-gray-300">Customize every color and pattern</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 border-2 border-cyan-500 shadow-[0_0_40px_rgba(6,182,212,0.4)] p-10">
          <h2 className="text-4xl font-black mb-10">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 drop-shadow-[0_0_30px_rgba(236,72,153,0.8)]">
              NEON COLLECTION
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-black border-2 border-pink-500/50 shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] transition-all">
                <div className="aspect-square bg-gradient-to-br from-pink-500/20 to-cyan-500/20 border-b-2 border-pink-500/50"></div>
                <div className="p-4">
                  <h3 className="text-pink-400 font-bold mb-2 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
                    NEON {i}
                  </h3>
                  <p className="text-cyan-400 font-bold">$199</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}