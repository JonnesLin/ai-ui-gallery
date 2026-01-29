export default function CyberpunkBlogPost() {
  return (
    <div className="min-h-screen bg-black text-cyan-400">
      {/* Scanline effect overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-10 z-50" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.03) 2px, rgba(0, 255, 255, 0.03) 4px)'
      }} />

      {/* Header */}
      <header className="border-b border-cyan-500/30 bg-black/90 backdrop-blur-sm sticky top-0 z-40" style={{ boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)' }}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <span className="text-2xl font-mono font-bold text-cyan-400" style={{ textShadow: '0 0 10px rgba(6, 182, 212, 0.8)' }}>
              &gt;&gt; NEURAL_NET
            </span>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm font-mono text-cyan-400/70 hover:text-cyan-400 transition-colors uppercase tracking-widest border border-cyan-500/30 px-4 py-2 hover:border-cyan-400 hover:shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                Archive
              </a>
              <a href="#" className="text-sm font-mono text-cyan-400/70 hover:text-cyan-400 transition-colors uppercase tracking-widest border border-cyan-500/30 px-4 py-2 hover:border-cyan-400 hover:shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                Connect
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        {/* Meta */}
        <div className="flex items-center gap-4 text-xs font-mono text-pink-500 uppercase tracking-widest">
          <span className="bg-pink-500/20 border border-pink-500 px-3 py-1" style={{ boxShadow: '0 0 10px rgba(236, 72, 153, 0.3)' }}>
            CYBERSPACE
          </span>
          <span className="text-cyan-400/50">|</span>
          <time dateTime="2024-03-15" className="text-cyan-400/70">2024.03.15.23:47</time>
          <span className="text-cyan-400/50">|</span>
          <span className="text-cyan-400/50">NODE_ID: #A7F9</span>
        </div>

        {/* Title */}
        <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 leading-tight tracking-tight" style={{
          textShadow: '0 0 30px rgba(6, 182, 212, 0.5)',
          filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.4))'
        }}>
          DIGITAL CONSCIOUSNESS: INTERFACING WITH THE MACHINE
        </h1>

        {/* Author */}
        <div className="mt-8 flex items-center gap-4 border border-cyan-500/30 p-4 bg-cyan-500/5 backdrop-blur-sm" style={{ boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)' }}>
          <div className="w-16 h-16 border-2 border-pink-500 bg-gradient-to-br from-pink-500/20 to-purple-500/20 shrink-0 flex items-center justify-center" style={{ boxShadow: '0 0 15px rgba(236, 72, 153, 0.5)' }}>
            <span className="text-2xl font-mono font-bold text-pink-400">KN</span>
          </div>
          <div>
            <p className="text-base font-mono font-bold text-cyan-400">Kira.Nakamura@netrunner</p>
            <p className="text-sm font-mono text-cyan-400/60">[LEAD_ARCHITECT] Neural_Interface_Division</p>
          </div>
        </div>

        {/* Featured Image */}
        <figure className="mt-12">
          <div className="border-2 border-cyan-500/50 aspect-[16/9] overflow-hidden bg-black relative" style={{ boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)' }}>
            <img
              src="https://picsum.photos/seed/cyber1/1200/675"
              alt="Featured"
              className="w-full h-full object-cover opacity-80"
              style={{ filter: 'hue-rotate(180deg) saturate(2) contrast(1.2)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
            <div className="absolute top-4 right-4 font-mono text-xs text-cyan-400 bg-black/80 border border-cyan-500 px-3 py-1" style={{ boxShadow: '0 0 10px rgba(6, 182, 212, 0.5)' }}>
              [ENCRYPTED_FEED]
            </div>
          </div>
          <figcaption className="mt-4 text-xs font-mono text-cyan-400/60 uppercase tracking-wide">
            &gt;&gt; NEURAL_SCAN_2024_SECTOR_7 | CLEARANCE_LEVEL_3
          </figcaption>
        </figure>

        {/* Content */}
        <div className="mt-12 space-y-6 text-gray-300 leading-relaxed font-mono">
          <p className="text-lg md:text-xl text-cyan-300 leading-relaxed border-l-4 border-pink-500 pl-6 bg-pink-500/5 py-4" style={{ boxShadow: '0 0 15px rgba(236, 72, 153, 0.2)' }}>
            &gt;&gt; The boundary between human and machine dissolves in the neon-lit corridors of
            cyberspace. We are no longer users—we are nodes in a vast neural network, our
            consciousness streaming through fiber optic veins at the speed of light.
          </p>

          <p className="text-base">
            <span className="text-pink-400">[SYSTEM_LOG]:</span> The old world spoke of interfaces
            as barriers between mind and machine. That paradigm is dead. Modern neural interfaces
            don't translate thought into command—they ARE thought, rendered in silicon and light.
          </p>

          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 pt-8" style={{ textShadow: '0 0 20px rgba(6, 182, 212, 0.4)' }}>
            &gt;&gt; THE_MERGE
          </h2>

          <p className="text-base">
            Every keystroke, every gesture, every blink tracked and processed. The system learns
            you faster than you learn it. Predictive algorithms anticipate your needs before they
            surface in consciousness. Are you controlling the interface, or is it guiding you through
            pre-computed decision trees?
          </p>

          <blockquote className="border border-purple-500/50 bg-purple-500/10 p-6 my-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            <p className="text-xl text-purple-300 leading-relaxed" style={{ textShadow: '0 0 10px rgba(168, 85, 247, 0.5)' }}>
              "The future is already here—it's just not evenly distributed. But in cyberspace,
              everyone has equal access to infinity."
            </p>
            <footer className="mt-4 text-sm text-cyan-400/70 border-t border-purple-500/30 pt-3 uppercase tracking-widest">
              — WILLIAM_GIBSON.EXEC | NEUROMANCER_PROTOCOL
            </footer>
          </blockquote>

          <p className="text-base">
            <span className="text-pink-400">[WARNING]:</span> The integration comes with a price.
            As we upload more of ourselves into the cloud, what remains in the meat? Memory becomes
            database, personality becomes algorithm, identity becomes data structure. But perhaps
            that's not loss—perhaps that's evolution.
          </p>

          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 pt-8" style={{ textShadow: '0 0 20px rgba(6, 182, 212, 0.4)' }}>
            &gt;&gt; IMPLEMENTATION_STACK
          </h2>

          <div className="space-y-3 my-6 border border-cyan-500/30 p-6 bg-cyan-500/5" style={{ boxShadow: '0 0 20px rgba(6, 182, 212, 0.15)' }}>
            <div className="flex items-start gap-4">
              <span className="text-pink-400 font-bold shrink-0">[01]</span>
              <span className="text-gray-300">Direct neural pathways bypass traditional I/O bottlenecks</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-pink-400 font-bold shrink-0">[02]</span>
              <span className="text-gray-300">Real-time biometric feedback loops create adaptive interfaces</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-pink-400 font-bold shrink-0">[03]</span>
              <span className="text-gray-300">Quantum-encrypted thought streams ensure cognitive privacy</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-pink-400 font-bold shrink-0">[04]</span>
              <span className="text-gray-300">Distributed consciousness protocols enable hive-mind collaboration</span>
            </div>
          </div>

          <p className="text-base">
            <span className="text-cyan-400">[CONCLUSION]:</span> We stand at the threshold. Behind
            us, the analog world fades into static. Ahead, an infinite digital expanse where thought
            and code are indistinguishable. The question isn't whether to cross over—we already have.
            The only question is how deep into the machine we're willing to go.
          </p>
        </div>

        {/* Tags */}
        <div className="mt-16 pt-8 border-t border-cyan-500/30">
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 text-xs font-mono uppercase tracking-widest text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/20 hover:border-cyan-400 transition-colors cursor-pointer" style={{ boxShadow: '0 0 10px rgba(6, 182, 212, 0.2)' }}>
              NEURAL_INTERFACE
            </span>
            <span className="px-4 py-2 text-xs font-mono uppercase tracking-widest text-pink-400 border border-pink-500/50 bg-pink-500/10 hover:bg-pink-500/20 hover:border-pink-400 transition-colors cursor-pointer" style={{ boxShadow: '0 0 10px rgba(236, 72, 153, 0.2)' }}>
              CYBERSPACE
            </span>
            <span className="px-4 py-2 text-xs font-mono uppercase tracking-widest text-purple-400 border border-purple-500/50 hover:bg-purple-500/20 hover:border-purple-400 transition-colors cursor-pointer" style={{ boxShadow: '0 0 10px rgba(168, 85, 247, 0.2)' }}>
              AI_CONSCIOUSNESS
            </span>
          </div>
        </div>

        {/* Share */}
        <div className="mt-8 flex items-center gap-6 border border-cyan-500/30 p-4 bg-cyan-500/5">
          <span className="text-xs font-mono text-cyan-400/70 uppercase tracking-widest">BROADCAST:</span>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 flex items-center justify-center transition-colors" style={{ boxShadow: '0 0 10px rgba(6, 182, 212, 0.2)' }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 border border-pink-500/50 text-pink-400 hover:bg-pink-500/20 hover:border-pink-400 flex items-center justify-center transition-colors" style={{ boxShadow: '0 0 10px rgba(236, 72, 153, 0.2)' }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </article>

      {/* Author Bio */}
      <section className="border-t border-cyan-500/30">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="border border-cyan-500/30 bg-cyan-500/5 p-8" style={{ boxShadow: '0 0 30px rgba(6, 182, 212, 0.2)' }}>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-32 h-32 border-2 border-pink-500 bg-gradient-to-br from-pink-500/20 to-purple-500/20 shrink-0 flex items-center justify-center" style={{ boxShadow: '0 0 20px rgba(236, 72, 153, 0.5)' }}>
                <span className="text-5xl font-mono font-bold text-pink-400">KN</span>
              </div>
              <div>
                <p className="text-xs font-mono text-cyan-400/60 uppercase tracking-widest">OPERATOR_PROFILE</p>
                <h3 className="mt-2 text-2xl font-mono font-bold text-cyan-400">Kira.Nakamura@netrunner</h3>
                <p className="mt-4 text-base text-gray-300 leading-relaxed font-mono">
                  Kira is a neural interface architect specializing in brain-computer interfaces
                  and distributed consciousness protocols. She writes about the convergence of human
                  cognition and artificial intelligence, exploring the philosophical and technical
                  implications of the coming merger.
                </p>
                <a href="#" className="inline-block mt-6 text-sm font-mono uppercase tracking-widest border border-cyan-500 px-6 py-2 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 transition-colors" style={{ boxShadow: '0 0 15px rgba(6, 182, 212, 0.3)' }}>
                  ACCESS_ALL_POSTS &gt;&gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="border-t border-cyan-500/30">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-mono font-bold text-cyan-400 mb-8" style={{ textShadow: '0 0 15px rgba(6, 182, 212, 0.5)' }}>
            &gt;&gt; RELATED_TRANSMISSIONS
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <a href="#" className="group">
              <div className="border-2 border-cyan-500/50 aspect-[3/2] overflow-hidden bg-black relative" style={{ boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)' }}>
                <img
                  src="https://picsum.photos/seed/cyber2/600/400"
                  alt="Related post"
                  className="w-full h-full object-cover opacity-70 transition-all duration-500 group-hover:opacity-90 group-hover:scale-110"
                  style={{ filter: 'hue-rotate(180deg) saturate(2) contrast(1.2)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
              </div>
              <p className="mt-4 text-xs font-mono text-cyan-400/60">2024.02.28.19:32</p>
              <h3 className="mt-2 text-base font-mono font-bold text-cyan-400 group-hover:text-pink-400 transition-colors">
                GHOST IN THE SHELL: QUANTUM IDENTITY PROTOCOLS
              </h3>
            </a>
            <a href="#" className="group">
              <div className="border-2 border-cyan-500/50 aspect-[3/2] overflow-hidden bg-black relative" style={{ boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)' }}>
                <img
                  src="https://picsum.photos/seed/cyber3/600/400"
                  alt="Related post"
                  className="w-full h-full object-cover opacity-70 transition-all duration-500 group-hover:opacity-90 group-hover:scale-110"
                  style={{ filter: 'hue-rotate(180deg) saturate(2) contrast(1.2)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
              </div>
              <p className="mt-4 text-xs font-mono text-cyan-400/60">2024.02.14.03:17</p>
              <h3 className="mt-2 text-base font-mono font-bold text-cyan-400 group-hover:text-pink-400 transition-colors">
                NEON SPRAWL: ARCHITECTING THE METAVERSE
              </h3>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/30 bg-black/90">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs font-mono text-cyan-400/60">© 2024 NEURAL_NET | ALL_RIGHTS_RESERVED | NODE_7A3F</p>
            <div className="flex items-center gap-8">
              <a href="#" className="text-xs font-mono text-cyan-400/70 hover:text-cyan-400 transition-colors uppercase tracking-widest">PRIVACY_PROTOCOL</a>
              <a href="#" className="text-xs font-mono text-cyan-400/70 hover:text-cyan-400 transition-colors uppercase tracking-widest">TERMS_OF_USE</a>
              <a href="#" className="text-xs font-mono text-cyan-400/70 hover:text-cyan-400 transition-colors uppercase tracking-widest">DATA_FEED</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
