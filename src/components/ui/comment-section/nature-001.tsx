export default function NatureCommentSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-teal-50 p-6 md:p-12">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-green-100">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-green-900">Comments</h2>
            <div className="flex items-center gap-2 mt-2">
              <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <p className="text-green-700 text-sm">42 organic thoughts shared</p>
            </div>
          </div>

          {/* Comment Input */}
          <div className="mb-8 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-5 border-2 border-green-200">
            <div className="flex gap-4">
              <img
                src="https://i.pravatar.cc/80?img=1"
                alt="Your avatar"
                className="w-12 h-12 rounded-full ring-4 ring-green-200"
              />
              <div className="flex-1">
                <textarea
                  placeholder="Share your thoughts with the community..."
                  className="w-full bg-white/80 rounded-xl p-3 outline-none resize-none text-green-900 placeholder:text-green-600 border border-green-200 focus:border-green-400 transition-colors"
                  rows={3}
                />
                <div className="flex justify-between items-center mt-3">
                  <div className="flex gap-2">
                    <button className="w-9 h-9 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center transition-colors">
                      <svg className="w-5 h-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                    <button className="w-9 h-9 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center transition-colors">
                      <svg className="w-5 h-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                  <button className="px-6 py-2.5 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full font-medium hover:shadow-lg hover:from-green-700 hover:to-teal-700 transition-all">
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Comments */}
          <div className="space-y-5">
            {/* Comment 1 */}
            <div className="bg-gradient-to-br from-white to-green-50/50 rounded-2xl p-5 border border-green-100 hover:border-green-200 transition-colors">
              <div className="flex gap-4">
                <img
                  src="https://i.pravatar.cc/80?img=12"
                  alt="Emma Forest"
                  className="w-11 h-11 rounded-full ring-4 ring-green-100"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-semibold text-green-900">Emma Forest</span>
                    <span className="px-3 py-1 bg-green-100 rounded-full text-xs text-green-700 font-medium flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                      Contributor
                    </span>
                    <span className="text-xs text-green-600">3 hours ago</span>
                  </div>
                  <p className="mt-2 text-green-800 leading-relaxed">
                    Nature-inspired design brings such calmness to digital spaces. The organic shapes and earthy greens create a harmonious environment that reduces stress and invites engagement.
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <button className="flex items-center gap-1.5 text-green-700 hover:text-green-900 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                      </svg>
                      <span className="text-sm font-medium">164</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-green-700 hover:text-green-900 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <button className="text-sm font-medium text-green-700 hover:text-green-900 transition-colors">
                      Reply
                    </button>
                    <button className="ml-auto text-sm text-green-600 hover:text-green-800 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                  </div>

                  {/* Nested Replies */}
                  <div className="mt-4 space-y-4">
                    <div className="flex gap-3 pl-3 border-l-4 border-green-200">
                      <img
                        src="https://i.pravatar.cc/80?img=33"
                        alt="Liam Woods"
                        className="w-9 h-9 rounded-full ring-3 ring-green-100"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-green-900 text-sm">Liam Woods</span>
                          <span className="text-xs text-green-600">2h ago</span>
                        </div>
                        <p className="mt-1.5 text-sm text-green-800 leading-relaxed">
                          The rounded edges mimic natural forms. Nothing in nature has sharp corners!
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <button className="flex items-center gap-1 text-xs text-green-700 hover:text-green-900">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                            </svg>
                            47
                          </button>
                          <button className="text-xs font-medium text-green-700 hover:text-green-900">Reply</button>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 pl-3 border-l-4 border-green-200">
                      <img
                        src="https://i.pravatar.cc/80?img=47"
                        alt="Willow Green"
                        className="w-9 h-9 rounded-full ring-3 ring-green-100"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-green-900 text-sm">Willow Green</span>
                          <span className="text-xs text-green-600">1h ago</span>
                        </div>
                        <p className="mt-1.5 text-sm text-green-800 leading-relaxed">
                          The gradient from green to teal feels like a forest transitioning to water. Beautiful!
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <button className="flex items-center gap-1 text-xs text-green-700 hover:text-green-900">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                            </svg>
                            63
                          </button>
                          <button className="text-xs font-medium text-green-700 hover:text-green-900">Reply</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment 2 */}
            <div className="bg-gradient-to-br from-white to-green-50/50 rounded-2xl p-5 border border-green-100 hover:border-green-200 transition-colors">
              <div className="flex gap-4">
                <img
                  src="https://i.pravatar.cc/80?img=22"
                  alt="River Stone"
                  className="w-11 h-11 rounded-full ring-4 ring-green-100"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-green-900">River Stone</span>
                    <span className="text-xs text-green-600">7 hours ago</span>
                  </div>
                  <p className="mt-2 text-green-800 leading-relaxed">
                    This feels like browsing comments under a canopy of trees. The soft lighting and natural palette are so refreshing compared to harsh digital environments.
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <button className="flex items-center gap-1.5 text-green-700 hover:text-green-900 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                      </svg>
                      <span className="text-sm font-medium">132</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-green-700 hover:text-green-900 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <button className="text-sm font-medium text-green-700 hover:text-green-900 transition-colors">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment 3 */}
            <div className="bg-gradient-to-br from-white to-green-50/50 rounded-2xl p-5 border border-green-100 hover:border-green-200 transition-colors">
              <div className="flex gap-4">
                <img
                  src="https://i.pravatar.cc/80?img=58"
                  alt="Ivy Bloom"
                  className="w-11 h-11 rounded-full ring-4 ring-green-100"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-green-900">Ivy Bloom</span>
                    <span className="text-xs text-green-600">1 day ago</span>
                  </div>
                  <p className="mt-2 text-green-800 leading-relaxed">
                    Finally, a design that feels alive and growing rather than cold and mechanical. We need more of this biophilic approach!
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <button className="flex items-center gap-1.5 text-green-700">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 15l7-7 7 7" />
                      </svg>
                      <span className="text-sm font-medium">218</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-green-700 hover:text-green-900 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <button className="text-sm font-medium text-green-700 hover:text-green-900 transition-colors">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Load More */}
          <div className="mt-8 text-center">
            <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full font-medium hover:shadow-lg hover:from-green-600 hover:to-teal-600 transition-all flex items-center gap-2 mx-auto">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              Load More Comments
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
