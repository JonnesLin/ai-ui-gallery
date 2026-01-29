export default function ThreeDInput() {
  return (
    <div className="flex flex-col gap-8 p-8 max-w-md bg-gradient-to-br from-slate-100 to-slate-200 min-h-screen">
      {/* Basic Input - Raised 3D */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold tracking-wide text-slate-700 uppercase">
          Email Address
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full px-4 py-3 text-slate-900 placeholder-slate-400 bg-white rounded-lg border-2 border-slate-300 shadow-[0_4px_0_0_rgb(148,163,184)] hover:shadow-[0_2px_0_0_rgb(148,163,184)] hover:translate-y-[2px] focus:shadow-[0_2px_0_0_rgb(99,102,241)] focus:border-indigo-500 focus:translate-y-[2px] focus:outline-none transition-all duration-150"
        />
      </div>

      {/* Input with Prefix Icon - Deep 3D */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold tracking-wide text-slate-700 uppercase">
          Search
        </label>
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 z-10"
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
            className="w-full pl-12 pr-4 py-3 text-slate-900 placeholder-slate-400 bg-white rounded-lg border-2 border-slate-300 shadow-[0_6px_0_0_rgb(148,163,184)] hover:shadow-[0_3px_0_0_rgb(148,163,184)] hover:translate-y-[3px] focus:shadow-[0_3px_0_0_rgb(99,102,241)] focus:border-indigo-500 focus:translate-y-[3px] focus:outline-none transition-all duration-150"
          />
        </div>
      </div>

      {/* Input with Suffix Icon - Colored 3D */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold tracking-wide text-emerald-700 uppercase">
          Username
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter username"
            defaultValue="john_doe"
            className="w-full pl-4 pr-12 py-3 text-slate-900 placeholder-slate-400 bg-white rounded-lg border-2 border-emerald-400 shadow-[0_5px_0_0_rgb(34,197,94)] hover:shadow-[0_2px_0_0_rgb(34,197,94)] hover:translate-y-[3px] focus:shadow-[0_2px_0_0_rgb(16,185,129)] focus:border-emerald-500 focus:translate-y-[3px] focus:outline-none transition-all duration-150"
          />
          <svg
            className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500 cursor-pointer z-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>

      {/* Large Size - Prominent 3D */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold tracking-wide text-slate-700 uppercase">
          Company Name
        </label>
        <input
          type="text"
          placeholder="Acme Corporation"
          className="w-full px-6 py-4 text-lg text-slate-900 placeholder-slate-400 bg-white rounded-xl border-2 border-slate-300 shadow-[0_8px_0_0_rgb(148,163,184)] hover:shadow-[0_4px_0_0_rgb(148,163,184)] hover:translate-y-[4px] focus:shadow-[0_4px_0_0_rgb(99,102,241)] focus:border-indigo-500 focus:translate-y-[4px] focus:outline-none transition-all duration-150"
        />
      </div>

      {/* Small Size - Subtle 3D */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold tracking-wide text-slate-700 uppercase">
          Code
        </label>
        <input
          type="text"
          placeholder="ABC123"
          className="w-full px-3 py-2 text-sm text-slate-900 placeholder-slate-400 bg-white rounded-md border-2 border-slate-300 shadow-[0_3px_0_0_rgb(148,163,184)] hover:shadow-[0_1px_0_0_rgb(148,163,184)] hover:translate-y-[2px] focus:shadow-[0_1px_0_0_rgb(99,102,241)] focus:border-indigo-500 focus:translate-y-[2px] focus:outline-none transition-all duration-150"
        />
      </div>

      {/* Error State - Red 3D */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold tracking-wide text-red-700 uppercase">
          Password
        </label>
        <input
          type="password"
          defaultValue="weak"
          className="w-full px-4 py-3 text-slate-900 placeholder-slate-400 bg-white rounded-lg border-2 border-red-400 shadow-[0_5px_0_0_rgb(239,68,68)] hover:shadow-[0_2px_0_0_rgb(239,68,68)] hover:translate-y-[3px] focus:shadow-[0_2px_0_0_rgb(220,38,38)] focus:border-red-500 focus:translate-y-[3px] focus:outline-none transition-all duration-150"
        />
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-xs text-red-600 font-medium">Password must be at least 8 characters</p>
        </div>
      </div>

      {/* Disabled State - Flat 3D */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold tracking-wide text-slate-400 uppercase">
          Account ID
        </label>
        <input
          type="text"
          value="ACC-2024-001"
          disabled
          className="w-full px-4 py-3 text-slate-400 bg-slate-100 rounded-lg border-2 border-slate-200 shadow-[0_3px_0_0_rgb(203,213,225)] cursor-not-allowed"
        />
        <p className="text-xs text-slate-400 font-medium">This field cannot be edited</p>
      </div>

      {/* Pressed State Demo - Inset 3D */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold tracking-wide text-slate-700 uppercase">
          Pressed State
        </label>
        <input
          type="text"
          defaultValue="This looks pressed"
          className="w-full px-4 py-3 text-slate-900 placeholder-slate-400 bg-slate-50 rounded-lg border-2 border-slate-400 shadow-[inset_0_4px_0_0_rgb(148,163,184)] translate-y-[4px] focus:outline-none"
        />
        <p className="text-xs text-slate-500 font-medium">Simulated active/pressed appearance</p>
      </div>

      {/* Gradient Background 3D */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold tracking-wide text-purple-700 uppercase">
          Premium Input
        </label>
        <input
          type="text"
          placeholder="Gradient 3D effect..."
          className="w-full px-4 py-3 text-white placeholder-purple-200 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg border-2 border-purple-400 shadow-[0_6px_0_0_rgb(147,51,234)] hover:shadow-[0_3px_0_0_rgb(147,51,234)] hover:translate-y-[3px] focus:shadow-[0_3px_0_0_rgb(126,34,206)] focus:border-purple-600 focus:translate-y-[3px] focus:outline-none transition-all duration-150"
        />
      </div>

      {/* Layered 3D Effect */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold tracking-wide text-slate-700 uppercase">
          Layered Depth
        </label>
        <input
          type="text"
          placeholder="Multiple shadow layers..."
          className="w-full px-4 py-3 text-slate-900 placeholder-slate-400 bg-white rounded-lg border-2 border-slate-300 shadow-[0_2px_0_0_rgb(203,213,225),0_4px_0_0_rgb(226,232,240),0_6px_0_0_rgb(241,245,249)] hover:shadow-[0_1px_0_0_rgb(203,213,225),0_2px_0_0_rgb(226,232,240),0_3px_0_0_rgb(241,245,249)] hover:translate-y-[3px] focus:shadow-[0_1px_0_0_rgb(99,102,241),0_2px_0_0_rgb(129,140,248),0_3px_0_0_rgb(165,180,252)] focus:border-indigo-500 focus:translate-y-[3px] focus:outline-none transition-all duration-150"
        />
      </div>
    </div>
  );
}
