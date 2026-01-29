import { useState } from 'react'

export default function BrutalistPagination() {
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
    <div className="min-h-screen bg-white p-8 flex flex-col items-center justify-center gap-16">
      {/* Bold Brutalist Pagination */}
      <nav className="flex items-center gap-0 border-4 border-black">
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="w-16 h-16 border-r-4 border-black bg-yellow-300 font-black text-black hover:bg-black hover:text-yellow-300 disabled:bg-gray-200 disabled:cursor-not-allowed transition-colors"
        >
          {'<'}
        </button>

        {getPages().map((page, i) => (
          <button
            key={i}
            onClick={() => typeof page === 'number' && setCurrentPage(page)}
            disabled={page === '...'}
            className={`w-16 h-16 border-r-4 border-black font-black text-lg transition-colors ${
              page === currentPage
                ? 'bg-black text-yellow-300'
                : page === '...'
                ? 'bg-white text-black cursor-default'
                : 'bg-white text-black hover:bg-yellow-300'
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="w-16 h-16 bg-yellow-300 font-black text-black hover:bg-black hover:text-yellow-300 disabled:bg-gray-200 disabled:cursor-not-allowed transition-colors"
        >
          {'>'}
        </button>
      </nav>

      {/* Strong Typography Pagination */}
      <div className="flex flex-col gap-6 border-8 border-black p-8 bg-red-500">
        <div className="flex items-center justify-between gap-6">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="px-6 py-4 border-4 border-black bg-white font-black text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50 disabled:cursor-not-allowed transition-all uppercase"
          >
            First
          </button>
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-6 py-4 border-4 border-black bg-white font-black text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50 disabled:cursor-not-allowed transition-all uppercase"
          >
            Prev
          </button>

          <div className="px-8 py-4 border-4 border-black bg-yellow-300 font-black text-2xl">
            {currentPage}/{totalPages}
          </div>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-6 py-4 border-4 border-black bg-white font-black text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50 disabled:cursor-not-allowed transition-all uppercase"
          >
            Next
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="px-6 py-4 border-4 border-black bg-white font-black text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50 disabled:cursor-not-allowed transition-all uppercase"
          >
            Last
          </button>
        </div>

        <div className="flex items-center justify-center gap-4">
          <span className="font-black text-white text-lg uppercase">Items per page:</span>
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="px-4 py-3 border-4 border-black bg-white font-black text-lg cursor-pointer hover:bg-yellow-300"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>

      {/* Chunky Block Pagination */}
      <div className="flex items-center gap-4">
        {[1, 2, 3, 4, 5, 6].map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-20 h-20 border-4 border-black font-black text-2xl transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none ${
              page === currentPage
                ? 'bg-blue-400 text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-white text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  )
}
