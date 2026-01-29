export default function MonochromeBlogPost() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b-2 border-black">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <nav className="flex items-center justify-between">
            <span className="text-2xl font-bold text-black tracking-tight">MONO</span>
            <div className="flex items-center gap-8">
              <a href="#" className="text-sm text-black hover:underline">Archive</a>
              <a href="#" className="text-sm text-black hover:underline">About</a>
              <button className="px-5 py-2 bg-black text-white text-sm font-bold hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Meta */}
        <div className="flex items-center gap-4 mb-8">
          <span className="px-4 py-1 bg-black text-white text-xs font-bold tracking-wider uppercase">
            Photography
          </span>
          <time className="text-sm text-gray-600">March 28, 2024</time>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] mb-12">
          The Power of Monochrome: Seeing Beyond Color
        </h1>

        {/* Author */}
        <div className="flex items-center gap-4 pb-12 mb-12 border-b-2 border-black">
          <div className="w-16 h-16 bg-black flex items-center justify-center">
            <span className="text-white text-2xl font-bold">A</span>
          </div>
          <div>
            <p className="font-bold text-black text-lg">Ansel Chen</p>
            <p className="text-sm text-gray-600">Visual Artist</p>
          </div>
        </div>

        {/* Featured Image */}
        <figure className="mb-16">
          <div className="aspect-[3/2] overflow-hidden border-4 border-black">
            <img
              src="https://picsum.photos/seed/mono1/1200/800"
              alt="Featured"
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <figcaption className="mt-4 text-sm text-gray-600">
            Stripping away color reveals the essence of form and emotion
          </figcaption>
        </figure>

        {/* Content */}
        <div className="space-y-8 text-gray-900 text-lg leading-relaxed">
          <p className="text-2xl font-bold text-black">
            When we remove color from our visual vocabulary, something remarkable happens:
            we're forced to see the world through shape, texture, and contrast.
          </p>

          <p>
            Monochrome photography and design isn't about limitation—it's about focus.
            By restricting our palette to shades of gray, we eliminate distraction and
            amplify the fundamental elements that make an image powerful.
          </p>

          <h2 className="text-3xl font-bold text-black pt-8 border-t-2 border-gray-300 mt-8">
            Form Becomes Content
          </h2>

          <p>
            Without the seduction of color, form takes center stage. Lines become more
            dynamic. Shapes command attention. The relationship between light and shadow
            creates drama that color can sometimes obscure.
          </p>

          {/* Pull Quote */}
          <div className="my-12 py-8 border-y-4 border-black">
            <p className="text-3xl font-bold text-black leading-tight">
              "Black and white are the colors of photography. To me they symbolize
              the alternatives of hope and despair to which mankind is forever subjected."
            </p>
            <footer className="mt-4 text-lg text-gray-600">— Robert Frank</footer>
          </div>

          <h2 className="text-3xl font-bold text-black pt-8 border-t-2 border-gray-300 mt-8">
            The Emotional Spectrum
          </h2>

          <p>
            Monochrome images carry a unique emotional weight. They feel timeless,
            sometimes nostalgic, often more serious or contemplative than their colorful
            counterparts. This isn't accidental—it's the result of our cultural associations
            with black and white media.
          </p>

          {/* Contrast Examples */}
          <div className="my-12 space-y-6">
            <h3 className="text-xl font-bold text-black">The Language of Contrast</h3>
            <div className="space-y-4">
              <div className="p-6 bg-gray-100 border-l-8 border-black">
                <h4 className="font-bold text-black mb-2">High Contrast</h4>
                <p className="text-gray-700">
                  Pure blacks against bright whites create drama, urgency, and bold statements.
                  Think film noir, street photography, bold typography.
                </p>
              </div>
              <div className="p-6 bg-gray-100 border-l-8 border-gray-400">
                <h4 className="font-bold text-black mb-2">Medium Contrast</h4>
                <p className="text-gray-700">
                  Balanced grays with defined blacks and whites offer harmony and readability.
                  This is where most documentary photography lives.
                </p>
              </div>
              <div className="p-6 bg-gray-100 border-l-8 border-gray-300">
                <h4 className="font-bold text-black mb-2">Low Contrast</h4>
                <p className="text-gray-700">
                  Subtle gradations of gray create mood, mystery, and softness. Perfect for
                  portraits and atmospheric scenes.
                </p>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="my-12 grid grid-cols-2 gap-4">
            <div className="aspect-square overflow-hidden border-4 border-black">
              <img
                src="https://picsum.photos/seed/mono2/600/600"
                alt="Texture example"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="aspect-square overflow-hidden border-4 border-black">
              <img
                src="https://picsum.photos/seed/mono3/600/600"
                alt="Form example"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-black pt-8 border-t-2 border-gray-300 mt-8">
            Design Applications
          </h2>

          <p>
            In digital design, monochrome approaches offer clarity and sophistication.
            Navigation becomes intuitive when color isn't a crutch. Typography gains
            importance. White space breathes with purpose.
          </p>

          {/* Principles List */}
          <div className="my-12 p-8 bg-black text-white">
            <h3 className="text-2xl font-bold mb-6">Core Principles</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-3xl font-bold">1</span>
                <div>
                  <p className="font-bold mb-1">Embrace Texture</p>
                  <p className="text-gray-300">Without color, texture becomes a primary visual interest</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl font-bold">2</span>
                <div>
                  <p className="font-bold mb-1">Master Contrast</p>
                  <p className="text-gray-300">The relationship between light and dark tells your story</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl font-bold">3</span>
                <div>
                  <p className="font-bold mb-1">Simplify Composition</p>
                  <p className="text-gray-300">Remove distractions—monochrome reveals what matters</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl font-bold">4</span>
                <div>
                  <p className="font-bold mb-1">Focus on Form</p>
                  <p className="text-gray-300">Shapes, lines, and patterns carry the visual weight</p>
                </div>
              </li>
            </ul>
          </div>

          <p>
            Working in monochrome is a discipline that sharpens your eye for composition,
            lighting, and the fundamental elements that make visuals compelling. It's not
            about what's missing—it's about what remains.
          </p>

          <p className="text-2xl font-bold text-black">
            In the absence of color, we discover clarity.
          </p>
        </div>

        {/* Tags */}
        <div className="mt-16 pt-8 border-t-2 border-gray-300">
          <div className="flex flex-wrap gap-3">
            {['Monochrome', 'Photography', 'Design', 'Black & White'].map((tag) => (
              <span key={tag} className="px-4 py-2 border-2 border-black text-black font-bold hover:bg-black hover:text-white transition-colors cursor-pointer">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share */}
        <div className="mt-8 flex items-center gap-4">
          <span className="text-sm font-bold text-black">SHARE:</span>
          <div className="flex gap-3">
            {['TW', 'FB', 'LI'].map((social) => (
              <button key={social} className="w-10 h-10 bg-black text-white font-bold hover:bg-gray-800 transition-colors flex items-center justify-center text-xs">
                {social}
              </button>
            ))}
          </div>
        </div>
      </article>

      {/* Author Bio */}
      <section className="bg-gray-100 border-y-2 border-black">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-32 h-32 bg-black flex items-center justify-center shrink-0">
              <span className="text-white text-5xl font-bold">A</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black mb-2">Ansel Chen</h3>
              <p className="text-gray-600 mb-4">Visual Artist & Photography Educator</p>
              <p className="text-gray-900 leading-relaxed mb-6">
                Ansel has been working exclusively in black and white for 15 years. His work
                focuses on urban architecture and portraiture, exploring how form and light
                create emotional narratives. He teaches workshops on monochrome composition
                and darkroom techniques.
              </p>
              <button className="px-6 py-3 bg-black text-white font-bold hover:bg-gray-800 transition-colors">
                VIEW PORTFOLIO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-black mb-8 border-b-2 border-black pb-4">
          Continue Reading
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { seed: 'mono4', title: 'Mastering Contrast in Digital Photography', date: 'March 20' },
            { seed: 'mono5', title: 'The History of Black and White Film', date: 'March 15' },
          ].map((post) => (
            <a key={post.seed} href="#" className="group">
              <div className="border-4 border-black overflow-hidden hover:border-gray-400 transition-colors">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${post.seed}/600/450`}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 bg-white">
                  <p className="text-sm text-gray-600 mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold text-black group-hover:underline">
                    {post.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-black bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-2xl font-bold text-black tracking-tight">MONO</span>
              <p className="text-sm text-gray-600 mt-2">Clarity through simplicity</p>
            </div>
            <div className="flex items-center gap-8">
              <a href="#" className="text-sm text-black hover:underline">Privacy</a>
              <a href="#" className="text-sm text-black hover:underline">Terms</a>
              <a href="#" className="text-sm text-black hover:underline">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-300 text-center">
            <p className="text-sm text-gray-600">© 2024 Mono Journal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
