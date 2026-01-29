export default function FuturisticFooter() {
  const links = {
    Company: ['About', 'Careers', 'Press', 'Blog'],
    Products: ['Features', 'Pricing', 'API', 'Integrations'],
    Resources: ['Documentation', 'Guides', 'Support', 'Status'],
    Legal: ['Privacy', 'Terms', 'Cookie Policy'],
  }

  return (
    <footer className="relative bg-gradient-to-b from-slate-950 to-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30">
        <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute inset-8 rounded-full border border-cyan-500/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
        <div className="absolute inset-16 rounded-full border border-purple-500/20 animate-spin" style={{ animationDuration: '25s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-blue-400 text-xs font-mono tracking-wider">ONLINE</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
              BRAND
              <span className="text-blue-500">.</span>
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Pioneering the next generation of digital experiences.
            </p>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-20" />
                <div className="relative bg-slate-900 rounded-lg p-4 border border-slate-800">
                  <p className="text-slate-400 text-xs mb-3 font-mono">SUBSCRIBE_TO_UPDATES</p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="email@domain.com"
                      className="flex-1 bg-slate-950 border border-slate-700 rounded px-3 py-2 text-white placeholder-slate-600 text-sm font-mono focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-black font-semibold text-sm px-4 py-2 rounded hover:from-blue-400 hover:to-cyan-400 transition-all">
                      SYNC
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-slate-300 font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-6 h-px bg-gradient-to-r from-blue-500 to-transparent" />
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-slate-500 hover:text-blue-400 text-sm transition-colors group flex items-center gap-2"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-blue-500 transition-all duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <p className="text-slate-600 text-sm font-mono">
                &copy; 2024 BRAND_SYSTEMS
              </p>
              <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                <span className="text-green-500 text-xs font-mono">ALL_SYSTEMS_NOMINAL</span>
              </div>
            </div>
            <div className="flex gap-3">
              <a href="#" className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity" />
                <div className="relative w-10 h-10 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center text-slate-500 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </div>
              </a>
              <a href="#" className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity" />
                <div className="relative w-10 h-10 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center text-slate-500 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </div>
              </a>
              <a href="#" className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity" />
                <div className="relative w-10 h-10 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center text-slate-500 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
