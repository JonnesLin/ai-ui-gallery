export default function MonochromeStatistic() {
  return (
    <div className="w-full min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border-2 border-black p-6 hover:bg-black hover:text-white transition-colors duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 border-2 border-black group-hover:border-white flex items-center justify-center font-bold">
                $
              </div>
              <div className="text-xs font-mono tracking-wider">↑ 12.5%</div>
            </div>
            <div className="text-xs font-mono mb-2 uppercase tracking-wider opacity-60">Revenue</div>
            <div className="text-4xl font-bold mb-3">$124,592</div>
            <div className="h-2 border border-black group-hover:border-white">
              <div className="h-full w-3/4 bg-black group-hover:bg-white"></div>
            </div>
          </div>

          <div className="border-2 border-black p-6 hover:bg-black hover:text-white transition-colors duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 border-2 border-black group-hover:border-white flex items-center justify-center font-bold">
                👤
              </div>
              <div className="text-xs font-mono tracking-wider">↑ 8.3%</div>
            </div>
            <div className="text-xs font-mono mb-2 uppercase tracking-wider opacity-60">Users</div>
            <div className="text-4xl font-bold mb-3">24,847</div>
            <div className="h-2 border border-black group-hover:border-white">
              <div className="h-full w-4/5 bg-black group-hover:bg-white"></div>
            </div>
          </div>

          <div className="border-2 border-black p-6 hover:bg-black hover:text-white transition-colors duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 border-2 border-black group-hover:border-white flex items-center justify-center font-bold">
                📊
              </div>
              <div className="text-xs font-mono tracking-wider">↓ 2.4%</div>
            </div>
            <div className="text-xs font-mono mb-2 uppercase tracking-wider opacity-60">Orders</div>
            <div className="text-4xl font-bold mb-3">8,429</div>
            <div className="h-2 border border-black group-hover:border-white">
              <div className="h-full w-2/3 bg-black group-hover:bg-white"></div>
            </div>
          </div>

          <div className="border-2 border-black p-6 hover:bg-black hover:text-white transition-colors duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 border-2 border-black group-hover:border-white flex items-center justify-center font-bold">
                %
              </div>
              <div className="text-xs font-mono tracking-wider">↑ 15.7%</div>
            </div>
            <div className="text-xs font-mono mb-2 uppercase tracking-wider opacity-60">Conversion</div>
            <div className="text-4xl font-bold mb-3">4.82%</div>
            <div className="h-2 border border-black group-hover:border-white">
              <div className="h-full w-full bg-black group-hover:bg-white"></div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-4 border-black p-8">
          <div className="border-b-2 border-black pb-6 mb-8">
            <h2 className="text-3xl font-bold mb-2">PERFORMANCE DASHBOARD</h2>
            <p className="text-sm font-mono uppercase tracking-wider opacity-60">Real-time analytics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center border-r-2 border-black last:border-r-0">
              <div className="text-5xl font-bold mb-3">245,892</div>
              <div className="text-xs font-mono uppercase tracking-wider mb-4">Page Views</div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-black"></div>
                <div className="text-xs font-mono">↑ 18.2%</div>
              </div>
            </div>

            <div className="text-center border-r-2 border-black last:border-r-0">
              <div className="text-5xl font-bold mb-3">4m 32s</div>
              <div className="text-xs font-mono uppercase tracking-wider mb-4">Session Time</div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-black"></div>
                <div className="text-xs font-mono">↑ 12.5%</div>
              </div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold mb-3">32.4%</div>
              <div className="text-xs font-mono uppercase tracking-wider mb-4">Bounce Rate</div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-black"></div>
                <div className="text-xs font-mono">↓ 5.8%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-black p-6">
            <h3 className="text-xl font-bold mb-6 border-b-2 border-black pb-3">REVENUE BREAKDOWN</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-black pb-3">
                <span className="font-mono text-sm">Direct Sales</span>
                <span className="font-bold">$87,429</span>
              </div>
              <div className="flex items-center justify-between border-b border-black pb-3">
                <span className="font-mono text-sm">Subscriptions</span>
                <span className="font-bold">$24,893</span>
              </div>
              <div className="flex items-center justify-between border-b border-black pb-3">
                <span className="font-mono text-sm">Referrals</span>
                <span className="font-bold">$12,270</span>
              </div>
            </div>
          </div>

          <div className="border-2 border-black p-6">
            <h3 className="text-xl font-bold mb-6 border-b-2 border-black pb-3">KEY METRICS</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-sm">Customer Satisfaction</span>
                  <span className="font-bold">92.8%</span>
                </div>
                <div className="h-3 border-2 border-black">
                  <div className="h-full bg-black" style={{ width: '92.8%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-sm">Retention Rate</span>
                  <span className="font-bold">87.5%</span>
                </div>
                <div className="h-3 border-2 border-black">
                  <div className="h-full bg-black" style={{ width: '87.5%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-sm">Growth Rate</span>
                  <span className="font-bold">64.2%</span>
                </div>
                <div className="h-3 border-2 border-black">
                  <div className="h-full bg-black" style={{ width: '64.2%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-black text-white p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center border-r border-white/20 last:border-r-0">
              <div className="text-xs font-mono uppercase tracking-wider mb-2 opacity-60">New Users</div>
              <div className="text-3xl font-bold">1,284</div>
            </div>
            <div className="text-center border-r border-white/20 last:border-r-0">
              <div className="text-xs font-mono uppercase tracking-wider mb-2 opacity-60">Monthly Rev</div>
              <div className="text-3xl font-bold">$284K</div>
            </div>
            <div className="text-center border-r border-white/20 last:border-r-0">
              <div className="text-xs font-mono uppercase tracking-wider mb-2 opacity-60">Avg Order</div>
              <div className="text-3xl font-bold">$127</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-mono uppercase tracking-wider mb-2 opacity-60">Response</div>
              <div className="text-3xl font-bold">48h</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
