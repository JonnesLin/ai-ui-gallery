import { useState } from 'react';

export default function MonochromeAccordion() {
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
      title: 'The Power of Monochrome',
      content: 'Monochrome design uses variations of a single color, typically black, white, and grays. This restraint creates sophisticated, timeless aesthetics that never go out of style.',
    },
    {
      title: 'Creating Visual Hierarchy',
      content: 'Without color to differentiate elements, rely on size, weight, spacing, and contrast. Use the full grayscale spectrum strategically to guide the eye.',
    },
    {
      title: 'Typography as Design',
      content: 'In monochrome design, typography becomes a primary design element. Play with weights, sizes, and letterspacing to create visual interest.',
    },
    {
      title: 'When Monochrome Works Best',
      content: 'Perfect for luxury brands, editorial design, photography portfolios, and minimalist interfaces. It lets content shine without color distractions.',
    },
  ];

  return (
    <div className="min-h-screen bg-white p-4 sm:p-8 md:p-12">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 border-b-2 border-black pb-6">
          <h2 className="text-4xl font-black uppercase tracking-tight text-black sm:text-5xl">
            FAQ
          </h2>
          <p className="mt-2 text-sm tracking-widest text-gray-500 uppercase">
            Questions & Answers
          </p>
        </div>

        <div className="divide-y-2 divide-black">
          {items.map((item, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => toggleItem(index)}
                className="flex w-full items-center justify-between text-left group"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-sm font-bold text-gray-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={`text-lg font-semibold transition-colors sm:text-xl ${
                    openItems.includes(index) ? 'text-black' : 'text-gray-700 group-hover:text-black'
                  }`}>
                    {item.title}
                  </span>
                </div>
                <span className={`flex h-8 w-8 items-center justify-center border-2 transition-all ${
                  openItems.includes(index)
                    ? 'border-black bg-black text-white'
                    : 'border-gray-300 text-gray-400 group-hover:border-black group-hover:text-black'
                }`}>
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openItems.includes(index) ? 'mt-4 max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-10">
                  <p className="text-base leading-relaxed text-gray-600">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-between border-t-2 border-black pt-6">
          <span className="text-sm text-gray-500">
            {openItems.length} of {items.length} expanded
          </span>
          <button
            onClick={() => setOpenItems(openItems.length === items.length ? [] : items.map((_, i) => i))}
            className="border-2 border-black bg-white px-4 py-2 text-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-black hover:text-white"
          >
            {openItems.length === items.length ? 'Collapse All' : 'Expand All'}
          </button>
        </div>
      </div>
    </div>
  );
}
