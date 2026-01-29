export default function NeumorphismBlogPost() {
  return (
    <div className="min-h-screen bg-[#e0e5ec]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#e0e5ec]">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between p-4 rounded-2xl shadow-[8px_8px_16px_#b8bcc4,-8px_-8px_16px_#ffffff]">
            <span className="text-xl font-bold text-gray-700">SoftBlog</span>
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">Home</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">Articles</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">About</a>
            </div>
            <button className="w-10 h-10 rounded-xl shadow-[4px_4px_8px_#b8bcc4,-4px_-4px_8px_#ffffff] flex items-center justify-center text-gray-500 hover:shadow-[inset_4px_4px_8px_#b8bcc4,inset_-4px_-4px_8px_#ffffff] transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Card */}
        <div className="rounded-3xl shadow-[20px_20px_40px_#b8bcc4,-20px_-20px_40px_#ffffff] overflow-hidden">
          {/* Featured Image */}
          <div className="relative aspect-[2/1]">
            <img
              src="https://picsum.photos/seed/neu1/1000/500"
              alt="Featured"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#e0e5ec] via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 -mt-16 relative">
            {/* Category Badge */}
            <span className="inline-block px-4 py-2 rounded-xl bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bcc4,-4px_-4px_8px_#ffffff] text-xs font-medium text-gray-600 uppercase tracking-wide">
              Technology
            </span>

            {/* Title */}
            <h1 className="mt-6 text-3xl md:text-4xl font-bold text-gray-700 leading-tight">
              The Rise of Soft UI: Designing for Comfort and Clarity
            </h1>

            {/* Meta */}
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl shadow-[4px_4px_8px_#b8bcc4,-4px_-4px_8px_#ffffff] overflow-hidden">
                  <img
                    src="https://picsum.photos/seed/author3/100/100"
                    alt="Author"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">David Park</p>
                  <p className="text-xs text-gray-400">UI Designer</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>March 20, 2024</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="mt-12 p-8 md:p-12 rounded-3xl shadow-[20px_20px_40px_#b8bcc4,-20px_-20px_40px_#ffffff]">
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed">
              In the ever-evolving landscape of user interface design, a new aesthetic has emerged
              that challenges our traditional notions of depth and interaction. Neumorphism, or
              "soft UI," creates interfaces that appear to extrude from the background, offering
              a fresh perspective on digital tactility.
            </p>

            <div className="my-8 p-6 rounded-2xl shadow-[inset_8px_8px_16px_#b8bcc4,inset_-8px_-8px_16px_#ffffff]">
              <p className="text-gray-500 italic text-center">
                "Design is not just what it looks like and feels like. Design is how it works."
              </p>
              <p className="text-center text-xs text-gray-400 mt-2">— Steve Jobs</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-700 mt-10 mb-4">Understanding the Aesthetic</h2>

            <p className="text-gray-600 leading-relaxed">
              Neumorphism derives its name from "new" and "skeuomorphism." Unlike its predecessor,
              which attempted to recreate real-world objects digitally, neumorphism focuses on
              subtle elevation and depression effects that make elements appear physically connected
              to their background.
            </p>

            <p className="text-gray-600 leading-relaxed mt-4">
              The technique relies on dual shadows—a light shadow above or to one side, and a
              darker shadow below or to the opposite side. This creates the illusion of elements
              being embossed or debossed from a continuous surface.
            </p>

            <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl shadow-[8px_8px_16px_#b8bcc4,-8px_-8px_16px_#ffffff]">
                <div className="w-12 h-12 rounded-xl shadow-[4px_4px_8px_#b8bcc4,-4px_-4px_8px_#ffffff] flex items-center justify-center text-gray-500 mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-700">Light & Shadow</h3>
                <p className="mt-2 text-sm text-gray-500">Dual shadow system creates depth without harsh edges</p>
              </div>
              <div className="p-6 rounded-2xl shadow-[8px_8px_16px_#b8bcc4,-8px_-8px_16px_#ffffff]">
                <div className="w-12 h-12 rounded-xl shadow-[4px_4px_8px_#b8bcc4,-4px_-4px_8px_#ffffff] flex items-center justify-center text-gray-500 mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-700">Monochromatic</h3>
                <p className="mt-2 text-sm text-gray-500">Single color family ensures visual cohesion</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-700 mt-10 mb-4">Practical Considerations</h2>

            <p className="text-gray-600 leading-relaxed">
              While the aesthetic is undeniably appealing, implementing neumorphism comes with
              important accessibility considerations. The subtle nature of the effect can pose
              challenges for users with visual impairments.
            </p>

            <ul className="my-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg shadow-[2px_2px_4px_#b8bcc4,-2px_-2px_4px_#ffffff] flex items-center justify-center text-xs text-gray-500 shrink-0 mt-0.5">1</span>
                <span className="text-gray-600">Ensure sufficient contrast between interactive states</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg shadow-[2px_2px_4px_#b8bcc4,-2px_-2px_4px_#ffffff] flex items-center justify-center text-xs text-gray-500 shrink-0 mt-0.5">2</span>
                <span className="text-gray-600">Combine with other visual cues like color or icons</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg shadow-[2px_2px_4px_#b8bcc4,-2px_-2px_4px_#ffffff] flex items-center justify-center text-xs text-gray-500 shrink-0 mt-0.5">3</span>
                <span className="text-gray-600">Test with real users across different environments</span>
              </li>
            </ul>

            <figure className="my-10">
              <div className="rounded-2xl shadow-[8px_8px_16px_#b8bcc4,-8px_-8px_16px_#ffffff] overflow-hidden">
                <img
                  src="https://picsum.photos/seed/neu2/800/400"
                  alt="Neumorphism example"
                  className="w-full"
                />
              </div>
              <figcaption className="mt-4 text-center text-sm text-gray-400">
                Neumorphic interfaces create a sense of tactile familiarity
              </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-gray-700 mt-10 mb-4">Looking Forward</h2>

            <p className="text-gray-600 leading-relaxed">
              As with any design trend, neumorphism is not a universal solution. It works best
              in specific contexts where subtlety and elegance are paramount. When applied
              thoughtfully, it can create interfaces that feel remarkably tangible and inviting.
            </p>

            <p className="text-gray-600 leading-relaxed mt-4">
              The key lies in balance—using neumorphic elements strategically rather than
              universally, and always prioritizing usability over aesthetics.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200/50">
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-xl shadow-[4px_4px_8px_#b8bcc4,-4px_-4px_8px_#ffffff] text-sm text-gray-500 cursor-pointer hover:shadow-[inset_4px_4px_8px_#b8bcc4,inset_-4px_-4px_8px_#ffffff] transition-all">
                UI Design
              </span>
              <span className="px-4 py-2 rounded-xl shadow-[4px_4px_8px_#b8bcc4,-4px_-4px_8px_#ffffff] text-sm text-gray-500 cursor-pointer hover:shadow-[inset_4px_4px_8px_#b8bcc4,inset_-4px_-4px_8px_#ffffff] transition-all">
                Neumorphism
              </span>
              <span className="px-4 py-2 rounded-xl shadow-[4px_4px_8px_#b8bcc4,-4px_-4px_8px_#ffffff] text-sm text-gray-500 cursor-pointer hover:shadow-[inset_4px_4px_8px_#b8bcc4,inset_-4px_-4px_8px_#ffffff] transition-all">
                CSS
              </span>
            </div>
          </div>

          {/* Share & Actions */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-xl shadow-[4px_4px_8px_#b8bcc4,-4px_-4px_8px_#ffffff] flex items-center justify-center text-gray-500 hover:shadow-[inset_4px_4px_8px_#b8bcc4,inset_-4px_-4px_8px_#ffffff] transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </button>
              <button className="w-10 h-10 rounded-xl shadow-[4px_4px_8px_#b8bcc4,-4px_-4px_8px_#ffffff] flex items-center justify-center text-gray-500 hover:shadow-[inset_4px_4px_8px_#b8bcc4,inset_-4px_-4px_8px_#ffffff] transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </button>
            </div>
            <button className="px-6 py-3 rounded-xl shadow-[4px_4px_8px_#b8bcc4,-4px_-4px_8px_#ffffff] text-sm font-medium text-gray-600 hover:shadow-[inset_4px_4px_8px_#b8bcc4,inset_-4px_-4px_8px_#ffffff] transition-all">
              Copy Link
            </button>
          </div>
        </div>

        {/* Author Card */}
        <div className="mt-12 p-8 rounded-3xl shadow-[20px_20px_40px_#b8bcc4,-20px_-20px_40px_#ffffff]">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="w-24 h-24 rounded-2xl shadow-[8px_8px_16px_#b8bcc4,-8px_-8px_16px_#ffffff] overflow-hidden shrink-0">
              <img
                src="https://picsum.photos/seed/author3/200/200"
                alt="David Park"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-700">David Park</h3>
              <p className="text-sm text-gray-400 mt-1">UI Designer & Writer</p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                David specializes in creating thoughtful, accessible user interfaces.
                When he's not pushing pixels, he writes about design trends and best
                practices for the modern web.
              </p>
              <button className="mt-4 px-6 py-2 rounded-xl shadow-[4px_4px_8px_#b8bcc4,-4px_-4px_8px_#ffffff] text-sm font-medium text-gray-600 hover:shadow-[inset_4px_4px_8px_#b8bcc4,inset_-4px_-4px_8px_#ffffff] transition-all">
                Follow
              </button>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-700 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="#" className="group p-4 rounded-2xl shadow-[8px_8px_16px_#b8bcc4,-8px_-8px_16px_#ffffff] hover:shadow-[12px_12px_24px_#b8bcc4,-12px_-12px_24px_#ffffff] transition-all">
              <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-[inset_4px_4px_8px_#b8bcc4,inset_-4px_-4px_8px_#ffffff]">
                <img
                  src="https://picsum.photos/seed/related5/400/225"
                  alt="Related"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 font-semibold text-gray-700 group-hover:text-gray-500 transition-colors">
                Accessibility in Modern UI Design
              </h3>
              <p className="mt-2 text-sm text-gray-400">March 15, 2024</p>
            </a>
            <a href="#" className="group p-4 rounded-2xl shadow-[8px_8px_16px_#b8bcc4,-8px_-8px_16px_#ffffff] hover:shadow-[12px_12px_24px_#b8bcc4,-12px_-12px_24px_#ffffff] transition-all">
              <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-[inset_4px_4px_8px_#b8bcc4,inset_-4px_-4px_8px_#ffffff]">
                <img
                  src="https://picsum.photos/seed/related6/400/225"
                  alt="Related"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 font-semibold text-gray-700 group-hover:text-gray-500 transition-colors">
                The Psychology of Shadows in UI
              </h3>
              <p className="mt-2 text-sm text-gray-400">March 10, 2024</p>
            </a>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="mt-16 py-8 bg-[#e0e5ec]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-6 rounded-2xl shadow-[8px_8px_16px_#b8bcc4,-8px_-8px_16px_#ffffff] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">2024 SoftBlog. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">Privacy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
