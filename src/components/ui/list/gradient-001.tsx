export default function GradientList() {
  const items = [
    { id: 1, title: 'Morning Routine', subtitle: 'Start your day right', gradient: 'from-orange-400 to-pink-600', icon: '🌅' },
    { id: 2, title: 'Workout Session', subtitle: 'Stay fit and healthy', gradient: 'from-green-400 to-blue-600', icon: '💪' },
    { id: 3, title: 'Creative Work', subtitle: 'Design and innovation', gradient: 'from-purple-400 to-pink-600', icon: '🎨' },
    { id: 4, title: 'Evening Relax', subtitle: 'Unwind and recharge', gradient: 'from-blue-400 to-purple-600', icon: '🌙' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Gradient Border Cards */}
        <section>
          <h2 className="text-white font-bold mb-6 text-2xl">Daily Activities</h2>
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.id} className="group cursor-pointer">
                <div className={`p-[2px] rounded-2xl bg-gradient-to-r ${item.gradient} hover:p-[3px] transition-all`}>
                  <div className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800/90 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center text-2xl`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                        <p className="text-gray-400 text-sm mt-1">{item.subtitle}</p>
                      </div>
                      <svg className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Gradient Background List */}
        <section>
          <h2 className="text-white font-bold mb-6 text-2xl">Featured Items</h2>
          <ul className="space-y-3">
            {items.slice(0, 3).map((item) => (
              <li
                key={item.id}
                className={`bg-gradient-to-r ${item.gradient} rounded-xl p-5 hover:scale-[1.02] transition-transform cursor-pointer shadow-lg`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h3 className="text-white font-bold">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.subtitle}</p>
                    </div>
                  </div>
                  <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    View
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Nested Gradient List */}
        <section>
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-6 shadow-2xl">
            <h3 className="text-white font-bold mb-4 text-xl">Categories</h3>
            <ul className="space-y-3">
              <li className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all">
                <div className="text-white font-semibold mb-3 flex items-center gap-2">
                  <span>📚</span> Learning Path
                </div>
                <ul className="space-y-2 pl-6 border-l-2 border-white/30">
                  <li className="text-white/90 text-sm hover:text-white transition-colors cursor-pointer py-1">
                    Fundamentals
                  </li>
                  <li className="text-white/90 text-sm hover:text-white transition-colors cursor-pointer py-1">
                    Advanced Concepts
                  </li>
                  <li className="text-white/90 text-sm hover:text-white transition-colors cursor-pointer py-1">
                    Expert Level
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* Gradient Text List */}
        <section>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
            <h3 className="text-white font-bold mb-4 text-xl">Quick Links</h3>
            <ul className="space-y-3">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className={`font-medium bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent group-hover:opacity-80 transition-opacity`}>
                      {item.title}
                    </span>
                  </div>
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.gradient}`} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Multi-gradient Progress List */}
        <section>
          <h2 className="text-white font-bold mb-6 text-2xl">Progress Tracker</h2>
          <ul className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 space-y-4">
            {items.map((item, idx) => (
              <li key={item.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-white font-medium">{item.title}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{(idx + 1) * 25}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${item.gradient} rounded-full transition-all duration-300`}
                    style={{ width: `${(idx + 1) * 25}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
