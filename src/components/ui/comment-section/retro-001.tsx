export default function RetroCommentSection() {
  return (
    <div className="min-h-screen bg-[#f4e4c1] p-6 md:p-12">
      <div className="max-w-2xl mx-auto">
        <div className="bg-[#d4a574] border-4 border-[#8b4513] p-6 mb-8 shadow-[8px_8px_0px_0px_rgba(139,69,19,1)]">
          <h2 className="text-3xl font-black text-[#4a2511] uppercase tracking-tight" style={{ fontFamily: 'system-ui' }}>
            💬 Comments
          </h2>
          <p className="mt-2 text-lg font-bold text-[#6b3410]">24 groovy discussions</p>
        </div>

        {/* Comment Input */}
        <div className="bg-[#ffd700] border-4 border-[#ff6b35] p-6 mb-8 shadow-[6px_6px_0px_0px_rgba(255,107,53,1)]">
          <div className="flex gap-4 items-start">
            <img
              src="https://i.pravatar.cc/80?img=1"
              alt="Your avatar"
              className="w-14 h-14 rounded-full border-4 border-[#4a2511]"
              style={{ filter: 'sepia(50%) saturate(150%)' }}
            />
            <div className="flex-1">
              <textarea
                placeholder="Share your thoughts..."
                className="w-full border-4 border-[#4a2511] bg-[#fffacd] p-3 font-bold text-[#4a2511] placeholder:text-[#8b7355] resize-none focus:outline-none focus:border-[#ff6b35]"
                rows={3}
                style={{ fontFamily: 'monospace' }}
              />
              <button className="mt-4 bg-[#ff6b35] border-3 border-[#4a2511] text-white font-black px-6 py-2 uppercase hover:bg-[#ff8c5a] shadow-[4px_4px_0px_0px_rgba(74,37,17,1)] active:translate-y-1">
                ✨ Post It!
              </button>
            </div>
          </div>
        </div>

        {/* Comments List */}
        <div className="space-y-6">
          {/* Comment 1 */}
          <div className="bg-[#98d8c8] border-4 border-[#4a2511] p-5 shadow-[6px_6px_0px_0px_rgba(74,37,17,1)]">
            <div className="flex gap-4">
              <img
                src="https://i.pravatar.cc/80?img=12"
                alt="Sarah Chen"
                className="w-14 h-14 rounded-full border-3 border-[#4a2511]"
                style={{ filter: 'sepia(50%) saturate(150%)' }}
              />
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-lg font-black text-[#4a2511]">Sarah Chen</span>
                  <span className="bg-[#ff6b35] text-white font-bold px-2 py-1 text-sm rounded">2h ago</span>
                </div>
                <p className="mt-3 text-base font-semibold text-[#2c1810] leading-relaxed">
                  This retro vibe is totally rad! 🎨 The warm colors and chunky borders take me back to the good old days.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <button className="bg-[#ffd700] border-2 border-[#4a2511] px-4 py-1.5 font-black text-[#4a2511] hover:bg-[#ffe44d] flex items-center gap-2 rounded shadow-[2px_2px_0px_0px_rgba(74,37,17,1)]">
                    👍 42
                  </button>
                  <button className="bg-[#d4a574] border-2 border-[#4a2511] px-4 py-1.5 font-black text-[#4a2511] hover:bg-[#ddb584] rounded">
                    👎
                  </button>
                  <button className="border-2 border-[#4a2511] bg-white px-4 py-1.5 font-bold text-[#4a2511] hover:bg-[#f0f0f0] uppercase rounded">
                    Reply
                  </button>
                </div>

                {/* Nested Replies */}
                <div className="mt-5 ml-0 border-l-4 border-[#ff6b35] pl-5 space-y-4 bg-[#e8d4b8] p-4">
                  <div className="flex gap-3">
                    <img
                      src="https://i.pravatar.cc/80?img=33"
                      alt="Alex Rivera"
                      className="w-12 h-12 rounded-full border-3 border-[#4a2511]"
                      style={{ filter: 'sepia(50%) saturate(150%)' }}
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-base font-black text-[#4a2511]">Alex Rivera</span>
                        <span className="bg-[#ff6b35] text-white font-bold px-2 py-0.5 text-xs rounded">1h ago</span>
                      </div>
                      <p className="mt-2 text-sm font-semibold text-[#2c1810]">
                        Groovy baby! 😎 This aesthetic is far out!
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <button className="bg-[#ffd700] border-2 border-[#4a2511] px-3 py-1 font-black text-[#4a2511] text-sm rounded">
                          👍 12
                        </button>
                        <button className="border-2 border-[#4a2511] bg-white px-3 py-1 font-bold text-[#4a2511] text-sm rounded">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <img
                      src="https://i.pravatar.cc/80?img=45"
                      alt="Maya Patel"
                      className="w-12 h-12 rounded-full border-3 border-[#4a2511]"
                      style={{ filter: 'sepia(50%) saturate(150%)' }}
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-base font-black text-[#4a2511]">Maya Patel</span>
                        <span className="bg-[#ff6b35] text-white font-bold px-2 py-0.5 text-xs rounded">45m ago</span>
                      </div>
                      <p className="mt-2 text-sm font-semibold text-[#2c1810]">
                        The chunky shadows are everything! 🌈
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <button className="bg-[#ffd700] border-2 border-[#4a2511] px-3 py-1 font-black text-[#4a2511] text-sm rounded">
                          👍 8
                        </button>
                        <button className="border-2 border-[#4a2511] bg-white px-3 py-1 font-bold text-[#4a2511] text-sm rounded">
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
          <div className="bg-[#f6a6b2] border-4 border-[#4a2511] p-5 shadow-[6px_6px_0px_0px_rgba(74,37,17,1)]">
            <div className="flex gap-4">
              <img
                src="https://i.pravatar.cc/80?img=22"
                alt="James Wilson"
                className="w-14 h-14 rounded-full border-3 border-[#4a2511]"
                style={{ filter: 'sepia(50%) saturate(150%)' }}
              />
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-lg font-black text-[#4a2511]">James Wilson</span>
                  <span className="bg-[#ff6b35] text-white font-bold px-2 py-1 text-sm rounded">4h ago</span>
                </div>
                <p className="mt-3 text-base font-semibold text-[#2c1810] leading-relaxed">
                  Totally tubular design! 🎸 This brings back memories of the vintage web.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <button className="bg-[#ffd700] border-2 border-[#4a2511] px-4 py-1.5 font-black text-[#4a2511] hover:bg-[#ffe44d] flex items-center gap-2 rounded shadow-[2px_2px_0px_0px_rgba(74,37,17,1)]">
                    👍 28
                  </button>
                  <button className="bg-[#d4a574] border-2 border-[#4a2511] px-4 py-1.5 font-black text-[#4a2511] hover:bg-[#ddb584] rounded">
                    👎
                  </button>
                  <button className="border-2 border-[#4a2511] bg-white px-4 py-1.5 font-bold text-[#4a2511] hover:bg-[#f0f0f0] uppercase rounded">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Comment 3 */}
          <div className="bg-[#ffe66d] border-4 border-[#4a2511] p-5 shadow-[6px_6px_0px_0px_rgba(74,37,17,1)]">
            <div className="flex gap-4">
              <img
                src="https://i.pravatar.cc/80?img=58"
                alt="Emma Thompson"
                className="w-14 h-14 rounded-full border-3 border-[#4a2511]"
                style={{ filter: 'sepia(50%) saturate(150%)' }}
              />
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-lg font-black text-[#4a2511]">Emma Thompson</span>
                  <span className="bg-[#ff6b35] text-white font-bold px-2 py-1 text-sm rounded">6h ago</span>
                </div>
                <p className="mt-3 text-base font-semibold text-[#2c1810] leading-relaxed">
                  Psychedelic and funky! ✌️ Love the nostalgic color palette.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <button className="bg-[#ffd700] border-2 border-[#4a2511] px-4 py-1.5 font-black text-[#4a2511] hover:bg-[#ffe44d] flex items-center gap-2 rounded shadow-[2px_2px_0px_0px_rgba(74,37,17,1)]">
                    👍 56
                  </button>
                  <button className="bg-[#d4a574] border-2 border-[#4a2511] px-4 py-1.5 font-black text-[#4a2511] hover:bg-[#ddb584] rounded">
                    👎
                  </button>
                  <button className="border-2 border-[#4a2511] bg-white px-4 py-1.5 font-bold text-[#4a2511] hover:bg-[#f0f0f0] uppercase rounded">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="bg-[#ff6b35] border-4 border-[#4a2511] text-white font-black px-10 py-3 uppercase text-lg hover:bg-[#ff8c5a] shadow-[6px_6px_0px_0px_rgba(74,37,17,1)] active:translate-y-1">
            🔄 Load More
          </button>
        </div>
      </div>
    </div>
  )
}
