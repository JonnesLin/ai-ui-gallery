import { Tabs, TabList, Tab, TabPanels, TabPanel } from './index';

export default function RetroTabs() {
  return (
    <div className="min-h-[400px] bg-[#fef3c7] p-8">
      <div className="max-w-3xl mx-auto">
        <Tabs defaultValue="overview">
          <TabList className="flex gap-1">
            <Tab
              value="overview"
              className="px-6 py-3 text-sm font-bold rounded-t-lg transition-all border-2 border-b-0 aria-selected:bg-[#fbbf24] aria-selected:border-[#92400e] aria-selected:text-[#78350f] aria-selected:shadow-[inset_0_-2px_0_0_#f59e0b] aria-selected:translate-y-0.5 bg-[#fde68a] border-[#d97706] text-[#92400e] hover:bg-[#fcd34d]"
            >
              Overview
            </Tab>
            <Tab
              value="features"
              className="px-6 py-3 text-sm font-bold rounded-t-lg transition-all border-2 border-b-0 aria-selected:bg-[#fbbf24] aria-selected:border-[#92400e] aria-selected:text-[#78350f] aria-selected:shadow-[inset_0_-2px_0_0_#f59e0b] aria-selected:translate-y-0.5 bg-[#fde68a] border-[#d97706] text-[#92400e] hover:bg-[#fcd34d]"
            >
              Features
            </Tab>
            <Tab
              value="pricing"
              className="px-6 py-3 text-sm font-bold rounded-t-lg transition-all border-2 border-b-0 aria-selected:bg-[#fbbf24] aria-selected:border-[#92400e] aria-selected:text-[#78350f] aria-selected:shadow-[inset_0_-2px_0_0_#f59e0b] aria-selected:translate-y-0.5 bg-[#fde68a] border-[#d97706] text-[#92400e] hover:bg-[#fcd34d]"
            >
              Pricing
            </Tab>
            <Tab
              value="faq"
              className="px-6 py-3 text-sm font-bold rounded-t-lg transition-all border-2 border-b-0 aria-selected:bg-[#fbbf24] aria-selected:border-[#92400e] aria-selected:text-[#78350f] aria-selected:shadow-[inset_0_-2px_0_0_#f59e0b] aria-selected:translate-y-0.5 bg-[#fde68a] border-[#d97706] text-[#92400e] hover:bg-[#fcd34d]"
            >
              FAQ
            </Tab>
          </TabList>

          <TabPanels className="mt-0">
            <TabPanel value="overview" className="p-8 bg-[#fbbf24] rounded-lg rounded-tl-none border-4 border-[#92400e] shadow-[4px_4px_0_0_#78350f]">
              <h3 className="text-2xl font-bold text-[#78350f] mb-4 font-serif">Overview</h3>
              <p className="text-[#92400e] leading-relaxed font-serif">
                Step back in time with warm colors and nostalgic aesthetics. Retro design evokes comfort and familiarity.
              </p>
            </TabPanel>

            <TabPanel value="features" className="p-8 bg-[#fbbf24] rounded-lg rounded-tl-none border-4 border-[#92400e] shadow-[4px_4px_0_0_#78350f]">
              <h3 className="text-2xl font-bold text-[#78350f] mb-4 font-serif">Features</h3>
              <p className="text-[#92400e] leading-relaxed font-serif">
                Vintage typography, warm palettes, and tactile shadows create designs that feel handcrafted and personal.
              </p>
            </TabPanel>

            <TabPanel value="pricing" className="p-8 bg-[#fbbf24] rounded-lg rounded-tl-none border-4 border-[#92400e] shadow-[4px_4px_0_0_#78350f]">
              <h3 className="text-2xl font-bold text-[#78350f] mb-4 font-serif">Pricing</h3>
              <p className="text-[#92400e] leading-relaxed font-serif">
                Timeless styles never go out of fashion. Invest in aesthetics that stand the test of time.
              </p>
            </TabPanel>

            <TabPanel value="faq" className="p-8 bg-[#fbbf24] rounded-lg rounded-tl-none border-4 border-[#92400e] shadow-[4px_4px_0_0_#78350f]">
              <h3 className="text-2xl font-bold text-[#78350f] mb-4 font-serif">FAQ</h3>
              <p className="text-[#92400e] leading-relaxed font-serif">
                Retro design works best when balanced with modern usability. Nostalgia should enhance, not hinder.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
