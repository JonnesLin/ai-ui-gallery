export default function RetroProgress() {
  return (
    <div className="min-h-screen bg-amber-50 p-8 md:p-12" style={{ fontFamily: '"Courier New", monospace' }}>
      <div className="max-w-xl mx-auto space-y-10">
        {/* Basic Progress */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-amber-900 uppercase tracking-wide">Basic Progress</h3>
          <div className="space-y-4">
            <div className="h-6 bg-amber-200 border-2 border-amber-900 rounded-sm shadow-[3px_3px_0_0_#78350f]">
              <div className="h-full w-1/4 bg-amber-600 rounded-sm" />
            </div>
            <div className="h-6 bg-amber-200 border-2 border-amber-900 rounded-sm shadow-[3px_3px_0_0_#78350f]">
              <div className="h-full w-1/2 bg-amber-600 rounded-sm" />
            </div>
            <div className="h-6 bg-amber-200 border-2 border-amber-900 rounded-sm shadow-[3px_3px_0_0_#78350f]">
              <div className="h-full w-3/4 bg-amber-600 rounded-sm" />
            </div>
          </div>
        </div>

        {/* Terminal Style */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-amber-900 uppercase tracking-wide">Terminal Style</h3>
          <div className="bg-green-950 border-4 border-green-800 p-4 rounded shadow-[4px_4px_0_0_#14532d]">
            <p className="text-green-400 text-sm mb-2">Loading... 65%</p>
            <div className="text-green-400 font-mono text-sm">
              [████████████████████░░░░░░░░░░] 65%
            </div>
          </div>
        </div>

        {/* With Label */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-amber-900 uppercase tracking-wide">With Label</h3>
          <div className="bg-orange-100 border-2 border-amber-900 p-4 rounded-sm shadow-[4px_4px_0_0_#78350f]">
            <div className="flex justify-between text-sm font-bold text-amber-900 mb-2">
              <span>DOWNLOADING FILE...</span>
              <span>65%</span>
            </div>
            <div className="h-5 bg-amber-200 border-2 border-amber-800 rounded-sm">
              <div className="h-full w-[65%] bg-gradient-to-r from-orange-400 to-orange-500 rounded-sm" />
            </div>
          </div>
        </div>

        {/* Pixel Progress */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-amber-900 uppercase tracking-wide">Pixel Style</h3>
          <div className="flex gap-1">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className={`w-8 h-8 border-2 border-amber-900 ${i < 7 ? 'bg-teal-500' : 'bg-amber-200'}`}
                style={{ imageRendering: 'pixelated' }}
              />
            ))}
          </div>
          <p className="text-center text-sm font-bold text-amber-800">70% COMPLETE</p>
        </div>

        {/* Colors */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-amber-900 uppercase tracking-wide">Status</h3>
          <div className="space-y-3">
            <div className="bg-green-100 border-2 border-green-800 p-3 rounded-sm shadow-[3px_3px_0_0_#166534]">
              <div className="flex justify-between text-xs font-bold text-green-800 mb-2">
                <span>SUCCESS</span>
                <span>100%</span>
              </div>
              <div className="h-4 bg-green-200 border-2 border-green-700 rounded-sm">
                <div className="h-full w-full bg-green-500 rounded-sm" />
              </div>
            </div>
            <div className="bg-yellow-100 border-2 border-yellow-700 p-3 rounded-sm shadow-[3px_3px_0_0_#a16207]">
              <div className="flex justify-between text-xs font-bold text-yellow-800 mb-2">
                <span>WARNING</span>
                <span>70%</span>
              </div>
              <div className="h-4 bg-yellow-200 border-2 border-yellow-600 rounded-sm">
                <div className="h-full w-[70%] bg-yellow-500 rounded-sm" />
              </div>
            </div>
            <div className="bg-red-100 border-2 border-red-700 p-3 rounded-sm shadow-[3px_3px_0_0_#b91c1c]">
              <div className="flex justify-between text-xs font-bold text-red-800 mb-2">
                <span>ERROR</span>
                <span>35%</span>
              </div>
              <div className="h-4 bg-red-200 border-2 border-red-600 rounded-sm">
                <div className="h-full w-[35%] bg-red-500 rounded-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Circular Progress */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-amber-900 uppercase tracking-wide">Circular</h3>
          <div className="flex items-center justify-around">
            <div className="relative w-28 h-28 bg-amber-100 border-4 border-amber-900 rounded-full shadow-[4px_4px_0_0_#78350f]">
              <svg className="w-full h-full -rotate-90 p-2" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#fde68a" strokeWidth="10" />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#d97706"
                  strokeWidth="10"
                  strokeDasharray="251.33"
                  strokeDashoffset="188.5"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xl font-black text-amber-900">25%</span>
            </div>
            <div className="relative w-28 h-28 bg-teal-100 border-4 border-teal-900 rounded-full shadow-[4px_4px_0_0_#134e4a]">
              <svg className="w-full h-full -rotate-90 p-2" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#99f6e4" strokeWidth="10" />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#0d9488"
                  strokeWidth="10"
                  strokeDasharray="251.33"
                  strokeDashoffset="62.83"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xl font-black text-teal-900">75%</span>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-amber-900 uppercase tracking-wide">Steps</h3>
          <div className="flex items-center justify-between">
            {['Start', 'Process', 'Review', 'Done'].map((step, i) => (
              <div key={step} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 border-3 border-amber-900 rounded-full flex items-center justify-center font-black text-sm shadow-[2px_2px_0_0_#78350f] ${
                    i < 2 ? 'bg-amber-500 text-white' : 'bg-amber-100 text-amber-900'
                  }`}
                >
                  {i + 1}
                </div>
                <span className="mt-2 text-xs font-bold text-amber-800">{step}</span>
              </div>
            ))}
          </div>
          <div className="relative h-1 bg-amber-300 mx-5 -mt-10 mb-8">
            <div className="absolute h-full w-1/3 bg-amber-600" />
          </div>
        </div>

        {/* Cassette Style */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-amber-900 uppercase tracking-wide">Cassette Style</h3>
          <div className="bg-stone-300 border-4 border-stone-600 rounded-lg p-4 shadow-[4px_4px_0_0_#57534e]">
            <div className="bg-stone-100 border-2 border-stone-500 rounded p-3">
              <div className="flex justify-between text-xs font-bold text-stone-700 mb-2">
                <span>SIDE A</span>
                <span>03:45 / 05:00</span>
              </div>
              <div className="h-3 bg-stone-300 border border-stone-500 rounded-full">
                <div className="h-full w-[75%] bg-gradient-to-r from-stone-600 to-stone-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
