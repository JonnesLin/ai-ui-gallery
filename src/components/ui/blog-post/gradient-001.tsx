export default function GradientBlogPost() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Spectrum
            </span>
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Articles</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Topics</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Authors</a>
            </div>
            <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-medium rounded-full hover:from-pink-600 hover:to-purple-700 transition-all">
              Subscribe
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <div className="relative py-20 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-pink-900/30 to-indigo-900/50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[128px] opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full filter blur-[128px] opacity-20" />

        <div className="relative max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-1.5 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-full text-sm text-pink-300">
              Design Trends
            </span>
            <span className="text-gray-500">12 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl">
            The Art of{' '}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Color Gradients
            </span>{' '}
            in Modern UI
          </h1>

          <p className="mt-6 text-xl text-gray-400 max-w-2xl">
            How fluid color transitions are reshaping digital experiences and creating
            more dynamic, engaging interfaces.
          </p>

          {/* Author */}
          <div className="mt-10 flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-50" />
              <img
                src="https://picsum.photos/seed/author5/80/80"
                alt="Author"
                className="relative w-14 h-14 rounded-full object-cover ring-2 ring-white/20"
              />
            </div>
            <div>
              <p className="font-semibold text-white">Luna Martinez</p>
              <p className="text-sm text-gray-500">March 25, 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-6xl mx-auto px-6 -mt-6">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-20" />
          <img
            src="https://picsum.photos/seed/gradient1/1200/600"
            alt="Featured"
            className="w-full aspect-[2/1] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
          <p className="text-xl text-white leading-relaxed">
            Gradients have transcended their role as decorative elements to become
            fundamental tools in modern interface design. They guide attention, create
            depth, and bring warmth to digital experiences that might otherwise feel flat.
          </p>

          <p>
            The resurgence of gradients marks a departure from the stark minimalism that
            dominated the past decade. Designers are rediscovering the emotional power of
            color transitions—how they can evoke feelings of energy, calm, luxury, or
            playfulness depending on their composition.
          </p>

          <h2 className="text-2xl font-bold text-white pt-8">The Psychology of Color Flow</h2>

          <p>
            Unlike solid colors, gradients create a sense of movement and dynamism. The
            human eye naturally follows color transitions, making gradients powerful tools
            for guiding user attention across interfaces.
          </p>

          <div className="my-10 p-8 rounded-2xl bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-indigo-500/10 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Color Combinations That Work</h3>
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="w-24 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600" />
                <div>
                  <p className="font-medium text-white">Pink to Purple</p>
                  <p className="text-sm text-gray-400">Energetic, creative, modern</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500" />
                <div>
                  <p className="font-medium text-white">Cyan to Blue</p>
                  <p className="text-sm text-gray-400">Professional, trustworthy, calm</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 h-12 rounded-lg bg-gradient-to-r from-orange-400 to-rose-500" />
                <div>
                  <p className="font-medium text-white">Orange to Rose</p>
                  <p className="text-sm text-gray-400">Warm, inviting, passionate</p>
                </div>
              </div>
            </div>
          </div>

          <blockquote className="my-10 py-6 px-8 border-l-4 border-transparent bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-transparent rounded-r-xl relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-purple-500" />
            <p className="text-xl text-white italic">
              "Gradients are the digital equivalent of a sunset—they create atmosphere
              and emotional resonance that solid colors simply cannot achieve."
            </p>
            <footer className="mt-4 text-sm text-gray-400">— Maria Santos, Brand Designer</footer>
          </blockquote>

          <h2 className="text-2xl font-bold text-white pt-8">Technical Implementation</h2>

          <p>
            Modern CSS makes gradient implementation straightforward, but mastering
            gradient design requires understanding color theory and perception. The
            angle, color stops, and transition smoothness all contribute to the final effect.
          </p>

          <figure className="my-10">
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://picsum.photos/seed/gradient2/800/450"
                alt="Gradient examples"
                className="w-full"
              />
            </div>
            <figcaption className="mt-4 text-sm text-gray-500 text-center">
              Subtle gradients add dimension without overwhelming the content
            </figcaption>
          </figure>

          <p>
            Performance considerations are minimal with CSS gradients, as they're
            rendered by the browser's graphics engine. However, complex gradients
            with many color stops can impact rendering on lower-end devices.
          </p>

          <h2 className="text-2xl font-bold text-white pt-8">Best Practices</h2>

          <ul className="my-6 space-y-4">
            <li className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold shrink-0">1</span>
              <span>Use complementary or analogous colors for smooth transitions</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white text-sm font-bold shrink-0">2</span>
              <span>Limit gradient complexity—two to three colors work best</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold shrink-0">3</span>
              <span>Consider context—gradients should enhance, not distract</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold shrink-0">4</span>
              <span>Test gradients across different screens for consistency</span>
            </li>
          </ul>

          <p>
            The key to successful gradient design lies in restraint. While gradients
            add visual interest, overusing them can create chaos. Strategic placement
            ensures they serve the user experience rather than detract from it.
          </p>

          <h2 className="text-2xl font-bold text-white pt-8">Looking Ahead</h2>

          <p>
            As display technology evolves with wider color gamuts and HDR support,
            the possibilities for gradient design expand. We can expect to see more
            vibrant, nuanced color transitions that take full advantage of modern screens.
          </p>

          <p>
            Gradients are no longer just a trend—they've become an essential tool in
            the modern designer's toolkit, bridging the gap between functional
            interfaces and emotional experiences.
          </p>
        </div>

        {/* Tags */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-2">
            {['UI Design', 'Gradients', 'Color Theory', 'CSS', 'Trends'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-400 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20 hover:text-white transition-all cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">Share</span>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-medium rounded-full hover:from-pink-600 hover:to-purple-700 transition-all">
            Copy Link
          </button>
        </div>
      </article>

      {/* Author Bio */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-indigo-500/10 border border-white/10">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-30" />
              <img
                src="https://picsum.photos/seed/author5/160/160"
                alt="Luna Martinez"
                className="relative w-20 h-20 rounded-2xl object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Luna Martinez</h3>
              <p className="text-sm text-gray-400 mt-1">Design Lead at Chromatic</p>
              <p className="mt-4 text-gray-400">
                Luna specializes in color theory and visual design systems. She helps
                brands develop distinctive visual identities through thoughtful use of
                color and typography.
              </p>
              <button className="mt-4 px-4 py-2 bg-white/10 text-white text-sm rounded-full hover:bg-white/20 transition-colors">
                View Profile
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="border-t border-white/5 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8">More from Spectrum</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { gradient: 'from-pink-500 to-rose-500', seed: 'related10', title: 'Creating Cohesive Color Palettes' },
              { gradient: 'from-purple-500 to-indigo-500', seed: 'related11', title: 'The Future of Digital Aesthetics' },
              { gradient: 'from-indigo-500 to-cyan-500', seed: 'related12', title: 'Designing for Emotion' },
            ].map((post, i) => (
              <a key={i} href="#" className="group">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${post.seed}/400/300`}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-40 mix-blend-overlay`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>
                <h3 className="mt-4 font-semibold text-white group-hover:text-pink-300 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">5 min read</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Spectrum
            </span>
            <p className="text-sm text-gray-500">2024 Spectrum. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Dribbble</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
