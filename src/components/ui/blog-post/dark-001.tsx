export default function DarkBlogPost() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <span className="text-xl font-bold text-white">Dark<span className="text-purple-500">Mode</span></span>
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Categories</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">About</a>
            </div>
            <button className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="aspect-[21/9]">
            <img
              src="https://picsum.photos/seed/dark1/1200/514"
              alt="Featured"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
          </div>

          {/* Overlay Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-400 font-medium">
                Development
              </span>
              <span className="text-gray-500 text-sm">10 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
              Embracing the Dark Side: Why Dark Mode Is Here to Stay
            </h1>
          </div>
        </div>

        {/* Author & Meta */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-white/10">
          <div className="flex items-center gap-4">
            <img
              src="https://picsum.photos/seed/author4/80/80"
              alt="Author"
              className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-500/50"
            />
            <div>
              <p className="font-medium text-white">Alex Rivera</p>
              <p className="text-sm text-gray-500">Posted on March 22, 2024</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
            <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="mt-12 grid lg:grid-cols-[1fr_280px] gap-12">
          {/* Main Content */}
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-xl text-gray-200 leading-relaxed">
              Dark mode has evolved from a niche feature for developers to a mainstream design
              expectation. But what drives this shift, and why does dark mode feel so natural
              in our increasingly digital lives?
            </p>

            <p>
              The human eye has evolved to function in varying light conditions. Our pupils
              dilate in darkness and contract in brightness. Modern screens, however, often
              subject us to bright light in otherwise dark environments—a scenario our eyes
              never evolved to handle.
            </p>

            <h2 className="text-2xl font-bold text-white pt-6">The Science of Light</h2>

            <p>
              Research suggests that bright screens in dark environments can cause eye strain,
              disrupt circadian rhythms, and even contribute to long-term vision problems.
              Dark mode addresses these concerns by reducing the overall light emission from
              screens while maintaining readability.
            </p>

            <div className="my-8 p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="font-semibold text-white mb-4">Key Benefits</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm">Reduced eye strain in low-light conditions</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm">Battery savings on OLED displays</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm">Improved focus on content</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm">Modern, professional aesthetic</span>
                </div>
              </div>
            </div>

            <blockquote className="my-8 pl-6 border-l-2 border-purple-500">
              <p className="text-lg text-gray-200 italic">
                "Dark mode isn't just about aesthetics—it's about creating digital
                experiences that work in harmony with human physiology."
              </p>
              <footer className="mt-3 text-sm text-gray-500">— Dr. Sarah Chen, Vision Researcher</footer>
            </blockquote>

            <h2 className="text-2xl font-bold text-white pt-6">Design Considerations</h2>

            <p>
              Implementing dark mode requires more than inverting colors. Successful dark
              interfaces consider contrast ratios, color psychology, and the relationship
              between foreground and background elements.
            </p>

            <figure className="my-8">
              <div className="rounded-xl overflow-hidden border border-white/10">
                <img
                  src="https://picsum.photos/seed/dark2/800/400"
                  alt="Dark mode design"
                  className="w-full"
                />
              </div>
              <figcaption className="mt-3 text-sm text-gray-500 text-center">
                Careful color selection ensures readability without causing eye strain
              </figcaption>
            </figure>

            <p>
              Pure black backgrounds (#000000) can actually cause issues on OLED screens,
              where the stark contrast between black and white creates a "smearing" effect
              when scrolling. This is why most dark mode implementations use dark grays
              instead.
            </p>

            <h2 className="text-2xl font-bold text-white pt-6">The Future of Dark</h2>

            <p>
              As we spend more time in digital environments, the importance of thoughtful
              interface design only grows. Dark mode represents a broader shift toward
              user-centric design that prioritizes comfort and accessibility.
            </p>

            <p>
              The trend shows no signs of slowing. Major platforms continue to refine their
              dark mode implementations, and new tools make it easier than ever for
              developers to support both light and dark themes seamlessly.
            </p>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 h-fit space-y-6">
            {/* Table of Contents */}
            <div className="p-5 bg-white/5 rounded-xl border border-white/10">
              <h3 className="font-semibold text-white mb-4">Table of Contents</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                    The Science of Light
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Design Considerations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    The Future of Dark
                  </a>
                </li>
              </ul>
            </div>

            {/* Tags */}
            <div className="p-5 bg-white/5 rounded-xl border border-white/10">
              <h3 className="font-semibold text-white mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400 hover:text-white hover:border-white/30 transition-all cursor-pointer">
                  UI Design
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400 hover:text-white hover:border-white/30 transition-all cursor-pointer">
                  Dark Mode
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400 hover:text-white hover:border-white/30 transition-all cursor-pointer">
                  Accessibility
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400 hover:text-white hover:border-white/30 transition-all cursor-pointer">
                  UX
                </span>
              </div>
            </div>

            {/* Share */}
            <div className="p-5 bg-white/5 rounded-xl border border-white/10">
              <h3 className="font-semibold text-white mb-4">Share</h3>
              <div className="flex items-center gap-3">
                <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Author Bio */}
        <div className="mt-16 p-8 bg-white/5 rounded-xl border border-white/10">
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src="https://picsum.photos/seed/author4/160/160"
              alt="Alex Rivera"
              className="w-20 h-20 rounded-xl object-cover"
            />
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="text-lg font-bold text-white">Alex Rivera</h3>
                  <p className="text-sm text-gray-500">Senior Frontend Developer</p>
                </div>
                <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-sm font-medium rounded-lg transition-colors">
                  Follow
                </button>
              </div>
              <p className="mt-4 text-gray-400">
                Alex is a frontend developer with a passion for building accessible,
                user-friendly interfaces. He writes about web development, design systems,
                and the intersection of technology and human experience.
              </p>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { seed: 'related7', title: 'Building Accessible Color Systems', date: 'Mar 18, 2024' },
              { seed: 'related8', title: 'The Psychology of Interface Colors', date: 'Mar 12, 2024' },
              { seed: 'related9', title: 'Implementing Theme Switching in React', date: 'Mar 5, 2024' },
            ].map((post, i) => (
              <a key={i} href="#" className="group">
                <div className="aspect-[16/9] rounded-xl overflow-hidden border border-white/10">
                  <img
                    src={`https://picsum.photos/seed/${post.seed}/400/225`}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 font-semibold text-white group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{post.date}</p>
              </a>
            ))}
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-white/5 mt-16">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">2024 DarkMode. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">RSS</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
