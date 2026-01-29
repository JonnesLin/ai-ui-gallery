import { useState } from 'react'

export default function ThreeDPagination() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 p-8 flex flex-col items-center justify-center gap-16">
      {/* Elevated 3D Pagination */}
      <nav className="flex items-center gap-2 p-4 bg-slate-800 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <button
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
          className="px-5 py-2.5 bg-gradient-to-b from-indigo-500 to-indigo-600 text-white font-semibold rounded-lg shadow-[0_6px_0_0_rgb(67,56,202),0_8px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_0_0_rgb(67,56,202),0_6px_12px_rgba(0,0,0,0.3)] hover:translate-y-0.5 active:translate-y-1.5 active:shadow-[0_2px_0_0_rgb(67,56,202),0_3px_8px_rgba(0,0,0,0.3)] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-[0_4px_0_0_rgb(67,56,202,0.5)] transition-all duration-150"
        >
          First
        </button>
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="w-11 h-11 bg-gradient-to-b from-indigo-500 to-indigo-600 text-white font-bold text-lg rounded-lg shadow-[0_6px_0_0_rgb(67,56,202),0_8px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_0_0_rgb(67,56,202),0_6px_12px_rgba(0,0,0,0.3)] hover:translate-y-0.5 active:translate-y-1.5 active:shadow-[0_2px_0_0_rgb(67,56,202),0_3px_8px_rgba(0,0,0,0.3)] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-[0_4px_0_0_rgb(67,56,202,0.5)] transition-all duration-150"
        >
          {'<'}
        </button>

        {getPages().map((page, i) => (
          <button
            key={i}
            onClick={() => typeof page === 'number' && setCurrentPage(page)}
            disabled={page === '...'}
            className={`w-11 h-11 font-bold text-lg rounded-lg transition-all duration-150 ${
              page === currentPage
                ? 'bg-gradient-to-b from-emerald-400 to-emerald-500 text-white shadow-[0_7px_0_0_rgb(5,150,105),0_10px_20px_rgba(16,185,129,0.4)] translate-y-0'
                : page === '...'
                ? 'bg-transparent text-slate-400 cursor-default shadow-none'
                : 'bg-gradient-to-b from-slate-600 to-slate-700 text-white shadow-[0_6px_0_0_rgb(51,65,85),0_8px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_0_0_rgb(51,65,85),0_6px_12px_rgba(0,0,0,0.3)] hover:translate-y-0.5 active:translate-y-1.5 active:shadow-[0_2px_0_0_rgb(51,65,85),0_3px_8px_rgba(0,0,0,0.3)]'
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="w-11 h-11 bg-gradient-to-b from-indigo-500 to-indigo-600 text-white font-bold text-lg rounded-lg shadow-[0_6px_0_0_rgb(67,56,202),0_8px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_0_0_rgb(67,56,202),0_6px_12px_rgba(0,0,0,0.3)] hover:translate-y-0.5 active:translate-y-1.5 active:shadow-[0_2px_0_0_rgb(67,56,202),0_3px_8px_rgba(0,0,0,0.3)] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-[0_4px_0_0_rgb(67,56,202,0.5)] transition-all duration-150"
        >
          {'>'}
        </button>
        <button
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
          className="px-5 py-2.5 bg-gradient-to-b from-indigo-500 to-indigo-600 text-white font-semibold rounded-lg shadow-[0_6px_0_0_rgb(67,56,202),0_8px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_0_0_rgb(67,56,202),0_6px_12px_rgba(0,0,0,0.3)] hover:translate-y-0.5 active:translate-y-1.5 active:shadow-[0_2px_0_0_rgb(67,56,202),0_3px_8px_rgba(0,0,0,0.3)] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-[0_4px_0_0_rgb(67,56,202,0.5)] transition-all duration-150"
        >
          Last
        </button>
      </nav>

      {/* Multi-Layered 3D Panel */}
      <div className="flex flex-col gap-6 p-8 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1)]">
        <div className="flex items-center justify-between gap-6">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="px-7 py-3.5 bg-gradient-to-b from-purple-500 to-purple-600 text-white font-bold rounded-xl shadow-[0_8px_0_0_rgb(107,33,168),0_10px_25px_rgba(168,85,247,0.4)] hover:shadow-[0_6px_0_0_rgb(107,33,168),0_8px_20px_rgba(168,85,247,0.4)] hover:translate-y-0.5 active:translate-y-2 active:shadow-[0_3px_0_0_rgb(107,33,168),0_5px_15px_rgba(168,85,247,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-[0_6px_0_0_rgb(107,33,168,0.5)] transition-all duration-150"
          >
            First
          </button>
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-7 py-3.5 bg-gradient-to-b from-blue-500 to-blue-600 text-white font-bold rounded-xl shadow-[0_8px_0_0_rgb(29,78,216),0_10px_25px_rgba(59,130,246,0.4)] hover:shadow-[0_6px_0_0_rgb(29,78,216),0_8px_20px_rgba(59,130,246,0.4)] hover:translate-y-0.5 active:translate-y-2 active:shadow-[0_3px_0_0_rgb(29,78,216),0_5px_15px_rgba(59,130,246,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-[0_6px_0_0_rgb(29,78,216,0.5)] transition-all duration-150"
          >
            Previous
          </button>

          <div className="px-8 py-4 bg-gradient-to-b from-amber-400 to-amber-500 text-slate-900 font-bold text-xl rounded-xl shadow-[0_8px_0_0_rgb(180,83,9),0_10px_25px_rgba(251,191,36,0.5),inset_0_2px_0_rgba(255,255,255,0.3)]">
            {currentPage} / {totalPages}
          </div>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-7 py-3.5 bg-gradient-to-b from-blue-500 to-blue-600 text-white font-bold rounded-xl shadow-[0_8px_0_0_rgb(29,78,216),0_10px_25px_rgba(59,130,246,0.4)] hover:shadow-[0_6px_0_0_rgb(29,78,216),0_8px_20px_rgba(59,130,246,0.4)] hover:translate-y-0.5 active:translate-y-2 active:shadow-[0_3px_0_0_rgb(29,78,216),0_5px_15px_rgba(59,130,246,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-[0_6px_0_0_rgb(29,78,216,0.5)] transition-all duration-150"
          >
            Next
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="px-7 py-3.5 bg-gradient-to-b from-purple-500 to-purple-600 text-white font-bold rounded-xl shadow-[0_8px_0_0_rgb(107,33,168),0_10px_25px_rgba(168,85,247,0.4)] hover:shadow-[0_6px_0_0_rgb(107,33,168),0_8px_20px_rgba(168,85,247,0.4)] hover:translate-y-0.5 active:translate-y-2 active:shadow-[0_3px_0_0_rgb(107,33,168),0_5px_15px_rgba(168,85,247,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-[0_6px_0_0_rgb(107,33,168,0.5)] transition-all duration-150"
          >
            Last
          </button>
        </div>

        <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-600">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-300">Items per page:</span>
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="px-4 py-2.5 bg-gradient-to-b from-slate-600 to-slate-700 text-white font-semibold rounded-lg shadow-[0_5px_0_0_rgb(51,65,85),0_6px_15px_rgba(0,0,0,0.3)] cursor-pointer hover:shadow-[0_3px_0_0_rgb(51,65,85),0_4px_12px_rgba(0,0,0,0.3)] hover:translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_0_rgb(51,65,85),0_3px_8px_rgba(0,0,0,0.3)] transition-all duration-150"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
          <span className="text-slate-300 font-medium">
            {startItem}-{endItem} of {totalItems} items
          </span>
        </div>
      </div>

      {/* Floating 3D Buttons */}
      <div className="flex items-center gap-3">
        {Array.from({ length: Math.min(totalPages, 6) }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-14 h-14 font-bold text-lg rounded-full transition-all duration-200 ${
              page === currentPage
                ? 'bg-gradient-to-b from-rose-400 to-rose-500 text-white shadow-[0_10px_0_0_rgb(190,18,60),0_12px_30px_rgba(244,63,94,0.5)] scale-110'
                : 'bg-gradient-to-b from-slate-600 to-slate-700 text-white shadow-[0_8px_0_0_rgb(51,65,85),0_10px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_0_0_rgb(51,65,85),0_8px_18px_rgba(0,0,0,0.4)] hover:translate-y-0.5 hover:scale-105 active:translate-y-2 active:shadow-[0_3px_0_0_rgb(51,65,85),0_5px_12px_rgba(0,0,0,0.4)]'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  )
}
