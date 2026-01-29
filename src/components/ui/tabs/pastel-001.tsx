import { Tabs, TabList, Tab, TabPanels, TabPanel } from './index';

export default function PastelTabs() {
  return (
    <div className="min-h-[400px] bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 p-8">
      <div className="max-w-3xl mx-auto">
        <Tabs defaultValue="overview">
          <TabList className="flex gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-3xl shadow-sm">
            <Tab
              value="overview"
              className="flex-1 px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-300 aria-selected:bg-pink-200 aria-selected:text-gray-700 aria-selected:shadow-md text-gray-500 hover:bg-white/50"
            >
              Overview
            </Tab>
            <Tab
              value="features"
              className="flex-1 px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-300 aria-selected:bg-purple-200 aria-selected:text-gray-700 aria-selected:shadow-md text-gray-500 hover:bg-white/50"
            >
              Features
            </Tab>
            <Tab
              value="pricing"
              className="flex-1 px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-300 aria-selected:bg-blue-200 aria-selected:text-gray-700 aria-selected:shadow-md text-gray-500 hover:bg-white/50"
            >
              Pricing
            </Tab>
            <Tab
              value="faq"
              className="flex-1 px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-300 aria-selected:bg-green-200 aria-selected:text-gray-700 aria-selected:shadow-md text-gray-500 hover:bg-white/50"
            >
              FAQ
            </Tab>
          </TabList>

          <TabPanels className="mt-6">
            <TabPanel value="overview" className="p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-sm">
              <h3 className="text-2xl font-semibold text-pink-600 mb-4">Overview</h3>
              <p className="text-gray-600 leading-relaxed">
                Soft, soothing colors that create a calm and friendly atmosphere. Perfect for wellness, lifestyle, and creative brands.
              </p>
            </TabPanel>

            <TabPanel value="features" className="p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-sm">
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">Features</h3>
              <p className="text-gray-600 leading-relaxed">
                Gentle gradients, rounded corners, and muted tones work together to create approachable, inviting interfaces.
              </p>
            </TabPanel>

            <TabPanel value="pricing" className="p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-sm">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Pricing</h3>
              <p className="text-gray-600 leading-relaxed">
                Delightful design at any budget. Pastel palettes bring joy without overwhelming visual complexity.
              </p>
            </TabPanel>

            <TabPanel value="faq" className="p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-sm">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">FAQ</h3>
              <p className="text-gray-600 leading-relaxed">
                Pastels pair well with white space. Use darker text for readability while maintaining the soft aesthetic.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
