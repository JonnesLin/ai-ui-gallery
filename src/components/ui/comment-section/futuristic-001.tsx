export default function FuturisticCommentSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 p-6 md:p-12">
      <div className="max-w-2xl mx-auto">
        <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 md:p-8 relative overflow-hidden">
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  DISCUSSION THREAD
                </h2>
                <div className="flex items-center gap-2 mt-2">
                  <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-transparent" />
                  <p className="text-xs text-cyan-400 font-mono">45 ENTRIES</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                LIVE
              </div>
            </div>

            {/* Comment Input */}
            <div className="mb-8 bg-slate-900/80 border border-cyan-500/30 rounded-xl p-4 relative">
              <div className="absolute top-0 right-0 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center border border-cyan-400/50">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <textarea
                    placeholder="ENTER YOUR MESSAGE..."
                    className="w-full bg-transparent outline-none resize-none text-cyan-100 placeholder:text-cyan-700 font-mono"
                    rows={3}
                  />
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-cyan-500/20">
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded border border-cyan-500/50 flex items-center justify-center hover:bg-cyan-500/20 transition-colors cursor-pointer">
                        <span className="text-cyan-400 text-xs font-mono">AI</span>
                      </div>
                      <div className="w-8 h-8 rounded border border-cyan-500/50 flex items-center justify-center hover:bg-cyan-500/20 transition-colors cursor-pointer">
                        <span className="text-cyan-400 text-xs font-mono">+</span>
                      </div>
                    </div>
                    <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-mono text-sm rounded hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all">
                      TRANSMIT
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments */}
            <div className="space-y-4">
              {/* Comment 1 */}
              <div className="bg-slate-900/60 border border-cyan-500/20 rounded-xl p-4 hover:border-cyan-500/40 transition-all relative group">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-transparent rounded-l-xl" />
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center border border-purple-400/50 flex-shrink-0">
                    <span className="text-white font-bold font-mono">NK</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-bold text-cyan-100 font-mono">NOVA_KNIGHT</span>
                      <span className="px-2 py-0.5 bg-cyan-500/20 border border-cyan-500/50 rounded text-xs text-cyan-400 font-mono">
                        VERIFIED
                      </span>
                      <span className="text-xs text-cyan-600 font-mono">03:47:21 UTC</span>
                    </div>
                    <p className="mt-2 text-cyan-200/90 leading-relaxed">
                      The holographic interface elements and light trails create an immersive experience. This is next-level UI design.
                    </p>
                    <div className="flex items-center gap-4 mt-3">
                      <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group/btn">
                        <div className="w-7 h-7 rounded border border-cyan-500/50 flex items-center justify-center group-hover/btn:bg-cyan-500/20">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                          </svg>
                        </div>
                        <span className="text-sm font-mono">234</span>
                      </button>
                      <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group/btn">
                        <div className="w-7 h-7 rounded border border-cyan-500/50 flex items-center justify-center group-hover/btn:bg-cyan-500/20">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </div>
                      </button>
                      <button className="text-sm font-mono text-cyan-400 hover:text-cyan-300 transition-colors">
                        REPLY
                      </button>
                    </div>

                    {/* Nested Replies */}
                    <div className="mt-4 ml-4 border-l border-cyan-500/30 pl-4 space-y-4">
                      <div className="flex gap-3">
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center border border-emerald-400/50">
                          <span className="text-white font-bold text-sm font-mono">ZX</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-cyan-100 text-sm font-mono">ZERO_X</span>
                            <span className="text-xs text-cyan-600 font-mono">02:15:33</span>
                          </div>
                          <p className="mt-1.5 text-sm text-cyan-200/80">
                            Agreed. The animated grid background is a perfect touch!
                          </p>
                          <div className="flex items-center gap-3 mt-2">
                            <button className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 font-mono">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                              </svg>
                              67
                            </button>
                            <button className="text-xs font-mono text-cyan-400 hover:text-cyan-300">REPLY</button>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center border border-orange-400/50">
                          <span className="text-white font-bold text-sm font-mono">PX</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-cyan-100 text-sm font-mono">PHOENIX</span>
                            <span className="text-xs text-cyan-600 font-mono">01:22:08</span>
                          </div>
                          <p className="mt-1.5 text-sm text-cyan-200/80">
                            The monospace font adds to the tech aesthetic perfectly.
                          </p>
                          <div className="flex items-center gap-3 mt-2">
                            <button className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 font-mono">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                              </svg>
                              53
                            </button>
                            <button className="text-xs font-mono text-cyan-400 hover:text-cyan-300">REPLY</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comment 2 */}
              <div className="bg-slate-900/60 border border-cyan-500/20 rounded-xl p-4 hover:border-cyan-500/40 transition-all relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent rounded-l-xl" />
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center border border-blue-400/50 flex-shrink-0">
                    <span className="text-white font-bold font-mono">QS</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-cyan-100 font-mono">QUANTUM_STORM</span>
                      <span className="text-xs text-cyan-600 font-mono">12:08:45 UTC</span>
                    </div>
                    <p className="mt-2 text-cyan-200/90 leading-relaxed">
                      The gradient borders and glowing effects make everything feel alive and dynamic.
                    </p>
                    <div className="flex items-center gap-4 mt-3">
                      <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group/btn">
                        <div className="w-7 h-7 rounded border border-cyan-500/50 flex items-center justify-center group-hover/btn:bg-cyan-500/20">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                          </svg>
                        </div>
                        <span className="text-sm font-mono">189</span>
                      </button>
                      <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group/btn">
                        <div className="w-7 h-7 rounded border border-cyan-500/50 flex items-center justify-center group-hover/btn:bg-cyan-500/20">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </div>
                      </button>
                      <button className="text-sm font-mono text-cyan-400 hover:text-cyan-300 transition-colors">
                        REPLY
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comment 3 */}
              <div className="bg-slate-900/60 border border-cyan-500/20 rounded-xl p-4 hover:border-cyan-500/40 transition-all relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-transparent rounded-l-xl" />
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-600 flex items-center justify-center border border-emerald-400/50 flex-shrink-0">
                    <span className="text-white font-bold font-mono">VR</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-cyan-100 font-mono">VECTOR_RAIN</span>
                      <span className="text-xs text-cyan-600 font-mono">18:55:12 UTC</span>
                    </div>
                    <p className="mt-2 text-cyan-200/90 leading-relaxed">
                      This is what communication interfaces will look like in 2050. Pure sci-fi!
                    </p>
                    <div className="flex items-center gap-4 mt-3">
                      <button className="flex items-center gap-2 text-cyan-300">
                        <div className="w-7 h-7 rounded border border-cyan-400 flex items-center justify-center bg-cyan-500/20">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                          </svg>
                        </div>
                        <span className="text-sm font-mono">312</span>
                      </button>
                      <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group/btn">
                        <div className="w-7 h-7 rounded border border-cyan-500/50 flex items-center justify-center group-hover/btn:bg-cyan-500/20">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </div>
                      </button>
                      <button className="text-sm font-mono text-cyan-400 hover:text-cyan-300 transition-colors">
                        REPLY
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Load More */}
            <div className="mt-8 text-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 text-cyan-400 rounded-lg font-mono text-sm hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all">
                LOAD MORE ENTRIES
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
