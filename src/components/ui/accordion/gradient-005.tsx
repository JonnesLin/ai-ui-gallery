import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './index';

export default function GradientAccordion() {
  const items = [
    {
      value: 'item-1',
      title: 'Understanding Gradient Design',
      content: 'Gradients add depth and visual interest to interfaces. They can guide the eye, create hierarchy, and evoke emotions through color transitions.',
      gradient: 'from-violet-500 to-purple-600',
    },
    {
      value: 'item-2',
      title: 'Creating Smooth Transitions',
      content: 'Use colors that are close on the color wheel for smooth gradients. Avoid muddy midtones by choosing complementary colors carefully.',
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      value: 'item-3',
      title: 'Gradient Direction Tips',
      content: 'Diagonal gradients (135° or 45°) often feel more dynamic. Vertical gradients suggest stability, while horizontal ones imply movement.',
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      value: 'item-4',
      title: 'Performance Considerations',
      content: 'CSS gradients are more performant than gradient images. Use them for backgrounds and overlays to reduce file sizes and improve load times.',
      gradient: 'from-cyan-500 to-blue-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 sm:p-8 md:p-12">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h2 className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            Gradient FAQ
          </h2>
          <p className="mt-2 text-purple-300/70">
            Explore the art of gradient design
          </p>
        </div>

        <Accordion type="multiple" defaultValue={['item-1']} theme="minimalist">
          {items.map((item, index) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="group mb-4 overflow-hidden rounded-2xl border-0 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
            >
              <AccordionTrigger className="flex w-full items-center gap-4 p-4 text-left sm:p-5">
                <span className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} text-sm font-bold text-white shadow-lg`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="flex-1 text-base font-medium text-white sm:text-lg">
                  {item.title}
                </span>
                <span className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient} transition-transform duration-300`}>
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-5 sm:px-5">
                <div className={`rounded-xl bg-gradient-to-br ${item.gradient} p-[1px]`}>
                  <div className="rounded-xl bg-slate-900/90 p-4">
                    <p className="text-sm leading-relaxed text-purple-100/80 sm:text-base">
                      {item.content}
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 flex justify-center gap-2">
          {items.map((item, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 w-2 bg-gradient-to-r ${item.gradient}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
