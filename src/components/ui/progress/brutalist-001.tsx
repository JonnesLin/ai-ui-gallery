export default function BrutalistProgress() {
  return (
    <div className="min-h-screen bg-white p-8 md:p-12">
      <div className="max-w-xl mx-auto space-y-12">
        {/* Basic Progress */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-black uppercase tracking-widest border-b-2 border-black pb-1 inline-block">Basic Progress</h3>
          <div className="space-y-4">
            <div className="h-6 bg-white border-4 border-black">
              <div className="h-full w-1/4 bg-black" />
            </div>
            <div className="h-6 bg-white border-4 border-black">
              <div className="h-full w-1/2 bg-black" />
            </div>
            <div className="h-6 bg-white border-4 border-black">
              <div className="h-full w-3/4 bg-black" />
            </div>
          </div>
        </div>

        {/* With Label */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-black uppercase tracking-widest border-b-2 border-black pb-1 inline-block">With Label</h3>
          <div className="border-4 border-black p-4 bg-yellow-300">
            <div className="flex justify-between text-sm font-bold mb-2">
              <span className="uppercase">DOWNLOADING</span>
              <span>65%</span>
            </div>
            <div className="h-8 bg-white border-4 border-black">
              <div className="h-full w-[65%] bg-black" />
            </div>
          </div>
        </div>

        {/* Colors */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-black uppercase tracking-widest border-b-2 border-black pb-1 inline-block">Status</h3>
          <div className="space-y-4">
            <div className="border-4 border-black p-3 bg-green-400">
              <div className="flex justify-between text-xs font-bold mb-2 uppercase">
                <span>Success</span>
                <span>100%</span>
              </div>
              <div className="h-5 bg-white border-2 border-black">
                <div className="h-full w-full bg-black" />
              </div>
            </div>
            <div className="border-4 border-black p-3 bg-yellow-400">
              <div className="flex justify-between text-xs font-bold mb-2 uppercase">
                <span>Warning</span>
                <span>70%</span>
              </div>
              <div className="h-5 bg-white border-2 border-black">
                <div className="h-full w-[70%] bg-black" />
              </div>
            </div>
            <div className="border-4 border-black p-3 bg-red-400">
              <div className="flex justify-between text-xs font-bold mb-2 uppercase">
                <span>Error</span>
                <span>35%</span>
              </div>
              <div className="h-5 bg-white border-2 border-black">
                <div className="h-full w-[35%] bg-black" />
              </div>
            </div>
          </div>
        </div>

        {/* Circular Progress */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-black uppercase tracking-widest border-b-2 border-black pb-1 inline-block">Circular</h3>
          <div className="flex items-center justify-around">
            <div className="relative w-28 h-28 border-4 border-black bg-cyan-300 flex items-center justify-center">
              <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="32" fill="none" stroke="white" strokeWidth="8" />
                <circle
                  cx="40"
                  cy="40"
                  r="32"
                  fill="none"
                  stroke="black"
                  strokeWidth="8"
                  strokeDasharray="201.06"
                  strokeDashoffset="150.8"
                />
              </svg>
              <span className="absolute text-2xl font-black">25%</span>
            </div>
            <div className="relative w-28 h-28 border-4 border-black bg-lime-300 flex items-center justify-center">
              <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="32" fill="none" stroke="white" strokeWidth="8" />
                <circle
                  cx="40"
                  cy="40"
                  r="32"
                  fill="none"
                  stroke="black"
                  strokeWidth="8"
                  strokeDasharray="201.06"
                  strokeDashoffset="50.27"
                />
              </svg>
              <span className="absolute text-2xl font-black">75%</span>
            </div>
          </div>
        </div>

        {/* Segmented */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-black uppercase tracking-widest border-b-2 border-black pb-1 inline-block">Segmented</h3>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`flex-1 h-10 border-4 border-black ${i <= 3 ? 'bg-black' : 'bg-white'}`}
              />
            ))}
          </div>
          <p className="text-center font-bold uppercase text-sm">Step 3 of 5</p>
        </div>

        {/* Striped */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-black uppercase tracking-widest border-b-2 border-black pb-1 inline-block">Striped</h3>
          <div className="h-8 bg-white border-4 border-black overflow-hidden">
            <div
              className="h-full w-[60%] animate-[brutalistStripes_0.5s_linear_infinite]"
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, black, black 10px, white 10px, white 20px)',
                backgroundSize: '28.28px 28.28px'
              }}
            />
          </div>
          <style>{`
            @keyframes brutalistStripes {
              0% { background-position: 0 0; }
              100% { background-position: 28.28px 0; }
            }
          `}</style>
        </div>

        {/* Offset Label */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-black uppercase tracking-widest border-b-2 border-black pb-1 inline-block">Offset Label</h3>
          <div className="relative">
            <div className="h-8 bg-white border-4 border-black">
              <div className="h-full w-[45%] bg-blue-500" />
            </div>
            <div
              className="absolute -top-1 border-4 border-black bg-white px-2 py-1 font-black text-sm transform -translate-y-full"
              style={{ left: 'calc(45% - 20px)' }}
            >
              45%
            </div>
          </div>
        </div>

        {/* Inverted */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-black uppercase tracking-widest border-b-2 border-black pb-1 inline-block">Inverted</h3>
          <div className="bg-black p-4 border-4 border-black">
            <div className="flex justify-between text-xs font-bold mb-2 uppercase text-white">
              <span>Processing</span>
              <span>80%</span>
            </div>
            <div className="h-6 bg-black border-4 border-white">
              <div className="h-full w-[80%] bg-white" />
            </div>
          </div>
        </div>

        {/* Stacked */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-black uppercase tracking-widest border-b-2 border-black pb-1 inline-block">Stacked</h3>
          <div className="border-4 border-black p-4">
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="w-20 text-xs font-bold uppercase">CPU</span>
                <div className="flex-1 h-4 bg-white border-2 border-black">
                  <div className="h-full w-[85%] bg-red-500" />
                </div>
                <span className="w-12 text-xs font-bold text-right">85%</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-20 text-xs font-bold uppercase">Memory</span>
                <div className="flex-1 h-4 bg-white border-2 border-black">
                  <div className="h-full w-[60%] bg-blue-500" />
                </div>
                <span className="w-12 text-xs font-bold text-right">60%</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-20 text-xs font-bold uppercase">Disk</span>
                <div className="flex-1 h-4 bg-white border-2 border-black">
                  <div className="h-full w-[40%] bg-green-500" />
                </div>
                <span className="w-12 text-xs font-bold text-right">40%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
