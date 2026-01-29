export default function NatureProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-5xl mx-auto">
        {/* Cover - Nature Scene */}
        <div className="relative h-72 bg-gradient-to-b from-green-400 via-green-500 to-green-600 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-800 to-transparent"></div>
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className={`absolute bottom-0 w-2 bg-green-900/40`} style={{
                left: `${i * 12 + 5}%`,
                height: `${Math.random() * 80 + 40}px`,
                transform: `rotate(${Math.random() * 10 - 5}deg)`
              }}></div>
            ))}
          </div>
          <div className="absolute top-10 right-20 w-24 h-24 bg-yellow-300 rounded-full opacity-80"></div>
        </div>

        {/* Profile Section */}
        <div className="relative -mt-24 px-6 py-8">
          <div className="flex flex-col md:flex-row gap-6 items-start mb-8">
            <div className="relative">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-4 border-white shadow-xl shadow-green-900/20"></div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="flex-1 md:mt-16">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-green-900 mb-2">Olivia Green</h1>
                  <p className="text-green-700">@oliviagreen</p>
                </div>
                <div className="flex gap-3">
                  <button className="px-6 py-2.5 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors shadow-md shadow-green-600/30">
                    Follow
                  </button>
                  <button className="px-6 py-2.5 bg-white border-2 border-green-600 text-green-700 rounded-full font-medium hover:bg-green-50 transition-colors">
                    Message
                  </button>
                </div>
              </div>
              <p className="text-green-800 mb-6 max-w-2xl leading-relaxed">
                Environmental activist 🌱 Nature photographer 📷 Sustainability advocate ♻️ Connecting people with the natural world one photo at a time
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-green-700">
                <div className="flex items-center gap-2 bg-green-100 px-3 py-1.5 rounded-full">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Portland, Oregon</span>
                </div>
                <div className="flex items-center gap-2 bg-green-100 px-3 py-1.5 rounded-full">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  <span className="text-green-700 font-medium">oliviagreen.earth</span>
                </div>
                <div className="flex items-center gap-2 bg-green-100 px-3 py-1.5 rounded-full">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  <span>Carbon Neutral Profile</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Photos', value: '3.2k', icon: '🌲' },
              { label: 'Followers', value: '89.4k', icon: '🌿' },
              { label: 'Following', value: '2.1k', icon: '🍃' },
              { label: 'Trees Planted', value: '12k', icon: '🌱' }
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 border-2 border-green-200 hover:border-green-400 transition-colors shadow-sm">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-green-900 mb-1">{stat.value}</div>
                <div className="text-green-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-2xl shadow-sm border-2 border-green-200 mb-6">
            <div className="flex p-2 gap-2">
              {['Feed', 'Gallery', 'Stories', 'About'].map((tab, i) => (
                <button key={i} className={`flex-1 px-4 py-3 rounded-xl font-medium transition-all ${
                  i === 0
                    ? 'bg-green-600 text-white shadow-md shadow-green-600/30'
                    : 'text-green-700 hover:bg-green-50'
                }`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 shadow-sm border-2 border-green-200 hover:shadow-md transition-all">
                <div className="flex gap-4">
                  <div className={`w-14 h-14 rounded-full flex-shrink-0 bg-gradient-to-br ${
                    i % 3 === 0 ? 'from-green-400 to-green-600' : i % 3 === 1 ? 'from-emerald-400 to-emerald-600' : 'from-lime-400 to-lime-600'
                  } flex items-center justify-center text-white text-xl`}>
                    {i % 3 === 0 ? '🌲' : i % 3 === 1 ? '🌸' : '🦋'}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-green-900">Olivia Green</span>
                      <span className="text-green-600 text-sm">@oliviagreen</span>
                      <span className="text-green-400">•</span>
                      <span className="text-green-600 text-sm">{i + 2}h ago</span>
                    </div>
                    <p className="text-green-800 mb-4 leading-relaxed">
                      {i === 0 && "Spent the morning in the redwood forest. The peace and majesty of these ancient trees never fails to humble me. We must protect our natural heritage. 🌲✨"}
                      {i === 1 && "Just launched a new initiative to plant 10,000 trees this year! Every share and follow helps fund more plantings. Together we can make a difference. 🌱💚"}
                      {i === 2 && "The wildflower bloom this season is absolutely spectacular. Nature's artwork is unmatched. Remember to tread lightly and leave no trace. 🌸🦋"}
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-4 rounded-2xl overflow-hidden">
                      <div className="aspect-square bg-gradient-to-br from-green-300 to-green-500"></div>
                      <div className="aspect-square bg-gradient-to-br from-emerald-300 to-emerald-500"></div>
                    </div>
                    <div className="flex gap-6 text-green-600 text-sm">
                      <button className="flex items-center gap-2 hover:text-green-700 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>{126 + i * 34}</span>
                      </button>
                      <button className="flex items-center gap-2 hover:text-green-700 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <span>{47 + i * 15}</span>
                      </button>
                      <button className="flex items-center gap-2 hover:text-green-700 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span>{892 + i * 127}</span>
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
