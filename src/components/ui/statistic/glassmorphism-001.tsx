import { Statistic } from './Statistic';

export default function GlassmorphismStatistic() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Statistic
            theme="glassmorphism"
            title="Revenue"
            value="$54,329"
            size="md"
            trend="up"
            trendValue="18.2% vs last month"
            icon={
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
            }
          />

          <Statistic
            theme="glassmorphism"
            title="Users"
            value="12,845"
            size="md"
            trend="up"
            trendValue="24.5% vs last month"
            icon={
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
            }
          />

          <Statistic
            theme="glassmorphism"
            title="Growth"
            value="+42%"
            size="md"
            trend="up"
            trendValue="7.8% vs last month"
            icon={
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
            }
          />

          <Statistic
            theme="glassmorphism"
            title="Rating"
            value={4.9}
            precision={1}
            size="md"
            trend="down"
            trendValue="0.2% vs last month"
            icon={
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
            }
          />
        </div>

        <div className="mt-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Statistic
              theme="glassmorphism"
              title="Total Sales"
              value="$128,492"
              size="sm"
              className="border-none shadow-none bg-transparent"
            />
            <Statistic
              theme="glassmorphism"
              title="Active Sessions"
              value="3,429"
              size="sm"
              className="border-none shadow-none bg-transparent"
            />
            <Statistic
              theme="glassmorphism"
              title="Bounce Rate"
              value="32.4%"
              size="sm"
              className="border-none shadow-none bg-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}