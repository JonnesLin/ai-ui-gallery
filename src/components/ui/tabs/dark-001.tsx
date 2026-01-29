import { Tabs, TabList, Tab, TabPanels, TabPanel } from './index';

export default function DarkTabs() {
  return (
    <div className="min-h-[400px] bg-[#0a0a0f] p-8">
      <div className="max-w-3xl mx-auto">
        <Tabs defaultValue="overview">
          <TabList className="flex gap-1 p-1 bg-[#16161d] rounded-lg border border-[#2a2a35]">
            <Tab
              value="overview"
              className="flex-1 px-4 py-3 text-sm font-medium rounded-md transition-all duration-200 aria-selected:bg-[#2a2a35] aria-selected:text-white text-[#6b7280] hover:text-[#9ca3af] hover:bg-[#1e1e26]"
            >
              Overview
            </Tab>
            <Tab
              value="features"
              className="flex-1 px-4 py-3 text-sm font-medium rounded-md transition-all duration-200 aria-selected:bg-[#2a2a35] aria-selected:text-white text-[#6b7280] hover:text-[#9ca3af] hover:bg-[#1e1e26]"
            >
              Features
            </Tab>
            <Tab
              value="pricing"
              className="flex-1 px-4 py-3 text-sm font-medium rounded-md transition-all duration-200 aria-selected:bg-[#2a2a35] aria-selected:text-white text-[#6b7280] hover:text-[#9ca3af] hover:bg-[#1e1e26]"
            >
              Pricing
            </Tab>
            <Tab
              value="faq"
              className="flex-1 px-4 py-3 text-sm font-medium rounded-md transition-all duration-200 aria-selected:bg-[#2a2a35] aria-selected:text-white text-[#6b7280] hover:text-[#9ca3af] hover:bg-[#1e1e26]"
            >
              FAQ
            </Tab>
          </TabList>

          <TabPanels className="mt-6">
            <TabPanel value="overview" className="p-8 bg-[#16161d] rounded-lg border border-[#2a2a35]">
              <h3 className="text-2xl font-semibold text-white mb-4">Overview</h3>
              <p className="text-[#9ca3af] leading-relaxed">
                Dark mode reduces eye strain and saves battery on OLED screens. A sophisticated choice for modern interfaces.
              </p>
            </TabPanel>

            <TabPanel value="features" className="p-8 bg-[#16161d] rounded-lg border border-[#2a2a35]">
              <h3 className="text-2xl font-semibold text-white mb-4">Features</h3>
              <p className="text-[#9ca3af] leading-relaxed">
                Deep blacks with subtle borders create visual hierarchy. Perfect for content-focused applications.
              </p>
            </TabPanel>

            <TabPanel value="pricing" className="p-8 bg-[#16161d] rounded-lg border border-[#2a2a35]">
              <h3 className="text-2xl font-semibold text-white mb-4">Pricing</h3>
              <p className="text-[#9ca3af] leading-relaxed">
                Professional aesthetics that command attention. Dark themes convey sophistication and modernity.
              </p>
            </TabPanel>

            <TabPanel value="faq" className="p-8 bg-[#16161d] rounded-lg border border-[#2a2a35]">
              <h3 className="text-2xl font-semibold text-white mb-4">FAQ</h3>
              <p className="text-[#9ca3af] leading-relaxed">
                Ensure sufficient contrast between text and background. Use accent colors sparingly for emphasis.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
