import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './index';

export default function RetroAccordion() {
  const items = [
    {
      value: 'item-1',
      title: 'What is Retro Design?',
      content: 'Retro design draws inspiration from past decades, particularly the 70s, 80s, and 90s. It features warm color palettes, bold geometric shapes, and nostalgic typography.',
      icon: '📼',
    },
    {
      value: 'item-2',
      title: 'Color Palette Tips',
      content: 'Use warm oranges, browns, teals, and mustard yellows. Add texture with grain effects and consider sunset gradients for that authentic retro vibe.',
      icon: '🎨',
    },
    {
      value: 'item-3',
      title: 'Typography Choices',
      content: 'Groovy rounded fonts, bold slab serifs, and disco-era display typefaces work great. Mix weights for visual interest and hierarchy.',
      icon: '✏️',
    },
    {
      value: 'item-4',
      title: 'Modern Retro Balance',
      content: 'Combine vintage aesthetics with modern UX principles. Keep interfaces intuitive while applying retro visual treatments for the best results.',
      icon: '⚡',
    },
  ];

  return (
    <div className="min-h-screen p-4 sm:p-8 md:p-12" style={{ backgroundColor: '#f4e4c8' }}>
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 rounded-3xl p-6 text-center" style={{ backgroundColor: '#d35d47' }}>
          <h2 className="text-3xl font-black text-white sm:text-4xl" style={{ fontFamily: 'Georgia, serif' }}>
            ~ Groovy FAQ ~
          </h2>
          <p className="mt-2 text-sm text-white/80">
            ★ Far out answers to your questions ★
          </p>
        </div>

        <Accordion type="multiple" defaultValue={['item-1']} theme="minimalist">
          {items.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="mb-3 overflow-hidden rounded-2xl border-0 border-4 transition-all"
              style={{
                borderColor: '#3d3024',
                backgroundColor: '#f9d8a8'
              }}
            >
              <AccordionTrigger className="flex w-full items-center gap-4 p-4 text-left sm:p-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-4 text-xl" style={{
                  borderColor: '#3d3024',
                  backgroundColor: '#78b3a0'
                }}>
                  {item.icon}
                </span>
                <span className="flex-1 text-lg font-bold sm:text-xl" style={{
                  color: '#3d3024',
                  fontFamily: 'Georgia, serif'
                }}>
                  {item.title}
                </span>
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full border-4 text-lg font-bold transition-transform duration-300"
                  style={{
                    borderColor: '#3d3024',
                    backgroundColor: '#d35d47',
                    color: '#f4e4c8'
                  }}
                >
                  +
                </span>
              </AccordionTrigger>
              <AccordionContent className="border-t-4 p-4 sm:p-5" style={{ borderColor: '#3d3024' }}>
                <div className="rounded-xl p-4" style={{ backgroundColor: '#f4e4c8' }}>
                  <p className="text-sm leading-relaxed sm:text-base" style={{
                    color: '#3d3024',
                    fontFamily: 'Georgia, serif'
                  }}>
                    {item.content}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 flex justify-center">
          <div className="flex gap-2 rounded-full border-4 px-4 py-2" style={{
            borderColor: '#3d3024',
            backgroundColor: '#78b3a0'
          }}>
            {items.map((_, index) => (
              <div
                key={index}
                className="h-4 w-4 rounded-full border-2 transition-all"
                style={{
                  borderColor: '#3d3024',
                  backgroundColor: '#f4e4c8'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
