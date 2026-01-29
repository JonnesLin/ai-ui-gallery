import { useState } from 'react';

export default function FlatAccordion() {
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
      title: 'What is Flat Design?',
      content: 'Flat design emphasizes minimalism and usability through simple, two-dimensional elements. It avoids gradients, shadows, and textures in favor of solid colors and clean typography.',
      color: 'bg-red-500',
    },
    {
      title: 'Core Principles',
      content: 'Key principles include: no shadows or depth effects, simple shapes and icons, bold color palettes, clear typography, and focus on functionality over decoration.',
      color: 'bg-blue-500',
    },
    {
      title: 'Color Usage',
      content: 'Flat design typically uses bright, saturated colors in solid blocks. Color becomes the primary way to create visual hierarchy and guide user attention.',
      color: 'bg-green-500',
    },
    {
      title: 'Flat 2.0 Evolution',
      content: 'Flat 2.0 adds subtle shadows and depth cues while maintaining the clean aesthetic. This evolution addresses usability concerns while preserving the modern look.',
      color: 'bg-amber-500',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-8 md:p-12">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 flex items-center gap-4">
          <div className="h-12 w-12 bg-indigo-500" />
          <div>
            <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
              FAQ
            </h2>
            <p className="text-sm text-slate-500">
              Flat design questions answered
            </p>
          </div>
        </div>

        <div className="space-y-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden bg-white"
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex w-full items-center gap-0 text-left"
              >
                <span className={`flex h-14 w-14 flex-shrink-0 items-center justify-center text-lg font-bold text-white sm:h-16 sm:w-16 ${item.color}`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={`flex-1 px-4 py-4 text-base font-medium sm:px-5 sm:text-lg ${
                  openItems.includes(index) ? 'bg-slate-800 text-white' : 'text-slate-800'
                }`}>
                  {item.title}
                </span>
                <span className={`flex h-14 w-14 flex-shrink-0 items-center justify-center text-xl font-bold sm:h-16 sm:w-16 ${
                  openItems.includes(index) ? 'bg-slate-800 text-white' : 'bg-slate-200 text-slate-600'
                }`}>
                  {openItems.includes(index) ? '−' : '+'}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openItems.includes(index) ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="flex">
                  <div className={`w-14 flex-shrink-0 sm:w-16 ${item.color} opacity-30`} />
                  <div className="flex-1 bg-slate-50 p-4 sm:p-5">
                    <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between bg-white p-4">
          <div className="flex gap-2">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => toggleItem(index)}
                className={`h-4 w-4 transition-opacity ${item.color} ${
                  openItems.includes(index) ? 'opacity-100' : 'opacity-30'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setOpenItems(openItems.length === items.length ? [] : items.map((_, i) => i))}
            className="bg-indigo-500 px-4 py-2 text-sm font-bold text-white"
          >
            {openItems.length === items.length ? 'CLOSE ALL' : 'OPEN ALL'}
          </button>
        </div>
      </div>
    </div>
  );
}
