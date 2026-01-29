export default function NeumorphismCommentSection() {
  return (
    <div className="min-h-screen bg-[#e0e5ec] p-6 md:p-12">
      <div className="max-w-2xl mx-auto">
        <div className="rounded-3xl bg-[#e0e5ec] shadow-[20px_20px_60px_#bec3c9,-20px_-20px_60px_#ffffff] p-6 md:p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-700">Discussion</h2>
              <p className="text-sm text-gray-500 mt-1">Share your thoughts</p>
            </div>
            <div className="px-4 py-2 rounded-xl bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#bec3c9,inset_-5px_-5px_10px_#ffffff] text-sm text-gray-600">
              28 comments
            </div>
          </div>

          {/* Comment Input */}
          <div className="flex gap-4 mb-10">
            <div className="w-12 h-12 rounded-full bg-[#e0e5ec] shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] p-0.5">
              <img
                src="https://i.pravatar.cc/80?img=1"
                alt="Your avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex-1 rounded-2xl bg-[#e0e5ec] shadow-[inset_5px_5px_10px_#bec3c9,inset_-5px_-5px_10px_#ffffff] p-4">
              <textarea
                placeholder="Write a comment..."
                className="w-full bg-transparent outline-none resize-none text-gray-700 placeholder:text-gray-400"
                rows={3}
              />
              <div className="flex justify-between items-center mt-3">
                <div className="flex gap-2">
                  <button className="p-2.5 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] transition-all">
                    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  <button className="p-2.5 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] transition-all">
                    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                  </button>
                </div>
                <button className="px-6 py-2.5 rounded-xl bg-[#e0e5ec] shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bec3c9,inset_-5px_-5px_10px_#ffffff] text-gray-700 font-medium transition-all">
                  Post
                </button>
              </div>
            </div>
          </div>

          {/* Comments */}
          <div className="space-y-6">
            {/* Comment 1 */}
            <div className="rounded-2xl bg-[#e0e5ec] shadow-[8px_8px_16px_#bec3c9,-8px_-8px_16px_#ffffff] p-5">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-[#e0e5ec] shadow-[4px_4px_8px_#bec3c9,-4px_-4px_8px_#ffffff] p-0.5 shrink-0">
                  <img
                    src="https://i.pravatar.cc/80?img=12"
                    alt="David Park"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-semibold text-gray-700">David Park</span>
                    <span className="text-xs text-gray-400">2 hours ago</span>
                  </div>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    This soft UI approach is so pleasing to the eye. The subtle shadows create such a tactile feeling!
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] transition-all">
                      <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                      </svg>
                      <span className="text-sm text-gray-600">45</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] transition-all">
                      <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <button className="px-4 py-2 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] text-sm text-gray-600 transition-all">
                      Reply
                    </button>
                  </div>

                  {/* Nested Replies */}
                  <div className="mt-5 pl-4 border-l-2 border-gray-300/50 space-y-4">
                    <div className="flex gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] p-0.5 shrink-0">
                        <img
                          src="https://i.pravatar.cc/80?img=33"
                          alt="Emily White"
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-700 text-sm">Emily White</span>
                          <span className="text-xs text-gray-400">1h ago</span>
                        </div>
                        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                          Agreed! It almost looks like you could press into it.
                        </p>
                        <div className="flex items-center gap-3 mt-3">
                          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#e0e5ec] shadow-[2px_2px_4px_#bec3c9,-2px_-2px_4px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] transition-all text-xs text-gray-500">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                            </svg>
                            18
                          </button>
                          <button className="px-3 py-1.5 rounded-lg bg-[#e0e5ec] shadow-[2px_2px_4px_#bec3c9,-2px_-2px_4px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] transition-all text-xs text-gray-500">
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] p-0.5 shrink-0">
                        <img
                          src="https://i.pravatar.cc/80?img=47"
                          alt="Tom Chen"
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-700 text-sm">Tom Chen</span>
                          <span className="text-xs text-gray-400">45m ago</span>
                        </div>
                        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                          The depth effect is really well executed here.
                        </p>
                        <div className="flex items-center gap-3 mt-3">
                          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#e0e5ec] shadow-[2px_2px_4px_#bec3c9,-2px_-2px_4px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] transition-all text-xs text-gray-500">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                            </svg>
                            12
                          </button>
                          <button className="px-3 py-1.5 rounded-lg bg-[#e0e5ec] shadow-[2px_2px_4px_#bec3c9,-2px_-2px_4px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bec3c9,inset_-2px_-2px_4px_#ffffff] transition-all text-xs text-gray-500">
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment 2 */}
            <div className="rounded-2xl bg-[#e0e5ec] shadow-[8px_8px_16px_#bec3c9,-8px_-8px_16px_#ffffff] p-5">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-[#e0e5ec] shadow-[4px_4px_8px_#bec3c9,-4px_-4px_8px_#ffffff] p-0.5 shrink-0">
                  <img
                    src="https://i.pravatar.cc/80?img=22"
                    alt="Sarah Kim"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-gray-700">Sarah Kim</span>
                    <span className="text-xs text-gray-400">5 hours ago</span>
                  </div>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    I love how the pressed state on buttons gives such satisfying feedback. Great attention to detail!
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] transition-all">
                      <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                      </svg>
                      <span className="text-sm text-gray-600">32</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] transition-all">
                      <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <button className="px-4 py-2 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] text-sm text-gray-600 transition-all">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment 3 */}
            <div className="rounded-2xl bg-[#e0e5ec] shadow-[8px_8px_16px_#bec3c9,-8px_-8px_16px_#ffffff] p-5">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-[#e0e5ec] shadow-[4px_4px_8px_#bec3c9,-4px_-4px_8px_#ffffff] p-0.5 shrink-0">
                  <img
                    src="https://i.pravatar.cc/80?img=58"
                    alt="Alex Rivera"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-gray-700">Alex Rivera</span>
                    <span className="text-xs text-gray-400">8 hours ago</span>
                  </div>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    This design trend has really grown on me. So clean and modern!
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] transition-all">
                      <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                      </svg>
                      <span className="text-sm text-gray-600">56</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] transition-all">
                      <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <button className="px-4 py-2 rounded-xl bg-[#e0e5ec] shadow-[3px_3px_6px_#bec3c9,-3px_-3px_6px_#ffffff] hover:shadow-[inset_3px_3px_6px_#bec3c9,inset_-3px_-3px_6px_#ffffff] text-sm text-gray-600 transition-all">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Load More */}
          <div className="mt-8 text-center">
            <button className="px-8 py-3 rounded-2xl bg-[#e0e5ec] shadow-[5px_5px_10px_#bec3c9,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bec3c9,inset_-5px_-5px_10px_#ffffff] text-gray-600 font-medium transition-all">
              Load more comments
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
