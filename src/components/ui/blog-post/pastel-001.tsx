export default function PastelBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/70 backdrop-blur-md border-b border-purple-100">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <nav className="flex items-center justify-between">
            <span className="text-2xl font-semibold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Dreamscape
            </span>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-purple-600 hover:text-purple-800 transition-colors">Stories</a>
              <a href="#" className="text-sm text-purple-600 hover:text-purple-800 transition-colors">About</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg shadow-purple-100/50">
          {/* Meta */}
          <div className="flex items-center gap-3 text-sm text-purple-500">
            <span className="bg-pink-100 text-pink-600 px-4 py-1 rounded-full">Creativity</span>
            <span className="w-1.5 h-1.5 bg-purple-300 rounded-full" />
            <time dateTime="2024-03-15">March 15, 2024</time>
          </div>

          {/* Title */}
          <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent leading-tight">
            Painting with Light: The Gentle Art of Color Theory
          </h1>

          {/* Author */}
          <div className="mt-8 flex items-center gap-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 shrink-0" />
            <div>
              <p className="text-base font-semibold text-purple-900">Luna Hartwell</p>
              <p className="text-sm text-purple-600">Color Specialist & Artist</p>
            </div>
          </div>

          {/* Featured Image */}
          <figure className="mt-10">
            <div className="rounded-2xl overflow-hidden shadow-xl shadow-purple-200/50 aspect-[16/9]">
              <img
                src="https://picsum.photos/seed/pastel1/1200/675"
                alt="Featured"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm text-purple-500 text-center italic">
              Soft hues creating harmony and peace
            </figcaption>
          </figure>

          {/* Content */}
          <div className="mt-10 space-y-5 text-gray-700 leading-relaxed">
            <p className="text-lg md:text-xl text-purple-800 leading-relaxed bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6">
              Color is more than visual information—it's emotion, memory, and atmosphere rendered
              in light. Soft pastels whisper where bold primaries shout, creating spaces that feel
              like gentle embraces.
            </p>

            <p>
              There's a tenderness to pastel palettes that invites contemplation. These aren't the
              aggressive hues of warning signs or the corporate blues of efficiency. They're the
              colors of dawn, of cherry blossoms, of sea glass smoothed by time and tide.
            </p>

            <h2 className="text-2xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent pt-6">
              The Psychology of Softness
            </h2>

            <p>
              When we surround ourselves with gentle colors, we create psychological breathing room.
              Pastel tones lower visual temperature, reduce eye strain, and promote a sense of calm.
              They're particularly powerful in digital interfaces where harsh contrasts can fatigue.
            </p>

            <blockquote className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-2xl p-6 my-8 border-l-4 border-purple-300">
              <p className="text-xl italic text-purple-700 leading-relaxed">
                "Softness is not weakness. It's the courage to be gentle in a harsh world."
              </p>
              <footer className="mt-3 text-sm text-purple-600 not-italic">
                — Marie Claire, Color Theorist
              </footer>
            </blockquote>

            <p>
              In practical application, pastels work through desaturation—taking full-intensity hues
              and mixing them with white or light gray. This creates tints that retain color character
              while reducing visual aggression. The result is sophisticated without being austere.
            </p>

            <h2 className="text-2xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent pt-6">
              Creating Pastel Palettes
            </h2>

            <div className="space-y-4 my-8 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-300 to-pink-400 shrink-0 flex items-center justify-center text-white text-sm font-semibold">
                  1
                </div>
                <p className="pt-1">Start with a base hue that communicates your primary emotion or brand value</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-300 to-purple-400 shrink-0 flex items-center justify-center text-white text-sm font-semibold">
                  2
                </div>
                <p className="pt-1">Desaturate by 40-60% and increase lightness to 75-85%</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-300 to-blue-400 shrink-0 flex items-center justify-center text-white text-sm font-semibold">
                  3
                </div>
                <p className="pt-1">Build complementary tints using analogous or triadic color schemes</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-200 to-purple-300 shrink-0 flex items-center justify-center text-white text-sm font-semibold">
                  4
                </div>
                <p className="pt-1">Test combinations at different scales and contexts for harmony</p>
              </div>
            </div>

            <p>
              The beauty of pastel design is its versatility. It works for children's brands without
              being childish, for wellness products without being clinical, for creative portfolios
              without overwhelming the content. It's a design language that says "we care about your
              comfort" without saying anything at all.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-purple-100">
            <div className="flex flex-wrap gap-3">
              <span className="px-5 py-2 text-sm text-pink-600 bg-pink-100 rounded-full hover:bg-pink-200 transition-colors cursor-pointer">
                Color Theory
              </span>
              <span className="px-5 py-2 text-sm text-purple-600 bg-purple-100 rounded-full hover:bg-purple-200 transition-colors cursor-pointer">
                Design
              </span>
              <span className="px-5 py-2 text-sm text-blue-600 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors cursor-pointer">
                Psychology
              </span>
            </div>
          </div>

          {/* Share */}
          <div className="mt-8 flex items-center gap-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-4">
            <span className="text-sm text-purple-600 font-medium">Share</span>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-200 to-pink-300 text-pink-700 hover:from-pink-300 hover:to-pink-400 flex items-center justify-center transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-200 to-purple-300 text-purple-700 hover:from-purple-300 hover:to-purple-400 flex items-center justify-center transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Author Bio */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg shadow-purple-100/50">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 shrink-0" />
            <div>
              <p className="text-xs text-purple-500 uppercase tracking-wide font-medium">About the Author</p>
              <h3 className="mt-2 text-2xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Luna Hartwell
              </h3>
              <p className="mt-4 text-base text-gray-700 leading-relaxed">
                Luna is a color specialist and visual artist who explores the emotional resonance of
                soft palettes. Her work spans digital design, fine art, and environmental psychology.
                She believes that gentle colors can create profound impact.
              </p>
              <a href="#" className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-pink-200 to-purple-200 text-purple-700 rounded-full font-medium hover:from-pink-300 hover:to-purple-300 transition-all">
                View All Articles
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg shadow-purple-100/50">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-8">
            More to Explore
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="#" className="group">
              <div className="rounded-2xl overflow-hidden shadow-lg shadow-purple-100/50 aspect-[3/2]">
                <img
                  src="https://picsum.photos/seed/pastel2/600/400"
                  alt="Related post"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <p className="mt-4 text-sm text-purple-500">February 28, 2024</p>
              <h3 className="mt-2 text-lg font-semibold text-purple-800 group-hover:text-purple-600 transition-colors">
                Harmony in Hues: Building Cohesive Color Systems
              </h3>
            </a>
            <a href="#" className="group">
              <div className="rounded-2xl overflow-hidden shadow-lg shadow-purple-100/50 aspect-[3/2]">
                <img
                  src="https://picsum.photos/seed/pastel3/600/400"
                  alt="Related post"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <p className="mt-4 text-sm text-purple-500">February 14, 2024</p>
              <h3 className="mt-2 text-lg font-semibold text-purple-800 group-hover:text-purple-600 transition-colors">
                The Quiet Power of Muted Tones
              </h3>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/70 backdrop-blur-md border-t border-purple-100 mt-12">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-purple-600">© 2024 Dreamscape. Made with love.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-purple-600 hover:text-purple-800 transition-colors">Privacy</a>
              <a href="#" className="text-sm text-purple-600 hover:text-purple-800 transition-colors">Terms</a>
              <a href="#" className="text-sm text-purple-600 hover:text-purple-800 transition-colors">RSS</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
