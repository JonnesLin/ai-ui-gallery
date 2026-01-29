import { Tabs, TabList, Tab, TabPanels, TabPanel } from './index';

export default function CorporateTabs() {
  return (
    <div className="min-h-[400px] bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <Tabs defaultValue="overview">
          <TabList className="flex border-b-2 border-gray-200">
            <Tab
              value="overview"
              className="group relative px-6 py-4 text-sm font-semibold transition-all aria-selected:text-blue-600 text-gray-500 hover:text-gray-700"
            >
              Overview
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 -mb-0.5 opacity-0 group-aria-selected:opacity-100" />
            </Tab>
            <Tab
              value="features"
              className="group relative px-6 py-4 text-sm font-semibold transition-all aria-selected:text-blue-600 text-gray-500 hover:text-gray-700"
            >
              Features
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 -mb-0.5 opacity-0 group-aria-selected:opacity-100" />
            </Tab>
            <Tab
              value="pricing"
              className="group relative px-6 py-4 text-sm font-semibold transition-all aria-selected:text-blue-600 text-gray-500 hover:text-gray-700"
            >
              Pricing
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 -mb-0.5 opacity-0 group-aria-selected:opacity-100" />
            </Tab>
            <Tab
              value="faq"
              className="group relative px-6 py-4 text-sm font-semibold transition-all aria-selected:text-blue-600 text-gray-500 hover:text-gray-700"
            >
              FAQ
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 -mb-0.5 opacity-0 group-aria-selected:opacity-100" />
            </Tab>
          </TabList>

          <TabPanels className="mt-8">
            <TabPanel value="overview" className="p-8 bg-white rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Overview</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional and trustworthy design that conveys reliability. Perfect for enterprise solutions, financial services, and B2B applications.
              </p>
            </TabPanel>

            <TabPanel value="features" className="p-8 bg-white rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Features</h3>
              <p className="text-gray-600 leading-relaxed">
                Clean layouts, conservative colors, and clear hierarchy establish credibility and professionalism at every touchpoint.
              </p>
            </TabPanel>

            <TabPanel value="pricing" className="p-8 bg-white rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pricing</h3>
              <p className="text-gray-600 leading-relaxed">
                Enterprise-grade solutions with transparent pricing models. Scalable options designed for business growth.
              </p>
            </TabPanel>

            <TabPanel value="faq" className="p-8 bg-white rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">FAQ</h3>
              <p className="text-gray-600 leading-relaxed">
                Corporate design prioritizes clarity and function. Every element should serve a business purpose.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
