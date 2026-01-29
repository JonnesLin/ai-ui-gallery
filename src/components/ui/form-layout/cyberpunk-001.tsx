export default function CyberpunkFormLayout() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="w-full max-w-2xl bg-gray-950 border-2 border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.5)] relative z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>

        <div className="p-8 md:p-12">
          <div className="mb-10 relative">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 bg-cyan-500 animate-pulse"></div>
              <h1 className="text-3xl font-black text-cyan-400 uppercase tracking-widest glitch" style={{ fontFamily: 'monospace' }}>
                [SYSTEM_ACCESS]
              </h1>
            </div>
            <p className="text-pink-500 font-mono text-sm">
              &gt; Initialize registration protocol...
            </p>
          </div>

          <form className="space-y-8">
            <div className="space-y-6 border border-cyan-900 bg-cyan-950/20 p-6 relative">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-cyan-500 font-mono text-xs">[01]</span>
                <h2 className="text-lg font-bold text-cyan-400 uppercase tracking-wider font-mono">USER_DATA</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-mono text-cyan-300 mb-2 uppercase">
                    &gt; FIRST_NAME <span className="text-pink-500">[REQ]</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 bg-black border border-cyan-700 text-cyan-400 font-mono placeholder:text-cyan-900 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all"
                    placeholder="enter_first_name"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-xs font-mono text-cyan-300 mb-2 uppercase">
                    &gt; LAST_NAME <span className="text-pink-500">[REQ]</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 bg-black border border-cyan-700 text-cyan-400 font-mono placeholder:text-cyan-900 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all"
                    placeholder="enter_last_name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono text-cyan-300 mb-2 uppercase">
                  &gt; EMAIL_ADDRESS <span className="text-pink-500">[REQ]</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-black border border-cyan-700 text-cyan-400 font-mono placeholder:text-cyan-900 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all"
                  placeholder="user@cyber.net"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-mono text-cyan-300 mb-2 uppercase">
                  &gt; PHONE_NUMBER <span className="text-cyan-700">[OPT]</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-black border border-cyan-700 text-cyan-400 font-mono placeholder:text-cyan-900 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all"
                  placeholder="+1-555-0000"
                />
              </div>
            </div>

            <div className="space-y-6 border border-pink-900 bg-pink-950/20 p-6 relative">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"></div>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-pink-500 font-mono text-xs">[02]</span>
                <h2 className="text-lg font-bold text-pink-400 uppercase tracking-wider font-mono">SECURITY_LAYER</h2>
              </div>

              <div>
                <label htmlFor="username" className="block text-xs font-mono text-pink-300 mb-2 uppercase">
                  &gt; USERNAME <span className="text-pink-500">[REQ]</span>
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full px-4 py-3 bg-black border border-pink-700 text-pink-400 font-mono placeholder:text-pink-900 focus:outline-none focus:border-pink-500 focus:shadow-[0_0_10px_rgba(236,72,153,0.5)] transition-all"
                  placeholder="choose_username"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-xs font-mono text-pink-300 mb-2 uppercase">
                  &gt; PASSWORD <span className="text-pink-500">[REQ]</span>
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 bg-black border border-pink-700 text-pink-400 font-mono placeholder:text-pink-900 focus:outline-none focus:border-pink-500 focus:shadow-[0_0_10px_rgba(236,72,153,0.5)] transition-all"
                  placeholder="••••••••"
                />
                <div className="mt-3 p-3 bg-black border border-pink-900 font-mono text-xs text-pink-300">
                  <p>&gt; REQUIREMENTS:</p>
                  <p className="ml-4 mt-1">- MIN_LENGTH: 8</p>
                  <p className="ml-4">- SPECIAL_CHARS: 1+</p>
                  <p className="ml-4">- NUMERIC: 1+</p>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-xs font-mono text-pink-300 mb-2 uppercase">
                  &gt; CONFIRM_PASSWORD <span className="text-pink-500">[REQ]</span>
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full px-4 py-3 bg-black border border-pink-700 text-pink-400 font-mono placeholder:text-pink-900 focus:outline-none focus:border-pink-500 focus:shadow-[0_0_10px_rgba(236,72,153,0.5)] transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="space-y-6 border border-purple-900 bg-purple-950/20 p-6 relative">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-purple-500 font-mono text-xs">[03]</span>
                <h2 className="text-lg font-bold text-purple-400 uppercase tracking-wider font-mono">ADDITIONAL_DATA</h2>
              </div>

              <div>
                <label htmlFor="bio" className="block text-xs font-mono text-purple-300 mb-2 uppercase">
                  &gt; BIO_INFO <span className="text-cyan-700">[OPT]</span>
                </label>
                <textarea
                  id="bio"
                  rows={4}
                  className="w-full px-4 py-3 bg-black border border-purple-700 text-purple-400 font-mono placeholder:text-purple-900 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all resize-none"
                  placeholder="enter_bio_data..."
                />
              </div>

              <div className="space-y-3 border border-cyan-900 bg-black p-4">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 w-4 h-4 bg-black border-2 border-cyan-500 rounded-none text-cyan-500 focus:ring-0 focus:ring-offset-0"
                  />
                  <label htmlFor="terms" className="text-xs font-mono text-cyan-300 leading-tight">
                    [ ] ACCEPT_TERMS_AND_CONDITIONS <span className="text-pink-500">[REQ]</span>
                  </label>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="updates"
                    className="mt-1 w-4 h-4 bg-black border-2 border-cyan-500 rounded-none text-cyan-500 focus:ring-0 focus:ring-offset-0"
                  />
                  <label htmlFor="updates" className="text-xs font-mono text-cyan-300 leading-tight">
                    [ ] SUBSCRIBE_TO_UPDATES
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="button"
                className="flex-1 px-8 py-3 bg-black border-2 border-pink-700 text-pink-500 font-mono text-sm uppercase hover:bg-pink-950 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all"
              >
                [CANCEL]
              </button>
              <button
                type="submit"
                className="flex-1 px-8 py-3 bg-cyan-500 border-2 border-cyan-400 text-black font-mono text-sm uppercase font-bold hover:bg-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.8)] transition-all"
              >
                [INITIALIZE]
              </button>
            </div>

            <div className="text-center">
              <p className="text-xs font-mono text-cyan-700">
                &gt; STATUS: READY_FOR_INPUT
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
