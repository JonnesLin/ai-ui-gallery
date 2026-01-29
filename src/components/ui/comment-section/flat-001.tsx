export default function FlatCommentSection() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-6 md:p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Comments</h2>
            <p className="text-sm text-gray-600 mt-1">32 responses</p>
          </div>

          {/* Comment Input */}
          <div className="flex gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">Y</span>
            </div>
            <div className="flex-1 bg-gray-50 p-4">
              <textarea
                placeholder="Write a comment..."
                className="w-full bg-transparent outline-none resize-none text-gray-800 placeholder:text-gray-500"
                rows={3}
              />
              <div className="flex justify-end mt-3">
                <button className="px-6 py-2.5 bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors">
                  Post
                </button>
              </div>
            </div>
          </div>

          {/* Comments */}
          <div className="space-y-6">
            {/* Comment 1 */}
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">SC</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-gray-900">Sarah Collins</span>
                    <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1">3h ago</span>
                  </div>
                  <p className="mt-2 text-gray-800 leading-relaxed">
                    Flat design is all about clarity and simplicity. No unnecessary decorations, just pure content and functionality.
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <button className="flex items-center gap-1.5 text-gray-700 hover:text-blue-500 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                      </svg>
                      <span className="font-medium">142</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-gray-700 hover:text-red-500 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    <button className="font-medium text-gray-700 hover:text-gray-900 transition-colors">
                      Reply
                    </button>
                  </div>

                  {/* Nested Replies */}
                  <div className="mt-4 ml-0 border-l-2 border-gray-200 pl-4 space-y-4">
                    <div className="flex gap-3">
                      <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">JD</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-900 text-sm">John Davis</span>
                          <span className="text-xs text-gray-600 bg-gray-100 px-2 py-0.5">2h ago</span>
                        </div>
                        <p className="mt-1.5 text-sm text-gray-800">
                          Exactly! The bold colors and clean lines make everything so easy to scan.
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <button className="flex items-center gap-1 text-xs text-gray-700 hover:text-blue-500">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                            38
                          </button>
                          <button className="text-xs font-medium text-gray-700 hover:text-gray-900">Reply</button>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="w-9 h-9 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">AM</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-900 text-sm">Anna Mitchell</span>
                          <span className="text-xs text-gray-600 bg-gray-100 px-2 py-0.5">1h ago</span>
                        </div>
                        <p className="mt-1.5 text-sm text-gray-800">
                          I appreciate how flat design loads faster too. No heavy graphics or effects.
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <button className="flex items-center gap-1 text-xs text-gray-700 hover:text-blue-500">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                            52
                          </button>
                          <button className="text-xs font-medium text-gray-700 hover:text-gray-900">Reply</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment 2 */}
            <div className="border-l-4 border-emerald-500 pl-4">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-pink-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">MB</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-gray-900">Maria Brown</span>
                    <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1">6h ago</span>
                  </div>
                  <p className="mt-2 text-gray-800 leading-relaxed">
                    The solid color avatars work perfectly in this flat aesthetic. No need for actual photos!
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <button className="flex items-center gap-1.5 text-gray-700 hover:text-blue-500 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                      </svg>
                      <span className="font-medium">89</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-gray-700 hover:text-red-500 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    <button className="font-medium text-gray-700 hover:text-gray-900 transition-colors">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment 3 */}
            <div className="border-l-4 border-yellow-500 pl-4">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">RT</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-gray-900">Robert Taylor</span>
                    <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1">10h ago</span>
                  </div>
                  <p className="mt-2 text-gray-800 leading-relaxed">
                    Clean, direct, and functional. This is what modern UI should be about.
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <button className="flex items-center gap-1.5 text-blue-500">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                      </svg>
                      <span className="font-medium">176</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-gray-700 hover:text-red-500 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    <button className="font-medium text-gray-700 hover:text-gray-900 transition-colors">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Load More */}
          <div className="mt-8 text-center">
            <button className="px-8 py-3 bg-gray-800 text-white font-medium hover:bg-gray-900 transition-colors">
              Show More Comments
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
