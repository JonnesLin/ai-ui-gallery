import { Tabs, TabList, Tab, TabPanels, TabPanel } from './index';

export default function NeumorphismTabs() {
  return (
    <div className="min-h-[400px] bg-[#e0e5ec] p-8">
      <div className="max-w-3xl mx-auto">
        <Tabs defaultValue="overview">
          <TabList className="flex gap-3 p-3 rounded-2xl bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#a3b1c6,inset_-8px_-8px_16px_#ffffff]">
            <Tab
              value="overview"
              className="flex-1 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 aria-selected:bg-[#e0e5ec] aria-selected:shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff] aria-selected:text-[#6b7280] bg-[#e0e5ec] shadow-[6px_6px_12px_#a3b1c6,-6px_-6px_12px_#ffffff] text-[#9ca3af] hover:text-[#6b7280]"
            >
              Overview
            </Tab>
            <Tab
              value="features"
              className="flex-1 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 aria-selected:bg-[#e0e5ec] aria-selected:shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff] aria-selected:text-[#6b7280] bg-[#e0e5ec] shadow-[6px_6px_12px_#a3b1c6,-6px_-6px_12px_#ffffff] text-[#9ca3af] hover:text-[#6b7280]"
            >
              Features
            </Tab>
            <Tab
              value="pricing"
              className="flex-1 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 aria-selected:bg-[#e0e5ec] aria-selected:shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff] aria-selected:text-[#6b7280] bg-[#e0e5ec] shadow-[6px_6px_12px_#a3b1c6,-6px_-6px_12px_#ffffff] text-[#9ca3af] hover:text-[#6b7280]"
            >
              Pricing
            </Tab>
            <Tab
              value="faq"
              className="flex-1 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 aria-selected:bg-[#e0e5ec] aria-selected:shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff] aria-selected:text-[#6b7280] bg-[#e0e5ec] shadow-[6px_6px_12px_#a3b1c6,-6px_-6px_12px_#ffffff] text-[#9ca3af] hover:text-[#6b7280]"
            >
              FAQ
            </Tab>
          </TabList>

          <TabPanels className="mt-8">
            <TabPanel value="overview" className="p-8 rounded-2xl bg-[#e0e5ec] shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff]">
              <h3 className="text-2xl font-semibold text-[#4b5563] mb-4">Overview</h3>
              <p className="text-[#6b7280] leading-relaxed">
                Soft UI design that mimics physical surfaces. Elements appear to extrude from or press into the background.
              </p>
            </TabPanel>

            <TabPanel value="features" className="p-8 rounded-2xl bg-[#e0e5ec] shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff]">
              <h3 className="text-2xl font-semibold text-[#4b5563] mb-4">Features</h3>
              <p className="text-[#6b7280] leading-relaxed">
                Subtle shadows create depth and tactile feel. Perfect for interfaces that need a soft, premium appearance.
              </p>
            </TabPanel>

            <TabPanel value="pricing" className="p-8 rounded-2xl bg-[#e0e5ec] shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff]">
              <h3 className="text-2xl font-semibold text-[#4b5563] mb-4">Pricing</h3>
              <p className="text-[#6b7280] leading-relaxed">
                Elegant design choices that add value. Premium aesthetics without premium complexity.
              </p>
            </TabPanel>

            <TabPanel value="faq" className="p-8 rounded-2xl bg-[#e0e5ec] shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff]">
              <h3 className="text-2xl font-semibold text-[#4b5563] mb-4">FAQ</h3>
              <p className="text-[#6b7280] leading-relaxed">
                Neumorphism works best with light backgrounds and requires careful attention to contrast ratios.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
