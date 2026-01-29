import { Tabs, TabList, Tab, TabPanels, TabPanel } from './index';

export default function CyberpunkTabs() {
  return (
    <div className="min-h-[400px] bg-[#0d0d1a] p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,255,0.03)_2px,rgba(0,255,255,0.03)_4px)] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative">
        <Tabs defaultValue="overview">
          <TabList className="flex gap-1 p-1 bg-[#1a1a2e] border border-cyan-500/30">
            <Tab
              value="overview"
              className="relative flex-1 px-4 py-3 text-sm font-bold uppercase tracking-widest transition-all aria-selected:bg-gradient-to-r aria-selected:from-cyan-500 aria-selected:to-purple-500 aria-selected:text-black text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
              style={{ clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)' }}
            >
              Overview
            </Tab>
            <Tab
              value="features"
              className="relative flex-1 px-4 py-3 text-sm font-bold uppercase tracking-widest transition-all aria-selected:bg-gradient-to-r aria-selected:from-cyan-500 aria-selected:to-purple-500 aria-selected:text-black text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
              style={{ clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)' }}
            >
              Features
            </Tab>
            <Tab
              value="pricing"
              className="relative flex-1 px-4 py-3 text-sm font-bold uppercase tracking-widest transition-all aria-selected:bg-gradient-to-r aria-selected:from-cyan-500 aria-selected:to-purple-500 aria-selected:text-black text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
              style={{ clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)' }}
            >
              Pricing
            </Tab>
            <Tab
              value="faq"
              className="relative flex-1 px-4 py-3 text-sm font-bold uppercase tracking-widest transition-all aria-selected:bg-gradient-to-r aria-selected:from-cyan-500 aria-selected:to-purple-500 aria-selected:text-black text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
              style={{ clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)' }}
            >
              FAQ
            </Tab>
          </TabList>

          <TabPanels className="mt-4">
            <TabPanel
              value="overview"
              className="relative p-8 bg-[#1a1a2e]/80 border border-cyan-500/30"
              style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-purple-500/50" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-cyan-500/50" />
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">OVERVIEW</h3>
              <p className="text-cyan-100/80 leading-relaxed font-mono">
                &gt; SYSTEM INITIALIZED. Welcome to the neon-soaked future where technology meets rebellion.
              </p>
            </TabPanel>

            <TabPanel
              value="features"
              className="relative p-8 bg-[#1a1a2e]/80 border border-cyan-500/30"
              style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-purple-500/50" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-cyan-500/50" />
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">FEATURES</h3>
              <p className="text-cyan-100/80 leading-relaxed font-mono">
                &gt; NEON GLOWS. SHARP ANGLES. DIGITAL GRUNGE. High-tech aesthetics for the augmented age.
              </p>
            </TabPanel>

            <TabPanel
              value="pricing"
              className="relative p-8 bg-[#1a1a2e]/80 border border-cyan-500/30"
              style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-purple-500/50" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-cyan-500/50" />
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">PRICING</h3>
              <p className="text-cyan-100/80 leading-relaxed font-mono">
                &gt; ACCESS_GRANTED. Premium neural interfaces at street-level prices. Jack in today.
              </p>
            </TabPanel>

            <TabPanel
              value="faq"
              className="relative p-8 bg-[#1a1a2e]/80 border border-cyan-500/30"
              style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-purple-500/50" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-cyan-500/50" />
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">FAQ</h3>
              <p className="text-cyan-100/80 leading-relaxed font-mono">
                &gt; QUERY_PROCESSING. Cyberpunk blends sci-fi with noir. Use sparingly for maximum impact.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
