export default function CyberpunkProductPage() {
  return (
    <div className="min-h-screen bg-black text-cyan-400 font-mono">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="aspect-square bg-gradient-to-br from-purple-900 to-black border-2 border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.5)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(6,182,212,0.05)_25%,rgba(6,182,212,0.05)_26%,transparent_27%,transparent_74%,rgba(6,182,212,0.05)_75%,rgba(6,182,212,0.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]"></div>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div>
              <div className="inline-block px-3 py-1 bg-cyan-400 text-black text-xs font-bold mb-4 animate-pulse">
                {'>'} NEURAL_LINK_ENABLED
              </div>
              <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                CYBERDECK_2077
              </h1>
              <p className="text-cyan-300 text-lg leading-relaxed">
                {'>'} Military-grade quantum processor<br/>
                {'>'} Neural interface compatible<br/>
                {'>'} Encrypted dark-net access
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-cyan-400">¥9,999</span>
              <span className="px-3 py-1 bg-purple-600 text-cyan-400 text-sm border border-cyan-400">
                [LIMITED_STOCK]
              </span>
            </div>

            <div className="space-y-5">
              <div>
                <label className="text-cyan-400 text-sm mb-3 block">{'>'} SELECT_NEON_SCHEME</label>
                <div className="flex gap-3">
                  <button className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-600 border-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)]"></button>
                  <button className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 border-2 border-purple-500"></button>
                  <button className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-yellow-400"></button>
                </div>
              </div>

              <div>
                <label className="text-cyan-400 text-sm mb-3 block">{'>'} SELECT_CONFIG</label>
                <div className="space-y-2">
                  <button className="w-full px-4 py-3 border-2 border-cyan-400 text-left bg-cyan-400/10 shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                    [STANDARD] 16GB RAM / 512GB SSD
                  </button>
                  <button className="w-full px-4 py-3 border-2 border-purple-500 text-left text-purple-400">
                    [PRO] 32GB RAM / 1TB SSD
                  </button>
                  <button className="w-full px-4 py-3 border-2 border-purple-500 text-left text-purple-400">
                    [ELITE] 64GB RAM / 2TB SSD
                  </button>
                </div>
              </div>
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold text-lg border-2 border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:shadow-[0_0_50px_rgba(6,182,212,0.8)] transition-all">
              {'>'} INITIATE_PURCHASE
            </button>
          </div>
        </div>

        <div className="border-2 border-cyan-400 p-8 mb-12 bg-gradient-to-br from-cyan-400/5 to-purple-500/5">
          <div className="flex gap-8 mb-8 border-b-2 border-cyan-400/30 pb-4">
            <button className="text-cyan-400 font-bold border-b-2 border-cyan-400 pb-2">{'>'} TECH_SPECS</button>
            <button className="text-purple-400">{'>'} USER_REVIEWS</button>
            <button className="text-purple-400">{'>'} WARRANTY_VOID</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-cyan-300 font-mono text-sm">
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-cyan-400/20">
                <span>PROCESSOR:</span>
                <span className="text-cyan-400">QUANTUM_X9000</span>
              </div>
              <div className="flex justify-between py-2 border-b border-cyan-400/20">
                <span>NEURAL_PORT:</span>
                <span className="text-cyan-400">GEN_4_COMPATIBLE</span>
              </div>
              <div className="flex justify-between py-2 border-b border-cyan-400/20">
                <span>ENCRYPTION:</span>
                <span className="text-cyan-400">MILITARY_GRADE</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-cyan-400/20">
                <span>BATTERY:</span>
                <span className="text-cyan-400">72H_CONTINUOUS</span>
              </div>
              <div className="flex justify-between py-2 border-b border-cyan-400/20">
                <span>NETWORK:</span>
                <span className="text-cyan-400">6G_READY</span>
              </div>
              <div className="flex justify-between py-2 border-b border-cyan-400/20">
                <span>WARRANTY:</span>
                <span className="text-purple-400">VOID_IF_HACKED</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 border-purple-500 p-8 bg-gradient-to-br from-purple-500/5 to-black">
          <h2 className="text-3xl font-bold text-purple-400 mb-8">{'>'} RELATED_CYBERWARE</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border-2 border-purple-500 group hover:border-cyan-400 transition-colors">
                <div className="aspect-square bg-gradient-to-br from-purple-900 to-black border-b-2 border-purple-500 group-hover:border-cyan-400"></div>
                <div className="p-4">
                  <h3 className="text-purple-400 font-bold mb-2">CYBER_ITEM_{i}</h3>
                  <p className="text-cyan-400">¥7,999</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}