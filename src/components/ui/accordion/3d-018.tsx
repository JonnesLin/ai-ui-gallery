import { useState } from 'react';

export default function ThreeDAccordion() {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const items = [
    {
      title: 'Understanding 3D Effects',
      content: 'CSS 3D transforms allow elements to move and rotate in three-dimensional space. Combined with perspective and shadows, they create convincing depth illusions.',
      color: 'bg-blue-500',
    },
    {
      title: 'Layer Depth Techniques',
      content: 'Multiple offset box-shadows create the illusion of stacked layers. Each shadow layer should be progressively offset and slightly darker than the previous.',
      color: 'bg-purple-500',
    },
    {
      title: 'Perspective & Transform',
      content: 'The perspective property defines how far elements appear from the viewer. Combined with rotateX, rotateY, and translateZ, you can create dynamic 3D interfaces.',
      color: 'bg-pink-500',
    },
    {
      title: 'Performance Optimization',
      content: '3D transforms are GPU-accelerated and generally performant. However, avoid transforming many elements simultaneously and use will-change for smoother animations.',
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-4 sm:p-8 md:p-12">
      <div className="mx-auto max-w-2xl" style={{ perspective: '1000px' }}>
        <div className="mb-8 text-center">
          <h2
            className="text-3xl font-bold text-slate-800 sm:text-4xl"
            style={{
              textShadow: '2px 2px 0 #94a3b8, 4px 4px 0 #cbd5e1',
            }}
          >
            3D Accordion
          </h2>
          <p className="mt-2 text-slate-600">
            Depth and dimension in UI design
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-xl bg-white transition-all duration-300 ${
                openItems.includes(index) ? 'scale-[1.02]' : 'hover:scale-[1.01]'
              }`}
              style={{
                boxShadow: openItems.includes(index)
                  ? '0 10px 0 -5px #e2e8f0, 0 20px 0 -10px #cbd5e1, 0 30px 0 -15px #94a3b8, 0 40px 60px rgba(0,0,0,0.15)'
                  : '0 4px 0 -2px #e2e8f0, 0 8px 0 -4px #cbd5e1, 0 20px 40px rgba(0,0,0,0.1)',
                transform: openItems.includes(index)
                  ? 'translateY(-5px) rotateX(2deg)'
                  : 'translateY(0) rotateX(0deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex w-full items-center gap-4 p-4 text-left sm:p-5"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-lg text-white text-lg font-bold ${item.color}`}
                  style={{
                    boxShadow: '3px 3px 0 rgba(0,0,0,0.2)',
                    transform: 'translateZ(10px)',
                  }}
                >
                  {index + 1}
                </span>
                <span className="flex-1 text-base font-semibold text-slate-800 sm:text-lg">
                  {item.title}
                </span>
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-all duration-300`}
                  style={{
                    boxShadow: openItems.includes(index)
                      ? 'inset 2px 2px 4px rgba(0,0,0,0.1)'
                      : '2px 2px 0 rgba(0,0,0,0.1)',
                    transform: openItems.includes(index) ? 'rotateZ(180deg)' : 'rotateZ(0deg)',
                  }}
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openItems.includes(index) ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="border-t border-slate-100 px-4 py-4 sm:px-5">
                  <div
                    className="rounded-lg bg-slate-50 p-4"
                    style={{
                      boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.05)',
                    }}
                  >
                    <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-8 rounded-xl bg-white p-4 text-center"
          style={{
            boxShadow: '0 4px 0 -2px #e2e8f0, 0 8px 0 -4px #cbd5e1, 0 12px 0 -6px #94a3b8',
          }}
        >
          <div className="flex items-center justify-center gap-4">
            <span className="text-sm text-slate-600">
              {openItems.length} of {items.length} expanded
            </span>
            <button
              onClick={() => setOpenItems(openItems.length === items.length ? [] : items.map((_, i) => i))}
              className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-slate-700"
              style={{
                boxShadow: '3px 3px 0 rgba(0,0,0,0.2)',
              }}
            >
              {openItems.length === items.length ? 'Collapse All' : 'Expand All'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
