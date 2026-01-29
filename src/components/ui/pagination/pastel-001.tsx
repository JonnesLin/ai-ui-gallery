import { useState } from 'react'

export default function PastelPagination() {
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-8 flex flex-col items-center justify-center gap-16">
      {/* Soft Cloud Pagination */}
      <nav className="flex items-center gap-2 p-4 bg-white/40 backdrop-blur-sm rounded-full shadow-lg">
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-200 to-pink-300 text-pink-700 hover:from-pink-300 hover:to-pink-400 disabled:from-gray-200 disabled:to-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg flex items-center justify-center"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {getPages().map((page, i) => (
          <button
            key={i}
            onClick={() => typeof page === 'number' && setCurrentPage(page)}
            disabled={page === '...'}
            className={`w-12 h-12 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg ${
              page === currentPage
                ? 'bg-gradient-to-br from-purple-300 to-purple-400 text-white scale-110'
                : page === '...'
                ? 'bg-transparent text-purple-300 cursor-default shadow-none'
                : 'bg-white/60 text-purple-600 hover:bg-gradient-to-br hover:from-purple-200 hover:to-purple-300'
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-200 to-pink-300 text-pink-700 hover:from-pink-300 hover:to-pink-400 disabled:from-gray-200 disabled:to-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg flex items-center justify-center"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </nav>

      {/* Dreamy Card Pagination */}
      <div className="flex flex-col gap-6 p-8 bg-white/50 backdrop-blur-md rounded-3xl shadow-xl border border-white/60">
        <div className="flex items-center justify-between gap-6">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-200 to-blue-300 text-blue-700 font-medium hover:from-blue-300 hover:to-blue-400 disabled:from-gray-200 disabled:to-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
          >
            Previous
          </button>

          <div className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 shadow-lg">
            <div className="text-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {currentPage}
              </span>
              <span className="mx-3 text-purple-400">/</span>
              <span className="text-lg text-purple-600">{totalPages}</span>
            </div>
          </div>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-200 to-blue-300 text-blue-700 font-medium hover:from-blue-300 hover:to-blue-400 disabled:from-gray-200 disabled:to-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
          >
            Next
          </button>
        </div>

        <div className="flex items-center justify-center gap-3">
          <span className="text-sm font-medium text-purple-600">Show:</span>
          {[10, 20, 50].map(value => (
            <button
              key={value}
              onClick={() => setItemsPerPage(value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg ${
                itemsPerPage === value
                  ? 'bg-gradient-to-r from-pink-300 to-purple-300 text-white'
                  : 'bg-white/70 text-purple-600 hover:bg-gradient-to-r hover:from-pink-200 hover:to-purple-200'
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      {/* Bubble Pagination */}
      <div className="flex items-center gap-3">
        {[1, 2, 3, 4, 5, 6, 7].map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`relative w-16 h-16 rounded-full font-semibold transition-all hover:scale-110 ${
              page === currentPage
                ? 'bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 text-white shadow-xl scale-110'
                : 'bg-white/60 text-purple-600 shadow-lg hover:bg-gradient-to-br hover:from-pink-200 hover:via-purple-200 hover:to-blue-200'
            }`}
          >
            {page}
            {page === currentPage && (
              <>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 opacity-50 blur-md"></div>
                <span className="relative z-10">{page}</span>
              </>
            )}
            {page !== currentPage && page}
          </button>
        ))}
      </div>
    </div>
  )
}
