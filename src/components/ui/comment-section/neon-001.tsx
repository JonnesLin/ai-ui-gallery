export default function NeonCommentSection() {
  return (
    <div className="min-h-screen bg-black p-6 md:p-12">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-950 border-2 border-pink-500 rounded-xl p-6 md:p-8 relative" style={{ boxShadow: '0 0 40px rgba(236, 72, 153, 0.3)' }}>
          {/* Glow effects */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-pink-500" style={{ textShadow: '0 0 20px rgba(236, 72, 153, 0.8)' }}>
                COMMENTS
              </h2>
              <p className="text-cyan-400 mt-2 text-sm" style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.6)' }}>
                48 messages
              </p>
            </div>

            {/* Comment Input */}
            <div className="mb-8 border-2 border-cyan-500 rounded-lg p-4 bg-gray-900/50" style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.2)' }}>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-pink-500 flex items-center justify-center flex-shrink-0" style={{ boxShadow: '0 0 15px rgba(236, 72, 153, 0.5)' }}>
                  <svg className="w-6 h-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <textarea
                    placeholder="DROP YOUR MESSAGE..."
                    className="w-full bg-transparent border-b-2 border-cyan-500/50 focus:border-cyan-500 outline-none resize-none py-2 text-cyan-100 placeholder:text-gray-600 transition-colors"
                    rows={2}
                    style={{ textShadow: '0 0 5px rgba(34, 211, 238, 0.3)' }}
                  />
                  <div className="flex justify-end mt-3">
                    <button className="px-6 py-2 border-2 border-pink-500 text-pink-500 rounded-lg font-bold hover:bg-pink-500 hover:text-black transition-all" style={{ boxShadow: '0 0 15px rgba(236, 72, 153, 0.4)' }}>
                      SEND
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments */}
            <div className="space-y-5">
              {/* Comment 1 */}
              <div className="border-2 border-purple-500 rounded-lg p-5 bg-gray-900/60 hover:bg-gray-900/80 transition-all" style={{ boxShadow: '0 0 15px rgba(168, 85, 247, 0.2)' }}>
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-full border-2 border-purple-500 flex items-center justify-center flex-shrink-0" style={{ boxShadow: '0 0 15px rgba(168, 85, 247, 0.5)' }}>
                    <span className="text-purple-400 font-bold">NX</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-bold text-purple-400" style={{ textShadow: '0 0 10px rgba(168, 85, 247, 0.6)' }}>
                        NEON_X
                      </span>
                      <span className="px-3 py-1 border border-pink-500/50 rounded-full text-xs text-pink-400" style={{ boxShadow: '0 0 10px rgba(236, 72, 153, 0.3)' }}>
                        VERIFIED
                      </span>
                      <span className="text-xs text-gray-500">4H AGO</span>
                    </div>
                    <p className="mt-2 text-cyan-100/90 leading-relaxed">
                      Neon design brings the energy of night city streets to digital interfaces. The glowing borders and vibrant colors create an electrifying atmosphere!
                    </p>
                    <div className="flex items-center gap-4 mt-3">
                      <button className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors">
                        <div className="w-8 h-8 rounded border border-pink-500/50 flex items-center justify-center hover:bg-pink-500/20" style={{ boxShadow: '0 0 10px rgba(236, 72, 153, 0.2)' }}>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                          </svg>
                        </div>
                        <span className="text-sm font-bold">189</span>
                      </button>
                      <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                        <div className="w-8 h-8 rounded border border-cyan-500/50 flex items-center justify-center hover:bg-cyan-500/20" style={{ boxShadow: '0 0 10px rgba(34, 211, 238, 0.2)' }}>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      <button className="text-sm font-bold text-purple-400 hover:text-purple-300 transition-colors">
                        REPLY
                      </button>
                    </div>

                    {/* Nested Replies */}
                    <div className="mt-4 ml-4 border-l-2 border-purple-500/30 pl-4 space-y-4">
                      <div className="flex gap-3">
                        <div className="w-9 h-9 rounded-full border-2 border-cyan-500 flex items-center justify-center" style={{ boxShadow: '0 0 10px rgba(34, 211, 238, 0.4)' }}>
                          <span className="text-cyan-400 font-bold text-sm">VL</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-cyan-400 text-sm" style={{ textShadow: '0 0 8px rgba(34, 211, 238, 0.5)' }}>
                              VIBE_LORD
                            </span>
                            <span className="text-xs text-gray-500">2H AGO</span>
                          </div>
                          <p className="mt-1.5 text-sm text-cyan-100/80">
                            The glow effects are absolutely fire! Love the cyberpunk aesthetic.
                          </p>
                          <div className="flex items-center gap-3 mt-2">
                            <button className="flex items-center gap-1.5 text-xs text-pink-400 hover:text-pink-300">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                              </svg>
                              56
                            </button>
                            <button className="text-xs font-bold text-purple-400 hover:text-purple-300">REPLY</button>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="w-9 h-9 rounded-full border-2 border-pink-500 flex items-center justify-center" style={{ boxShadow: '0 0 10px rgba(236, 72, 153, 0.4)' }}>
                          <span className="text-pink-400 font-bold text-sm">RG</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-pink-400 text-sm" style={{ textShadow: '0 0 8px rgba(236, 72, 153, 0.5)' }}>
                              RAVE_GHOST
                            </span>
                            <span className="text-xs text-gray-500">1H AGO</span>
                          </div>
                          <p className="mt-1.5 text-sm text-cyan-100/80">
                            This looks like something from Blade Runner. Incredible!
                          </p>
                          <div className="flex items-center gap-3 mt-2">
                            <button className="flex items-center gap-1.5 text-xs text-pink-400 hover:text-pink-300">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                              </svg>
                              74
                            </button>
                            <button className="text-xs font-bold text-purple-400 hover:text-purple-300">REPLY</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comment 2 */}
              <div className="border-2 border-cyan-500 rounded-lg p-5 bg-gray-900/60 hover:bg-gray-900/80 transition-all" style={{ boxShadow: '0 0 15px rgba(34, 211, 238, 0.2)' }}>
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-full border-2 border-cyan-500 flex items-center justify-center flex-shrink-0" style={{ boxShadow: '0 0 15px rgba(34, 211, 238, 0.5)' }}>
                    <span className="text-cyan-400 font-bold">ZP</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-cyan-400" style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.6)' }}>
                        ZERO_PULSE
                      </span>
                      <span className="text-xs text-gray-500">8H AGO</span>
                    </div>
                    <p className="mt-2 text-cyan-100/90 leading-relaxed">
                      The contrast between the dark background and bright neon borders is perfect. It's like each comment is a sign glowing in the darkness.
                    </p>
                    <div className="flex items-center gap-4 mt-3">
                      <button className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors">
                        <div className="w-8 h-8 rounded border border-pink-500/50 flex items-center justify-center hover:bg-pink-500/20" style={{ boxShadow: '0 0 10px rgba(236, 72, 153, 0.2)' }}>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                          </svg>
                        </div>
                        <span className="text-sm font-bold">156</span>
                      </button>
                      <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                        <div className="w-8 h-8 rounded border border-cyan-500/50 flex items-center justify-center hover:bg-cyan-500/20" style={{ boxShadow: '0 0 10px rgba(34, 211, 238, 0.2)' }}>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      <button className="text-sm font-bold text-purple-400 hover:text-purple-300 transition-colors">
                        REPLY
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comment 3 */}
              <div className="border-2 border-pink-500 rounded-lg p-5 bg-gray-900/60 hover:bg-gray-900/80 transition-all" style={{ boxShadow: '0 0 15px rgba(236, 72, 153, 0.2)' }}>
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-full border-2 border-pink-500 flex items-center justify-center flex-shrink-0" style={{ boxShadow: '0 0 15px rgba(236, 72, 153, 0.5)' }}>
                    <span className="text-pink-400 font-bold">NK</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-pink-400" style={{ textShadow: '0 0 10px rgba(236, 72, 153, 0.6)' }}>
                        NIGHT_KING
                      </span>
                      <span className="text-xs text-gray-500">1D AGO</span>
                    </div>
                    <p className="mt-2 text-cyan-100/90 leading-relaxed">
                      Pure electric energy! This design would fit perfectly in a futuristic nightclub interface.
                    </p>
                    <div className="flex items-center gap-4 mt-3">
                      <button className="flex items-center gap-2 text-pink-400">
                        <div className="w-8 h-8 rounded border border-pink-500 flex items-center justify-center bg-pink-500/20" style={{ boxShadow: '0 0 15px rgba(236, 72, 153, 0.4)' }}>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M5 15l7-7 7 7" />
                          </svg>
                        </div>
                        <span className="text-sm font-bold">267</span>
                      </button>
                      <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                        <div className="w-8 h-8 rounded border border-cyan-500/50 flex items-center justify-center hover:bg-cyan-500/20" style={{ boxShadow: '0 0 10px rgba(34, 211, 238, 0.2)' }}>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      <button className="text-sm font-bold text-purple-400 hover:text-purple-300 transition-colors">
                        REPLY
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Load More */}
            <div className="mt-8 text-center">
              <button className="px-8 py-3 border-2 border-purple-500 text-purple-400 rounded-lg font-bold hover:bg-purple-500 hover:text-black transition-all" style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)' }}>
                LOAD MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
