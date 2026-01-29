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

export default function SketchChart() {
  const maxValue = Math.max(...sampleData.map(d => d.value));
  const total = pieData.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="flex flex-col gap-8 p-8 min-h-screen" style={{ backgroundColor: '#FFFEF5', backgroundImage: 'linear-gradient(#e8e8e8 1px, transparent 1px), linear-gradient(90deg, #e8e8e8 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      <h2 className="text-sm uppercase tracking-widest" style={{ color: '#444', fontFamily: '"Comic Sans MS", cursive' }}>
        Sketch Charts ✏️
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {/* Sketch Bar Chart */}
        <div className="p-6 bg-white" style={{ border: '3px solid #333', borderRadius: '8px 4px 12px 2px', boxShadow: '4px 4px 0 #ddd', transform: 'rotate(-0.5deg)' }}>
          <h3 className="font-bold mb-1" style={{ color: '#333', fontFamily: '"Comic Sans MS", cursive' }}>Monthly Sales</h3>
          <p className="text-sm mb-4" style={{ color: '#666', fontFamily: '"Comic Sans MS", cursive' }}>Revenue in thousands</p>
          <div className="h-48 flex items-end justify-between gap-2 pb-6 relative">
            {/* Hand-drawn axes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
              <path d="M 20 0 Q 18 100 22 200" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
              <path d="M 0 180 Q 150 182 300 178" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
            {sampleData.map((point, i) => (
              <div key={i} className="flex-1 flex flex-col items-center relative z-10">
                <div
                  className="w-full transition-all"
                  style={{
                    height: `${(point.value / maxValue) * 100}%`,
                    minHeight: 8,
                    backgroundColor: '#fff',
                    border: '2px solid #333',
                    borderRadius: `${2 + Math.random() * 4}px ${4 + Math.random() * 4}px ${Math.random() * 4}px ${2 + Math.random() * 4}px`,
                    backgroundImage: `repeating-linear-gradient(${45 + i * 15}deg, transparent, transparent 4px, rgba(0,0,0,0.1) 4px, rgba(0,0,0,0.1) 8px)`,
                    transform: `rotate(${-1 + Math.random() * 2}deg)`,
                  }}
                />
                <span className="text-xs mt-2" style={{ color: '#333', fontFamily: '"Comic Sans MS", cursive' }}>{point.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sketch Line Chart */}
        <div className="p-6 bg-white" style={{ border: '3px solid #333', borderRadius: '4px 10px 6px 8px', boxShadow: '4px 4px 0 #ddd', transform: 'rotate(0.5deg)' }}>
          <h3 className="font-bold mb-1" style={{ color: '#333', fontFamily: '"Comic Sans MS", cursive' }}>Growth Trend</h3>
          <p className="text-sm mb-4" style={{ color: '#666', fontFamily: '"Comic Sans MS", cursive' }}>Year over year</p>
          <div className="h-48 relative">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Wobbly grid */}
              {[20, 40, 60, 80].map((y) => (
                <path
                  key={y}
                  d={`M 0 ${y + Math.random() * 2} Q 25 ${y - 1 + Math.random() * 2} 50 ${y + Math.random() * 2} T 100 ${y + Math.random() * 2}`}
                  stroke="#ddd"
                  strokeWidth="1"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                />
              ))}
              {/* Sketchy line */}
              <path
                d={`M ${sampleData.map((d, i) => {
                  const x = (i / (sampleData.length - 1)) * 100;
                  const y = 100 - (d.value / maxValue) * 80;
                  return `${x + (Math.random() - 0.5) * 2} ${y + (Math.random() - 0.5) * 2}`;
                }).join(' L ')}`}
                fill="none"
                stroke="#333"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
              {/* Hand-drawn circles */}
              {sampleData.map((d, i) => (
                <g key={i}>
                  <circle
                    cx={(i / (sampleData.length - 1)) * 100}
                    cy={100 - (d.value / maxValue) * 80}
                    r="5"
                    fill="#fff"
                    stroke="#333"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  />
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* Sketch Pie Chart */}
        <div className="p-6 bg-white" style={{ border: '3px solid #333', borderRadius: '6px 2px 10px 4px', boxShadow: '4px 4px 0 #ddd', transform: 'rotate(-0.3deg)' }}>
          <h3 className="font-bold mb-1" style={{ color: '#333', fontFamily: '"Comic Sans MS", cursive' }}>Device Distribution</h3>
          <p className="text-sm mb-4" style={{ color: '#666', fontFamily: '"Comic Sans MS", cursive' }}>Traffic by device</p>
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
                  const x1 = 50 + 38 * Math.cos(startRad);
                  const y1 = 50 + 38 * Math.sin(startRad);
                  const x2 = 50 + 38 * Math.cos(endRad);
                  const y2 = 50 + 38 * Math.sin(endRad);
                  const patterns = ['repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(0,0,0,0.15) 3px, rgba(0,0,0,0.15) 6px)', 'repeating-linear-gradient(-45deg, transparent, transparent 3px, rgba(0,0,0,0.15) 3px, rgba(0,0,0,0.15) 6px)', 'repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.15) 3px, rgba(0,0,0,0.15) 6px)'];
                  acc.paths.push(
                    <path
                      key={i}
                      d={`M 50 50 L ${x1} ${y1} A 38 38 0 ${largeArc} 1 ${x2} ${y2} Z`}
                      fill="#fff"
                      stroke="#333"
                      strokeWidth="2"
                    />
                  );
                  acc.angle = endAngle;
                  return acc;
                }, { angle: 0, paths: [] as React.ReactNode[] }).paths}
              </svg>
            </div>
            <div className="space-y-3">
              {pieData.map((d, i) => {
                const patterns = ['////', '\\\\\\\\', '||||'];
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5"
                      style={{
                        backgroundColor: '#fff',
                        border: '2px solid #333',
                        borderRadius: '2px',
                        backgroundImage: `repeating-linear-gradient(${i * 45}deg, transparent, transparent 2px, #333 2px, #333 3px)`,
                      }}
                    />
                    <span className="text-sm" style={{ color: '#333', fontFamily: '"Comic Sans MS", cursive' }}>{d.label}</span>
                    <span className="text-sm font-bold" style={{ color: '#333' }}>{d.value}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sketch Horizontal Bar */}
        <div className="p-6 bg-white" style={{ border: '3px solid #333', borderRadius: '10px 4px 8px 6px', boxShadow: '4px 4px 0 #ddd', transform: 'rotate(0.3deg)' }}>
          <h3 className="font-bold mb-1" style={{ color: '#333', fontFamily: '"Comic Sans MS", cursive' }}>Quarterly Performance</h3>
          <p className="text-sm mb-4" style={{ color: '#666', fontFamily: '"Comic Sans MS", cursive' }}>Units sold</p>
          <div className="space-y-4">
            {sampleData.slice(0, 4).map((point, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm" style={{ color: '#333', fontFamily: '"Comic Sans MS", cursive' }}>{point.label}</span>
                  <span className="text-sm font-bold" style={{ color: '#333' }}>{point.value}</span>
                </div>
                <div
                  className="h-5"
                  style={{
                    border: '2px solid #333',
                    borderRadius: `${2 + Math.random() * 3}px`,
                    backgroundColor: '#f9f9f9',
                  }}
                >
                  <div
                    className="h-full"
                    style={{
                      width: `${(point.value / maxValue) * 100}%`,
                      backgroundColor: '#fff',
                      backgroundImage: `repeating-linear-gradient(${45 + i * 30}deg, transparent, transparent 3px, rgba(0,0,0,0.15) 3px, rgba(0,0,0,0.15) 6px)`,
                      borderRight: '2px solid #333',
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
