import type { ReactNode } from 'react';

const sampleData = [
  { label: 'Jan', value: 65 },
  { label: 'Feb', value: 59 },
  { label: 'Mar', value: 80 },
  { label: 'Apr', value: 81 },
  { label: 'May', value: 56 },
  { label: 'Jun', value: 55 },
];

const pieData = [
  { label: 'Desktop', value: 45, color: '#3B82F6' },
  { label: 'Mobile', value: 35, color: '#10B981' },
  { label: 'Tablet', value: 20, color: '#F59E0B' },
];

const colors3D = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];

export default function ThreeDChart() {
  const maxValue = Math.max(...sampleData.map(d => d.value));
  const total = pieData.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="flex flex-col gap-8 p-8 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      <h2 className="text-sm font-bold text-gray-700 uppercase tracking-widest">3D Charts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {/* 3D Bar Chart */}
        <div className="bg-white rounded-xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
          <h3 className="font-semibold text-gray-800 mb-1">Monthly Sales</h3>
          <p className="text-sm text-gray-500 mb-4">Revenue in thousands</p>
          <div className="h-48 flex items-end justify-between gap-3 pb-6 relative">
            {sampleData.map((point, i) => {
              const height = (point.value / maxValue) * 100;
              return (
                <div key={i} className="flex-1 flex flex-col items-center">
                  <div className="relative w-full" style={{ height: `${height}%`, minHeight: 20 }}>
                    {/* 3D effect layers */}
                    <div
                      className="absolute inset-0 rounded-t-lg"
                      style={{
                        background: `linear-gradient(135deg, ${colors3D[i % colors3D.length]}, ${colors3D[i % colors3D.length]}dd)`,
                        transform: 'translateZ(0)',
                        boxShadow: `
                          4px 4px 0 ${colors3D[i % colors3D.length]}88,
                          8px 8px 0 ${colors3D[i % colors3D.length]}44,
                          0 10px 20px rgba(0,0,0,0.2)
                        `,
                      }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 mt-2">{point.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3D Line Chart */}
        <div className="bg-white rounded-xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
          <h3 className="font-semibold text-gray-800 mb-1">Growth Trend</h3>
          <p className="text-sm text-gray-500 mb-4">Year over year</p>
          <div className="h-48 relative">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="line3d-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </linearGradient>
                <filter id="shadow3d">
                  <feDropShadow dx="2" dy="4" stdDeviation="2" floodOpacity="0.3" />
                </filter>
              </defs>
              {/* Area fill */}
              <path
                d={`M 0 ${100 - (sampleData[0].value / maxValue) * 80} ${sampleData.map((d, i) => `L ${(i / (sampleData.length - 1)) * 100} ${100 - (d.value / maxValue) * 80}`).join(' ')} L 100 100 L 0 100 Z`}
                fill="url(#line3d-gradient)"
              />
              {/* Line with 3D shadow */}
              <path
                d={`M ${sampleData.map((d, i) => `${(i / (sampleData.length - 1)) * 100} ${100 - (d.value / maxValue) * 80}`).join(' L ')}`}
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
                filter="url(#shadow3d)"
                vectorEffect="non-scaling-stroke"
              />
              {/* Points */}
              {sampleData.map((d, i) => (
                <circle
                  key={i}
                  cx={(i / (sampleData.length - 1)) * 100}
                  cy={100 - (d.value / maxValue) * 80}
                  r="4"
                  fill="#fff"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  filter="url(#shadow3d)"
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </svg>
          </div>
        </div>

        {/* 3D Pie Chart */}
        <div className="bg-white rounded-xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
          <h3 className="font-semibold text-gray-800 mb-1">Device Distribution</h3>
          <p className="text-sm text-gray-500 mb-4">Traffic by device</p>
          <div className="flex items-center gap-6">
            <div className="relative w-32 h-32">
              {/* 3D effect - bottom layers */}
              {[8, 6, 4, 2].map((offset) => (
                <svg
                  key={offset}
                  viewBox="0 0 100 100"
                  className="absolute inset-0 w-full h-full"
                  style={{ transform: `translateY(${offset}px)`, opacity: 0.1 + offset * 0.05 }}
                >
                  {pieData.reduce((acc, d, i) => {
                    const startAngle = acc.angle;
                    const angle = (d.value / total) * 360;
                    const endAngle = startAngle + angle;
                    const largeArc = angle > 180 ? 1 : 0;
                    const startRad = (startAngle - 90) * (Math.PI / 180);
                    const endRad = (endAngle - 90) * (Math.PI / 180);
                    const x1 = 50 + 40 * Math.cos(startRad);
                    const y1 = 50 + 40 * Math.sin(startRad);
                    const x2 = 50 + 40 * Math.cos(endRad);
                    const y2 = 50 + 40 * Math.sin(endRad);
                    acc.paths.push(
                      <path
                        key={i}
                        d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`}
                        fill={d.color}
                      />
                    );
                    acc.angle = endAngle;
                    return acc;
                  }, { angle: 0, paths: [] as ReactNode[] }).paths}
                </svg>
              ))}
              {/* Main pie */}
              <svg viewBox="0 0 100 100" className="relative w-full h-full -rotate-90" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }}>
                {pieData.reduce((acc, d, i) => {
                  const startAngle = acc.angle;
                  const angle = (d.value / total) * 360;
                  const endAngle = startAngle + angle;
                  const largeArc = angle > 180 ? 1 : 0;
                  const startRad = startAngle * (Math.PI / 180);
                  const endRad = endAngle * (Math.PI / 180);
                  const x1 = 50 + 40 * Math.cos(startRad);
                  const y1 = 50 + 40 * Math.sin(startRad);
                  const x2 = 50 + 40 * Math.cos(endRad);
                  const y2 = 50 + 40 * Math.sin(endRad);
                  acc.paths.push(
                    <path
                      key={i}
                      d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`}
                      fill={d.color}
                      className="hover:opacity-80 transition-opacity"
                    />
                  );
                  acc.angle = endAngle;
                  return acc;
                }, { angle: 0, paths: [] as ReactNode[] }).paths}
              </svg>
            </div>
            <div className="space-y-2">
              {pieData.map((d, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm shadow-md" style={{ backgroundColor: d.color }} />
                  <span className="text-sm text-gray-600">{d.label}</span>
                  <span className="text-sm text-gray-400">{((d.value / total) * 100).toFixed(0)}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3D Horizontal Bar */}
        <div className="bg-white rounded-xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
          <h3 className="font-semibold text-gray-800 mb-1">Quarterly Performance</h3>
          <p className="text-sm text-gray-500 mb-4">Units sold</p>
          <div className="space-y-4">
            {sampleData.slice(0, 4).map((point, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">{point.label}</span>
                  <span className="text-sm text-gray-500">{point.value}</span>
                </div>
                <div className="h-6 bg-gray-100 rounded-lg overflow-visible relative">
                  <div
                    className="h-full rounded-lg relative"
                    style={{
                      width: `${(point.value / maxValue) * 100}%`,
                      background: `linear-gradient(135deg, ${colors3D[i]}, ${colors3D[i]}cc)`,
                      boxShadow: `
                        0 4px 0 ${colors3D[i]}66,
                        0 8px 10px rgba(0,0,0,0.1)
                      `,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
