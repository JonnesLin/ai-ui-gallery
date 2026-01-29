export default function PastelContact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-purple-400 mb-3">Let's Connect</h1>
          <p className="text-purple-300 text-lg">We're excited to hear from you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-purple-400 mb-6">Send a Message</h2>

            <form className="space-y-5">
              <div>
                <label className="block text-purple-400 font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-pink-50/50 border-2 border-pink-200 rounded-2xl focus:outline-none focus:border-purple-300 text-purple-600 placeholder-purple-300"
                  placeholder="Your sweet name"
                />
              </div>

              <div>
                <label className="block text-purple-400 font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-blue-50/50 border-2 border-blue-200 rounded-2xl focus:outline-none focus:border-purple-300 text-purple-600 placeholder-purple-300"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-purple-400 font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-purple-50/50 border-2 border-purple-200 rounded-2xl focus:outline-none focus:border-purple-300 resize-none text-purple-600 placeholder-purple-300"
                  placeholder="Share your thoughts with us..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-300 to-purple-300 text-white py-4 rounded-2xl font-semibold hover:from-pink-400 hover:to-purple-400 transition-all shadow-md hover:shadow-lg"
              >
                Send with Love 💌
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <div className="bg-pink-200/40 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-200 to-pink-300 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-2xl">🏠</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-pink-400 mb-2">Visit Us</h3>
                  <p className="text-pink-500">
                    456 Pastel Lane<br />
                    Dreamville, PL 12345<br />
                    Sweet Land
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-200/40 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-200 to-purple-300 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Email Us</h3>
                  <p className="text-purple-500">hello@pastel.love</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-200/40 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Call Us</h3>
                  <p className="text-blue-500">+1 (555) 456-7890</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-200/40 via-purple-200/40 to-blue-200/40 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-purple-400 mb-4">Follow Our Journey</h3>
              <div className="flex gap-3">
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-pink-300 to-pink-400 rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all">
                  <span className="text-sm font-bold">Tw</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-purple-300 to-purple-400 rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all">
                  <span className="text-sm font-bold">In</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-blue-300 to-blue-400 rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all">
                  <span className="text-sm font-bold">Fb</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
