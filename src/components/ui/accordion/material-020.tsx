import { useState } from 'react';

export default function MaterialAccordion() {
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
      title: 'Material Design Principles',
      content: 'Material Design is inspired by physical materials and their textures. It uses realistic lighting, shadows, and movement to create intuitive, familiar interfaces that respond naturally to user interaction.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Elevation & Shadows',
      content: 'Elevation indicates the relative distance between surfaces. Higher elevations receive more prominent shadows. This creates visual hierarchy and helps users understand interface structure.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: 'Motion & Animation',
      content: 'Movement in Material Design is meaningful. Elements should move smoothly, respond to touch, and guide attention. Transitions should feel natural and help users understand spatial relationships.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Color System',
      content: 'Material uses a systematic approach to color with primary, secondary, and surface colors. Colors should be accessible, consistent, and meaningful throughout your application.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 md:p-12">
      <div className="mx-auto max-w-2xl">
        <div className="mb-6">
          <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Learn about Material Design principles
          </p>
        </div>

        <div
          className="overflow-hidden rounded-lg bg-white"
          style={{
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={index !== 0 ? 'border-t border-gray-200' : ''}
            >
              <button
                onClick={() => toggleItem(index)}
                className={`flex w-full items-center gap-4 p-4 text-left transition-colors hover:bg-gray-50 sm:px-6 ${
                  openItems.includes(index) ? 'bg-blue-50' : ''
                }`}
              >
                <span className={`flex-shrink-0 transition-colors ${
                  openItems.includes(index) ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  {item.icon}
                </span>
                <span className={`flex-1 text-base font-medium transition-colors ${
                  openItems.includes(index) ? 'text-blue-900' : 'text-gray-900'
                }`}>
                  {item.title}
                </span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                    openItems.includes(index) ? 'rotate-180 text-blue-600' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openItems.includes(index) ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="border-t border-gray-100 bg-gray-50 px-4 py-4 sm:px-6">
                  <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                    {item.content}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <button className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-md transition-shadow hover:shadow-lg">
                      Learn More
                    </button>
                    <button className="rounded-full px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50">
                      Documentation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-6 flex items-center justify-between rounded-lg bg-white p-4"
          style={{
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          }}
        >
          <span className="text-sm text-gray-600">
            {openItems.length} of {items.length} expanded
          </span>
          <button
            onClick={() => setOpenItems(openItems.length === items.length ? [] : items.map((_, i) => i))}
            className="rounded px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50"
          >
            {openItems.length === items.length ? 'COLLAPSE ALL' : 'EXPAND ALL'}
          </button>
        </div>

        <div
          className="mt-4 rounded-lg bg-blue-600 p-4 text-white"
          style={{
            boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
          }}
        >
          <div className="flex items-center gap-3">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-medium">Still have questions?</p>
              <p className="text-sm text-blue-100">Check out our comprehensive documentation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
