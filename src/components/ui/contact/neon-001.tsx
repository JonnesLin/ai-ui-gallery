export default function NeonContact() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Neon Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-black mb-6 text-pink-500"
              style={{
                textShadow: `
                  0 0 10px #ec4899,
                  0 0 20px #ec4899,
                  0 0 30px #ec4899,
                  0 0 40px #ec4899
                `
              }}>
            CONTACT
          </h1>
          <p className="text-cyan-400 text-xl"
             style={{
               textShadow: '0 0 10px #06b6d4, 0 0 20px #06b6d4'
             }}>
            Light up our inbox
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="border-2 border-pink-500 rounded-lg p-8 relative"
               style={{
                 boxShadow: '0 0 20px rgba(236, 72, 153, 0.5), inset 0 0 20px rgba(236, 72, 153, 0.1)'
               }}>
            <div className="absolute top-0 left-0 w-full h-full bg-pink-500/5 rounded-lg"></div>

            <h2 className="text-3xl font-bold mb-8 text-cyan-400 relative z-10"
                style={{
                  textShadow: '0 0 10px #06b6d4, 0 0 20px #06b6d4'
                }}>
              Send Message
            </h2>

            <form className="space-y-6 relative z-10">
              <div>
                <label className="block text-pink-400 font-bold mb-2 uppercase text-sm"
                       style={{ textShadow: '0 0 5px #ec4899' }}>
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-cyan-500 focus:outline-none focus:border-pink-500 text-white rounded"
                  style={{
                    boxShadow: '0 0 10px rgba(6, 182, 212, 0.3)'
                  }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-pink-400 font-bold mb-2 uppercase text-sm"
                       style={{ textShadow: '0 0 5px #ec4899' }}>
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-purple-500 focus:outline-none focus:border-pink-500 text-white rounded"
                  style={{
                    boxShadow: '0 0 10px rgba(168, 85, 247, 0.3)'
                  }}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-pink-400 font-bold mb-2 uppercase text-sm"
                       style={{ textShadow: '0 0 5px #ec4899' }}>
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-yellow-500 focus:outline-none focus:border-pink-500 resize-none text-white rounded"
                  style={{
                    boxShadow: '0 0 10px rgba(234, 179, 8, 0.3)'
                  }}
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-4 rounded font-black uppercase tracking-wider border-2 border-pink-500"
                style={{
                  boxShadow: '0 0 20px rgba(236, 72, 153, 0.6), 0 0 40px rgba(236, 72, 153, 0.4)',
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
                }}
              >
                Transmit
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="border-2 border-cyan-500 rounded-lg p-6"
                 style={{
                   boxShadow: '0 0 20px rgba(6, 182, 212, 0.5), inset 0 0 20px rgba(6, 182, 212, 0.1)'
                 }}>
              <div className="w-16 h-16 border-2 border-cyan-400 rounded-full flex items-center justify-center mb-4 mx-auto"
                   style={{
                     boxShadow: '0 0 20px rgba(6, 182, 212, 0.6)'
                   }}>
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2 text-center"
                  style={{ textShadow: '0 0 10px #06b6d4' }}>
                LOCATION
              </h3>
              <p className="text-center text-gray-300">
                88 Neon Street<br />
                Electric City, EC 88888<br />
                Glow District
              </p>
            </div>

            <div className="border-2 border-purple-500 rounded-lg p-6"
                 style={{
                   boxShadow: '0 0 20px rgba(168, 85, 247, 0.5), inset 0 0 20px rgba(168, 85, 247, 0.1)'
                 }}>
              <div className="w-16 h-16 border-2 border-purple-400 rounded-full flex items-center justify-center mb-4 mx-auto"
                   style={{
                     boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)'
                   }}>
                <span className="text-3xl">📧</span>
              </div>
              <h3 className="text-xl font-bold text-purple-400 mb-2 text-center"
                  style={{ textShadow: '0 0 10px #a855f7' }}>
                EMAIL
              </h3>
              <p className="text-center text-gray-300">
                glow@neon.lights
              </p>
            </div>

            <div className="border-2 border-yellow-500 rounded-lg p-6"
                 style={{
                   boxShadow: '0 0 20px rgba(234, 179, 8, 0.5), inset 0 0 20px rgba(234, 179, 8, 0.1)'
                 }}>
              <div className="w-16 h-16 border-2 border-yellow-400 rounded-full flex items-center justify-center mb-4 mx-auto"
                   style={{
                     boxShadow: '0 0 20px rgba(234, 179, 8, 0.6)'
                   }}>
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2 text-center"
                  style={{ textShadow: '0 0 10px #eab308' }}>
                PHONE
              </h3>
              <p className="text-center text-gray-300 text-lg">
                +1 (555) NEON-888
              </p>
            </div>

            <div className="border-2 border-green-500 rounded-lg p-6"
                 style={{
                   boxShadow: '0 0 20px rgba(34, 197, 94, 0.5), inset 0 0 20px rgba(34, 197, 94, 0.1)'
                 }}>
              <h3 className="text-xl font-bold text-green-400 mb-4 text-center"
                  style={{ textShadow: '0 0 10px #22c55e' }}>
                SOCIAL GLOW
              </h3>
              <div className="flex justify-center gap-4">
                <a href="#" className="w-12 h-12 border-2 border-pink-500 rounded flex items-center justify-center hover:bg-pink-500/20 transition-all"
                   style={{ boxShadow: '0 0 10px rgba(236, 72, 153, 0.5)' }}>
                  <span className="text-sm font-bold text-pink-400">TW</span>
                </a>
                <a href="#" className="w-12 h-12 border-2 border-cyan-500 rounded flex items-center justify-center hover:bg-cyan-500/20 transition-all"
                   style={{ boxShadow: '0 0 10px rgba(6, 182, 212, 0.5)' }}>
                  <span className="text-sm font-bold text-cyan-400">IN</span>
                </a>
                <a href="#" className="w-12 h-12 border-2 border-purple-500 rounded flex items-center justify-center hover:bg-purple-500/20 transition-all"
                   style={{ boxShadow: '0 0 10px rgba(168, 85, 247, 0.5)' }}>
                  <span className="text-sm font-bold text-purple-400">IG</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
