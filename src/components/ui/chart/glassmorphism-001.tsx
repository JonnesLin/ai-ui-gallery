import { Chart } from './Chart';

const sampleData = [
  { label: 'Jan', value: 65 },
  { label: 'Feb', value: 59 },
  { label: 'Mar', value: 80 },
  { label: 'Apr', value: 81 },
  { label: 'May', value: 56 },
  { label: 'Jun', value: 55 },
];

const pieData = [
  { label: 'Desktop', value: 45 },
  { label: 'Mobile', value: 35 },
  { label: 'Tablet', value: 20 },
];

export default function GlassmorphismChart() {
  return (
    <div className="flex flex-col gap-8 p-8 min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      <h2 className="text-sm font-medium text-white/80 uppercase tracking-widest">Glassmorphism Charts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <Chart
          theme="glassmorphism"
          type="bar"
          data={sampleData}
          title="Monthly Sales"
          subtitle="Revenue in thousands"
          showGrid
          showLabels
        />

        <Chart
          theme="glassmorphism"
          type="line"
          data={sampleData}
          title="Growth Trend"
          subtitle="Year over year"
          showGrid
        />

        <Chart
          theme="glassmorphism"
          type="pie"
          data={pieData}
          title="Device Distribution"
          subtitle="Traffic by device"
        />

        <Chart
          theme="glassmorphism"
          type="donut"
          data={pieData}
          title="Market Share"
          subtitle="By platform"
        />

        <Chart
          theme="glassmorphism"
          type="horizontalBar"
          data={sampleData.slice(0, 4)}
          title="Quarterly Performance"
          subtitle="Units sold"
        />
      </div>
    </div>
  );
}
