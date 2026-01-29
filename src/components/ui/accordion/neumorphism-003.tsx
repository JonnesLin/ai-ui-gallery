import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './index';

export default function NeumorphismAccordion() {
  const items = [
    {
      value: 'item-1',
      title: 'Understanding Neumorphism',
      content: 'Neumorphism, or soft UI, combines background colors with shadows to create extruded shapes that appear to emerge from the screen. It creates a soft, tactile interface.',
    },
    {
      value: 'item-2',
      title: 'Shadow techniques',
      content: 'The effect is achieved using two shadows: a light shadow on one side and a dark shadow on the opposite side, creating the illusion of depth and softness.',
    },
    {
      value: 'item-3',
      title: 'Color palette considerations',
      content: 'Neumorphism works best with muted, monochromatic color schemes. The background and element colors should be similar, with shadows providing the contrast.',
    },
    {
      value: 'item-4',
      title: 'When to use Neumorphism',
      content: 'This style is ideal for toggles, buttons, cards, and input fields where you want a tactile, physical feel. Avoid using it for text-heavy interfaces.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#e0e5ec] p-4 sm:p-8 md:p-12">
      <div className="mx-auto max-w-2xl">
        <div
          className="mb-8 rounded-3xl p-6 text-center"
          style={{
            boxShadow: '20px 20px 60px #bec3c9, -20px -20px 60px #ffffff',
          }}
        >
          <h2 className="text-xl font-semibold text-[#5a6170] sm:text-2xl">
            Soft UI Accordion
          </h2>
          <p className="mt-1 text-sm text-[#8a93a6]">
            Neumorphic design style
          </p>
        </div>

        <Accordion type="multiple" defaultValue={['item-1']} theme="neumorphism">
          {items.map((item, index) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="mb-4"
            >
              <div
                className="rounded-2xl bg-[#e0e5ec] transition-all duration-300"
                style={{
                  boxShadow: '8px 8px 16px #bec3c9, -8px -8px 16px #ffffff',
                }}
              >
                <AccordionTrigger className="flex w-full items-center justify-between p-5 text-left text-base font-medium text-[#5a6170] sm:p-6 sm:text-lg">
                  <span>{item.title}</span>
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e0e5ec] transition-all duration-300"
                    style={{
                      boxShadow: '4px 4px 8px #bec3c9, -4px -4px 8px #ffffff',
                    }}
                  >
                    <svg
                      className="h-5 w-5 text-[#7a8499] transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 sm:pb-6">
                  <div
                    className="mx-5 rounded-xl bg-[#e0e5ec] p-4 sm:mx-6"
                    style={{
                      boxShadow: 'inset 4px 4px 8px #bec3c9, inset -4px -4px 8px #ffffff',
                    }}
                  >
                    <p className="text-sm leading-relaxed text-[#6b7280] sm:text-base">
                      {item.content}
                    </p>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
