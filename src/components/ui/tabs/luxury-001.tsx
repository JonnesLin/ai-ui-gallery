import { Tabs, TabList, Tab, TabPanels, TabPanel } from './index';

export default function LuxuryTabs() {
  return (
    <div className="min-h-[400px] bg-[#1a1a1a] p-8">
      <div className="max-w-3xl mx-auto">
        <Tabs defaultValue="overview">
          <TabList className="flex border-b border-[#d4af37]/30">
            <Tab
              value="overview"
              className="group relative px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] transition-all aria-selected:text-[#d4af37] text-[#8a8a8a] hover:text-[#d4af37]/70"
            >
              Overview
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 group-aria-selected:opacity-100" />
            </Tab>
            <Tab
              value="features"
              className="group relative px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] transition-all aria-selected:text-[#d4af37] text-[#8a8a8a] hover:text-[#d4af37]/70"
            >
              Features
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 group-aria-selected:opacity-100" />
            </Tab>
            <Tab
              value="pricing"
              className="group relative px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] transition-all aria-selected:text-[#d4af37] text-[#8a8a8a] hover:text-[#d4af37]/70"
            >
              Pricing
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 group-aria-selected:opacity-100" />
            </Tab>
            <Tab
              value="faq"
              className="group relative px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] transition-all aria-selected:text-[#d4af37] text-[#8a8a8a] hover:text-[#d4af37]/70"
            >
              FAQ
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 group-aria-selected:opacity-100" />
            </Tab>
          </TabList>

          <TabPanels className="mt-12">
            <TabPanel value="overview" className="p-10 bg-gradient-to-b from-[#1f1f1f] to-[#1a1a1a] border border-[#d4af37]/20">
              <h3 className="text-2xl font-light text-[#d4af37] mb-6 tracking-wide">Overview</h3>
              <p className="text-[#a0a0a0] leading-loose font-light tracking-wide">
                Refined elegance meets sophisticated design. Every detail crafted for those who appreciate the finer things in life.
              </p>
            </TabPanel>

            <TabPanel value="features" className="p-10 bg-gradient-to-b from-[#1f1f1f] to-[#1a1a1a] border border-[#d4af37]/20">
              <h3 className="text-2xl font-light text-[#d4af37] mb-6 tracking-wide">Features</h3>
              <p className="text-[#a0a0a0] leading-loose font-light tracking-wide">
                Gold accents, rich typography, and generous spacing create an atmosphere of exclusivity and prestige.
              </p>
            </TabPanel>

            <TabPanel value="pricing" className="p-10 bg-gradient-to-b from-[#1f1f1f] to-[#1a1a1a] border border-[#d4af37]/20">
              <h3 className="text-2xl font-light text-[#d4af37] mb-6 tracking-wide">Pricing</h3>
              <p className="text-[#a0a0a0] leading-loose font-light tracking-wide">
                Investment-worthy aesthetics for discerning clients. Premium experiences deserve premium presentation.
              </p>
            </TabPanel>

            <TabPanel value="faq" className="p-10 bg-gradient-to-b from-[#1f1f1f] to-[#1a1a1a] border border-[#d4af37]/20">
              <h3 className="text-2xl font-light text-[#d4af37] mb-6 tracking-wide">FAQ</h3>
              <p className="text-[#a0a0a0] leading-loose font-light tracking-wide">
                Luxury design whispers rather than shouts. Restraint and refinement distinguish class from mere expense.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
