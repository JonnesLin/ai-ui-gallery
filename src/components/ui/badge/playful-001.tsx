export default function PlayfulBadge() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 p-8 space-y-10">
      {/* Fun Status Badges */}
      <section className="space-y-3">
        <h3 className="text-sm font-bold tracking-wide text-purple-700 uppercase">Mood Status</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-sm font-bold text-gray-700 bg-white border-2 border-gray-300 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.1)] transition-shadow">
            😊 Happy
          </span>
          <span className="px-3 py-1 text-sm font-bold text-blue-600 bg-blue-100 border-2 border-blue-400 rounded-lg shadow-[3px_3px_0px_0px_rgba(59,130,246,0.5)] hover:shadow-[5px_5px_0px_0px_rgba(59,130,246,0.5)] transition-shadow">
            🚀 Excited
          </span>
          <span className="px-3 py-1 text-sm font-bold text-green-600 bg-green-100 border-2 border-green-400 rounded-lg shadow-[3px_3px_0px_0px_rgba(34,197,94,0.5)] hover:shadow-[5px_5px_0px_0px_rgba(34,197,94,0.5)] transition-shadow">
            ✨ Amazing
          </span>
          <span className="px-3 py-1 text-sm font-bold text-amber-600 bg-amber-100 border-2 border-amber-400 rounded-lg shadow-[3px_3px_0px_0px_rgba(245,158,11,0.5)] hover:shadow-[5px_5px_0px_0px_rgba(245,158,11,0.5)] transition-shadow">
            ⚡ Energy
          </span>
          <span className="px-3 py-1 text-sm font-bold text-pink-600 bg-pink-100 border-2 border-pink-400 rounded-lg shadow-[3px_3px_0px_0px_rgba(236,72,153,0.5)] hover:shadow-[5px_5px_0px_0px_rgba(236,72,153,0.5)] transition-shadow">
            💖 Love
          </span>
        </div>
      </section>

      {/* Colorful Badges */}
      <section className="space-y-3">
        <h3 className="text-sm font-bold tracking-wide text-purple-700 uppercase">Vibrant Colors</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 text-sm font-bold text-white bg-gradient-to-r from-red-400 to-pink-500 rounded-xl transform hover:scale-105 transition-transform">
            🎈 Red
          </span>
          <span className="px-3 py-1.5 text-sm font-bold text-white bg-gradient-to-r from-orange-400 to-amber-500 rounded-xl transform hover:scale-105 transition-transform">
            🎨 Orange
          </span>
          <span className="px-3 py-1.5 text-sm font-bold text-white bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl transform hover:scale-105 transition-transform">
            ⭐ Yellow
          </span>
          <span className="px-3 py-1.5 text-sm font-bold text-white bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl transform hover:scale-105 transition-transform">
            🌿 Green
          </span>
          <span className="px-3 py-1.5 text-sm font-bold text-white bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl transform hover:scale-105 transition-transform">
            🌊 Blue
          </span>
          <span className="px-3 py-1.5 text-sm font-bold text-white bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl transform hover:scale-105 transition-transform">
            🦄 Purple
          </span>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-3">
        <h3 className="text-sm font-bold tracking-wide text-purple-700 uppercase">Different Sizes</h3>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 text-xs font-bold text-purple-600 bg-purple-100 border-2 border-purple-400 rounded-lg">
            Tiny
          </span>
          <span className="px-3 py-1 text-sm font-bold text-purple-600 bg-purple-100 border-2 border-purple-400 rounded-lg">
            Normal
          </span>
          <span className="px-4 py-1.5 text-base font-bold text-purple-600 bg-purple-100 border-2 border-purple-400 rounded-lg">
            Big
          </span>
        </div>
      </section>

      {/* With Animated Dot */}
      <section className="space-y-3">
        <h3 className="text-sm font-bold tracking-wide text-purple-700 uppercase">Live Status</h3>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-bold text-green-700 bg-white border-2 border-green-400 rounded-full shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            Online
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-bold text-gray-700 bg-white border-2 border-gray-400 rounded-full shadow-lg">
            <span className="w-2.5 h-2.5 bg-gray-400 rounded-full" />
            Offline
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-bold text-amber-700 bg-white border-2 border-amber-400 rounded-full shadow-lg">
            <span className="w-2.5 h-2.5 bg-amber-500 rounded-full animate-pulse" />
            Away
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-bold text-purple-700 bg-white border-2 border-purple-400 rounded-full shadow-lg">
            <span className="w-2.5 h-2.5 bg-purple-500 rounded-full animate-bounce" />
            Busy
          </span>
        </div>
      </section>

      {/* Fun Pill Badges */}
      <section className="space-y-3">
        <h3 className="text-sm font-bold tracking-wide text-purple-700 uppercase">Tags</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-1.5 text-sm font-bold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-full transform hover:rotate-3 transition-transform">
            🎉 Party
          </span>
          <span className="px-4 py-1.5 text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform hover:rotate-3 transition-transform">
            🎮 Gaming
          </span>
          <span className="px-4 py-1.5 text-sm font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform hover:rotate-3 transition-transform">
            🎵 Music
          </span>
          <span className="px-4 py-1.5 text-sm font-bold text-white bg-gradient-to-r from-green-500 to-teal-500 rounded-full transform hover:rotate-3 transition-transform">
            🌟 Star
          </span>
        </div>
      </section>

      {/* Count Badges */}
      <section className="space-y-3">
        <h3 className="text-sm font-bold tracking-wide text-purple-700 uppercase">Notifications</h3>
        <div className="flex items-center gap-6">
          <div className="relative inline-flex">
            <button className="p-3 text-purple-600 bg-white border-2 border-purple-400 rounded-xl hover:bg-purple-50 shadow-[3px_3px_0px_0px_rgba(168,85,247,0.4)]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <span className="absolute -top-2 -right-2 min-w-[24px] h-6 px-1.5 text-xs font-bold text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
              7
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-3 text-blue-600 bg-white border-2 border-blue-400 rounded-xl hover:bg-blue-50 shadow-[3px_3px_0px_0px_rgba(59,130,246,0.4)]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            <span className="absolute -top-2 -right-2 min-w-[24px] h-6 px-1.5 text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center border-2 border-white">
              99
            </span>
          </div>
          <div className="relative inline-flex">
            <button className="p-3 text-green-600 bg-white border-2 border-green-400 rounded-xl hover:bg-green-50 shadow-[3px_3px_0px_0px_rgba(34,197,94,0.4)]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </button>
            <span className="absolute -top-2 -right-3 min-w-[28px] h-6 px-1.5 text-xs font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center border-2 border-white">
              999+
            </span>
          </div>
        </div>
      </section>

      {/* Removable Badges */}
      <section className="space-y-3">
        <h3 className="text-sm font-bold tracking-wide text-purple-700 uppercase">Removable</h3>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-bold text-pink-700 bg-pink-100 border-2 border-pink-400 rounded-full">
            🎀 Cute
            <button className="text-pink-500 hover:text-pink-700 hover:scale-125 transition-transform">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-bold text-blue-700 bg-blue-100 border-2 border-blue-400 rounded-full">
            🎪 Fun
            <button className="text-blue-500 hover:text-blue-700 hover:scale-125 transition-transform">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-bold text-purple-700 bg-purple-100 border-2 border-purple-400 rounded-full">
            🎨 Creative
            <button className="text-purple-500 hover:text-purple-700 hover:scale-125 transition-transform">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
        </div>
      </section>
    </div>
  )
}
