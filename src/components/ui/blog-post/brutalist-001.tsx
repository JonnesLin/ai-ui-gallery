export default function BrutalistBlogPost() {
  return (
    <div className="min-h-screen bg-zinc-100">
      {/* Header */}
      <header className="border-8 border-black bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <span className="text-2xl font-black uppercase tracking-tight">BRUTALIST BLOG</span>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm font-bold uppercase hover:bg-black hover:text-white px-3 py-1 border-2 border-black transition-colors">Archive</a>
              <a href="#" className="text-sm font-bold uppercase hover:bg-black hover:text-white px-3 py-1 border-2 border-black transition-colors">Info</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-6xl mx-auto px-4 py-12">
        <div className="border-8 border-black bg-white p-8 md:p-12">
          {/* Meta */}
          <div className="flex items-center gap-4 text-sm font-bold uppercase">
            <span className="bg-yellow-300 px-3 py-1 border-2 border-black">Architecture</span>
            <span className="border-2 border-black px-3 py-1">2024.03.15</span>
          </div>

          {/* Title */}
          <h1 className="mt-8 text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-none tracking-tight">
            RAW CONCRETE & HONEST DESIGN
          </h1>

          {/* Author */}
          <div className="mt-8 flex items-center gap-4 border-4 border-black p-4 bg-zinc-100">
            <div className="w-16 h-16 border-4 border-black bg-red-500 shrink-0" />
            <div>
              <p className="text-lg font-bold uppercase">Marcus Weber</p>
              <p className="text-sm font-mono">CHIEF.ARCHITECT</p>
            </div>
          </div>

          {/* Featured Image */}
          <figure className="mt-12">
            <div className="border-8 border-black aspect-[16/9] overflow-hidden bg-zinc-200">
              <img
                src="https://picsum.photos/seed/brutalist1/1200/675"
                alt="Featured"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="mt-4 text-sm font-mono uppercase bg-black text-white px-3 py-2 inline-block">
              Fig.001 — Concrete Poetry
            </figcaption>
          </figure>

          {/* Content */}
          <div className="mt-12 space-y-6 text-lg leading-relaxed font-mono">
            <p className="text-xl md:text-2xl font-bold border-l-8 border-black pl-6 bg-zinc-100 py-4">
              DESIGN SHOULD NOT HIDE. IT SHOULD DECLARE ITSELF LOUDLY, UNAPOLOGETICALLY,
              WITHOUT DECORATION OR PRETENSE.
            </p>

            <p>
              Brutalism emerged from post-war architecture as a rejection of ornament. The philosophy
              was simple: expose the materials, reveal the structure, embrace the raw. What works in
              concrete works in pixels.
            </p>

            <h2 className="text-2xl font-black uppercase pt-8 border-t-4 border-black mt-8">
              FORM FOLLOWS FUNCTION
            </h2>

            <p>
              Every element serves a purpose. There are no decorative flourishes, no gradients to
              soften edges, no shadows to create depth. The interface is the interface. The structure
              is visible, obvious, honest.
            </p>

            <blockquote className="border-8 border-black bg-yellow-300 p-6 my-8 text-xl font-bold uppercase">
              "AN HONEST APPROACH TO MATERIAL AND STRUCTURE"
              <footer className="mt-4 text-sm font-mono not-italic normal-case border-t-2 border-black pt-2">
                — Le Corbusier, 1952
              </footer>
            </blockquote>

            <p>
              This is not minimalism. Minimalism seeks to reduce. Brutalism seeks to expose. The goal
              is not elegance but clarity. Not beauty but truth. The user interface becomes a blueprint,
              a schematic, a direct representation of function.
            </p>

            <h2 className="text-2xl font-black uppercase pt-8 border-t-4 border-black mt-8">
              IMPLEMENTATION PRINCIPLES
            </h2>

            <div className="space-y-3 my-6 border-4 border-black p-6 bg-white">
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold shrink-0">1</span>
                <span className="pt-1">Use system fonts and monospace for technical authenticity</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold shrink-0">2</span>
                <span className="pt-1">Heavy borders replace subtle shadows and depth cues</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold shrink-0">3</span>
                <span className="pt-1">Limited color palette—black, white, and accent primaries</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold shrink-0">4</span>
                <span className="pt-1">Grid systems should be visible and structural, not hidden</span>
              </div>
            </div>

            <p>
              The result is interfaces that feel more like engineering diagrams than polished products.
              And that's exactly the point. In a world of over-designed, over-smoothed digital experiences,
              brutalism offers something refreshingly direct.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-16 pt-8 border-t-4 border-black">
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 text-sm font-bold uppercase border-4 border-black hover:bg-black hover:text-white transition-colors cursor-pointer">
                Design Theory
              </span>
              <span className="px-4 py-2 text-sm font-bold uppercase border-4 border-black bg-yellow-300 hover:bg-black hover:text-white transition-colors cursor-pointer">
                Brutalism
              </span>
              <span className="px-4 py-2 text-sm font-bold uppercase border-4 border-black hover:bg-black hover:text-white transition-colors cursor-pointer">
                Architecture
              </span>
            </div>
          </div>

          {/* Share */}
          <div className="mt-8 flex items-center gap-6 border-4 border-black p-4 bg-zinc-100">
            <span className="text-sm font-bold uppercase">SHARE:</span>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 border-2 border-black hover:bg-black hover:text-white flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border-2 border-black hover:bg-black hover:text-white flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Author Bio */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="border-8 border-black bg-white p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-32 h-32 border-4 border-black bg-red-500 shrink-0" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wide">AUTHOR.BIO</p>
              <h3 className="mt-2 text-2xl font-black uppercase">Marcus Weber</h3>
              <p className="mt-4 text-base leading-relaxed font-mono">
                Marcus is an architect and designer who believes in the power of exposed structure.
                His work focuses on honest materiality and functional clarity. He writes about design
                philosophy, modernist architecture, and the intersection of physical and digital spaces.
              </p>
              <a href="#" className="inline-block mt-6 text-sm font-bold uppercase border-4 border-black px-6 py-2 hover:bg-black hover:text-white transition-colors">
                ALL ARTICLES →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="border-8 border-black bg-white p-8">
          <h2 className="text-2xl font-black uppercase">MORE.ARTICLES</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <a href="#" className="group">
              <div className="border-4 border-black aspect-[3/2] overflow-hidden bg-zinc-200">
                <img
                  src="https://picsum.photos/seed/brutalist2/600/400"
                  alt="Related post"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-sm font-mono">2024.02.28</p>
              <h3 className="mt-2 text-lg font-bold uppercase group-hover:bg-black group-hover:text-white transition-colors inline-block px-2">
                GRID SYSTEMS IN DIGITAL DESIGN
              </h3>
            </a>
            <a href="#" className="group">
              <div className="border-4 border-black aspect-[3/2] overflow-hidden bg-zinc-200">
                <img
                  src="https://picsum.photos/seed/brutalist3/600/400"
                  alt="Related post"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-sm font-mono">2024.02.14</p>
              <h3 className="mt-2 text-lg font-bold uppercase group-hover:bg-black group-hover:text-white transition-colors inline-block px-2">
                FUNCTION OVER FORM
              </h3>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-8 border-black bg-black text-white mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm font-mono uppercase">© 2024 BRUTALIST.BLOG</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm font-bold uppercase hover:text-yellow-300 transition-colors">PRIVACY</a>
              <a href="#" className="text-sm font-bold uppercase hover:text-yellow-300 transition-colors">TERMS</a>
              <a href="#" className="text-sm font-bold uppercase hover:text-yellow-300 transition-colors">RSS</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
