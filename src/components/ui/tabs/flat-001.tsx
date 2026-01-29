import { Tabs, TabList, Tab, TabPanels, TabPanel } from './index';

export default function FlatTabs() {
  return (
    <div className="min-h-[400px] bg-slate-100 p-8">
      <div className="max-w-3xl mx-auto">
        <Tabs defaultValue="overview">
          <TabList className="flex">
            <Tab
              value="overview"
              className="relative flex-1 px-4 py-4 text-sm font-bold text-white transition-colors aria-selected:bg-red-600 bg-red-500"
            >
              Overview
              <span className="aria-selected:block hidden absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-red-600" />
            </Tab>
            <Tab
              value="features"
              className="relative flex-1 px-4 py-4 text-sm font-bold text-white transition-colors aria-selected:bg-blue-600 bg-blue-500"
            >
              Features
              <span className="aria-selected:block hidden absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-blue-600" />
            </Tab>
            <Tab
              value="pricing"
              className="relative flex-1 px-4 py-4 text-sm font-bold text-white transition-colors aria-selected:bg-yellow-600 bg-yellow-500"
            >
              Pricing
              <span className="aria-selected:block hidden absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-yellow-600" />
            </Tab>
            <Tab
              value="faq"
              className="relative flex-1 px-4 py-4 text-sm font-bold text-white transition-colors aria-selected:bg-green-600 bg-green-500"
            >
              FAQ
              <span className="aria-selected:block hidden absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-green-600" />
            </Tab>
          </TabList>

          <TabPanels className="mt-0">
            <TabPanel value="overview" className="p-8 bg-red-600 text-white">
              <h3 className="text-2xl font-bold mb-4">Overview</h3>
              <p className="leading-relaxed opacity-90">
                No gradients, no shadows, no nonsense. Flat design embraces two-dimensional simplicity for maximum clarity.
              </p>
            </TabPanel>

            <TabPanel value="features" className="p-8 bg-blue-600 text-white">
              <h3 className="text-2xl font-bold mb-4">Features</h3>
              <p className="leading-relaxed opacity-90">
                Bold colors, clean typography, and sharp edges define the flat aesthetic. Every pixel is intentional.
              </p>
            </TabPanel>

            <TabPanel value="pricing" className="p-8 bg-yellow-600 text-white">
              <h3 className="text-2xl font-bold mb-4">Pricing</h3>
              <p className="leading-relaxed opacity-90">
                Simple design, simple pricing. No hidden complexity, no visual tricks, just honest value.
              </p>
            </TabPanel>

            <TabPanel value="faq" className="p-8 bg-green-600 text-white">
              <h3 className="text-2xl font-bold mb-4">FAQ</h3>
              <p className="leading-relaxed opacity-90">
                Flat design relies on color and spacing for hierarchy. Without shadows, layout precision becomes critical.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
