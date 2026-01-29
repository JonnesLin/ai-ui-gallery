export default function FuturisticContact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white p-4 md:p-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Futuristic Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="text-blue-400 text-sm font-mono mb-2">SYSTEM.CONTACT.INIT()</div>
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              CONNECT
            </h1>
            <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-4"></div>
          </div>
          <p className="text-slate-400 text-lg font-light">Establishing secure connection...</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-slate-900/50 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8 shadow-2xl shadow-blue-500/10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-blue-400">TRANSMISSION FORM</h2>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-75"></div>
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-150"></div>
              </div>
            </div>

            <form className="space-y-6">
              <div className="relative">
                <label className="block text-blue-300 text-xs uppercase tracking-wider mb-2 font-mono">
                  Identity
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-950/50 border border-blue-500/50 rounded-lg focus:outline-none focus:border-blue-400 text-white font-mono placeholder-slate-600"
                  placeholder="Enter designation..."
                />
                <div className="absolute right-3 top-9 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              </div>

              <div className="relative">
                <label className="block text-blue-300 text-xs uppercase tracking-wider mb-2 font-mono">
                  Communication Channel
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-slate-950/50 border border-purple-500/50 rounded-lg focus:outline-none focus:border-purple-400 text-white font-mono placeholder-slate-600"
                  placeholder="user@future.net"
                />
                <div className="absolute right-3 top-9 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              </div>

              <div className="relative">
                <label className="block text-blue-300 text-xs uppercase tracking-wider mb-2 font-mono">
                  Data Payload
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-950/50 border border-pink-500/50 rounded-lg focus:outline-none focus:border-pink-400 resize-none text-white font-mono placeholder-slate-600"
                  placeholder="Transmit your message..."
                />
                <div className="absolute right-3 top-9 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-4 rounded-lg font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>Initiate Transmission</span>
                  <span className="text-xl">→</span>
                </span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-slate-900/50 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 border-2 border-white rounded animate-pulse"></div>
                </div>
                <div>
                  <div className="text-blue-400 text-xs font-mono mb-2">LOCATION.COORDINATES</div>
                  <p className="text-white font-light">
                    2077 Future Boulevard<br />
                    Nexus City, NC 99999<br />
                    Sector Alpha-7
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <div className="text-white text-xl">@</div>
                </div>
                <div>
                  <div className="text-purple-400 text-xs font-mono mb-2">EMAIL.PROTOCOL</div>
                  <p className="text-white font-light">connect@future.tech</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-xl border border-pink-500/30 rounded-2xl p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <div className="text-white text-xl">📡</div>
                </div>
                <div>
                  <div className="text-pink-400 text-xs font-mono mb-2">VOICE.CHANNEL</div>
                  <p className="text-white font-light text-lg">+1 (555) 207-7777</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="text-blue-300 text-xs font-mono mb-4">SYSTEM.STATUS</div>
              <div className="space-y-3 text-sm font-mono">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Server Status</span>
                  <span className="text-green-400 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    ONLINE
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Response Time</span>
                  <span className="text-blue-400">&lt; 24 HOURS</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Encryption</span>
                  <span className="text-purple-400">QUANTUM-256</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6">
              <div className="text-cyan-400 text-xs font-mono mb-4">NETWORK.LINKS</div>
              <div className="grid grid-cols-2 gap-3">
                <a href="#" className="px-4 py-2 bg-slate-950/50 border border-blue-500/50 rounded text-blue-400 text-sm font-mono hover:bg-blue-500/10 transition-all text-center">
                  TWITTER
                </a>
                <a href="#" className="px-4 py-2 bg-slate-950/50 border border-purple-500/50 rounded text-purple-400 text-sm font-mono hover:bg-purple-500/10 transition-all text-center">
                  LINKEDIN
                </a>
                <a href="#" className="px-4 py-2 bg-slate-950/50 border border-pink-500/50 rounded text-pink-400 text-sm font-mono hover:bg-pink-500/10 transition-all text-center">
                  GITHUB
                </a>
                <a href="#" className="px-4 py-2 bg-slate-950/50 border border-cyan-500/50 rounded text-cyan-400 text-sm font-mono hover:bg-cyan-500/10 transition-all text-center">
                  DISCORD
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
