import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './index';

export default function PastelAccordion() {
  const items = [
    {
      value: 'item-1',
      title: 'What are pastel colors?',
      content: 'Pastel colors are soft, muted tones created by mixing colors with white. They evoke calmness, innocence, and warmth, making them perfect for gentle, approachable designs.',
      color: 'bg-pink-200',
      accent: 'bg-pink-400',
    },
    {
      value: 'item-2',
      title: 'Creating color harmony',
      content: 'Pastels naturally harmonize well together. Combine complementary pastels like mint and coral, or use analogous schemes like lavender, periwinkle, and powder blue.',
      color: 'bg-purple-200',
      accent: 'bg-purple-400',
    },
    {
      value: 'item-3',
      title: 'Typography with pastels',
      content: 'Use darker versions of your pastel palette for text to maintain readability. Avoid white text on pastels as it often lacks sufficient contrast.',
      color: 'bg-blue-200',
      accent: 'bg-blue-400',
    },
    {
      value: 'item-4',
      title: 'Pastel in modern design',
      content: 'Pastels are trending in tech and wellness brands. They convey friendliness and accessibility while maintaining a sophisticated, modern aesthetic.',
      color: 'bg-green-200',
      accent: 'bg-green-400',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-4 sm:p-8 md:p-12">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-pink-200 to-purple-200">
            <span className="text-2xl">🌸</span>
          </div>
          <h2 className="text-2xl font-semibold text-purple-900 sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-purple-600/70">
            Soft answers to your curious questions
          </p>
        </div>

        <Accordion type="multiple" defaultValue={['item-1']} theme="minimalist">
          {items.map((item, index) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className={`mb-3 overflow-hidden rounded-3xl border-0 transition-all duration-300 ${item.color}`}
            >
              <AccordionTrigger className="flex w-full items-center gap-4 p-4 text-left sm:p-5">
                <span className={`flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-semibold text-white ${item.accent}`}>
                  {index + 1}
                </span>
                <span className="flex-1 text-base font-medium text-gray-800 sm:text-lg">
                  {item.title}
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/50 transition-transform duration-300">
                  <svg className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-5 sm:px-5">
                <div className="rounded-2xl bg-white/60 p-4 backdrop-blur-sm">
                  <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                    {item.content}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 flex justify-center gap-3">
          {items.map((item, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full transition-all duration-300 bg-gray-300`}
            />
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-purple-400">
            💜 Click any question to see the answer
          </p>
        </div>
      </div>
    </div>
  );
}
