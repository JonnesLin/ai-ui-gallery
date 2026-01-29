import { useState } from 'react';

export default function CorporateAccordion() {
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
      title: 'Enterprise Solutions Overview',
      content: 'Our enterprise solutions provide comprehensive business tools designed to streamline operations, enhance productivity, and drive measurable results across your organization.',
      category: 'Solutions',
    },
    {
      title: 'Implementation Timeline',
      content: 'Standard implementation takes 4-6 weeks, including requirements gathering, configuration, testing, and training. Enterprise deployments may require 8-12 weeks for full integration.',
      category: 'Process',
    },
    {
      title: 'Security & Compliance',
      content: 'We maintain SOC 2 Type II, ISO 27001, and GDPR compliance. All data is encrypted at rest and in transit using AES-256 encryption standards.',
      category: 'Security',
    },
    {
      title: 'Support & SLA',
      content: 'Enterprise customers receive 24/7 dedicated support with a 99.9% uptime SLA. Response times: Critical issues within 1 hour, High priority within 4 hours.',
      category: 'Support',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-8 md:p-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-1 bg-blue-600 rounded-full" />
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-slate-600 pl-5">
            Find answers to common questions about our enterprise services
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          {items.map((item, index) => (
            <div
              key={index}
              className={`${index !== 0 ? 'border-t border-slate-200' : ''}`}
            >
              <button
                onClick={() => toggleItem(index)}
                className={`flex w-full items-center gap-4 p-5 text-left transition-colors hover:bg-slate-50 sm:p-6 ${
                  openItems.includes(index) ? 'bg-slate-50' : ''
                }`}
              >
                <span className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                  {item.category}
                </span>
                <span className="flex-1 text-base font-medium text-slate-900 sm:text-lg">
                  {item.title}
                </span>
                <svg
                  className={`h-5 w-5 text-slate-400 transition-transform duration-200 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 ease-out ${
                  openItems.includes(index) ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="border-t border-slate-100 bg-slate-50 px-5 py-4 sm:px-6">
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {item.content}
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                      Learn more →
                    </button>
                    <button className="text-sm text-slate-500 hover:text-slate-700">
                      Contact sales
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-blue-100 bg-blue-50 p-5">
          <div>
            <h3 className="font-medium text-blue-900">Need more information?</h3>
            <p className="text-sm text-blue-700">Our team is ready to answer your questions.</p>
          </div>
          <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
