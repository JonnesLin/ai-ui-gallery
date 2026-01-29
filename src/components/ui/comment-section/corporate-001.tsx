export default function CorporateCommentSection() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border-l-4 border-blue-600 p-6 mb-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900">Discussion</h2>
          <p className="mt-1 text-sm text-gray-500">24 comments</p>
        </div>

        {/* Comment Input */}
        <div className="bg-white border border-gray-200 p-6 mb-8 shadow-sm">
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center text-white font-semibold flex-shrink-0">
              JD
            </div>
            <div className="flex-1">
              <textarea
                placeholder="Add your comment..."
                className="w-full border border-gray-300 rounded p-3 text-sm text-gray-700 placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
              />
              <div className="flex justify-between items-center mt-4">
                <p className="text-xs text-gray-500">Please maintain professional communication standards</p>
                <button className="bg-blue-600 text-white font-medium px-6 py-2 rounded hover:bg-blue-700 transition-colors text-sm">
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Comments List */}
        <div className="space-y-6">
          {/* Comment 1 */}
          <div className="bg-white border border-gray-200 p-6 shadow-sm">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-emerald-600 rounded flex items-center justify-center text-white font-semibold flex-shrink-0">
                SC
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-base font-semibold text-gray-900">Sarah Chen</span>
                  <span className="text-xs text-gray-500">Senior Product Manager</span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500">2 hours ago</span>
                </div>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  This strategic approach aligns well with our Q4 objectives. The clean, professional interface enhances user engagement while maintaining brand consistency across all touchpoints.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <button className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-blue-600 transition-colors font-medium">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    <span>42</span>
                  </button>
                  <button className="text-xs text-gray-600 hover:text-blue-600 transition-colors font-medium">
                    Reply
                  </button>
                  <button className="text-xs text-gray-600 hover:text-blue-600 transition-colors font-medium">
                    Share
                  </button>
                </div>

                {/* Nested Replies */}
                <div className="mt-5 ml-0 pl-6 border-l-2 border-gray-200 space-y-4">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-indigo-600 rounded flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                      AR
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-semibold text-gray-900">Alex Rivera</span>
                        <span className="text-xs text-gray-500">UX Director</span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-500">1 hour ago</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-700">
                        Agreed. We've validated this approach through extensive user research. The data supports this direction.
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <button className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-blue-600 transition-colors font-medium">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                          </svg>
                          <span>12</span>
                        </button>
                        <button className="text-xs text-gray-600 hover:text-blue-600 transition-colors font-medium">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-purple-600 rounded flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                      MP
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-semibold text-gray-900">Maya Patel</span>
                        <span className="text-xs text-gray-500">Design Lead</span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-500">45 minutes ago</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-700">
                        The accessibility compliance is excellent. This meets all WCAG 2.1 AA standards.
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <button className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-blue-600 transition-colors font-medium">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                          </svg>
                          <span>8</span>
                        </button>
                        <button className="text-xs text-gray-600 hover:text-blue-600 transition-colors font-medium">
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
          <div className="bg-white border border-gray-200 p-6 shadow-sm">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-amber-600 rounded flex items-center justify-center text-white font-semibold flex-shrink-0">
                JW
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-base font-semibold text-gray-900">James Wilson</span>
                  <span className="text-xs text-gray-500">VP of Engineering</span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500">4 hours ago</span>
                </div>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  From a technical perspective, this implementation demonstrates excellent scalability and maintainability. The architecture supports our long-term growth strategy.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <button className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-blue-600 transition-colors font-medium">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    <span>28</span>
                  </button>
                  <button className="text-xs text-gray-600 hover:text-blue-600 transition-colors font-medium">
                    Reply
                  </button>
                  <button className="text-xs text-gray-600 hover:text-blue-600 transition-colors font-medium">
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Comment 3 */}
          <div className="bg-white border border-gray-200 p-6 shadow-sm">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-rose-600 rounded flex items-center justify-center text-white font-semibold flex-shrink-0">
                ET
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-base font-semibold text-gray-900">Emma Thompson</span>
                  <span className="text-xs text-gray-500">Chief Marketing Officer</span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500">6 hours ago</span>
                </div>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  This professional aesthetic strengthens our brand positioning in the enterprise market. The implementation quality reflects our commitment to excellence.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <button className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-blue-600 transition-colors font-medium">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    <span>56</span>
                  </button>
                  <button className="text-xs text-gray-600 hover:text-blue-600 transition-colors font-medium">
                    Reply
                  </button>
                  <button className="text-xs text-gray-600 hover:text-blue-600 transition-colors font-medium">
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="bg-white border border-gray-300 text-gray-700 font-medium px-8 py-2.5 rounded hover:bg-gray-50 transition-colors text-sm shadow-sm">
            Load More Comments
          </button>
        </div>
      </div>
    </div>
  )
}
