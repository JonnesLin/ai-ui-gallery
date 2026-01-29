export default function LuxuryBlogPost() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-gray-100">
      {/* Header */}
      <header className="border-b border-amber-900/30 bg-black">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-amber-500 flex items-center justify-center">
                <span className="text-amber-500 text-xs font-serif">L</span>
              </div>
              <span className="text-xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400">
                LUXE JOURNAL
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm text-amber-400/60 hover:text-amber-400 transition-colors tracking-widest uppercase">
                Lifestyle
              </a>
              <a href="#" className="text-sm text-amber-400/60 hover:text-amber-400 transition-colors tracking-widest uppercase">
                Editorial
              </a>
              <a href="#" className="text-sm text-amber-400/60 hover:text-amber-400 transition-colors tracking-widest uppercase">
                About
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Category */}
        <div className="flex items-center gap-4 mb-8">
          <span className="px-4 py-1 border border-amber-500/50 text-amber-400 text-xs tracking-[0.3em] uppercase font-light">
            Design
          </span>
          <span className="w-1 h-1 bg-amber-500/30 rounded-full" />
          <time className="text-sm text-amber-400/40 tracking-widest">March 28, 2024</time>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-amber-300 via-amber-200 to-amber-400 leading-[1.2] mb-12">
          The Art of Timeless Elegance in Digital Design
        </h1>

        {/* Author */}
        <div className="flex items-center gap-5 pb-12 mb-12 border-b border-amber-900/20">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-500/30">
            <img
              src="https://picsum.photos/seed/authorlux/100/100"
              alt="Author"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-serif text-lg text-amber-200">Isabella Marchesi</p>
            <p className="text-sm text-amber-400/40 tracking-widest uppercase mt-1">Editor-in-Chief</p>
          </div>
        </div>

        {/* Featured Image */}
        <figure className="mb-16">
          <div className="aspect-[21/9] overflow-hidden border border-amber-900/30 relative">
            <img
              src="https://picsum.photos/seed/luxury1/1200/514"
              alt="Featured"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
          <figcaption className="mt-4 text-xs text-amber-400/40 text-center tracking-widest">
            Photography by Maison Élégance
          </figcaption>
        </figure>

        {/* Content */}
        <div className="space-y-8 text-gray-300 leading-relaxed font-light">
          <p className="text-2xl md:text-3xl font-serif text-amber-200/90 leading-relaxed">
            True luxury lies not in excess, but in the refined subtlety of purposeful design.
            Each element, carefully considered, speaks volumes through restraint.
          </p>

          <p className="text-lg">
            The language of luxury has evolved beyond ostentation. Modern elegance whispers
            rather than shouts, revealing itself through impeccable attention to detail,
            carefully curated materials, and an unwavering commitment to timeless beauty.
          </p>

          <h2 className="text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 pt-8">
            The Language of Refinement
          </h2>

          <p className="text-lg">
            In luxury design, every decision carries weight. The selection of typefaces becomes
            an art form, where serif fonts evoke tradition and craftsmanship. Color palettes
            draw from precious materials—the warm glow of burnished gold, the deep richness
            of midnight velvet.
          </p>

          {/* Ornamental Divider */}
          <div className="flex items-center justify-center py-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-500/50" />
              <div className="w-2 h-2 rotate-45 border border-amber-500/50" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500/50" />
            </div>
          </div>

          {/* Pull Quote */}
          <div className="my-12 relative">
            <div className="absolute -left-4 top-0 text-6xl text-amber-500/20 font-serif leading-none">"</div>
            <div className="pl-8 pr-4 py-8 border-l border-r border-amber-900/30">
              <p className="text-2xl md:text-3xl font-serif text-amber-200/90 italic leading-relaxed">
                Luxury design is the art of saying more with less, where every detail is
                considered and nothing is without purpose.
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="h-px w-12 bg-amber-500/30" />
                <p className="text-sm text-amber-400/60 tracking-widest uppercase">
                  Yves Saint Laurent
                </p>
              </footer>
            </div>
          </div>

          <h2 className="text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 pt-8">
            Material Honesty
          </h2>

          <p className="text-lg">
            The finest luxury experiences don't pretend to be something they're not. Digital
            interfaces can embrace their medium while still conveying sophistication through
            thoughtful spacing, elegant proportions, and refined interactions.
          </p>

          {/* Principles Grid */}
          <div className="my-12 grid md:grid-cols-2 gap-px bg-amber-900/20 border border-amber-900/20">
            {[
              { num: 'I', title: 'Proportion', desc: 'Golden ratios create natural harmony' },
              { num: 'II', title: 'Typography', desc: 'Serif fonts convey heritage and craft' },
              { num: 'III', title: 'Palette', desc: 'Rich, deep colors inspire confidence' },
              { num: 'IV', title: 'Space', desc: 'Generous margins denote quality' },
            ].map((item) => (
              <div key={item.num} className="bg-black p-8">
                <span className="text-3xl font-serif text-amber-500/30 block mb-3">{item.num}</span>
                <h3 className="text-xl font-serif text-amber-200 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Image */}
          <figure className="my-12">
            <div className="border border-amber-900/30 overflow-hidden">
              <img
                src="https://picsum.photos/seed/luxury2/900/600"
                alt="Luxury design detail"
                className="w-full"
              />
            </div>
            <figcaption className="mt-4 text-sm text-amber-400/40 text-center tracking-widest">
              Details reveal the quality of craftsmanship
            </figcaption>
          </figure>

          <h2 className="text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 pt-8">
            Enduring Excellence
          </h2>

          <p className="text-lg">
            Trends come and go, but true luxury design transcends temporal boundaries. It draws
            from classical principles while remaining relevant to contemporary sensibilities.
            This balance between heritage and modernity defines enduring excellence.
          </p>

          <p className="text-lg">
            The digital realm offers unique opportunities to enhance luxury experiences. Subtle
            animations can mimic the weight and feel of precious materials. Careful pacing
            creates moments of anticipation and delight. Every interaction becomes a moment
            of refined pleasure.
          </p>

          {/* Closing Statement */}
          <div className="mt-12 pt-12 border-t border-amber-900/20">
            <p className="text-xl font-serif text-amber-200/80 italic text-center">
              In the end, luxury is not about what we add, but what we perfect.
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-16 pt-8 border-t border-amber-900/20">
          <div className="flex flex-wrap gap-3">
            {['Luxury Design', 'Elegance', 'Timeless', 'Craftsmanship'].map((tag) => (
              <span key={tag} className="px-4 py-2 border border-amber-900/30 text-xs text-amber-400/60 hover:border-amber-500/50 hover:text-amber-400 transition-all tracking-widest uppercase cursor-pointer">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <span className="text-xs text-amber-400/40 tracking-widest uppercase">Share</span>
          <div className="flex gap-4">
            {[...Array(3)].map((_, i) => (
              <button key={i} className="w-10 h-10 border border-amber-900/30 flex items-center justify-center text-amber-400/40 hover:border-amber-500/50 hover:text-amber-400 transition-all">
                <span className="text-lg">•</span>
              </button>
            ))}
          </div>
        </div>
      </article>

      {/* Author Bio */}
      <section className="border-t border-amber-900/20 bg-black/50">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-amber-500/30 shrink-0">
              <img
                src="https://picsum.photos/seed/authorlux/200/200"
                alt="Isabella Marchesi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-xs text-amber-400/40 tracking-[0.3em] uppercase mb-2">About the Author</p>
              <h3 className="text-2xl font-serif text-amber-200 mb-4">Isabella Marchesi</h3>
              <p className="text-gray-400 leading-relaxed font-light max-w-2xl">
                Isabella has spent two decades at the intersection of luxury fashion and digital
                design. Her work has appeared in Vogue, Architectural Digest, and The New York Times.
                She believes that true elegance transcends medium, bringing timeless sophistication
                to every project she touches.
              </p>
              <a href="#" className="inline-block mt-6 px-6 py-3 border border-amber-500/50 text-amber-400 text-xs tracking-widest uppercase hover:bg-amber-500/10 transition-all">
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="border-t border-amber-900/20">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-serif text-amber-200 mb-8 text-center">Further Reading</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { seed: 'lux1', title: 'The Golden Ratio in Design', date: 'March 20' },
              { seed: 'lux2', title: 'Typography as Art', date: 'March 15' },
              { seed: 'lux3', title: 'Color Theory of Opulence', date: 'March 10' },
            ].map((post) => (
              <a key={post.seed} href="#" className="group">
                <div className="border border-amber-900/30 overflow-hidden hover:border-amber-500/50 transition-colors">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={`https://picsum.photos/seed/${post.seed}/400/500`}
                      alt={post.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="p-6 bg-black">
                    <p className="text-xs text-amber-400/40 tracking-widest mb-2">{post.date}</p>
                    <h3 className="font-serif text-amber-200 group-hover:text-amber-300 transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-900/20 bg-black">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-amber-500 flex items-center justify-center">
                <span className="text-amber-500 text-xs font-serif">L</span>
              </div>
              <span className="text-sm font-serif text-amber-400/60 tracking-widest">LUXE JOURNAL</span>
            </div>
            <div className="flex items-center gap-8">
              <a href="#" className="text-xs text-amber-400/40 hover:text-amber-400 transition-colors tracking-widest uppercase">Privacy</a>
              <a href="#" className="text-xs text-amber-400/40 hover:text-amber-400 transition-colors tracking-widest uppercase">Terms</a>
              <a href="#" className="text-xs text-amber-400/40 hover:text-amber-400 transition-colors tracking-widest uppercase">Contact</a>
            </div>
            <p className="text-xs text-amber-400/30 tracking-widest">© 2024 All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
