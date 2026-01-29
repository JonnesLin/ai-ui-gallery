export default function DarkProfilePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Cover Image */}
        <div className="h-64 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl mb-8"></div>

        {/* Profile Section */}
        <div className="relative -mt-24 mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-40 h-40 rounded-2xl bg-gray-800 border-4 border-gray-950 shadow-2xl"></div>
            <div className="flex-1 md:mt-16">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-4xl font-bold mb-2">David Martinez</h1>
                  <p className="text-gray-400">@davidmartinez</p>
                </div>
                <div className="flex gap-3">
                  <button className="px-6 py-2.5 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Edit Profile
                  </button>
                  <button className="px-6 py-2.5 bg-gray-800 rounded-lg font-medium hover:bg-gray-700 transition-colors">
                    Share
                  </button>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-2xl">
                Full-stack developer passionate about building scalable applications. Coffee enthusiast and open source contributor.
              </p>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Barcelona, Spain</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  <span className="text-blue-400 hover:underline cursor-pointer">davidmartinez.dev</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Joined March 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="text-3xl font-bold mb-1">428</div>
            <div className="text-gray-400 text-sm">Repositories</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="text-3xl font-bold mb-1">18.3k</div>
            <div className="text-gray-400 text-sm">Followers</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="text-3xl font-bold mb-1">2.1k</div>
            <div className="text-gray-400 text-sm">Following</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="text-3xl font-bold mb-1">94</div>
            <div className="text-gray-400 text-sm">Stars</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-800 mb-8">
          <div className="flex gap-8">
            <button className="pb-4 border-b-2 border-white font-medium">Posts</button>
            <button className="pb-4 border-b-2 border-transparent text-gray-400 hover:text-white transition-colors">Projects</button>
            <button className="pb-4 border-b-2 border-transparent text-gray-400 hover:text-white transition-colors">About</button>
          </div>
        </div>

        {/* Posts */}
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-colors">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold">David Martinez</span>
                    <span className="text-gray-500 text-sm">@davidmartinez</span>
                    <span className="text-gray-600">·</span>
                    <span className="text-gray-500 text-sm">{i + 1}h ago</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Just shipped a new feature for our dashboard! The performance improvements are incredible.
                    Check it out and let me know what you think.
                  </p>
                  <div className="flex gap-8 text-gray-500 text-sm">
                    <button className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span>24</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-green-400 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span>12</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-red-400 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span>89</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
