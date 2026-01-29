export default function MaterialCommentSection() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-medium text-gray-900">Comments</h2>
            <p className="text-sm text-gray-600 mt-1">36 comments</p>
          </div>

          {/* Comment Input */}
          <div className="flex gap-4 mb-8">
            <img
              src="https://i.pravatar.cc/80?img=1"
              alt="Your avatar"
              className="w-12 h-12 rounded-full shadow-md"
            />
            <div className="flex-1">
              <div className="relative">
                <textarea
                  placeholder="Add a public comment..."
                  className="w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none resize-none py-2 text-gray-800 placeholder:text-gray-500 transition-colors"
                  rows={2}
                />
              </div>
              <div className="flex justify-end gap-2 mt-3">
                <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded transition-colors">
                  Cancel
                </button>
                <button className="px-6 py-2 text-sm font-medium bg-blue-600 text-white rounded hover:bg-blue-700 shadow-md hover:shadow-lg transition-all">
                  Comment
                </button>
              </div>
            </div>
          </div>

          {/* Comments */}
          <div className="space-y-6">
            {/* Comment 1 */}
            <div className="flex gap-4 group">
              <img
                src="https://i.pravatar.cc/80?img=12"
                alt="Emma Watson"
                className="w-11 h-11 rounded-full shadow-md"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">Emma Watson</span>
                  <span className="text-sm text-gray-600">5 hours ago</span>
                </div>
                <p className="mt-1.5 text-gray-800 leading-relaxed">
                  Material Design brings a tactile quality to digital interfaces. The elevation system and ripple effects make interactions feel natural and responsive.
                </p>
                <div className="flex items-center gap-4 mt-3">
                  <button className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 px-3 py-1.5 rounded transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.041 4.22 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                    </svg>
                    <span className="text-sm font-medium">152</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 px-3 py-1.5 rounded transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365-.183-.75-.375-1.125A3.376 3.376 0 0015 3c-.852 0-1.48.076-2.098.316M7.5 15H5.25m0 0A2.25 2.25 0 013 12.75v0A2.25 2.25 0 015.25 10.5h.128a11.24 11.24 0 01.003-.128m-.131.128a8.967 8.967 0 00-.12 1.501c0 1.553.294 3.036.831 4.398.197.501-.078.899-.523.899h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-4.553 2.7-8.478 6.586-10.247m.003-.128c.361-.147.738-.278 1.128-.392M11.25 15h-.128c-.36 0-.72.03-1.072.087m1.2-.087V9.375c0-1.244-1.007-2.25-2.25-2.25h-.918a2.25 2.25 0 00-2.124 1.5" />
                    </svg>
                  </button>
                  <button className="text-sm font-medium text-gray-700 hover:bg-gray-100 px-3 py-1.5 rounded transition-colors">
                    Reply
                  </button>
                </div>

                {/* Nested Replies */}
                <div className="mt-5 space-y-5">
                  <div className="flex gap-3">
                    <img
                      src="https://i.pravatar.cc/80?img=33"
                      alt="Oliver Smith"
                      className="w-9 h-9 rounded-full shadow-md"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900 text-sm">Oliver Smith</span>
                        <span className="text-sm text-gray-600">3h ago</span>
                      </div>
                      <p className="mt-1 text-sm text-gray-800 leading-relaxed">
                        The paper metaphor is brilliant. It helps users understand hierarchy instantly.
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <button className="flex items-center gap-1.5 text-gray-700 hover:bg-gray-100 px-2 py-1 rounded text-xs transition-colors">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.041 4.22 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                          </svg>
                          46
                        </button>
                        <button className="text-xs font-medium text-gray-700 hover:bg-gray-100 px-2 py-1 rounded transition-colors">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <img
                      src="https://i.pravatar.cc/80?img=47"
                      alt="Sophia Lee"
                      className="w-9 h-9 rounded-full shadow-md"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900 text-sm">Sophia Lee</span>
                        <span className="text-sm text-gray-600">2h ago</span>
                      </div>
                      <p className="mt-1 text-sm text-gray-800 leading-relaxed">
                        The shadows create depth without being overly dramatic. Perfect balance!
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <button className="flex items-center gap-1.5 text-gray-700 hover:bg-gray-100 px-2 py-1 rounded text-xs transition-colors">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.041 4.22 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                          </svg>
                          62
                        </button>
                        <button className="text-xs font-medium text-gray-700 hover:bg-gray-100 px-2 py-1 rounded transition-colors">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment 2 */}
            <div className="flex gap-4">
              <img
                src="https://i.pravatar.cc/80?img=22"
                alt="Lucas Brown"
                className="w-11 h-11 rounded-full shadow-md"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">Lucas Brown</span>
                  <span className="text-sm text-gray-600">8 hours ago</span>
                </div>
                <p className="mt-1.5 text-gray-800 leading-relaxed">
                  Google's Material Design continues to evolve while maintaining its core principles. The use of color, motion, and depth is masterful.
                </p>
                <div className="flex items-center gap-4 mt-3">
                  <button className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 px-3 py-1.5 rounded transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.041 4.22 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                    </svg>
                    <span className="text-sm font-medium">118</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 px-3 py-1.5 rounded transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365-.183-.75-.375-1.125A3.376 3.376 0 0015 3c-.852 0-1.48.076-2.098.316M7.5 15H5.25m0 0A2.25 2.25 0 013 12.75v0A2.25 2.25 0 015.25 10.5h.128a11.24 11.24 0 01.003-.128m-.131.128a8.967 8.967 0 00-.12 1.501c0 1.553.294 3.036.831 4.398.197.501-.078.899-.523.899h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-4.553 2.7-8.478 6.586-10.247m.003-.128c.361-.147.738-.278 1.128-.392M11.25 15h-.128c-.36 0-.72.03-1.072.087m1.2-.087V9.375c0-1.244-1.007-2.25-2.25-2.25h-.918a2.25 2.25 0 00-2.124 1.5" />
                    </svg>
                  </button>
                  <button className="text-sm font-medium text-gray-700 hover:bg-gray-100 px-3 py-1.5 rounded transition-colors">
                    Reply
                  </button>
                </div>
              </div>
            </div>

            {/* Comment 3 */}
            <div className="flex gap-4">
              <img
                src="https://i.pravatar.cc/80?img=58"
                alt="Ava Martinez"
                className="w-11 h-11 rounded-full shadow-md"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">Ava Martinez</span>
                  <span className="text-sm text-gray-600">1 day ago</span>
                </div>
                <p className="mt-1.5 text-gray-800 leading-relaxed">
                  The consistent use of rounded corners and elevation makes the interface feel cohesive and polished.
                </p>
                <div className="flex items-center gap-4 mt-3">
                  <button className="flex items-center gap-2 text-blue-600 px-3 py-1.5 rounded bg-blue-50">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.041 4.22 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                    </svg>
                    <span className="text-sm font-medium">247</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 px-3 py-1.5 rounded transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365-.183-.75-.375-1.125A3.376 3.376 0 0015 3c-.852 0-1.48.076-2.098.316M7.5 15H5.25m0 0A2.25 2.25 0 013 12.75v0A2.25 2.25 0 015.25 10.5h.128a11.24 11.24 0 01.003-.128m-.131.128a8.967 8.967 0 00-.12 1.501c0 1.553.294 3.036.831 4.398.197.501-.078.899-.523.899h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-4.553 2.7-8.478 6.586-10.247m.003-.128c.361-.147.738-.278 1.128-.392M11.25 15h-.128c-.36 0-.72.03-1.072.087m1.2-.087V9.375c0-1.244-1.007-2.25-2.25-2.25h-.918a2.25 2.25 0 00-2.124 1.5" />
                    </svg>
                  </button>
                  <button className="text-sm font-medium text-gray-700 hover:bg-gray-100 px-3 py-1.5 rounded transition-colors">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Load More */}
          <div className="mt-8 text-center">
            <button className="px-6 py-2.5 text-blue-600 font-medium hover:bg-blue-50 rounded transition-colors">
              Show more comments
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
