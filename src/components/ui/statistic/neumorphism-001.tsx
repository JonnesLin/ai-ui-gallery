export default function NeumorphismStatistic() {
  return (
    <div className="w-full min-h-screen bg-gray-200 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-200 rounded-3xl p-6 shadow-[8px_8px_16px_#b8b8b8,-8px_-8px_16px_#ffffff]">
            <div className="w-14 h-14 rounded-full bg-gray-200 shadow-[inset_4px_4px_8px_#b8b8b8,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center mb-4">
              <span className="text-2xl">💵</span>
            </div>
            <div className="text-sm font-medium text-gray-500 mb-2">Total Revenue</div>
            <div className="text-3xl font-bold text-gray-800 mb-3">$89,342</div>
            <div className="flex items-center gap-2 text-sm">
              <div className="px-3 py-1 rounded-full bg-gray-200 shadow-[inset_2px_2px_4px_#b8b8b8,inset_-2px_-2px_4px_#ffffff]">
                <span className="text-green-600">↑ 15.3%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 rounded-3xl p-6 shadow-[8px_8px_16px_#b8b8b8,-8px_-8px_16px_#ffffff]">
            <div className="w-14 h-14 rounded-full bg-gray-200 shadow-[inset_4px_4px_8px_#b8b8b8,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <div className="text-sm font-medium text-gray-500 mb-2">Growth Rate</div>
            <div className="text-3xl font-bold text-gray-800 mb-3">28.5%</div>
            <div className="flex items-center gap-2 text-sm">
              <div className="px-3 py-1 rounded-full bg-gray-200 shadow-[inset_2px_2px_4px_#b8b8b8,inset_-2px_-2px_4px_#ffffff]">
                <span className="text-green-600">↑ 8.2%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 rounded-3xl p-6 shadow-[8px_8px_16px_#b8b8b8,-8px_-8px_16px_#ffffff]">
            <div className="w-14 h-14 rounded-full bg-gray-200 shadow-[inset_4px_4px_8px_#b8b8b8,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center mb-4">
              <span className="text-2xl">👤</span>
            </div>
            <div className="text-sm font-medium text-gray-500 mb-2">Active Users</div>
            <div className="text-3xl font-bold text-gray-800 mb-3">5,428</div>
            <div className="flex items-center gap-2 text-sm">
              <div className="px-3 py-1 rounded-full bg-gray-200 shadow-[inset_2px_2px_4px_#b8b8b8,inset_-2px_-2px_4px_#ffffff]">
                <span className="text-red-600">↓ 3.1%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 rounded-3xl p-6 shadow-[8px_8px_16px_#b8b8b8,-8px_-8px_16px_#ffffff]">
            <div className="w-14 h-14 rounded-full bg-gray-200 shadow-[inset_4px_4px_8px_#b8b8b8,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <div className="text-sm font-medium text-gray-500 mb-2">Conversion</div>
            <div className="text-3xl font-bold text-gray-800 mb-3">4.82%</div>
            <div className="flex items-center gap-2 text-sm">
              <div className="px-3 py-1 rounded-full bg-gray-200 shadow-[inset_2px_2px_4px_#b8b8b8,inset_-2px_-2px_4px_#ffffff]">
                <span className="text-green-600">↑ 12.4%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gray-200 rounded-3xl p-8 shadow-[8px_8px_16px_#b8b8b8,-8px_-8px_16px_#ffffff]">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Monthly Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-2xl bg-gray-200 shadow-[inset_4px_4px_8px_#b8b8b8,inset_-4px_-4px_8px_#ffffff]">
              <div className="text-3xl font-bold text-gray-800 mb-2">12.4K</div>
              <div className="text-sm text-gray-500">New Customers</div>
            </div>
            <div className="text-center p-4 rounded-2xl bg-gray-200 shadow-[inset_4px_4px_8px_#b8b8b8,inset_-4px_-4px_8px_#ffffff]">
              <div className="text-3xl font-bold text-gray-800 mb-2">$245K</div>
              <div className="text-sm text-gray-500">Total Orders</div>
            </div>
            <div className="text-center p-4 rounded-2xl bg-gray-200 shadow-[inset_4px_4px_8px_#b8b8b8,inset_-4px_-4px_8px_#ffffff]">
              <div className="text-3xl font-bold text-gray-800 mb-2">96.5%</div>
              <div className="text-sm text-gray-500">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}