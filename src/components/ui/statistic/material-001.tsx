import { Statistic } from './Statistic';

export default function MaterialStatistic() {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="hover:shadow-xl transition-shadow duration-300">
            <Statistic
              theme="material"
              title="Total Revenue"
              value="$124,592"
              size="sm"
              trend="up"
              trendValue="+12.5%"
              icon={
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-xl">💰</span>
                </div>
              }
            />
            <div className="px-6 pb-6">
              <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-blue-500 rounded-full shadow-sm"></div>
              </div>
            </div>
          </div>

          <div className="hover:shadow-xl transition-shadow duration-300">
            <Statistic
              theme="material"
              title="Active Users"
              value="24,847"
              size="sm"
              trend="up"
              trendValue="+8.3%"
              icon={
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-xl">👥</span>
                </div>
              }
            />
            <div className="px-6 pb-6">
              <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-purple-500 rounded-full shadow-sm"></div>
              </div>
            </div>
          </div>

          <div className="hover:shadow-xl transition-shadow duration-300">
            <Statistic
              theme="material"
              title="Total Orders"
              value="8,429"
              size="sm"
              trend="down"
              trendValue="-2.4%"
              icon={
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-xl">📦</span>
                </div>
              }
            />
            <div className="px-6 pb-6">
              <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-orange-500 rounded-full shadow-sm"></div>
              </div>
            </div>
          </div>

          <div className="hover:shadow-xl transition-shadow duration-300">
            <Statistic
              theme="material"
              title="Conversion Rate"
              value="4.82%"
              size="sm"
              trend="up"
              trendValue="+15.7%"
              icon={
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-xl">⚡</span>
                </div>
              }
            />
            <div className="px-6 pb-6">
              <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-full bg-teal-500 rounded-full shadow-sm"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-indigo-500 rounded flex items-center justify-center">
                <span className="text-white text-lg">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Performance Metrics</h3>
            </div>
            <div className="space-y-5">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-sm font-medium">Page Views</span>
                  <span className="text-gray-900 font-bold">245,892</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-5/6 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-sm font-medium">Session Duration</span>
                  <span className="text-gray-900 font-bold">4m 32s</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-sm font-medium">Bounce Rate</span>
                  <span className="text-gray-900 font-bold">32.4%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-pink-500 rounded flex items-center justify-center">
                <span className="text-white text-lg">💎</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Revenue Analytics</h3>
            </div>
            <div className="space-y-5">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <div>
                  <div className="text-blue-900 font-semibold text-lg">$87,429</div>
                  <div className="text-blue-600 text-sm">Direct Sales</div>
                </div>
                <div className="text-blue-500 text-xl">↗</div>
              </div>
              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <div>
                  <div className="text-purple-900 font-semibold text-lg">$24,893</div>
                  <div className="text-purple-600 text-sm">Subscriptions</div>
                </div>
                <div className="text-purple-500 text-xl">↗</div>
              </div>
              <div className="flex items-center justify-between p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors">
                <div>
                  <div className="text-teal-900 font-semibold text-lg">$12,270</div>
                  <div className="text-teal-600 text-sm">Referrals</div>
                </div>
                <div className="text-teal-500 text-xl">↗</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg p-8 text-white">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Monthly Summary</h2>
              <p className="text-indigo-100 text-sm">Overview of key performance indicators</p>
            </div>
            <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <span className="text-sm font-medium">January 2026</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">92.8%</div>
              <div className="text-indigo-100 text-sm">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1,284</div>
              <div className="text-indigo-100 text-sm">New Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$284K</div>
              <div className="text-indigo-100 text-sm">Monthly Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">48h</div>
              <div className="text-indigo-100 text-sm">Avg Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
