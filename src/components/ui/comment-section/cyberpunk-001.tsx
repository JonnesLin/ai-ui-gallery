export default function CyberpunkCommentSection() {
  return (
    <div className="min-h-screen bg-black p-6 md:p-12 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="border-2 border-cyan-500 bg-black/90 p-6 mb-8 shadow-[0_0_30px_rgba(0,255,255,0.3)] relative">
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-cyan-500" />
          <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-cyan-500" />
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-cyan-500" />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-cyan-500" />

          <h2 className="text-3xl font-black text-cyan-400 uppercase tracking-wider" style={{ textShadow: '0 0 10px rgba(0,255,255,0.8)' }}>
            &gt;&gt; NEURAL.FEED_
          </h2>
          <p className="mt-2 text-lg font-bold text-pink-500">24 CONNECTIONS ACTIVE</p>
        </div>

        {/* Comment Input */}
        <div className="border-2 border-pink-500 bg-gradient-to-br from-purple-900/50 to-black/90 p-6 mb-8 shadow-[0_0_30px_rgba(255,0,255,0.3)]">
          <div className="flex gap-4 items-start">
            <div className="w-16 h-16 relative flex-shrink-0">
              <img
                src="https://i.pravatar.cc/80?img=1"
                alt="Your avatar"
                className="w-full h-full rounded-none border-2 border-cyan-400"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-pink-500/20" />
            </div>
            <div className="flex-1">
              <textarea
                placeholder="INITIALIZE_TRANSMISSION..."
                className="w-full border-2 border-cyan-500/50 bg-black/70 p-4 font-mono text-cyan-300 placeholder:text-cyan-700 resize-none focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,255,255,0.5)]"
                rows={3}
              />
              <button className="mt-4 bg-gradient-to-r from-pink-500 to-purple-600 border-2 border-pink-400 text-white font-black px-6 py-2 uppercase hover:shadow-[0_0_20px_rgba(255,0,255,0.6)] transition-shadow font-mono">
                [TRANSMIT]
              </button>
            </div>
          </div>
        </div>

        {/* Comments List */}
        <div className="space-y-6">
          {/* Comment 1 */}
          <div className="border-2 border-cyan-400 bg-black/80 p-5 shadow-[0_0_20px_rgba(0,255,255,0.2)] relative group hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-shadow">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />

            <div className="flex gap-4">
              <div className="w-14 h-14 relative flex-shrink-0">
                <img
                  src="https://i.pravatar.cc/80?img=12"
                  alt="Sarah Chen"
                  className="w-full h-full rounded-none border-2 border-cyan-400"
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 border border-black animate-pulse" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-lg font-black text-cyan-300 font-mono">SARAH.CHEN</span>
                  <span className="bg-pink-500/20 border border-pink-500 text-pink-400 font-bold px-2 py-0.5 text-xs font-mono">
                    0x2H_AGO
                  </span>
                </div>
                <p className="mt-3 text-base text-cyan-100 leading-relaxed font-mono">
                  This cybernetic interface exceeds neural expectations. The phosphorescent glow creates optimal synaptic engagement.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <button className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-cyan-400 px-4 py-1.5 font-black text-cyan-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] flex items-center gap-2 font-mono transition-shadow">
                    <span className="text-green-400">▲</span> 42
                  </button>
                  <button className="border border-pink-500 bg-pink-500/10 px-4 py-1.5 font-black text-pink-400 hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] font-mono transition-shadow">
                    <span>▼</span>
                  </button>
                  <button className="border border-purple-500 bg-purple-500/10 px-4 py-1.5 font-bold text-purple-300 hover:bg-purple-500/20 uppercase font-mono">
                    [REPLY]
                  </button>
                </div>

                {/* Nested Replies */}
                <div className="mt-5 ml-0 border-l-2 border-pink-500/50 pl-5 space-y-4 bg-gradient-to-r from-purple-900/20 to-transparent p-4">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 relative flex-shrink-0">
                      <img
                        src="https://i.pravatar.cc/80?img=33"
                        alt="Alex Rivera"
                        className="w-full h-full rounded-none border-2 border-cyan-400"
                      />
                      <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 border border-black animate-pulse" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-base font-black text-cyan-300 font-mono">ALEX.RIVERA</span>
                        <span className="bg-pink-500/20 border border-pink-500 text-pink-400 font-bold px-2 py-0.5 text-xs font-mono">
                          0x1H_AGO
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-cyan-100 font-mono">
                        ACKNOWLEDGED. INITIATING FULL_AGREEMENT_PROTOCOL.
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <button className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-cyan-400 px-3 py-1 font-black text-cyan-300 text-sm font-mono">
                          <span className="text-green-400">▲</span> 12
                        </button>
                        <button className="border border-purple-500 bg-purple-500/10 px-3 py-1 font-bold text-purple-300 text-sm font-mono">
                          [REPLY]
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-12 h-12 relative flex-shrink-0">
                      <img
                        src="https://i.pravatar.cc/80?img=45"
                        alt="Maya Patel"
                        className="w-full h-full rounded-none border-2 border-cyan-400"
                      />
                      <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 border border-black animate-pulse" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-base font-black text-cyan-300 font-mono">MAYA.PATEL</span>
                        <span className="bg-pink-500/20 border border-pink-500 text-pink-400 font-bold px-2 py-0.5 text-xs font-mono">
                          0x45M_AGO
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-cyan-100 font-mono">
                        The neon_grid_aesthetic is MAXIMUM_CYBERDELIC.
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <button className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-cyan-400 px-3 py-1 font-black text-cyan-300 text-sm font-mono">
                          <span className="text-green-400">▲</span> 8
                        </button>
                        <button className="border border-purple-500 bg-purple-500/10 px-3 py-1 font-bold text-purple-300 text-sm font-mono">
                          [REPLY]
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comment 2 */}
          <div className="border-2 border-pink-400 bg-black/80 p-5 shadow-[0_0_20px_rgba(255,0,255,0.2)] relative group hover:shadow-[0_0_30px_rgba(255,0,255,0.4)] transition-shadow">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-50" />

            <div className="flex gap-4">
              <div className="w-14 h-14 relative flex-shrink-0">
                <img
                  src="https://i.pravatar.cc/80?img=22"
                  alt="James Wilson"
                  className="w-full h-full rounded-none border-2 border-pink-400"
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 border border-black animate-pulse" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-lg font-black text-pink-300 font-mono">JAMES.WILSON</span>
                  <span className="bg-cyan-500/20 border border-cyan-500 text-cyan-400 font-bold px-2 py-0.5 text-xs font-mono">
                    0x4H_AGO
                  </span>
                </div>
                <p className="mt-3 text-base text-pink-100 leading-relaxed font-mono">
                  GRID.OVERLAY detected. AESTHETIC.PROTOCOL engaged. This_is_the_future.exe
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <button className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-cyan-400 px-4 py-1.5 font-black text-cyan-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] flex items-center gap-2 font-mono transition-shadow">
                    <span className="text-green-400">▲</span> 28
                  </button>
                  <button className="border border-pink-500 bg-pink-500/10 px-4 py-1.5 font-black text-pink-400 hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] font-mono transition-shadow">
                    <span>▼</span>
                  </button>
                  <button className="border border-purple-500 bg-purple-500/10 px-4 py-1.5 font-bold text-purple-300 hover:bg-purple-500/20 uppercase font-mono">
                    [REPLY]
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Comment 3 */}
          <div className="border-2 border-purple-400 bg-black/80 p-5 shadow-[0_0_20px_rgba(168,85,247,0.2)] relative group hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-shadow">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-50" />

            <div className="flex gap-4">
              <div className="w-14 h-14 relative flex-shrink-0">
                <img
                  src="https://i.pravatar.cc/80?img=58"
                  alt="Emma Thompson"
                  className="w-full h-full rounded-none border-2 border-purple-400"
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 border border-black animate-pulse" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-lg font-black text-purple-300 font-mono">EMMA.THOMPSON</span>
                  <span className="bg-cyan-500/20 border border-cyan-500 text-cyan-400 font-bold px-2 py-0.5 text-xs font-mono">
                    0x6H_AGO
                  </span>
                </div>
                <p className="mt-3 text-base text-purple-100 leading-relaxed font-mono">
                  CHROMATIC_SIGNATURE: OPTIMAL. Neon arrays synchronized with neural pathways.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <button className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-cyan-400 px-4 py-1.5 font-black text-cyan-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] flex items-center gap-2 font-mono transition-shadow">
                    <span className="text-green-400">▲</span> 56
                  </button>
                  <button className="border border-pink-500 bg-pink-500/10 px-4 py-1.5 font-black text-pink-400 hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] font-mono transition-shadow">
                    <span>▼</span>
                  </button>
                  <button className="border border-purple-500 bg-purple-500/10 px-4 py-1.5 font-bold text-purple-300 hover:bg-purple-500/20 uppercase font-mono">
                    [REPLY]
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 border-2 border-cyan-400 text-white font-black px-10 py-3 uppercase text-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.8)] transition-shadow font-mono">
            [LOAD_MORE_DATA]
          </button>
        </div>
      </div>
    </div>
  )
}
