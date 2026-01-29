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

export default function CyberpunkChart() {
  return (
    <div className="flex flex-col gap-8 p-8 bg-black min-h-screen">
      <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest">Cyberpunk Charts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <Chart
          theme="cyberpunk"
          type="bar"
          data={sampleData}
          title="Monthly Sales"
          subtitle="Revenue in thousands"
          showGrid
          showLabels
        />

        <Chart
          theme="cyberpunk"
          type="line"
          data={sampleData}
          title="Growth Trend"
          subtitle="Year over year"
          showGrid
        />

        <Chart
          theme="cyberpunk"
          type="pie"
          data={pieData}
          title="Device Distribution"
          subtitle="Traffic by device"
        />

        <Chart
          theme="cyberpunk"
          type="donut"
          data={pieData}
          title="Market Share"
          subtitle="By platform"
        />

        <Chart
          theme="cyberpunk"
          type="horizontalBar"
          data={sampleData.slice(0, 4)}
          title="Quarterly Performance"
          subtitle="Units sold"
        />
      </div>
    </div>
  );
}
