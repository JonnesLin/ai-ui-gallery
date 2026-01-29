import { Tabs, TabList, Tab, TabPanels, TabPanel } from './index';

export default function GlassmorphismTabs() {
  return (
    <div className="min-h-[400px] bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-8">
      <div className="max-w-3xl mx-auto">
        <Tabs defaultValue="overview">
          <TabList className="flex gap-2 p-2 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
            <Tab
              value="overview"
              className="flex-1 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 aria-selected:bg-white/30 aria-selected:text-white aria-selected:shadow-lg aria-selected:backdrop-blur-sm text-white/70 hover:text-white hover:bg-white/10"
            >
              Overview
            </Tab>
            <Tab
              value="features"
              className="flex-1 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 aria-selected:bg-white/30 aria-selected:text-white aria-selected:shadow-lg aria-selected:backdrop-blur-sm text-white/70 hover:text-white hover:bg-white/10"
            >
              Features
            </Tab>
            <Tab
              value="pricing"
              className="flex-1 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 aria-selected:bg-white/30 aria-selected:text-white aria-selected:shadow-lg aria-selected:backdrop-blur-sm text-white/70 hover:text-white hover:bg-white/10"
            >
              Pricing
            </Tab>
            <Tab
              value="faq"
              className="flex-1 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 aria-selected:bg-white/30 aria-selected:text-white aria-selected:shadow-lg aria-selected:backdrop-blur-sm text-white/70 hover:text-white hover:bg-white/10"
            >
              FAQ
            </Tab>
          </TabList>

          <TabPanels className="mt-6">
            <TabPanel value="overview" className="p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 text-white">
              <h3 className="text-2xl font-semibold mb-4">Overview</h3>
              <p className="text-white/80 leading-relaxed">
                Experience the beauty of translucent interfaces. Glass-like surfaces create depth and hierarchy while maintaining visual elegance.
              </p>
            </TabPanel>

            <TabPanel value="features" className="p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 text-white">
              <h3 className="text-2xl font-semibold mb-4">Features</h3>
              <p className="text-white/80 leading-relaxed">
                Blur effects, transparency, and subtle borders combine to create stunning visual experiences that feel modern and refined.
              </p>
            </TabPanel>

            <TabPanel value="pricing" className="p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 text-white">
              <h3 className="text-2xl font-semibold mb-4">Pricing</h3>
              <p className="text-white/80 leading-relaxed">
                Premium aesthetics at accessible prices. Elevate your designs without breaking the budget.
              </p>
            </TabPanel>

            <TabPanel value="faq" className="p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 text-white">
              <h3 className="text-2xl font-semibold mb-4">FAQ</h3>
              <p className="text-white/80 leading-relaxed">
                Glassmorphism works best on colorful backgrounds. Ensure sufficient contrast for accessibility compliance.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
