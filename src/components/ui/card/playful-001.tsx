export default function PlayfulCards() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-cyan-100 p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Bouncy Product Card */}
          <div className="bg-white rounded-[2rem] p-5 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
            <div className="aspect-square rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-pink-200 to-orange-200 relative">
              <img
                src="https://picsum.photos/seed/play1/400/400"
                alt="Product"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-lg font-bold text-yellow-900 rotate-12 shadow-md">
                NEW
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎨</span>
                <span className="text-sm font-bold text-pink-500 uppercase tracking-wide">Art Supply</span>
              </div>
              <h3 className="mt-2 text-xl font-bold text-gray-800">Rainbow Marker Set</h3>
              <p className="mt-1 text-gray-500">12 vibrant colors</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-2xl font-bold text-purple-600">$24.99</span>
                <button className="px-5 py-2.5 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold rounded-full hover:from-pink-600 hover:to-orange-600 transition-colors shadow-md">
                  Add to Cart 🛒
                </button>
              </div>
            </div>
          </div>

          {/* Fun Profile Card */}
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-[2rem] p-6 text-white relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-yellow-400 rounded-full opacity-30" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-cyan-400 rounded-full opacity-30" />

            <div className="relative flex items-center gap-4">
              <div className="relative">
                <img
                  src="https://picsum.photos/seed/play2/100/100"
                  alt="Avatar"
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <span className="absolute -bottom-1 -right-1 text-2xl">✨</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Luna Sparkle</h3>
                <p className="text-pink-200">Creative Wizard ✨</p>
              </div>
            </div>

            <p className="mt-4 text-pink-100 leading-relaxed relative">
              Making the world more colorful, one design at a time! Let's create something amazing together.
            </p>

            <div className="mt-6 flex gap-3 relative">
              <button className="flex-1 py-2.5 bg-white text-purple-600 font-bold rounded-full hover:bg-pink-100 transition-colors">
                Follow 💖
              </button>
              <button className="flex-1 py-2.5 bg-white/20 backdrop-blur-sm font-bold rounded-full hover:bg-white/30 transition-colors">
                Message 💬
              </button>
            </div>
          </div>

          {/* Achievement Card */}
          <div className="bg-white rounded-[2rem] p-6 shadow-lg relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-3xl shadow-lg">
                🏆
              </div>
            </div>

            <div className="mt-8 text-center">
              <h3 className="text-xl font-bold text-gray-800">Level Up!</h3>
              <p className="text-gray-500 mt-1">You reached Level 42</p>

              <div className="mt-6 flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-2xl">⭐</span>
                ))}
              </div>

              <div className="mt-6">
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span className="text-gray-500">XP Progress</span>
                  <span className="text-purple-600">8,420 / 10,000</span>
                </div>
                <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full"
                    style={{ width: '84%' }}
                  />
                </div>
              </div>

              <button className="mt-6 w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors shadow-md">
                Claim Reward 🎁
              </button>
            </div>
          </div>

          {/* Party Invite Card */}
          <div className="lg:col-span-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-[2rem] p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-2xl"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    transform: `rotate(${Math.random() * 360}deg)`
                  }}
                >
                  {['🎈', '🎉', '⭐', '✨', '🎊'][i % 5]}
                </div>
              ))}
            </div>

            <div className="relative">
              <span className="text-sm font-bold bg-white/20 px-4 py-1 rounded-full">🎉 You're Invited!</span>
              <h3 className="mt-4 text-3xl font-bold">Birthday Bash 2026</h3>
              <p className="mt-2 text-white/80 max-w-md">
                Join us for an unforgettable celebration with games, cake, and lots of fun!
              </p>
              <div className="mt-6 flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <span>📅</span>
                  <span className="font-medium">Feb 14, 2026</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <span>⏰</span>
                  <span className="font-medium">3:00 PM</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <span>📍</span>
                  <span className="font-medium">Fun Zone</span>
                </div>
              </div>
              <button className="mt-6 px-8 py-3 bg-white text-purple-600 font-bold rounded-full hover:bg-pink-100 transition-colors shadow-lg">
                RSVP Now 🎈
              </button>
            </div>
          </div>

          {/* Mood Tracker Card */}
          <div className="bg-white rounded-[2rem] p-6 shadow-lg">
            <h3 className="text-lg font-bold text-gray-800">How are you feeling?</h3>
            <div className="mt-4 flex justify-between">
              {['😊', '😄', '😐', '😔', '😢'].map((emoji, i) => (
                <button
                  key={i}
                  className={`w-12 h-12 text-2xl rounded-full transition-all hover:scale-110 ${i === 1 ? 'bg-yellow-200 ring-2 ring-yellow-400 scale-110' : 'bg-gray-100 hover:bg-gray-200'}`}
                >
                  {emoji}
                </button>
              ))}
            </div>
            <p className="mt-4 text-center text-gray-500 text-sm">You're feeling: <span className="font-bold text-yellow-600">Happy!</span></p>
          </div>

          {/* Sticker Card */}
          <div className="bg-gradient-to-br from-green-400 to-cyan-500 rounded-[2rem] p-6 text-white relative">
            <div className="absolute top-4 right-4 text-4xl rotate-12">🌟</div>
            <h3 className="text-xl font-bold">Daily Streak!</h3>
            <p className="text-5xl font-bold mt-4">7 Days 🔥</p>
            <p className="mt-2 text-green-100">Keep it up, superstar!</p>
            <div className="mt-6 flex gap-1">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                <div
                  key={day + i}
                  className={`flex-1 aspect-square rounded-full flex items-center justify-center text-xs font-bold ${i < 7 ? 'bg-white text-green-600' : 'bg-white/30'}`}
                >
                  {i < 7 ? '✓' : day}
                </div>
              ))}
            </div>
          </div>

          {/* Quiz Card */}
          <div className="bg-white rounded-[2rem] p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🧠</span>
              <div>
                <h3 className="font-bold text-gray-800">Pop Quiz!</h3>
                <p className="text-sm text-gray-500">Question 3 of 10</p>
              </div>
            </div>
            <p className="text-lg font-medium text-gray-800">What's the capital of Japan?</p>
            <div className="mt-4 space-y-2">
              {['Beijing', 'Tokyo', 'Seoul', 'Bangkok'].map((answer, i) => (
                <button
                  key={answer}
                  className={`w-full py-3 px-4 rounded-xl font-medium text-left transition-all ${i === 1 ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  {String.fromCharCode(65 + i)}. {answer}
                </button>
              ))}
            </div>
          </div>

          {/* Score Card */}
          <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-[2rem] p-6 text-white text-center relative overflow-hidden">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-30" />
            <span className="text-6xl">🎮</span>
            <h3 className="mt-4 text-xl font-bold">High Score</h3>
            <p className="text-5xl font-bold mt-2">24,850</p>
            <p className="text-orange-200 mt-1">World Rank: #142</p>
            <button className="mt-6 w-full py-3 bg-white text-orange-600 font-bold rounded-full hover:bg-orange-100 transition-colors">
              Play Again 🚀
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
