export default function GradientContact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-white/90 text-lg">We'd love to hear from you. Send us a message!</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-4">
              <span className="text-white text-2xl">📍</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Location</h3>
            <p className="text-white/80 text-sm">789 Gradient Boulevard, Color City, CC 67890</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-4">
              <span className="text-white text-2xl">✉️</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Email</h3>
            <p className="text-white/80 text-sm">hello@gradient.studio</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center mb-4">
              <span className="text-white text-2xl">📱</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Phone</h3>
            <p className="text-white/80 text-sm">+1 (555) 345-6789</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/90 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/60 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-white/90 font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/60 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/90 font-medium mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/60 transition-all"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="block text-white/90 font-medium mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/60 resize-none transition-all"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
