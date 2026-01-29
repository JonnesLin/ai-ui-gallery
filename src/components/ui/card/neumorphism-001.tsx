export default function NeumorphismCards() {
  return (
    <div className="min-h-screen bg-[#e0e5ec] p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="rounded-3xl p-6 bg-[#e0e5ec] shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff]">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] p-1">
                <img
                  src="https://picsum.photos/seed/neu1/200/200"
                  alt="Avatar"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-700">Emma Wilson</h3>
              <p className="text-sm text-gray-500">UI/UX Designer</p>
              <div className="mt-6 flex gap-4">
                <button className="w-10 h-10 rounded-xl bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff] flex items-center justify-center hover:shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] transition-all">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-xl bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff] flex items-center justify-center hover:shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] transition-all">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-xl bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff] flex items-center justify-center hover:shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] transition-all">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="rounded-3xl p-6 bg-[#e0e5ec] shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff]">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Monthly Stats</h3>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl p-4 bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Downloads</span>
                  <span className="text-lg font-bold text-gray-700">2,847</span>
                </div>
              </div>
              <div className="rounded-2xl p-4 bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Revenue</span>
                  <span className="text-lg font-bold text-gray-700">$12,490</span>
                </div>
              </div>
              <div className="rounded-2xl p-4 bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Users</span>
                  <span className="text-lg font-bold text-gray-700">1,294</span>
                </div>
              </div>
            </div>
          </div>

          {/* Music Control Card */}
          <div className="rounded-3xl p-6 bg-[#e0e5ec] shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff]">
            <div className="w-full aspect-square rounded-2xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] p-3 mb-4">
              <img
                src="https://picsum.photos/seed/neu2/300/300"
                alt="Album"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
            <h3 className="text-center font-semibold text-gray-700">Soft Melodies</h3>
            <p className="text-center text-sm text-gray-500">The Ambient Project</p>
            <div className="mt-4 h-1 rounded-full bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#b8bec7,inset_-2px_-2px_4px_#ffffff]">
              <div className="w-1/3 h-full rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
            </div>
            <div className="mt-6 flex items-center justify-center gap-4">
              <button className="w-12 h-12 rounded-full bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff] flex items-center justify-center hover:shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] transition-all">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 20L9 12l10-8v16zM7 19V5H5v14h2z" />
                </svg>
              </button>
              <button className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff] flex items-center justify-center">
                <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <button className="w-12 h-12 rounded-full bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff] flex items-center justify-center hover:shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] transition-all">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 4l10 8-10 8V4zm12 0h2v16h-2V4z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Weather Card */}
          <div className="lg:col-span-2 rounded-3xl p-6 bg-[#e0e5ec] shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-sm text-gray-500">Tuesday, January 28</p>
                <p className="text-5xl font-light text-gray-700 mt-2">24°C</p>
                <p className="text-gray-600 mt-1">San Francisco, CA</p>
              </div>
              <div className="w-24 h-24 rounded-full bg-[#e0e5ec] shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff] flex items-center justify-center">
                <svg className="w-12 h-12 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 7a5 5 0 100 10 5 5 0 000-10zM2 13h2a1 1 0 100-2H2a1 1 0 100 2zm18 0h2a1 1 0 100-2h-2a1 1 0 100 2zM11 2v2a1 1 0 102 0V2a1 1 0 10-2 0zm0 18v2a1 1 0 102 0v-2a1 1 0 10-2 0zM5.99 4.58a1 1 0 10-1.41 1.41l1.06 1.06a1 1 0 001.41-1.41L5.99 4.58zm12.37 12.37a1 1 0 10-1.41 1.41l1.06 1.06a1 1 0 001.41-1.41l-1.06-1.06zm1.06-10.96a1 1 0 10-1.41-1.41l-1.06 1.06a1 1 0 001.41 1.41l1.06-1.06zM7.05 18.36a1 1 0 10-1.41-1.41l-1.06 1.06a1 1 0 001.41 1.41l1.06-1.06z" />
                </svg>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-4 gap-3">
              {['Mon', 'Tue', 'Wed', 'Thu'].map((day, i) => (
                <div key={day} className="rounded-2xl p-4 bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff] text-center">
                  <p className="text-xs text-gray-500">{day}</p>
                  <p className="text-xl font-semibold text-gray-700 mt-1">{22 + i}°</p>
                </div>
              ))}
            </div>
          </div>

          {/* Toggle Card */}
          <div className="rounded-3xl p-6 bg-[#e0e5ec] shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff]">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Settings</h3>
            <div className="mt-6 space-y-4">
              {['Notifications', 'Dark Mode', 'Auto-sync'].map((setting, i) => (
                <div key={setting} className="flex items-center justify-between">
                  <span className="text-gray-600">{setting}</span>
                  <button className={`w-14 h-7 rounded-full ${i === 1 ? 'bg-gradient-to-r from-blue-400 to-purple-500' : 'bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff]'} relative transition-all`}>
                    <span className={`absolute top-1 ${i === 1 ? 'right-1' : 'left-1'} w-5 h-5 rounded-full bg-white shadow-md transition-all`} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Product Card */}
          <div className="rounded-3xl p-6 bg-[#e0e5ec] shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff]">
            <div className="rounded-2xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] p-3 mb-4">
              <img
                src="https://picsum.photos/seed/neu3/400/300"
                alt="Product"
                className="w-full h-40 object-cover rounded-xl"
              />
            </div>
            <span className="text-xs text-gray-500 uppercase tracking-wider">Electronics</span>
            <h3 className="mt-1 text-lg font-semibold text-gray-700">Wireless Speaker</h3>
            <p className="text-sm text-gray-500 mt-1">Premium sound quality</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xl font-bold text-gray-700">$199</span>
              <button className="px-4 py-2 rounded-xl bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff] text-sm font-medium text-gray-600 hover:shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] transition-all">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Login Card */}
          <div className="rounded-3xl p-8 bg-[#e0e5ec] shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff]">
            <h3 className="text-xl font-semibold text-gray-700 text-center">Welcome</h3>
            <p className="text-sm text-gray-500 text-center mt-1">Sign in to continue</p>
            <div className="mt-6 space-y-4">
              <div className="rounded-xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
                />
              </div>
              <div className="rounded-xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff]">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>
            <button className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-blue-400 to-purple-500 text-white font-medium shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff]">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
