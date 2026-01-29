export default function CorporateStatistic() {
  return (
    <div className="w-full min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-6">
          <h2 className="text-2xl font-semibold text-slate-800 mb-1">Q4 2024 Performance</h2>
          <p className="text-slate-500 text-sm">Year-over-year comparison and growth metrics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">+12.5%</span>
            </div>
            <div className="text-slate-500 text-sm font-medium mb-1">Total Revenue</div>
            <div className="text-3xl font-semibold text-slate-900">$2.4M</div>
            <div className="mt-3 text-xs text-slate-400">vs $2.1M last quarter</div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">+8.2%</span>
            </div>
            <div className="text-slate-500 text-sm font-medium mb-1">Active Clients</div>
            <div className="text-3xl font-semibold text-slate-900">1,247</div>
            <div className="mt-3 text-xs text-slate-400">vs 1,152 last quarter</div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">+15.8%</span>
            </div>
            <div className="text-slate-500 text-sm font-medium mb-1">Project Success Rate</div>
            <div className="text-3xl font-semibold text-slate-900">94.2%</div>
            <div className="mt-3 text-xs text-slate-400">vs 81.4% last quarter</div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded">-3.2%</span>
            </div>
            <div className="text-slate-500 text-sm font-medium mb-1">Operating Costs</div>
            <div className="text-3xl font-semibold text-slate-900">$842K</div>
            <div className="mt-3 text-xs text-slate-400">vs $870K last quarter</div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Financial Overview</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600 text-sm">Gross Profit</span>
                <span className="text-slate-900 font-semibold">$1,558,000</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600 text-sm">Net Income</span>
                <span className="text-slate-900 font-semibold">$716,000</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600 text-sm">Profit Margin</span>
                <span className="text-slate-900 font-semibold">29.8%</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-slate-600 text-sm">EBITDA</span>
                <span className="text-slate-900 font-semibold">$892,000</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Key Performance Indicators</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-slate-50 rounded-lg">
                <div className="text-slate-500 text-xs mb-1">Customer Retention</div>
                <div className="text-2xl font-semibold text-slate-900">92.4%</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <div className="text-slate-500 text-xs mb-1">NPS Score</div>
                <div className="text-2xl font-semibold text-slate-900">67</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <div className="text-slate-500 text-xs mb-1">Avg Contract Value</div>
                <div className="text-2xl font-semibold text-slate-900">$1,925</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <div className="text-slate-500 text-xs mb-1">Time to Close</div>
                <div className="text-2xl font-semibold text-slate-900">28 days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}