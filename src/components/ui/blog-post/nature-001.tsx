export default function NatureBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-green-200">
        <div className="max-w-5xl mx-auto px-6 py-5">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <span className="text-xl font-semibold text-green-900">Nature's Blog</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-green-700 hover:text-green-900 transition-colors">Wellness</a>
              <a href="#" className="text-green-700 hover:text-green-900 transition-colors">Ecology</a>
              <a href="#" className="text-green-700 hover:text-green-900 transition-colors">Garden</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-6">
          <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Sustainable Living
          </span>
          <time className="text-green-700 text-sm">March 28, 2024</time>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-900 leading-tight mb-8">
          Designing with Nature: Bringing the Outdoors Inside
        </h1>

        {/* Author */}
        <div className="flex items-center gap-4 pb-8 mb-8 border-b-2 border-green-200">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-green-300">
            <img
              src="https://picsum.photos/seed/authornature/80/80"
              alt="Author"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-green-900 text-lg">Willow Greene</p>
            <p className="text-sm text-green-700">Biophilic Design Specialist</p>
          </div>
        </div>

        {/* Featured Image */}
        <figure className="mb-12 rounded-3xl overflow-hidden shadow-xl">
          <div className="aspect-[21/9] overflow-hidden">
            <img
              src="https://picsum.photos/seed/nature1/1200/514"
              alt="Featured"
              className="w-full h-full object-cover"
            />
          </div>
          <figcaption className="p-4 bg-white/90 backdrop-blur-sm text-sm text-green-700 text-center">
            Integrating natural elements creates harmony between built and natural environments
          </figcaption>
        </figure>

        {/* Content */}
        <div className="space-y-6 text-gray-800 leading-relaxed">
          <p className="text-xl text-green-900 font-medium leading-relaxed">
            Humans have an innate connection to nature—a biological need to interact with
            the natural world. Biophilic design brings this connection into our daily spaces.
          </p>

          <p>
            The natural world operates in organic patterns—flowing curves, fractal repetitions,
            and harmonious color palettes. When we incorporate these elements into design,
            whether digital or physical, we create environments that feel inherently comfortable
            and restorative.
          </p>

          <h2 className="text-3xl font-bold text-green-900 pt-8">The Language of Nature</h2>

          <p>
            Nature speaks through curves rather than straight lines, through gradual transitions
            rather than harsh contrasts. Leaves don't have sharp corners. Rivers meander. Growth
            patterns follow spirals and fractals that appear across scales.
          </p>

          {/* Nature Principles Card */}
          <div className="my-10 p-8 bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl shadow-lg border border-green-200">
            <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
              <span className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </span>
              Natural Design Elements
            </h3>
            <div className="space-y-4">
              {[
                { icon: '🌿', title: 'Organic Shapes', desc: 'Curves and flowing forms mimic natural patterns' },
                { icon: '🍃', title: 'Earthy Colors', desc: 'Greens, browns, and earth tones create calm' },
                { icon: '🌊', title: 'Fluid Motion', desc: 'Animations that feel gentle and natural' },
                { icon: '☀️', title: 'Natural Light', desc: 'Brightness and warmth inspired by sunlight' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 bg-white/70 rounded-2xl">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold text-green-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-green-700">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-3xl font-bold text-green-900 pt-8">Biophilic Benefits</h2>

          <p>
            Research consistently shows that exposure to natural elements reduces stress,
            improves cognitive function, and enhances overall well-being. Even digital
            representations of nature—through imagery, color, and form—provide measurable benefits.
          </p>

          {/* Quote Box */}
          <div className="my-10 p-8 bg-white rounded-3xl shadow-lg border-2 border-green-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full blur-3xl opacity-50" />
            <svg className="w-12 h-12 text-green-300 mb-4" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10 8c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.3 0 2.5-0.4 3.5-1.1-0.3 3.3-2.9 5.1-3.5 5.1v4c5.5 0 10-4.5 10-10v-4c0-3.3-2.7-6-6-6zM26 8c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.3 0 2.5-0.4 3.5-1.1-0.3 3.3-2.9 5.1-3.5 5.1v4c5.5 0 10-4.5 10-10v-4c0-3.3-2.7-6-6-6z" />
            </svg>
            <p className="text-2xl text-green-900 font-medium italic mb-4 relative z-10">
              In every walk with nature, one receives far more than he seeks.
            </p>
            <p className="text-green-700 font-medium relative z-10">— John Muir</p>
          </div>

          {/* Image Grid */}
          <div className="my-10 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://picsum.photos/seed/nature2/600/600"
                alt="Natural texture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://picsum.photos/seed/nature3/600/600"
                alt="Organic pattern"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-green-900 pt-8">Practical Applications</h2>

          <p>
            Bringing nature into digital design doesn't require literal representations of
            trees and flowers. It's about capturing the essence—the feel—of natural environments
            through thoughtful choices in color, form, and interaction.
          </p>

          {/* Implementation Steps */}
          <div className="my-10 space-y-3">
            {[
              'Use rounded corners and organic shapes instead of sharp angles',
              'Choose color palettes inspired by forests, oceans, and earth',
              'Add subtle textures that mimic natural materials like wood or stone',
              'Implement smooth, flowing animations rather than mechanical movements',
              'Incorporate imagery of plants, landscapes, and natural light',
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-md">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                  {i + 1}
                </div>
                <p className="text-green-900">{step}</p>
              </div>
            ))}
          </div>

          <p>
            The goal isn't to replicate nature but to evoke its calming, restorative qualities.
            When users interact with naturally-inspired designs, they experience lower cognitive
            load, reduced eye strain, and a sense of ease that keeps them engaged longer.
          </p>
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t-2 border-green-200">
          <div className="flex flex-wrap gap-3">
            {['Biophilic Design', 'Nature', 'Sustainability', 'Wellness'].map((tag) => (
              <span key={tag} className="px-5 py-2 bg-green-100 hover:bg-green-200 text-green-800 rounded-full text-sm font-medium transition-colors cursor-pointer">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Social Share */}
        <div className="mt-8 flex items-center gap-4">
          <span className="text-green-700 font-medium">Share this article:</span>
          <div className="flex gap-3">
            {[...Array(3)].map((_, i) => (
              <button key={i} className="w-11 h-11 bg-green-100 hover:bg-green-200 rounded-full flex items-center justify-center text-green-700 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </article>

      {/* Author Bio */}
      <section className="bg-gradient-to-br from-green-100 to-emerald-100 border-y-2 border-green-200">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl shrink-0">
              <img
                src="https://picsum.photos/seed/authornature/200/200"
                alt="Willow Greene"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-green-900 mb-2">Willow Greene</h3>
              <p className="text-green-700 mb-4">Biophilic Design Specialist</p>
              <p className="text-gray-800 leading-relaxed mb-6">
                Willow combines principles of environmental psychology with design thinking
                to create spaces—both physical and digital—that nurture human well-being.
                She holds a master's degree in Environmental Design and has spent the last
                decade researching how natural elements impact user experience.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg">
                Follow Willow
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-green-900 mb-8">More from Nature's Blog</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { seed: 'nat1', title: 'Forest Bathing and Design', date: 'Mar 25' },
            { seed: 'nat2', title: 'Color Psychology of Nature', date: 'Mar 20' },
            { seed: 'nat3', title: 'Organic Shapes in UI', date: 'Mar 15' },
          ].map((post) => (
            <a key={post.seed} href="#" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${post.seed}/400/300`}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm text-green-600 mb-2">{post.date}</p>
                  <h3 className="font-bold text-green-900 group-hover:text-green-700 transition-colors">
                    {post.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-green-800 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <span className="text-xl font-semibold">Nature's Blog</span>
            </div>
            <div className="flex items-center gap-8">
              <a href="#" className="hover:text-green-200 transition-colors">Privacy</a>
              <a href="#" className="hover:text-green-200 transition-colors">Terms</a>
              <a href="#" className="hover:text-green-200 transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm opacity-80">
            <p>© 2024 Nature's Blog. Designed with care for the environment.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
