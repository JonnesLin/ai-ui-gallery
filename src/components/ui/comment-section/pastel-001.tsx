export default function PastelCommentSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-6 md:p-12">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 mb-8 shadow-lg border border-purple-100">
          <h2 className="text-3xl font-bold text-purple-400">Comments</h2>
          <p className="mt-2 text-base text-purple-300">24 lovely thoughts</p>
        </div>

        {/* Comment Input */}
        <div className="bg-gradient-to-br from-pink-100 to-purple-100 backdrop-blur-sm rounded-3xl p-6 mb-8 shadow-lg border border-pink-200">
          <div className="flex gap-4 items-start">
            <img
              src="https://i.pravatar.cc/80?img=1"
              alt="Your avatar"
              className="w-14 h-14 rounded-full border-4 border-white shadow-md"
            />
            <div className="flex-1">
              <textarea
                placeholder="Share your thoughts..."
                className="w-full rounded-2xl bg-white/80 p-4 text-purple-700 placeholder:text-purple-300 resize-none focus:outline-none focus:ring-2 focus:ring-purple-300 border border-purple-100"
                rows={3}
              />
              <button className="mt-4 bg-gradient-to-r from-pink-300 to-purple-300 text-white font-semibold px-6 py-2.5 rounded-full hover:from-pink-400 hover:to-purple-400 shadow-md transition-all">
                Post Comment
              </button>
            </div>
          </div>
        </div>

        {/* Comments List */}
        <div className="space-y-6">
          {/* Comment 1 */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-5 shadow-lg border border-blue-100">
            <div className="flex gap-4">
              <img
                src="https://i.pravatar.cc/80?img=12"
                alt="Sarah Chen"
                className="w-14 h-14 rounded-full border-4 border-pink-200 shadow-md"
              />
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-lg font-semibold text-purple-600">Sarah Chen</span>
                  <span className="bg-purple-200 text-purple-600 px-3 py-1 text-sm rounded-full">2h ago</span>
                </div>
                <p className="mt-3 text-base text-gray-600 leading-relaxed">
                  This soft color palette is absolutely dreamy! The gentle gradients create such a calming and welcoming atmosphere.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <button className="bg-gradient-to-r from-pink-200 to-purple-200 px-4 py-2 font-medium text-purple-600 hover:from-pink-300 hover:to-purple-300 flex items-center gap-2 rounded-full shadow-sm transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>
                    42
                  </button>
                  <button className="bg-blue-100 px-4 py-2 font-medium text-blue-600 hover:bg-blue-200 rounded-full transition-all">
                    Reply
                  </button>
                </div>

                {/* Nested Replies */}
                <div className="mt-5 ml-0 pl-5 border-l-4 border-pink-200 space-y-4 bg-gradient-to-r from-pink-50/50 to-transparent rounded-r-2xl p-4">
                  <div className="flex gap-3">
                    <img
                      src="https://i.pravatar.cc/80?img=33"
                      alt="Alex Rivera"
                      className="w-12 h-12 rounded-full border-3 border-blue-200 shadow-md"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-base font-semibold text-purple-600">Alex Rivera</span>
                        <span className="bg-blue-200 text-blue-600 px-2 py-0.5 text-xs rounded-full">1h ago</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        Completely agree! The soft pastels are so soothing to the eyes.
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <button className="bg-gradient-to-r from-blue-200 to-purple-200 px-3 py-1.5 font-medium text-purple-600 text-sm rounded-full shadow-sm">
                          <svg className="w-3.5 h-3.5 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                          </svg>
                          12
                        </button>
                        <button className="bg-pink-100 px-3 py-1.5 font-medium text-pink-600 text-sm rounded-full">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <img
                      src="https://i.pravatar.cc/80?img=45"
                      alt="Maya Patel"
                      className="w-12 h-12 rounded-full border-3 border-purple-200 shadow-md"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-base font-semibold text-purple-600">Maya Patel</span>
                        <span className="bg-purple-200 text-purple-600 px-2 py-0.5 text-xs rounded-full">45m ago</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        The rounded corners and soft shadows add such a delicate touch!
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <button className="bg-gradient-to-r from-purple-200 to-pink-200 px-3 py-1.5 font-medium text-purple-600 text-sm rounded-full shadow-sm">
                          <svg className="w-3.5 h-3.5 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                          </svg>
                          8
                        </button>
                        <button className="bg-blue-100 px-3 py-1.5 font-medium text-blue-600 text-sm rounded-full">
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
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-5 shadow-lg border border-pink-100">
            <div className="flex gap-4">
              <img
                src="https://i.pravatar.cc/80?img=22"
                alt="James Wilson"
                className="w-14 h-14 rounded-full border-4 border-blue-200 shadow-md"
              />
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-lg font-semibold text-purple-600">James Wilson</span>
                  <span className="bg-blue-200 text-blue-600 px-3 py-1 text-sm rounded-full">4h ago</span>
                </div>
                <p className="mt-3 text-base text-gray-600 leading-relaxed">
                  Love how gentle and approachable this design feels. Perfect for creating a friendly community space.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <button className="bg-gradient-to-r from-blue-200 to-pink-200 px-4 py-2 font-medium text-purple-600 hover:from-blue-300 hover:to-pink-300 flex items-center gap-2 rounded-full shadow-sm transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>
                    28
                  </button>
                  <button className="bg-purple-100 px-4 py-2 font-medium text-purple-600 hover:bg-purple-200 rounded-full transition-all">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Comment 3 */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-5 shadow-lg border border-purple-100">
            <div className="flex gap-4">
              <img
                src="https://i.pravatar.cc/80?img=58"
                alt="Emma Thompson"
                className="w-14 h-14 rounded-full border-4 border-purple-200 shadow-md"
              />
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-lg font-semibold text-purple-600">Emma Thompson</span>
                  <span className="bg-pink-200 text-pink-600 px-3 py-1 text-sm rounded-full">6h ago</span>
                </div>
                <p className="mt-3 text-base text-gray-600 leading-relaxed">
                  Beautiful execution! The pastel gradient background is simply enchanting.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <button className="bg-gradient-to-r from-pink-200 to-blue-200 px-4 py-2 font-medium text-purple-600 hover:from-pink-300 hover:to-blue-300 flex items-center gap-2 rounded-full shadow-sm transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>
                    56
                  </button>
                  <button className="bg-blue-100 px-4 py-2 font-medium text-blue-600 hover:bg-blue-200 rounded-full transition-all">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 text-white font-semibold px-10 py-3 rounded-full text-lg hover:from-pink-400 hover:via-purple-400 hover:to-blue-400 shadow-lg transition-all">
            Load More Comments
          </button>
        </div>
      </div>
    </div>
  )
}
