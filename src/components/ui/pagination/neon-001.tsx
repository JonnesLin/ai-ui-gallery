import { useState } from 'react'

export default function NeonPagination() {
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
    <div className="min-h-screen bg-black p-8 flex flex-col items-center justify-center gap-12">
      {/* Neon Glow Pagination */}
      <div className="flex flex-col gap-4 items-center">
        <nav className="flex items-center gap-2 p-4 rounded-lg bg-gray-950 border border-pink-500/50 shadow-[0_0_30px_rgba(236,72,153,0.3)]">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="w-10 h-10 rounded bg-gray-900 text-pink-400 border border-pink-500/50 hover:text-pink-300 hover:border-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] disabled:border-gray-700 disabled:text-gray-700 disabled:cursor-not-allowed transition-all"
          >
            ‹‹
          </button>
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="w-10 h-10 rounded bg-gray-900 text-pink-400 border border-pink-500/50 hover:text-pink-300 hover:border-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] disabled:border-gray-700 disabled:text-gray-700 disabled:cursor-not-allowed transition-all"
          >
            ‹
          </button>

          {getPages().map((page, i) => (
            <button
              key={i}
              onClick={() => typeof page === 'number' && setCurrentPage(page)}
              disabled={page === '...'}
              className={`w-10 h-10 rounded text-sm font-bold transition-all ${
                page === currentPage
                  ? 'bg-pink-500 text-white border border-pink-400 shadow-[0_0_25px_rgba(236,72,153,0.8)]'
                  : page === '...'
                  ? 'bg-transparent text-pink-500/30 cursor-default border border-transparent'
                  : 'bg-gray-900 text-pink-400 border border-pink-500/30 hover:text-pink-300 hover:border-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="w-10 h-10 rounded bg-gray-900 text-pink-400 border border-pink-500/50 hover:text-pink-300 hover:border-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] disabled:border-gray-700 disabled:text-gray-700 disabled:cursor-not-allowed transition-all"
          >
            ›
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="w-10 h-10 rounded bg-gray-900 text-pink-400 border border-pink-500/50 hover:text-pink-300 hover:border-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] disabled:border-gray-700 disabled:text-gray-700 disabled:cursor-not-allowed transition-all"
          >
            ››
          </button>
        </nav>

        <div className="flex items-center gap-4 text-sm font-mono">
          <span className="text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]">
            [{startItem.toString().padStart(3, '0')}-{endItem.toString().padStart(3, '0')}] / [{totalItems.toString().padStart(3, '0')}]
          </span>
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">SIZE:</span>
            <select
              value={pageSize}
              onChange={e => setPageSize(Number(e.target.value))}
              className="px-3 py-1.5 rounded bg-gray-900 text-cyan-400 border border-cyan-500/50 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] cursor-pointer transition-all font-mono"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>
      </div>

      {/* Multi-Color Neon */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="px-6 py-3 rounded-lg bg-gray-950 text-purple-400 font-bold border border-purple-500/50 hover:text-purple-300 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] disabled:border-gray-700 disabled:text-gray-700 disabled:cursor-not-allowed transition-all"
        >
          ← PREV
        </button>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map(page => {
            const colors = [
              'border-red-500/50 text-red-400 hover:border-red-400 hover:shadow-[0_0_20px_rgba(239,68,68,0.6)]',
              'border-yellow-500/50 text-yellow-400 hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(234,179,8,0.6)]',
              'border-green-500/50 text-green-400 hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]',
              'border-cyan-500/50 text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]',
              'border-purple-500/50 text-purple-400 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]',
            ]
            const activeColors = [
              'bg-red-500 text-white border-red-400 shadow-[0_0_30px_rgba(239,68,68,0.8)]',
              'bg-yellow-500 text-black border-yellow-400 shadow-[0_0_30px_rgba(234,179,8,0.8)]',
              'bg-green-500 text-white border-green-400 shadow-[0_0_30px_rgba(34,197,94,0.8)]',
              'bg-cyan-500 text-black border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.8)]',
              'bg-purple-500 text-white border-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.8)]',
            ]
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-12 h-12 rounded-lg font-bold border transition-all ${
                  page === currentPage
                    ? activeColors[page - 1]
                    : `bg-gray-950 ${colors[page - 1]}`
                }`}
              >
                {page}
              </button>
            )
          })}
        </div>
        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="px-6 py-3 rounded-lg bg-gray-950 text-purple-400 font-bold border border-purple-500/50 hover:text-purple-300 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] disabled:border-gray-700 disabled:text-gray-700 disabled:cursor-not-allowed transition-all"
        >
          NEXT →
        </button>
      </div>

      {/* Electric Minimal */}
      <div className="flex items-center gap-8">
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="text-sm text-blue-400 font-mono hover:text-blue-300 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] disabled:text-gray-700 disabled:cursor-not-allowed transition-all"
        >
          ‹‹ BACK
        </button>
        <div className="flex items-center gap-3 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent blur-xl" />
          <span className="text-3xl text-blue-400 font-mono font-bold relative z-10 shadow-[0_0_20px_rgba(59,130,246,0.8)]">
            {currentPage.toString().padStart(2, '0')}
          </span>
          <span className="text-lg text-blue-600 font-mono relative z-10">/</span>
          <span className="text-lg text-blue-500 font-mono relative z-10">{totalPages.toString().padStart(2, '0')}</span>
        </div>
        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="text-sm text-blue-400 font-mono hover:text-blue-300 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] disabled:text-gray-700 disabled:cursor-not-allowed transition-all"
        >
          NEXT ››
        </button>
      </div>

      {/* Neon Progress */}
      <div className="w-96">
        <div className="flex justify-between text-xs text-pink-400 font-mono mb-2">
          <span className="shadow-[0_0_10px_rgba(236,72,153,0.5)]">PAGE.{currentPage.toString().padStart(2, '0')}</span>
          <span className="shadow-[0_0_10px_rgba(236,72,153,0.5)]">TOTAL.{totalPages.toString().padStart(2, '0')}</span>
        </div>
        <div className="h-2 bg-gray-950 rounded-full border border-pink-500/50 overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.8)]"
            style={{ width: `${(currentPage / totalPages) * 100}%` }}
          />
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="text-xs text-pink-400 font-mono hover:text-pink-300 hover:shadow-[0_0_10px_rgba(236,72,153,0.5)] disabled:opacity-30 transition-all"
          >
            ← PREVIOUS
          </button>
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="text-xs text-pink-400 font-mono hover:text-pink-300 hover:shadow-[0_0_10px_rgba(236,72,153,0.5)] disabled:opacity-30 transition-all"
          >
            NEXT →
          </button>
        </div>
      </div>

      {/* Glowing Dots */}
      <div className="flex items-center gap-3">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`rounded-full transition-all ${
              page === currentPage
                ? 'w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 shadow-[0_0_25px_rgba(236,72,153,0.8)]'
                : 'w-3 h-3 bg-pink-500/30 border border-pink-500/50 hover:bg-pink-500/50 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
