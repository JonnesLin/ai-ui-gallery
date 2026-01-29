export default function MonochromeEmpty() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center max-w-md px-8 text-center">
        <div className="relative mb-10">
          <div className="w-32 h-32 border-4 border-black flex items-center justify-center">
            <div className="w-24 h-24 bg-black flex items-center justify-center">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white border-4 border-black"></div>
        </div>

        <h2 className="text-4xl font-bold text-black mb-4 uppercase tracking-tight">
          Empty Folder
        </h2>

        <div className="w-24 h-1 bg-black mb-6"></div>

        <p className="text-gray-800 text-base mb-10 leading-relaxed max-w-sm">
          This folder contains no files. Upload or create new content to populate this space.
        </p>

        <div className="flex flex-col gap-3 w-full max-w-xs">
          <button className="px-8 py-3 bg-black text-white font-bold hover:bg-gray-800 transition-colors">
            UPLOAD FILE
          </button>
          <button className="px-8 py-3 border-2 border-black text-black font-bold hover:bg-black hover:text-white transition-colors">
            CREATE NEW
          </button>
        </div>
      </div>
    </div>
  );
}
