export default function PastelInput() {
  return (
    <div className="min-h-screen p-8 flex flex-col gap-8 max-w-md bg-[#fef7f0]">
      {/* Soft Pink Input */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-pink-400">
          Email Address
        </label>
        <input
          type="email"
          placeholder="hello@example.com"
          className="w-full px-4 py-3 rounded-2xl text-pink-600 placeholder-pink-300 bg-pink-50 border-2 border-pink-200 focus:border-pink-300 focus:bg-white focus:outline-none transition-all duration-300"
        />
      </div>

      {/* Lavender Input with Icon */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-purple-400">
          Search
        </label>
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-300"
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
            placeholder="Find something lovely..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl text-purple-600 placeholder-purple-300 bg-purple-50 border-2 border-purple-200 focus:border-purple-300 focus:bg-white focus:outline-none transition-all duration-300"
          />
        </div>
      </div>

      {/* Mint Green Input */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-emerald-400">
          Username
        </label>
        <input
          type="text"
          placeholder="Your lovely name"
          className="w-full px-4 py-3 rounded-2xl text-emerald-600 placeholder-emerald-300 bg-emerald-50 border-2 border-emerald-200 focus:border-emerald-300 focus:bg-white focus:outline-none transition-all duration-300"
        />
      </div>

      {/* Baby Blue Focused */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-sky-500">
          Message
        </label>
        <input
          type="text"
          defaultValue="Sweet dreams..."
          className="w-full px-4 py-3 rounded-2xl text-sky-600 bg-white border-2 border-sky-300 shadow-[0_0_0_4px_rgba(56,189,248,0.1)] focus:outline-none transition-all duration-300"
        />
        <p className="text-xs text-sky-400">This is how focus looks</p>
      </div>

      {/* Peach Error State */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-orange-400">
          Password
        </label>
        <input
          type="password"
          defaultValue="oops"
          className="w-full px-4 py-3 rounded-2xl text-orange-600 bg-orange-50 border-2 border-orange-300 focus:outline-none"
        />
        <p className="text-xs text-orange-400 flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          Oopsie! Something went wrong
        </p>
      </div>

      {/* Disabled Pastel */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-300">
          Locked Field
        </label>
        <input
          type="text"
          value="Cannot edit this"
          disabled
          className="w-full px-4 py-3 rounded-2xl text-gray-400 bg-gray-100 border-2 border-gray-200 cursor-not-allowed"
        />
      </div>

      {/* Pastel Card Form */}
      <div className="p-6 rounded-3xl bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 border-2 border-white shadow-xl mt-4">
        <h3 className="text-lg font-semibold text-purple-500 mb-5 flex items-center gap-2">
          <span className="text-2xl">🌸</span>
          Create Account
        </h3>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-xl text-purple-600 placeholder-purple-300 bg-white/80 border-2 border-purple-100 focus:border-purple-200 focus:outline-none transition-all duration-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl text-pink-600 placeholder-pink-300 bg-white/80 border-2 border-pink-100 focus:border-pink-200 focus:outline-none transition-all duration-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl text-sky-600 placeholder-sky-300 bg-white/80 border-2 border-sky-100 focus:border-sky-200 focus:outline-none transition-all duration-300"
          />
          <button className="w-full py-3 rounded-xl text-white font-medium bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400 hover:from-pink-500 hover:via-purple-500 hover:to-sky-500 transition-all duration-300 shadow-lg shadow-purple-200">
            Sign Up
          </button>
        </div>
      </div>

      {/* Multi-color Row */}
      <div className="grid grid-cols-3 gap-3 mt-4">
        <input
          type="text"
          placeholder="Pink"
          className="px-3 py-2 rounded-xl text-sm text-pink-600 placeholder-pink-300 bg-pink-50 border-2 border-pink-200 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Mint"
          className="px-3 py-2 rounded-xl text-sm text-emerald-600 placeholder-emerald-300 bg-emerald-50 border-2 border-emerald-200 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Blue"
          className="px-3 py-2 rounded-xl text-sm text-sky-600 placeholder-sky-300 bg-sky-50 border-2 border-sky-200 focus:outline-none"
        />
      </div>
    </div>
  );
}
