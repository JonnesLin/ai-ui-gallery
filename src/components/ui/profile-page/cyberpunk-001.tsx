export default function CyberpunkProfilePage() {
  return (
    <div className="min-h-screen bg-black text-cyan-400 p-4">
      <div className="max-w-6xl mx-auto py-12">
        {/* Glitch Header */}
        <div className="relative mb-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"></div>
          <div className="relative border-2 border-cyan-400 bg-black/80 backdrop-blur p-8 shadow-[0_0_50px_rgba(6,182,212,0.3)]">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-40 h-40 border-4 border-pink-500 shadow-[0_0_30px_rgba(236,72,153,0.5)] flex-shrink-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 opacity-50"></div>
                <div className="absolute inset-2 border-2 border-cyan-400/50"></div>
              </div>
              <div className="flex-1">
                <h1 className="text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 relative">
                  GHOST_RUNNER_077
                  <span className="absolute -top-1 -left-1 text-pink-500 opacity-30">GHOST_RUNNER_077</span>
                </h1>
                <p className="text-pink-400 mb-2 font-mono text-sm">&gt; CYBERSECURITY SPECIALIST</p>
                <p className="text-cyan-300/80 mb-6 font-mono text-sm">&gt; NEURAL NET ARCHITECT / DATA BREACHER</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 border border-cyan-400 text-cyan-400 text-xs font-mono bg-cyan-400/10">HACKING</span>
                  <span className="px-3 py-1 border border-purple-400 text-purple-400 text-xs font-mono bg-purple-400/10">AI</span>
                  <span className="px-3 py-1 border border-pink-400 text-pink-400 text-xs font-mono bg-pink-400/10">CRYPTO</span>
                </div>
                <div className="flex gap-3">
                  <button className="px-6 py-3 bg-cyan-500 text-black font-bold border-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] transition-all uppercase text-sm">
                    EDIT.PROFILE
                  </button>
                  <button className="px-6 py-3 border-2 border-pink-500 text-pink-400 font-bold shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all uppercase text-sm">
                    CONNECT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="border-2 border-cyan-400/50 bg-black/60 p-6 text-center shadow-[inset_0_0_20px_rgba(6,182,212,0.1)]">
            <div className="text-4xl font-black text-cyan-400 mb-1 font-mono">1337</div>
            <div className="text-cyan-400/60 text-xs uppercase font-mono">POSTS</div>
          </div>
          <div className="border-2 border-purple-400/50 bg-black/60 p-6 text-center shadow-[inset_0_0_20px_rgba(168,85,247,0.1)]">
            <div className="text-4xl font-black text-purple-400 mb-1 font-mono">99.9K</div>
            <div className="text-purple-400/60 text-xs uppercase font-mono">FOLLOWERS</div>
          </div>
          <div className="border-2 border-pink-400/50 bg-black/60 p-6 text-center shadow-[inset_0_0_20px_rgba(236,72,153,0.1)]">
            <div className="text-4xl font-black text-pink-400 mb-1 font-mono">420</div>
            <div className="text-pink-400/60 text-xs uppercase font-mono">FOLLOWING</div>
          </div>
          <div className="border-2 border-green-400/50 bg-black/60 p-6 text-center shadow-[inset_0_0_20px_rgba(74,222,128,0.1)]">
            <div className="text-4xl font-black text-green-400 mb-1 font-mono">∞</div>
            <div className="text-green-400/60 text-xs uppercase font-mono">UPTIME</div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="border-2 border-cyan-400/50 bg-black/60 p-6 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
            <h3 className="text-xl font-black text-cyan-400 mb-4 font-mono">&gt; SYSTEM.INFO</h3>
            <div className="space-y-3 text-sm font-mono">
              <div className="flex items-start gap-3">
                <span className="text-pink-400">[LOC]</span>
                <span className="text-cyan-300">NEO-TOKYO, SECTOR-7</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-pink-400">[NET]</span>
                <span className="text-cyan-300">GHOST_RUNNER.CYBERSPACE</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-pink-400">[MSG]</span>
                <span className="text-cyan-300">ENCRYPTED@DARKNET.IO</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-pink-400">[STS]</span>
                <span className="text-green-400">ONLINE // AVAILABLE</span>
              </div>
            </div>
          </div>

          <div className="border-2 border-purple-400/50 bg-black/60 p-6 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            <h3 className="text-xl font-black text-purple-400 mb-4 font-mono">&gt; SKILLS.DATA</h3>
            <div className="space-y-2">
              {[
                { name: 'NEURAL_HACKING', level: 95 },
                { name: 'CRYPTOGRAPHY', level: 88 },
                { name: 'AI_TRAINING', level: 92 },
                { name: 'QUANTUM_CODE', level: 76 }
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1 text-xs font-mono">
                    <span className="text-purple-300">{skill.name}</span>
                    <span className="text-pink-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-black border border-purple-400/30">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="border-2 border-pink-400/50 bg-black/60 p-6 shadow-[0_0_30px_rgba(236,72,153,0.2)]">
          <h3 className="text-xl font-black text-pink-400 mb-6 font-mono">&gt; ACTIVITY.LOG</h3>
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="border-l-4 border-cyan-400 pl-4 py-2 bg-black/40">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border-2 border-pink-400 bg-gradient-to-br from-cyan-500/20 to-pink-500/20 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-cyan-400 font-mono text-sm font-bold">GHOST_RUNNER_077</span>
                      <span className="text-purple-400 font-mono text-xs">@{2 + i}H.AGO</span>
                    </div>
                    <p className="text-cyan-300/80 text-sm font-mono">
                      Successfully breached firewall_v{i + 3}.0 // New neural pathway discovered
                    </p>
                    <div className="flex gap-4 mt-2 text-xs font-mono">
                      <button className="text-pink-400 hover:text-pink-300">
                        [LIKE] {42 + i * 10}
                      </button>
                      <button className="text-cyan-400 hover:text-cyan-300">
                        [SHARE] {12 + i * 3}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal Footer */}
        <div className="mt-8 border-2 border-green-400/50 bg-black/80 p-4 font-mono text-sm">
          <div className="text-green-400">
            <span className="text-pink-400">$</span> CONNECTION_ESTABLISHED // NEURAL_LINK_ACTIVE // UPTIME: 99.9%
          </div>
        </div>
      </div>
    </div>
  );
}
