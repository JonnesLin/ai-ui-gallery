import { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './index';

export default function BrutalistAccordion() {
  const items = [
    {
      value: 'item-1',
      title: 'WHAT IS BRUTALISM?',
      content: 'Brutalist design embraces raw, unpolished aesthetics. It features bold typography, harsh contrasts, asymmetric layouts, and intentionally "ugly" elements that challenge conventional design norms.',
    },
    {
      value: 'item-2',
      title: 'HISTORICAL ORIGINS',
      content: 'Brutalism originated in architecture post-World War II, characterized by raw concrete (béton brut) and functional forms. Web brutalism emerged as a reaction to overly polished, homogeneous design.',
    },
    {
      value: 'item-3',
      title: 'KEY CHARACTERISTICS',
      content: 'Heavy borders, stark black and white, oversized elements, system fonts, unconventional layouts, visible grids, and rejection of "pretty" design conventions define this anti-design movement.',
    },
    {
      value: 'item-4',
      title: 'WHEN TO USE IT',
      content: 'Best for creative agencies, art portfolios, experimental projects, and brands that want to stand out. Not recommended for corporate or user-sensitive applications.',
    },
  ];

  const [value, setValue] = useState<string | string[]>(['item-1']);

  const handleToggleAll = () => {
    setValue(value.length === items.length ? [] : items.map(item => item.value));
  };

  return (
    <div className="min-h-screen bg-yellow-300 p-4 font-mono sm:p-8 md:p-12">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 border-b-8 border-black pb-4">
          <h2 className="text-4xl font-black uppercase text-black sm:text-5xl">
            FAQ
          </h2>
          <p className="mt-2 text-lg font-bold uppercase text-black">
            Frequently Asked Questions
          </p>
        </div>

        <Accordion type="multiple" value={value} onValueChange={setValue} theme="minimalist">
          {items.map((item, index) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className={`mb-4 border-0 border-4 border-black transition-all ${
                value.includes(item.value) ? 'bg-black text-yellow-300' : 'bg-white'
              }`}
            >
              <AccordionTrigger className="flex w-full items-center justify-between p-4 text-left sm:p-6">
                <div className="flex items-center gap-4">
                  <span className={`flex h-12 w-12 items-center justify-center border-4 text-2xl font-black ${
                    value.includes(item.value)
                      ? 'border-yellow-300 text-yellow-300'
                      : 'border-black bg-yellow-300 text-black'
                  }`}>
                    {index + 1}
                  </span>
                  <span className={`text-base font-black uppercase sm:text-xl ${
                    value.includes(item.value) ? 'text-yellow-300' : 'text-black'
                  }`}>
                    {item.title}
                  </span>
                </div>
                <span className={`text-3xl font-black ${
                  value.includes(item.value) ? 'text-yellow-300' : 'text-black'
                }`}>
                  {value.includes(item.value) ? '−' : '+'}
                </span>
              </AccordionTrigger>
              <AccordionContent className={`border-t-4 p-4 sm:p-6 ${
                value.includes(item.value) ? 'border-yellow-300' : 'border-black'
              }`}>
                <p className={`text-sm uppercase leading-relaxed sm:text-base ${
                  value.includes(item.value) ? 'text-yellow-300' : 'text-black'
                }`}>
                  {item.content}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 border-4 border-black bg-black p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold uppercase text-yellow-300">
              [{value.length}/{items.length}] ITEMS OPEN
            </span>
            <button
              onClick={handleToggleAll}
              className="border-4 border-yellow-300 bg-yellow-300 px-4 py-2 text-sm font-black uppercase text-black hover:bg-black hover:text-yellow-300"
            >
              {value.length === items.length ? 'CLOSE ALL' : 'OPEN ALL'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
