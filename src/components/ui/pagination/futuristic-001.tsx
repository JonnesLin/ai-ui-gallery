import { useState } from 'react'

export default function FuturisticPagination() {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const totalPages = 10
  const totalItems = 100

  const getPages = () => {
    const pages: (number | string)[] = []
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, '...', totalPages)
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages)
      }
    }
    return pages
  }

  const startItem = (currentPage - 1) * pageSize + 1
  const endItem = Math.min(currentPage * pageSize, totalItems)

  return (
    <div className="min-h-screen bg-slate-950 p-8 flex flex-col items-center justify-center gap-12">
      {/* Advanced Futuristic Pagination */}
      <div className="flex flex-col gap-4 items-center">
        <nav className="flex items-center gap-2 p-3 rounded-lg bg-slate-900/50 border border-cyan-500/30 backdrop-blur-sm">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="w-10 h-10 bg-slate-800/50 text-cyan-400 font-mono text-xs border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-[0_0_10px_rgba(6,182,212,0.1)]"
          >
            |‹
          </button>
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="w-10 h-10 bg-slate-800/50 text-cyan-400 font-mono text-xs border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-[0_0_10px_rgba(6,182,212,0.1)]"
          >
            ‹
          </button>

          {getPages().map((page, i) => (
            <button
              key={i}
              onClick={() => typeof page === 'number' && setCurrentPage(page)}
              disabled={page === '...'}
              className={`w-10 h-10 font-mono text-sm transition-all ${
                page === currentPage
                  ? 'bg-cyan-500 text-slate-950 border border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.5)]'
                  : page === '...'
                  ? 'bg-transparent text-cyan-500/30 cursor-default border border-transparent'
                  : 'bg-slate-800/50 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.1)]'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="w-10 h-10 bg-slate-800/50 text-cyan-400 font-mono text-xs border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-[0_0_10px_rgba(6,182,212,0.1)]"
          >
            ›
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="w-10 h-10 bg-slate-800/50 text-cyan-400 font-mono text-xs border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-[0_0_10px_rgba(6,182,212,0.1)]"
          >
            ›|
          </button>
        </nav>

        <div className="flex items-center gap-4 text-xs font-mono">
          <span className="text-cyan-400/70">
            [{startItem.toString().padStart(3, '0')}-{endItem.toString().padStart(3, '0')}] / [{totalItems.toString().padStart(3, '0')}]
          </span>
          <div className="flex items-center gap-2">
            <span className="text-cyan-400/70">LIMIT:</span>
            <select
              value={pageSize}
              onChange={e => setPageSize(Number(e.target.value))}
              className="px-3 py-1.5 bg-slate-800/50 text-cyan-400 font-mono text-xs border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 cursor-pointer transition-all shadow-[0_0_10px_rgba(6,182,212,0.1)]"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tech Pagination */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="px-5 py-2.5 bg-slate-800/50 text-blue-400 font-mono text-sm border border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-[0_0_15px_rgba(59,130,246,0.2)]"
        >
          ← PREV
        </button>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-11 h-11 font-mono text-sm transition-all ${
                page === currentPage
                  ? 'bg-blue-500 text-white border border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.6)]'
                  : 'bg-slate-800/50 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.1)]'
              }`}
            >
              {page.toString().padStart(2, '0')}
            </button>
          ))}
        </div>
        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="px-5 py-2.5 bg-slate-800/50 text-blue-400 font-mono text-sm border border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-[0_0_15px_rgba(59,130,246,0.2)]"
        >
          NEXT →
        </button>
      </div>

      {/* Hologram Style */}
      <div className="flex items-center gap-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-pulse" />
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="text-sm text-cyan-400 font-mono hover:text-cyan-300 disabled:text-cyan-600 disabled:cursor-not-allowed transition-colors relative z-10"
        >
          ‹‹ BACK
        </button>
        <div className="flex items-center gap-3 relative z-10">
          <span className="text-lg text-cyan-400 font-mono tracking-wider">{currentPage.toString().padStart(2, '0')}</span>
          <span className="text-sm text-cyan-500/50 font-mono">//</span>
          <span className="text-sm text-cyan-500/70 font-mono">{totalPages.toString().padStart(2, '0')}</span>
        </div>
        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="text-sm text-cyan-400 font-mono hover:text-cyan-300 disabled:text-cyan-600 disabled:cursor-not-allowed transition-colors relative z-10"
        >
          NEXT ››
        </button>
      </div>

      {/* Progress Bar Tech */}
      <div className="w-96">
        <div className="flex justify-between text-xs text-cyan-400/70 font-mono mb-2">
          <span>PAGE.{currentPage.toString().padStart(2, '0')}</span>
          <span>TOTAL.{totalPages.toString().padStart(2, '0')}</span>
        </div>
        <div className="h-2 bg-slate-800/50 border border-cyan-500/30 overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
            style={{ width: `${(currentPage / totalPages) * 100}%` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="text-xs text-cyan-400 font-mono hover:text-cyan-300 disabled:opacity-30 transition-colors"
          >
            ← PREVIOUS
          </button>
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="text-xs text-cyan-400 font-mono hover:text-cyan-300 disabled:opacity-30 transition-colors"
          >
            NEXT →
          </button>
        </div>
      </div>
    </div>
  )
}
