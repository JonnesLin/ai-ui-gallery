export default function MonochromeInput() {
  return (
    <div className="flex flex-col gap-8 p-8 max-w-md bg-black min-h-screen">
      {/* Basic Input */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold tracking-widest text-white uppercase">
          Email Address
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full px-4 py-3 text-white placeholder-gray-500 bg-black border-2 border-white focus:outline-none focus:ring-4 focus:ring-white/20 transition-all duration-200"
        />
      </div>

      {/* Input with Prefix Icon */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold tracking-widest text-white uppercase">
          Search
        </label>
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white"
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
            placeholder="Search anything..."
            className="w-full pl-12 pr-4 py-3 text-white placeholder-gray-500 bg-black border-2 border-white focus:outline-none focus:ring-4 focus:ring-white/20 transition-all duration-200"
          />
        </div>
      </div>

      {/* Input with Suffix Icon */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold tracking-widest text-white uppercase">
          Password
        </label>
        <div className="relative">
          <input
            type="password"
            placeholder="Enter password"
            defaultValue="securepassword123"
            className="w-full pl-4 pr-12 py-3 text-white placeholder-gray-500 bg-black border-2 border-white focus:outline-none focus:ring-4 focus:ring-white/20 transition-all duration-200"
          />
          <svg
            className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white cursor-pointer hover:text-gray-400 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </div>
      </div>

      {/* Large Size */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold tracking-widest text-white uppercase">
          Company Name
        </label>
        <input
          type="text"
          placeholder="Acme Corporation"
          className="w-full px-6 py-4 text-lg text-white placeholder-gray-500 bg-black border-2 border-white focus:outline-none focus:ring-4 focus:ring-white/20 transition-all duration-200"
        />
      </div>

      {/* Small Size */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold tracking-widest text-white uppercase">
          Code
        </label>
        <input
          type="text"
          placeholder="ABC123"
          className="w-full px-3 py-2 text-sm text-white placeholder-gray-500 bg-black border-2 border-white focus:outline-none focus:ring-4 focus:ring-white/20 transition-all duration-200"
        />
      </div>

      {/* Error State */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold tracking-widest text-white uppercase">
          Username
        </label>
        <input
          type="text"
          defaultValue="us"
          className="w-full px-4 py-3 text-white placeholder-gray-500 bg-black border-2 border-white focus:outline-none focus:ring-4 focus:ring-white/20 transition-all duration-200"
        />
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-xs text-white font-medium">Username must be at least 3 characters</p>
        </div>
      </div>

      {/* Disabled State */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold tracking-widest text-gray-600 uppercase">
          Account ID
        </label>
        <input
          type="text"
          value="ACC-2024-001"
          disabled
          className="w-full px-4 py-3 text-gray-600 bg-black border-2 border-gray-800 cursor-not-allowed"
        />
        <p className="text-xs text-gray-600 font-medium">This field cannot be edited</p>
      </div>

      {/* Read Only State */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold tracking-widest text-white uppercase">
          License Key
        </label>
        <input
          type="text"
          value="XXXX-XXXX-XXXX-XXXX"
          readOnly
          className="w-full px-4 py-3 text-gray-400 bg-black border-2 border-gray-700 cursor-default select-all"
        />
        <p className="text-xs text-gray-500 font-medium">Click to copy</p>
      </div>

      {/* Inverted Style */}
      <div className="flex flex-col gap-2 bg-white p-6 -mx-8">
        <label className="text-xs font-bold tracking-widest text-black uppercase">
          Inverted Input
        </label>
        <input
          type="text"
          placeholder="Black on white"
          className="w-full px-4 py-3 text-black placeholder-gray-400 bg-white border-2 border-black focus:outline-none focus:ring-4 focus:ring-black/20 transition-all duration-200"
        />
      </div>
    </div>
  );
}
