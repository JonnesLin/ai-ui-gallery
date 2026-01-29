import { useState } from 'react'

export default function NaturePagination() {
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-8 flex flex-col items-center justify-center gap-12">
      {/* Organic Nature Pagination */}
      <div className="flex flex-col gap-4 items-center">
        <nav className="flex items-center gap-2 p-4 rounded-3xl bg-gradient-to-r from-green-100/80 to-emerald-100/80 backdrop-blur-sm border border-green-300/50 shadow-lg shadow-green-900/10">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="w-11 h-11 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 text-white hover:from-green-500 hover:to-emerald-500 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all shadow-md"
          >
            <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="w-11 h-11 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 text-white hover:from-green-500 hover:to-emerald-500 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all shadow-md"
          >
            <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {getPages().map((page, i) => (
            <button
              key={i}
              onClick={() => typeof page === 'number' && setCurrentPage(page)}
              disabled={page === '...'}
              className={`w-11 h-11 rounded-full text-sm font-medium transition-all ${
                page === currentPage
                  ? 'bg-gradient-to-br from-green-600 to-emerald-700 text-white shadow-lg shadow-green-600/40'
                  : page === '...'
                  ? 'bg-transparent text-green-400 cursor-default'
                  : 'bg-white/60 text-green-700 border border-green-300/50 hover:bg-white hover:border-green-400 shadow-sm'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="w-11 h-11 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 text-white hover:from-green-500 hover:to-emerald-500 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all shadow-md"
          >
            <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="w-11 h-11 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 text-white hover:from-green-500 hover:to-emerald-500 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all shadow-md"
          >
            <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>
        </nav>

        <div className="flex items-center gap-4 text-sm">
          <span className="text-green-700">
            Showing {startItem}–{endItem} of {totalItems}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-green-700">Items per page:</span>
            <select
              value={pageSize}
              onChange={e => setPageSize(Number(e.target.value))}
              className="px-4 py-1.5 rounded-full bg-white text-green-700 border border-green-300 hover:border-green-400 cursor-pointer transition-colors shadow-sm"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>
      </div>

      {/* Leaf Style Pagination */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-teal-600 text-white font-medium hover:from-green-500 hover:to-teal-500 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all shadow-md"
        >
          ← Previous
        </button>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-12 h-12 rounded-full text-sm font-medium transition-all ${
                page === currentPage
                  ? 'bg-gradient-to-br from-green-600 to-emerald-700 text-white shadow-lg shadow-green-600/50'
                  : 'bg-white text-green-700 border-2 border-green-300 hover:bg-green-50 hover:border-green-400'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-teal-600 text-white font-medium hover:from-green-500 hover:to-teal-500 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all shadow-md"
        >
          Next →
        </button>
      </div>

      {/* Minimalist Nature */}
      <div className="flex items-center gap-8">
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="text-sm text-green-700 font-medium hover:text-green-600 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          ‹ Prev
        </button>
        <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-green-200 shadow-sm">
          <span className="text-lg text-green-800 font-semibold">{currentPage}</span>
          <span className="text-green-400">of</span>
          <span className="text-green-600">{totalPages}</span>
        </div>
        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="text-sm text-green-700 font-medium hover:text-green-600 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          Next ›
        </button>
      </div>

      {/* Organic Dots */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="w-10 h-10 rounded-full bg-green-600 text-white hover:bg-green-500 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all shadow-md"
        >
          <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`rounded-full transition-all ${
                page === currentPage
                  ? 'w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 shadow-lg shadow-green-600/40'
                  : 'w-3 h-3 bg-green-300 hover:bg-green-400'
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="w-10 h-10 rounded-full bg-green-600 text-white hover:bg-green-500 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all shadow-md"
        >
          <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Growth Progress */}
      <div className="w-96">
        <div className="flex justify-between text-sm text-green-700 mb-2">
          <span>Page {currentPage}</span>
          <span>{totalPages} pages</span>
        </div>
        <div className="h-3 bg-green-100 rounded-full overflow-hidden border-2 border-green-200">
          <div
            className="h-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 transition-all duration-300 shadow-lg shadow-green-500/30"
            style={{ width: `${(currentPage / totalPages) * 100}%` }}
          />
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="text-sm text-green-600 hover:text-green-500 disabled:opacity-30 transition-colors"
          >
            ← Previous
          </button>
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="text-sm text-green-600 hover:text-green-500 disabled:opacity-30 transition-colors"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  )
}
