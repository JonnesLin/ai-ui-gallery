export default function PlayfulInput() {
  return (
    <div className="min-h-screen p-8 flex flex-col gap-8 max-w-md bg-amber-50">
      {/* Bouncy Input */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-orange-500 flex items-center gap-2">
          <span className="text-lg">🎈</span>
          Your Email
        </label>
        <input
          type="email"
          placeholder="fun@example.com"
          className="w-full px-5 py-4 rounded-full text-orange-600 placeholder-orange-300 bg-white border-3 border-orange-300 focus:border-orange-400 focus:outline-none focus:scale-105 transition-all duration-300 shadow-[4px_4px_0_0_#fb923c]"
        />
      </div>

      {/* Rainbow Border Input */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-violet-500 flex items-center gap-2">
          <span className="text-lg">🌈</span>
          Search
        </label>
        <div
          className="p-1 rounded-full"
          style={{
            background: 'linear-gradient(90deg, #ef4444, #f97316, #eab308, #22c55e, #3b82f6, #8b5cf6)',
          }}
        >
          <div className="relative">
            <svg
              className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-violet-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Find cool stuff..."
              className="w-full pl-14 pr-5 py-4 rounded-full text-violet-600 placeholder-violet-300 bg-white focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Wobbly Input with Emoji */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-pink-500 flex items-center gap-2">
          <span className="text-lg">🎀</span>
          Nickname
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="What should we call you?"
            className="w-full px-5 py-4 rounded-3xl text-pink-600 placeholder-pink-300 bg-pink-100 border-4 border-pink-300 border-dashed focus:border-pink-400 focus:outline-none transition-all duration-300"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl">✨</span>
        </div>
      </div>

      {/* Happy Input - Focused */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-emerald-500 flex items-center gap-2">
          <span className="text-lg animate-bounce">🎉</span>
          Typing Here!
        </label>
        <input
          type="text"
          defaultValue="Yay! You clicked me!"
          className="w-full px-5 py-4 rounded-2xl text-emerald-600 bg-emerald-100 border-4 border-emerald-400 focus:outline-none shadow-[0_6px_0_0_#10b981] translate-y-[-2px]"
        />
        <p className="text-xs text-emerald-500 font-medium">This input is super happy!</p>
      </div>

      {/* Oops Input - Error */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-red-500 flex items-center gap-2">
          <span className="text-lg">😅</span>
          Oopsie!
        </label>
        <input
          type="text"
          defaultValue="Something went wrong"
          className="w-full px-5 py-4 rounded-2xl text-red-600 bg-red-100 border-4 border-red-300 focus:outline-none animate-[wiggle_0.3s_ease-in-out]"
        />
        <style>{`
          @keyframes wiggle {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-2deg); }
            75% { transform: rotate(2deg); }
          }
        `}</style>
        <p className="text-xs text-red-500 font-medium flex items-center gap-1">
          <span>😱</span> Try again, you got this!
        </p>
      </div>

      {/* Sleepy Input - Disabled */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-gray-400 flex items-center gap-2">
          <span className="text-lg">😴</span>
          Sleeping...
        </label>
        <input
          type="text"
          value="Zzz... can't touch this"
          disabled
          className="w-full px-5 py-4 rounded-2xl text-gray-400 bg-gray-200 border-4 border-gray-300 border-dotted cursor-not-allowed"
        />
      </div>

      {/* Fun Card Form */}
      <div
        className="p-6 rounded-[32px] mt-4"
        style={{
          background: 'linear-gradient(135deg, #fef3c7 0%, #fce7f3 50%, #ddd6fe 100%)',
        }}
      >
        <h3 className="text-xl font-black text-purple-600 mb-5 flex items-center gap-2">
          <span className="text-2xl">🎮</span>
          Join the Fun!
        </h3>
        <div className="flex flex-col gap-4">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">👤</span>
            <input
              type="text"
              placeholder="Your awesome name"
              className="w-full pl-12 pr-4 py-3 rounded-xl text-purple-600 placeholder-purple-300 bg-white border-3 border-purple-200 focus:border-purple-400 focus:outline-none"
            />
          </div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">📧</span>
            <input
              type="email"
              placeholder="Your email"
              className="w-full pl-12 pr-4 py-3 rounded-xl text-pink-600 placeholder-pink-300 bg-white border-3 border-pink-200 focus:border-pink-400 focus:outline-none"
            />
          </div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🔑</span>
            <input
              type="password"
              placeholder="Secret password"
              className="w-full pl-12 pr-4 py-3 rounded-xl text-amber-600 placeholder-amber-300 bg-white border-3 border-amber-200 focus:border-amber-400 focus:outline-none"
            />
          </div>
          <button className="w-full py-4 rounded-xl text-white font-black text-lg bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 hover:scale-105 transition-transform duration-300 shadow-[0_6px_0_0_#9333ea]">
            Let's Go! 🚀
          </button>
        </div>
      </div>

      {/* Emoji Tags Row */}
      <div className="flex gap-2 flex-wrap mt-4">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 border-2 border-red-200">
          <span>❤️</span>
          <input
            type="text"
            placeholder="Love"
            className="w-16 bg-transparent text-red-500 placeholder-red-300 focus:outline-none text-sm"
          />
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 border-2 border-yellow-200">
          <span>⭐</span>
          <input
            type="text"
            placeholder="Star"
            className="w-16 bg-transparent text-yellow-600 placeholder-yellow-400 focus:outline-none text-sm"
          />
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border-2 border-blue-200">
          <span>💎</span>
          <input
            type="text"
            placeholder="Gem"
            className="w-16 bg-transparent text-blue-500 placeholder-blue-300 focus:outline-none text-sm"
          />
        </div>
      </div>
    </div>
  );
}
