export default function LuxuryCommentSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-neutral-900 to-zinc-950 p-6 md:p-12">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-neutral-900 to-zinc-900 border border-amber-500/20 rounded-xl p-6 md:p-10 relative overflow-hidden">
          {/* Decorative Golden Accents */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-yellow-600/10 to-transparent rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="border-b border-amber-500/20 pb-6 mb-8">
              <h2 className="text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400">
                Distinguished Remarks
              </h2>
              <p className="text-amber-200/60 mt-2 text-sm tracking-wide">42 esteemed contributions</p>
            </div>

            {/* Comment Input */}
            <div className="flex gap-5 mb-10">
              <img
                src="https://i.pravatar.cc/80?img=1"
                alt="Your avatar"
                className="w-14 h-14 rounded-full ring-2 ring-amber-500/30 shadow-lg"
              />
              <div className="flex-1 bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl p-5">
                <textarea
                  placeholder="Share your distinguished perspective..."
                  className="w-full bg-transparent outline-none resize-none text-amber-100 placeholder:text-amber-900/50 font-light"
                  rows={3}
                />
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-amber-500/10">
                  <div className="flex gap-2">
                    <button className="w-9 h-9 rounded-lg border border-amber-500/30 hover:border-amber-500/50 flex items-center justify-center transition-colors">
                      <svg className="w-5 h-5 text-amber-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                      </svg>
                    </button>
                    <button className="w-9 h-9 rounded-lg border border-amber-500/30 hover:border-amber-500/50 flex items-center justify-center transition-colors">
                      <svg className="w-5 h-5 text-amber-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                    </button>
                  </div>
                  <button className="px-8 py-2.5 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-black rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all">
                    Publish
                  </button>
                </div>
              </div>
            </div>

            {/* Comments */}
            <div className="space-y-6">
              {/* Comment 1 */}
              <div className="bg-gradient-to-br from-black/40 to-neutral-900/40 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6 hover:border-amber-500/30 transition-all group">
                <div className="flex gap-5">
                  <img
                    src="https://i.pravatar.cc/80?img=12"
                    alt="Victoria Sterling"
                    className="w-12 h-12 rounded-full ring-2 ring-amber-500/30"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-serif text-lg text-amber-100">Victoria Sterling</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 border border-amber-500/40 rounded-full text-xs text-amber-400 font-medium">
                        Connoisseur
                      </span>
                      <span className="text-xs text-amber-200/40">5 hours past</span>
                    </div>
                    <p className="mt-3 text-amber-100/80 leading-relaxed font-light">
                      The opulent golden accents paired with the deep, sophisticated blacks create an atmosphere of refined elegance. This is truly bespoke design.
                    </p>
                    <div className="flex items-center gap-5 mt-4">
                      <button className="flex items-center gap-2 text-amber-400/70 hover:text-amber-400 transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.041 4.22 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                        </svg>
                        <span className="font-medium">267</span>
                      </button>
                      <button className="text-sm text-amber-400/70 hover:text-amber-400 transition-colors font-light">
                        Respond
                      </button>
                      <button className="text-sm text-amber-400/70 hover:text-amber-400 transition-colors font-light opacity-0 group-hover:opacity-100">
                        Share
                      </button>
                    </div>

                    {/* Nested Replies */}
                    <div className="mt-5 ml-4 border-l-2 border-amber-500/20 pl-5 space-y-5">
                      <div className="flex gap-4">
                        <img
                          src="https://i.pravatar.cc/80?img=33"
                          alt="Alexander Hunt"
                          className="w-10 h-10 rounded-full ring-2 ring-amber-500/20"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-serif text-amber-100">Alexander Hunt</span>
                            <span className="text-xs text-amber-200/40">3h past</span>
                          </div>
                          <p className="mt-2 text-sm text-amber-100/70 leading-relaxed font-light">
                            The serif typography adds a timeless quality. Exquisite attention to detail.
                          </p>
                          <div className="flex items-center gap-4 mt-3">
                            <button className="flex items-center gap-1.5 text-xs text-amber-400/70 hover:text-amber-400">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.041 4.22 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                              </svg>
                              98
                            </button>
                            <button className="text-xs text-amber-400/70 hover:text-amber-400 font-light">Respond</button>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <img
                          src="https://i.pravatar.cc/80?img=47"
                          alt="Sophia Laurent"
                          className="w-10 h-10 rounded-full ring-2 ring-amber-500/20"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-serif text-amber-100">Sophia Laurent</span>
                            <span className="text-xs text-amber-200/40">2h past</span>
                          </div>
                          <p className="mt-2 text-sm text-amber-100/70 leading-relaxed font-light">
                            The subtle golden glow effects are reminiscent of fine jewelry presentation.
                          </p>
                          <div className="flex items-center gap-4 mt-3">
                            <button className="flex items-center gap-1.5 text-xs text-amber-400/70 hover:text-amber-400">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.041 4.22 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                              </svg>
                              74
                            </button>
                            <button className="text-xs text-amber-400/70 hover:text-amber-400 font-light">Respond</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comment 2 */}
              <div className="bg-gradient-to-br from-black/40 to-neutral-900/40 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6 hover:border-amber-500/30 transition-all">
                <div className="flex gap-5">
                  <img
                    src="https://i.pravatar.cc/80?img=22"
                    alt="Marcus Ashford"
                    className="w-12 h-12 rounded-full ring-2 ring-amber-500/30"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-lg text-amber-100">Marcus Ashford</span>
                      <span className="text-xs text-amber-200/40">9 hours past</span>
                    </div>
                    <p className="mt-3 text-amber-100/80 leading-relaxed font-light">
                      This embodies the essence of luxury digital experiences. The gradient borders and ethereal glows create an unmistakable premium feel.
                    </p>
                    <div className="flex items-center gap-5 mt-4">
                      <button className="flex items-center gap-2 text-amber-400/70 hover:text-amber-400 transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.041 4.22 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                        </svg>
                        <span className="font-medium">193</span>
                      </button>
                      <button className="text-sm text-amber-400/70 hover:text-amber-400 transition-colors font-light">
                        Respond
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comment 3 */}
              <div className="bg-gradient-to-br from-black/40 to-neutral-900/40 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6 hover:border-amber-500/30 transition-all">
                <div className="flex gap-5">
                  <img
                    src="https://i.pravatar.cc/80?img=58"
                    alt="Isabella Noir"
                    className="w-12 h-12 rounded-full ring-2 ring-amber-500/30"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-lg text-amber-100">Isabella Noir</span>
                      <span className="text-xs text-amber-200/40">1 day past</span>
                    </div>
                    <p className="mt-3 text-amber-100/80 leading-relaxed font-light">
                      Like a fine champagne, this design is refined, sophisticated, and leaves a lasting impression.
                    </p>
                    <div className="flex items-center gap-5 mt-4">
                      <button className="flex items-center gap-2 text-amber-400">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.041 4.22 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                        </svg>
                        <span className="font-medium">342</span>
                      </button>
                      <button className="text-sm text-amber-400/70 hover:text-amber-400 transition-colors font-light">
                        Respond
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Load More */}
            <div className="mt-10 text-center">
              <button className="px-10 py-3 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 border border-amber-500/40 text-amber-400 rounded-lg font-medium hover:border-amber-500/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] transition-all">
                View Additional Remarks
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
