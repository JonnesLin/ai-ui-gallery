export default function GradientCards() {
  return (
    <div className="min-h-screen bg-slate-950 p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sunset Card */}
          <div className="rounded-3xl p-6 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 text-white">
            <span className="text-xs font-medium uppercase tracking-wider text-white/70">Featured</span>
            <h3 className="mt-4 text-2xl font-bold">Summer Collection</h3>
            <p className="mt-2 text-white/80 text-sm leading-relaxed">
              Discover vibrant styles for the warmest season. Limited edition pieces available.
            </p>
            <button className="mt-6 px-5 py-2.5 bg-white text-purple-600 font-medium rounded-full text-sm hover:bg-white/90 transition-colors">
              Explore Now
            </button>
          </div>

          {/* Ocean Card */}
          <div className="rounded-3xl p-6 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 text-white">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-bold">Lightning Fast</h3>
            <p className="mt-2 text-white/80 text-sm leading-relaxed">
              Experience unmatched speed with our optimized infrastructure.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="text-3xl font-bold">99.9%</span>
              <span className="text-white/70">uptime</span>
            </div>
          </div>

          {/* Aurora Card */}
          <div className="rounded-3xl p-6 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 text-white">
            <div className="flex items-center gap-4">
              <img
                src="https://picsum.photos/seed/grad1/80/80"
                alt="Avatar"
                className="w-14 h-14 rounded-full object-cover ring-2 ring-white/30"
              />
              <div>
                <h3 className="font-bold">Elena Martinez</h3>
                <p className="text-sm text-white/70">Creative Lead</p>
              </div>
            </div>
            <p className="mt-4 text-white/80 text-sm leading-relaxed">
              "Design is not just what it looks like. Design is how it works."
            </p>
            <div className="mt-6 flex gap-3">
              <button className="flex-1 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm hover:bg-white/30 transition-colors">
                Follow
              </button>
              <button className="flex-1 py-2 bg-white text-teal-600 rounded-full text-sm font-medium hover:bg-white/90 transition-colors">
                Message
              </button>
            </div>
          </div>

          {/* Neon Card */}
          <div className="lg:col-span-2 rounded-3xl p-6 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="relative">
              <span className="text-xs font-medium uppercase tracking-wider text-white/70">Special Offer</span>
              <h3 className="mt-4 text-3xl font-bold">Pro Membership</h3>
              <p className="mt-2 text-white/80 max-w-md">
                Unlock all premium features and get exclusive access to new releases.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-white/70">/month</span>
                </div>
                <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-full hover:bg-white/90 transition-colors">
                  Upgrade Now
                </button>
              </div>
            </div>
          </div>

          {/* Forest Card */}
          <div className="rounded-3xl overflow-hidden">
            <div className="aspect-[4/3] relative">
              <img
                src="https://picsum.photos/seed/grad2/400/300"
                alt="Product"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 via-emerald-900/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <span className="text-xs font-medium uppercase tracking-wider text-emerald-300">Nature</span>
                <h3 className="mt-2 text-xl font-bold">Forest Retreat</h3>
                <p className="mt-1 text-white/80 text-sm">Escape to tranquility</p>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="rounded-3xl p-6 bg-gradient-to-br from-rose-500 via-red-500 to-orange-500 text-white">
            <h3 className="text-sm font-medium uppercase tracking-wider text-white/70">Total Revenue</h3>
            <p className="mt-4 text-4xl font-bold">$128,430</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-sm bg-white/20 px-2 py-0.5 rounded-full">+23.5%</span>
              <span className="text-sm text-white/70">vs last month</span>
            </div>
            <div className="mt-6 h-20 flex items-end gap-1">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-white/30 rounded-t"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Cosmic Card */}
          <div className="rounded-3xl p-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white border border-purple-500/30 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold">AI Powered</h3>
              <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                Advanced machine learning algorithms that adapt to your needs.
              </p>
              <a href="#" className="mt-4 inline-flex items-center gap-2 text-purple-400 text-sm hover:text-purple-300 transition-colors">
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Golden Card */}
          <div className="rounded-3xl p-6 bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 text-amber-900">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">Premium</span>
            <h3 className="mt-4 text-2xl font-bold">Gold Membership</h3>
            <ul className="mt-4 space-y-2">
              {['Priority support', 'Exclusive content', 'Early access'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-amber-800">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full py-3 bg-amber-900 text-amber-100 font-semibold rounded-full hover:bg-amber-800 transition-colors">
              Subscribe
            </button>
          </div>

          {/* Mesh Gradient Card */}
          <div
            className="lg:col-span-2 rounded-3xl p-8 text-white relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #fda085 100%)'
            }}
          >
            <div className="max-w-md">
              <span className="text-xs font-medium uppercase tracking-wider text-white/70">Newsletter</span>
              <h3 className="mt-4 text-2xl font-bold">Stay Updated</h3>
              <p className="mt-2 text-white/80">Get the latest news and exclusive offers delivered to your inbox.</p>
              <div className="mt-6 flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white placeholder-white/50 border border-white/30 focus:outline-none focus:border-white/50"
                />
                <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-full hover:bg-white/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Minimal Gradient Card */}
          <div className="rounded-3xl p-6 bg-gradient-to-br from-gray-800 to-gray-900 text-white border border-gray-700">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-400 text-sm">Balance</p>
                <p className="mt-1 text-3xl font-bold">$24,580</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500" />
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700 flex justify-between text-sm">
              <div>
                <p className="text-gray-500">Income</p>
                <p className="text-green-400 font-medium">+$12,480</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500">Expenses</p>
                <p className="text-red-400 font-medium">-$4,230</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
