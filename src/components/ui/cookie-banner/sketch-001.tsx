export default function SketchCookieBanner() {
  return (
    <div className="min-h-screen bg-[#faf9f6] flex items-end">
      <div className="fixed bottom-4 left-4 right-4 z-50 max-w-2xl mx-auto">
        <div className="bg-white rounded-sm border-2 border-gray-800 shadow-[3px_3px_0px_0px_#1f2937] p-6"
          style={{ fontFamily: "'Caveat', 'Segoe Print', cursive" }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="flex items-start gap-3">
              <div className="text-2xl flex-shrink-0">&#9998;</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  A note about cookies...
                </h3>
                <p className="text-base text-gray-600">
                  We scribbled some cookies onto your browser to keep things running smoothly.{' '}
                  <a href="#privacy" className="text-gray-800 underline decoration-wavy decoration-gray-400 underline-offset-4 hover:decoration-gray-800">
                    Read the fine print
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => console.log('Declined')}
                className="px-5 py-2 text-base font-bold text-gray-600 border-2 border-dashed border-gray-400 rounded-sm hover:border-gray-800 hover:text-gray-800 transition-colors duration-200"
              >
                Erase
              </button>
              <button
                onClick={() => console.log('Accepted')}
                className="px-5 py-2 text-base font-bold text-white bg-gray-800 border-2 border-gray-800 rounded-sm shadow-[2px_2px_0px_0px_#9ca3af] hover:shadow-[1px_1px_0px_0px_#9ca3af] hover:translate-x-px hover:translate-y-px transition-all duration-150"
              >
                Sounds good!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
