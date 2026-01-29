export default function CyberpunkContact() {
  return (
    <div className="min-h-screen bg-black text-cyan-400 p-4 md:p-8 relative overflow-hidden">
      {/* Cyber grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Glitch header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-black mb-4 text-cyan-400 relative inline-block">
            <span className="relative">
              CONTACT
              <span className="absolute inset-0 text-pink-500 opacity-70" style={{ left: '2px' }}>CONTACT</span>
              <span className="absolute inset-0 text-blue-500 opacity-70" style={{ left: '-2px' }}>CONTACT</span>
            </span>
          </h1>
          <p className="text-pink-400 text-xl font-mono mt-4">&gt; INITIATE_CONNECTION.exe</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="border-2 border-cyan-400 bg-black/50 p-8 relative overflow-hidden shadow-[0_0_20px_rgba(0,255,255,0.3)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

            <h2 className="text-2xl font-bold mb-6 text-pink-400 font-mono">&lt;TRANSMIT_MESSAGE/&gt;</h2>

            <form className="space-y-5">
              <div>
                <label className="block text-cyan-300 text-sm font-mono mb-2">[ USER_NAME ]</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black border-2 border-cyan-700 focus:border-cyan-400 outline-none text-cyan-400 font-mono placeholder-cyan-800 shadow-[inset_0_0_10px_rgba(0,255,255,0.2)]"
                  placeholder="Enter your name..."
                />
              </div>

              <div>
                <label className="block text-cyan-300 text-sm font-mono mb-2">[ EMAIL_ADDRESS ]</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-black border-2 border-cyan-700 focus:border-cyan-400 outline-none text-cyan-400 font-mono placeholder-cyan-800 shadow-[inset_0_0_10px_rgba(0,255,255,0.2)]"
                  placeholder="user@cyberspace.net"
                />
              </div>

              <div>
                <label className="block text-cyan-300 text-sm font-mono mb-2">[ MESSAGE_PAYLOAD ]</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-black border-2 border-cyan-700 focus:border-cyan-400 outline-none text-cyan-400 font-mono placeholder-cyan-800 resize-none shadow-[inset_0_0_10px_rgba(0,255,255,0.2)]"
                  placeholder="Enter your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 text-black py-4 font-bold font-mono border-2 border-cyan-400 hover:bg-pink-500 hover:border-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] transition-all shadow-[0_0_15px_rgba(0,255,255,0.5)]"
              >
                &gt;&gt; TRANSMIT &lt;&lt;
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="border-2 border-pink-500 bg-black/50 p-6 relative shadow-[0_0_15px_rgba(236,72,153,0.3)]">
              <div className="absolute top-0 right-0 text-pink-500 text-xs font-mono p-2">ID: LOC_001</div>
              <div className="text-cyan-400 text-sm font-mono mb-2">// PHYSICAL_LOCATION</div>
              <p className="text-pink-400 font-mono">
                2049 Neon Street<br />
                Neo Tokyo, NT 2077<br />
                Sector 7
              </p>
            </div>

            <div className="border-2 border-cyan-500 bg-black/50 p-6 relative shadow-[0_0_15px_rgba(0,255,255,0.3)]">
              <div className="absolute top-0 right-0 text-cyan-500 text-xs font-mono p-2">ID: EML_001</div>
              <div className="text-cyan-400 text-sm font-mono mb-2">// EMAIL_PROTOCOL</div>
              <p className="text-cyan-300 font-mono">netrunner@cyber.punk</p>
            </div>

            <div className="border-2 border-blue-500 bg-black/50 p-6 relative shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <div className="absolute top-0 right-0 text-blue-500 text-xs font-mono p-2">ID: TEL_001</div>
              <div className="text-cyan-400 text-sm font-mono mb-2">// VOICE_CHANNEL</div>
              <p className="text-blue-300 font-mono">+1 (555) 2077-TECH</p>
            </div>

            <div className="border-2 border-purple-500 bg-black/50 p-6 relative shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              <div className="absolute top-0 right-0 text-purple-500 text-xs font-mono p-2">ID: SOC_001</div>
              <div className="text-cyan-400 text-sm font-mono mb-3">// SOCIAL_NETWORKS</div>
              <div className="flex gap-3">
                <a href="#" className="px-4 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-mono text-sm transition-all">
                  TWT
                </a>
                <a href="#" className="px-4 py-2 border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black font-mono text-sm transition-all">
                  LNK
                </a>
                <a href="#" className="px-4 py-2 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black font-mono text-sm transition-all">
                  GIT
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="mt-8 text-center">
          <p className="text-cyan-600 font-mono text-sm">&gt; SYSTEM_STATUS: ONLINE | SECURITY_LEVEL: MAX | ENCRYPTION: ENABLED_</p>
        </div>
      </div>
    </div>
  );
}
