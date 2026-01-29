import { Tabs, TabList, Tab, TabPanels, TabPanel } from './index';

export default function MinimalistTabs() {
  return (
    <div className="min-h-[400px] bg-white p-8">
      <div className="max-w-3xl mx-auto">
        <Tabs defaultValue="overview">
          <TabList className="flex border-b border-neutral-200">
            <Tab value="overview" className="group relative px-6 py-3 text-sm font-medium tracking-wide transition-colors">
              <span className="text-neutral-400 group-aria-selected:text-neutral-900 group-hover:text-neutral-600 transition-colors">
                Overview
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-px bg-neutral-900 opacity-0 group-aria-selected:opacity-100 transition-opacity" />
            </Tab>
            <Tab value="features" className="group relative px-6 py-3 text-sm font-medium tracking-wide transition-colors">
              <span className="text-neutral-400 group-aria-selected:text-neutral-900 group-hover:text-neutral-600 transition-colors">
                Features
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-px bg-neutral-900 opacity-0 group-aria-selected:opacity-100 transition-opacity" />
            </Tab>
            <Tab value="pricing" className="group relative px-6 py-3 text-sm font-medium tracking-wide transition-colors">
              <span className="text-neutral-400 group-aria-selected:text-neutral-900 group-hover:text-neutral-600 transition-colors">
                Pricing
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-px bg-neutral-900 opacity-0 group-aria-selected:opacity-100 transition-opacity" />
            </Tab>
            <Tab value="faq" className="group relative px-6 py-3 text-sm font-medium tracking-wide transition-colors">
              <span className="text-neutral-400 group-aria-selected:text-neutral-900 group-hover:text-neutral-600 transition-colors">
                FAQ
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-px bg-neutral-900 opacity-0 group-aria-selected:opacity-100 transition-opacity" />
            </Tab>
          </TabList>

          <TabPanels className="mt-8">
            <TabPanel value="overview" className="text-neutral-600 leading-relaxed">
              <h3 className="text-2xl font-light text-neutral-900 mb-4">Overview</h3>
              <p>A clean and simple approach to design. Less visual noise means better focus on what truly matters.</p>
            </TabPanel>

            <TabPanel value="features" className="text-neutral-600 leading-relaxed">
              <h3 className="text-2xl font-light text-neutral-900 mb-4">Features</h3>
              <p>Essential functionality without unnecessary complexity. Every element serves a purpose.</p>
            </TabPanel>

            <TabPanel value="pricing" className="text-neutral-600 leading-relaxed">
              <h3 className="text-2xl font-light text-neutral-900 mb-4">Pricing</h3>
              <p>Transparent and straightforward pricing. No hidden fees, no surprises.</p>
            </TabPanel>

            <TabPanel value="faq" className="text-neutral-600 leading-relaxed">
              <h3 className="text-2xl font-light text-neutral-900 mb-4">FAQ</h3>
              <p>Common questions answered with clarity and precision.</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
