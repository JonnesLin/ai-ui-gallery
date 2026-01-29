export default function NeonBlogPost() {
  return (
    <div className="min-h-screen bg-[#0d0221] text-gray-100">
      {/* Header */}
      <header className="border-b border-pink-500/20 bg-[#0d0221]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-5">
          <nav className="flex items-center justify-between">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]">
              NEON BLOG
            </span>
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
                Posts
              </a>
              <a href="#" className="text-sm text-pink-400 hover:text-pink-300 transition-colors hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]">
                Gallery
              </a>
              <button className="px-5 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-semibold rounded hover:from-pink-600 hover:to-purple-600 transition-all shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_30px_rgba(236,72,153,0.7)]">
                Subscribe
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        {/* Meta */}
        <div className="flex items-center gap-4 mb-8">
          <span className="px-4 py-1 bg-pink-500/20 border border-pink-500 text-pink-400 text-xs font-bold tracking-wider uppercase shadow-[0_0_10px_rgba(236,72,153,0.3)]">
            Tech Culture
          </span>
          <span className="text-cyan-400/60 text-sm">2024.03.28</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]">
            Neon Dreams:
          </span>
          <br />
          The Glowing Future of Digital Aesthetics
        </h1>

        {/* Author */}
        <div className="flex items-center gap-4 pb-8 mb-12 border-b border-pink-500/20">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.5)]">
            <img
              src="https://picsum.photos/seed/authorneon/80/80"
              alt="Author"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-bold text-white text-lg">Nyx Voltage</p>
            <p className="text-sm text-cyan-400">Digital Artist & Designer</p>
          </div>
        </div>

        {/* Featured Image */}
        <figure className="mb-16 relative group">
          <div className="aspect-[21/9] overflow-hidden rounded-lg border-2 border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.3)]">
            <img
              src="https://picsum.photos/seed/neon1/1200/514"
              alt="Featured"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0221] via-transparent to-transparent opacity-60" />
            {/* Glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <figcaption className="mt-4 text-sm text-gray-500 text-center">
            Neon aesthetics bridge retro nostalgia with cyberpunk futurism
          </figcaption>
        </figure>

        {/* Content */}
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p className="text-xl text-gray-200 leading-relaxed border-l-4 border-pink-500 pl-6 shadow-[0_0_15px_rgba(236,72,153,0.2)]">
            In the darkness of digital space, neon glows like urban poetry—vibrant, electric,
            impossible to ignore. It's the visual language of night cities and cybernetic dreams.
          </p>

          <p>
            Neon design emerged from the intersection of 1980s nostalgia, cyberpunk fiction,
            and the perpetual glow of our always-on digital lives. It speaks to our fascination
            with technology, nightlife, and the electric energy of urban environments.
          </p>

          <h2 className="text-3xl font-bold text-white pt-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            The Glow Aesthetic
          </h2>

          <p>
            True neon design isn't just about bright colors on dark backgrounds. It's about
            capturing the luminous quality of gas-filled tubes—the way light seems to emanate
            from within, creating halos and atmosphere in the surrounding darkness.
          </p>

          {/* Neon Elements Showcase */}
          <div className="my-12 p-8 bg-gradient-to-br from-pink-950/30 to-purple-950/30 rounded-lg border border-pink-500/30 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
            <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Neon Elements</h3>
            <div className="space-y-4 relative z-10">
              <div className="p-5 bg-[#0d0221]/50 rounded border border-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.4)]">
                <h4 className="text-pink-400 font-bold mb-2 drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]">
                  HOT PINK
                </h4>
                <p className="text-gray-400 text-sm">The signature neon color—energetic and attention-grabbing</p>
              </div>
              <div className="p-5 bg-[#0d0221]/50 rounded border border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                <h4 className="text-purple-400 font-bold mb-2 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
                  ELECTRIC PURPLE
                </h4>
                <p className="text-gray-400 text-sm">Mysterious and futuristic, bridging warm and cool</p>
              </div>
              <div className="p-5 bg-[#0d0221]/50 rounded border border-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                <h4 className="text-cyan-400 font-bold mb-2 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
                  CYAN BRIGHT
                </h4>
                <p className="text-gray-400 text-sm">Cool and technological, evoking digital interfaces</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white pt-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Cultural Context
          </h2>

          <p>
            Neon design taps into collective memories of 1980s arcade culture, Miami Vice
            aesthetics, and the neon-soaked streets of Blade Runner. It's retrofuturism—
            looking back at how the past imagined the future.
          </p>

          {/* Quote */}
          <div className="my-12 p-8 bg-[#0d0221]/80 border-l-4 border-pink-500 rounded-r relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-transparent" />
            <svg className="w-16 h-16 text-pink-500/30 mb-4" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10 8c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.3 0 2.5-0.4 3.5-1.1-0.3 3.3-2.9 5.1-3.5 5.1v4c5.5 0 10-4.5 10-10v-4c0-3.3-2.7-6-6-6z" />
            </svg>
            <p className="text-2xl text-white italic mb-4 relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              Neon doesn't whisper—it shouts in fluorescent glory, demanding to be seen
              in the digital night.
            </p>
            <p className="text-cyan-400 font-semibold relative z-10">— Digital Arts Quarterly</p>
          </div>

          {/* Image Grid */}
          <div className="my-12 grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-lg overflow-hidden border-2 border-pink-500/30 shadow-[0_0_30px_rgba(236,72,153,0.3)] hover:shadow-[0_0_50px_rgba(236,72,153,0.5)] transition-all">
              <img
                src="https://picsum.photos/seed/neon2/600/600"
                alt="Neon texture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden border-2 border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_50px_rgba(34,211,238,0.5)] transition-all">
              <img
                src="https://picsum.photos/seed/neon3/600/600"
                alt="Neon pattern"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white pt-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Implementation Techniques
          </h2>

          <p>
            Creating convincing neon effects requires more than bright colors. Layer multiple
            glows, use appropriate blur radii, and ensure your color choices work together.
            Dark backgrounds are essential—neon needs darkness to shine.
          </p>

          {/* Technical Tips */}
          <div className="my-12 grid md:grid-cols-2 gap-4">
            {[
              { num: '01', title: 'Layer Your Glows', desc: 'Multiple shadow layers create depth', color: 'pink' },
              { num: '02', title: 'Dark Foundations', desc: 'Deep blacks make colors pop', color: 'purple' },
              { num: '03', title: 'Complementary Colors', desc: 'Pink with cyan, purple with green', color: 'cyan' },
              { num: '04', title: 'Subtle Animation', desc: 'Gentle pulses enhance the effect', color: 'pink' },
            ].map((tip) => (
              <div key={tip.num} className={`p-6 bg-[#0d0221]/60 rounded-lg border border-${tip.color}-500/30 shadow-[0_0_20px_rgba(236,72,153,0.2)] hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all`}>
                <span className={`text-4xl font-bold text-${tip.color}-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)] block mb-3`}>
                  {tip.num}
                </span>
                <h4 className="text-lg font-bold text-white mb-2">{tip.title}</h4>
                <p className="text-gray-400 text-sm">{tip.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-lg">
            Neon design works best when it feels like a living thing—glowing, pulsing, and
            creating atmosphere. It's not a subtle aesthetic, and that's precisely the point.
          </p>
        </div>

        {/* Tags */}
        <div className="mt-16 pt-8 border-t border-pink-500/20">
          <div className="flex flex-wrap gap-3">
            {['Neon', 'Cyberpunk', 'Retro', '80s Design'].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/50 text-pink-400 hover:text-pink-300 rounded text-sm font-semibold transition-all cursor-pointer shadow-[0_0_10px_rgba(236,72,153,0.2)] hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share */}
        <div className="mt-8 flex items-center gap-4">
          <span className="text-gray-400 font-semibold">SHARE:</span>
          <div className="flex gap-3">
            {[...Array(3)].map((_, i) => (
              <button key={i} className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/50 rounded flex items-center justify-center text-pink-400 hover:text-pink-300 transition-all shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:shadow-[0_0_25px_rgba(236,72,153,0.5)]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </article>

      {/* Author Bio */}
      <section className="border-t border-pink-500/20 bg-gradient-to-b from-[#0d0221] to-[#1a0933]">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-pink-500 shadow-[0_0_40px_rgba(236,72,153,0.6)] shrink-0">
              <img
                src="https://picsum.photos/seed/authorneon/200/200"
                alt="Nyx Voltage"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-2">
                Nyx Voltage
              </h3>
              <p className="text-cyan-400 mb-4">Digital Artist & Designer</p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Nyx creates digital art at the intersection of neon aesthetics and cyberpunk
                culture. Their work has been featured in galleries from Tokyo to Berlin,
                exploring how light and color create mood in digital spaces.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded hover:from-pink-600 hover:to-purple-600 transition-all shadow-[0_0_25px_rgba(236,72,153,0.5)] hover:shadow-[0_0_35px_rgba(236,72,153,0.7)]">
                FOLLOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
          More Neon Content
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { seed: 'neo1', title: 'Cyberpunk UI Trends', date: 'Mar 25' },
            { seed: 'neo2', title: 'Retro Wave Design', date: 'Mar 20' },
            { seed: 'neo3', title: 'Glow Effects Tutorial', date: 'Mar 15' },
          ].map((post) => (
            <a key={post.seed} href="#" className="group">
              <div className="bg-[#1a0933]/60 rounded-lg overflow-hidden border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all">
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img
                    src={`https://picsum.photos/seed/${post.seed}/400/225`}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0221] via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-5">
                  <p className="text-xs text-cyan-400/60 mb-2">{post.date}</p>
                  <h3 className="font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 transition-all">
                    {post.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-pink-500/20 bg-[#0d0221]">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              NEON BLOG
            </span>
            <div className="flex items-center gap-8">
              <a href="#" className="text-sm text-gray-400 hover:text-pink-400 transition-colors">Privacy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">Terms</a>
              <a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-pink-500/10 text-center text-sm text-gray-500">
            <p>© 2024 Neon Blog. Glowing bright in the digital night.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
