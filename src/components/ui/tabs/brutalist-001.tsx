import { Tabs, TabList, Tab, TabPanels, TabPanel } from './index';

export default function BrutalistTabs() {
  return (
    <div className="min-h-[400px] bg-[#f5f5f0] p-8">
      <div className="max-w-3xl mx-auto">
        <Tabs defaultValue="overview">
          <TabList className="flex border-4 border-black">
            <Tab
              value="overview"
              className="flex-1 px-4 py-4 text-sm font-black uppercase tracking-wider transition-colors border-r-4 border-black aria-selected:bg-black aria-selected:text-[#f5f5f0] bg-[#f5f5f0] text-black hover:bg-yellow-300"
            >
              Overview
            </Tab>
            <Tab
              value="features"
              className="flex-1 px-4 py-4 text-sm font-black uppercase tracking-wider transition-colors border-r-4 border-black aria-selected:bg-black aria-selected:text-[#f5f5f0] bg-[#f5f5f0] text-black hover:bg-yellow-300"
            >
              Features
            </Tab>
            <Tab
              value="pricing"
              className="flex-1 px-4 py-4 text-sm font-black uppercase tracking-wider transition-colors border-r-4 border-black aria-selected:bg-black aria-selected:text-[#f5f5f0] bg-[#f5f5f0] text-black hover:bg-yellow-300"
            >
              Pricing
            </Tab>
            <Tab
              value="faq"
              className="flex-1 px-4 py-4 text-sm font-black uppercase tracking-wider transition-colors aria-selected:bg-black aria-selected:text-[#f5f5f0] bg-[#f5f5f0] text-black hover:bg-yellow-300"
            >
              FAQ
            </Tab>
          </TabList>

          <TabPanels className="mt-0">
            <TabPanel value="overview" className="p-8 border-4 border-t-0 border-black bg-white">
              <h3 className="text-3xl font-black uppercase text-black mb-4">OVERVIEW</h3>
              <p className="text-black font-mono leading-relaxed">
                RAW. UNFILTERED. HONEST. Brutalist design strips away decoration to reveal pure function. No pretense, just purpose.
              </p>
            </TabPanel>

            <TabPanel value="features" className="p-8 border-4 border-t-0 border-black bg-white">
              <h3 className="text-3xl font-black uppercase text-black mb-4">FEATURES</h3>
              <p className="text-black font-mono leading-relaxed">
                BOLD TYPOGRAPHY. STARK CONTRASTS. GEOMETRIC SHAPES. Every element demands attention through sheer visual weight.
              </p>
            </TabPanel>

            <TabPanel value="pricing" className="p-8 border-4 border-t-0 border-black bg-white">
              <h3 className="text-3xl font-black uppercase text-black mb-4">PRICING</h3>
              <p className="text-black font-mono leading-relaxed">
                NO FRILLS MEANS LOWER COSTS. Brutalism rejects expensive aesthetics for accessible, democratic design.
              </p>
            </TabPanel>

            <TabPanel value="faq" className="p-8 border-4 border-t-0 border-black bg-white">
              <h3 className="text-3xl font-black uppercase text-black mb-4">FAQ</h3>
              <p className="text-black font-mono leading-relaxed">
                BRUTALISM CHALLENGES CONVENTION. It forces users to engage with content, not decoration. Function over form.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
