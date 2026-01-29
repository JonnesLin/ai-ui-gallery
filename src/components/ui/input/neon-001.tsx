export default function NeonInput() {
  return (
    <div className="flex flex-col gap-8 p-8 max-w-md bg-slate-950 min-h-screen">
      {/* Basic Input - Cyan Neon */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold tracking-widest text-cyan-400 uppercase drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
          Email Address
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full px-4 py-3 text-cyan-300 placeholder-cyan-900 bg-slate-900 border-2 border-cyan-500 rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.3)] focus:shadow-[0_0_25px_rgba(34,211,238,0.6)] focus:border-cyan-400 focus:outline-none transition-all duration-300"
        />
      </div>

      {/* Input with Prefix Icon - Pink Neon */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold tracking-widest text-pink-400 uppercase drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
          Search
        </label>
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-500 drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]"
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
            placeholder="Search in the neon city..."
            className="w-full pl-12 pr-4 py-3 text-pink-300 placeholder-pink-900 bg-slate-900 border-2 border-pink-500 rounded-lg shadow-[0_0_15px_rgba(236,72,153,0.3)] focus:shadow-[0_0_25px_rgba(236,72,153,0.6)] focus:border-pink-400 focus:outline-none transition-all duration-300"
          />
        </div>
      </div>

      {/* Input with Suffix Icon - Purple Neon */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold tracking-widest text-purple-400 uppercase drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
          Password
        </label>
        <div className="relative">
          <input
            type="password"
            placeholder="Enter secure password"
            defaultValue="neonpassword"
            className="w-full pl-4 pr-12 py-3 text-purple-300 placeholder-purple-900 bg-slate-900 border-2 border-purple-500 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.3)] focus:shadow-[0_0_25px_rgba(168,85,247,0.6)] focus:border-purple-400 focus:outline-none transition-all duration-300"
          />
          <svg
            className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-500 cursor-pointer hover:text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all"
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

      {/* Large Size - Green Neon */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold tracking-widest text-green-400 uppercase drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
          Username
        </label>
        <input
          type="text"
          placeholder="NeonUser2024"
          className="w-full px-6 py-4 text-lg text-green-300 placeholder-green-900 bg-slate-900 border-2 border-green-500 rounded-lg shadow-[0_0_15px_rgba(34,197,94,0.3)] focus:shadow-[0_0_25px_rgba(34,197,94,0.6)] focus:border-green-400 focus:outline-none transition-all duration-300"
        />
      </div>

      {/* Small Size - Yellow Neon */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold tracking-widest text-yellow-400 uppercase drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]">
          Code
        </label>
        <input
          type="text"
          placeholder="NE0N"
          className="w-full px-3 py-2 text-sm text-yellow-300 placeholder-yellow-900 bg-slate-900 border-2 border-yellow-500 rounded-lg shadow-[0_0_15px_rgba(234,179,8,0.3)] focus:shadow-[0_0_25px_rgba(234,179,8,0.6)] focus:border-yellow-400 focus:outline-none transition-all duration-300"
        />
      </div>

      {/* Error State - Red Neon */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold tracking-widest text-red-400 uppercase drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">
          Credit Card
        </label>
        <input
          type="text"
          defaultValue="1234"
          className="w-full px-4 py-3 text-red-300 placeholder-red-900 bg-slate-900 border-2 border-red-500 rounded-lg shadow-[0_0_20px_rgba(239,68,68,0.5)] focus:shadow-[0_0_30px_rgba(239,68,68,0.7)] focus:border-red-400 focus:outline-none transition-all duration-300 animate-pulse"
        />
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-red-400 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-xs text-red-400 font-medium drop-shadow-[0_0_5px_rgba(239,68,68,0.5)]">
            Invalid card number format
          </p>
        </div>
      </div>

      {/* Disabled State */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold tracking-widest text-slate-600 uppercase">
          Account ID
        </label>
        <input
          type="text"
          value="NEON-2024-001"
          disabled
          className="w-full px-4 py-3 text-slate-600 bg-slate-900 border-2 border-slate-700 rounded-lg cursor-not-allowed opacity-50"
        />
        <p className="text-xs text-slate-600 font-medium">This field is locked</p>
      </div>

      {/* Animated Glow Effect - Blue Neon */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold tracking-widest text-blue-400 uppercase drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
          Active Session
        </label>
        <input
          type="text"
          placeholder="Connected..."
          className="w-full px-4 py-3 text-blue-300 placeholder-blue-900 bg-slate-900 border-2 border-blue-500 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.3)] focus:shadow-[0_0_25px_rgba(59,130,246,0.6)] focus:border-blue-400 focus:outline-none transition-all duration-300 animate-[pulse_2s_ease-in-out_infinite]"
        />
      </div>

      {/* Multi-color Border - Rainbow Neon */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold tracking-widest text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text uppercase drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
          Rainbow Input
        </label>
        <input
          type="text"
          placeholder="Enter rainbow text..."
          className="w-full px-4 py-3 text-white placeholder-slate-600 bg-slate-900 border-2 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-lg p-[2px] shadow-[0_0_20px_rgba(236,72,153,0.4)] focus:shadow-[0_0_30px_rgba(236,72,153,0.6)] focus:outline-none transition-all duration-300"
          style={{
            backgroundClip: 'padding-box, border-box',
            backgroundOrigin: 'padding-box, border-box',
          }}
        />
      </div>
    </div>
  );
}
