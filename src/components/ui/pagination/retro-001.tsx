import { useState } from 'react'

export default function RetroPagination() {
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
    <div className="min-h-screen bg-[#f5e6d3] p-8 flex flex-col items-center justify-center gap-16">
      {/* Vintage Computer Style */}
      <nav className="flex items-center gap-2 p-6 bg-[#2d2d2d] rounded-lg border-4 border-[#4a4a4a] shadow-[0_8px_0_#1a1a1a]">
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="w-12 h-12 rounded border-2 border-[#00ff00] bg-[#1a1a1a] text-[#00ff00] font-mono font-bold text-xl hover:bg-[#00ff00] hover:text-[#1a1a1a] disabled:border-[#004400] disabled:text-[#004400] disabled:cursor-not-allowed transition-all"
        >
          {'<'}
        </button>

        {getPages().map((page, i) => (
          <button
            key={i}
            onClick={() => typeof page === 'number' && setCurrentPage(page)}
            disabled={page === '...'}
            className={`w-12 h-12 rounded border-2 font-mono font-bold transition-all ${
              page === currentPage
                ? 'border-[#00ff00] bg-[#00ff00] text-[#1a1a1a] shadow-[0_0_20px_#00ff00]'
                : page === '...'
                ? 'border-[#004400] text-[#004400] cursor-default'
                : 'border-[#00ff00] bg-[#1a1a1a] text-[#00ff00] hover:bg-[#00ff00] hover:text-[#1a1a1a]'
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="w-12 h-12 rounded border-2 border-[#00ff00] bg-[#1a1a1a] text-[#00ff00] font-mono font-bold text-xl hover:bg-[#00ff00] hover:text-[#1a1a1a] disabled:border-[#004400] disabled:text-[#004400] disabled:cursor-not-allowed transition-all"
        >
          {'>'}
        </button>
      </nav>

      {/* 80s Style Pagination */}
      <div className="flex flex-col gap-4 p-8 bg-gradient-to-br from-[#ff6b9d] via-[#c06c84] to-[#6c5b7b] rounded-2xl border-4 border-[#355c7d] shadow-[8px_8px_0_#355c7d]">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-6 py-3 rounded-lg bg-[#f8b500] text-[#2d2d2d] font-bold border-2 border-[#2d2d2d] shadow-[4px_4px_0_#2d2d2d] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_#2d2d2d] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            ◄ PREVIOUS
          </button>

          <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg border-2 border-[#2d2d2d] shadow-[4px_4px_0_#2d2d2d]">
            <span className="font-bold text-[#2d2d2d]">PAGE</span>
            <span className="text-2xl font-bold text-[#ff6b9d]">{currentPage}</span>
            <span className="font-bold text-[#2d2d2d]">OF</span>
            <span className="text-2xl font-bold text-[#6c5b7b]">{totalPages}</span>
          </div>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-6 py-3 rounded-lg bg-[#f8b500] text-[#2d2d2d] font-bold border-2 border-[#2d2d2d] shadow-[4px_4px_0_#2d2d2d] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_#2d2d2d] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            NEXT ►
          </button>
        </div>

        <div className="flex items-center justify-center gap-3">
          <span className="font-bold text-white text-sm">SHOW:</span>
          {[10, 20, 50].map(value => (
            <button
              key={value}
              onClick={() => setItemsPerPage(value)}
              className={`px-4 py-2 rounded border-2 border-[#2d2d2d] font-bold text-sm transition-all hover:translate-x-0.5 hover:translate-y-0.5 ${
                itemsPerPage === value
                  ? 'bg-[#f8b500] text-[#2d2d2d] shadow-[3px_3px_0_#2d2d2d]'
                  : 'bg-white text-[#2d2d2d] shadow-[3px_3px_0_#2d2d2d]'
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      {/* Cassette Style Pagination */}
      <div className="flex items-center gap-3 p-4 bg-[#2d2d2d] rounded-xl border-3 border-[#ff6b9d]">
        {[1, 2, 3, 4, 5].map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-14 h-14 rounded-full border-3 font-bold text-lg transition-all hover:scale-110 ${
              page === currentPage
                ? 'bg-[#ff6b9d] text-white border-white shadow-[0_0_15px_#ff6b9d]'
                : 'bg-[#f8b500] text-[#2d2d2d] border-[#2d2d2d]'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  )
}
