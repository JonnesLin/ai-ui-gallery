export default function CyberpunkFooter() {
  const links = {
    Company: ['About', 'Careers', 'Press', 'Blog'],
    Products: ['Features', 'Pricing', 'API', 'Integrations'],
    Resources: ['Documentation', 'Guides', 'Support', 'Status'],
    Legal: ['Privacy', 'Terms', 'Cookie Policy'],
  }

  return (
    <footer className="relative bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent" />

      <div className="absolute top-1/4 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <h3 className="text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 glitch-text">
                &lt;BRAND/&gt;
              </h3>
              <div className="flex gap-1 mt-2">
                <span className="w-2 h-2 bg-cyan-500 animate-pulse" />
                <span className="w-2 h-2 bg-pink-500 animate-pulse delay-100" />
                <span className="w-2 h-2 bg-yellow-500 animate-pulse delay-200" />
              </div>
            </div>
            <p className="text-gray-500 text-sm font-mono leading-relaxed">
              // Neural interface active<br />
              // System: ONLINE
            </p>
            <div className="mt-6 border border-cyan-500/30 bg-cyan-500/5 p-4">
              <p className="text-cyan-400 font-mono text-xs mb-3">SYNC_NEWSLETTER</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="input@email.net"
                  className="flex-1 bg-black border border-cyan-500/30 text-cyan-400 placeholder-gray-600 font-mono text-sm px-3 py-2 focus:outline-none focus:border-cyan-400"
                />
                <button className="bg-cyan-500 text-black font-mono font-bold text-sm px-4 py-2 hover:bg-cyan-400 transition-colors">
                  SYNC
                </button>
              </div>
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-pink-500 font-mono font-bold text-sm uppercase mb-4 flex items-center gap-2">
                <span className="w-4 h-px bg-pink-500" />
                {category}
              </h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-cyan-400 text-sm font-mono transition-colors flex items-center gap-2 group"
                    >
                      <span className="text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <p className="text-gray-600 text-sm font-mono">
                &copy; 2077 BRAND_CORP // ALL_RIGHTS_RESERVED
              </p>
              <div className="hidden md:flex items-center gap-2 px-3 py-1 border border-green-500/30 bg-green-500/5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-500 text-xs font-mono">SYSTEMS NOMINAL</span>
              </div>
            </div>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 border border-cyan-500/30 bg-cyan-500/5 flex items-center justify-center text-cyan-500 hover:bg-cyan-500 hover:text-black transition-all group">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border border-pink-500/30 bg-pink-500/5 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-black transition-all group">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border border-yellow-500/30 bg-yellow-500/5 flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all group">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
