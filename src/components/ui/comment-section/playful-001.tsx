export default function PlayfulCommentSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 p-6 md:p-12">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl transform rotate-1">
          <div className="mb-8 transform -rotate-1">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              Comments
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-yellow-400 border-2 border-white" />
                <div className="w-6 h-6 rounded-full bg-pink-400 border-2 border-white" />
                <div className="w-6 h-6 rounded-full bg-blue-400 border-2 border-white" />
              </div>
              <p className="text-purple-600 font-bold">51 happy comments!</p>
            </div>
          </div>

          {/* Comment Input */}
          <div className="mb-8 bg-gradient-to-br from-yellow-50 to-pink-50 rounded-2xl p-5 border-4 border-dashed border-purple-300 transform -rotate-1">
            <div className="flex gap-4 transform rotate-1">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-2xl">😊</span>
              </div>
              <div className="flex-1">
                <textarea
                  placeholder="Share something awesome..."
                  className="w-full bg-white rounded-xl p-3 outline-none resize-none text-gray-800 placeholder:text-purple-400 border-2 border-purple-200 focus:border-purple-400 transition-colors shadow-sm"
                  rows={3}
                />
                <div className="flex justify-between items-center mt-3">
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full bg-yellow-400 hover:bg-yellow-500 flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-110 transition-all">
                      <span className="text-xl">😄</span>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-pink-400 hover:bg-pink-500 flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-110 transition-all">
                      <span className="text-xl">❤️</span>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-blue-400 hover:bg-blue-500 flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-110 transition-all">
                      <span className="text-xl">🎉</span>
                    </button>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                    Post! 🚀
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Comments */}
          <div className="space-y-5">
            {/* Comment 1 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-2xl">🌟</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-black text-purple-700">Sunny Smith</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full text-xs font-bold shadow-sm">
                      Super Fan ⭐
                    </span>
                    <span className="text-xs text-purple-500 font-bold">3h ago</span>
                  </div>
                  <p className="mt-2 text-gray-800 leading-relaxed font-medium">
                    This design makes me so happy! The bright colors and playful elements bring so much joy to what could be a boring comment section. Love it! 💖
                  </p>
                  <div className="flex items-center gap-3 mt-3 flex-wrap">
                    <button className="flex items-center gap-2 px-3 py-2 bg-white rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
                      <span className="text-xl">👍</span>
                      <span className="font-bold text-purple-600">234</span>
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 bg-white rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
                      <span className="text-xl">😂</span>
                      <span className="font-bold text-gray-400">12</span>
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 bg-white rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
                      <span className="text-xl">❤️</span>
                      <span className="font-bold text-pink-500">89</span>
                    </button>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-400 to-cyan-400 text-white rounded-full font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
                      Reply 💬
                    </button>
                  </div>

                  {/* Nested Replies */}
                  <div className="mt-4 space-y-4">
                    <div className="bg-white rounded-xl p-4 shadow-sm border-2 border-blue-200">
                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center flex-shrink-0">
                          <span className="text-xl">🎨</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-blue-700 text-sm">Artsy Amy</span>
                            <span className="text-xs text-gray-500">2h ago</span>
                          </div>
                          <p className="mt-1.5 text-sm text-gray-700 font-medium">
                            Right?! The gradient text is especially chef's kiss! 👨‍🍳✨
                          </p>
                          <button className="mt-2 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full text-xs font-bold text-purple-600 hover:shadow-md transition-all">
                            <span>👍</span> 67
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-sm border-2 border-pink-200">
                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center flex-shrink-0">
                          <span className="text-xl">🦄</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-pink-700 text-sm">Magic Mike</span>
                            <span className="text-xs text-gray-500">1h ago</span>
                          </div>
                          <p className="mt-1.5 text-sm text-gray-700 font-medium">
                            The rounded corners everywhere make it feel so friendly! 🎈
                          </p>
                          <button className="mt-2 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full text-xs font-bold text-purple-600 hover:shadow-md transition-all">
                            <span>❤️</span> 52
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment 2 */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-5 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-2xl">🎮</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-black text-orange-700">Gamer Grace</span>
                    <span className="text-xs text-orange-500 font-bold">7h ago</span>
                  </div>
                  <p className="mt-2 text-gray-800 leading-relaxed font-medium">
                    This reminds me of the most fun mobile games! Everything is so colorful and inviting. Can we make all of the internet look like this? 🌈
                  </p>
                  <div className="flex items-center gap-3 mt-3 flex-wrap">
                    <button className="flex items-center gap-2 px-3 py-2 bg-white rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
                      <span className="text-xl">👍</span>
                      <span className="font-bold text-purple-600">189</span>
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 bg-white rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
                      <span className="text-xl">🎯</span>
                      <span className="font-bold text-orange-500">45</span>
                    </button>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-400 to-cyan-400 text-white rounded-full font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
                      Reply 💬
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment 3 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-5 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-2xl">🎭</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-black text-blue-700">Happy Harry</span>
                    <span className="text-xs text-blue-500 font-bold">1d ago</span>
                  </div>
                  <p className="mt-2 text-gray-800 leading-relaxed font-medium">
                    Design doesn't have to be serious all the time! This proves that functional can also be FUN! 🎊✨
                  </p>
                  <div className="flex items-center gap-3 mt-3 flex-wrap">
                    <button className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full shadow-md">
                      <span className="text-xl">👍</span>
                      <span className="font-bold text-purple-600">312</span>
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 bg-white rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
                      <span className="text-xl">🔥</span>
                      <span className="font-bold text-orange-500">78</span>
                    </button>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-400 to-cyan-400 text-white rounded-full font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
                      Reply 💬
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Load More */}
          <div className="mt-8 text-center transform -rotate-1">
            <button className="px-10 py-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 text-white rounded-full font-black text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all">
              Show More Fun! 🎉
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
