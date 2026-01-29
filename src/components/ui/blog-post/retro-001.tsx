export default function RetroBlogPost() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-red-600 shadow-lg">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <nav className="flex items-center justify-between">
            <span className="text-3xl font-bold text-amber-100" style={{ fontFamily: 'serif' }}>RetroWave</span>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-amber-100 hover:text-white transition-colors uppercase tracking-wide">Archives</a>
              <a href="#" className="text-sm text-amber-100 hover:text-white transition-colors uppercase tracking-wide">Subscribe</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-2xl border-4 border-orange-800 overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-orange-700 uppercase tracking-wide" style={{ fontFamily: 'monospace' }}>
              <span className="bg-amber-200 px-3 py-1 rounded-sm border-2 border-orange-700">Technology</span>
              <span>•</span>
              <time dateTime="2024-03-15">March 15, 2024</time>
            </div>

            {/* Title */}
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-orange-900 leading-tight" style={{ fontFamily: 'serif', textShadow: '3px 3px 0px rgba(251, 191, 36, 0.3)' }}>
              The Golden Age of Computing: A Nostalgic Journey
            </h1>

            {/* Author */}
            <div className="mt-8 flex items-center gap-4 p-4 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg border-2 border-orange-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-red-500 border-4 border-white shadow-lg shrink-0 flex items-center justify-center text-2xl font-bold text-white">
                RJ
              </div>
              <div>
                <p className="text-lg font-bold text-orange-900" style={{ fontFamily: 'serif' }}>Robert Jackson</p>
                <p className="text-sm text-orange-700">Tech Historian & Collector</p>
              </div>
            </div>

            {/* Featured Image */}
            <figure className="mt-10">
              <div className="rounded-lg overflow-hidden border-4 border-orange-800 shadow-xl aspect-[16/9] bg-gradient-to-br from-amber-200 to-orange-300">
                <img
                  src="https://picsum.photos/seed/retro1/1200/675"
                  alt="Featured"
                  className="w-full h-full object-cover"
                  style={{ filter: 'sepia(0.3) saturate(1.2)' }}
                />
              </div>
              <figcaption className="mt-4 text-sm text-orange-700 text-center italic" style={{ fontFamily: 'serif' }}>
                Photo courtesy of Vintage Tech Museum, 1985
              </figcaption>
            </figure>

            {/* Content */}
            <div className="mt-10 space-y-6 text-gray-800 leading-relaxed" style={{ fontFamily: 'serif' }}>
              <p className="text-xl md:text-2xl text-orange-900 leading-relaxed border-l-4 border-orange-600 pl-6 bg-amber-50 py-4">
                There was something magical about the personal computer revolution of the 1980s.
                The beige boxes, the green-screen monitors, the satisfying click of mechanical
                keyboards—it was an era of unbridled optimism and innovation.
              </p>

              <p className="text-lg">
                Walking into a computer store in 1984 was like entering a gateway to the future.
                The Commodore 64, the Apple II, the IBM PC—each machine promised to transform how
                we worked, learned, and played. And they did, just not in the ways we expected.
              </p>

              <h2 className="text-3xl font-bold text-orange-900 pt-8" style={{ textShadow: '2px 2px 0px rgba(251, 191, 36, 0.2)' }}>
                The Joy of Discovery
              </h2>

              <p className="text-lg">
                Every interaction with these early machines required intention. You couldn't just
                tap an icon—you had to type commands, understand file systems, sometimes even flip
                DIP switches. This wasn't a limitation; it was an invitation to understand.
              </p>

              <blockquote className="bg-gradient-to-r from-orange-100 to-amber-100 border-l-8 border-orange-600 p-6 my-8 rounded-r-lg shadow-md">
                <p className="text-2xl italic text-orange-900 leading-relaxed">
                  "We wanted to make computers for people who were afraid of them. We wanted
                  to make them friendly."
                </p>
                <footer className="mt-4 text-base text-orange-700 not-italic border-t-2 border-orange-300 pt-3">
                  — Steve Wozniak, Apple Computer Co-Founder
                </footer>
              </blockquote>

              <p className="text-lg">
                The limitations of the hardware forced creativity. With only 64KB of RAM, programmers
                had to be wizards of optimization. The result was software that did more with less,
                games that captured imagination despite primitive graphics, interfaces that worked
                within strict constraints.
              </p>

              <h2 className="text-3xl font-bold text-orange-900 pt-8" style={{ textShadow: '2px 2px 0px rgba(251, 191, 36, 0.2)' }}>
                Lessons for Modern Design
              </h2>

              <div className="space-y-4 my-8 bg-amber-50 border-4 border-orange-300 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 bg-orange-600 text-white rounded-sm flex items-center justify-center font-bold text-lg shrink-0 shadow-md">1</span>
                  <span className="pt-2 text-lg">Constraints breed creativity—limitations aren't obstacles, they're opportunities</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 bg-orange-600 text-white rounded-sm flex items-center justify-center font-bold text-lg shrink-0 shadow-md">2</span>
                  <span className="pt-2 text-lg">User interfaces should invite exploration and understanding</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 bg-orange-600 text-white rounded-sm flex items-center justify-center font-bold text-lg shrink-0 shadow-md">3</span>
                  <span className="pt-2 text-lg">Physical feedback matters—tactile experiences create lasting connections</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 bg-orange-600 text-white rounded-sm flex items-center justify-center font-bold text-lg shrink-0 shadow-md">4</span>
                  <span className="pt-2 text-lg">Optimism and playfulness should be part of the design language</span>
                </div>
              </div>

              <p className="text-lg">
                Today's technology is infinitely more powerful, but sometimes I wonder if we've lost
                something in the journey. The warmth of those amber monitors, the personality of 8-bit
                sound chips, the sense that you were participating in something historic—these qualities
                deserve to be remembered and, where appropriate, reimagined for modern contexts.
              </p>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t-4 border-orange-200">
              <div className="flex flex-wrap gap-3">
                <span className="px-5 py-2 text-sm font-bold uppercase tracking-wide text-orange-900 bg-amber-200 rounded-full border-2 border-orange-400 hover:bg-orange-400 hover:text-white transition-colors cursor-pointer shadow-sm">
                  Nostalgia
                </span>
                <span className="px-5 py-2 text-sm font-bold uppercase tracking-wide text-orange-900 bg-amber-200 rounded-full border-2 border-orange-400 hover:bg-orange-400 hover:text-white transition-colors cursor-pointer shadow-sm">
                  Computing History
                </span>
                <span className="px-5 py-2 text-sm font-bold uppercase tracking-wide text-orange-900 bg-amber-200 rounded-full border-2 border-orange-400 hover:bg-orange-400 hover:text-white transition-colors cursor-pointer shadow-sm">
                  Design Lessons
                </span>
              </div>
            </div>

            {/* Share */}
            <div className="mt-8 flex items-center gap-6 p-4 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg">
              <span className="text-sm text-orange-900 uppercase tracking-wide font-bold">Share This:</span>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 bg-orange-600 text-white rounded-sm hover:bg-orange-700 flex items-center justify-center transition-colors shadow-md">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-orange-600 text-white rounded-sm hover:bg-orange-700 flex items-center justify-center transition-colors shadow-md">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Author Bio */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-2xl border-4 border-orange-800 p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-red-500 border-4 border-white shadow-xl shrink-0 flex items-center justify-center text-5xl font-bold text-white" style={{ fontFamily: 'serif' }}>
              RJ
            </div>
            <div>
              <p className="text-xs text-orange-600 uppercase tracking-widest font-bold">About the Author</p>
              <h3 className="mt-2 text-2xl font-bold text-orange-900" style={{ fontFamily: 'serif' }}>Robert Jackson</h3>
              <p className="mt-4 text-base text-gray-700 leading-relaxed" style={{ fontFamily: 'serif' }}>
                Robert has been collecting and restoring vintage computers for over 20 years. His garage
                houses everything from Altair 8800s to Amiga 500s. He writes about computing history,
                restoration techniques, and the lessons modern designers can learn from retro interfaces.
              </p>
              <a href="#" className="inline-block mt-6 px-6 py-3 bg-orange-600 text-white font-bold uppercase tracking-wide rounded-lg hover:bg-orange-700 transition-colors shadow-lg" style={{ fontFamily: 'sans-serif' }}>
                Read All Articles →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-2xl border-4 border-orange-800 p-8">
          <h2 className="text-3xl font-bold text-orange-900 mb-8" style={{ fontFamily: 'serif', textShadow: '2px 2px 0px rgba(251, 191, 36, 0.2)' }}>Continue Reading</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <a href="#" className="group">
              <div className="rounded-lg overflow-hidden border-4 border-orange-300 shadow-lg aspect-[3/2] bg-gradient-to-br from-amber-200 to-orange-300">
                <img
                  src="https://picsum.photos/seed/retro2/600/400"
                  alt="Related post"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ filter: 'sepia(0.3) saturate(1.2)' }}
                />
              </div>
              <p className="mt-4 text-sm text-orange-700 font-mono">February 28, 1984</p>
              <h3 className="mt-2 text-lg font-bold text-orange-900 group-hover:text-orange-600 transition-colors" style={{ fontFamily: 'serif' }}>
                The Macintosh Revolution: How 128KB Changed Everything
              </h3>
            </a>
            <a href="#" className="group">
              <div className="rounded-lg overflow-hidden border-4 border-orange-300 shadow-lg aspect-[3/2] bg-gradient-to-br from-amber-200 to-orange-300">
                <img
                  src="https://picsum.photos/seed/retro3/600/400"
                  alt="Related post"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ filter: 'sepia(0.3) saturate(1.2)' }}
                />
              </div>
              <p className="mt-4 text-sm text-orange-700 font-mono">February 14, 1982</p>
              <h3 className="mt-2 text-lg font-bold text-orange-900 group-hover:text-orange-600 transition-colors" style={{ fontFamily: 'serif' }}>
                Command Line Beauty: Why CLI Design Still Matters
              </h3>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-600 to-red-600 shadow-lg mt-12">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-amber-100" style={{ fontFamily: 'monospace' }}>© 1984-2024 RetroWave Computing</p>
            <div className="flex items-center gap-8">
              <a href="#" className="text-sm text-amber-100 hover:text-white transition-colors uppercase tracking-wide">Privacy</a>
              <a href="#" className="text-sm text-amber-100 hover:text-white transition-colors uppercase tracking-wide">Terms</a>
              <a href="#" className="text-sm text-amber-100 hover:text-white transition-colors uppercase tracking-wide">RSS Feed</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
