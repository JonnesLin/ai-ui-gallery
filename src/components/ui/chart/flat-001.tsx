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

export default function FlatChart() {
  return (
    <div className="flex flex-col gap-8 p-8 bg-slate-100 min-h-screen">
      <h2 className="text-sm font-bold text-slate-600 uppercase tracking-widest">Flat Charts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <Chart
          theme="flat"
          type="bar"
          data={sampleData}
          title="Monthly Sales"
          subtitle="Revenue in thousands"
          showGrid
          showLabels
        />

        <Chart
          theme="flat"
          type="line"
          data={sampleData}
          title="Growth Trend"
          subtitle="Year over year"
          showGrid
        />

        <Chart
          theme="flat"
          type="pie"
          data={pieData}
          title="Device Distribution"
          subtitle="Traffic by device"
        />

        <Chart
          theme="flat"
          type="donut"
          data={pieData}
          title="Market Share"
          subtitle="By platform"
        />

        <Chart
          theme="flat"
          type="horizontalBar"
          data={sampleData.slice(0, 4)}
          title="Quarterly Performance"
          subtitle="Units sold"
        />
      </div>
    </div>
  );
}
