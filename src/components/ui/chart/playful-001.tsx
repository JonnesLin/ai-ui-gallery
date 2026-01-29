const sampleData = [
  { label: 'Jan', value: 65 },
  { label: 'Feb', value: 59 },
  { label: 'Mar', value: 80 },
  { label: 'Apr', value: 81 },
  { label: 'May', value: 56 },
  { label: 'Jun', value: 55 },
];

const pieData = [
  { label: 'Desktop', value: 45, color: '#FF6B6B' },
  { label: 'Mobile', value: 35, color: '#4ECDC4' },
  { label: 'Tablet', value: 20, color: '#FFE66D' },
];

const playfulColors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181', '#AA96DA'];

export default function PlayfulChart() {
  const maxValue = Math.max(...sampleData.map(d => d.value));
  const total = pieData.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="flex flex-col gap-8 p-8 min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-cyan-100">
      <h2 className="text-sm font-bold text-purple-600 uppercase tracking-widest flex items-center gap-2">
        <span className="inline-block animate-bounce">✨</span>
        Playful Charts
        <span className="inline-block animate-bounce delay-100">🎨</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {/* Playful Bar Chart */}
        <div className="bg-white rounded-3xl p-6 shadow-xl border-4 border-purple-200">
          <h3 className="font-bold text-purple-600 mb-1">Monthly Sales 📊</h3>
          <p className="text-sm text-purple-400 mb-4">Revenue in thousands</p>
          <div className="h-48 flex items-end justify-between gap-3 pb-6 relative">
            {sampleData.map((point, i) => (
              <div key={i} className="flex-1 flex flex-col items-center group">
                <div
                  className="w-full rounded-t-2xl transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2"
                  style={{
                    height: `${(point.value / maxValue) * 100}%`,
                    minHeight: 20,
                    backgroundColor: playfulColors[i % playfulColors.length],
                    borderRadius: '9999px 9999px 8px 8px',
                    boxShadow: `0 4px 0 ${playfulColors[i % playfulColors.length]}88`,
                  }}
                />
                <span className="text-xs font-bold text-purple-500 mt-2 group-hover:scale-125 transition-transform">{point.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Playful Line Chart */}
        <div className="bg-white rounded-3xl p-6 shadow-xl border-4 border-cyan-200">
          <h3 className="font-bold text-cyan-600 mb-1">Growth Trend 📈</h3>
          <p className="text-sm text-cyan-400 mb-4">Year over year</p>
          <div className="h-48 relative">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="playful-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4ECDC4" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#4ECDC4" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Fun wavy area */}
              <path
                d={`M 0 ${100 - (sampleData[0].value / maxValue) * 80} ${sampleData.map((d, i) => `L ${(i / (sampleData.length - 1)) * 100} ${100 - (d.value / maxValue) * 80}`).join(' ')} L 100 100 L 0 100 Z`}
                fill="url(#playful-gradient)"
              />
              {/* Bouncy line */}
              <path
                d={`M ${sampleData.map((d, i) => `${(i / (sampleData.length - 1)) * 100} ${100 - (d.value / maxValue) * 80}`).join(' L ')}`}
                fill="none"
                stroke="#4ECDC4"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
              {/* Fun star points */}
              {sampleData.map((d, i) => (
                <g key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
                  <circle
                    cx={(i / (sampleData.length - 1)) * 100}
                    cy={100 - (d.value / maxValue) * 80}
                    r="6"
                    fill={playfulColors[i % playfulColors.length]}
                    stroke="#fff"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  />
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* Playful Pie Chart */}
        <div className="bg-white rounded-3xl p-6 shadow-xl border-4 border-pink-200">
          <h3 className="font-bold text-pink-600 mb-1">Device Distribution 🍕</h3>
          <p className="text-sm text-pink-400 mb-4">Traffic by device</p>
          <div className="flex items-center gap-6">
            <div className="relative w-36 h-36">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 hover:scale-105 transition-transform">
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
                      stroke="#fff"
                      strokeWidth="3"
                      className="hover:scale-105 hover:opacity-90 transition-all origin-center"
                    />
                  );
                  acc.angle = endAngle;
                  return acc;
                }, { angle: 0, paths: [] as React.ReactNode[] }).paths}
              </svg>
              {/* Center emoji */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
            </div>
            <div className="space-y-3">
              {pieData.map((d, i) => (
                <div key={i} className="flex items-center gap-3 group cursor-pointer">
                  <div
                    className="w-5 h-5 rounded-lg transition-transform group-hover:scale-125 group-hover:rotate-12"
                    style={{ backgroundColor: d.color }}
                  />
                  <span className="text-sm font-bold text-gray-700 group-hover:text-purple-600 transition-colors">{d.label}</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: d.color, color: '#fff' }}>
                    {d.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Playful Horizontal Bar */}
        <div className="bg-white rounded-3xl p-6 shadow-xl border-4 border-yellow-200">
          <h3 className="font-bold text-yellow-600 mb-1">Quarterly Performance 🏆</h3>
          <p className="text-sm text-yellow-500 mb-4">Units sold</p>
          <div className="space-y-4">
            {sampleData.slice(0, 4).map((point, i) => (
              <div key={i} className="group">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-bold text-gray-600 group-hover:text-purple-600 transition-colors">{point.label}</span>
                  <span className="text-sm font-bold" style={{ color: playfulColors[i] }}>{point.value}</span>
                </div>
                <div className="h-5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500 group-hover:scale-x-105 origin-left"
                    style={{
                      width: `${(point.value / maxValue) * 100}%`,
                      backgroundColor: playfulColors[i],
                      boxShadow: `0 2px 0 ${playfulColors[i]}88`,
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
