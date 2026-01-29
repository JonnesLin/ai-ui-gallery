export default function PastelProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-4">
      <div className="max-w-5xl mx-auto py-12">
        {/* Profile Card */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg overflow-hidden mb-6">
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 h-32"></div>

          <div className="px-8 pb-8">
            <div className="flex flex-col md:flex-row gap-6 -mt-16 mb-6">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 border-4 border-white shadow-lg flex-shrink-0"></div>
              <div className="flex-1 md:mt-16">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-purple-900 mb-2">Lily Anderson</h1>
                    <p className="text-purple-600">Lifestyle Blogger & Content Creator</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-6 py-2.5 bg-gradient-to-r from-pink-300 to-purple-300 text-white rounded-full font-medium hover:shadow-lg transition-all">
                      Edit Profile
                    </button>
                    <button className="px-6 py-2.5 bg-white border-2 border-purple-200 text-purple-600 rounded-full font-medium hover:bg-purple-50 transition-all">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <p className="text-purple-700 mb-6 leading-relaxed">
              Sharing everyday moments, cozy aesthetics, and positive vibes.
              Lover of pastel colors, sweet treats, and all things soft and dreamy.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-pink-50 rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold text-pink-500 mb-1">892</div>
                <div className="text-pink-600 text-sm">Posts</div>
              </div>
              <div className="bg-purple-50 rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold text-purple-500 mb-1">28.4k</div>
                <div className="text-purple-600 text-sm">Followers</div>
              </div>
              <div className="bg-blue-50 rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold text-blue-500 mb-1">1.8k</div>
                <div className="text-blue-600 text-sm">Following</div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm">Lifestyle</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm">Fashion</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm">Beauty</span>
              <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm">Wellness</span>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white/80 backdrop-blur rounded-3xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-purple-900 mb-4">About Me</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <span className="text-purple-700">Melbourne, Australia</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                  </svg>
                </div>
                <span className="text-purple-700">lilyanderson.blog</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <span className="text-purple-700">lily@blog.com</span>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-3xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-purple-900 mb-4">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {['Reading', 'Photography', 'Journaling', 'Baking', 'Yoga', 'Travel'].map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-purple-600 rounded-lg text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="bg-white/80 backdrop-blur rounded-3xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-purple-900 mb-4">Recent Posts</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={`aspect-square rounded-2xl ${
                  i % 6 === 0 ? 'bg-gradient-to-br from-pink-200 to-pink-300' :
                  i % 6 === 1 ? 'bg-gradient-to-br from-purple-200 to-purple-300' :
                  i % 6 === 2 ? 'bg-gradient-to-br from-blue-200 to-blue-300' :
                  i % 6 === 3 ? 'bg-gradient-to-br from-green-200 to-green-300' :
                  i % 6 === 4 ? 'bg-gradient-to-br from-yellow-200 to-yellow-300' :
                  'bg-gradient-to-br from-rose-200 to-rose-300'
                } hover:scale-105 transition-transform cursor-pointer shadow-md`}
              ></div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex justify-center gap-4">
          {['Instagram', 'Pinterest', 'Twitter', 'YouTube'].map((social, i) => (
            <button
              key={social}
              className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform ${
                i === 0 ? 'bg-gradient-to-br from-pink-300 to-purple-300' :
                i === 1 ? 'bg-gradient-to-br from-red-300 to-pink-300' :
                i === 2 ? 'bg-gradient-to-br from-blue-300 to-cyan-300' :
                'bg-gradient-to-br from-red-400 to-pink-400'
              }`}
            >
              <div className="w-5 h-5 bg-white/50 rounded"></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
