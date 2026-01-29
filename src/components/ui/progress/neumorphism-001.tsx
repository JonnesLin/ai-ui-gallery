export default function NeumorphismProgress() {
  return (
    <div className="min-h-screen bg-[#e0e5ec] p-8 md:p-12">
      <div className="max-w-xl mx-auto space-y-10">
        {/* Basic Progress */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-widest">Basic Progress</h3>
          <div className="space-y-6">
            <div
              className="h-4 rounded-full p-1"
              style={{ boxShadow: 'inset 4px 4px 8px #b8bcc2, inset -4px -4px 8px #ffffff' }}
            >
              <div
                className="h-full w-1/4 bg-[#e0e5ec] rounded-full"
                style={{ boxShadow: '2px 2px 4px #b8bcc2, -2px -2px 4px #ffffff' }}
              />
            </div>
            <div
              className="h-4 rounded-full p-1"
              style={{ boxShadow: 'inset 4px 4px 8px #b8bcc2, inset -4px -4px 8px #ffffff' }}
            >
              <div
                className="h-full w-1/2 bg-[#e0e5ec] rounded-full"
                style={{ boxShadow: '2px 2px 4px #b8bcc2, -2px -2px 4px #ffffff' }}
              />
            </div>
            <div
              className="h-4 rounded-full p-1"
              style={{ boxShadow: 'inset 4px 4px 8px #b8bcc2, inset -4px -4px 8px #ffffff' }}
            >
              <div
                className="h-full w-3/4 bg-[#e0e5ec] rounded-full"
                style={{ boxShadow: '2px 2px 4px #b8bcc2, -2px -2px 4px #ffffff' }}
              />
            </div>
          </div>
        </div>

        {/* With Label */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-widest">With Label</h3>
          <div
            className="rounded-2xl p-6"
            style={{ boxShadow: '8px 8px 16px #b8bcc2, -8px -8px 16px #ffffff' }}
          >
            <div className="flex justify-between text-sm mb-4">
              <span className="text-gray-600 font-medium">Downloading...</span>
              <span className="text-gray-500">65%</span>
            </div>
            <div
              className="h-5 rounded-full p-1"
              style={{ boxShadow: 'inset 4px 4px 8px #b8bcc2, inset -4px -4px 8px #ffffff' }}
            >
              <div
                className="h-full w-[65%] rounded-full bg-gradient-to-r from-blue-400 to-blue-500"
                style={{ boxShadow: '2px 2px 4px #b8bcc2' }}
              />
            </div>
          </div>
        </div>

        {/* Colors */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-widest">Status Colors</h3>
          <div className="space-y-4">
            <div
              className="rounded-xl p-4"
              style={{ boxShadow: '6px 6px 12px #b8bcc2, -6px -6px 12px #ffffff' }}
            >
              <div className="flex justify-between text-sm mb-3">
                <span className="text-emerald-600 font-medium">Success</span>
                <span className="text-gray-500">100%</span>
              </div>
              <div
                className="h-3 rounded-full p-0.5"
                style={{ boxShadow: 'inset 3px 3px 6px #b8bcc2, inset -3px -3px 6px #ffffff' }}
              >
                <div className="h-full w-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500" />
              </div>
            </div>
            <div
              className="rounded-xl p-4"
              style={{ boxShadow: '6px 6px 12px #b8bcc2, -6px -6px 12px #ffffff' }}
            >
              <div className="flex justify-between text-sm mb-3">
                <span className="text-amber-600 font-medium">Warning</span>
                <span className="text-gray-500">70%</span>
              </div>
              <div
                className="h-3 rounded-full p-0.5"
                style={{ boxShadow: 'inset 3px 3px 6px #b8bcc2, inset -3px -3px 6px #ffffff' }}
              >
                <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-amber-400 to-amber-500" />
              </div>
            </div>
            <div
              className="rounded-xl p-4"
              style={{ boxShadow: '6px 6px 12px #b8bcc2, -6px -6px 12px #ffffff' }}
            >
              <div className="flex justify-between text-sm mb-3">
                <span className="text-rose-600 font-medium">Error</span>
                <span className="text-gray-500">35%</span>
              </div>
              <div
                className="h-3 rounded-full p-0.5"
                style={{ boxShadow: 'inset 3px 3px 6px #b8bcc2, inset -3px -3px 6px #ffffff' }}
              >
                <div className="h-full w-[35%] rounded-full bg-gradient-to-r from-rose-400 to-rose-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Circular Progress */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-widest">Circular</h3>
          <div className="flex items-center justify-around">
            <div
              className="relative w-28 h-28 rounded-full p-3"
              style={{ boxShadow: '8px 8px 16px #b8bcc2, -8px -8px 16px #ffffff' }}
            >
              <div
                className="w-full h-full rounded-full flex items-center justify-center"
                style={{ boxShadow: 'inset 4px 4px 8px #b8bcc2, inset -4px -4px 8px #ffffff' }}
              >
                <svg className="absolute w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="34" fill="none" stroke="#d1d5db" strokeWidth="6" />
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    fill="none"
                    stroke="url(#neuGrad1)"
                    strokeWidth="6"
                    strokeDasharray="213.63"
                    strokeDashoffset="160.22"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="neuGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-lg font-semibold text-gray-600">25%</span>
              </div>
            </div>
            <div
              className="relative w-28 h-28 rounded-full p-3"
              style={{ boxShadow: '8px 8px 16px #b8bcc2, -8px -8px 16px #ffffff' }}
            >
              <div
                className="w-full h-full rounded-full flex items-center justify-center"
                style={{ boxShadow: 'inset 4px 4px 8px #b8bcc2, inset -4px -4px 8px #ffffff' }}
              >
                <svg className="absolute w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="34" fill="none" stroke="#d1d5db" strokeWidth="6" />
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    fill="none"
                    stroke="url(#neuGrad2)"
                    strokeWidth="6"
                    strokeDasharray="213.63"
                    strokeDashoffset="53.41"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="neuGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-lg font-semibold text-gray-600">75%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Segmented Progress */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-widest">Segmented</h3>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex-1 h-4 rounded-lg"
                style={{
                  boxShadow: i <= 3
                    ? '2px 2px 4px #b8bcc2, -2px -2px 4px #ffffff'
                    : 'inset 2px 2px 4px #b8bcc2, inset -2px -2px 4px #ffffff',
                  background: i <= 3 ? 'linear-gradient(135deg, #60a5fa, #3b82f6)' : '#e0e5ec'
                }}
              />
            ))}
          </div>
          <p className="text-center text-sm text-gray-500">Step 3 of 5</p>
        </div>

        {/* Size Variants */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-widest">Sizes</h3>
          <div className="space-y-6">
            <div>
              <p className="text-xs text-gray-400 mb-2">Small</p>
              <div
                className="h-2 rounded-full"
                style={{ boxShadow: 'inset 2px 2px 4px #b8bcc2, inset -2px -2px 4px #ffffff' }}
              >
                <div
                  className="h-full w-3/5 rounded-full bg-gradient-to-r from-violet-400 to-purple-500"
                />
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-2">Medium</p>
              <div
                className="h-4 rounded-full p-0.5"
                style={{ boxShadow: 'inset 3px 3px 6px #b8bcc2, inset -3px -3px 6px #ffffff' }}
              >
                <div
                  className="h-full w-3/5 rounded-full bg-gradient-to-r from-violet-400 to-purple-500"
                />
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-2">Large</p>
              <div
                className="h-6 rounded-full p-1"
                style={{ boxShadow: 'inset 4px 4px 8px #b8bcc2, inset -4px -4px 8px #ffffff' }}
              >
                <div
                  className="h-full w-3/5 rounded-full bg-gradient-to-r from-violet-400 to-purple-500"
                  style={{ boxShadow: '2px 2px 4px #b8bcc2' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
