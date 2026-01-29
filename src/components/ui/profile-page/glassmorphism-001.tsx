export default function GlassmorphismProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="max-w-5xl mx-auto py-12">
        {/* Main Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-shrink-0">
              <div className="w-40 h-40 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30"></div>
            </div>
            <div className="flex-1 text-white">
              <h1 className="text-4xl font-bold mb-3">Sarah Williams</h1>
              <p className="text-white/80 mb-6">Creative Director & Visual Artist</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm border border-white/30">Design</span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm border border-white/30">Art</span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm border border-white/30">Photography</span>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-white/30 backdrop-blur-sm rounded-xl font-medium hover:bg-white/40 transition-all border border-white/40">
                  Edit Profile
                </button>
                <button className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl font-medium hover:bg-white/30 transition-all border border-white/30">
                  Share
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-white mb-1">342</div>
              <div className="text-white/70 text-sm">Posts</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-white mb-1">24.8k</div>
              <div className="text-white/70 text-sm">Followers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-white mb-1">1.2k</div>
              <div className="text-white/70 text-sm">Following</div>
            </div>
          </div>

          {/* Info Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">About</h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>London, United Kingdom</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z"/>
                </svg>
                <span>Available for freelance</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>sarah.williams@email.com</span>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex-shrink-0"></div>
                  <div className="flex-1 text-white">
                    <h4 className="font-semibold mb-1">New Project Launch</h4>
                    <p className="text-sm text-white/70">Just published my latest design work</p>
                    <span className="text-xs text-white/50 mt-2 block">2 hours ago</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
