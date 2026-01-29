import { Tabs, TabList, Tab, TabPanels, TabPanel } from './index';

export default function MonochromeTabs() {
  return (
    <div className="min-h-[400px] bg-white p-8">
      <div className="max-w-3xl mx-auto">
        <Tabs defaultValue="overview">
          <TabList className="flex">
            <Tab
              value="overview"
              className="flex-1 px-4 py-4 text-sm font-medium tracking-wide transition-all border-b-2 aria-selected:border-black aria-selected:text-black aria-selected:bg-gray-50 border-gray-200 text-gray-400 hover:text-gray-600 hover:border-gray-300"
            >
              Overview
            </Tab>
            <Tab
              value="features"
              className="flex-1 px-4 py-4 text-sm font-medium tracking-wide transition-all border-b-2 aria-selected:border-black aria-selected:text-black aria-selected:bg-gray-50 border-gray-200 text-gray-400 hover:text-gray-600 hover:border-gray-300"
            >
              Features
            </Tab>
            <Tab
              value="pricing"
              className="flex-1 px-4 py-4 text-sm font-medium tracking-wide transition-all border-b-2 aria-selected:border-black aria-selected:text-black aria-selected:bg-gray-50 border-gray-200 text-gray-400 hover:text-gray-600 hover:border-gray-300"
            >
              Pricing
            </Tab>
            <Tab
              value="faq"
              className="flex-1 px-4 py-4 text-sm font-medium tracking-wide transition-all border-b-2 aria-selected:border-black aria-selected:text-black aria-selected:bg-gray-50 border-gray-200 text-gray-400 hover:text-gray-600 hover:border-gray-300"
            >
              FAQ
            </Tab>
          </TabList>

          <TabPanels className="mt-8">
            <TabPanel value="overview" className="p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-4">Overview</h3>
              <p className="text-gray-600 leading-relaxed">
                Pure black and white creates timeless elegance. Monochrome design strips away distraction to focus on content and typography.
              </p>
            </TabPanel>

            <TabPanel value="features" className="p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-4">Features</h3>
              <p className="text-gray-600 leading-relaxed">
                Without color as a crutch, every element must earn its place. Contrast, spacing, and form become paramount.
              </p>
            </TabPanel>

            <TabPanel value="pricing" className="p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-4">Pricing</h3>
              <p className="text-gray-600 leading-relaxed">
                Elegant simplicity that transcends trends. Monochrome design ages gracefully and adapts to any brand.
              </p>
            </TabPanel>

            <TabPanel value="faq" className="p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-4">FAQ</h3>
              <p className="text-gray-600 leading-relaxed">
                Monochrome requires strong visual hierarchy. Use weight, size, and spacing to guide the eye without color cues.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
