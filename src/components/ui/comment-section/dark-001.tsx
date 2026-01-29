export default function DarkCommentSection() {
  return (
    <div className="min-h-screen bg-gray-950 p-6 md:p-12">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6 md:p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-semibold text-white">Comments</h2>
              <p className="text-sm text-gray-500 mt-1">47 responses</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 rounded-lg bg-gray-800 text-sm text-gray-400 hover:text-white transition-colors">
                Newest
              </button>
              <button className="px-3 py-1.5 rounded-lg text-sm text-gray-500 hover:text-gray-300 transition-colors">
                Top
              </button>
            </div>
          </div>

          {/* Comment Input */}
          <div className="flex gap-4 mb-8">
            <img
              src="https://i.pravatar.cc/80?img=1"
              alt="Your avatar"
              className="w-11 h-11 rounded-full ring-2 ring-gray-800"
            />
            <div className="flex-1 bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
              <textarea
                placeholder="Add to the discussion..."
                className="w-full bg-transparent outline-none resize-none text-gray-200 placeholder:text-gray-600"
                rows={3}
              />
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-700/50">
                <div className="flex gap-1">
                  <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.663 17.663A9 9 0 1112 3c2.39 0 4.585.93 6.216 2.462" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 6h4m0 0v4m0-4L12 13" />
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </button>
                </div>
                <button className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-white font-medium transition-colors">
                  Comment
                </button>
              </div>
            </div>
          </div>

          {/* Comments */}
          <div className="space-y-1">
            {/* Comment 1 */}
            <div className="p-4 rounded-xl hover:bg-gray-800/30 transition-colors group">
              <div className="flex gap-4">
                <img
                  src="https://i.pravatar.cc/80?img=12"
                  alt="Nathan Drake"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-medium text-white">Nathan Drake</span>
                    <span className="px-2 py-0.5 bg-emerald-500/20 rounded text-xs text-emerald-400">Author</span>
                    <span className="text-xs text-gray-500">3 hours ago</span>
                  </div>
                  <p className="mt-2 text-gray-300 leading-relaxed">
                    Dark mode is absolutely essential for any modern interface. It reduces eye strain and looks incredibly sleek at the same time.
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <button className="flex items-center gap-1.5 text-gray-500 hover:text-emerald-400 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.041 4.22 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                      </svg>
                      <span className="text-sm">128</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-gray-500 hover:text-red-400 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365-.183-.75-.375-1.125A3.376 3.376 0 0015 3c-.852 0-1.48.076-2.098.316M7.5 15H5.25m0 0A2.25 2.25 0 013 12.75v0A2.25 2.25 0 015.25 10.5h.128a11.24 11.24 0 01.003-.128m-.131.128a8.967 8.967 0 00-.12 1.501c0 1.553.294 3.036.831 4.398.197.501-.078.899-.523.899h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-4.553 2.7-8.478 6.586-10.247m.003-.128c.361-.147.738-.278 1.128-.392M11.25 15h-.128c-.36 0-.72.03-1.072.087m1.2-.087V9.375c0-1.244-1.007-2.25-2.25-2.25h-.918a2.25 2.25 0 00-2.124 1.5" />
                      </svg>
                    </button>
                    <button className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                      Reply
                    </button>
                    <button className="text-sm text-gray-500 hover:text-gray-300 transition-colors opacity-0 group-hover:opacity-100">
                      Share
                    </button>
                  </div>

                  {/* Nested Replies */}
                  <div className="mt-4 pl-4 border-l border-gray-700 space-y-4">
                    <div className="flex gap-3">
                      <img
                        src="https://i.pravatar.cc/80?img=33"
                        alt="Elena Martinez"
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-white text-sm">Elena Martinez</span>
                          <span className="text-xs text-gray-500">2h ago</span>
                        </div>
                        <p className="mt-1.5 text-sm text-gray-400 leading-relaxed">
                          The contrast between the dark background and the green accents is perfect!
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                          <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-emerald-400 transition-colors">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.041 4.22 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                            </svg>
                            42
                          </button>
                          <button className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Reply</button>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <img
                        src="https://i.pravatar.cc/80?img=47"
                        alt="Marcus Johnson"
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-white text-sm">Marcus Johnson</span>
                          <span className="text-xs text-gray-500">1h ago</span>
                        </div>
                        <p className="mt-1.5 text-sm text-gray-400 leading-relaxed">
                          I wish more apps would adopt dark mode as the default.
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                          <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-emerald-400 transition-colors">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.041 4.22 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                            </svg>
                            28
                          </button>
                          <button className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Reply</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment 2 */}
            <div className="p-4 rounded-xl hover:bg-gray-800/30 transition-colors group">
              <div className="flex gap-4">
                <img
                  src="https://i.pravatar.cc/80?img=22"
                  alt="Sophie Turner"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-white">Sophie Turner</span>
                    <span className="text-xs text-gray-500">6 hours ago</span>
                  </div>
                  <p className="mt-2 text-gray-300 leading-relaxed">
                    The subtle borders and shadows create such a sophisticated layering effect. This is exactly what good dark UI should look like.
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <button className="flex items-center gap-1.5 text-gray-500 hover:text-emerald-400 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.041 4.22 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                      </svg>
                      <span className="text-sm">87</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-gray-500 hover:text-red-400 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365-.183-.75-.375-1.125A3.376 3.376 0 0015 3c-.852 0-1.48.076-2.098.316M7.5 15H5.25m0 0A2.25 2.25 0 013 12.75v0A2.25 2.25 0 015.25 10.5h.128a11.24 11.24 0 01.003-.128m-.131.128a8.967 8.967 0 00-.12 1.501c0 1.553.294 3.036.831 4.398.197.501-.078.899-.523.899h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-4.553 2.7-8.478 6.586-10.247m.003-.128c.361-.147.738-.278 1.128-.392M11.25 15h-.128c-.36 0-.72.03-1.072.087m1.2-.087V9.375c0-1.244-1.007-2.25-2.25-2.25h-.918a2.25 2.25 0 00-2.124 1.5" />
                      </svg>
                    </button>
                    <button className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                      Reply
                    </button>
                    <button className="text-sm text-gray-500 hover:text-gray-300 transition-colors opacity-0 group-hover:opacity-100">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment 3 */}
            <div className="p-4 rounded-xl hover:bg-gray-800/30 transition-colors group">
              <div className="flex gap-4">
                <img
                  src="https://i.pravatar.cc/80?img=58"
                  alt="James Lee"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-white">James Lee</span>
                    <span className="text-xs text-gray-500">12 hours ago</span>
                  </div>
                  <p className="mt-2 text-gray-300 leading-relaxed">
                    Finally, a comment section that doesn't burn my eyes at night!
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <button className="flex items-center gap-1.5 text-emerald-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.041 4.22 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                      </svg>
                      <span className="text-sm">203</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-gray-500 hover:text-red-400 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365-.183-.75-.375-1.125A3.376 3.376 0 0015 3c-.852 0-1.48.076-2.098.316M7.5 15H5.25m0 0A2.25 2.25 0 013 12.75v0A2.25 2.25 0 015.25 10.5h.128a11.24 11.24 0 01.003-.128m-.131.128a8.967 8.967 0 00-.12 1.501c0 1.553.294 3.036.831 4.398.197.501-.078.899-.523.899h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-4.553 2.7-8.478 6.586-10.247m.003-.128c.361-.147.738-.278 1.128-.392M11.25 15h-.128c-.36 0-.72.03-1.072.087m1.2-.087V9.375c0-1.244-1.007-2.25-2.25-2.25h-.918a2.25 2.25 0 00-2.124 1.5" />
                      </svg>
                    </button>
                    <button className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Load More */}
          <div className="mt-6 text-center">
            <button className="px-6 py-2.5 text-sm text-gray-400 hover:text-white border border-gray-700 hover:border-gray-600 rounded-lg transition-colors">
              Show 44 more comments
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
