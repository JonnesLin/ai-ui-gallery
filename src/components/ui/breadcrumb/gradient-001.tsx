export default function GradientBreadcrumb() {
  const paths = [
    { label: 'Home', href: '#', icon: true },
    { label: 'Products', href: '#' },
    { label: 'Electronics', href: '#' },
    { label: 'Smartphones', href: '#', current: true },
  ]

  return (
    <div className="min-h-screen bg-slate-900 p-8 space-y-12">
      <h2 className="text-xs font-medium text-gray-400 uppercase tracking-widest">Gradient Breadcrumbs</h2>

      {/* Gradient text breadcrumb */}
      <nav className="flex items-center gap-2 text-sm">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-gray-600">/</span>}
            {path.current ? (
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
                {path.label}
              </span>
            ) : (
              <a
                href={path.href}
                className="text-gray-400 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text hover:text-transparent transition-all"
              >
                {path.label}
              </a>
            )}
          </div>
        ))}
      </nav>

      {/* Gradient background container */}
      <nav className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-sm">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-3">
            {i > 0 && <span className="text-white/40">/</span>}
            {path.current ? (
              <span className="text-white/70">{path.label}</span>
            ) : (
              <a href={path.href} className="text-white hover:text-white/80 transition-colors">
                {path.label}
              </a>
            )}
          </div>
        ))}
      </nav>

      {/* Gradient border */}
      <div className="inline-block p-[2px] rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
        <nav className="flex items-center gap-3 px-6 py-3 bg-slate-900 rounded-[10px] text-sm">
          {paths.map((path, i) => (
            <div key={i} className="flex items-center gap-3">
              {i > 0 && <span className="text-gray-600">/</span>}
              {path.current ? (
                <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                  {path.label}
                </span>
              ) : (
                <a href={path.href} className="text-gray-300 hover:text-white transition-colors">
                  {path.label}
                </a>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Animated gradient */}
      <nav
        className="inline-flex items-center gap-3 px-6 py-3 rounded-xl text-sm animate-gradient-x"
        style={{
          background: 'linear-gradient(90deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4)',
          backgroundSize: '300% 100%',
          animation: 'gradient-x 3s ease infinite'
        }}
      >
        <style>{`
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}</style>
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-3">
            {i > 0 && <span className="text-white/40">/</span>}
            {path.current ? (
              <span className="text-white/70">{path.label}</span>
            ) : (
              <a href={path.href} className="text-white hover:text-white/80 transition-colors">
                {path.label}
              </a>
            )}
          </div>
        ))}
      </nav>

      {/* Gradient items */}
      <nav className="flex items-center gap-2 text-sm">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-2">
            {i > 0 && (
              <svg className="w-3 h-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
            <a
              href={path.href}
              className={`px-4 py-2 rounded-lg transition-all ${
                path.current
                  ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white'
                  : 'text-gray-400 hover:bg-gradient-to-r hover:from-violet-600/20 hover:to-fuchsia-600/20 hover:text-white'
              }`}
            >
              {path.label}
            </a>
          </div>
        ))}
      </nav>

      {/* Multi-color gradient separator */}
      <nav className="flex items-center gap-4 text-sm">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-4">
            {i > 0 && (
              <div className="w-8 h-0.5 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />
            )}
            {path.current ? (
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
                {path.label}
              </span>
            ) : (
              <a href={path.href} className="text-gray-400 hover:text-white transition-colors">
                {path.label}
              </a>
            )}
          </div>
        ))}
      </nav>

      {/* Responsive gradient */}
      <nav className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-sm">
        <a href="#" className="text-white hover:text-white/80 transition-colors flex items-center gap-1.5">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <span className="hidden md:inline">Home</span>
        </a>
        <span className="text-white/40">/</span>
        <span className="text-white/50 md:hidden">...</span>
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-white hover:text-white/80 transition-colors">Products</a>
          <span className="text-white/40">/</span>
          <a href="#" className="text-white hover:text-white/80 transition-colors">Electronics</a>
          <span className="text-white/40">/</span>
        </div>
        <span className="text-white/70">Smartphones</span>
      </nav>
    </div>
  )
}
