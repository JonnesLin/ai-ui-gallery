import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './index';

export default function GlassmorphismAccordion() {
  const items = [
    {
      value: 'item-1',
      title: 'What is Glassmorphism?',
      content: 'Glassmorphism is a design style that features frosted glass effects, transparency, and subtle borders. It creates depth and visual hierarchy through layered translucent surfaces.',
      icon: '✨',
    },
    {
      value: 'item-2',
      title: 'Creating the glass effect',
      content: 'The key properties include background blur, semi-transparent backgrounds, subtle borders, and soft shadows. This creates an elegant, modern aesthetic.',
      icon: '🔮',
    },
    {
      value: 'item-3',
      title: 'Best use cases',
      content: 'Glassmorphism works best on colorful or image backgrounds where the blur effect can truly shine. It is ideal for cards, modals, and overlay components.',
      icon: '💎',
    },
    {
      value: 'item-4',
      title: 'Accessibility considerations',
      content: 'Ensure sufficient contrast between text and background. Use darker tints for better readability and avoid over-transparency that reduces legibility.',
      icon: '👁️',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-4 sm:p-8 md:p-12">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 rounded-2xl bg-white/10 p-6 backdrop-blur-xl">
          <h2 className="text-center text-2xl font-light text-white sm:text-3xl">
            Glass Accordion
          </h2>
          <p className="mt-2 text-center text-sm text-white/70">
            Elegant frosted glass design
          </p>
        </div>

        <Accordion type="multiple" defaultValue={['item-1']} theme="glassmorphism">
          {items.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="mb-3 overflow-hidden rounded-2xl border border-white/20 bg-white/15 backdrop-blur-xl data-[state=open]:border-white/40 data-[state=open]:bg-white/25"
            >
              <AccordionTrigger className="flex w-full items-center gap-4 p-4 text-left text-base font-medium text-white transition-colors hover:bg-white/10 sm:p-5 sm:text-lg">
                <span className="text-xl sm:text-2xl">{item.icon}</span>
                <span className="flex-1">{item.title}</span>
              </AccordionTrigger>
              <AccordionContent className="border-t border-white/20 px-4 py-4 sm:px-5">
                <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                  {item.content}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-xs text-white/60 backdrop-blur-xl">
            Expandable accordion items
          </span>
        </div>
      </div>
    </div>
  );
}
