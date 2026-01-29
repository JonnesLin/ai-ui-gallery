import { useState } from 'react';

export default function NeonAccordion() {
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
      title: 'Neon Glow Effects',
      content: 'Neon design mimics the glow of neon lights with multiple layered shadows in vibrant colors. The key is creating that characteristic soft, luminous spread.',
      color: '#ff00ff',
    },
    {
      title: 'Color Selection',
      content: 'Classic neon colors include hot pink, electric blue, neon green, and vibrant purple. Use them against dark backgrounds for maximum impact and visibility.',
      color: '#00ffff',
    },
    {
      title: 'Animation Tips',
      content: 'Add subtle flickering or pulsing animations to enhance the neon effect. Vary the glow intensity and consider occasional "buzz" effects for authenticity.',
      color: '#ff6b6b',
    },
    {
      title: 'Performance Considerations',
      content: 'Multiple box-shadows can impact performance. Use sparingly and consider reducing glow layers on mobile devices or when many elements are present.',
      color: '#4ade80',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 p-4 sm:p-8 md:p-12">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h2
            className="text-3xl font-bold text-white sm:text-4xl"
            style={{
              textShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 80px #ff00ff',
            }}
          >
            NEON FAQ
          </h2>
          <p
            className="mt-2 text-sm text-cyan-400"
            style={{
              textShadow: '0 0 10px #00ffff',
            }}
          >
            Glowing answers to your questions
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-gray-900/50 transition-all duration-300"
              style={{
                border: `2px solid ${openItems.includes(index) ? item.color : '#333'}`,
                boxShadow: openItems.includes(index)
                  ? `0 0 10px ${item.color}, 0 0 20px ${item.color}, inset 0 0 20px ${item.color}20`
                  : 'none',
              }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex w-full items-center gap-4 p-4 text-left sm:p-5"
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold transition-all"
                  style={{
                    borderColor: item.color,
                    color: item.color,
                    boxShadow: openItems.includes(index)
                      ? `0 0 10px ${item.color}, 0 0 20px ${item.color}`
                      : `0 0 5px ${item.color}`,
                    textShadow: `0 0 10px ${item.color}`,
                  }}
                >
                  {index + 1}
                </span>
                <span
                  className="flex-1 text-base font-medium text-white sm:text-lg transition-all"
                  style={{
                    textShadow: openItems.includes(index) ? `0 0 10px ${item.color}` : 'none',
                  }}
                >
                  {item.title}
                </span>
                <span
                  className="text-2xl transition-transform duration-200"
                  style={{
                    color: item.color,
                    textShadow: `0 0 10px ${item.color}`,
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
                  className="border-t px-4 py-4 sm:px-5"
                  style={{ borderColor: `${item.color}40` }}
                >
                  <p
                    className="text-sm leading-relaxed sm:text-base"
                    style={{ color: `${item.color}cc` }}
                  >
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => toggleItem(index)}
              className="h-3 w-3 rounded-full transition-all"
              style={{
                backgroundColor: item.color,
                boxShadow: openItems.includes(index)
                  ? `0 0 10px ${item.color}, 0 0 20px ${item.color}`
                  : `0 0 5px ${item.color}`,
                transform: openItems.includes(index) ? 'scale(1.5)' : 'scale(1)',
              }}
            />
          ))}
        </div>

        <div
          className="mt-8 rounded-lg border border-purple-500/30 bg-gray-900/50 p-4 text-center"
          style={{
            boxShadow: '0 0 20px rgba(168, 85, 247, 0.2)',
          }}
        >
          <p className="text-sm text-purple-400">
            ✦ Click any question to illuminate the answer ✦
          </p>
        </div>
      </div>
    </div>
  );
}
