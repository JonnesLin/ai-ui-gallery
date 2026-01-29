export default function GlassmorphismCards() {
  return (
    <div
      className="min-h-screen p-8 md:p-12"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product Card */}
          <div className="backdrop-blur-xl bg-white/20 rounded-3xl p-6 border border-white/30 shadow-xl">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://picsum.photos/seed/glass1/400/400"
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4">
              <span className="text-xs text-white/70 uppercase tracking-wider">New Arrival</span>
              <h3 className="mt-1 text-lg font-medium text-white">Crystal Headphones</h3>
              <p className="mt-1 text-white/60 text-sm">Premium wireless audio</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-semibold text-white">$299</span>
                <button className="px-4 py-2 bg-white/30 backdrop-blur-sm rounded-full text-sm text-white border border-white/40 hover:bg-white/40 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div className="backdrop-blur-xl bg-white/15 rounded-3xl p-6 border border-white/20 shadow-xl">
            <div className="flex items-center gap-4">
              <img
                src="https://picsum.photos/seed/glass2/100/100"
                alt="Avatar"
                className="w-16 h-16 rounded-2xl object-cover ring-2 ring-white/30"
              />
              <div>
                <h3 className="text-lg font-medium text-white">Alex Rivera</h3>
                <p className="text-sm text-white/60">Product Designer</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Creating beautiful digital experiences with a focus on user-centered design and modern aesthetics.
            </p>
            <div className="mt-6 flex gap-3">
              <div className="flex-1 backdrop-blur-sm bg-white/10 rounded-2xl p-3 text-center border border-white/10">
                <p className="text-xl font-semibold text-white">248</p>
                <p className="text-xs text-white/50">Projects</p>
              </div>
              <div className="flex-1 backdrop-blur-sm bg-white/10 rounded-2xl p-3 text-center border border-white/10">
                <p className="text-xl font-semibold text-white">12K</p>
                <p className="text-xs text-white/50">Followers</p>
              </div>
              <div className="flex-1 backdrop-blur-sm bg-white/10 rounded-2xl p-3 text-center border border-white/10">
                <p className="text-xl font-semibold text-white">89</p>
                <p className="text-xs text-white/50">Awards</p>
              </div>
            </div>
          </div>

          {/* Weather Card */}
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-6 border border-white/20 shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-white/60">San Francisco</p>
                <p className="text-5xl font-light text-white mt-2">23°</p>
                <p className="text-sm text-white/70 mt-1">Partly Cloudy</p>
              </div>
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-300/60 to-orange-400/60 rounded-full blur-sm" />
            </div>
            <div className="mt-8 grid grid-cols-4 gap-2">
              {['Mon', 'Tue', 'Wed', 'Thu'].map((day, i) => (
                <div key={day} className="text-center backdrop-blur-sm bg-white/10 rounded-xl p-2 border border-white/10">
                  <p className="text-xs text-white/50">{day}</p>
                  <p className="text-lg text-white mt-1">{20 + i}°</p>
                </div>
              ))}
            </div>
          </div>

          {/* Music Player Card */}
          <div className="lg:col-span-2 backdrop-blur-xl bg-white/15 rounded-3xl p-6 border border-white/25 shadow-xl">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0">
                <img
                  src="https://picsum.photos/seed/glass3/400/400"
                  alt="Album"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <span className="text-xs text-white/50 uppercase tracking-wider">Now Playing</span>
                <h3 className="text-2xl font-semibold text-white mt-2">Ethereal Dreams</h3>
                <p className="text-white/60">Aurora Waves</p>
                <div className="mt-6 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-white/70 rounded-full" />
                </div>
                <div className="mt-2 flex justify-between text-xs text-white/50">
                  <span>1:24</span>
                  <span>4:12</span>
                </div>
                <div className="mt-4 flex items-center justify-center gap-6">
                  <button className="w-10 h-10 backdrop-blur-sm bg-white/10 rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 20L9 12l10-8v16zM7 19V5H5v14h2z" />
                    </svg>
                  </button>
                  <button className="w-14 h-14 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 hover:bg-white/40 transition-colors">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 backdrop-blur-sm bg-white/10 rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 4l10 8-10 8V4zm12 0h2v16h-2V4z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Notification Card */}
          <div className="backdrop-blur-xl bg-white/20 rounded-3xl p-6 border border-white/30 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 backdrop-blur-sm bg-green-400/30 rounded-full flex items-center justify-center border border-green-300/30">
                <svg className="w-5 h-5 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-medium">Payment Successful</h3>
                <p className="text-xs text-white/50">2 minutes ago</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Your payment of $299.00 has been processed successfully. Check your email for details.
            </p>
            <button className="mt-4 w-full py-3 backdrop-blur-sm bg-white/20 rounded-xl text-sm text-white border border-white/30 hover:bg-white/30 transition-colors">
              View Receipt
            </button>
          </div>

          {/* Stats Card */}
          <div className="backdrop-blur-xl bg-white/15 rounded-3xl p-6 border border-white/25 shadow-xl">
            <h3 className="text-sm text-white/60 uppercase tracking-wider">Revenue</h3>
            <p className="text-3xl font-bold text-white mt-2">$48,294</p>
            <p className="text-sm text-green-300 mt-1">+12.5% from last month</p>
            <div className="mt-6 flex items-end gap-1 h-24">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-white/30 rounded-t-lg backdrop-blur-sm"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Login Card */}
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-xl">
            <h3 className="text-xl font-semibold text-white text-center">Welcome Back</h3>
            <p className="text-sm text-white/50 text-center mt-1">Sign in to continue</p>
            <div className="mt-6 space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white placeholder-white/40 border border-white/20 focus:outline-none focus:border-white/40"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white placeholder-white/40 border border-white/20 focus:outline-none focus:border-white/40"
              />
            </div>
            <button className="mt-6 w-full py-3 bg-white/30 backdrop-blur-sm rounded-xl text-white font-medium border border-white/40 hover:bg-white/40 transition-colors">
              Sign In
            </button>
          </div>

          {/* Feature Card */}
          <div className="backdrop-blur-xl bg-white/20 rounded-3xl p-6 border border-white/30 shadow-xl">
            <div className="w-12 h-12 backdrop-blur-sm bg-purple-400/30 rounded-2xl flex items-center justify-center border border-purple-300/30">
              <svg className="w-6 h-6 text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-white">Lightning Fast</h3>
            <p className="mt-2 text-sm text-white/60 leading-relaxed">
              Experience blazing fast performance with our optimized infrastructure and smart caching.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
