export default function PastelTag() {
  return (
    <div className="min-h-screen bg-rose-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-sm font-medium text-rose-400 mb-4">Basic Tags</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 text-sm font-medium text-purple-600 bg-purple-100 rounded-full">
              Default
            </span>
            <span className="px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
              Primary
            </span>
            <span className="px-3 py-1.5 text-sm font-medium text-green-600 bg-green-100 rounded-full">
              Success
            </span>
            <span className="px-3 py-1.5 text-sm font-medium text-red-600 bg-red-100 rounded-full">
              Error
            </span>
            <span className="px-3 py-1.5 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
              Warning
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-rose-400 mb-4">Sizes</h2>
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 text-xs font-medium text-pink-600 bg-pink-100 rounded-full">
              Small
            </span>
            <span className="px-3 py-1.5 text-sm font-medium text-pink-600 bg-pink-100 rounded-full">
              Medium
            </span>
            <span className="px-4 py-2 text-base font-medium text-pink-600 bg-pink-100 rounded-full">
              Large
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-rose-400 mb-4">With Icons</h2>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-violet-600 bg-violet-100 rounded-full">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
              User
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-sky-600 bg-sky-100 rounded-full">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Email
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-rose-600 bg-rose-100 rounded-full">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              Love
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-rose-400 mb-4">Removable Tags</h2>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-teal-600 bg-teal-100 rounded-full group">
              Sweet
              <button className="opacity-60 hover:opacity-100 transition-opacity">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full group">
              Soft
              <button className="opacity-60 hover:opacity-100 transition-opacity">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-fuchsia-600 bg-fuchsia-100 rounded-full group">
              Gentle
              <button className="opacity-60 hover:opacity-100 transition-opacity">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-rose-400 mb-4">Selectable Tags</h2>
          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-1.5 text-sm font-medium text-purple-600 bg-purple-50 rounded-full hover:bg-purple-100 transition-colors">
              Lavender
            </button>
            <button className="px-3 py-1.5 text-sm font-medium text-white bg-purple-400 rounded-full">
              Selected
            </button>
            <button className="px-3 py-1.5 text-sm font-medium text-purple-600 bg-purple-50 rounded-full hover:bg-purple-100 transition-colors">
              Mint
            </button>
            <button className="px-3 py-1.5 text-sm font-medium text-purple-600 bg-purple-50 rounded-full hover:bg-purple-100 transition-colors">
              Peach
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium text-rose-400 mb-4">Tag Cloud</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 text-sm font-medium text-pink-600 bg-pink-100 rounded-full">Cute</span>
            <span className="px-3 py-1.5 text-sm font-medium text-purple-600 bg-purple-100 rounded-full">Dreamy</span>
            <span className="px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">Calm</span>
            <span className="px-3 py-1.5 text-sm font-medium text-green-600 bg-green-100 rounded-full">Fresh</span>
            <span className="px-3 py-1.5 text-sm font-medium text-yellow-600 bg-yellow-100 rounded-full">Sunny</span>
            <span className="px-3 py-1.5 text-sm font-medium text-teal-600 bg-teal-100 rounded-full">Mint</span>
            <span className="px-3 py-1.5 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full">Soft</span>
            <span className="px-3 py-1.5 text-sm font-medium text-rose-600 bg-rose-100 rounded-full">Lovely</span>
            <span className="px-3 py-1.5 text-sm font-medium text-violet-600 bg-violet-100 rounded-full">Sweet</span>
            <span className="px-3 py-1.5 text-sm font-medium text-sky-600 bg-sky-100 rounded-full">Breezy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
