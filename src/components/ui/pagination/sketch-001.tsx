import { useState } from 'react'

export default function SketchPagination() {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
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

  const startItem = (currentPage - 1) * itemsPerPage + 1
  const endItem = Math.min(currentPage * itemsPerPage, totalItems)

  return (
    <div className="min-h-screen bg-amber-50 p-8 flex flex-col items-center justify-center gap-16">
      {/* Hand-drawn Number Pagination */}
      <nav className="flex items-center gap-2">
        <button
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-white border-2 border-black rounded-none font-['Comic_Sans_MS',cursive] text-sm hover:bg-amber-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          style={{ transform: 'rotate(-1deg)', borderRadius: '8px 15px 10px 12px' }}
        >
          First
        </button>
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="w-10 h-10 bg-white border-2 border-black font-['Comic_Sans_MS',cursive] text-lg hover:bg-amber-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          style={{ transform: 'rotate(1deg)', borderRadius: '12px 8px 15px 10px' }}
        >
          {'<'}
        </button>

        {getPages().map((page, i) => (
          <button
            key={i}
            onClick={() => typeof page === 'number' && setCurrentPage(page)}
            disabled={page === '...'}
            className={`w-10 h-10 border-2 border-black font-['Comic_Sans_MS',cursive] text-lg transition-all ${
              page === currentPage
                ? 'bg-yellow-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                : page === '...'
                ? 'bg-transparent border-0 text-black cursor-default'
                : 'bg-white hover:bg-amber-100'
            }`}
            style={{
              transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)`,
              borderRadius: `${10 + i % 3}px ${15 - i % 3}px ${12 + i % 2}px ${8 - i % 2}px`
            }}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="w-10 h-10 bg-white border-2 border-black font-['Comic_Sans_MS',cursive] text-lg hover:bg-amber-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          style={{ transform: 'rotate(-1deg)', borderRadius: '10px 12px 8px 15px' }}
        >
          {'>'}
        </button>
        <button
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-white border-2 border-black rounded-none font-['Comic_Sans_MS',cursive] text-sm hover:bg-amber-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          style={{ transform: 'rotate(1deg)', borderRadius: '15px 10px 12px 8px' }}
        >
          Last
        </button>
      </nav>

      {/* Doodle Style with Page Size Selector */}
      <div className="flex flex-col gap-6 p-8 bg-white border-4 border-black" style={{ borderRadius: '20px 25px 18px 22px', transform: 'rotate(-0.5deg)' }}>
        <div className="flex items-center justify-between gap-6">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="px-6 py-3 bg-pink-300 border-3 border-black font-['Comic_Sans_MS',cursive] font-bold hover:bg-pink-400 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
            style={{ borderRadius: '15px 20px 12px 18px', transform: 'rotate(1deg)' }}
          >
            First
          </button>
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-6 py-3 bg-blue-300 border-3 border-black font-['Comic_Sans_MS',cursive] font-bold hover:bg-blue-400 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
            style={{ borderRadius: '18px 15px 20px 12px', transform: 'rotate(-1deg)' }}
          >
            Previous
          </button>

          <div className="px-6 py-3 bg-yellow-200 border-3 border-black font-['Comic_Sans_MS',cursive] font-bold text-lg" style={{ borderRadius: '12px 18px 15px 20px', transform: 'rotate(1deg)' }}>
            {currentPage} / {totalPages}
          </div>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-6 py-3 bg-blue-300 border-3 border-black font-['Comic_Sans_MS',cursive] font-bold hover:bg-blue-400 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
            style={{ borderRadius: '20px 12px 18px 15px', transform: 'rotate(1deg)' }}
          >
            Next
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="px-6 py-3 bg-pink-300 border-3 border-black font-['Comic_Sans_MS',cursive] font-bold hover:bg-pink-400 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
            style={{ borderRadius: '12px 15px 20px 18px', transform: 'rotate(-1deg)' }}
          >
            Last
          </button>
        </div>

        <div className="flex items-center justify-between gap-4 pt-4 border-t-2 border-black" style={{ borderStyle: 'dashed' }}>
          <div className="flex items-center gap-3">
            <span className="font-['Comic_Sans_MS',cursive] font-semibold text-gray-700">Show:</span>
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="px-4 py-2 border-2 border-black bg-white font-['Comic_Sans_MS',cursive] cursor-pointer hover:bg-amber-100"
              style={{ borderRadius: '10px 15px 12px 8px', transform: 'rotate(-1deg)' }}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
          <span className="font-['Comic_Sans_MS',cursive] text-gray-600">
            {startItem}-{endItem} of {totalItems} items
          </span>
        </div>
      </div>

      {/* Scribble Dots Pagination */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-3">
          {Array.from({ length: Math.min(totalPages, 8) }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`transition-all ${
                page === currentPage
                  ? 'w-8 h-8 bg-purple-400 border-2 border-black'
                  : 'w-6 h-6 bg-white border-2 border-black hover:bg-purple-200'
              }`}
              style={{
                borderRadius: `${40 + page % 5}% ${50 - page % 5}% ${45 + page % 3}% ${48 - page % 3}%`,
                transform: `rotate(${page % 2 === 0 ? 5 : -5}deg)`
              }}
            />
          ))}
        </div>
        <span className="font-['Comic_Sans_MS',cursive] text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
      </div>
    </div>
  )
}
