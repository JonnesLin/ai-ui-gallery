import { useState } from 'react'

export default function CyberpunkPagination() {
  const [currentPage, setCurrentPage] = useState(1)
  const [jumpPage, setJumpPage] = useState('')
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

  const handleJump = () => {
    const page = parseInt(jumpPage)
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      setJumpPage('')
    }
  }

  return (
    <div className="min-h-screen bg-black p-8 flex flex-col items-center justify-center gap-16">
      {/* Neon Glitch Pagination */}
      <nav className="flex items-center gap-2 relative">
        <div className="absolute inset-0 bg-cyan-500 blur-xl opacity-20"></div>
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="relative z-10 w-12 h-12 border border-cyan-500 bg-black text-cyan-500 font-mono font-bold hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_#06b6d4] disabled:border-gray-700 disabled:text-gray-700 disabled:cursor-not-allowed transition-all"
        >
          {'<<'}
        </button>

        {getPages().map((page, i) => (
          <button
            key={i}
            onClick={() => typeof page === 'number' && setCurrentPage(page)}
            disabled={page === '...'}
            className={`relative z-10 w-12 h-12 border font-mono font-bold transition-all ${
              page === currentPage
                ? 'border-fuchsia-500 bg-fuchsia-500 text-black shadow-[0_0_30px_#d946ef,inset_0_0_10px_#000]'
                : page === '...'
                ? 'border-gray-700 text-gray-700 cursor-default'
                : 'border-cyan-500 bg-black text-cyan-500 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_#06b6d4]'
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="relative z-10 w-12 h-12 border border-cyan-500 bg-black text-cyan-500 font-mono font-bold hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_#06b6d4] disabled:border-gray-700 disabled:text-gray-700 disabled:cursor-not-allowed transition-all"
        >
          {'>>'}
        </button>
      </nav>

      {/* Holographic Style */}
      <div className="flex flex-col gap-6 p-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-cyan-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-10 animate-pulse"></div>

        <div className="relative z-10 flex items-center justify-between gap-6">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="px-6 py-3 bg-black border border-fuchsia-500 text-fuchsia-500 font-mono text-sm hover:bg-fuchsia-500 hover:text-black hover:shadow-[0_0_20px_#d946ef] disabled:border-gray-700 disabled:text-gray-700 disabled:cursor-not-allowed transition-all skew-x-[-5deg]"
          >
            [FIRST]
          </button>

          <div className="flex items-center gap-4">
            <div className="px-6 py-3 bg-black border border-cyan-500 font-mono text-cyan-500 shadow-[0_0_15px_#06b6d4] skew-x-[-5deg]">
              <span className="text-fuchsia-500 text-2xl font-bold">{currentPage}</span>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-cyan-500">{totalPages}</span>
            </div>
          </div>

          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="px-6 py-3 bg-black border border-fuchsia-500 text-fuchsia-500 font-mono text-sm hover:bg-fuchsia-500 hover:text-black hover:shadow-[0_0_20px_#d946ef] disabled:border-gray-700 disabled:text-gray-700 disabled:cursor-not-allowed transition-all skew-x-[-5deg]"
          >
            [LAST]
          </button>
        </div>

        <div className="relative z-10 flex items-center justify-center gap-3">
          <span className="font-mono text-cyan-500 text-sm">[JUMP_TO]</span>
          <input
            type="text"
            value={jumpPage}
            onChange={(e) => setJumpPage(e.target.value.replace(/[^0-9]/g, ''))}
            onKeyDown={(e) => e.key === 'Enter' && handleJump()}
            placeholder="--"
            className="w-16 px-3 py-2 bg-black border border-cyan-500 text-cyan-500 font-mono text-center placeholder-gray-700 focus:border-fuchsia-500 focus:shadow-[0_0_15px_#d946ef] outline-none transition-all"
          />
          <button
            onClick={handleJump}
            className="px-4 py-2 bg-black border border-cyan-500 text-cyan-500 font-mono text-sm hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_15px_#06b6d4] transition-all"
          >
            [GO]
          </button>
        </div>
      </div>

      {/* Digital Circuit Style */}
      <div className="flex items-center gap-2">
        {[1, 2, 3, 4, 5, 6].map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`relative w-14 h-14 border font-mono font-bold text-lg transition-all overflow-hidden group ${
              page === currentPage
                ? 'border-fuchsia-500 text-fuchsia-500 shadow-[0_0_25px_#d946ef]'
                : 'border-cyan-500 text-cyan-500 hover:shadow-[0_0_20px_#06b6d4]'
            }`}
          >
            <div className={`absolute inset-0 transition-all ${
              page === currentPage
                ? 'bg-fuchsia-500 opacity-20'
                : 'bg-cyan-500 opacity-0 group-hover:opacity-20'
            }`}></div>
            <span className="relative z-10">{page}</span>
            {page === currentPage && (
              <>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-fuchsia-500"></div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-fuchsia-500"></div>
                <div className="absolute top-0 left-0 h-full w-0.5 bg-fuchsia-500"></div>
                <div className="absolute top-0 right-0 h-full w-0.5 bg-fuchsia-500"></div>
              </>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
