import { Tabs, TabList, Tab, TabPanels, TabPanel } from './index';

export default function NeonTabs() {
  return (
    <div className="min-h-[400px] bg-black p-8">
      <div className="max-w-3xl mx-auto">
        <Tabs defaultValue="overview">
          <TabList className="flex gap-2 p-2 bg-gray-950 rounded-lg border border-gray-800">
            <Tab
              value="overview"
              className="flex-1 px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-md transition-all duration-300 aria-selected:text-pink-500 aria-selected:shadow-[0_0_20px_rgba(236,72,153,0.5)] aria-selected:bg-gray-900 aria-selected:border aria-selected:border-pink-500 text-gray-500 hover:text-gray-300"
            >
              Overview
            </Tab>
            <Tab
              value="features"
              className="flex-1 px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-md transition-all duration-300 aria-selected:text-purple-500 aria-selected:shadow-[0_0_20px_rgba(168,85,247,0.5)] aria-selected:bg-gray-900 aria-selected:border aria-selected:border-purple-500 text-gray-500 hover:text-gray-300"
            >
              Features
            </Tab>
            <Tab
              value="pricing"
              className="flex-1 px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-md transition-all duration-300 aria-selected:text-cyan-400 aria-selected:shadow-[0_0_20px_rgba(34,211,238,0.5)] aria-selected:bg-gray-900 aria-selected:border aria-selected:border-cyan-400 text-gray-500 hover:text-gray-300"
            >
              Pricing
            </Tab>
            <Tab
              value="faq"
              className="flex-1 px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-md transition-all duration-300 aria-selected:text-green-400 aria-selected:shadow-[0_0_20px_rgba(74,222,128,0.5)] aria-selected:bg-gray-900 aria-selected:border aria-selected:border-green-400 text-gray-500 hover:text-gray-300"
            >
              FAQ
            </Tab>
          </TabList>

          <TabPanels className="mt-6">
            <TabPanel value="overview" className="p-8 bg-gray-950 rounded-lg border border-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all duration-300">
              <h3 className="text-2xl font-bold text-pink-500 mb-4 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">Overview</h3>
              <p className="text-gray-300 leading-relaxed">
                Electric glow that demands attention. Neon aesthetics bring nightlife energy and urban edge to digital interfaces.
              </p>
            </TabPanel>

            <TabPanel value="features" className="p-8 bg-gray-950 rounded-lg border border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300">
              <h3 className="text-2xl font-bold text-purple-500 mb-4 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">Features</h3>
              <p className="text-gray-300 leading-relaxed">
                Vibrant colors against dark backgrounds create striking contrast. Glowing effects add dimension and excitement.
              </p>
            </TabPanel>

            <TabPanel value="pricing" className="p-8 bg-gray-950 rounded-lg border border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">Pricing</h3>
              <p className="text-gray-300 leading-relaxed">
                Light up your brand without burning through budget. Electrifying aesthetics at accessible prices.
              </p>
            </TabPanel>

            <TabPanel value="faq" className="p-8 bg-gray-950 rounded-lg border border-green-400 shadow-[0_0_20px_rgba(74,222,128,0.5)] transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-4 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]">FAQ</h3>
              <p className="text-gray-300 leading-relaxed">
                Neon works best as accent, not everywhere. Use glow effects sparingly to maintain their impact.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
