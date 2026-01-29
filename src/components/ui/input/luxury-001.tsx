export default function LuxuryInput() {
  return (
    <div className="min-h-screen p-8 flex flex-col gap-8 max-w-md bg-[#0a0a0a]">
      {/* Gold Accent Input */}
      <div className="flex flex-col gap-3">
        <label className="text-xs font-medium uppercase tracking-[0.2em] text-amber-400/80">
          Email Address
        </label>
        <input
          type="email"
          placeholder="your@email.com"
          className="w-full px-5 py-4 text-white placeholder-gray-600 bg-transparent border-b-2 border-amber-600/30 focus:border-amber-400 focus:outline-none transition-colors duration-500"
        />
      </div>

      {/* Diamond Border Input */}
      <div className="flex flex-col gap-3">
        <label className="text-xs font-medium uppercase tracking-[0.2em] text-amber-400/80">
          Full Name
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-5 py-4 text-white placeholder-gray-600 bg-[#111111] border border-amber-700/30 focus:border-amber-500 focus:outline-none transition-all duration-500"
          />
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-amber-500" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-amber-500" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-amber-500" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-amber-500" />
        </div>
      </div>

      {/* Gold Gradient Border */}
      <div className="flex flex-col gap-3">
        <label className="text-xs font-medium uppercase tracking-[0.2em] text-amber-400/80">
          Membership ID
        </label>
        <div
          className="p-[1px]"
          style={{
            background: 'linear-gradient(135deg, #b8860b 0%, #ffd700 25%, #b8860b 50%, #ffd700 75%, #b8860b 100%)',
          }}
        >
          <input
            type="text"
            placeholder="GOLD-XXXXXX"
            className="w-full px-5 py-4 text-amber-200 placeholder-gray-600 bg-[#0a0a0a] focus:outline-none tracking-wider"
          />
        </div>
      </div>

      {/* Focused State - Illuminated */}
      <div className="flex flex-col gap-3">
        <label className="text-xs font-medium uppercase tracking-[0.2em] text-amber-300">
          Active Field
        </label>
        <input
          type="text"
          defaultValue="VIP-PREMIUM"
          className="w-full px-5 py-4 text-amber-100 bg-[#111111] border-2 border-amber-500 focus:outline-none"
          style={{
            boxShadow: '0 0 20px rgba(245, 158, 11, 0.15), inset 0 0 20px rgba(245, 158, 11, 0.05)',
          }}
        />
        <p className="text-xs text-amber-500/60 tracking-wide">Currently editing</p>
      </div>

      {/* Error - Elegant */}
      <div className="flex flex-col gap-3">
        <label className="text-xs font-medium uppercase tracking-[0.2em] text-rose-400/80">
          Security Code
        </label>
        <input
          type="password"
          defaultValue="invalid"
          className="w-full px-5 py-4 text-rose-300 bg-rose-950/20 border border-rose-500/50 focus:outline-none"
          style={{
            boxShadow: '0 0 15px rgba(244, 63, 94, 0.1)',
          }}
        />
        <p className="text-xs text-rose-400/70 tracking-wide flex items-center gap-2">
          <span className="w-1 h-1 bg-rose-400 rounded-full" />
          Invalid security credentials
        </p>
      </div>

      {/* Disabled - Faded Elegance */}
      <div className="flex flex-col gap-3">
        <label className="text-xs font-medium uppercase tracking-[0.2em] text-gray-600">
          Account Tier
        </label>
        <input
          type="text"
          value="PLATINUM ELITE"
          disabled
          className="w-full px-5 py-4 text-gray-600 bg-[#0d0d0d] border border-gray-800 cursor-not-allowed tracking-wider"
        />
      </div>

      {/* Luxury Card Form */}
      <div className="relative p-8 mt-4 bg-gradient-to-b from-[#151515] to-[#0a0a0a] border border-amber-900/30">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
            <h3 className="px-4 text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
              Private Access
            </h3>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-medium uppercase tracking-[0.15em] text-gray-500">
                Invitation Code
              </label>
              <input
                type="text"
                placeholder="XXXX-XXXX-XXXX"
                className="w-full px-4 py-3 text-sm text-amber-200 placeholder-gray-700 bg-black/50 border border-amber-900/50 focus:border-amber-600 focus:outline-none tracking-[0.2em] transition-colors duration-500"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-medium uppercase tracking-[0.15em] text-gray-500">
                Personal Key
              </label>
              <input
                type="password"
                placeholder="Enter your key"
                className="w-full px-4 py-3 text-sm text-amber-200 placeholder-gray-700 bg-black/50 border border-amber-900/50 focus:border-amber-600 focus:outline-none tracking-wider transition-colors duration-500"
              />
            </div>
            <button
              className="w-full mt-4 py-4 text-xs font-medium uppercase tracking-[0.3em] text-black bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 hover:from-amber-500 hover:via-amber-300 hover:to-amber-500 transition-all duration-500"
            >
              Enter
            </button>
          </div>

          <div className="flex items-center justify-center mt-6 gap-2">
            <div className="w-1 h-1 bg-amber-600 rotate-45" />
            <p className="text-[10px] text-gray-600 uppercase tracking-widest">
              Members Only
            </p>
            <div className="w-1 h-1 bg-amber-600 rotate-45" />
          </div>
        </div>
      </div>
    </div>
  );
}
