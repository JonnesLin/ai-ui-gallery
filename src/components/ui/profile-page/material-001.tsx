export default function MaterialProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Cover */}
        <div className="h-56 bg-blue-600 shadow-lg"></div>

        {/* Profile Section */}
        <div className="bg-white shadow-lg">
          <div className="relative -mt-20 px-6 py-6">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-40 h-40 rounded-full bg-blue-500 shadow-lg"></div>
              <div className="flex-1 md:mt-16">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h1 className="text-3xl font-medium text-gray-900 mb-1">Sarah Anderson</h1>
                    <p className="text-gray-600">@sarahanderson</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded shadow-md hover:shadow-lg hover:bg-blue-700 transition-all">
                      Follow
                    </button>
                    <button className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded shadow-md hover:shadow-lg hover:bg-gray-50 transition-all">
                      Message
                    </button>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 max-w-2xl">
                  Product Designer at Google • Material Design advocate • Creating intuitive and beautiful user experiences
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>Mountain View, CA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                    <span className="text-blue-600">sarahanderson.design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>Joined May 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
          {[
            { label: 'Projects', value: '127', color: 'blue' },
            { label: 'Followers', value: '34.2k', color: 'green' },
            { label: 'Following', value: '1.8k', color: 'purple' },
            { label: 'Likes', value: '8.9k', color: 'red' }
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className={`text-3xl font-medium mb-1 text-${stat.color}-600`}>{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white shadow-md">
          <div className="flex px-6 border-b border-gray-200">
            {['Posts', 'Work', 'About', 'Media'].map((tab, i) => (
              <button key={i} className={`px-6 py-4 font-medium transition-colors relative ${
                i === 0
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}>
                {tab}
                {i === 0 && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="p-6 space-y-4 pb-12">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white rounded shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="p-6">
                <div className="flex gap-4">
                  <div className={`w-12 h-12 rounded-full flex-shrink-0 ${
                    i % 3 === 0 ? 'bg-blue-500' : i % 3 === 1 ? 'bg-green-500' : 'bg-purple-500'
                  }`}></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-gray-900">Sarah Anderson</span>
                      <span className="text-gray-500 text-sm">@sarahanderson</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500 text-sm">{i + 2}h ago</span>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {i === 0 && "Just published a new article on implementing Material Design principles in modern web applications. Check it out!"}
                      {i === 1 && "Excited to share our latest design system update. The new components follow Material Design 3 guidelines."}
                      {i === 2 && "Working on a fascinating project exploring depth and elevation in UI design. Shadows matter more than you think."}
                      {i === 3 && "Remember: Good design is invisible. The best interfaces guide users without them noticing the design itself."}
                    </p>
                    {i % 2 === 0 && (
                      <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded mb-4 shadow-md"></div>
                    )}
                    <div className="flex gap-6 text-gray-600 text-sm">
                      <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>{32 + i * 8}</span>
                      </button>
                      <button className="flex items-center gap-2 hover:text-green-600 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <span>{14 + i * 3}</span>
                      </button>
                      <button className="flex items-center gap-2 hover:text-red-600 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span>{156 + i * 23}</span>
                      </button>
                      <button className="flex items-center gap-2 hover:text-gray-900 transition-colors ml-auto">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </button>
                    </div>
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
