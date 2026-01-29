export default function GradientCommentSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-6 md:p-12">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                Comments
              </h2>
              <p className="text-sm text-purple-200/60 mt-1">56 people are discussing</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-medium">
                Popular
              </button>
              <button className="px-4 py-2 rounded-full bg-white/5 text-purple-200/70 text-sm hover:bg-white/10 transition-colors">
                Recent
              </button>
            </div>
          </div>

          {/* Comment Input */}
          <div className="flex gap-4 mb-10">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 p-0.5">
              <img
                src="https://i.pravatar.cc/80?img=1"
                alt="Your avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex-1 bg-white/5 rounded-2xl p-4 border border-white/10">
              <textarea
                placeholder="Share your thoughts..."
                className="w-full bg-transparent outline-none resize-none text-white placeholder:text-purple-300/40"
                rows={3}
              />
              <div className="flex justify-between items-center mt-3">
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-white/10 rounded-xl transition-colors">
                    <svg className="w-5 h-5 text-purple-300/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-white/10 rounded-xl transition-colors">
                    <svg className="w-5 h-5 text-purple-300/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </button>
                </div>
                <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-medium hover:opacity-90 transition-opacity">
                  Post
                </button>
              </div>
            </div>
          </div>

          {/* Comments */}
          <div className="space-y-6">
            {/* Comment 1 */}
            <div className="bg-gradient-to-r from-white/5 to-white/0 rounded-2xl p-5 border border-white/5">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-0.5 shrink-0">
                  <img
                    src="https://i.pravatar.cc/80?img=12"
                    alt="Violet Ray"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-semibold text-white">Violet Ray</span>
                    <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-pink-500/30 to-purple-500/30 text-xs text-pink-200">
                      Top Fan
                    </span>
                    <span className="text-xs text-purple-300/50">2 hours ago</span>
                  </div>
                  <p className="mt-3 text-purple-100/80 leading-relaxed">
                    These gradient combinations are absolutely mesmerizing! The way the colors flow into each other creates such a dreamy atmosphere.
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30 transition-all">
                      <svg className="w-4 h-4 text-pink-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      <span className="text-sm text-pink-200">147</span>
                    </button>
                    <button className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm text-purple-200/70 transition-colors">
                      Reply
                    </button>
                  </div>

                  {/* Nested Replies */}
                  <div className="mt-5 pl-4 border-l-2 border-gradient-to-b from-pink-500/30 to-purple-500/30 space-y-4">
                    <div className="flex gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 p-0.5 shrink-0">
                        <img
                          src="https://i.pravatar.cc/80?img=33"
                          alt="Aurora Sky"
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-white text-sm">Aurora Sky</span>
                          <span className="text-xs text-purple-300/50">1h ago</span>
                        </div>
                        <p className="mt-2 text-sm text-purple-100/70 leading-relaxed">
                          Right?! It feels like looking at a sunset that never ends.
                        </p>
                        <div className="flex items-center gap-4 mt-3">
                          <button className="flex items-center gap-1.5 text-xs text-pink-300/70 hover:text-pink-300 transition-colors">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                            32
                          </button>
                          <button className="text-xs text-purple-200/50 hover:text-purple-200/70 transition-colors">Reply</button>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-400 to-cyan-500 p-0.5 shrink-0">
                        <img
                          src="https://i.pravatar.cc/80?img=47"
                          alt="Prism Lee"
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-white text-sm">Prism Lee</span>
                          <span className="text-xs text-purple-300/50">30m ago</span>
                        </div>
                        <p className="mt-2 text-sm text-purple-100/70 leading-relaxed">
                          The color theory here is chef's kiss!
                        </p>
                        <div className="flex items-center gap-4 mt-3">
                          <button className="flex items-center gap-1.5 text-xs text-pink-300/70 hover:text-pink-300 transition-colors">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                            18
                          </button>
                          <button className="text-xs text-purple-200/50 hover:text-purple-200/70 transition-colors">Reply</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment 2 */}
            <div className="bg-gradient-to-r from-white/5 to-white/0 rounded-2xl p-5 border border-white/5">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 p-0.5 shrink-0">
                  <img
                    src="https://i.pravatar.cc/80?img=22"
                    alt="Ember Gold"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-white">Ember Gold</span>
                    <span className="text-xs text-purple-300/50">4 hours ago</span>
                  </div>
                  <p className="mt-3 text-purple-100/80 leading-relaxed">
                    This is giving me major aurora borealis vibes. Would love to see this as an animated background!
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30 transition-all">
                      <svg className="w-4 h-4 text-purple-300/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      <span className="text-sm text-purple-200/70">89</span>
                    </button>
                    <button className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm text-purple-200/70 transition-colors">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment 3 */}
            <div className="bg-gradient-to-r from-white/5 to-white/0 rounded-2xl p-5 border border-white/5">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 p-0.5 shrink-0">
                  <img
                    src="https://i.pravatar.cc/80?img=58"
                    alt="Nova Chen"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-white">Nova Chen</span>
                    <span className="text-xs text-purple-300/50">7 hours ago</span>
                  </div>
                  <p className="mt-3 text-purple-100/80 leading-relaxed">
                    The subtle transparency layers add so much depth. Beautifully designed!
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30 transition-all">
                      <svg className="w-4 h-4 text-pink-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      <span className="text-sm text-pink-200">234</span>
                    </button>
                    <button className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm text-purple-200/70 transition-colors">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Load More */}
          <div className="mt-8 text-center">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 hover:from-pink-500/30 hover:via-purple-500/30 hover:to-indigo-500/30 border border-white/10 text-purple-200/80 font-medium transition-all">
              Load more comments
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
