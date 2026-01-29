export default function MonochromeCommentSection() {
  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <div className="max-w-2xl mx-auto">
        <div className="border-4 border-black p-6 md:p-8">
          <div className="border-b-2 border-black pb-4 mb-8">
            <h2 className="text-3xl font-bold text-black uppercase tracking-tight">Comments</h2>
            <p className="text-black mt-2 font-mono text-sm">39 entries</p>
          </div>

          {/* Comment Input */}
          <div className="mb-10 border-2 border-black p-4 bg-gray-100">
            <div className="flex gap-4">
              <div className="w-14 h-14 bg-black flex-shrink-0 flex items-center justify-center">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <div className="flex-1">
                <textarea
                  placeholder="TYPE YOUR COMMENT..."
                  className="w-full bg-white border-2 border-black p-3 outline-none resize-none text-black placeholder:text-gray-500 font-mono text-sm"
                  rows={3}
                />
                <div className="flex justify-end mt-3">
                  <button className="px-8 py-3 bg-black text-white font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Comments */}
          <div className="space-y-6">
            {/* Comment 1 */}
            <div className="border-2 border-black p-5 bg-white">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-black flex-shrink-0 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AJ</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-bold text-black uppercase">ALICE JOHNSON</span>
                    <span className="px-3 py-1 bg-black text-white text-xs font-mono">ADMIN</span>
                    <span className="text-xs font-mono text-gray-600">04:23 PM</span>
                  </div>
                  <p className="mt-3 text-black leading-relaxed">
                    Monochrome design strips away all distractions. What remains is pure content, pure hierarchy, pure function. Black and white force you to focus on structure and typography.
                  </p>
                  <div className="flex items-center gap-4 mt-4 pt-3 border-t border-black">
                    <button className="flex items-center gap-2 text-black hover:bg-gray-100 px-3 py-1.5 border border-black transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                      </svg>
                      <span className="font-bold text-sm">178</span>
                    </button>
                    <button className="flex items-center gap-2 text-black hover:bg-gray-100 px-3 py-1.5 border border-black transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    <button className="text-sm font-bold text-black uppercase hover:bg-gray-100 px-3 py-1.5 transition-colors">
                      Reply
                    </button>
                  </div>

                  {/* Nested Replies */}
                  <div className="mt-5 ml-4 border-l-4 border-black pl-4 space-y-4">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 bg-gray-800 flex-shrink-0 flex items-center justify-center">
                        <span className="text-white font-bold">BC</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-black text-sm uppercase">BEN CLARK</span>
                          <span className="text-xs font-mono text-gray-600">02:15 PM</span>
                        </div>
                        <p className="mt-2 text-sm text-black leading-relaxed">
                          Exactly. No color means no emotional manipulation. Just facts and content.
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <button className="flex items-center gap-1.5 text-xs text-black hover:bg-gray-100 px-2 py-1 border border-black">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                            52
                          </button>
                          <button className="text-xs font-bold text-black uppercase hover:bg-gray-100 px-2 py-1">Reply</button>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="w-10 h-10 bg-gray-600 flex-shrink-0 flex items-center justify-center">
                        <span className="text-white font-bold">KW</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-black text-sm uppercase">KATE WHITE</span>
                          <span className="text-xs font-mono text-gray-600">01:08 PM</span>
                        </div>
                        <p className="mt-2 text-sm text-black leading-relaxed">
                          The stark contrast makes everything incredibly legible. Great for accessibility.
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <button className="flex items-center gap-1.5 text-xs text-black hover:bg-gray-100 px-2 py-1 border border-black">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                            67
                          </button>
                          <button className="text-xs font-bold text-black uppercase hover:bg-gray-100 px-2 py-1">Reply</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment 2 */}
            <div className="border-2 border-black p-5 bg-gray-50">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-900 flex-shrink-0 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MD</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-black uppercase">MARK DAVIS</span>
                    <span className="text-xs font-mono text-gray-600">09:47 AM</span>
                  </div>
                  <p className="mt-3 text-black leading-relaxed">
                    This brutalist approach to comments is refreshing. The heavy borders and bold typography create a powerful visual statement.
                  </p>
                  <div className="flex items-center gap-4 mt-4 pt-3 border-t border-black">
                    <button className="flex items-center gap-2 text-black hover:bg-gray-100 px-3 py-1.5 border border-black transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                      </svg>
                      <span className="font-bold text-sm">143</span>
                    </button>
                    <button className="flex items-center gap-2 text-black hover:bg-gray-100 px-3 py-1.5 border border-black transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    <button className="text-sm font-bold text-black uppercase hover:bg-gray-100 px-3 py-1.5 transition-colors">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment 3 */}
            <div className="border-2 border-black p-5 bg-white">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-black flex-shrink-0 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SN</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-black uppercase">SARA NELSON</span>
                    <span className="text-xs font-mono text-gray-600">YESTERDAY</span>
                  </div>
                  <p className="mt-3 text-black leading-relaxed">
                    Black and white. That's all you need. Pure, uncompromising, timeless.
                  </p>
                  <div className="flex items-center gap-4 mt-4 pt-3 border-t border-black">
                    <button className="flex items-center gap-2 bg-black text-white px-3 py-1.5 border-2 border-black">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                      </svg>
                      <span className="font-bold text-sm">256</span>
                    </button>
                    <button className="flex items-center gap-2 text-black hover:bg-gray-100 px-3 py-1.5 border border-black transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    <button className="text-sm font-bold text-black uppercase hover:bg-gray-100 px-3 py-1.5 transition-colors">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Load More */}
          <div className="mt-8 text-center">
            <button className="px-10 py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors w-full">
              Load More Comments
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
