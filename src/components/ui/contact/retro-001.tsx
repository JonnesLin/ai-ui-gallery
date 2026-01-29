export default function RetroContact() {
  return (
    <div className="min-h-screen bg-amber-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with retro styling */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-orange-800" style={{ fontFamily: 'serif' }}>
            Get in Touch
          </h1>
          <div className="w-48 h-1 bg-orange-600 mx-auto mb-4"></div>
          <p className="text-xl text-orange-700">Let's create something groovy together</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form with retro card style */}
          <div className="bg-orange-100 border-4 border-orange-800 rounded-lg p-8 shadow-[8px_8px_0px_0px_rgba(154,52,18,1)]">
            <h2 className="text-3xl font-bold text-orange-900 mb-6" style={{ fontFamily: 'serif' }}>Drop Us a Line</h2>

            <form className="space-y-5">
              <div>
                <label className="block text-orange-900 font-semibold mb-2" style={{ fontFamily: 'serif' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-amber-50 border-3 border-orange-700 rounded focus:outline-none focus:border-orange-900 text-orange-900"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-orange-900 font-semibold mb-2" style={{ fontFamily: 'serif' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-amber-50 border-3 border-orange-700 rounded focus:outline-none focus:border-orange-900 text-orange-900"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-orange-900 font-semibold mb-2" style={{ fontFamily: 'serif' }}>
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-amber-50 border-3 border-orange-700 rounded focus:outline-none focus:border-orange-900 resize-none text-orange-900"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-4 rounded font-bold text-lg border-3 border-orange-800 shadow-[4px_4px_0px_0px_rgba(154,52,18,1)] hover:shadow-[2px_2px_0px_0px_rgba(154,52,18,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                style={{ fontFamily: 'serif' }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-yellow-200 border-4 border-orange-800 rounded-lg p-6 shadow-[6px_6px_0px_0px_rgba(154,52,18,1)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 border-3 border-orange-800">
                  <span className="text-white text-xl">📍</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-orange-900 mb-2" style={{ fontFamily: 'serif' }}>
                    Our Office
                  </h3>
                  <p className="text-orange-800">
                    321 Vintage Avenue<br />
                    Retro City, RC 80085<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-orange-200 border-4 border-orange-800 rounded-lg p-6 shadow-[6px_6px_0px_0px_rgba(154,52,18,1)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 border-3 border-orange-800">
                  <span className="text-white text-xl">📞</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-orange-900 mb-2" style={{ fontFamily: 'serif' }}>
                    Call Us
                  </h3>
                  <p className="text-orange-800">+1 (555) 867-5309</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-200 border-4 border-orange-800 rounded-lg p-6 shadow-[6px_6px_0px_0px_rgba(154,52,18,1)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 border-3 border-orange-800">
                  <span className="text-white text-xl">✉️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-orange-900 mb-2" style={{ fontFamily: 'serif' }}>
                    Email Us
                  </h3>
                  <p className="text-orange-800">groovy@retro.design</p>
                </div>
              </div>
            </div>

            <div className="bg-red-200 border-4 border-orange-800 rounded-lg p-6 shadow-[6px_6px_0px_0px_rgba(154,52,18,1)]">
              <h3 className="text-xl font-bold text-orange-900 mb-4" style={{ fontFamily: 'serif' }}>
                Follow the Vibes
              </h3>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-orange-600 border-3 border-orange-800 rounded-full flex items-center justify-center text-white font-bold hover:bg-orange-700 transition-colors">
                  F
                </a>
                <a href="#" className="w-10 h-10 bg-orange-600 border-3 border-orange-800 rounded-full flex items-center justify-center text-white font-bold hover:bg-orange-700 transition-colors">
                  T
                </a>
                <a href="#" className="w-10 h-10 bg-orange-600 border-3 border-orange-800 rounded-full flex items-center justify-center text-white font-bold hover:bg-orange-700 transition-colors">
                  I
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
