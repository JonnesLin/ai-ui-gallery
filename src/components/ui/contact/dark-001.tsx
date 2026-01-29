export default function DarkContact() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-4">Let's Talk</h1>
              <p className="text-gray-400 text-lg">Have a project in mind? We'd love to hear about it.</p>
            </div>

            <div className="space-y-6 pt-8">
              <div className="border-l-2 border-white pl-6">
                <h3 className="text-gray-500 text-sm font-semibold mb-2">EMAIL US</h3>
                <p className="text-xl">contact@darkstudio.com</p>
              </div>

              <div className="border-l-2 border-white pl-6">
                <h3 className="text-gray-500 text-sm font-semibold mb-2">CALL US</h3>
                <p className="text-xl">+1 (555) 234-5678</p>
              </div>

              <div className="border-l-2 border-white pl-6">
                <h3 className="text-gray-500 text-sm font-semibold mb-2">VISIT US</h3>
                <p className="text-xl">456 Dark Avenue<br />New York, NY 10001</p>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-gray-500 text-sm font-semibold mb-4">FOLLOW US</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 border border-gray-800 hover:border-white flex items-center justify-center transition-colors">
                  <span className="text-sm">TW</span>
                </a>
                <a href="#" className="w-12 h-12 border border-gray-800 hover:border-white flex items-center justify-center transition-colors">
                  <span className="text-sm">LI</span>
                </a>
                <a href="#" className="w-12 h-12 border border-gray-800 hover:border-white flex items-center justify-center transition-colors">
                  <span className="text-sm">IG</span>
                </a>
                <a href="#" className="w-12 h-12 border border-gray-800 hover:border-white flex items-center justify-center transition-colors">
                  <span className="text-sm">FB</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black border border-zinc-800 focus:border-white outline-none transition-colors text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-black border border-zinc-800 focus:border-white outline-none transition-colors text-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black border border-zinc-800 focus:border-white outline-none transition-colors text-white"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-black border border-zinc-800 focus:border-white outline-none transition-colors resize-none text-white"
                  placeholder="Tell us more about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
