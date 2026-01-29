export default function BrutalistTag() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-sm font-black uppercase text-black mb-4 border-b-4 border-black inline-block">Basic Tags</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 text-sm font-black uppercase text-black bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Default
            </span>
            <span className="px-4 py-2 text-sm font-black uppercase text-white bg-blue-600 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Primary
            </span>
            <span className="px-4 py-2 text-sm font-black uppercase text-white bg-green-600 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Success
            </span>
            <span className="px-4 py-2 text-sm font-black uppercase text-white bg-red-600 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Error
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase text-black mb-4 border-b-4 border-black inline-block">Sizes</h2>
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 text-xs font-black uppercase text-black bg-yellow-400 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              Small
            </span>
            <span className="px-4 py-2 text-sm font-black uppercase text-black bg-yellow-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Medium
            </span>
            <span className="px-5 py-3 text-base font-black uppercase text-black bg-yellow-400 border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
              Large
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase text-black mb-4 border-b-4 border-black inline-block">With Icons</h2>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-black uppercase text-black bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
              User
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-black uppercase text-white bg-purple-600 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Star
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-black uppercase text-white bg-pink-600 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
              Hot
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase text-black mb-4 border-b-4 border-black inline-block">Removable Tags</h2>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-black uppercase text-black bg-cyan-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group">
              HTML
              <button className="border-2 border-black bg-white hover:bg-black hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-black uppercase text-black bg-lime-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group">
              CSS
              <button className="border-2 border-black bg-white hover:bg-black hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-black uppercase text-black bg-orange-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group">
              JS
              <button className="border-2 border-black bg-white hover:bg-black hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase text-black mb-4 border-b-4 border-black inline-block">Selectable Tags</h2>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 text-sm font-black uppercase text-black bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              Design
            </button>
            <button className="px-4 py-2 text-sm font-black uppercase text-white bg-black border-4 border-black translate-x-1 translate-y-1">
              Code
            </button>
            <button className="px-4 py-2 text-sm font-black uppercase text-black bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              Test
            </button>
            <button className="px-4 py-2 text-sm font-black uppercase text-black bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              Deploy
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase text-black mb-4 border-b-4 border-black inline-block">Tag Cloud</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 text-sm font-black uppercase text-black bg-red-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Web</span>
            <span className="px-4 py-2 text-sm font-black uppercase text-black bg-blue-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">App</span>
            <span className="px-4 py-2 text-sm font-black uppercase text-black bg-green-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">API</span>
            <span className="px-4 py-2 text-sm font-black uppercase text-black bg-yellow-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">UI</span>
            <span className="px-4 py-2 text-sm font-black uppercase text-black bg-purple-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">UX</span>
            <span className="px-4 py-2 text-sm font-black uppercase text-black bg-pink-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">DB</span>
            <span className="px-4 py-2 text-sm font-black uppercase text-black bg-cyan-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">CLI</span>
            <span className="px-4 py-2 text-sm font-black uppercase text-black bg-orange-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">SDK</span>
          </div>
        </div>
      </div>
    </div>
  );
}
