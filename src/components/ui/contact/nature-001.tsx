export default function NatureContact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Organic Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-4">
            Let's Grow Together
          </h1>
          <p className="text-xl text-green-600">Cultivating connections, naturally</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-green-200">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🌱</span>
              <h2 className="text-2xl font-semibold text-green-800">Plant Your Message</h2>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-green-700 font-medium mb-2 flex items-center gap-2">
                  <span className="text-lg">🌿</span> Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-green-50/50 border-2 border-green-300 rounded-2xl focus:outline-none focus:border-green-500 text-green-900 placeholder-green-400"
                  placeholder="Nature Lover"
                />
              </div>

              <div>
                <label className="block text-green-700 font-medium mb-2 flex items-center gap-2">
                  <span className="text-lg">🍃</span> Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-green-50/50 border-2 border-green-300 rounded-2xl focus:outline-none focus:border-green-500 text-green-900 placeholder-green-400"
                  placeholder="you@nature.earth"
                />
              </div>

              <div>
                <label className="block text-green-700 font-medium mb-2 flex items-center gap-2">
                  <span className="text-lg">🌸</span> Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-green-50/50 border-2 border-green-300 rounded-2xl focus:outline-none focus:border-green-500 resize-none text-green-900 placeholder-green-400"
                  placeholder="Share your thoughts..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-2xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <span className="text-xl">🌻</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-400/20 to-green-500/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-green-300 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-5xl">🏞️</div>
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Our Garden</h3>
                  <p className="text-green-700 leading-relaxed">
                    123 Forest Path<br />
                    Green Valley, GV 54321<br />
                    Mother Earth
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-400/20 to-emerald-500/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-emerald-300 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-5xl">📞</div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-800 mb-3">Call Us</h3>
                  <p className="text-emerald-700 text-lg">+1 (555) NAT-URE1</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-400/20 to-teal-500/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-teal-300 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-5xl">📧</div>
                <div>
                  <h3 className="text-xl font-semibold text-teal-800 mb-3">Email</h3>
                  <p className="text-teal-700">hello@nature.garden</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-lime-400/20 to-lime-500/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-lime-300 shadow-lg">
              <h3 className="text-xl font-semibold text-lime-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🌍</span> Connect with Nature
              </h3>
              <div className="flex gap-3">
                <a href="#" className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl hover:bg-green-600 transition-colors shadow-md">
                  🌳
                </a>
                <a href="#" className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center text-white text-2xl hover:bg-emerald-600 transition-colors shadow-md">
                  🦋
                </a>
                <a href="#" className="w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center text-white text-2xl hover:bg-teal-600 transition-colors shadow-md">
                  🌺
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-3xl p-6 border-2 border-green-200">
              <p className="text-green-700 text-center italic">
                "In every walk with nature, one receives far more than he seeks." - John Muir
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
