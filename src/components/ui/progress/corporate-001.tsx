export default function CorporateProgress() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 md:p-12">
      <div className="max-w-xl mx-auto space-y-10">
        {/* Basic Progress */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Basic Progress</h3>
          <div className="space-y-4">
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full w-1/4 bg-blue-600 rounded-full" />
            </div>
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-blue-600 rounded-full" />
            </div>
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-blue-600 rounded-full" />
            </div>
          </div>
        </div>

        {/* With Label Card */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Project Progress</h3>
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h4 className="text-base font-semibold text-slate-800">Q4 Marketing Campaign</h4>
                <p className="text-sm text-slate-500">Due Dec 31, 2024</p>
              </div>
              <span className="text-2xl font-bold text-blue-600">65%</span>
            </div>
            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full w-[65%] bg-blue-600 rounded-full" />
            </div>
            <div className="mt-4 flex justify-between text-xs text-slate-500">
              <span>13 tasks completed</span>
              <span>7 tasks remaining</span>
            </div>
          </div>
        </div>

        {/* Status Indicators */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Status Indicators</h3>
          <div className="space-y-3">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-700">Completed</span>
                <span className="text-sm text-emerald-600 font-semibold">100%</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full w-full bg-emerald-500 rounded-full" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-700">On Track</span>
                <span className="text-sm text-blue-600 font-semibold">70%</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full w-[70%] bg-blue-600 rounded-full" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-700">At Risk</span>
                <span className="text-sm text-amber-600 font-semibold">45%</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full w-[45%] bg-amber-500 rounded-full" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-700">Behind Schedule</span>
                <span className="text-sm text-red-600 font-semibold">20%</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full w-[20%] bg-red-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Circular KPIs */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Key Metrics</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 text-center">
              <div className="relative w-20 h-20 mx-auto">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="34" fill="none" stroke="#e2e8f0" strokeWidth="6" />
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="6"
                    strokeDasharray="213.63"
                    strokeDashoffset="42.73"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-slate-800">80%</span>
              </div>
              <p className="mt-2 text-xs font-medium text-slate-500">Revenue</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 text-center">
              <div className="relative w-20 h-20 mx-auto">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="34" fill="none" stroke="#e2e8f0" strokeWidth="6" />
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="6"
                    strokeDasharray="213.63"
                    strokeDashoffset="21.36"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-slate-800">90%</span>
              </div>
              <p className="mt-2 text-xs font-medium text-slate-500">Satisfaction</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 text-center">
              <div className="relative w-20 h-20 mx-auto">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="34" fill="none" stroke="#e2e8f0" strokeWidth="6" />
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="6"
                    strokeDasharray="213.63"
                    strokeDashoffset="85.45"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-slate-800">60%</span>
              </div>
              <p className="mt-2 text-xs font-medium text-slate-500">Efficiency</p>
            </div>
          </div>
        </div>

        {/* Team Progress */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Team Progress</h3>
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm">JD</div>
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700">John Doe</span>
                    <span className="text-slate-500">8/10 tasks</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[80%] bg-blue-600 rounded-full" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-semibold text-sm">AS</div>
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700">Alice Smith</span>
                    <span className="text-slate-500">6/8 tasks</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[75%] bg-emerald-500 rounded-full" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold text-sm">BW</div>
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700">Bob Wilson</span>
                    <span className="text-slate-500">4/12 tasks</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[33%] bg-purple-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Budget Breakdown */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Budget Allocation</h3>
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <div className="h-4 bg-slate-100 rounded-full overflow-hidden flex">
              <div className="h-full w-[45%] bg-blue-600" />
              <div className="h-full w-[30%] bg-emerald-500" />
              <div className="h-full w-[15%] bg-amber-500" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-blue-600" />
                <span className="text-slate-600">Marketing 45%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-emerald-500" />
                <span className="text-slate-600">Operations 30%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-amber-500" />
                <span className="text-slate-600">R&D 15%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
