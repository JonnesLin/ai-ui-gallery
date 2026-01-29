export default function NatureList() {
  const items = [
    { id: 1, title: 'Morning Dew Collection', subtitle: 'Fresh and organic', icon: '🌿', color: 'from-green-50 to-emerald-50' },
    { id: 2, title: 'Forest Path Series', subtitle: 'Natural and earthy', icon: '🌲', color: 'from-teal-50 to-green-50' },
    { id: 3, title: 'Mountain Breeze Line', subtitle: 'Clean and crisp', icon: '🏔️', color: 'from-blue-50 to-cyan-50' },
    { id: 4, title: 'Ocean Wave Edition', subtitle: 'Calm and flowing', icon: '🌊', color: 'from-cyan-50 to-blue-50' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Organic Rounded List */}
        <section>
          <h2 className="text-green-800 font-serif text-3xl mb-6">Nature's Collection</h2>
          <ul className="bg-white/70 backdrop-blur-sm rounded-[2rem] p-4 shadow-lg border border-green-200/50 space-y-3">
            {items.map((item) => (
              <li
                key={item.id}
                className={`bg-gradient-to-r ${item.color} rounded-[1.5rem] p-6 hover:shadow-md transition-all cursor-pointer border border-green-100`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-sm">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-green-900 font-medium text-lg">{item.title}</h3>
                    <p className="text-green-700/70 text-sm mt-1">{item.subtitle}</p>
                  </div>
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Leaf Cards */}
        <section>
          <h2 className="text-green-800 font-serif text-3xl mb-6">Featured Items</h2>
          <ul className="space-y-4">
            {items.slice(0, 3).map((item) => (
              <li
                key={item.id}
                className="relative bg-white/80 backdrop-blur-sm rounded-[2rem] p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer border border-green-200/50 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200/20 to-transparent rounded-bl-full" />
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-4xl shadow-md border-2 border-white`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-green-900 font-semibold text-xl">{item.title}</h3>
                      <p className="text-green-700/70 text-sm mt-1">{item.subtitle}</p>
                    </div>
                  </div>
                  <button className="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-full text-sm font-medium transition-colors shadow-md">
                    Explore
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Nested Nature */}
        <section>
          <div className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-6 shadow-lg border border-teal-200/50">
            <h3 className="text-green-800 font-serif text-2xl mb-5 flex items-center gap-2">
              <span>🌳</span> Ecosystems
            </h3>
            <ul className="space-y-3">
              <li className="bg-gradient-to-r from-green-50 to-teal-50 rounded-[1.5rem] p-5 border border-green-100">
                <div className="text-green-900 font-medium mb-3 flex items-center gap-2">
                  <span>🌱</span> Forest Habitat
                </div>
                <ul className="space-y-2 pl-8 border-l-2 border-green-300">
                  <li className="text-green-700 text-sm hover:text-green-900 cursor-pointer py-1 transition-colors">
                    Ancient Trees
                  </li>
                  <li className="text-green-700 text-sm hover:text-green-900 cursor-pointer py-1 transition-colors">
                    Wildlife Sanctuary
                  </li>
                  <li className="text-green-700 text-sm hover:text-green-900 cursor-pointer py-1 transition-colors">
                    Natural Springs
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* Organic Tags */}
        <section>
          <h2 className="text-green-800 font-serif text-3xl mb-6">Explore Categories</h2>
          <ul className="flex flex-wrap gap-3">
            {items.map((item) => (
              <li
                key={item.id}
                className={`bg-gradient-to-r ${item.color} px-6 py-3 rounded-full hover:shadow-lg transition-all cursor-pointer border border-green-200`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-green-900 font-medium">{item.title.split(' ')[0]}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Growth Progress List */}
        <section>
          <h2 className="text-green-800 font-serif text-3xl mb-6">Growth Tracker</h2>
          <ul className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-6 shadow-lg border border-green-200/50 space-y-5">
            {items.map((item, idx) => (
              <li key={item.id}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-green-900 font-medium">{item.title}</span>
                  </div>
                  <span className="text-green-700 text-sm">{(idx + 1) * 25}%</span>
                </div>
                <div className="w-full bg-green-100 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-400 to-teal-500 rounded-full transition-all duration-300"
                    style={{ width: `${(idx + 1) * 25}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Seasonal Grid */}
        <section>
          <h2 className="text-green-800 font-serif text-3xl mb-6">Seasonal Selection</h2>
          <ul className="grid grid-cols-2 gap-4">
            {items.map((item) => (
              <li
                key={item.id}
                className={`bg-gradient-to-br ${item.color} rounded-[1.5rem] p-6 hover:shadow-lg transition-all cursor-pointer border border-green-200 text-center`}
              >
                <div className="text-5xl mb-3">{item.icon}</div>
                <h4 className="text-green-900 font-semibold text-lg mb-1">{item.title.split(' ')[0]}</h4>
                <p className="text-green-700/70 text-sm">{item.subtitle}</p>
                <div className="mt-4 flex justify-center gap-1.5">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-green-500 rounded-full" />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Botanical Checklist */}
        <section>
          <div className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-6 shadow-lg border border-green-200/50">
            <h3 className="text-green-800 font-serif text-2xl mb-5">Garden Plan</h3>
            <ul className="space-y-3">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-4 p-3 hover:bg-green-50 rounded-[1rem] cursor-pointer group transition-all"
                >
                  <div className="w-6 h-6 border-2 border-green-500 rounded-full group-hover:bg-green-100 transition-all flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="flex-1 flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-green-900 font-medium">{item.title}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
