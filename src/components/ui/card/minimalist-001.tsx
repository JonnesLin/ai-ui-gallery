export default function MinimalistCards() {
  return (
    <div className="min-h-screen bg-white p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product Card */}
          <div className="group">
            <div className="aspect-[4/5] overflow-hidden bg-gray-50">
              <img
                src="https://picsum.photos/seed/min1/400/500"
                alt="Product"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="pt-4">
              <span className="text-xs tracking-widest text-gray-400 uppercase">Essentials</span>
              <h3 className="mt-1 text-sm font-light text-gray-900 tracking-wide">Minimal Ceramic Vase</h3>
              <p className="mt-1 text-sm text-gray-500">$48.00</p>
            </div>
          </div>

          {/* Profile Card */}
          <div className="border-t border-gray-100 pt-6">
            <img
              src="https://picsum.photos/seed/min2/80/80"
              alt="Profile"
              className="w-16 h-16 object-cover rounded-full grayscale"
            />
            <h3 className="mt-4 text-sm font-light text-gray-900 tracking-wide">Sarah Chen</h3>
            <p className="mt-1 text-xs text-gray-400 tracking-wide">Creative Director</p>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed font-light">
              Focused on creating meaningful experiences through thoughtful design and attention to detail.
            </p>
            <a href="#" className="inline-block mt-4 text-xs text-gray-900 border-b border-gray-900 pb-px hover:text-gray-500 hover:border-gray-500 transition-colors">
              View profile
            </a>
          </div>

          {/* Stats Card */}
          <div className="bg-gray-50 p-8">
            <span className="text-xs tracking-widest text-gray-400 uppercase">Analytics</span>
            <div className="mt-6 space-y-6">
              <div>
                <p className="text-3xl font-extralight text-gray-900">2,847</p>
                <p className="mt-1 text-xs text-gray-400 tracking-wide">Total views this month</p>
              </div>
              <div className="h-px bg-gray-200" />
              <div>
                <p className="text-3xl font-extralight text-gray-900">94%</p>
                <p className="mt-1 text-xs text-gray-400 tracking-wide">Satisfaction rate</p>
              </div>
            </div>
          </div>

          {/* Article Card */}
          <div className="lg:col-span-2 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2 aspect-[3/2] overflow-hidden bg-gray-50">
              <img
                src="https://picsum.photos/seed/min3/600/400"
                alt="Article"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <span className="text-xs tracking-widest text-gray-400 uppercase">Design</span>
              <h3 className="mt-2 text-lg font-light text-gray-900 tracking-wide leading-snug">
                The Art of Reduction: Less is More
              </h3>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed font-light">
                Exploring the principles of minimalist design and how restraint leads to more impactful visual communication.
              </p>
              <a href="#" className="inline-block mt-4 text-xs text-gray-900 border-b border-gray-900 pb-px w-fit hover:text-gray-500 hover:border-gray-500 transition-colors">
                Read more
              </a>
            </div>
          </div>

          {/* Quote Card */}
          <div className="flex flex-col justify-center">
            <div className="h-px w-12 bg-gray-300 mb-6" />
            <p className="text-lg font-light text-gray-700 leading-relaxed italic">
              "Simplicity is the ultimate sophistication."
            </p>
            <p className="mt-4 text-xs text-gray-400 tracking-widest uppercase">— Leonardo da Vinci</p>
          </div>

          {/* Feature Card */}
          <div className="border border-gray-100 p-8 group hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 border border-gray-200 flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="mt-6 text-sm font-light text-gray-900 tracking-wide">Fast Performance</h3>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed font-light">
              Optimized for speed without compromising on quality or functionality.
            </p>
          </div>

          {/* Notification Card */}
          <div className="bg-gray-900 p-6 text-white">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs tracking-widest text-gray-500 uppercase">New Message</p>
                <h3 className="mt-2 text-sm font-light tracking-wide">Project Update</h3>
              </div>
              <span className="w-2 h-2 bg-white rounded-full" />
            </div>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed font-light">
              Your design files have been exported and are ready for review.
            </p>
            <p className="mt-4 text-xs text-gray-600">2 minutes ago</p>
          </div>

          {/* Pricing Card */}
          <div className="border border-gray-100 p-8">
            <span className="text-xs tracking-widest text-gray-400 uppercase">Professional</span>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-3xl font-extralight text-gray-900">$29</span>
              <span className="text-sm text-gray-400">/month</span>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                <span>Unlimited projects</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                <span>Advanced analytics</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                <span>Priority support</span>
              </div>
            </div>
            <button className="mt-8 w-full py-3 text-xs tracking-widest text-gray-900 border border-gray-900 hover:bg-gray-900 hover:text-white transition-colors uppercase">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
