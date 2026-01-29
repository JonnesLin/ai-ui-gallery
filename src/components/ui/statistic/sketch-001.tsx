export default function SketchStatistic() {
  return (
    <div className="w-full min-h-screen bg-amber-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            className="bg-white p-6 relative group hover:rotate-1 transition-transform duration-300"
            style={{
              border: '3px solid #000',
              borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
              boxShadow: '8px 8px 0px rgba(0,0,0,0.1)'
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className="w-12 h-12 border-3 border-black flex items-center justify-center text-xl rotate-3"
                style={{
                  border: '2px solid #000',
                  borderRadius: '50% 45% 55% 50% / 55% 50% 50% 45%'
                }}
              >
                💰
              </div>
              <div
                className="px-3 py-1 border-2 border-black text-xs font-bold rotate-2"
                style={{ borderRadius: '12px 15px 14px 13px / 13px 14px 15px 12px' }}
              >
                ↑ 12.5%
              </div>
            </div>
            <div className="text-gray-600 text-xs uppercase tracking-wider mb-2 font-bold transform -rotate-1">
              Total Revenue
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-3 transform rotate-1">$124,592</div>
            <div
              className="h-3 border-2 border-black overflow-hidden transform -rotate-1"
              style={{ borderRadius: '15px 12px 14px 13px / 13px 14px 12px 15px' }}
            >
              <div
                className="h-full bg-blue-400"
                style={{
                  width: '75%',
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,.05) 10px, rgba(0,0,0,.05) 20px)'
                }}
              ></div>
            </div>
          </div>

          <div
            className="bg-white p-6 relative group hover:rotate-1 transition-transform duration-300"
            style={{
              border: '3px solid #000',
              borderRadius: '15px 255px 15px 225px/225px 15px 255px 15px',
              boxShadow: '8px 8px 0px rgba(0,0,0,0.1)'
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className="w-12 h-12 border-3 border-black flex items-center justify-center text-xl -rotate-2"
                style={{
                  border: '2px solid #000',
                  borderRadius: '45% 55% 50% 50% / 50% 50% 55% 45%'
                }}
              >
                👥
              </div>
              <div
                className="px-3 py-1 border-2 border-black text-xs font-bold -rotate-1"
                style={{ borderRadius: '14px 13px 15px 12px / 15px 12px 13px 14px' }}
              >
                ↑ 8.3%
              </div>
            </div>
            <div className="text-gray-600 text-xs uppercase tracking-wider mb-2 font-bold transform rotate-1">
              Active Users
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-3 transform -rotate-1">24,847</div>
            <div
              className="h-3 border-2 border-black overflow-hidden transform rotate-1"
              style={{ borderRadius: '13px 15px 12px 14px / 14px 12px 15px 13px' }}
            >
              <div
                className="h-full bg-purple-400"
                style={{
                  width: '80%',
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,.05) 10px, rgba(0,0,0,.05) 20px)'
                }}
              ></div>
            </div>
          </div>

          <div
            className="bg-white p-6 relative group hover:rotate-1 transition-transform duration-300"
            style={{
              border: '3px solid #000',
              borderRadius: '225px 15px 255px 15px/15px 255px 15px 225px',
              boxShadow: '8px 8px 0px rgba(0,0,0,0.1)'
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className="w-12 h-12 border-3 border-black flex items-center justify-center text-xl rotate-2"
                style={{
                  border: '2px solid #000',
                  borderRadius: '55% 45% 50% 50% / 50% 55% 45% 50%'
                }}
              >
                📦
              </div>
              <div
                className="px-3 py-1 border-2 border-black text-xs font-bold rotate-1"
                style={{ borderRadius: '13px 14px 12px 15px / 12px 15px 14px 13px' }}
              >
                ↓ 2.4%
              </div>
            </div>
            <div className="text-gray-600 text-xs uppercase tracking-wider mb-2 font-bold transform -rotate-1">
              Total Orders
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-3 transform rotate-1">8,429</div>
            <div
              className="h-3 border-2 border-black overflow-hidden transform -rotate-1"
              style={{ borderRadius: '12px 14px 13px 15px / 15px 13px 14px 12px' }}
            >
              <div
                className="h-full bg-orange-400"
                style={{
                  width: '65%',
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,.05) 10px, rgba(0,0,0,.05) 20px)'
                }}
              ></div>
            </div>
          </div>

          <div
            className="bg-white p-6 relative group hover:rotate-1 transition-transform duration-300"
            style={{
              border: '3px solid #000',
              borderRadius: '15px 225px 15px 255px/255px 15px 225px 15px',
              boxShadow: '8px 8px 0px rgba(0,0,0,0.1)'
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className="w-12 h-12 border-3 border-black flex items-center justify-center text-xl -rotate-3"
                style={{
                  border: '2px solid #000',
                  borderRadius: '50% 50% 45% 55% / 45% 55% 50% 50%'
                }}
              >
                ⚡
              </div>
              <div
                className="px-3 py-1 border-2 border-black text-xs font-bold -rotate-2"
                style={{ borderRadius: '15px 12px 14px 13px / 14px 13px 12px 15px' }}
              >
                ↑ 15.7%
              </div>
            </div>
            <div className="text-gray-600 text-xs uppercase tracking-wider mb-2 font-bold transform rotate-1">
              Conversion
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-3 transform -rotate-1">4.82%</div>
            <div
              className="h-3 border-2 border-black overflow-hidden transform rotate-1"
              style={{ borderRadius: '14px 12px 15px 13px / 13px 15px 12px 14px' }}
            >
              <div
                className="h-full bg-green-400"
                style={{
                  width: '95%',
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,.05) 10px, rgba(0,0,0,.05) 20px)'
                }}
              ></div>
            </div>
          </div>
        </div>

        <div
          className="mt-8 bg-white p-8 relative hover:-rotate-1 transition-transform duration-300"
          style={{
            border: '4px solid #000',
            borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
            boxShadow: '12px 12px 0px rgba(0,0,0,0.15)'
          }}
        >
          <div className="border-b-3 border-black pb-6 mb-8 border-dashed transform rotate-1">
            <div className="flex items-center gap-3">
              <div className="text-4xl transform -rotate-12">✏️</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 transform -rotate-1">
                  Performance Dashboard
                </h2>
                <p className="text-gray-600 text-sm transform rotate-1">Hand-drawn analytics</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center transform -rotate-1">
              <div className="text-5xl font-bold text-gray-900 mb-3 transform rotate-2">245,892</div>
              <div className="text-xs uppercase tracking-wider text-gray-600 mb-3">Page Views</div>
              <div
                className="inline-block px-3 py-1 border-2 border-black text-xs font-bold transform -rotate-2"
                style={{ borderRadius: '12px 15px 13px 14px / 14px 13px 15px 12px' }}
              >
                ↑ 18.2%
              </div>
            </div>

            <div className="text-center transform rotate-1">
              <div className="text-5xl font-bold text-gray-900 mb-3 transform -rotate-1">4m 32s</div>
              <div className="text-xs uppercase tracking-wider text-gray-600 mb-3">Session Time</div>
              <div
                className="inline-block px-3 py-1 border-2 border-black text-xs font-bold transform rotate-2"
                style={{ borderRadius: '14px 12px 15px 13px / 13px 15px 12px 14px' }}
              >
                ↑ 12.5%
              </div>
            </div>

            <div className="text-center transform -rotate-1">
              <div className="text-5xl font-bold text-gray-900 mb-3 transform rotate-1">32.4%</div>
              <div className="text-xs uppercase tracking-wider text-gray-600 mb-3">Bounce Rate</div>
              <div
                className="inline-block px-3 py-1 border-2 border-black text-xs font-bold transform -rotate-1"
                style={{ borderRadius: '13px 14px 12px 15px / 15px 12px 14px 13px' }}
              >
                ↓ 5.8%
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="bg-white p-6 relative hover:rotate-1 transition-transform duration-300"
            style={{
              border: '3px solid #000',
              borderRadius: '225px 15px 255px 15px/15px 255px 15px 225px',
              boxShadow: '10px 10px 0px rgba(0,0,0,0.1)'
            }}
          >
            <h3
              className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-dashed border-black transform -rotate-1"
            >
              Revenue Breakdown
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-dashed border-gray-300 transform rotate-1">
                <span className="text-gray-700 text-sm font-medium">Direct Sales</span>
                <span className="text-gray-900 font-bold transform -rotate-2">$87,429</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-dashed border-gray-300 transform -rotate-1">
                <span className="text-gray-700 text-sm font-medium">Subscriptions</span>
                <span className="text-gray-900 font-bold transform rotate-1">$24,893</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-dashed border-gray-300 transform rotate-1">
                <span className="text-gray-700 text-sm font-medium">Referrals</span>
                <span className="text-gray-900 font-bold transform -rotate-1">$12,270</span>
              </div>
            </div>
          </div>

          <div
            className="bg-white p-6 relative hover:rotate-1 transition-transform duration-300"
            style={{
              border: '3px solid #000',
              borderRadius: '15px 255px 15px 225px/225px 15px 255px 15px',
              boxShadow: '10px 10px 0px rgba(0,0,0,0.1)'
            }}
          >
            <h3
              className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-dashed border-black transform rotate-1"
            >
              Growth Metrics
            </h3>
            <div className="space-y-5">
              <div className="transform -rotate-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 text-sm">Customer Satisfaction</span>
                  <span className="text-gray-900 font-bold">92.8%</span>
                </div>
                <div
                  className="h-3 border-2 border-black overflow-hidden transform rotate-1"
                  style={{ borderRadius: '15px 12px 14px 13px / 13px 14px 12px 15px' }}
                >
                  <div
                    className="h-full bg-blue-400"
                    style={{
                      width: '92.8%',
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,.05) 10px, rgba(0,0,0,.05) 20px)'
                    }}
                  ></div>
                </div>
              </div>
              <div className="transform rotate-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 text-sm">Retention Rate</span>
                  <span className="text-gray-900 font-bold">87.5%</span>
                </div>
                <div
                  className="h-3 border-2 border-black overflow-hidden transform -rotate-1"
                  style={{ borderRadius: '13px 15px 12px 14px / 14px 12px 15px 13px' }}
                >
                  <div
                    className="h-full bg-purple-400"
                    style={{
                      width: '87.5%',
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,.05) 10px, rgba(0,0,0,.05) 20px)'
                    }}
                  ></div>
                </div>
              </div>
              <div className="transform -rotate-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 text-sm">Growth Rate</span>
                  <span className="text-gray-900 font-bold">64.2%</span>
                </div>
                <div
                  className="h-3 border-2 border-black overflow-hidden transform rotate-1"
                  style={{ borderRadius: '14px 13px 15px 12px / 12px 15px 13px 14px' }}
                >
                  <div
                    className="h-full bg-green-400"
                    style={{
                      width: '64.2%',
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,.05) 10px, rgba(0,0,0,.05) 20px)'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
