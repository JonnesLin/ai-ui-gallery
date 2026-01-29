export default function GradientInput() {
  return (
    <div className="min-h-screen p-8 flex flex-col gap-8 max-w-md bg-gray-950">
      {/* Gradient Border Input */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-300">
          Email Address
        </label>
        <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-[10px] text-white placeholder-gray-500 bg-gray-950 focus:outline-none"
          />
        </div>
      </div>

      {/* Animated Gradient Border */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-300">
          Search
        </label>
        <div
          className="relative p-[2px] rounded-xl"
          style={{
            background: 'linear-gradient(90deg, #ff0080, #ff8c00, #40e0d0, #ff0080)',
            backgroundSize: '300% 100%',
            animation: 'gradientShift 3s ease infinite',
          }}
        >
          <style>{`
            @keyframes gradientShift {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
          `}</style>
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search with animated border..."
              className="w-full pl-12 pr-4 py-3 rounded-[10px] text-white placeholder-gray-500 bg-gray-950 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Gradient Background Input */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-300">
          Username
        </label>
        <input
          type="text"
          placeholder="Enter username"
          className="w-full px-4 py-3 rounded-xl text-white placeholder-white/50 bg-gradient-to-r from-violet-600 to-indigo-600 border-none focus:ring-2 focus:ring-white/30 focus:outline-none transition-all duration-200"
        />
      </div>

      {/* Glow Gradient Input */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Active Input
        </label>
        <div className="relative">
          <div
            className="absolute inset-0 rounded-xl blur-md opacity-75"
            style={{
              background: 'linear-gradient(90deg, #06b6d4, #3b82f6)',
            }}
          />
          <input
            type="text"
            defaultValue="Glowing effect"
            className="relative w-full px-4 py-3 rounded-xl text-white bg-gray-900 border-2 border-cyan-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Error Gradient */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-red-400">
          Password
        </label>
        <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-red-500">
          <input
            type="password"
            defaultValue="error"
            className="w-full px-4 py-3 rounded-[10px] text-red-400 bg-gray-950 focus:outline-none"
          />
        </div>
        <p className="text-xs text-red-400">Password is required</p>
      </div>

      {/* Success Gradient */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-emerald-400">
          Verified Email
        </label>
        <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-500">
          <div className="relative">
            <input
              type="email"
              defaultValue="verified@email.com"
              className="w-full px-4 py-3 pr-12 rounded-[10px] text-emerald-400 bg-gray-950 focus:outline-none"
            />
            <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Gradient Card with Inputs */}
      <div
        className="p-[2px] rounded-2xl"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}
      >
        <div className="p-6 rounded-[14px] bg-gray-950">
          <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Premium Access
          </h3>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Invite Code"
              className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 bg-gray-900 border border-gray-800 focus:border-purple-500 focus:outline-none transition-colors duration-200"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-500 bg-gray-900 border border-gray-800 focus:border-purple-500 focus:outline-none transition-colors duration-200"
            />
            <button className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium transition-all duration-200">
              Unlock Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
