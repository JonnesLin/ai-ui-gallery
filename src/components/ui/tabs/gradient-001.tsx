import { Tabs, TabList, Tab, TabPanels, TabPanel } from './index';

export default function GradientTabs() {
  return (
    <div className="min-h-[400px] bg-slate-900 p-8">
      <div className="max-w-3xl mx-auto">
        <Tabs defaultValue="overview">
          <TabList className="flex gap-2 p-2 bg-slate-800/50 rounded-xl">
            <Tab
              value="overview"
              className="flex-1 px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-300 aria-selected:bg-gradient-to-r aria-selected:from-violet-600 aria-selected:via-purple-600 aria-selected:to-fuchsia-600 aria-selected:text-white aria-selected:shadow-lg aria-selected:shadow-purple-500/30 text-slate-400 hover:text-white hover:bg-slate-700/50"
            >
              Overview
            </Tab>
            <Tab
              value="features"
              className="flex-1 px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-300 aria-selected:bg-gradient-to-r aria-selected:from-violet-600 aria-selected:via-purple-600 aria-selected:to-fuchsia-600 aria-selected:text-white aria-selected:shadow-lg aria-selected:shadow-purple-500/30 text-slate-400 hover:text-white hover:bg-slate-700/50"
            >
              Features
            </Tab>
            <Tab
              value="pricing"
              className="flex-1 px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-300 aria-selected:bg-gradient-to-r aria-selected:from-violet-600 aria-selected:via-purple-600 aria-selected:to-fuchsia-600 aria-selected:text-white aria-selected:shadow-lg aria-selected:shadow-purple-500/30 text-slate-400 hover:text-white hover:bg-slate-700/50"
            >
              Pricing
            </Tab>
            <Tab
              value="faq"
              className="flex-1 px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-300 aria-selected:bg-gradient-to-r aria-selected:from-violet-600 aria-selected:via-purple-600 aria-selected:to-fuchsia-600 aria-selected:text-white aria-selected:shadow-lg aria-selected:shadow-purple-500/30 text-slate-400 hover:text-white hover:bg-slate-700/50"
            >
              FAQ
            </Tab>
          </TabList>

          <TabPanels className="mt-6">
            <TabPanel value="overview" className="relative p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-fuchsia-600/5 rounded-xl pointer-events-none" />
              <div className="relative">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-4">Overview</h3>
                <p className="text-slate-300 leading-relaxed">
                  Gradients add visual interest and guide attention. They create movement and energy in static designs.
                </p>
              </div>
            </TabPanel>

            <TabPanel value="features" className="relative p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-fuchsia-600/5 rounded-xl pointer-events-none" />
              <div className="relative">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-4">Features</h3>
                <p className="text-slate-300 leading-relaxed">
                  Multi-color transitions create depth and dimension. Perfect for brands that want to stand out.
                </p>
              </div>
            </TabPanel>

            <TabPanel value="pricing" className="relative p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-fuchsia-600/5 rounded-xl pointer-events-none" />
              <div className="relative">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-4">Pricing</h3>
                <p className="text-slate-300 leading-relaxed">
                  Premium visual effects that elevate your product. Make every pixel count with stunning gradients.
                </p>
              </div>
            </TabPanel>

            <TabPanel value="faq" className="relative p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-fuchsia-600/5 rounded-xl pointer-events-none" />
              <div className="relative">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-4">FAQ</h3>
                <p className="text-slate-300 leading-relaxed">
                  Use complementary colors for harmonious gradients. Avoid too many colors in a single gradient.
                </p>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
