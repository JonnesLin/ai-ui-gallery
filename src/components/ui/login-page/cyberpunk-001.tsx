export default function CyberpunkLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-950 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Glowing Lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-pink-500/50 to-transparent" />
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      {/* Glitch Effect Container */}
      <div className="relative w-full max-w-md">
        {/* Glitch Shadows */}
        <div className="absolute inset-0 bg-pink-500/20 translate-x-1 translate-y-1 blur-sm" />
        <div className="absolute inset-0 bg-cyan-500/20 -translate-x-1 -translate-y-1 blur-sm" />

        {/* Main Card */}
        <div className="relative bg-gray-900/90 border border-cyan-500/50 p-8 backdrop-blur-xl">
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-pink-400" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-pink-400" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

          {/* Logo */}
          <div className="text-center mb-8">
            <div className="inline-block relative">
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-cyan-400 font-mono tracking-widest">
                SYSTEM://LOGIN
              </h1>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-pink-500 blur opacity-30" />
            </div>
            <p className="text-cyan-500/70 mt-2 font-mono text-sm tracking-wider">
              &gt; AUTHENTICATE TO PROCEED_
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-xs font-mono text-cyan-400 mb-2 tracking-wider">
                [EMAIL_ADDRESS]
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="user@network.sys"
                  className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 text-cyan-100 placeholder-cyan-700 font-mono focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 animate-pulse" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-mono text-pink-400 mb-2 tracking-wider">
                [PASSWORD_KEY]
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="**************"
                  className="w-full px-4 py-3 bg-black/50 border border-pink-500/30 text-pink-100 placeholder-pink-700 font-mono focus:outline-none focus:border-pink-400 focus:shadow-[0_0_10px_rgba(255,0,255,0.3)] transition-all"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-pink-400 animate-pulse" />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <div className="relative">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-5 h-5 border border-cyan-500/50 bg-black/50 peer-checked:bg-cyan-500/20 peer-checked:border-cyan-400 transition-all" />
                  <svg className="absolute top-0.5 left-0.5 w-4 h-4 text-cyan-400 opacity-0 peer-checked:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-xs text-cyan-500/70 font-mono">[REMEMBER_SESSION]</span>
              </label>
              <a href="#" className="text-xs text-pink-400 font-mono hover:text-pink-300 hover:underline">
                [RESET_KEY]
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-black font-mono font-bold tracking-widest hover:from-cyan-400 hover:to-pink-400 transition-all shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] relative overflow-hidden group"
            >
              <span className="relative z-10">&gt; INITIATE_LOGIN</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            <span className="text-cyan-600 text-xs font-mono">[ALT_ACCESS]</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <button className="py-3 border border-cyan-500/30 text-cyan-400 font-mono text-sm hover:bg-cyan-500/10 hover:border-cyan-400 transition-all flex items-center justify-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              GOOGLE
            </button>
            <button className="py-3 border border-pink-500/30 text-pink-400 font-mono text-sm hover:bg-pink-500/10 hover:border-pink-400 transition-all flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GITHUB
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center mt-8 text-cyan-600 font-mono text-sm">
            [NEW_USER]?{' '}
            <a href="#" className="text-pink-400 hover:text-pink-300 hover:underline">
              &gt; CREATE_PROFILE
            </a>
          </p>

          {/* Scan Line Effect */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  )
}
