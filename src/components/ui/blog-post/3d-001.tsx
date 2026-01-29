export default function ThreeDimensionalBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Header */}
      <header className="relative z-10">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <nav className="flex items-center justify-between">
            <div className="px-6 py-3 bg-white rounded-xl shadow-[0_8px_16px_rgba(0,0,0,0.1),0_3px_6px_rgba(0,0,0,0.08)] transform transition-transform hover:translate-y-[-2px]">
              <span className="text-xl font-bold text-gray-900">3D<span className="text-blue-600">Blog</span></span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="px-5 py-2.5 bg-white rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.08)] text-sm text-gray-700 hover:shadow-[0_6px_12px_rgba(0,0,0,0.12)] transform transition-all hover:translate-y-[-1px]">
                Blog
              </a>
              <a href="#" className="px-5 py-2.5 bg-white rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.08)] text-sm text-gray-700 hover:shadow-[0_6px_12px_rgba(0,0,0,0.12)] transform transition-all hover:translate-y-[-1px]">
                About
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero Card */}
        <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15),0_10px_25px_rgba(0,0,0,0.1)] overflow-hidden transform transition-all hover:shadow-[0_25px_60px_rgba(0,0,0,0.2),0_15px_30px_rgba(0,0,0,0.15)]">
          <div className="aspect-[21/9] overflow-hidden">
            <img
              src="https://picsum.photos/seed/3d1/1200/514"
              alt="Featured"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 md:p-12">
            {/* Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-2 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg shadow-[0_4px_12px_rgba(59,130,246,0.4)] text-xs font-semibold">
                3D Design
              </span>
              <span className="text-sm text-gray-500">March 28, 2024</span>
              <span className="text-sm text-gray-500">8 min read</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              The Depth Revolution: How 3D Design Transforms User Experience
            </h1>

            {/* Author */}
            <div className="flex items-center gap-4 pb-8 border-b border-gray-200">
              <div className="w-14 h-14 rounded-full overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                <img
                  src="https://picsum.photos/seed/author3d/80/80"
                  alt="Author"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Marcus Chen</p>
                <p className="text-sm text-gray-500">3D Design Specialist</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-8 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15),0_10px_25px_rgba(0,0,0,0.1)] p-8 md:p-12">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-xl text-gray-800 font-medium">
              Three-dimensional design creates depth and hierarchy that guides users naturally
              through interfaces, adding a tactile quality to digital experiences.
            </p>

            <p>
              The resurgence of 3D design isn't just about aesthetics—it's about creating
              interfaces that feel tangible and intuitive. When executed properly, depth cues
              help users understand spatial relationships and interaction possibilities at a glance.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-6">Layered Hierarchy</h2>

            <p>
              3D elements establish clear visual hierarchy through elevation and shadow. Cards
              appear to float above the background, buttons invite pressing through their raised
              appearance, and overlays clearly indicate modal states.
            </p>

            {/* Callout Box */}
            <div className="my-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-[inset_0_2px_8px_rgba(0,0,0,0.08),0_4px_12px_rgba(59,130,246,0.15)] border border-blue-100">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-500 rounded-lg shadow-[0_4px_12px_rgba(59,130,246,0.4)] flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                Key Principles of 3D Design
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.1)] flex items-center justify-center text-blue-600 text-sm font-bold shrink-0 mt-0.5">1</span>
                  <span>Consistent light source creates believable depth</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.1)] flex items-center justify-center text-blue-600 text-sm font-bold shrink-0 mt-0.5">2</span>
                  <span>Shadow intensity indicates elevation level</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.1)] flex items-center justify-center text-blue-600 text-sm font-bold shrink-0 mt-0.5">3</span>
                  <span>Interactive elements respond to hover and press states</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.1)] flex items-center justify-center text-blue-600 text-sm font-bold shrink-0 mt-0.5">4</span>
                  <span>Depth creates natural visual flow and reading order</span>
                </li>
              </ul>
            </div>

            <blockquote className="my-8 p-6 bg-white rounded-xl shadow-[inset_4px_0_0_#3b82f6,0_4px_12px_rgba(0,0,0,0.08)] border-l-4 border-blue-500">
              <p className="text-lg text-gray-700 italic">
                "3D design bridges the gap between digital and physical worlds, creating
                interfaces that feel real and responsive to human interaction."
              </p>
              <footer className="mt-3 text-sm text-gray-600 font-medium">— Dr. Sarah Mitchell, UX Researcher</footer>
            </blockquote>

            <h2 className="text-2xl font-bold text-gray-900 pt-6">Interaction Feedback</h2>

            <p>
              One of 3D design's greatest strengths is providing immediate, intuitive feedback.
              When a button appears to press down, or a card lifts on hover, users receive
              instant confirmation of their actions.
            </p>

            <figure className="my-8">
              <div className="rounded-xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.15)]">
                <img
                  src="https://picsum.photos/seed/3d2/900/500"
                  alt="3D interaction example"
                  className="w-full"
                />
              </div>
              <figcaption className="mt-4 text-sm text-gray-500 text-center">
                Depth and shadow create clear affordances for interaction
              </figcaption>
            </figure>

            <p>
              This physical metaphor reduces cognitive load. Users don't need to learn new
              interaction patterns—they can apply their understanding of real-world physics
              to digital interfaces.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-6">Performance Considerations</h2>

            <p>
              While CSS shadows and transforms enable rich 3D effects, it's important to
              balance visual appeal with performance. Modern browsers handle most 3D effects
              efficiently, but excessive layering can impact scroll performance.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Tagged in:</p>
            <div className="flex flex-wrap gap-3">
              {['3D Design', 'UI/UX', 'Visual Hierarchy', 'Interaction Design'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-gray-50 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-sm text-gray-700 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transform hover:translate-y-[-1px] transition-all cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share Actions */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-sm text-gray-600 font-medium">Share this article:</span>
            <div className="flex gap-3">
              {[...Array(3)].map((_, i) => (
                <button key={i} className="w-10 h-10 bg-gray-100 rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.08)] flex items-center justify-center text-gray-600 hover:bg-blue-500 hover:text-white hover:shadow-[0_6px_16px_rgba(59,130,246,0.3)] transform hover:translate-y-[-2px] transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Author Bio Card */}
        <div className="mt-8 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15),0_10px_25px_rgba(0,0,0,0.1)] p-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.15)] shrink-0">
              <img
                src="https://picsum.photos/seed/author3d/200/200"
                alt="Marcus Chen"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900">Marcus Chen</h3>
              <p className="text-sm text-gray-500 mt-1">3D Design Specialist</p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Marcus specializes in three-dimensional UI design and has been pushing the
                boundaries of web interfaces for over a decade. He believes depth and shadow
                are essential tools for creating intuitive digital experiences.
              </p>
              <button className="mt-4 px-6 py-2.5 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg shadow-[0_4px_12px_rgba(59,130,246,0.4)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.5)] transform hover:translate-y-[-2px] transition-all font-medium">
                Follow
              </button>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { seed: 'rel3d1', title: 'Material Design Evolution', date: 'Mar 20, 2024' },
              { seed: 'rel3d2', title: 'Shadows in Modern UI', date: 'Mar 15, 2024' },
              { seed: 'rel3d3', title: 'Depth Perception in Interfaces', date: 'Mar 10, 2024' },
            ].map((post) => (
              <a key={post.seed} href="#" className="group">
                <div className="bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.1)] overflow-hidden transform transition-all hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] hover:translate-y-[-4px]">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={`https://picsum.photos/seed/${post.seed}/400/225`}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-gray-500 mb-2">{post.date}</p>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="mt-16 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">2024 3DBlog. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Privacy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Terms</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
