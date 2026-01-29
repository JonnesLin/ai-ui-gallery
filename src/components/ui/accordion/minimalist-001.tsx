import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './index';

export default function MinimalistAccordion() {
  const items = [
    {
      value: 'item-1',
      title: 'What is minimalist design?',
      content: 'Minimalist design is characterized by simplicity, clean lines, and a monochromatic palette. It emphasizes functionality while removing unnecessary elements, creating a sense of calm and clarity.',
    },
    {
      value: 'item-2',
      title: 'Key principles of minimalism',
      content: 'The core principles include: less is more, emphasis on whitespace, limited color palette, clean typography, and focus on essential elements only.',
    },
    {
      value: 'item-3',
      title: 'Benefits of minimalist approach',
      content: 'Minimalist design improves user experience through faster load times, clearer navigation, reduced cognitive load, and better accessibility for all users.',
    },
    {
      value: 'item-4',
      title: 'How to implement minimalism',
      content: 'Start by removing non-essential elements, use generous whitespace, stick to a simple color scheme, choose readable fonts, and focus on content hierarchy.',
    },
  ];

  return (
    <div className="min-h-screen bg-white p-4 sm:p-8 md:p-12">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-8 text-sm font-normal uppercase tracking-widest text-neutral-400">
          Frequently Asked Questions
        </h2>

        <Accordion type="multiple" defaultValue={['item-1']} theme="minimalist">
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value} className="py-6 border-b border-neutral-200">
              <AccordionTrigger className="text-base font-normal text-neutral-900 sm:text-lg">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="mt-4">
                <p className="text-sm leading-relaxed text-neutral-500 sm:text-base">
                  {item.content}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 border-t border-neutral-200 pt-8">
          <p className="text-xs text-neutral-400">
            Click on any question to expand or collapse the answer.
          </p>
        </div>
      </div>
    </div>
  );
}
