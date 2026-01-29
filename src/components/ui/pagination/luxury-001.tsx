import { useState } from 'react'

export default function LuxuryPagination() {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const totalPages = 10

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-zinc-900 to-neutral-900 p-8 flex flex-col items-center justify-center gap-16">
      {/* Gold & Black Elegance */}
      <nav className="flex items-center gap-2 p-6 bg-gradient-to-r from-zinc-900 via-neutral-900 to-zinc-900 rounded-lg border border-yellow-600/30 shadow-[0_0_40px_rgba(202,138,4,0.2)]">
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="w-12 h-12 rounded border border-yellow-600/50 bg-zinc-900 text-yellow-500 hover:bg-yellow-600 hover:text-black hover:border-yellow-500 disabled:border-zinc-700 disabled:text-zinc-700 disabled:cursor-not-allowed transition-all duration-300"
        >
          <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {getPages().map((page, i) => (
          <button
            key={i}
            onClick={() => typeof page === 'number' && setCurrentPage(page)}
            disabled={page === '...'}
            className={`w-12 h-12 rounded text-sm font-semibold transition-all duration-300 ${
              page === currentPage
                ? 'bg-gradient-to-br from-yellow-600 to-yellow-700 text-black border border-yellow-500 shadow-[0_0_20px_rgba(202,138,4,0.5)]'
                : page === '...'
                ? 'text-zinc-600 cursor-default'
                : 'border border-yellow-600/30 text-yellow-500/70 hover:text-yellow-500 hover:border-yellow-600/50 hover:bg-zinc-800'
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="w-12 h-12 rounded border border-yellow-600/50 bg-zinc-900 text-yellow-500 hover:bg-yellow-600 hover:text-black hover:border-yellow-500 disabled:border-zinc-700 disabled:text-zinc-700 disabled:cursor-not-allowed transition-all duration-300"
        >
          <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </nav>

      {/* Sophisticated Diamond Style */}
      <div className="flex flex-col gap-6 p-10 bg-gradient-to-br from-zinc-950 to-neutral-950 rounded-2xl border border-zinc-700 shadow-2xl">
        <div className="flex items-center justify-between gap-8">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="px-6 py-3 bg-zinc-900 border border-zinc-700 text-zinc-300 font-light text-sm tracking-wider uppercase hover:bg-zinc-800 hover:border-zinc-600 hover:text-white disabled:text-zinc-700 disabled:cursor-not-allowed disabled:hover:bg-zinc-900 transition-all"
          >
            First
          </button>

          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-8 py-3 bg-gradient-to-r from-zinc-900 to-neutral-900 border border-zinc-700 text-zinc-300 font-light tracking-wider uppercase hover:from-zinc-800 hover:to-neutral-800 hover:border-zinc-600 hover:text-white disabled:text-zinc-700 disabled:cursor-not-allowed transition-all"
          >
            Previous
          </button>

          <div className="relative px-12 py-6 bg-gradient-to-br from-yellow-600 to-amber-700 rounded-lg shadow-[0_0_40px_rgba(202,138,4,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-lg"></div>
            <div className="relative text-center">
              <div className="text-4xl font-light text-black tracking-wider">{currentPage}</div>
              <div className="text-xs font-light text-black/70 tracking-widest uppercase">of {totalPages}</div>
            </div>
          </div>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-8 py-3 bg-gradient-to-r from-zinc-900 to-neutral-900 border border-zinc-700 text-zinc-300 font-light tracking-wider uppercase hover:from-zinc-800 hover:to-neutral-800 hover:border-zinc-600 hover:text-white disabled:text-zinc-700 disabled:cursor-not-allowed transition-all"
          >
            Next
          </button>

          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="px-6 py-3 bg-zinc-900 border border-zinc-700 text-zinc-300 font-light text-sm tracking-wider uppercase hover:bg-zinc-800 hover:border-zinc-600 hover:text-white disabled:text-zinc-700 disabled:cursor-not-allowed disabled:hover:bg-zinc-900 transition-all"
          >
            Last
          </button>
        </div>

        <div className="flex items-center justify-center gap-4 pt-4 border-t border-zinc-800">
          <span className="text-sm font-light text-zinc-400 tracking-widest uppercase">Display</span>
          {[10, 20, 50].map(value => (
            <button
              key={value}
              onClick={() => setItemsPerPage(value)}
              className={`px-6 py-2 text-sm font-light tracking-wider border transition-all ${
                itemsPerPage === value
                  ? 'bg-gradient-to-r from-yellow-600 to-amber-700 border-yellow-500 text-black shadow-[0_0_15px_rgba(202,138,4,0.3)]'
                  : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300'
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      {/* Minimalist Luxury */}
      <div className="flex items-center gap-6">
        {[1, 2, 3, 4, 5].map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`relative w-16 h-16 rounded-full font-light text-lg transition-all duration-500 overflow-hidden group ${
              page === currentPage
                ? 'bg-gradient-to-br from-yellow-600 to-amber-700 text-black shadow-[0_0_30px_rgba(202,138,4,0.5)]'
                : 'bg-zinc-900 border border-zinc-700 text-zinc-400 hover:border-yellow-600/50 hover:text-yellow-500'
            }`}
          >
            {page === currentPage && (
              <>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent animate-pulse"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-yellow-600 to-amber-700 blur-md opacity-50"></div>
              </>
            )}
            <span className="relative z-10">{page}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
