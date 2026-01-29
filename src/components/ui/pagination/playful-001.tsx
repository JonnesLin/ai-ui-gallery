import { useState } from 'react'

export default function PlayfulPagination() {
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 p-8 flex flex-col items-center justify-center gap-16">
      {/* Bouncy Fun Pagination */}
      <nav className="flex items-center gap-3 p-6 bg-white rounded-3xl shadow-2xl">
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 text-white font-bold text-xl hover:scale-110 hover:rotate-12 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:rotate-0 transition-all duration-300 shadow-lg"
        >
          ←
        </button>

        {getPages().map((page, i) => (
          <button
            key={i}
            onClick={() => typeof page === 'number' && setCurrentPage(page)}
            disabled={page === '...'}
            className={`w-14 h-14 rounded-2xl text-lg font-bold transition-all duration-300 shadow-lg ${
              page === currentPage
                ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white scale-125 rotate-6 shadow-2xl'
                : page === '...'
                ? 'bg-transparent text-gray-400 cursor-default shadow-none'
                : 'bg-gradient-to-br from-blue-400 to-cyan-400 text-white hover:scale-110 hover:-rotate-6'
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 text-white font-bold text-xl hover:scale-110 hover:-rotate-12 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:rotate-0 transition-all duration-300 shadow-lg"
        >
          →
        </button>
      </nav>

      {/* Comic Book Style */}
      <div className="flex flex-col gap-6 p-8 bg-yellow-300 rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-1">
        <div className="flex items-center justify-center gap-6 -rotate-1">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-8 py-4 bg-red-500 text-white font-black text-xl rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none disabled:bg-gray-400 disabled:cursor-not-allowed transition-all transform hover:rotate-3"
          >
            BACK!
          </button>

          <div className="relative px-12 py-6 bg-white rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-500 rounded-full border-2 border-black"></div>
            <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-pink-500 rounded-full border-2 border-black"></div>
            <div className="text-center">
              <div className="text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {currentPage}
              </div>
              <div className="text-sm font-bold text-gray-600">of {totalPages}</div>
            </div>
          </div>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-8 py-4 bg-green-500 text-white font-black text-xl rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none disabled:bg-gray-400 disabled:cursor-not-allowed transition-all transform hover:-rotate-3"
          >
            NEXT!
          </button>
        </div>

        <div className="flex items-center justify-center gap-4">
          <span className="font-black text-lg">SHOW:</span>
          {[10, 20, 50].map(value => (
            <button
              key={value}
              onClick={() => setItemsPerPage(value)}
              className={`px-6 py-3 font-black text-lg rounded-lg border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all ${
                itemsPerPage === value
                  ? 'bg-purple-500 text-white'
                  : 'bg-white text-black'
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      {/* Candy Button Style */}
      <div className="flex items-center gap-3">
        {[1, 2, 3, 4, 5, 6].map(page => {
          const colors = [
            'from-red-400 to-pink-500',
            'from-orange-400 to-yellow-500',
            'from-green-400 to-emerald-500',
            'from-blue-400 to-cyan-500',
            'from-purple-400 to-pink-500',
            'from-pink-400 to-rose-500'
          ]
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-16 h-16 rounded-full font-black text-xl transition-all duration-300 hover:scale-125 ${
                page === currentPage
                  ? `bg-gradient-to-br ${colors[page - 1]} text-white scale-125 shadow-2xl animate-bounce`
                  : `bg-gradient-to-br ${colors[page - 1]} text-white opacity-60 hover:opacity-100 shadow-lg`
              }`}
            >
              {page}
            </button>
          )
        })}
      </div>

      {/* Emoji Pagination */}
      <div className="flex items-center gap-4 p-6 bg-white rounded-3xl shadow-xl">
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="text-4xl hover:scale-125 disabled:opacity-30 disabled:cursor-not-allowed transition-all disabled:hover:scale-100"
        >
          🔙
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: Math.min(totalPages, 8) }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`text-3xl transition-all hover:scale-125 ${
                page === currentPage ? 'scale-150' : 'opacity-50'
              }`}
            >
              {page === currentPage ? '⭐' : '✨'}
            </button>
          ))}
        </div>

        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="text-4xl hover:scale-125 disabled:opacity-30 disabled:cursor-not-allowed transition-all disabled:hover:scale-100"
        >
          🔜
        </button>
      </div>
    </div>
  )
}
