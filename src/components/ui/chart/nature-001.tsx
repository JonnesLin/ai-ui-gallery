const sampleData = [
  { label: 'Jan', value: 65 },
  { label: 'Feb', value: 59 },
  { label: 'Mar', value: 80 },
  { label: 'Apr', value: 81 },
  { label: 'May', value: 56 },
  { label: 'Jun', value: 55 },
];

const pieData = [
  { label: 'Forest', value: 45, color: '#22C55E' },
  { label: 'Ocean', value: 35, color: '#0EA5E9' },
  { label: 'Desert', value: 20, color: '#F59E0B' },
];

const natureColors = ['#22C55E', '#15803D', '#84CC16', '#0EA5E9', '#F59E0B', '#92400E'];

export default function NatureChart() {
  const maxValue = Math.max(...sampleData.map(d => d.value));
  const total = pieData.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="flex flex-col gap-8 p-8 min-h-screen bg-gradient-to-b from-emerald-50 to-green-100">
      <h2 className="text-sm font-medium text-emerald-700 uppercase tracking-widest flex items-center gap-2">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        Nature-Inspired Charts
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {/* Nature Bar Chart */}
        <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg border border-emerald-200">
          <h3 className="font-semibold text-emerald-800 mb-1">Growth Patterns</h3>
          <p className="text-sm text-emerald-600 mb-4">Organic development metrics</p>
          <div className="h-48 flex items-end justify-between gap-2 pb-6 relative">
            {/* Leaf pattern background */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <pattern id="leaves" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M10 5 Q15 10 10 15 Q5 10 10 5" fill="#22C55E" />
                </pattern>
                <rect width="100" height="100" fill="url(#leaves)" />
              </svg>
            </div>
            {sampleData.map((point, i) => (
              <div key={i} className="flex-1 flex flex-col items-center relative z-10">
                <div
                  className="w-full rounded-t-full transition-all duration-500 hover:scale-105"
                  style={{
                    height: `${(point.value / maxValue) * 100}%`,
                    minHeight: 16,
                    background: `linear-gradient(to top, ${natureColors[i % natureColors.length]}, ${natureColors[i % natureColors.length]}99)`,
                    boxShadow: `0 4px 12px ${natureColors[i % natureColors.length]}40`,
                  }}
                />
                <span className="text-xs text-emerald-600 mt-2">{point.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Nature Line Chart */}
        <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg border border-emerald-200">
          <h3 className="font-semibold text-emerald-800 mb-1">Seasonal Trends</h3>
          <p className="text-sm text-emerald-600 mb-4">Natural cycle analysis</p>
          <div className="h-48 relative">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="nature-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22C55E" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Area fill */}
              <path
                d={`M 0 ${100 - (sampleData[0].value / maxValue) * 80} ${sampleData.map((d, i) => `L ${(i / (sampleData.length - 1)) * 100} ${100 - (d.value / maxValue) * 80}`).join(' ')} L 100 100 L 0 100 Z`}
                fill="url(#nature-gradient)"
              />
              {/* Curved line */}
              <path
                d={`M ${sampleData.map((d, i) => `${(i / (sampleData.length - 1)) * 100} ${100 - (d.value / maxValue) * 80}`).join(' L ')}`}
                fill="none"
                stroke="#22C55E"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
              {/* Leaf-shaped points */}
              {sampleData.map((d, i) => (
                <g key={i} transform={`translate(${(i / (sampleData.length - 1)) * 100}, ${100 - (d.value / maxValue) * 80})`}>
                  <circle r="4" fill="#fff" stroke="#22C55E" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* Nature Pie Chart */}
        <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg border border-emerald-200">
          <h3 className="font-semibold text-emerald-800 mb-1">Ecosystem Balance</h3>
          <p className="text-sm text-emerald-600 mb-4">Resource distribution</p>
          <div className="flex items-center gap-6">
            <div className="relative w-32 h-32">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
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
                      style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                    />
                  );
                  acc.angle = endAngle;
                  return acc;
                }, { angle: 0, paths: [] as React.ReactNode[] }).paths}
              </svg>
              {/* Center decoration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white shadow-inner flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {pieData.map((d, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: d.color }} />
                  <div>
                    <span className="text-sm font-medium text-emerald-800">{d.label}</span>
                    <span className="text-xs text-emerald-500 ml-2">{d.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Nature Horizontal Bar */}
        <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg border border-emerald-200">
          <h3 className="font-semibold text-emerald-800 mb-1">Resource Levels</h3>
          <p className="text-sm text-emerald-600 mb-4">Environmental metrics</p>
          <div className="space-y-4">
            {sampleData.slice(0, 4).map((point, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-emerald-700">{point.label}</span>
                  <span className="text-sm text-emerald-500">{point.value}</span>
                </div>
                <div className="h-3 bg-emerald-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${(point.value / maxValue) * 100}%`,
                      background: `linear-gradient(to right, ${natureColors[i]}, ${natureColors[i]}cc)`,
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
