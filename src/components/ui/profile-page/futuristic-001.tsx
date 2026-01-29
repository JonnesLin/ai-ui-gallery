export default function FuturisticProfilePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Cover with Grid */}
        <div className="relative h-64 rounded-2xl overflow-hidden mb-8" style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%), repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
        }}>
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(90deg, rgba(66, 153, 225, 0.1) 1px, transparent 1px), linear-gradient(rgba(66, 153, 225, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
          <div className="absolute bottom-4 right-4 flex gap-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: `${i * 200}ms` }}></div>
            ))}
          </div>
        </div>

        {/* Profile Header */}
        <div className="relative -mt-32 mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="relative">
              <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 border-4 border-black shadow-2xl shadow-cyan-500/50"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-black"></div>
            </div>
            <div className="flex-1 md:mt-24">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Alex Sterling
                  </h1>
                  <p className="text-cyan-400 font-mono">@alex_sterling_2077</p>
                </div>
                <div className="flex gap-3">
                  <button className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                    CONNECT
                  </button>
                  <button className="px-6 py-2.5 border border-cyan-500/50 rounded-lg font-medium hover:bg-cyan-500/10 transition-all">
                    MESSAGE
                  </button>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-2xl border-l-2 border-cyan-500 pl-4">
                Neural interface designer | Building the future of human-computer interaction | Quantum computing enthusiast
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 text-cyan-400 bg-cyan-950/50 px-3 py-1.5 rounded-lg border border-cyan-900">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span>Neo Tokyo</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400 bg-blue-950/50 px-3 py-1.5 rounded-lg border border-blue-900">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                  <span>alexsterling.io</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400 bg-purple-950/50 px-3 py-1.5 rounded-lg border border-purple-900">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
                  <span>Member since 2077</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Neural Links', value: '1.2M', color: 'cyan' },
            { label: 'Followers', value: '847K', color: 'blue' },
            { label: 'Following', value: '2.3K', color: 'purple' },
            { label: 'Reputation', value: '9.8', color: 'green' }
          ].map((stat, i) => (
            <div key={i} className={`relative rounded-xl p-6 border border-${stat.color}-900 bg-gradient-to-br from-${stat.color}-950/50 to-black overflow-hidden group hover:border-${stat.color}-500 transition-all`}>
              <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              <div className={`text-3xl font-bold mb-1 text-${stat.color}-400`}>{stat.value}</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
              <div className={`absolute top-2 right-2 w-8 h-8 border-2 border-${stat.color}-500/30 rounded-lg`}></div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-800 mb-8">
          <div className="flex gap-8">
            {['NEURAL FEED', 'PROJECTS', 'TIMELINE', 'DATA'].map((tab, i) => (
              <button key={i} className={`pb-4 font-mono text-sm tracking-wider ${
                i === 0
                  ? 'border-b-2 border-cyan-500 text-cyan-400'
                  : 'border-b-2 border-transparent text-gray-500 hover:text-gray-300'
              } transition-colors relative group`}>
                {tab}
                {i === 0 && (
                  <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="relative rounded-xl p-6 border border-gray-800 bg-gradient-to-br from-gray-900 to-black hover:border-cyan-500/50 transition-all group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex gap-4 relative">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                  i % 3 === 0 ? 'from-cyan-500 to-blue-600' : i % 3 === 1 ? 'from-purple-500 to-pink-600' : 'from-green-500 to-emerald-600'
                } flex-shrink-0 shadow-lg shadow-cyan-500/20`}></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-white">Alex Sterling</span>
                    <span className="text-cyan-400 text-sm font-mono">@alex_sterling_2077</span>
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-500 text-sm font-mono">{i + 1}h ago</span>
                    <div className="ml-auto flex gap-1">
                      {Array.from({ length: 3 }).map((_, j) => (
                        <div key={j} className="w-1 h-1 bg-cyan-500/50 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {i === 0 && "Just deployed the new neural interface protocol. Response times improved by 300%. The future is now."}
                    {i === 1 && "Working on quantum entanglement visualization. Some incredible breakthroughs happening in real-time."}
                    {i === 2 && "Remember: The best technology is invisible. It should feel like magic, not machinery."}
                  </p>
                  <div className="flex gap-8 text-gray-500 text-sm font-mono">
                    <button className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span>{42 + i * 12}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-green-400 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span>{18 + i * 5}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-pink-400 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span>{234 + i * 31}</span>
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
