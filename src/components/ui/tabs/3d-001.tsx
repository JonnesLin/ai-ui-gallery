import { Tabs, TabList, Tab, TabPanels, TabPanel } from './index';

export default function ThreeDTabs() {
  return (
    <div className="min-h-[400px] bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-8" style={{ perspective: '1000px' }}>
      <div className="max-w-3xl mx-auto">
        <Tabs defaultValue="overview">
          <TabList className="flex gap-2 p-2 bg-white rounded-xl shadow-lg" style={{ transform: 'rotateX(5deg)', transformStyle: 'preserve-3d' }}>
            <Tab
              value="overview"
              className="flex-1 px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-300 aria-selected:bg-gradient-to-b aria-selected:from-indigo-500 aria-selected:to-indigo-600 aria-selected:text-white aria-selected:shadow-lg aria-selected:translate-y-[-2px] bg-gray-100 text-gray-600 hover:bg-gray-200 hover:translate-y-[-1px]"
              style={{
                boxShadow: '0 4px 12px -2px rgba(0,0,0,0.1)',
              }}
            >
              Overview
            </Tab>
            <Tab
              value="features"
              className="flex-1 px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-300 aria-selected:bg-gradient-to-b aria-selected:from-indigo-500 aria-selected:to-indigo-600 aria-selected:text-white aria-selected:shadow-lg aria-selected:translate-y-[-2px] bg-gray-100 text-gray-600 hover:bg-gray-200 hover:translate-y-[-1px]"
              style={{
                boxShadow: '0 4px 12px -2px rgba(0,0,0,0.1)',
              }}
            >
              Features
            </Tab>
            <Tab
              value="pricing"
              className="flex-1 px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-300 aria-selected:bg-gradient-to-b aria-selected:from-indigo-500 aria-selected:to-indigo-600 aria-selected:text-white aria-selected:shadow-lg aria-selected:translate-y-[-2px] bg-gray-100 text-gray-600 hover:bg-gray-200 hover:translate-y-[-1px]"
              style={{
                boxShadow: '0 4px 12px -2px rgba(0,0,0,0.1)',
              }}
            >
              Pricing
            </Tab>
            <Tab
              value="faq"
              className="flex-1 px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-300 aria-selected:bg-gradient-to-b aria-selected:from-indigo-500 aria-selected:to-indigo-600 aria-selected:text-white aria-selected:shadow-lg aria-selected:translate-y-[-2px] bg-gray-100 text-gray-600 hover:bg-gray-200 hover:translate-y-[-1px]"
              style={{
                boxShadow: '0 4px 12px -2px rgba(0,0,0,0.1)',
              }}
            >
              FAQ
            </Tab>
          </TabList>

          <TabPanels
            className="mt-8"
            style={{
              transform: 'rotateX(2deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            <TabPanel
              value="overview"
              className="p-8 bg-white rounded-2xl"
              style={{
                boxShadow: '0 20px 40px -12px rgba(0,0,0,0.15), 0 8px 16px -8px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)',
                transform: 'translateZ(20px)',
              }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Overview</h3>
              <p className="text-gray-600 leading-relaxed">
                Depth and dimension bring interfaces to life. 3D effects create engaging experiences that feel tangible and interactive.
              </p>
            </TabPanel>

            <TabPanel
              value="features"
              className="p-8 bg-white rounded-2xl"
              style={{
                boxShadow: '0 20px 40px -12px rgba(0,0,0,0.15), 0 8px 16px -8px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)',
                transform: 'translateZ(20px)',
              }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Features</h3>
              <p className="text-gray-600 leading-relaxed">
                Shadows, perspective, and layering create visual hierarchy. Elements appear to float and respond to interaction.
              </p>
            </TabPanel>

            <TabPanel
              value="pricing"
              className="p-8 bg-white rounded-2xl"
              style={{
                boxShadow: '0 20px 40px -12px rgba(0,0,0,0.15), 0 8px 16px -8px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)',
                transform: 'translateZ(20px)',
              }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Pricing</h3>
              <p className="text-gray-600 leading-relaxed">
                Add depth to your product without deep pockets. Modern CSS makes 3D effects accessible and performant.
              </p>
            </TabPanel>

            <TabPanel
              value="faq"
              className="p-8 bg-white rounded-2xl"
              style={{
                boxShadow: '0 20px 40px -12px rgba(0,0,0,0.15), 0 8px 16px -8px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)',
                transform: 'translateZ(20px)',
              }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">FAQ</h3>
              <p className="text-gray-600 leading-relaxed">
                3D effects should enhance usability, not hinder it. Keep transforms subtle and ensure accessibility.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
