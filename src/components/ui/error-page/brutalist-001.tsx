export default function BrutalistErrorPage() {
  return (
    <div className="min-h-screen bg-yellow-400 flex items-center justify-center px-4">
      <div className="max-w-2xl">
        <div className="bg-black text-yellow-400 p-2 mb-4 font-mono text-sm border-4 border-black">
          ERROR_404.HTML
        </div>

        <div className="bg-white border-8 border-black p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="text-[8rem] font-black leading-none mb-4 border-8 border-black p-4 bg-red-500 text-white text-center">
            404
          </h1>

          <div className="border-4 border-black p-6 bg-yellow-400 mb-6">
            <h2 className="text-4xl font-black mb-2 uppercase">PAGE NOT FOUND</h2>
            <p className="font-bold text-lg">
              THE REQUESTED RESOURCE COULD NOT BE LOCATED ON THIS SERVER
            </p>
          </div>

          <div className="border-4 border-black p-4 bg-white mb-6">
            <p className="font-mono text-sm">
              ERROR CODE: 404<br/>
              TIMESTAMP: {new Date().toISOString()}<br/>
              STATUS: RESOURCE_NOT_FOUND
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            <button className="px-8 py-4 bg-black text-white font-black uppercase border-4 border-black hover:bg-red-500 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              [HOME]
            </button>
            <button className="px-8 py-4 bg-yellow-400 text-black font-black uppercase border-4 border-black hover:bg-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              [BACK]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
