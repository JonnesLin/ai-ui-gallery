const sampleData = [
  { label: 'Jan', value: 65 },
  { label: 'Feb', value: 59 },
  { label: 'Mar', value: 80 },
  { label: 'Apr', value: 81 },
  { label: 'May', value: 56 },
  { label: 'Jun', value: 55 },
];

const pieData = [
  { label: 'Desktop', value: 45, color: '#FF6F61' },
  { label: 'Mobile', value: 35, color: '#6B5B95' },
  { label: 'Tablet', value: 20, color: '#88B04B' },
];

const retroColors = ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1', '#955251'];

export default function RetroChart() {
  const maxValue = Math.max(...sampleData.map(d => d.value));
  const total = pieData.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="flex flex-col gap-8 p-8 min-h-screen" style={{ backgroundColor: '#FDF5E6', backgroundImage: 'radial-gradient(circle, #e5d5c5 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      <h2 className="text-sm font-bold uppercase tracking-widest" style={{ color: '#8B4513', fontFamily: 'Georgia, serif' }}>
        ~ Retro Charts ~
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {/* Retro Bar Chart */}
        <div className="p-6 border-4" style={{ backgroundColor: '#FFFAF0', borderColor: '#8B4513', boxShadow: '6px 6px 0 #8B4513' }}>
          <h3 className="font-bold mb-1" style={{ color: '#8B4513', fontFamily: 'Georgia, serif' }}>Monthly Sales</h3>
          <p className="text-sm mb-4" style={{ color: '#A0522D', fontFamily: 'Georgia, serif' }}>Revenue in thousands</p>
          <div className="h-48 flex items-end justify-between gap-2 pb-6 border-b-2 border-l-2" style={{ borderColor: '#8B4513' }}>
            {sampleData.map((point, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full transition-all"
                  style={{
                    height: `${(point.value / maxValue) * 100}%`,
                    minHeight: 8,
                    backgroundColor: retroColors[i % retroColors.length],
                    border: '2px solid #8B4513',
                    backgroundImage: i % 2 === 0 ? 'repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(139,69,19,0.1) 3px, rgba(139,69,19,0.1) 6px)' : 'none',
                  }}
                />
                <span className="text-xs mt-2" style={{ color: '#8B4513', fontFamily: 'Georgia, serif' }}>{point.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Retro Line Chart */}
        <div className="p-6 border-4" style={{ backgroundColor: '#FFFAF0', borderColor: '#8B4513', boxShadow: '6px 6px 0 #8B4513' }}>
          <h3 className="font-bold mb-1" style={{ color: '#8B4513', fontFamily: 'Georgia, serif' }}>Growth Trend</h3>
          <p className="text-sm mb-4" style={{ color: '#A0522D', fontFamily: 'Georgia, serif' }}>Year over year</p>
          <div className="h-48 relative border-b-2 border-l-2" style={{ borderColor: '#8B4513' }}>
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="retro-dots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#8B4513" opacity="0.2" />
                </pattern>
              </defs>
              {/* Dotted area fill */}
              <path
                d={`M 0 ${100 - (sampleData[0].value / maxValue) * 80} ${sampleData.map((d, i) => `L ${(i / (sampleData.length - 1)) * 100} ${100 - (d.value / maxValue) * 80}`).join(' ')} L 100 100 L 0 100 Z`}
                fill="url(#retro-dots)"
              />
              {/* Line */}
              <path
                d={`M ${sampleData.map((d, i) => `${(i / (sampleData.length - 1)) * 100} ${100 - (d.value / maxValue) * 80}`).join(' L ')}`}
                fill="none"
                stroke="#8B4513"
                strokeWidth="3"
                strokeDasharray="8,4"
                vectorEffect="non-scaling-stroke"
              />
              {/* Points */}
              {sampleData.map((d, i) => (
                <g key={i}>
                  <circle
                    cx={(i / (sampleData.length - 1)) * 100}
                    cy={100 - (d.value / maxValue) * 80}
                    r="5"
                    fill="#FFFAF0"
                    stroke="#8B4513"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  />
                  <circle
                    cx={(i / (sampleData.length - 1)) * 100}
                    cy={100 - (d.value / maxValue) * 80}
                    r="2"
                    fill={retroColors[i % retroColors.length]}
                    vectorEffect="non-scaling-stroke"
                  />
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* Retro Pie Chart */}
        <div className="p-6 border-4" style={{ backgroundColor: '#FFFAF0', borderColor: '#8B4513', boxShadow: '6px 6px 0 #8B4513' }}>
          <h3 className="font-bold mb-1" style={{ color: '#8B4513', fontFamily: 'Georgia, serif' }}>Device Distribution</h3>
          <p className="text-sm mb-4" style={{ color: '#A0522D', fontFamily: 'Georgia, serif' }}>Traffic by device</p>
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
                      stroke="#8B4513"
                      strokeWidth="2"
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
                    className="w-4 h-4 border-2"
                    style={{ backgroundColor: d.color, borderColor: '#8B4513' }}
                  />
                  <span className="text-sm" style={{ color: '#8B4513', fontFamily: 'Georgia, serif' }}>{d.label}</span>
                  <span className="text-sm font-bold" style={{ color: '#8B4513' }}>{d.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Retro Horizontal Bar */}
        <div className="p-6 border-4" style={{ backgroundColor: '#FFFAF0', borderColor: '#8B4513', boxShadow: '6px 6px 0 #8B4513' }}>
          <h3 className="font-bold mb-1" style={{ color: '#8B4513', fontFamily: 'Georgia, serif' }}>Quarterly Performance</h3>
          <p className="text-sm mb-4" style={{ color: '#A0522D', fontFamily: 'Georgia, serif' }}>Units sold</p>
          <div className="space-y-4">
            {sampleData.slice(0, 4).map((point, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm" style={{ color: '#8B4513', fontFamily: 'Georgia, serif' }}>{point.label}</span>
                  <span className="text-sm font-bold" style={{ color: '#8B4513' }}>{point.value}</span>
                </div>
                <div className="h-5 border-2" style={{ borderColor: '#8B4513', backgroundColor: '#FFF8DC' }}>
                  <div
                    className="h-full"
                    style={{
                      width: `${(point.value / maxValue) * 100}%`,
                      backgroundColor: retroColors[i],
                      backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 3px, rgba(255,255,255,0.3) 3px, rgba(255,255,255,0.3) 6px)',
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
