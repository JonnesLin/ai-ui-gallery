export default function SketchBlogPost() {
  return (
    <div className="min-h-screen bg-[#fefdfb]" style={{
      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,.02) 1px, rgba(0,0,0,.02) 2px)`
    }}>
      {/* Header */}
      <header className="bg-white border-b-4 border-black" style={{
        borderStyle: 'solid',
        borderImage: 'repeating-linear-gradient(90deg, black 0, black 10px, transparent 10px, transparent 15px) 4'
      }}>
        <div className="max-w-4xl mx-auto px-6 py-6">
          <nav className="flex items-center justify-between">
            <div className="relative">
              <span className="text-2xl font-bold text-black relative">
                Sketch<span className="text-blue-600">Book</span>
                <svg className="absolute -bottom-1 left-0 w-full" height="4" viewBox="0 0 100 4" preserveAspectRatio="none">
                  <path d="M 0,2 Q 25,1 50,2 T 100,2" stroke="black" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-black hover:text-blue-600 transition-colors relative group">
                <span>Stories</span>
                <svg className="absolute -bottom-1 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity" height="3" viewBox="0 0 100 3" preserveAspectRatio="none">
                  <path d="M 0,1.5 Q 25,0.5 50,1.5 T 100,1.5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </a>
              <a href="#" className="text-black hover:text-blue-600 transition-colors relative group">
                <span>Gallery</span>
                <svg className="absolute -bottom-1 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity" height="3" viewBox="0 0 100 3" preserveAspectRatio="none">
                  <path d="M 0,1.5 Q 25,0.5 50,1.5 T 100,1.5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-8">
          <span className="px-4 py-2 bg-yellow-100 border-2 border-black text-black font-bold relative transform -rotate-1">
            <span className="relative z-10">Design</span>
            <svg className="absolute inset-0" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M2,2 L98,2 L98,98 L2,98 Z" fill="none" stroke="black" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            </svg>
          </span>
          <time className="text-gray-700">March 28, 2024</time>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-8 relative">
          The Art of Hand-Drawn Design: Embracing Imperfection
          <svg className="absolute -bottom-2 left-0 w-3/4" height="8" viewBox="0 0 300 8" preserveAspectRatio="none">
            <path d="M 0,4 Q 75,2 150,4 T 300,4" stroke="blue" strokeWidth="3" fill="none" opacity="0.5" />
          </svg>
        </h1>

        {/* Author */}
        <div className="flex items-center gap-4 pb-8 mb-12 border-b-2 border-black" style={{
          borderStyle: 'dashed'
        }}>
          <div className="w-16 h-16 border-4 border-black bg-blue-100 flex items-center justify-center relative">
            <span className="text-2xl">✏️</span>
            <svg className="absolute inset-0" preserveAspectRatio="none" viewBox="0 0 100 100">
              <rect x="2" y="2" width="96" height="96" fill="none" stroke="black" strokeWidth="4" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
          <div>
            <p className="text-xl font-bold text-black">Sketch Masters</p>
            <p className="text-sm text-gray-700">Hand-Drawn Design Collective</p>
          </div>
        </div>

        {/* Featured Image */}
        <figure className="mb-16">
          <div className="aspect-[21/9] overflow-hidden bg-white border-4 border-black relative transform rotate-1">
            <img
              src="https://picsum.photos/seed/sketch1/1200/514"
              alt="Featured"
              className="w-full h-full object-cover"
            />
            {/* Hand-drawn frame effect */}
            <svg className="absolute inset-0 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M1,1 L99,1 L99,99 L1,99 Z" fill="none" stroke="black" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
              <path d="M2,2 L98,2 L98,98 L2,98 Z" fill="none" stroke="black" strokeWidth="0.3" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
          <figcaption className="mt-4 text-sm text-gray-600 italic">
            Hand-drawn elements bring warmth and humanity to digital spaces
          </figcaption>
        </figure>

        {/* Content */}
        <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
          <div className="p-6 bg-yellow-50 border-3 border-black relative">
            <p className="text-xl font-semibold text-black relative z-10">
              In a world of pixel-perfect designs, hand-drawn elements stand out by celebrating
              the beauty of imperfection. They feel human, approachable, and real.
            </p>
            <svg className="absolute inset-0" preserveAspectRatio="none" viewBox="0 0 100 100">
              <rect x="1" y="1" width="98" height="98" fill="none" stroke="black" strokeWidth="3" strokeDasharray="5,3" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>

          <p>
            Sketch-style design isn't about being messy or unprofessional. It's about adding
            personality and warmth through intentional imperfection. Those wobbly lines and
            uneven edges make interfaces feel more inviting and less intimidating.
          </p>

          <h2 className="text-3xl font-bold text-black pt-8 relative inline-block">
            Why Hand-Drawn Works
            <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" preserveAspectRatio="none">
              <path d="M 0,3 Q 50,1 100,3 T 200,3" stroke="black" strokeWidth="2" fill="none" />
            </svg>
          </h2>

          <p>
            Hand-drawn design creates emotional connection. When people see sketched elements,
            they perceive the human touch behind them. It breaks down the barrier between
            user and interface, making technology feel less cold and more personal.
          </p>

          {/* Sketch Elements Box */}
          <div className="my-12 p-8 bg-white border-4 border-black relative">
            <div className="absolute top-4 right-4 w-12 h-12 border-2 border-red-500 transform rotate-12">
              <svg className="absolute inset-0" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4" />
                <line x1="30" y1="50" x2="70" y2="50" stroke="currentColor" strokeWidth="4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-black mb-6 relative">
              Key Sketch Elements
              <svg className="absolute -top-3 -left-3 w-8 h-8" viewBox="0 0 100 100">
                <path d="M 10,10 L 90,10 L 90,90 L 10,90 Z L 10,10" fill="none" stroke="black" strokeWidth="6" />
              </svg>
            </h3>
            <div className="space-y-4">
              {[
                { title: 'Wobbly Lines', desc: 'Hand-drawn borders that aren\'t perfectly straight' },
                { title: 'Sketchy Icons', desc: 'Icons that look pencil-drawn rather than vector-perfect' },
                { title: 'Uneven Spacing', desc: 'Intentional irregularity that feels organic' },
                { title: 'Textured Fills', desc: 'Crosshatching and shading like real sketches' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 pl-4 border-l-4 border-gray-300">
                  <span className="text-3xl font-bold text-gray-300">{i + 1}</span>
                  <div>
                    <h4 className="font-bold text-black mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <svg className="absolute inset-0 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
              <rect x="2" y="2" width="96" height="96" fill="none" stroke="black" strokeWidth="4" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>

          <h2 className="text-3xl font-bold text-black pt-8 relative inline-block">
            Creating Authentic Sketch Styles
            <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 300 6" preserveAspectRatio="none">
              <path d="M 0,3 Q 75,1 150,3 T 300,3" stroke="black" strokeWidth="2" fill="none" />
            </svg>
          </h2>

          <p>
            The trick is balance. Too much sketchiness becomes chaotic; too little looks like
            a half-hearted attempt. The best sketch designs use hand-drawn elements strategically,
            applying them where they enhance rather than distract.
          </p>

          {/* Quote Box */}
          <div className="my-12 p-6 bg-blue-50 border-l-8 border-black relative">
            <div className="absolute top-0 left-0 w-16 h-16 -mt-6 -ml-6">
              <svg viewBox="0 0 100 100">
                <text x="20" y="70" fontSize="80" fill="black" opacity="0.1">"</text>
              </svg>
            </div>
            <p className="text-2xl italic text-black mb-3 relative z-10">
              "Imperfection is not the opposite of perfection—it's a different kind of
              perfection, one that embraces humanity."
            </p>
            <footer className="text-gray-700 font-semibold relative z-10">
              — Design Philosophy, 2024
            </footer>
          </div>

          {/* Sketch Examples */}
          <div className="my-12 grid grid-cols-2 gap-6">
            <div className="bg-white p-4 border-4 border-black transform -rotate-2 shadow-lg">
              <div className="aspect-square bg-pink-100 border-2 border-black flex items-center justify-center">
                <svg className="w-24 h-24" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="black" strokeWidth="3" />
                  <circle cx="35" cy="40" r="5" fill="black" />
                  <circle cx="65" cy="40" r="5" fill="black" />
                  <path d="M 30,65 Q 50,75 70,65" fill="none" stroke="black" strokeWidth="3" />
                </svg>
              </div>
              <p className="mt-3 text-center font-bold text-black">Happy Sketch!</p>
            </div>
            <div className="bg-white p-4 border-4 border-black transform rotate-2 shadow-lg">
              <div className="aspect-square bg-green-100 border-2 border-black flex items-center justify-center">
                <svg className="w-24 h-24" viewBox="0 0 100 100">
                  <rect x="20" y="30" width="60" height="40" fill="none" stroke="black" strokeWidth="3" />
                  <line x1="20" y1="50" x2="80" y2="50" stroke="black" strokeWidth="3" />
                  <line x1="50" y1="30" x2="50" y2="70" stroke="black" strokeWidth="3" />
                </svg>
              </div>
              <p className="mt-3 text-center font-bold text-black">Grid Sketch!</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-black pt-8 relative inline-block">
            When to Use Sketch Design
            <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 300 6" preserveAspectRatio="none">
              <path d="M 0,3 Q 75,1 150,3 T 300,3" stroke="black" strokeWidth="2" fill="none" />
            </svg>
          </h2>

          <p>
            Sketch style works wonderfully for creative portfolios, educational content,
            children's apps, and brands that want to appear approachable and human. It's
            less appropriate for corporate banking or medical applications where precision
            and professionalism are paramount.
          </p>

          {/* Tips List */}
          <div className="my-12 p-8 bg-yellow-50 border-4 border-black relative">
            <h3 className="text-2xl font-bold text-black mb-6">Quick Tips ✏️</h3>
            <ul className="space-y-3">
              {[
                'Start subtle—add sketch elements gradually',
                'Use SVG paths with slight irregularities',
                'Mix sketch with clean elements for balance',
                'Keep text readable—don\'t make it too wobbly',
                'Test with users—some may find it unprofessional',
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-6 h-6 border-2 border-black bg-white flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </span>
                  <span className="flex-1">{tip}</span>
                </li>
              ))}
            </ul>
            <svg className="absolute inset-0 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
              <rect x="2" y="2" width="96" height="96" fill="none" stroke="black" strokeWidth="4" strokeDasharray="10,5" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>

          <p className="text-xl font-semibold text-black">
            Hand-drawn design reminds us that behind every interface is a human creator.
            It's design with a heartbeat.
          </p>
        </div>

        {/* Tags */}
        <div className="mt-16 pt-8 border-t-4 border-black" style={{ borderStyle: 'dashed' }}>
          <div className="flex flex-wrap gap-3">
            {['Sketch Design', 'Hand-Drawn', 'UI Trends', 'Creative'].map((tag, i) => (
              <span key={tag} className={`px-5 py-2 bg-white border-3 border-black font-bold transform ${i % 2 ? 'rotate-2' : '-rotate-1'} hover:rotate-0 transition-transform cursor-pointer shadow-md`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Author Bio */}
      <section className="bg-blue-50 border-y-8 border-black" style={{
        borderStyle: 'double'
      }}>
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-white p-8 border-4 border-black transform -rotate-1 shadow-xl">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-32 h-32 border-4 border-black bg-yellow-100 flex items-center justify-center shrink-0 transform rotate-3">
                <span className="text-6xl">✏️</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-2 relative inline-block">
                  Sketch Masters
                  <svg className="absolute -bottom-1 left-0 w-full" height="4" viewBox="0 0 200 4" preserveAspectRatio="none">
                    <path d="M 0,2 Q 50,1 100,2 T 200,2" stroke="black" strokeWidth="2" fill="none" />
                  </svg>
                </h3>
                <p className="text-gray-600 mb-4">Hand-Drawn Design Collective</p>
                <p className="text-gray-800 leading-relaxed mb-6">
                  We're a group of designers who believe in the power of imperfection. Our mission
                  is to bring warmth, humanity, and authenticity to digital design through hand-drawn
                  elements and sketch-style aesthetics.
                </p>
                <button className="px-6 py-3 bg-black text-white font-bold border-4 border-black hover:bg-white hover:text-black transition-colors">
                  JOIN US →
                </button>
              </div>
            </div>
            <svg className="absolute inset-0 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
              <rect x="2" y="2" width="96" height="96" fill="none" stroke="black" strokeWidth="4" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-black mb-8 relative inline-block">
          More Sketches
          <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" preserveAspectRatio="none">
            <path d="M 0,3 Q 50,1 100,3 T 200,3" stroke="black" strokeWidth="3" fill="none" />
          </svg>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { seed: 'sketch2', title: 'Drawing Digital Icons', rotate: '-rotate-2' },
            { seed: 'sketch3', title: 'Sketch UI Patterns', rotate: 'rotate-1' },
            { seed: 'sketch4', title: 'Hand-Drawn Typography', rotate: '-rotate-1' },
          ].map((post) => (
            <a key={post.seed} href="#" className="group">
              <div className={`bg-white border-4 border-black shadow-lg hover:shadow-2xl transform ${post.rotate} hover:rotate-0 transition-all`}>
                <div className="aspect-[4/3] overflow-hidden border-b-4 border-black">
                  <img
                    src={`https://picsum.photos/seed/${post.seed}/400/300`}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-black group-hover:underline">
                    {post.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white border-t-8 border-white" style={{
        borderStyle: 'double'
      }}>
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-2xl font-bold">Sketch<span className="text-blue-400">Book</span></span>
            <div className="flex items-center gap-8">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Draw</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t-2 border-white" style={{ borderStyle: 'dashed' }}>
            <p className="text-center text-sm">© 2024 SketchBook. Hand-drawn with love.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
