export default function PlayfulContact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-200 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Fun Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-4 transform -rotate-2">
            Hey There! 👋
          </h1>
          <p className="text-2xl font-bold text-purple-600 transform rotate-1">Let's be friends!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl transform hover:rotate-1 transition-transform">
            <div className="bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-2xl p-4 mb-6 transform -rotate-1">
              <h2 className="text-2xl font-bold">Drop us a line! ✨</h2>
            </div>

            <form className="space-y-5">
              <div>
                <label className="block text-purple-600 font-bold mb-2 flex items-center gap-2">
                  <span className="text-xl">🙋</span> What's your name?
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-3 border-purple-300 rounded-2xl focus:outline-none focus:border-pink-400 focus:shadow-lg transition-all"
                  placeholder="Super cool name here!"
                />
              </div>

              <div>
                <label className="block text-purple-600 font-bold mb-2 flex items-center gap-2">
                  <span className="text-xl">📧</span> Your email?
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border-3 border-blue-300 rounded-2xl focus:outline-none focus:border-blue-400 focus:shadow-lg transition-all"
                  placeholder="awesome@email.com"
                />
              </div>

              <div>
                <label className="block text-purple-600 font-bold mb-2 flex items-center gap-2">
                  <span className="text-xl">💬</span> What's on your mind?
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border-3 border-yellow-300 rounded-2xl focus:outline-none focus:border-yellow-400 focus:shadow-lg resize-none transition-all"
                  placeholder="Tell us everything! We're all ears! 👂"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white py-4 rounded-2xl font-black text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all transform hover:-rotate-1"
              >
                Send it! 🚀
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-pink-400 to-pink-500 rounded-3xl p-6 shadow-xl transform hover:-rotate-2 transition-transform">
              <div className="text-5xl mb-3">🏠</div>
              <h3 className="text-white font-black text-xl mb-2">Come visit us!</h3>
              <p className="text-pink-100 font-medium">
                123 Fun Street<br />
                Happy Town, HT 12345<br />
                Rainbow Land 🌈
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-400 to-purple-500 rounded-3xl p-6 shadow-xl transform hover:rotate-2 transition-transform">
              <div className="text-5xl mb-3">📱</div>
              <h3 className="text-white font-black text-xl mb-2">Ring ring!</h3>
              <p className="text-purple-100 font-medium text-lg">+1 (555) FUN-TIME</p>
            </div>

            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl p-6 shadow-xl transform hover:-rotate-1 transition-transform">
              <div className="text-5xl mb-3">✉️</div>
              <h3 className="text-white font-black text-xl mb-2">Slide into our inbox!</h3>
              <p className="text-blue-100 font-medium text-lg">hello@playful.fun</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl p-6 shadow-xl transform hover:rotate-1 transition-transform">
              <div className="text-5xl mb-3">🎉</div>
              <h3 className="text-white font-black text-xl mb-3">Let's hang out online!</h3>
              <div className="flex gap-3">
                <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-transform">
                  🐦
                </a>
                <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-transform">
                  📸
                </a>
                <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-transform">
                  💼
                </a>
                <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-transform">
                  👍
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Fun Text */}
        <div className="text-center mt-12">
          <p className="text-2xl font-bold text-purple-600 animate-bounce">
            Can't wait to hear from you! 🎊
          </p>
        </div>
      </div>
    </div>
  );
}
