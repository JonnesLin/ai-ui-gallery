export default function GlassmorphismBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Ambient Blobs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Header */}
      <header className="relative z-10 backdrop-blur-xl bg-white/10 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <span className="text-lg font-semibold text-white">Crystalline</span>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Stories</a>
              <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">About</a>
              <button className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white border border-white/20 hover:bg-white/20 transition-all">
                Subscribe
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Article Container */}
      <article className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-20">
        {/* Glass Card */}
        <div className="backdrop-blur-2xl bg-white/10 rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
          {/* Featured Image */}
          <div className="relative aspect-[2/1] overflow-hidden">
            <img
              src="https://picsum.photos/seed/glass1/1200/600"
              alt="Featured"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">
                  Technology
                </span>
                <span className="text-white/60 text-sm">8 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                The Future of Transparent Interfaces
              </h1>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-8 md:p-12">
            {/* Author Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src="https://picsum.photos/seed/author2/80/80"
                    alt="Author"
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-white/30"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white/20" />
                </div>
                <div>
                  <p className="text-white font-medium">Marcus Chen</p>
                  <p className="text-white/50 text-sm">March 18, 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </button>
                <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Article Content */}
            <div className="mt-8 space-y-6 text-white/80 leading-relaxed">
              <p className="text-xl text-white/90 leading-relaxed">
                As our digital experiences become increasingly layered, the boundaries between
                interface and environment blur into something entirely new. Glassmorphism represents
                more than an aesthetic—it's a philosophy of transparency in design.
              </p>

              <p>
                The evolution of user interface design has followed a fascinating trajectory. From
                skeuomorphism's attempt to replicate physical objects, through flat design's
                minimalist rebellion, we've arrived at something that feels genuinely new: interfaces
                that acknowledge their digital nature while creating depth and hierarchy.
              </p>

              <div className="my-8 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <h3 className="text-white font-semibold mb-3">Key Principles</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-purple-500/30 rounded-full flex items-center justify-center text-purple-300 text-xs mt-0.5">1</span>
                    <span>Transparency creates visual hierarchy through layering</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-purple-500/30 rounded-full flex items-center justify-center text-purple-300 text-xs mt-0.5">2</span>
                    <span>Blur effects add depth while maintaining readability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-purple-500/30 rounded-full flex items-center justify-center text-purple-300 text-xs mt-0.5">3</span>
                    <span>Subtle borders define edges without harsh lines</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-white pt-4">Beyond Aesthetics</h2>

              <p>
                While the visual appeal of frosted glass effects is undeniable, the real power
                of this approach lies in its functional benefits. By allowing background content
                to show through, we create context awareness—users always understand where they
                are in the interface hierarchy.
              </p>

              <figure className="my-8">
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <img
                    src="https://picsum.photos/seed/glass2/800/450"
                    alt="Interface example"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-white/50 text-center">
                  Layered interfaces create natural depth perception
                </figcaption>
              </figure>

              <p>
                The accessibility considerations are equally important. Proper implementation
                requires careful attention to contrast ratios and blur intensity to ensure
                content remains readable for all users.
              </p>

              <blockquote className="my-8 pl-6 border-l-2 border-purple-400/50">
                <p className="text-lg text-white/90 italic">
                  "The best interfaces don't just show information—they create an environment
                  where information can breathe and exist in relationship to its context."
                </p>
                <footer className="mt-3 text-sm text-white/50">— Sarah Kim, Design Lead at Clarity</footer>
              </blockquote>

              <h2 className="text-2xl font-semibold text-white pt-4">Implementation Considerations</h2>

              <p>
                Performance is a critical factor. Blur effects can be computationally expensive,
                especially on lower-end devices. Smart fallbacks and progressive enhancement
                ensure a good experience across all platforms.
              </p>

              <p>
                The future promises even more sophisticated implementations as graphics APIs
                evolve and hardware acceleration improves. We're just beginning to explore
                what's possible when interfaces become truly transparent.
              </p>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/70 hover:bg-white/20 transition-colors cursor-pointer">
                  UI Design
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/70 hover:bg-white/20 transition-colors cursor-pointer">
                  Glassmorphism
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/70 hover:bg-white/20 transition-colors cursor-pointer">
                  Trends
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/70 hover:bg-white/20 transition-colors cursor-pointer">
                  CSS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Author Card */}
        <div className="mt-8 backdrop-blur-2xl bg-white/10 rounded-2xl border border-white/20 p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src="https://picsum.photos/seed/author2/200/200"
              alt="Marcus Chen"
              className="w-20 h-20 rounded-2xl object-cover ring-2 ring-white/20"
            />
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">Marcus Chen</h3>
                  <p className="text-white/50 text-sm">Senior Design Engineer</p>
                </div>
                <button className="px-4 py-2 bg-white/10 rounded-full text-sm text-white hover:bg-white/20 transition-colors">
                  Follow
                </button>
              </div>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">
                Marcus explores the intersection of design and technology. With a background
                in both engineering and visual arts, he writes about emerging design trends
                and the future of human-computer interaction.
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-white mb-6">More Stories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="#" className="group backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="https://picsum.photos/seed/related3/600/338"
                  alt="Related"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-xs text-purple-300">Design Systems</span>
                <h3 className="mt-2 text-white font-medium group-hover:text-purple-200 transition-colors">
                  Building Scalable Design Tokens
                </h3>
                <p className="mt-2 text-sm text-white/50">5 min read</p>
              </div>
            </a>
            <a href="#" className="group backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="https://picsum.photos/seed/related4/600/338"
                  alt="Related"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-xs text-purple-300">Motion Design</span>
                <h3 className="mt-2 text-white font-medium group-hover:text-purple-200 transition-colors">
                  Micro-interactions That Delight
                </h3>
                <p className="mt-2 text-sm text-white/50">7 min read</p>
              </div>
            </a>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="relative z-10 backdrop-blur-xl bg-white/5 border-t border-white/10 mt-12">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40">2024 Crystalline. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">RSS</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
