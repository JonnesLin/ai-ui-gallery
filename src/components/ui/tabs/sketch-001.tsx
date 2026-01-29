import { Tabs, TabList, Tab, TabPanels, TabPanel } from './index';

export default function SketchTabs() {
  return (
    <div className="min-h-[400px] bg-[#fefcf3] p-8" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h40v40H0V0zm1 1h38v38H1V1z\' fill=\'%23e5e5e5\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}>
      <div className="max-w-3xl mx-auto">
        <Tabs defaultValue="overview">
          <TabList className="flex gap-4 border-b-2 border-dashed border-gray-400 pb-2">
            <Tab
              value="overview"
              className="group relative px-4 py-2 text-base transition-all aria-selected:text-gray-900 aria-selected:font-bold text-gray-500 hover:text-gray-700"
              style={{ fontFamily: '"Comic Sans MS", "Chalkboard", cursive' }}
            >
              Overview
              <svg className="absolute -bottom-2.5 left-0 right-0 h-3 w-full opacity-0 group-aria-selected:opacity-100" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0 6 Q 25 0, 50 6 T 100 6" stroke="#374151" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </Tab>
            <Tab
              value="features"
              className="group relative px-4 py-2 text-base transition-all aria-selected:text-gray-900 aria-selected:font-bold text-gray-500 hover:text-gray-700"
              style={{ fontFamily: '"Comic Sans MS", "Chalkboard", cursive' }}
            >
              Features
              <svg className="absolute -bottom-2.5 left-0 right-0 h-3 w-full opacity-0 group-aria-selected:opacity-100" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0 6 Q 25 0, 50 6 T 100 6" stroke="#374151" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </Tab>
            <Tab
              value="pricing"
              className="group relative px-4 py-2 text-base transition-all aria-selected:text-gray-900 aria-selected:font-bold text-gray-500 hover:text-gray-700"
              style={{ fontFamily: '"Comic Sans MS", "Chalkboard", cursive' }}
            >
              Pricing
              <svg className="absolute -bottom-2.5 left-0 right-0 h-3 w-full opacity-0 group-aria-selected:opacity-100" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0 6 Q 25 0, 50 6 T 100 6" stroke="#374151" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </Tab>
            <Tab
              value="faq"
              className="group relative px-4 py-2 text-base transition-all aria-selected:text-gray-900 aria-selected:font-bold text-gray-500 hover:text-gray-700"
              style={{ fontFamily: '"Comic Sans MS", "Chalkboard", cursive' }}
            >
              FAQ
              <svg className="absolute -bottom-2.5 left-0 right-0 h-3 w-full opacity-0 group-aria-selected:opacity-100" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0 6 Q 25 0, 50 6 T 100 6" stroke="#374151" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </Tab>
          </TabList>

          <TabPanels className="mt-8">
            <TabPanel
              value="overview"
              className="relative p-8 bg-white border-2 border-gray-400"
              style={{
                borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
                boxShadow: '4px 4px 0 0 rgba(0,0,0,0.1)'
              }}
            >
              <div className="absolute top-2 right-2 text-gray-300 text-2xl">*</div>
              <div className="absolute bottom-2 left-2 text-gray-300 text-2xl">~</div>
              <h3 className="text-2xl text-gray-800 mb-4" style={{ fontFamily: '"Comic Sans MS", "Chalkboard", cursive' }}>Overview</h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: '"Comic Sans MS", "Chalkboard", cursive' }}>
                Hand-drawn aesthetics add warmth and personality. Perfect for creative projects, education, and brands that value authenticity.
              </p>
            </TabPanel>

            <TabPanel
              value="features"
              className="relative p-8 bg-white border-2 border-gray-400"
              style={{
                borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
                boxShadow: '4px 4px 0 0 rgba(0,0,0,0.1)'
              }}
            >
              <div className="absolute top-2 right-2 text-gray-300 text-2xl">*</div>
              <div className="absolute bottom-2 left-2 text-gray-300 text-2xl">~</div>
              <h3 className="text-2xl text-gray-800 mb-4" style={{ fontFamily: '"Comic Sans MS", "Chalkboard", cursive' }}>Features</h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: '"Comic Sans MS", "Chalkboard", cursive' }}>
                Wobbly lines, paper textures, and imperfect shapes create approachable designs that feel human and relatable.
              </p>
            </TabPanel>

            <TabPanel
              value="pricing"
              className="relative p-8 bg-white border-2 border-gray-400"
              style={{
                borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
                boxShadow: '4px 4px 0 0 rgba(0,0,0,0.1)'
              }}
            >
              <div className="absolute top-2 right-2 text-gray-300 text-2xl">*</div>
              <div className="absolute bottom-2 left-2 text-gray-300 text-2xl">~</div>
              <h3 className="text-2xl text-gray-800 mb-4" style={{ fontFamily: '"Comic Sans MS", "Chalkboard", cursive' }}>Pricing</h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: '"Comic Sans MS", "Chalkboard", cursive' }}>
                Charming design that wont break the bank. Authenticity is priceless, but our services arent!
              </p>
            </TabPanel>

            <TabPanel
              value="faq"
              className="relative p-8 bg-white border-2 border-gray-400"
              style={{
                borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
                boxShadow: '4px 4px 0 0 rgba(0,0,0,0.1)'
              }}
            >
              <div className="absolute top-2 right-2 text-gray-300 text-2xl">*</div>
              <div className="absolute bottom-2 left-2 text-gray-300 text-2xl">~</div>
              <h3 className="text-2xl text-gray-800 mb-4" style={{ fontFamily: '"Comic Sans MS", "Chalkboard", cursive' }}>FAQ</h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: '"Comic Sans MS", "Chalkboard", cursive' }}>
                Sketch style works best when intentional. Random imperfections should enhance, not distract from content.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
