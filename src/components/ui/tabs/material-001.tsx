import { Tabs, TabList, Tab, TabPanels, TabPanel } from './index';

export default function MaterialTabs() {
  const tabs = [
    { value: 'overview', label: 'Overview' },
    { value: 'features', label: 'Features' },
    { value: 'pricing', label: 'Pricing' },
    { value: 'faq', label: 'FAQ' },
  ];

  return (
    <div className="min-h-[400px] bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <Tabs defaultValue="overview">
          <div className="bg-indigo-600 rounded-t-lg shadow-lg">
            <TabList className="flex relative">
              {tabs.map((tab, index) => (
                <Tab
                  key={tab.value}
                  value={tab.value}
                  className="flex-1 px-6 py-4 text-sm font-medium uppercase tracking-wide transition-colors relative z-10 aria-selected:text-white text-indigo-200 hover:text-white"
                >
                  {tab.label}
                </Tab>
              ))}
              <span
                className="absolute bottom-0 h-0.5 bg-white transition-all duration-300 ease-out"
                style={{
                  left: `${tabs.findIndex(t => t.value === 'overview') * 25}%`,
                  width: '25%',
                }}
              />
            </TabList>
          </div>

          <div className="bg-white rounded-b-lg shadow-lg overflow-hidden">
            <TabPanels className="p-8">
              <TabPanel value="overview" className="animate-[fadeIn_0.3s_ease-out]">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Overview</h3>
                <p className="text-gray-600 leading-relaxed">
                  Material Design uses tactile surfaces, bold graphics, and meaningful motion. Inspired by paper and ink, it creates intuitive, unified experiences.
                </p>
              </TabPanel>

              <TabPanel value="features" className="animate-[fadeIn_0.3s_ease-out]">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Features</h3>
                <p className="text-gray-600 leading-relaxed">
                  Elevation through shadows, responsive animations, and a systematic color palette create consistent, delightful interfaces.
                </p>
              </TabPanel>

              <TabPanel value="pricing" className="animate-[fadeIn_0.3s_ease-out]">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Pricing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Google-quality design principles accessible to all. Build beautiful products with a proven design system.
                </p>
              </TabPanel>

              <TabPanel value="faq" className="animate-[fadeIn_0.3s_ease-out]">
                <h3 className="text-xl font-medium text-gray-900 mb-4">FAQ</h3>
                <p className="text-gray-600 leading-relaxed">
                  Material Design provides guidelines, not restrictions. Adapt the system to your brand while maintaining usability principles.
                </p>
              </TabPanel>
            </TabPanels>

            <div className="px-8 pb-6 flex justify-end">
              <button className="w-12 h-12 rounded-full bg-indigo-600 text-white shadow-lg hover:shadow-xl hover:bg-indigo-700 transition-all flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
