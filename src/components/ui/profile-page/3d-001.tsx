export default function ThreeDProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Cover Image with Depth */}
        <div
          className="h-64 md:h-80 rounded-t-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 relative overflow-hidden"
          style={{
            boxShadow: `
              0 10px 30px -5px rgba(0, 0, 0, 0.3),
              0 20px 60px -10px rgba(0, 0, 0, 0.2),
              0 30px 90px -15px rgba(0, 0, 0, 0.1)
            `
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* Main Profile Card */}
        <div
          className="bg-white rounded-b-3xl relative -mt-24 pt-28 pb-8 px-6 md:px-10"
          style={{
            boxShadow: `
              0 15px 40px -10px rgba(0, 0, 0, 0.25),
              0 30px 80px -20px rgba(0, 0, 0, 0.15),
              0 50px 120px -30px rgba(0, 0, 0, 0.1)
            `,
            transform: 'translateZ(0)'
          }}
        >
          {/* Avatar with 3D Effect */}
          <div className="absolute -top-16 left-6 md:left-10">
            <div
              className="w-32 h-32 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 border-4 border-white"
              style={{
                boxShadow: `
                  0 8px 20px -4px rgba(139, 92, 246, 0.4),
                  0 16px 40px -8px rgba(139, 92, 246, 0.3),
                  0 24px 60px -12px rgba(0, 0, 0, 0.2)
                `,
                transform: 'translateZ(50px)'
              }}
            ></div>
          </div>

          {/* Profile Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Alexandra Mitchell
              </h1>
              <p className="text-lg text-gray-600 mb-4">@alexandra_3d</p>
              <p className="text-gray-700 leading-relaxed max-w-2xl">
                3D Artist & Creative Director specializing in immersive digital experiences.
                Crafting depth and dimension in the digital realm.
              </p>
            </div>

            {/* Action Buttons with Elevation */}
            <div className="flex gap-3">
              <button
                className="px-6 py-3 bg-gradient-to-br from-violet-600 to-purple-600 text-white font-medium rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all"
                style={{
                  boxShadow: `
                    0 4px 12px -2px rgba(139, 92, 246, 0.5),
                    0 8px 24px -4px rgba(139, 92, 246, 0.3),
                    0 12px 36px -6px rgba(0, 0, 0, 0.2)
                  `,
                  transform: 'translateZ(20px)'
                }}
              >
                Follow
              </button>
              <button
                className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-all"
                style={{
                  boxShadow: `
                    0 4px 12px -2px rgba(0, 0, 0, 0.1),
                    0 8px 24px -4px rgba(0, 0, 0, 0.08)
                  `
                }}
              >
                Message
              </button>
            </div>
          </div>

          {/* Info Pills */}
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              { icon: '📍', text: 'Los Angeles, CA' },
              { icon: '🔗', text: 'alexandra3d.studio' },
              { icon: '📅', text: 'Joined March 2021' }
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg text-gray-700 text-sm"
                style={{
                  boxShadow: `
                    0 2px 6px -1px rgba(0, 0, 0, 0.1),
                    0 4px 12px -2px rgba(0, 0, 0, 0.06)
                  `
                }}
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Stats Grid with Elevated Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Projects', value: '243', color: 'from-violet-500 to-purple-600' },
              { label: 'Followers', value: '52.8k', color: 'from-blue-500 to-cyan-600' },
              { label: 'Following', value: '2.1k', color: 'from-pink-500 to-rose-600' },
              { label: 'Likes', value: '127k', color: 'from-orange-500 to-amber-600' }
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 text-center group cursor-pointer transition-all hover:-translate-y-1"
                style={{
                  boxShadow: `
                    0 6px 16px -4px rgba(0, 0, 0, 0.15),
                    0 12px 32px -8px rgba(0, 0, 0, 0.1),
                    0 18px 48px -12px rgba(0, 0, 0, 0.08)
                  `,
                  transform: 'translateZ(30px)'
                }}
              >
                <div className={`text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs Section */}
        <div
          className="mt-8 bg-white rounded-2xl overflow-hidden"
          style={{
            boxShadow: `
              0 8px 20px -4px rgba(0, 0, 0, 0.15),
              0 16px 40px -8px rgba(0, 0, 0, 0.1)
            `
          }}
        >
          <div className="flex border-b border-gray-200">
            {['Posts', 'Gallery', 'About', 'Media'].map((tab, i) => (
              <button
                key={i}
                className={`flex-1 px-6 py-4 font-medium transition-all relative ${
                  i === 0
                    ? 'text-violet-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab}
                {i === 0 && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-purple-600"
                    style={{
                      boxShadow: '0 -2px 8px rgba(139, 92, 246, 0.4)'
                    }}
                  ></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Activity Feed with 3D Cards */}
        <div className="mt-8 space-y-6 pb-12">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:scale-[1.01]"
              style={{
                boxShadow: `
                  0 8px 20px -4px rgba(0, 0, 0, 0.12),
                  0 16px 40px -8px rgba(0, 0, 0, 0.08),
                  0 24px 60px -12px rgba(0, 0, 0, 0.06)
                `,
                transform: 'translateZ(20px)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="p-6 md:p-8">
                <div className="flex gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex-shrink-0 bg-gradient-to-br ${
                      i % 3 === 0 ? 'from-violet-500 to-purple-600' :
                      i % 3 === 1 ? 'from-blue-500 to-cyan-600' :
                      'from-pink-500 to-rose-600'
                    }`}
                    style={{
                      boxShadow: `
                        0 4px 10px -2px rgba(139, 92, 246, 0.3),
                        0 8px 20px -4px rgba(0, 0, 0, 0.1)
                      `
                    }}
                  ></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-900">Alexandra Mitchell</span>
                      <span className="text-gray-500 text-sm">@alexandra_3d</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500 text-sm">{i + 2}h ago</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {i === 0 && "Exploring new dimensions in digital art. The key to great 3D design is understanding how light, shadow, and depth work together to create presence."}
                  {i === 1 && "Just wrapped up an amazing project featuring multi-layered perspectives and dynamic depth effects. Love pushing the boundaries of visual design!"}
                  {i === 2 && "Working with depth and elevation in UI design creates more engaging and immersive user experiences. Every shadow tells a story."}
                  {i === 3 && "Remember: Great 3D design isn't about showing off effects - it's about creating intuitive spatial relationships that guide the user naturally."}
                </p>

                {i % 2 === 0 && (
                  <div
                    className={`h-64 rounded-xl mb-4 bg-gradient-to-br ${
                      i === 0 ? 'from-violet-400 via-purple-500 to-indigo-600' : 'from-blue-400 via-cyan-500 to-teal-600'
                    }`}
                    style={{
                      boxShadow: `
                        0 8px 20px -4px rgba(139, 92, 246, 0.3),
                        0 16px 40px -8px rgba(139, 92, 246, 0.2),
                        0 24px 60px -12px rgba(0, 0, 0, 0.15)
                      `
                    }}
                  ></div>
                )}

                {/* Interaction Buttons */}
                <div className="flex items-center gap-6 text-gray-600 text-sm">
                  <button
                    className="flex items-center gap-2 hover:text-violet-600 transition-colors"
                    style={{
                      transform: 'translateZ(10px)'
                    }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>{42 + i * 12}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span>{18 + i * 5}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-pink-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>{203 + i * 34}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-gray-900 transition-colors ml-auto">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Action Button */}
        <button
          className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-violet-600 to-purple-600 text-white rounded-2xl flex items-center justify-center hover:from-violet-700 hover:to-purple-700 transition-all hover:scale-110"
          style={{
            boxShadow: `
              0 8px 20px -4px rgba(139, 92, 246, 0.5),
              0 16px 40px -8px rgba(139, 92, 246, 0.3),
              0 24px 60px -12px rgba(0, 0, 0, 0.2)
            `,
            transform: 'translateZ(100px)'
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  );
}
