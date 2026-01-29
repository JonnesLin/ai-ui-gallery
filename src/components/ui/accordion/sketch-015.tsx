import { useState } from 'react';

export default function SketchAccordion() {
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
      title: 'What is sketch style?',
      content: 'Sketch style mimics hand-drawn aesthetics with wobbly lines, rough textures, and imperfect shapes. It adds warmth and personality to digital interfaces.',
    },
    {
      title: 'Creating authentic lines',
      content: 'Use SVG filters or hand-drawn assets. Slight variations in stroke width and small imperfections make elements feel genuinely sketched rather than computer-generated.',
    },
    {
      title: 'Typography choices',
      content: 'Handwritten fonts complement sketch aesthetics perfectly. Look for fonts with natural variations in letterforms and slight baseline inconsistencies.',
    },
    {
      title: 'Best applications',
      content: 'Great for creative portfolios, children apps, educational content, and brands wanting a friendly, approachable feel. Adds human touch to digital experiences.',
    },
  ];

  return (
    <div
      className="min-h-screen p-4 sm:p-8 md:p-12"
      style={{
        backgroundColor: '#faf8f5',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23e5e0d8\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
      }}
    >
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h2
            className="text-3xl font-bold text-gray-800 sm:text-4xl"
            style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
          >
            ~ FAQ ~
          </h2>
          <p
            className="mt-2 text-gray-600"
            style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
          >
            * hand-drawn answers *
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden bg-white transition-all"
              style={{
                border: '3px solid #333',
                borderRadius: '8px 12px 10px 14px',
                transform: `rotate(${index % 2 === 0 ? '-0.5' : '0.5'}deg)`,
                boxShadow: '4px 4px 0 #333',
              }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex w-full items-center gap-4 p-4 text-left sm:p-5"
              >
                <span
                  className="flex h-10 w-10 items-center justify-center text-lg font-bold"
                  style={{
                    border: '2px solid #333',
                    borderRadius: '50% 45% 55% 50%',
                    backgroundColor: openItems.includes(index) ? '#ffd166' : '#fff',
                  }}
                >
                  {index + 1}
                </span>
                <span
                  className="flex-1 text-base font-bold text-gray-800 sm:text-lg"
                  style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
                >
                  {item.title}
                </span>
                <span
                  className="text-2xl font-bold text-gray-800 transition-transform duration-200"
                  style={{
                    transform: openItems.includes(index) ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openItems.includes(index) ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div
                  className="mx-4 mb-4 p-4"
                  style={{
                    border: '2px dashed #666',
                    borderRadius: '6px 10px 8px 12px',
                    backgroundColor: '#fffef0',
                  }}
                >
                  <p
                    className="text-sm leading-relaxed text-gray-700 sm:text-base"
                    style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
                  >
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-8 p-4 text-center"
          style={{
            border: '2px solid #333',
            borderRadius: '10px 14px 12px 16px',
            backgroundColor: '#e8f4f8',
            transform: 'rotate(0.3deg)',
          }}
        >
          <p
            className="text-sm text-gray-600"
            style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
          >
            ✏️ Click any question to see the answer! ✏️
          </p>
        </div>
      </div>
    </div>
  );
}
