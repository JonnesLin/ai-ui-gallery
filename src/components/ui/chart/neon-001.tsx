const sampleData = [
  { label: 'Jan', value: 65 },
  { label: 'Feb', value: 59 },
  { label: 'Mar', value: 80 },
  { label: 'Apr', value: 81 },
  { label: 'May', value: 56 },
  { label: 'Jun', value: 55 },
];

const pieData = [
  { label: 'Desktop', value: 45, color: '#FF00FF' },
  { label: 'Mobile', value: 35, color: '#00FFFF' },
  { label: 'Tablet', value: 20, color: '#FFFF00' },
];

const neonColors = ['#FF00FF', '#00FFFF', '#FFFF00', '#FF0080', '#00FF80', '#8000FF'];

export default function NeonChart() {
  const maxValue = Math.max(...sampleData.map(d => d.value));
  const total = pieData.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="flex flex-col gap-8 p-8 min-h-screen bg-black">
      <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest" style={{ textShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF' }}>
        Neon Charts
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {/* Neon Bar Chart */}
        <div className="bg-gray-950 rounded-xl p-6 border border-pink-500/30" style={{ boxShadow: '0 0 20px rgba(255,0,255,0.2), inset 0 0 20px rgba(255,0,255,0.05)' }}>
          <h3 className="font-bold text-pink-400 mb-1" style={{ textShadow: '0 0 8px #FF00FF' }}>Monthly Sales</h3>
          <p className="text-sm text-pink-300/60 mb-4">Revenue in thousands</p>
          <div className="h-48 flex items-end justify-between gap-2 pb-6 relative">
            {/* Glow grid */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="absolute w-full h-px bg-pink-500" style={{ top: `${i * 25}%`, boxShadow: '0 0 5px #FF00FF' }} />
              ))}
            </div>
            {sampleData.map((point, i) => (
              <div key={i} className="flex-1 flex flex-col items-center relative z-10">
                <div
                  className="w-full rounded-t transition-all duration-300 hover:scale-105"
                  style={{
                    height: `${(point.value / maxValue) * 100}%`,
                    minHeight: 8,
                    backgroundColor: neonColors[i % neonColors.length],
                    boxShadow: `0 0 10px ${neonColors[i % neonColors.length]}, 0 0 20px ${neonColors[i % neonColors.length]}, 0 0 30px ${neonColors[i % neonColors.length]}`,
                  }}
                />
                <span className="text-xs text-pink-300/60 mt-2">{point.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Neon Line Chart */}
        <div className="bg-gray-950 rounded-xl p-6 border border-cyan-500/30" style={{ boxShadow: '0 0 20px rgba(0,255,255,0.2), inset 0 0 20px rgba(0,255,255,0.05)' }}>
          <h3 className="font-bold text-cyan-400 mb-1" style={{ textShadow: '0 0 8px #00FFFF' }}>Growth Trend</h3>
          <p className="text-sm text-cyan-300/60 mb-4">Year over year</p>
          <div className="h-48 relative">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <filter id="neon-glow">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="neon-line-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#00FFFF" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Glow area */}
              <path
                d={`M 0 ${100 - (sampleData[0].value / maxValue) * 80} ${sampleData.map((d, i) => `L ${(i / (sampleData.length - 1)) * 100} ${100 - (d.value / maxValue) * 80}`).join(' ')} L 100 100 L 0 100 Z`}
                fill="url(#neon-line-gradient)"
              />
              {/* Neon line */}
              <path
                d={`M ${sampleData.map((d, i) => `${(i / (sampleData.length - 1)) * 100} ${100 - (d.value / maxValue) * 80}`).join(' L ')}`}
                fill="none"
                stroke="#00FFFF"
                strokeWidth="2"
                filter="url(#neon-glow)"
                vectorEffect="non-scaling-stroke"
              />
              {/* Glowing points */}
              {sampleData.map((d, i) => (
                <circle
                  key={i}
                  cx={(i / (sampleData.length - 1)) * 100}
                  cy={100 - (d.value / maxValue) * 80}
                  r="4"
                  fill="#000"
                  stroke="#00FFFF"
                  strokeWidth="2"
                  filter="url(#neon-glow)"
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </svg>
          </div>
        </div>

        {/* Neon Pie Chart */}
        <div className="bg-gray-950 rounded-xl p-6 border border-yellow-500/30" style={{ boxShadow: '0 0 20px rgba(255,255,0,0.2), inset 0 0 20px rgba(255,255,0,0.05)' }}>
          <h3 className="font-bold text-yellow-400 mb-1" style={{ textShadow: '0 0 8px #FFFF00' }}>Device Distribution</h3>
          <p className="text-sm text-yellow-300/60 mb-4">Traffic by device</p>
          <div className="flex items-center gap-6">
            <div className="relative w-32 h-32">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <defs>
                  <filter id="neon-pie-glow">
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {pieData.reduce((acc, d, i) => {
                  const startAngle = acc.angle;
                  const angle = (d.value / total) * 360;
                  const endAngle = startAngle + angle;
                  const largeArc = angle > 180 ? 1 : 0;
                  const startRad = startAngle * (Math.PI / 180);
                  const endRad = endAngle * (Math.PI / 180);
                  const x1 = 50 + 35 * Math.cos(startRad);
                  const y1 = 50 + 35 * Math.sin(startRad);
                  const x2 = 50 + 35 * Math.cos(endRad);
                  const y2 = 50 + 35 * Math.sin(endRad);
                  acc.paths.push(
                    <path
                      key={i}
                      d={`M 50 50 L ${x1} ${y1} A 35 35 0 ${largeArc} 1 ${x2} ${y2} Z`}
                      fill="transparent"
                      stroke={d.color}
                      strokeWidth="12"
                      filter="url(#neon-pie-glow)"
                    />
                  );
                  acc.angle = endAngle;
                  return acc;
                }, { angle: 0, paths: [] as React.ReactNode[] }).paths}
              </svg>
            </div>
            <div className="space-y-3">
              {pieData.map((d, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded"
                    style={{
                      backgroundColor: d.color,
                      boxShadow: `0 0 8px ${d.color}`,
                    }}
                  />
                  <span className="text-sm text-gray-300">{d.label}</span>
                  <span className="text-sm" style={{ color: d.color, textShadow: `0 0 5px ${d.color}` }}>
                    {d.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Neon Horizontal Bar */}
        <div className="bg-gray-950 rounded-xl p-6 border border-purple-500/30" style={{ boxShadow: '0 0 20px rgba(128,0,255,0.2), inset 0 0 20px rgba(128,0,255,0.05)' }}>
          <h3 className="font-bold text-purple-400 mb-1" style={{ textShadow: '0 0 8px #8000FF' }}>Quarterly Performance</h3>
          <p className="text-sm text-purple-300/60 mb-4">Units sold</p>
          <div className="space-y-4">
            {sampleData.slice(0, 4).map((point, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-400">{point.label}</span>
                  <span className="text-sm" style={{ color: neonColors[i], textShadow: `0 0 5px ${neonColors[i]}` }}>{point.value}</span>
                </div>
                <div className="h-3 bg-gray-900 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${(point.value / maxValue) * 100}%`,
                      backgroundColor: neonColors[i],
                      boxShadow: `0 0 10px ${neonColors[i]}, 0 0 20px ${neonColors[i]}`,
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
