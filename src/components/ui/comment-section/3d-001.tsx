export default function ThreeDCommentSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-6 md:p-12">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]" style={{ transform: 'perspective(1000px) rotateX(2deg)' }}>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
              Comments
            </h2>
            <p className="text-sm text-gray-600 mt-1">38 discussions</p>
          </div>

          {/* Comment Input */}
          <div className="flex gap-4 mb-8">
            <img
              src="https://i.pravatar.cc/80?img=1"
              alt="Your avatar"
              className="w-12 h-12 rounded-full shadow-[4px_4px_12px_rgba(0,0,0,0.25)]"
              style={{ transform: 'translateZ(20px)' }}
            />
            <div className="flex-1 bg-white rounded-xl p-4 shadow-[inset_2px_2px_8px_rgba(0,0,0,0.1),4px_4px_16px_rgba(0,0,0,0.15)]" style={{ transform: 'translateZ(10px)' }}>
              <textarea
                placeholder="Share your thoughts..."
                className="w-full bg-transparent outline-none resize-none text-gray-800 placeholder:text-gray-400"
                rows={3}
              />
              <div className="flex justify-end mt-3">
                <button className="px-6 py-2.5 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg font-medium shadow-[0_6px_20px_rgba(59,130,246,0.4)] hover:shadow-[0_8px_25px_rgba(59,130,246,0.5)] hover:translate-y-[-2px] transition-all" style={{ transform: 'translateZ(30px)' }}>
                  Post Comment
                </button>
              </div>
            </div>
          </div>

          {/* Comments */}
          <div className="space-y-6">
            {/* Comment 1 */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 shadow-[4px_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[6px_6px_30px_rgba(0,0,0,0.2)] transition-shadow" style={{ transform: 'translateZ(15px)' }}>
              <div className="flex gap-4">
                <img
                  src="https://i.pravatar.cc/80?img=12"
                  alt="Michael Chen"
                  className="w-11 h-11 rounded-full shadow-[3px_3px_10px_rgba(0,0,0,0.2)]"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-gray-900" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
                      Michael Chen
                    </span>
                    <span className="text-xs text-gray-500">4 hours ago</span>
                  </div>
                  <p className="mt-2 text-gray-700 leading-relaxed">
                    The depth and shadow effects in this design create such a tangible, physical feeling. It's like the comments are floating above the page!
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg text-gray-600 hover:text-blue-600 shadow-[2px_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[3px_3px_12px_rgba(0,0,0,0.15)] transition-all">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                      </svg>
                      <span className="text-sm font-medium">156</span>
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg text-gray-600 hover:text-red-600 shadow-[2px_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[3px_3px_12px_rgba(0,0,0,0.15)] transition-all">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                      Reply
                    </button>
                  </div>

                  {/* Nested Replies */}
                  <div className="mt-4 ml-4 space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-[3px_3px_15px_rgba(0,0,0,0.12)]" style={{ transform: 'translateZ(8px)' }}>
                      <div className="flex gap-3">
                        <img
                          src="https://i.pravatar.cc/80?img=33"
                          alt="Lisa Park"
                          className="w-9 h-9 rounded-full shadow-[2px_2px_8px_rgba(0,0,0,0.15)]"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-900 text-sm">Lisa Park</span>
                            <span className="text-xs text-gray-500">2h ago</span>
                          </div>
                          <p className="mt-1.5 text-sm text-gray-700">
                            Absolutely! The layered shadow technique is masterful here.
                          </p>
                          <div className="flex items-center gap-3 mt-2">
                            <button className="flex items-center gap-1 text-xs text-gray-600 hover:text-blue-600">
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                              </svg>
                              42
                            </button>
                            <button className="text-xs text-gray-600 hover:text-gray-900">Reply</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-[3px_3px_15px_rgba(0,0,0,0.12)]" style={{ transform: 'translateZ(8px)' }}>
                      <div className="flex gap-3">
                        <img
                          src="https://i.pravatar.cc/80?img=47"
                          alt="David Kumar"
                          className="w-9 h-9 rounded-full shadow-[2px_2px_8px_rgba(0,0,0,0.15)]"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-900 text-sm">David Kumar</span>
                            <span className="text-xs text-gray-500">1h ago</span>
                          </div>
                          <p className="mt-1.5 text-sm text-gray-700">
                            This reminds me of Material Design but taken to the next level.
                          </p>
                          <div className="flex items-center gap-3 mt-2">
                            <button className="flex items-center gap-1 text-xs text-gray-600 hover:text-blue-600">
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                              </svg>
                              28
                            </button>
                            <button className="text-xs text-gray-600 hover:text-gray-900">Reply</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment 2 */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 shadow-[4px_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[6px_6px_30px_rgba(0,0,0,0.2)] transition-shadow" style={{ transform: 'translateZ(15px)' }}>
              <div className="flex gap-4">
                <img
                  src="https://i.pravatar.cc/80?img=22"
                  alt="Rachel Green"
                  className="w-11 h-11 rounded-full shadow-[3px_3px_10px_rgba(0,0,0,0.2)]"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-gray-900" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
                      Rachel Green
                    </span>
                    <span className="text-xs text-gray-500">8 hours ago</span>
                  </div>
                  <p className="mt-2 text-gray-700 leading-relaxed">
                    The perspective transform on the container is a nice touch. Everything feels dimensional and engaging.
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg text-gray-600 hover:text-blue-600 shadow-[2px_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[3px_3px_12px_rgba(0,0,0,0.15)] transition-all">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                      </svg>
                      <span className="text-sm font-medium">94</span>
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg text-gray-600 hover:text-red-600 shadow-[2px_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[3px_3px_12px_rgba(0,0,0,0.15)] transition-all">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment 3 */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 shadow-[4px_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[6px_6px_30px_rgba(0,0,0,0.2)] transition-shadow" style={{ transform: 'translateZ(15px)' }}>
              <div className="flex gap-4">
                <img
                  src="https://i.pravatar.cc/80?img=58"
                  alt="Tom Anderson"
                  className="w-11 h-11 rounded-full shadow-[3px_3px_10px_rgba(0,0,0,0.2)]"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-gray-900" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
                      Tom Anderson
                    </span>
                    <span className="text-xs text-gray-500">1 day ago</span>
                  </div>
                  <p className="mt-2 text-gray-700 leading-relaxed">
                    Love how interactive buttons have their own shadow layers. The hierarchy is crystal clear!
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg text-blue-600 shadow-[2px_2px_8px_rgba(0,0,0,0.1)] transition-all">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                      </svg>
                      <span className="text-sm font-medium">183</span>
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg text-gray-600 hover:text-red-600 shadow-[2px_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[3px_3px_12px_rgba(0,0,0,0.15)] transition-all">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Load More */}
          <div className="mt-8 text-center">
            <button className="px-8 py-3 bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700 rounded-lg font-medium shadow-[3px_3px_15px_rgba(0,0,0,0.15)] hover:shadow-[5px_5px_20px_rgba(0,0,0,0.2)] hover:translate-y-[-2px] transition-all">
              Load More Comments
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
