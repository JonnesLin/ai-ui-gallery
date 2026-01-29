export default function MonochromeBreadcrumb() {
  const paths = [
    { label: 'Home', href: '#', icon: true },
    { label: 'Products', href: '#' },
    { label: 'Electronics', href: '#' },
    { label: 'Smartphones', href: '#', current: true },
  ];

  return (
    <div className="min-h-screen bg-white p-8 space-y-12">
      <h2 className="text-xs font-medium text-gray-500 uppercase tracking-widest">Monochrome Breadcrumbs</h2>

      {/* Pure black and white */}
      <nav className="flex items-center gap-2 text-sm">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-black">/</span>}
            {path.current ? (
              <span className="text-black font-bold">{path.label}</span>
            ) : (
              <a href={path.href} className="text-gray-600 hover:text-black transition-colors font-medium">
                {path.label}
              </a>
            )}
          </div>
        ))}
      </nav>

      {/* Grayscale gradient */}
      <nav className="flex items-center gap-3 text-sm">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-3">
            {i > 0 && (
              <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
            <a
              href={path.href}
              className={`transition-colors ${
                path.current
                  ? 'text-black font-bold'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {path.label}
            </a>
          </div>
        ))}
      </nav>

      {/* High contrast boxes */}
      <nav className="inline-flex items-center border-2 border-black text-sm">
        {paths.map((path, i) => (
          <a
            key={i}
            href={path.href}
            className={`px-6 py-3 border-r-2 border-black last:border-r-0 font-medium transition-colors ${
              path.current
                ? 'bg-black text-white'
                : 'bg-white text-black hover:bg-gray-200'
            }`}
          >
            {path.label}
          </a>
        ))}
      </nav>

      {/* Minimal grayscale */}
      <nav className="inline-flex items-center gap-2 px-6 py-4 bg-gray-100 border border-gray-300 text-sm">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-gray-400">•</span>}
            {path.current ? (
              <span className="text-black font-semibold">{path.label}</span>
            ) : (
              <a href={path.href} className="text-gray-600 hover:text-black hover:underline underline-offset-4 transition-all">
                {path.label}
              </a>
            )}
          </div>
        ))}
      </nav>

      {/* Striped pattern */}
      <nav className="inline-flex items-center text-sm overflow-hidden border-2 border-black">
        {paths.map((path, i) => (
          <a
            key={i}
            href={path.href}
            className={`px-5 py-3 border-r-2 border-black last:border-r-0 font-medium transition-all ${
              path.current
                ? 'bg-black text-white'
                : i % 2 === 0
                ? 'bg-white text-black hover:bg-gray-100'
                : 'bg-gray-100 text-black hover:bg-gray-200'
            }`}
          >
            {path.label}
          </a>
        ))}
      </nav>

      {/* Dots and dashes */}
      <nav className="flex items-center gap-3 text-sm">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-3">
            {i > 0 && (
              <div className="flex items-center gap-1">
                <span className="w-1 h-1 bg-black rounded-full"></span>
                <span className="w-3 h-0.5 bg-black"></span>
                <span className="w-1 h-1 bg-black rounded-full"></span>
              </div>
            )}
            {path.current ? (
              <span className="px-4 py-2 bg-black text-white font-bold">{path.label}</span>
            ) : (
              <a
                href={path.href}
                className="px-4 py-2 border-2 border-black text-black hover:bg-black hover:text-white font-semibold transition-all"
              >
                {path.label}
              </a>
            )}
          </div>
        ))}
      </nav>

      {/* Inverted style */}
      <nav className="inline-flex items-center gap-3 px-6 py-4 bg-black text-sm">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-3">
            {i > 0 && (
              <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
            {path.current ? (
              <span className="text-white font-bold">{path.label}</span>
            ) : (
              <a href={path.href} className="text-gray-400 hover:text-white transition-colors">
                {path.label}
              </a>
            )}
          </div>
        ))}
      </nav>

      {/* With home icon */}
      <nav className="flex items-center gap-2 text-sm">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-gray-400">/</span>}
            {path.current ? (
              <span className="text-black font-bold">{path.label}</span>
            ) : (
              <a href={path.href} className="text-gray-600 hover:text-black transition-colors flex items-center gap-1.5">
                {i === 0 && (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                )}
                {path.label}
              </a>
            )}
          </div>
        ))}
      </nav>

      {/* Responsive monochrome */}
      <nav className="inline-flex items-center gap-2 px-5 py-3 border-2 border-black text-sm">
        <a href="#" className="text-black hover:underline underline-offset-4 transition-all font-medium flex items-center gap-1.5">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <span className="hidden md:inline">Home</span>
        </a>
        <span className="text-gray-400">/</span>
        <span className="text-gray-600 md:hidden">...</span>
        <div className="hidden md:flex items-center gap-2">
          <a href="#" className="text-gray-600 hover:text-black hover:underline underline-offset-4 transition-all font-medium">
            Products
          </a>
          <span className="text-gray-400">/</span>
          <a href="#" className="text-gray-600 hover:text-black hover:underline underline-offset-4 transition-all font-medium">
            Electronics
          </a>
          <span className="text-gray-400">/</span>
        </div>
        <span className="text-black font-bold">Smartphones</span>
      </nav>
    </div>
  );
}
