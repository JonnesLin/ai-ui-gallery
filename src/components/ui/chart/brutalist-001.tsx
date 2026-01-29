const sampleData = [
  { label: 'JAN', value: 65 },
  { label: 'FEB', value: 59 },
  { label: 'MAR', value: 80 },
  { label: 'APR', value: 81 },
  { label: 'MAY', value: 56 },
  { label: 'JUN', value: 55 },
];

const pieData = [
  { label: 'DESKTOP', value: 45 },
  { label: 'MOBILE', value: 35 },
  { label: 'TABLET', value: 20 },
];

export default function BrutalistChart() {
  const maxValue = Math.max(...sampleData.map(d => d.value));
  const total = pieData.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="flex flex-col gap-8 p-8 bg-white min-h-screen">
      <h2 className="text-sm font-black text-black uppercase tracking-widest">Brutalist Charts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        {/* Brutalist Bar Chart */}
        <div className="border-4 border-black p-6 shadow-[8px_8px_0_0_#000]">
          <h3 className="font-black text-black uppercase mb-1">Monthly Sales</h3>
          <p className="text-sm font-bold text-black mb-4">REVENUE IN THOUSANDS</p>
          <div className="h-48 flex items-end justify-between gap-2 pb-6 border-b-4 border-l-4 border-black relative">
            {sampleData.map((point, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-black transition-all hover:bg-yellow-400"
                  style={{ height: `${(point.value / maxValue) * 100}%`, minHeight: 8 }}
                />
                <span className="text-xs font-black text-black mt-2">{point.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Brutalist Line Chart */}
        <div className="border-4 border-black p-6 shadow-[8px_8px_0_0_#000]">
          <h3 className="font-black text-black uppercase mb-1">Growth Trend</h3>
          <p className="text-sm font-bold text-black mb-4">YEAR OVER YEAR</p>
          <div className="h-48 relative border-b-4 border-l-4 border-black">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Grid lines */}
              {[20, 40, 60, 80].map((y) => (
                <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#000" strokeWidth="1" strokeDasharray="4,4" vectorEffect="non-scaling-stroke" />
              ))}
              {/* Line */}
              <path
                d={`M ${sampleData.map((d, i) => `${(i / (sampleData.length - 1)) * 100} ${100 - (d.value / maxValue) * 80}`).join(' L ')}`}
                fill="none"
                stroke="#000"
                strokeWidth="4"
                vectorEffect="non-scaling-stroke"
              />
              {/* Points */}
              {sampleData.map((d, i) => (
                <rect
                  key={i}
                  x={(i / (sampleData.length - 1)) * 100 - 3}
                  y={100 - (d.value / maxValue) * 80 - 3}
                  width="6"
                  height="6"
                  fill="#fff"
                  stroke="#000"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </svg>
          </div>
        </div>

        {/* Brutalist Pie Chart - as stacked bars */}
        <div className="border-4 border-black p-6 shadow-[8px_8px_0_0_#000]">
          <h3 className="font-black text-black uppercase mb-1">Device Distribution</h3>
          <p className="text-sm font-bold text-black mb-4">TRAFFIC BY DEVICE</p>
          <div className="space-y-4">
            {pieData.map((d, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-xs font-black text-black w-20">{d.label}</span>
                <div className="flex-1 h-8 border-4 border-black bg-white">
                  <div
                    className="h-full transition-all"
                    style={{
                      width: `${(d.value / total) * 100}%`,
                      backgroundColor: i === 0 ? '#000' : i === 1 ? '#FACC15' : '#EF4444',
                    }}
                  />
                </div>
                <span className="text-sm font-black text-black w-12">{d.value}%</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t-4 border-black">
            <div className="flex h-10 border-4 border-black overflow-hidden">
              {pieData.map((d, i) => (
                <div
                  key={i}
                  className="h-full"
                  style={{
                    width: `${(d.value / total) * 100}%`,
                    backgroundColor: i === 0 ? '#000' : i === 1 ? '#FACC15' : '#EF4444',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Brutalist Horizontal Bar */}
        <div className="border-4 border-black p-6 shadow-[8px_8px_0_0_#000]">
          <h3 className="font-black text-black uppercase mb-1">Quarterly Performance</h3>
          <p className="text-sm font-bold text-black mb-4">UNITS SOLD</p>
          <div className="space-y-3">
            {sampleData.slice(0, 4).map((point, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <span className="text-xs font-black text-black">{point.label}</span>
                  <span className="text-xs font-black text-black">{point.value}</span>
                </div>
                <div className="h-6 border-4 border-black bg-white">
                  <div
                    className="h-full bg-black hover:bg-red-500 transition-colors"
                    style={{ width: `${(point.value / maxValue) * 100}%` }}
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
