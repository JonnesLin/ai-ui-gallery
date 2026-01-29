import { Statistic } from './Statistic';

export default function FlatStatistic() {
  return (
    <div className="w-full min-h-screen bg-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Statistic
            theme="flat"
            title="Total Revenue"
            value="$45,231"
            size="lg"
            trend="up"
            trendValue="12.5% increase"
            className="bg-red-500 uppercase tracking-wider"
          />

          <Statistic
            theme="flat"
            title="Active Users"
            value="8,429"
            size="lg"
            trend="up"
            trendValue="8.2% increase"
            className="bg-blue-500 uppercase tracking-wider"
          />

          <Statistic
            theme="flat"
            title="Conversion Rate"
            value="3.24%"
            size="lg"
            trend="down"
            trendValue="2.1% decrease"
            className="bg-yellow-500 uppercase tracking-wider"
          />

          <Statistic
            theme="flat"
            title="Avg. Order Value"
            value="$127"
            size="lg"
            trend="up"
            trendValue="5.4% increase"
            className="bg-green-500 uppercase tracking-wider"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Statistic
            theme="flat"
            title="New Subscribers"
            value="2,847"
            size="xl"
            className="bg-purple-500 text-center uppercase tracking-wider"
          />

          <Statistic
            theme="flat"
            title="Customer Satisfaction"
            value="94.2%"
            size="xl"
            className="bg-pink-500 text-center uppercase tracking-wider"
          />

          <Statistic
            theme="flat"
            title="Page Load Time"
            value="1.8s"
            size="xl"
            className="bg-orange-500 text-center uppercase tracking-wider"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Statistic
            theme="flat"
            title="Monthly Growth"
            value="+23.5%"
            size="lg"
            trendValue="vs last month"
            className="bg-indigo-600 uppercase tracking-wider"
            icon={
              <div className="w-16 h-16 bg-indigo-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                </svg>
              </div>
            }
            layout="horizontal"
          />

          <Statistic
            theme="flat"
            title="Total Projects"
            value="156"
            size="lg"
            trendValue="24 completed this week"
            className="bg-teal-600 uppercase tracking-wider"
            icon={
              <div className="w-16 h-16 bg-teal-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
            }
            layout="horizontal"
          />
        </div>
      </div>
    </div>
  );
}
