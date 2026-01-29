export default function FuturisticFormLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="w-full max-w-2xl relative z-10">
        <div className="bg-gradient-to-br from-slate-900/90 to-blue-900/90 backdrop-blur-xl rounded-2xl border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.3)] overflow-hidden">
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

            <div className="p-8 md:p-12">
              <div className="mb-10 text-center">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                </div>
                <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                  NEURAL INTERFACE
                </h1>
                <p className="text-blue-300/70 text-sm tracking-widest uppercase">Registration Protocol</p>
              </div>

              <form className="space-y-8">
                <div className="space-y-6 relative">
                  <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent"></div>

                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/50">
                      01
                    </div>
                    <h2 className="text-lg font-bold text-blue-300 uppercase tracking-wider">Identity Matrix</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="relative group">
                      <label htmlFor="firstName" className="block text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wider">
                        First Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-3 bg-slate-950/50 border border-blue-500/30 rounded-lg text-blue-100 placeholder:text-slate-600 focus:outline-none focus:border-blue-400 focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
                        placeholder="Enter"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    </div>

                    <div className="relative group">
                      <label htmlFor="lastName" className="block text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wider">
                        Last Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-3 bg-slate-950/50 border border-blue-500/30 rounded-lg text-blue-100 placeholder:text-slate-600 focus:outline-none focus:border-blue-400 focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
                        placeholder="Enter"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="relative group">
                    <label htmlFor="email" className="block text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wider">
                      Neural Link Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-slate-950/50 border border-blue-500/30 rounded-lg text-blue-100 placeholder:text-slate-600 focus:outline-none focus:border-blue-400 focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
                      placeholder="user@neural.link"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </div>

                  <div className="relative group">
                    <label htmlFor="phone" className="block text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wider">
                      Communication Channel
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 bg-slate-950/50 border border-blue-500/30 rounded-lg text-blue-100 placeholder:text-slate-600 focus:outline-none focus:border-blue-400 focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
                      placeholder="+1-555-0000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </div>
                </div>

                <div className="space-y-6 relative">
                  <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent"></div>

                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-cyan-500/50">
                      02
                    </div>
                    <h2 className="text-lg font-bold text-cyan-300 uppercase tracking-wider">Access Protocol</h2>
                  </div>

                  <div className="relative group">
                    <label htmlFor="username" className="block text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wider">
                      User Identifier <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="w-full px-4 py-3 bg-slate-950/50 border border-cyan-500/30 rounded-lg text-cyan-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all"
                      placeholder="Choose ID"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </div>

                  <div className="relative group">
                    <label htmlFor="password" className="block text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wider">
                      Security Key <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="w-full px-4 py-3 bg-slate-950/50 border border-cyan-500/30 rounded-lg text-cyan-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all"
                      placeholder="••••••••"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </div>

                  <div className="p-4 bg-blue-950/30 border border-blue-500/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      <p className="text-xs font-semibold text-cyan-400 uppercase">Security Requirements</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-blue-300/70">
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400">▹</span> 8+ chars
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400">▹</span> Uppercase
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400">▹</span> Numbers
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400">▹</span> Symbols
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <label htmlFor="confirmPassword" className="block text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wider">
                      Verify Key <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="w-full px-4 py-3 bg-slate-950/50 border border-cyan-500/30 rounded-lg text-cyan-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all"
                      placeholder="••••••••"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </div>
                </div>

                <div className="space-y-6 relative">
                  <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent"></div>

                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/50">
                      03
                    </div>
                    <h2 className="text-lg font-bold text-blue-300 uppercase tracking-wider">Additional Data</h2>
                  </div>

                  <div className="relative group">
                    <label htmlFor="bio" className="block text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wider">
                      Profile Data
                    </label>
                    <textarea
                      id="bio"
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-950/50 border border-blue-500/30 rounded-lg text-blue-100 placeholder:text-slate-600 focus:outline-none focus:border-blue-400 focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all resize-none"
                      placeholder="Enter data..."
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </div>

                  <div className="space-y-3 p-5 bg-slate-950/50 border border-blue-500/20 rounded-lg">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="terms"
                        className="mt-1 w-4 h-4 bg-slate-950 border-2 border-blue-500/50 rounded text-blue-500 focus:ring-0 focus:ring-offset-0"
                      />
                      <label htmlFor="terms" className="text-xs text-blue-300/90 uppercase tracking-wide">
                        Accept neural interface terms <span className="text-cyan-400">*</span>
                      </label>
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="updates"
                        className="mt-1 w-4 h-4 bg-slate-950 border-2 border-blue-500/50 rounded text-blue-500 focus:ring-0 focus:ring-offset-0"
                      />
                      <label htmlFor="updates" className="text-xs text-blue-300/90 uppercase tracking-wide">
                        Receive system updates
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    type="button"
                    className="flex-1 px-8 py-3 bg-transparent border border-blue-500/50 text-blue-400 rounded-lg font-semibold uppercase text-sm tracking-wider hover:bg-blue-950/30 hover:border-blue-400 transition-all"
                  >
                    Abort
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold uppercase text-sm tracking-wider hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-500/30 transition-all"
                  >
                    Initialize
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
