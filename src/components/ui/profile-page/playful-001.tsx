export default function PlayfulProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-300 p-4">
      <div className="max-w-5xl mx-auto py-12">
        {/* Profile Card */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 mb-6 transform rotate-1">
          <div className="transform -rotate-1">
            {/* Header */}
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="relative flex-shrink-0">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-yellow-400 via-pink-400 to-purple-400 transform -rotate-6"></div>
                <div className="absolute top-0 right-0 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center transform rotate-12 shadow-lg">
                  <span className="text-2xl">✨</span>
                </div>
              </div>
              <div className="flex-1">
                <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-3 transform -rotate-1">
                  Maya Johnson
                </h1>
                <p className="text-2xl text-gray-700 mb-6 font-bold">
                  Creative Wizard & Fun Enthusiast! 🎨
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:rotate-3 transition-all">
                    Edit Profile 🎯
                  </button>
                  <button className="px-8 py-4 bg-yellow-400 text-gray-800 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:-rotate-3 transition-all">
                    Say Hi! 👋
                  </button>
                </div>
              </div>
            </div>

            {/* Fun Bio */}
            <div className="bg-gradient-to-r from-yellow-100 to-pink-100 rounded-3xl p-6 mb-6 transform -rotate-1">
              <p className="text-lg text-gray-800 leading-relaxed">
                Life's too short to be boring! I'm all about spreading joy, creating cool stuff,
                and making every day an adventure. Let's make some magic together! ✨🌈
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-3xl p-6 text-center transform -rotate-2 hover:rotate-0 transition-transform shadow-lg">
            <div className="text-5xl mb-2">🎨</div>
            <div className="text-4xl font-black text-pink-500 mb-1">432</div>
            <div className="text-gray-700 font-bold">Creations</div>
          </div>
          <div className="bg-white rounded-3xl p-6 text-center transform rotate-2 hover:rotate-0 transition-transform shadow-lg">
            <div className="text-5xl mb-2">💜</div>
            <div className="text-4xl font-black text-purple-500 mb-1">18.3k</div>
            <div className="text-gray-700 font-bold">Fans</div>
          </div>
          <div className="bg-white rounded-3xl p-6 text-center transform -rotate-1 hover:rotate-0 transition-transform shadow-lg">
            <div className="text-5xl mb-2">🌟</div>
            <div className="text-4xl font-black text-yellow-500 mb-1">2.1k</div>
            <div className="text-gray-700 font-bold">Friends</div>
          </div>
        </div>

        {/* Info Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-3xl p-8 transform rotate-1 shadow-lg">
            <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-6">
              About Me! 🎭
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center text-2xl transform -rotate-6">
                  📍
                </div>
                <span className="text-gray-700 font-bold text-lg">Tokyo, Japan</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center text-2xl transform rotate-6">
                  🌐
                </div>
                <span className="text-gray-700 font-bold text-lg">mayajohnson.fun</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center text-2xl transform -rotate-3">
                  ✉️
                </div>
                <span className="text-gray-700 font-bold text-lg">hello@maya.fun</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 transform -rotate-1 shadow-lg">
            <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500 mb-6">
              My Vibes! 🎪
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                { emoji: '🎨', text: 'Art' },
                { emoji: '🎵', text: 'Music' },
                { emoji: '🎮', text: 'Gaming' },
                { emoji: '📸', text: 'Photos' },
                { emoji: '🍕', text: 'Food' },
                { emoji: '✈️', text: 'Travel' }
              ].map((item) => (
                <div
                  key={item.text}
                  className="px-5 py-3 bg-gradient-to-br from-yellow-200 to-pink-200 rounded-full font-bold text-gray-800 transform hover:scale-110 transition-transform shadow-md"
                >
                  {item.emoji} {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-white rounded-3xl p-8 transform rotate-1 shadow-lg">
          <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
            Latest Adventures! 🚀
          </h3>
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className={`bg-gradient-to-r ${
                  i === 0 ? 'from-yellow-100 to-orange-100' :
                  i === 1 ? 'from-pink-100 to-purple-100' :
                  'from-blue-100 to-cyan-100'
                } rounded-2xl p-6 transform hover:-translate-y-1 transition-all`}
              >
                <div className="flex gap-4">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${
                    i === 0 ? 'from-yellow-400 to-orange-400' :
                    i === 1 ? 'from-pink-400 to-purple-400' :
                    'from-blue-400 to-cyan-400'
                  } flex items-center justify-center text-4xl transform -rotate-6 flex-shrink-0`}>
                    {i === 0 ? '🎨' : i === 1 ? '🎉' : '✨'}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-black text-gray-800 mb-2">
                      {i === 0 ? 'Created something awesome!' :
                       i === 1 ? 'Had the best day ever!' :
                       'New adventure unlocked!'}
                    </h4>
                    <p className="text-gray-700 font-medium mb-3">
                      Just finished an amazing project and I'm so excited to share it with you all! 🎊
                    </p>
                    <div className="flex gap-4 text-sm font-bold">
                      <button className="flex items-center gap-2 text-pink-500 hover:text-pink-600">
                        💜 {124 + i * 20} Likes
                      </button>
                      <button className="flex items-center gap-2 text-purple-500 hover:text-purple-600">
                        💬 {34 + i * 10} Comments
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Footer */}
        <div className="mt-6 text-center">
          <p className="text-2xl font-black text-gray-700">
            Let's connect and create magic together! ✨🌈
          </p>
          <div className="flex justify-center gap-4 mt-6">
            {['🎨', '🎵', '📸', '🎮'].map((emoji, i) => (
              <button
                key={i}
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 hover:rotate-12 transition-all"
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
