import { Tabs, TabList, Tab, TabPanels, TabPanel } from './index';

export default function PlayfulTabs() {
  const tabs = [
    { value: 'overview', label: 'Overview', emoji: '🎯' },
    { value: 'features', label: 'Features', emoji: '✨' },
    { value: 'pricing', label: 'Pricing', emoji: '💰' },
    { value: 'faq', label: 'FAQ', emoji: '❓' },
  ];

  return (
    <div className="min-h-[400px] bg-gradient-to-br from-yellow-100 via-orange-50 to-pink-100 p-8">
      <div className="max-w-3xl mx-auto">
        <Tabs defaultValue="overview">
          <TabList className="flex gap-2 p-2 bg-white rounded-full shadow-lg">
            {tabs.map((tab) => (
              <Tab
                key={tab.value}
                value={tab.value}
                className="flex-1 px-4 py-3 text-sm font-bold rounded-full transition-all duration-300 transform aria-selected:bg-gradient-to-r aria-selected:from-orange-400 aria-selected:to-pink-500 aria-selected:text-white aria-selected:scale-105 aria-selected:shadow-md text-gray-600 hover:bg-gray-100 hover:scale-102"
              >
                <span className="mr-2">{tab.emoji}</span>
                {tab.label}
              </Tab>
            ))}
          </TabList>

          <TabPanels className="mt-8">
            <TabPanel value="overview" className="p-8 bg-white rounded-3xl shadow-lg border-4 border-dashed border-orange-200 text-center">
              <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 mb-4">
                Welcome! 🎉
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Fun, energetic design that brings joy to every interaction. Perfect for creative brands and youth-focused products.
              </p>
            </TabPanel>

            <TabPanel value="features" className="p-8 bg-white rounded-3xl shadow-lg border-4 border-dashed border-orange-200 text-center">
              <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 mb-4">
                Amazing Features! 🚀
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Bold colors, bouncy animations, and friendly shapes create memorable experiences users love to share.
              </p>
            </TabPanel>

            <TabPanel value="pricing" className="p-8 bg-white rounded-3xl shadow-lg border-4 border-dashed border-orange-200 text-center">
              <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 mb-4">
                Great Value! 💎
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Happiness doesnt have to cost a fortune. Delightful design at prices that make you smile.
              </p>
            </TabPanel>

            <TabPanel value="faq" className="p-8 bg-white rounded-3xl shadow-lg border-4 border-dashed border-orange-200 text-center">
              <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 mb-4">
                Got Questions? 🤔
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Playful design balances fun with usability. The goal is engagement, not confusion!
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
