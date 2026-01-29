export default function MonochromeProfilePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Cover */}
        <div className="h-64 bg-gradient-to-r from-gray-800 via-gray-900 to-black"></div>

        {/* Profile Section */}
        <div className="relative -mt-24 px-6 py-8">
          <div className="flex flex-col md:flex-row gap-6 items-start mb-8">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-gray-600 to-gray-900 border-4 border-white shadow-2xl"></div>
            <div className="flex-1 md:mt-16">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">Marcus Bennett</h1>
                  <p className="text-gray-600">@marcusbennett</p>
                </div>
                <div className="flex gap-3">
                  <button className="px-6 py-2.5 bg-black text-white font-medium hover:bg-gray-900 transition-colors">
                    Follow
                  </button>
                  <button className="px-6 py-2.5 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-colors">
                    Message
                  </button>
                </div>
              </div>
              <p className="text-gray-800 mb-6 max-w-2xl leading-relaxed">
                Black & white photographer • Minimalist artist • Finding beauty in contrast and shadow • Tokyo • Berlin • NYC
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-900 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Tokyo, Japan</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-900 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </div>
                  <span>marcusbennett.photo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-900 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Joined August 2018</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Photos', value: '2,847' },
              { label: 'Followers', value: '127k' },
              { label: 'Following', value: '892' },
              { label: 'Exhibitions', value: '34' }
            ].map((stat, i) => (
              <div key={i} className={`p-6 border-4 ${
                i % 2 === 0 ? 'bg-black text-white border-black' : 'bg-white text-black border-black'
              }`}>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm uppercase tracking-wider opacity-70">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="border-b-4 border-black mb-8">
            <div className="flex gap-8">
              {['Gallery', 'Series', 'About', 'Contact'].map((tab, i) => (
                <button key={i} className={`pb-3 font-bold text-sm uppercase tracking-wider ${
                  i === 0
                    ? 'border-b-4 border-black -mb-1'
                    : 'text-gray-500 hover:text-black'
                } transition-colors`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="space-y-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className={`p-6 border-4 ${
                i % 2 === 0 ? 'bg-white border-black' : 'bg-black text-white border-black'
              }`}>
                <div className="flex gap-6">
                  <div className={`w-16 h-16 flex-shrink-0 ${
                    i % 2 === 0 ? 'bg-black' : 'bg-white'
                  }`}></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-bold text-lg">Marcus Bennett</span>
                      <span className={i % 2 === 0 ? 'text-gray-600' : 'text-gray-400'}>@marcusbennett</span>
                      <span className={i % 2 === 0 ? 'text-gray-400' : 'text-gray-600'}>•</span>
                      <span className={i % 2 === 0 ? 'text-gray-600' : 'text-gray-400'}>{i + 1}d ago</span>
                    </div>
                    <p className={`mb-6 leading-relaxed ${i % 2 === 0 ? 'text-gray-900' : 'text-gray-100'}`}>
                      {i === 0 && "New series 'Urban Shadows' now live. Exploring the interplay of light and darkness in modern cityscapes. Pure monochrome, pure emotion."}
                      {i === 1 && "Sometimes the absence of color reveals more truth than all the hues in the spectrum. Black and white photography strips away distraction."}
                      {i === 2 && "Exhibition opening next week in Berlin. 50 pieces from my latest collection. Join me in celebrating the timeless art of monochrome."}
                    </p>
                    <div className={`grid grid-cols-2 gap-2 mb-6`}>
                      <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-900"></div>
                      <div className="aspect-square bg-gradient-to-br from-gray-300 to-gray-500"></div>
                    </div>
                    <div className={`flex gap-8 text-sm font-medium ${i % 2 === 0 ? 'text-gray-700' : 'text-gray-300'}`}>
                      <button className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>{84 + i * 23}</span>
                      </button>
                      <button className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <span>{34 + i * 12}</span>
                      </button>
                      <button className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span>{542 + i * 89}</span>
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
