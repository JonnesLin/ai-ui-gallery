import { Tabs, TabList, Tab, TabPanels, TabPanel } from './index';

export default function NatureTabs() {
  const tabs = [
    { value: 'overview', label: 'Overview', icon: '🌿', headerIcon: '🌲' },
    { value: 'features', label: 'Features', icon: '🌸', headerIcon: '🌱' },
    { value: 'pricing', label: 'Pricing', icon: '🌻', headerIcon: '🌾' },
    { value: 'faq', label: 'FAQ', icon: '🍃', headerIcon: '🌺' },
  ];

  return (
    <div className="min-h-[400px] bg-gradient-to-b from-green-50 to-emerald-100 p-8">
      <div className="max-w-3xl mx-auto">
        <Tabs defaultValue="overview">
          <TabList className="flex gap-2 p-2 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-green-200">
            {tabs.map((tab) => (
              <Tab
                key={tab.value}
                value={tab.value}
                className="flex-1 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 aria-selected:bg-gradient-to-r aria-selected:from-green-500 aria-selected:to-emerald-600 aria-selected:text-white aria-selected:shadow-md text-green-700 hover:bg-green-100"
              >
                <span>{tab.icon}</span>
                {tab.label}
              </Tab>
            ))}
          </TabList>

          <TabPanels className="mt-6">
            <TabPanel value="overview" className="p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-green-200">
              <h3 className="text-2xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                <span className="text-3xl">🌲</span> Overview
              </h3>
              <p className="text-green-700 leading-relaxed">
                Organic shapes and earthy tones create harmony with nature. Perfect for eco-friendly brands, wellness apps, and sustainable products.
              </p>
            </TabPanel>

            <TabPanel value="features" className="p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-green-200">
              <h3 className="text-2xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                <span className="text-3xl">🌱</span> Features
              </h3>
              <p className="text-green-700 leading-relaxed">
                Green palettes, leaf motifs, and natural textures evoke growth, freshness, and environmental consciousness.
              </p>
            </TabPanel>

            <TabPanel value="pricing" className="p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-green-200">
              <h3 className="text-2xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                <span className="text-3xl">🌾</span> Pricing
              </h3>
              <p className="text-green-700 leading-relaxed">
                Sustainable design practices that dont cost the earth. Eco-conscious aesthetics accessible to all.
              </p>
            </TabPanel>

            <TabPanel value="faq" className="p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-green-200">
              <h3 className="text-2xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                <span className="text-3xl">🌺</span> FAQ
              </h3>
              <p className="text-green-700 leading-relaxed">
                Nature-inspired design should feel authentic. Avoid cliches by focusing on subtle, genuine natural elements.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
