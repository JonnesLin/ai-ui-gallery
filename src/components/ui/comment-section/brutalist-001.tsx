export default function BrutalistCommentSection() {
  return (
    <div className="min-h-screen bg-black p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <div className="border-4 border-white p-6 mb-8">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">COMMENTS</h2>
          <p className="mt-2 text-xl font-black text-white">24 TOTAL</p>
        </div>

        {/* Comment Input */}
        <div className="border-4 border-white bg-yellow-400 p-6 mb-8">
          <div className="flex gap-4 items-start">
            <div className="w-16 h-16 bg-black border-4 border-white flex items-center justify-center flex-shrink-0">
              <span className="text-white font-black text-2xl">U</span>
            </div>
            <div className="flex-1">
              <textarea
                placeholder="TYPE YOUR COMMENT..."
                className="w-full border-4 border-black bg-white p-4 font-black text-black placeholder:text-gray-400 uppercase resize-none focus:outline-none focus:border-red-500"
                rows={3}
              />
              <button className="mt-4 bg-red-500 border-4 border-black text-white font-black px-8 py-3 uppercase hover:bg-red-600 active:translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                POST NOW
              </button>
            </div>
          </div>
        </div>

        {/* Comments List */}
        <div className="space-y-6">
          {/* Comment 1 */}
          <div className="border-4 border-white bg-white p-6">
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-blue-500 border-4 border-black flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-2xl">S</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="text-xl font-black text-black uppercase">SARAH CHEN</span>
                  <span className="bg-black text-white font-black px-3 py-1 text-sm">2H AGO</span>
                </div>
                <p className="mt-4 text-base font-bold text-black leading-tight">
                  THIS RAW AESTHETIC IS ABSOLUTELY INCREDIBLE. NO NONSENSE, JUST PURE FUNCTION AND FORM COLLIDING.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <button className="bg-green-400 border-2 border-black px-4 py-2 font-black text-black hover:bg-green-500 flex items-center gap-2">
                    ▲ 42
                  </button>
                  <button className="bg-gray-200 border-2 border-black px-4 py-2 font-black text-black hover:bg-gray-300 flex items-center gap-2">
                    ▼
                  </button>
                  <button className="border-2 border-black bg-white px-4 py-2 font-black text-black hover:bg-gray-100 uppercase">
                    REPLY
                  </button>
                </div>

                {/* Nested Replies */}
                <div className="mt-6 ml-0 border-l-4 border-black pl-6 space-y-4 bg-gray-100 p-4">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-red-500 border-2 border-black flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-black text-lg">A</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-base font-black text-black uppercase">ALEX RIVERA</span>
                        <span className="bg-black text-white font-black px-2 py-0.5 text-xs">1H AGO</span>
                      </div>
                      <p className="mt-2 text-sm font-bold text-black">
                        AGREE 100%. BRUTALISM IS BACK.
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <button className="bg-green-400 border-2 border-black px-3 py-1 font-black text-black text-sm">
                          ▲ 12
                        </button>
                        <button className="bg-gray-200 border-2 border-black px-3 py-1 font-black text-black text-sm">
                          ▼
                        </button>
                        <button className="border-2 border-black bg-white px-3 py-1 font-black text-black text-sm uppercase">
                          REPLY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comment 2 */}
          <div className="border-4 border-white bg-cyan-300 p-6">
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-purple-600 border-4 border-black flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-2xl">J</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="text-xl font-black text-black uppercase">JAMES WILSON</span>
                  <span className="bg-black text-white font-black px-3 py-1 text-sm">4H AGO</span>
                </div>
                <p className="mt-4 text-base font-bold text-black leading-tight">
                  BOLD BORDERS AND ZERO SUBTLETY. THIS IS WHAT DESIGN SHOULD BE.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <button className="bg-green-400 border-2 border-black px-4 py-2 font-black text-black hover:bg-green-500 flex items-center gap-2">
                    ▲ 28
                  </button>
                  <button className="bg-gray-200 border-2 border-black px-4 py-2 font-black text-black hover:bg-gray-300 flex items-center gap-2">
                    ▼
                  </button>
                  <button className="border-2 border-black bg-white px-4 py-2 font-black text-black hover:bg-gray-100 uppercase">
                    REPLY
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Comment 3 */}
          <div className="border-4 border-white bg-white p-6">
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-orange-500 border-4 border-black flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-2xl">E</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="text-xl font-black text-black uppercase">EMMA THOMPSON</span>
                  <span className="bg-black text-white font-black px-3 py-1 text-sm">6H AGO</span>
                </div>
                <p className="mt-4 text-base font-bold text-black leading-tight">
                  UNAPOLOGETICALLY LOUD. I LOVE THE STATEMENT THIS MAKES.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <button className="bg-green-400 border-2 border-black px-4 py-2 font-black text-black hover:bg-green-500 flex items-center gap-2">
                    ▲ 56
                  </button>
                  <button className="bg-gray-200 border-2 border-black px-4 py-2 font-black text-black hover:bg-gray-300 flex items-center gap-2">
                    ▼
                  </button>
                  <button className="border-2 border-black bg-white px-4 py-2 font-black text-black hover:bg-gray-100 uppercase">
                    REPLY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="bg-yellow-400 border-4 border-white text-black font-black px-12 py-4 uppercase text-xl hover:bg-yellow-500 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
            LOAD MORE
          </button>
        </div>
      </div>
    </div>
  )
}
