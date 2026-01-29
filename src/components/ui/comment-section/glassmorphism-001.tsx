export default function GlassmorphismCommentSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-6 md:p-12">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-6 md:p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-semibold text-white">Comments</h2>
              <p className="text-sm text-white/60 mt-1">Join the conversation</p>
            </div>
            <span className="px-4 py-1.5 bg-white/10 backdrop-blur rounded-full text-sm text-white/80">
              32 comments
            </span>
          </div>

          {/* Comment Input */}
          <div className="flex gap-4 mb-8">
            <img
              src="https://i.pravatar.cc/80?img=1"
              alt="Your avatar"
              className="w-12 h-12 rounded-full border-2 border-white/30"
            />
            <div className="flex-1 bg-white/5 backdrop-blur rounded-2xl p-4 border border-white/10">
              <textarea
                placeholder="Share your thoughts..."
                className="w-full bg-transparent outline-none resize-none text-white placeholder:text-white/40"
                rows={3}
              />
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/10">
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </button>
                </div>
                <button className="px-5 py-2 bg-white/20 hover:bg-white/30 backdrop-blur rounded-xl text-white font-medium transition-all">
                  Post
                </button>
              </div>
            </div>
          </div>

          {/* Comments */}
          <div className="space-y-6">
            {/* Comment 1 */}
            <div className="bg-white/5 backdrop-blur rounded-2xl p-5 border border-white/10">
              <div className="flex gap-4">
                <img
                  src="https://i.pravatar.cc/80?img=12"
                  alt="Luna Martinez"
                  className="w-11 h-11 rounded-full border-2 border-white/20"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-semibold text-white">Luna Martinez</span>
                    <span className="px-2 py-0.5 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full text-xs text-white/70">Top Contributor</span>
                    <span className="text-xs text-white/40">3h ago</span>
                  </div>
                  <p className="mt-3 text-white/80 leading-relaxed">
                    The glassmorphism aesthetic here is absolutely stunning! Love how the blur effects create such depth and elegance.
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                      <svg className="w-4 h-4 text-pink-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      <span className="text-sm text-white/70">89</span>
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-sm text-white/70">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                      </svg>
                      Reply
                    </button>
                  </div>

                  {/* Nested Reply */}
                  <div className="mt-5 pl-4 border-l-2 border-white/10 space-y-4">
                    <div className="flex gap-3">
                      <img
                        src="https://i.pravatar.cc/80?img=33"
                        alt="Kai Anderson"
                        className="w-9 h-9 rounded-full border border-white/20"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-white text-sm">Kai Anderson</span>
                          <span className="text-xs text-white/40">2h ago</span>
                        </div>
                        <p className="mt-2 text-sm text-white/70 leading-relaxed">
                          Right? The frosted glass effect is so satisfying to look at!
                        </p>
                        <div className="flex items-center gap-4 mt-3">
                          <button className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white/70 transition-colors">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                            24
                          </button>
                          <button className="text-xs text-white/50 hover:text-white/70 transition-colors">Reply</button>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <img
                        src="https://i.pravatar.cc/80?img=47"
                        alt="Zara Kim"
                        className="w-9 h-9 rounded-full border border-white/20"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-white text-sm">Zara Kim</span>
                          <span className="text-xs text-white/40">1h ago</span>
                        </div>
                        <p className="mt-2 text-sm text-white/70 leading-relaxed">
                          The gradient background really makes it pop!
                        </p>
                        <div className="flex items-center gap-4 mt-3">
                          <button className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white/70 transition-colors">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                            15
                          </button>
                          <button className="text-xs text-white/50 hover:text-white/70 transition-colors">Reply</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment 2 */}
            <div className="bg-white/5 backdrop-blur rounded-2xl p-5 border border-white/10">
              <div className="flex gap-4">
                <img
                  src="https://i.pravatar.cc/80?img=22"
                  alt="Marcus Chen"
                  className="w-11 h-11 rounded-full border-2 border-white/20"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-white">Marcus Chen</span>
                    <span className="text-xs text-white/40">5h ago</span>
                  </div>
                  <p className="mt-3 text-white/80 leading-relaxed">
                    Been trying to implement this style in my projects. Any tips on getting the blur just right?
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                      <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      <span className="text-sm text-white/70">34</span>
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-sm text-white/70">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                      </svg>
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment 3 */}
            <div className="bg-white/5 backdrop-blur rounded-2xl p-5 border border-white/10">
              <div className="flex gap-4">
                <img
                  src="https://i.pravatar.cc/80?img=58"
                  alt="Aria Thompson"
                  className="w-11 h-11 rounded-full border-2 border-white/20"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-white">Aria Thompson</span>
                    <span className="text-xs text-white/40">8h ago</span>
                  </div>
                  <p className="mt-3 text-white/80 leading-relaxed">
                    This is giving major iOS vibes and I am here for it!
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                      <svg className="w-4 h-4 text-pink-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      <span className="text-sm text-white/70">67</span>
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-sm text-white/70">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                      </svg>
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Load More */}
          <div className="mt-8 text-center">
            <button className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur rounded-xl text-white/80 transition-all">
              Load more comments
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
