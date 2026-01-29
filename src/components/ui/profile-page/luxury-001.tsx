export default function LuxuryProfilePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Cover with Gradient */}
        <div className="relative h-80 bg-gradient-to-br from-yellow-900 via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.1),transparent_50%)]"></div>
        </div>

        {/* Profile Section */}
        <div className="relative -mt-32 px-8 pb-12">
          <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-yellow-600 via-yellow-700 to-yellow-900 border-4 border-black shadow-2xl shadow-yellow-900/50"></div>
              <div className="absolute bottom-2 right-2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full border-4 border-black flex items-center justify-center">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-5xl font-serif mb-3 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    Victoria Rothschild
                  </h1>
                  <p className="text-yellow-400 text-lg tracking-wide">@victoria_rothschild</p>
                </div>
                <div className="flex gap-3">
                  <button className="px-8 py-3 bg-gradient-to-r from-yellow-600 to-yellow-700 text-black font-semibold tracking-wide hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg shadow-yellow-900/50">
                    FOLLOW
                  </button>
                  <button className="px-8 py-3 border-2 border-yellow-600 text-yellow-400 font-semibold tracking-wide hover:bg-yellow-600/10 transition-all">
                    MESSAGE
                  </button>
                </div>
              </div>
              <p className="text-gray-300 mb-8 max-w-2xl text-lg leading-relaxed border-l-2 border-yellow-600 pl-6">
                Luxury lifestyle curator • Art collector • Philanthropist • Living life with elegance and purpose • Monte Carlo • Paris • New York
              </p>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-8 h-8 rounded-full bg-yellow-900/30 flex items-center justify-center border border-yellow-700/30">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Monte Carlo, Monaco</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-8 h-8 rounded-full bg-yellow-900/30 flex items-center justify-center border border-yellow-700/30">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </div>
                  <span className="text-yellow-400">victoria-rothschild.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Collections', value: '847' },
              { label: 'Followers', value: '2.8M' },
              { label: 'Following', value: '342' },
              { label: 'Awards', value: '28' }
            ].map((stat, i) => (
              <div key={i} className="relative bg-gradient-to-br from-yellow-950/50 via-gray-900/50 to-black p-8 border border-yellow-900/30 hover:border-yellow-700/50 transition-all group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-yellow-600/10 to-transparent"></div>
                <div className="text-4xl font-serif mb-2 text-yellow-400">{stat.value}</div>
                <div className="text-gray-400 text-sm uppercase tracking-widest">{stat.label}</div>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-yellow-600 to-transparent group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="border-b border-yellow-900/30 mb-12">
            <div className="flex gap-12">
              {['Portfolio', 'Collections', 'Events', 'About'].map((tab, i) => (
                <button key={i} className={`pb-4 text-lg tracking-wide ${
                  i === 0
                    ? 'border-b-2 border-yellow-600 text-yellow-400 font-semibold'
                    : 'text-gray-500 hover:text-gray-300'
                } transition-colors`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="space-y-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="relative bg-gradient-to-br from-gray-900 to-black p-8 border border-yellow-900/20 hover:border-yellow-700/40 transition-all group">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-yellow-600 via-yellow-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex gap-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 flex-shrink-0 border-2 border-yellow-700/50"></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-semibold text-xl text-white">Victoria Rothschild</span>
                      <span className="text-yellow-400">@victoria_rothschild</span>
                      <span className="text-gray-700">•</span>
                      <span className="text-gray-500">{i + 1}h ago</span>
                      <svg className="w-5 h-5 text-yellow-500 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                      {i === 0 && "Delighted to announce my latest art acquisition - a stunning 18th century masterpiece. True luxury is timeless."}
                      {i === 1 && "Attending the Monaco Grand Gala tonight. Excited to support the arts and meet fellow collectors. Excellence is in the details."}
                      {i === 2 && "Just returned from Paris Fashion Week. The craftsmanship this season is absolutely exquisite. Beauty never goes out of style."}
                    </p>
                    <div className="h-64 bg-gradient-to-br from-yellow-900/30 to-gray-900/30 mb-6 border border-yellow-900/20"></div>
                    <div className="flex gap-12 text-gray-500">
                      <button className="flex items-center gap-3 hover:text-yellow-400 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span className="text-lg">{128 + i * 42}</span>
                      </button>
                      <button className="flex items-center gap-3 hover:text-yellow-400 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                        <span className="text-lg">{54 + i * 18}</span>
                      </button>
                      <button className="flex items-center gap-3 hover:text-yellow-400 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span className="text-lg">{1847 + i * 234}</span>
                      </button>
                    </div>
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
