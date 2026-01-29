export default function PastelList() {
  const items = [
    { id: 1, title: 'Sweet Dreams Collection', subtitle: 'Cozy and comfortable', icon: '🌸', color: 'bg-pink-100' },
    { id: 2, title: 'Cloud Nine Series', subtitle: 'Light and airy designs', icon: '☁️', color: 'bg-blue-100' },
    { id: 3, title: 'Mint Fresh Ideas', subtitle: 'Clean and refreshing', icon: '🍃', color: 'bg-green-100' },
    { id: 4, title: 'Lavender Moments', subtitle: 'Calm and peaceful', icon: '💜', color: 'bg-purple-100' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Soft Rounded List */}
        <section>
          <h2 className="text-purple-400 font-semibold mb-6 text-2xl">Gentle Collections</h2>
          <ul className="bg-white/60 backdrop-blur-sm rounded-3xl p-2 space-y-2">
            {items.map((item) => (
              <li
                key={item.id}
                className={`${item.color} rounded-2xl p-5 hover:scale-[1.02] transition-transform cursor-pointer`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-800 font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{item.subtitle}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Bubble Cards */}
        <section>
          <h2 className="text-purple-400 font-semibold mb-6 text-2xl">Featured Items</h2>
          <ul className="space-y-4">
            {items.slice(0, 3).map((item) => (
              <li
                key={item.id}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 hover:shadow-lg hover:shadow-purple-200/50 transition-all cursor-pointer border border-purple-100"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-gray-800 font-semibold text-lg">{item.title}</h3>
                      <p className="text-gray-500 text-sm mt-1">{item.subtitle}</p>
                    </div>
                  </div>
                  <button className="bg-purple-100 hover:bg-purple-200 text-purple-600 px-4 py-2 rounded-full text-sm font-medium transition-colors">
                    View
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Nested Soft List */}
        <section>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-pink-100">
            <h3 className="text-purple-400 font-semibold mb-4 text-xl">Categories</h3>
            <ul className="space-y-3">
              <li className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-4">
                <div className="text-gray-800 font-semibold mb-3 flex items-center gap-2">
                  <span>🎨</span> Design Assets
                </div>
                <ul className="space-y-2 pl-6 border-l-2 border-purple-200">
                  <li className="text-gray-600 text-sm hover:text-gray-800 cursor-pointer py-1">
                    Illustrations
                  </li>
                  <li className="text-gray-600 text-sm hover:text-gray-800 cursor-pointer py-1">
                    Icons
                  </li>
                  <li className="text-gray-600 text-sm hover:text-gray-800 cursor-pointer py-1">
                    Patterns
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* Tag Style List */}
        <section>
          <h2 className="text-purple-400 font-semibold mb-6 text-2xl">Quick Links</h2>
          <ul className="flex flex-wrap gap-3">
            {items.map((item) => (
              <li
                key={item.id}
                className={`${item.color} px-6 py-3 rounded-full hover:shadow-md transition-all cursor-pointer border border-white`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-gray-700 font-medium">{item.title.split(' ')[0]}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Avatar List */}
        <section>
          <h2 className="text-purple-400 font-semibold mb-6 text-2xl">Team Members</h2>
          <ul className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 space-y-4">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between hover:bg-purple-50/50 rounded-2xl p-3 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className={`${item.color} w-12 h-12 rounded-full flex items-center justify-center text-xl border-2 border-white shadow-sm`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-gray-800 font-medium">{item.title.split(' ')[0]}</h3>
                    <p className="text-gray-500 text-sm">{item.subtitle.split(' ')[0]}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="w-8 h-8 bg-pink-100 hover:bg-pink-200 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </button>
                  <button className="w-8 h-8 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Progress List */}
        <section>
          <h2 className="text-purple-400 font-semibold mb-6 text-2xl">Progress Tracker</h2>
          <ul className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 space-y-5">
            {items.map((item, idx) => (
              <li key={item.id}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-gray-700 font-medium">{item.title}</span>
                  </div>
                  <span className="text-gray-500 text-sm">{(idx + 1) * 25}%</span>
                </div>
                <div className="w-full bg-purple-100 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.color.replace('100', '300')} transition-all duration-300`}
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
