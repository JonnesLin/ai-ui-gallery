import { Statistic } from './Statistic';

export default function MinimalistStatistic() {
  return (
    <div className="w-full min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Statistic
            theme="minimalist"
            title="Total Revenue"
            value="$45,231"
            size="md"
            trend="up"
            trendValue="12.5%"
            className="border-l-2 border-black pl-6 py-4"
          />

          <Statistic
            theme="minimalist"
            title="Active Users"
            value="8,429"
            size="md"
            trend="up"
            trendValue="8.2%"
            className="border-l-2 border-black pl-6 py-4"
          />

          <Statistic
            theme="minimalist"
            title="Conversion Rate"
            value="3.24%"
            size="md"
            trend="down"
            trendValue="2.1%"
            className="border-l-2 border-black pl-6 py-4"
          />

          <Statistic
            theme="minimalist"
            title="Avg. Order Value"
            value="$127"
            size="md"
            trend="up"
            trendValue="5.4%"
            className="border-l-2 border-black pl-6 py-4"
          />
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Statistic
              theme="minimalist"
              title="New Subscribers"
              value="2,847"
              size="lg"
              className="text-center"
            />

            <Statistic
              theme="minimalist"
              title="Customer Satisfaction"
              value="94.2%"
              size="lg"
              className="text-center"
            />

            <Statistic
              theme="minimalist"
              title="Page Load Time"
              value="1.8s"
              size="lg"
              className="text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}