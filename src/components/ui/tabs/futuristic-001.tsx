import { Tabs, TabList, Tab, TabPanels, TabPanel } from './index';

export default function FuturisticTabs() {
  return (
    <div className="min-h-[400px] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-3xl mx-auto relative">
        <Tabs defaultValue="overview">
          <TabList className="flex gap-1 p-1 bg-slate-900/80 border border-blue-500/20 rounded-lg backdrop-blur-sm">
            <Tab
              value="overview"
              className="group relative flex-1 px-4 py-3 text-sm font-medium tracking-wider transition-all duration-300 overflow-hidden aria-selected:text-blue-100 text-blue-400/60 hover:text-blue-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-md opacity-0 group-aria-selected:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-aria-selected:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-aria-selected:opacity-100" />
              <span className="relative">Overview</span>
            </Tab>
            <Tab
              value="features"
              className="group relative flex-1 px-4 py-3 text-sm font-medium tracking-wider transition-all duration-300 overflow-hidden aria-selected:text-blue-100 text-blue-400/60 hover:text-blue-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-md opacity-0 group-aria-selected:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-aria-selected:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-aria-selected:opacity-100" />
              <span className="relative">Features</span>
            </Tab>
            <Tab
              value="pricing"
              className="group relative flex-1 px-4 py-3 text-sm font-medium tracking-wider transition-all duration-300 overflow-hidden aria-selected:text-blue-100 text-blue-400/60 hover:text-blue-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-md opacity-0 group-aria-selected:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-aria-selected:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-aria-selected:opacity-100" />
              <span className="relative">Pricing</span>
            </Tab>
            <Tab
              value="faq"
              className="group relative flex-1 px-4 py-3 text-sm font-medium tracking-wider transition-all duration-300 overflow-hidden aria-selected:text-blue-100 text-blue-400/60 hover:text-blue-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-md opacity-0 group-aria-selected:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-aria-selected:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-aria-selected:opacity-100" />
              <span className="relative">FAQ</span>
            </Tab>
          </TabList>

          <TabPanels className="mt-6">
            <TabPanel value="overview" className="relative p-8 bg-slate-900/60 backdrop-blur-sm border border-blue-500/20 rounded-lg">
              <div className="absolute top-4 right-4 flex gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse delay-100" />
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-200" />
              </div>
              <h3 className="text-2xl font-bold text-blue-100 mb-4 tracking-wide">Overview</h3>
              <p className="text-blue-200/70 leading-relaxed">
                Advanced interfaces designed for tomorrow. Sleek lines, holographic effects, and data-driven aesthetics define the future.
              </p>
            </TabPanel>

            <TabPanel value="features" className="relative p-8 bg-slate-900/60 backdrop-blur-sm border border-blue-500/20 rounded-lg">
              <div className="absolute top-4 right-4 flex gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse delay-100" />
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-200" />
              </div>
              <h3 className="text-2xl font-bold text-blue-100 mb-4 tracking-wide">Features</h3>
              <p className="text-blue-200/70 leading-relaxed">
                Glowing accents, geometric patterns, and translucent layers create depth in a high-tech visual language.
              </p>
            </TabPanel>

            <TabPanel value="pricing" className="relative p-8 bg-slate-900/60 backdrop-blur-sm border border-blue-500/20 rounded-lg">
              <div className="absolute top-4 right-4 flex gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse delay-100" />
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-200" />
              </div>
              <h3 className="text-2xl font-bold text-blue-100 mb-4 tracking-wide">Pricing</h3>
              <p className="text-blue-200/70 leading-relaxed">
                Cutting-edge design for forward-thinking brands. Innovation at a scale that suits your mission.
              </p>
            </TabPanel>

            <TabPanel value="faq" className="relative p-8 bg-slate-900/60 backdrop-blur-sm border border-blue-500/20 rounded-lg">
              <div className="absolute top-4 right-4 flex gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse delay-100" />
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-200" />
              </div>
              <h3 className="text-2xl font-bold text-blue-100 mb-4 tracking-wide">FAQ</h3>
              <p className="text-blue-200/70 leading-relaxed">
                Futuristic design balances cool aesthetics with warm usability. Technology should feel empowering, not cold.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
