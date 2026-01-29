import { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './index';

export default function DarkAccordion() {
  const items = [
    {
      value: 'item-1',
      title: 'Dark Mode Best Practices',
      content: 'Dark mode reduces eye strain in low-light conditions and saves battery on OLED screens. Use pure black sparingly and opt for dark grays to reduce contrast strain.',
      badge: 'Popular',
    },
    {
      value: 'item-2',
      title: 'Color Contrast Guidelines',
      content: 'Maintain WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text). Use muted accent colors and avoid highly saturated hues that can cause visual vibration.',
      badge: null,
    },
    {
      value: 'item-3',
      title: 'Implementing Dark Themes',
      content: 'Use CSS custom properties for easy theme switching. Consider system preference detection with prefers-color-scheme media query for automatic dark mode activation.',
      badge: 'New',
    },
    {
      value: 'item-4',
      title: 'Common Dark Mode Pitfalls',
      content: 'Avoid pure white text on pure black backgrounds. Do not simply invert colors. Test with actual users in various lighting conditions for optimal readability.',
      badge: null,
    },
  ];

  const [value, setValue] = useState<string | string[]>(['item-1']);

  const handleExpandAll = () => {
    setValue(value.length === items.length ? [] : items.map(item => item.value));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] p-4 sm:p-8 md:p-12">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 border-b border-zinc-800 pb-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Dark Theme FAQ
          </h2>
          <p className="mt-2 text-sm text-zinc-500">
            Everything you need to know about dark mode design
          </p>
        </div>

        <Accordion type="multiple" value={value} onValueChange={setValue} theme="dark">
          {items.map((item, index) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="mb-2 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 transition-all duration-200 hover:border-zinc-700 data-[state=open]:border-zinc-700 data-[state=open]:bg-zinc-900"
            >
              <AccordionTrigger className="flex w-full items-center gap-3 p-4 text-left sm:p-5">
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-md text-xs font-bold ${
                    value.includes(item.value)
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'bg-zinc-800 text-zinc-500'
                  }`}
                >
                  {index + 1}
                </span>
                <span className="flex-1 text-base font-medium text-zinc-100 sm:text-lg">
                  {item.title}
                </span>
                {item.badge && (
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                    item.badge === 'New'
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-amber-500/20 text-amber-400'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </AccordionTrigger>
              <AccordionContent className="border-t border-zinc-800 px-4 py-4 sm:px-5">
                <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {item.content}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 flex items-center justify-between rounded-xl bg-zinc-900 p-4">
          <span className="text-sm text-zinc-500">
            {value.length} items expanded
          </span>
          <button
            onClick={handleExpandAll}
            className="text-sm font-medium text-emerald-400 hover:text-emerald-300"
          >
            {value.length === items.length ? 'Collapse All' : 'Expand All'}
          </button>
        </div>
      </div>
    </div>
  );
}
