import { useState } from 'react'

export default function MonochromePagination() {
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
    <div className="min-h-screen bg-white p-8 flex flex-col items-center justify-center gap-12">
      {/* High Contrast Monochrome */}
      <div className="flex flex-col gap-4 items-center">
        <nav className="flex items-center gap-2 p-3 border-2 border-black">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="w-10 h-10 border-2 border-black bg-white text-black hover:bg-black hover:text-white disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            ‹‹
          </button>
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="w-10 h-10 border-2 border-black bg-white text-black hover:bg-black hover:text-white disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            ‹
          </button>

          {getPages().map((page, i) => (
            <button
              key={i}
              onClick={() => typeof page === 'number' && setCurrentPage(page)}
              disabled={page === '...'}
              className={`w-10 h-10 border-2 font-bold transition-colors ${
                page === currentPage
                  ? 'bg-black text-white border-black'
                  : page === '...'
                  ? 'border-transparent text-gray-400 cursor-default'
                  : 'border-black bg-white text-black hover:bg-black hover:text-white'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="w-10 h-10 border-2 border-black bg-white text-black hover:bg-black hover:text-white disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            ›
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="w-10 h-10 border-2 border-black bg-white text-black hover:bg-black hover:text-white disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            ››
          </button>
        </nav>

        <div className="flex items-center gap-4 text-sm font-medium">
          <span className="text-black">
            {startItem}–{endItem} of {totalItems}
          </span>
          <div className="w-px h-4 bg-black" />
          <div className="flex items-center gap-2">
            <span className="text-black">Per page:</span>
            <select
              value={pageSize}
              onChange={e => setPageSize(Number(e.target.value))}
              className="px-3 py-1 border-2 border-black bg-white text-black font-bold hover:bg-black hover:text-white cursor-pointer transition-colors"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>
      </div>

      {/* Minimal Monochrome */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="px-6 py-3 border-2 border-black bg-white text-black font-bold hover:bg-black hover:text-white disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          PREV
        </button>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-11 h-11 border-2 font-bold transition-colors ${
                page === currentPage
                  ? 'bg-black text-white border-black'
                  : 'border-black bg-white text-black hover:bg-black hover:text-white'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="px-6 py-3 border-2 border-black bg-white text-black font-bold hover:bg-black hover:text-white disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          NEXT
        </button>
      </div>

      {/* Grayscale Gradient */}
      <div className="flex items-center gap-8">
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="text-sm text-black font-bold hover:text-gray-600 disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          ← Previous
        </button>
        <div className="flex items-center gap-3">
          <span className="text-3xl text-black font-bold">{currentPage}</span>
          <span className="text-xl text-gray-400">/</span>
          <span className="text-xl text-gray-600">{totalPages}</span>
        </div>
        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="text-sm text-black font-bold hover:text-gray-600 disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          Next →
        </button>
      </div>

      {/* Striped Monochrome */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="w-10 h-10 bg-gradient-to-r from-black to-gray-700 text-white hover:from-gray-700 hover:to-black disabled:from-gray-300 disabled:to-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition-all"
        >
          <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex items-center gap-1">
          {Array.from({ length: 10 }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-2 h-8 transition-all ${
                page === currentPage
                  ? 'bg-black w-6'
                  : page % 2 === 0
                  ? 'bg-gray-400 hover:bg-gray-600'
                  : 'bg-gray-300 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="w-10 h-10 bg-gradient-to-r from-black to-gray-700 text-white hover:from-gray-700 hover:to-black disabled:from-gray-300 disabled:to-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition-all"
        >
          <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Monochrome */}
      <div className="flex items-center gap-3">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`rounded-full transition-all ${
              page === currentPage
                ? 'w-12 h-12 bg-black text-white font-bold'
                : 'w-8 h-8 border-2 border-gray-400 bg-white text-gray-600 hover:border-black hover:text-black'
            }`}
          >
            {page === currentPage && page}
          </button>
        ))}
      </div>
    </div>
  )
}
