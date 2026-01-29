import { useState } from 'react';

export default function LuxuryAccordion() {
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
      title: 'Bespoke Craftsmanship',
      content: 'Each piece is meticulously handcrafted by our master artisans using time-honored techniques passed down through generations. We source only the finest materials from exclusive suppliers worldwide.',
    },
    {
      title: 'Heritage & Provenance',
      content: 'Established in 1892, our maison has defined luxury for over a century. Every creation carries a certificate of authenticity and is registered in our permanent archives.',
    },
    {
      title: 'Exclusive Services',
      content: 'Our white-glove concierge service includes personal consultations, private viewings, worldwide delivery, and lifetime maintenance for all acquisitions.',
    },
    {
      title: 'Investment Value',
      content: 'Our collections have consistently appreciated in value, with select pieces achieving record results at major auction houses. Each acquisition represents both beauty and enduring worth.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-4 sm:p-8 md:p-12">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-amber-600" />
              <span className="text-amber-500 text-sm tracking-[0.3em] uppercase">Est. 1892</span>
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-amber-600" />
            </div>
          </div>
          <h2 className="text-3xl font-light tracking-wide text-white sm:text-4xl" style={{ fontFamily: 'Georgia, serif' }}>
            Maison Queries
          </h2>
          <p className="mt-3 text-sm tracking-widest text-amber-600/70 uppercase">
            Curated Answers for Distinguished Clients
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className={`overflow-hidden border transition-all duration-500 ${
                openItems.includes(index)
                  ? 'border-amber-600/50 bg-amber-950/20'
                  : 'border-amber-900/30 hover:border-amber-800/50'
              }`}
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
              >
                <span className="text-amber-600/50 text-sm" style={{ fontFamily: 'Georgia, serif' }}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="flex-1 text-base font-light tracking-wide text-white sm:text-lg" style={{ fontFamily: 'Georgia, serif' }}>
                  {item.title}
                </span>
                <span className={`flex h-8 w-8 items-center justify-center border transition-all duration-300 ${
                  openItems.includes(index)
                    ? 'border-amber-500 rotate-45'
                    : 'border-amber-800/50'
                }`}>
                  <svg className="h-3 w-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  openItems.includes(index) ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="border-t border-amber-900/30 px-5 py-5 sm:px-6">
                  <p className="text-sm leading-relaxed text-amber-100/70 sm:text-base" style={{ fontFamily: 'Georgia, serif' }}>
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-amber-900/30 pt-8 text-center">
          <p className="text-xs tracking-widest text-amber-700/50 uppercase mb-4">
            Request a Private Consultation
          </p>
          <button className="group inline-flex items-center gap-2 border border-amber-600 bg-transparent px-6 py-3 text-sm tracking-widest text-amber-500 transition-all hover:bg-amber-600 hover:text-black uppercase">
            <span>Contact Atelier</span>
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
