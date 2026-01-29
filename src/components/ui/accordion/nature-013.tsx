import { useState } from 'react';

export default function NatureAccordion() {
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
      title: 'Sustainable Materials',
      content: 'We source all materials from certified sustainable suppliers. Our packaging is 100% recyclable, and we plant a tree for every purchase made through our platform.',
      icon: '🌱',
      color: 'bg-emerald-100 border-emerald-300',
    },
    {
      title: 'Carbon Neutral Shipping',
      content: 'All shipments are carbon neutral through our partnership with environmental organizations. We offset emissions by investing in reforestation and renewable energy projects.',
      icon: '🍃',
      color: 'bg-green-100 border-green-300',
    },
    {
      title: 'Eco-Friendly Production',
      content: 'Our production facilities run on 100% renewable energy. We use water-saving technologies and have eliminated harmful chemicals from our manufacturing process.',
      icon: '🌿',
      color: 'bg-teal-100 border-teal-300',
    },
    {
      title: 'Community Impact',
      content: 'We support local farming communities with fair trade practices and reinvest 5% of profits into environmental education and conservation programs worldwide.',
      icon: '🌳',
      color: 'bg-lime-100 border-lime-300',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-100 p-4 sm:p-8 md:p-12">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-600 shadow-lg">
            <span className="text-4xl">🌍</span>
          </div>
          <h2 className="text-2xl font-semibold text-emerald-900 sm:text-3xl">
            Our Green Commitment
          </h2>
          <p className="mt-2 text-emerald-700/70">
            Learn about our sustainability initiatives
          </p>
        </div>

        <div className="space-y-3">
          {items.map((item, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl border-2 bg-white/80 backdrop-blur transition-all duration-300 ${
                openItems.includes(index)
                  ? 'border-emerald-400 shadow-lg shadow-emerald-100'
                  : 'border-transparent hover:border-emerald-200'
              }`}
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex w-full items-center gap-4 p-4 text-left sm:p-5"
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-xl border-2 text-xl transition-transform duration-300 ${item.color} ${
                  openItems.includes(index) ? 'scale-110 rotate-12' : ''
                }`}>
                  {item.icon}
                </span>
                <span className="flex-1 text-base font-medium text-emerald-900 sm:text-lg">
                  {item.title}
                </span>
                <span className={`flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 transition-transform duration-300 ${
                  openItems.includes(index) ? 'rotate-180' : ''
                }`}>
                  <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openItems.includes(index) ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-4 pb-5 sm:px-5">
                  <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-green-50 p-4 border border-emerald-100">
                    <p className="text-sm leading-relaxed text-emerald-800 sm:text-base">
                      {item.content}
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs text-emerald-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-600 p-6 text-center text-white">
          <p className="text-lg font-medium">Join Our Green Initiative</p>
          <p className="mt-1 text-sm text-emerald-100">
            Together we have planted over 100,000 trees 🌲
          </p>
          <button className="mt-4 rounded-full bg-white px-6 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
