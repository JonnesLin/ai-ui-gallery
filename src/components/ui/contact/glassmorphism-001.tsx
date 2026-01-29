export default function GlassmorphismContact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-3">
            <h1 className="text-4xl font-bold mb-2 text-white">Contact Us</h1>
            <p className="text-white/80 mb-8">Let's start a conversation</p>

            <form className="space-y-6">
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                  placeholder="Tell us what you're thinking..."
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl text-white font-medium hover:bg-white/40 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="text-white/60 text-xs font-semibold mb-2">LOCATION</div>
              <div className="text-white">
                123 Glass Street<br />
                Los Angeles, CA 90001
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="text-white/60 text-xs font-semibold mb-2">EMAIL</div>
              <div className="text-white">contact@glass.design</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="text-white/60 text-xs font-semibold mb-2">PHONE</div>
              <div className="text-white">+1 (555) 987-6543</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="text-white/60 text-xs font-semibold mb-3">SOCIAL</div>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-all">
                  <span className="text-sm">T</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-all">
                  <span className="text-sm">L</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-all">
                  <span className="text-sm">I</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
