export default function NeonProfilePage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-5xl mx-auto">
        {/* Cover with Neon Glow */}
        <div className="relative h-64 bg-black overflow-hidden border-b-4 border-pink-500">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20"></div>
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-pink-500 rounded-lg animate-pulse" style={{ boxShadow: '0 0 30px rgba(236, 72, 153, 0.6)' }}></div>
          <div className="absolute bottom-10 right-20 w-24 h-24 border-4 border-cyan-500 rounded-full" style={{ boxShadow: '0 0 30px rgba(34, 211, 238, 0.6)' }}></div>
        </div>

        {/* Profile Section */}
        <div className="relative -mt-24 px-6 py-8">
          <div className="flex flex-col md:flex-row gap-6 items-start mb-8">
            <div className="relative">
              <div className="w-40 h-40 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 border-4 border-pink-500" style={{ boxShadow: '0 0 40px rgba(236, 72, 153, 0.8)' }}></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-cyan-500 rounded-full border-4 border-gray-950 animate-pulse" style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.8)' }}></div>
            </div>
            <div className="flex-1 md:mt-16">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-4xl font-bold mb-2" style={{
                    color: '#ec4899',
                    textShadow: '0 0 20px rgba(236, 72, 153, 0.8), 0 0 40px rgba(236, 72, 153, 0.4)'
                  }}>
                    Neon Nova
                  </h1>
                  <p className="text-cyan-400 text-lg" style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.6)' }}>
                    @neonnova
                  </p>
                </div>
                <div className="flex gap-3">
                  <button className="px-6 py-2.5 bg-pink-500 text-white font-bold border-2 border-pink-500 hover:bg-pink-600 transition-all" style={{ boxShadow: '0 0 20px rgba(236, 72, 153, 0.6)' }}>
                    FOLLOW
                  </button>
                  <button className="px-6 py-2.5 bg-transparent border-2 border-cyan-500 text-cyan-400 font-bold hover:bg-cyan-500/10 transition-all" style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.4)' }}>
                    MESSAGE
                  </button>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-2xl leading-relaxed border-l-4 border-purple-500 pl-4" style={{ borderColor: '#a855f7', boxShadow: '-4px 0 20px rgba(168, 85, 247, 0.3)' }}>
                Digital artist • Neon aesthetics • Cyberpunk culture • Creating glowing art in the digital void • Tokyo • Seoul • LA
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 px-3 py-1.5 border-2 border-pink-500 text-pink-400" style={{ boxShadow: '0 0 15px rgba(236, 72, 153, 0.4)' }}>
                  <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ boxShadow: '0 0 8px rgba(236, 72, 153, 0.8)' }}></div>
                  <span>Tokyo, Japan</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 border-2 border-cyan-500 text-cyan-400" style={{ boxShadow: '0 0 15px rgba(34, 211, 238, 0.4)' }}>
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ boxShadow: '0 0 8px rgba(34, 211, 238, 0.8)' }}></div>
                  <span>neonnova.art</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 border-2 border-purple-500 text-purple-400" style={{ boxShadow: '0 0 15px rgba(168, 85, 247, 0.4)' }}>
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ boxShadow: '0 0 8px rgba(168, 85, 247, 0.8)' }}></div>
                  <span>Member since 2077</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'ARTWORKS', value: '1.2K', color: 'pink' },
              { label: 'FOLLOWERS', value: '247K', color: 'cyan' },
              { label: 'FOLLOWING', value: '892', color: 'purple' },
              { label: 'LIKES', value: '3.4M', color: 'fuchsia' }
            ].map((stat, i) => (
              <div key={i} className={`bg-black p-6 border-2 border-${stat.color}-500`} style={{
                boxShadow: `0 0 20px ${
                  stat.color === 'pink' ? 'rgba(236, 72, 153, 0.4)' :
                  stat.color === 'cyan' ? 'rgba(34, 211, 238, 0.4)' :
                  stat.color === 'purple' ? 'rgba(168, 85, 247, 0.4)' :
                  'rgba(217, 70, 239, 0.4)'
                }`
              }}>
                <div className={`text-3xl font-bold mb-1 text-${stat.color}-400`} style={{
                  textShadow: `0 0 20px ${
                    stat.color === 'pink' ? 'rgba(236, 72, 153, 0.8)' :
                    stat.color === 'cyan' ? 'rgba(34, 211, 238, 0.8)' :
                    stat.color === 'purple' ? 'rgba(168, 85, 247, 0.8)' :
                    'rgba(217, 70, 239, 0.8)'
                  }`
                }}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="border-b-2 border-pink-500 mb-8" style={{ boxShadow: '0 2px 20px rgba(236, 72, 153, 0.3)' }}>
            <div className="flex gap-8">
              {['GALLERY', 'NFTS', 'ABOUT', 'SHOP'].map((tab, i) => (
                <button key={i} className={`pb-3 font-bold text-sm tracking-wider transition-all ${
                  i === 0
                    ? 'text-pink-400 border-b-4 border-pink-500 -mb-0.5'
                    : 'text-gray-500 hover:text-gray-300'
                }`} style={i === 0 ? { textShadow: '0 0 15px rgba(236, 72, 153, 0.8)' } : {}}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="space-y-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className={`bg-black p-6 border-2 ${
                i % 3 === 0 ? 'border-pink-500' : i % 3 === 1 ? 'border-cyan-500' : 'border-purple-500'
              } hover:shadow-2xl transition-all`} style={{
                boxShadow: `0 0 20px ${
                  i % 3 === 0 ? 'rgba(236, 72, 153, 0.3)' : i % 3 === 1 ? 'rgba(34, 211, 238, 0.3)' : 'rgba(168, 85, 247, 0.3)'
                }`
              }}>
                <div className="flex gap-4">
                  <div className={`w-14 h-14 flex-shrink-0 bg-gradient-to-br ${
                    i % 3 === 0 ? 'from-pink-500 to-purple-600' : i % 3 === 1 ? 'from-cyan-500 to-blue-600' : 'from-purple-500 to-pink-600'
                  } border-2 ${
                    i % 3 === 0 ? 'border-pink-500' : i % 3 === 1 ? 'border-cyan-500' : 'border-purple-500'
                  }`} style={{
                    boxShadow: `0 0 20px ${
                      i % 3 === 0 ? 'rgba(236, 72, 153, 0.6)' : i % 3 === 1 ? 'rgba(34, 211, 238, 0.6)' : 'rgba(168, 85, 247, 0.6)'
                    }`
                  }}></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-bold text-pink-400" style={{ textShadow: '0 0 10px rgba(236, 72, 153, 0.6)' }}>
                        Neon Nova
                      </span>
                      <span className="text-cyan-400 text-sm">@neonnova</span>
                      <span className="text-gray-700">•</span>
                      <span className="text-gray-500 text-sm">{i + 1}h ago</span>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {i === 0 && "New artwork drop tonight at midnight! 'Electric Dreams' - a collection exploring the intersection of light and digital consciousness. Get ready for some serious glow. ⚡✨"}
                      {i === 1 && "The city never sleeps, and neither does the neon. Just finished a 48-hour creative marathon. Sometimes the best art comes from the void between day and night. 🌃💫"}
                      {i === 2 && "Remember: In a world of darkness, be the neon light. Your glow attracts your tribe. Keep shining bright, digital warriors! 💜🔮"}
                    </p>
                    <div className="h-48 bg-gradient-to-br from-pink-900/40 via-purple-900/40 to-cyan-900/40 mb-4 border-2 border-pink-500/30" style={{ boxShadow: 'inset 0 0 40px rgba(236, 72, 153, 0.2)' }}></div>
                    <div className="flex gap-8 text-sm font-bold">
                      <button className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(0 0 4px rgba(236, 72, 153, 0.6))' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>{234 + i * 67}</span>
                      </button>
                      <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(0 0 4px rgba(34, 211, 238, 0.6))' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <span>{89 + i * 23}</span>
                      </button>
                      <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(0 0 4px rgba(168, 85, 247, 0.6))' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span>{1847 + i * 342}</span>
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
