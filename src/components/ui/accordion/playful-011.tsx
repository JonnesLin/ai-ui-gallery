import { useState } from 'react';

export default function PlayfulAccordion() {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const items = [
    {
      title: 'What makes design playful?',
      content: 'Playful design uses bright colors, bouncy animations, rounded shapes, and unexpected delights. It should feel fun and approachable while still being functional!',
      emoji: '🎨',
      color: 'from-pink-400 to-rose-500',
      bg: 'bg-pink-100',
    },
    {
      title: 'How do animations help?',
      content: 'Bouncy, springy animations give interfaces personality. They make interactions feel responsive and rewarding, turning mundane tasks into enjoyable experiences.',
      emoji: '✨',
      color: 'from-purple-400 to-indigo-500',
      bg: 'bg-purple-100',
    },
    {
      title: 'Color palette tips?',
      content: 'Use a rainbow of saturated colors! Mix warm and cool tones, add unexpected color pops, and do not be afraid to go bold. Contrast is your friend!',
      emoji: '🌈',
      color: 'from-cyan-400 to-blue-500',
      bg: 'bg-cyan-100',
    },
    {
      title: 'When to use playful design?',
      content: 'Perfect for kids apps, creative tools, games, and brands that want to feel approachable. Not ideal for serious contexts like banking or healthcare.',
      emoji: '🎮',
      color: 'from-amber-400 to-orange-500',
      bg: 'bg-amber-100',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-cyan-100 p-4 sm:p-8 md:p-12">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg mb-4">
            <span className="text-2xl animate-bounce">🎉</span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              Super Fun FAQ!
            </span>
            <span className="text-2xl animate-bounce" style={{ animationDelay: '0.1s' }}>🎉</span>
          </div>
          <h2 className="text-3xl font-black text-gray-800 sm:text-4xl">
            Got Questions?
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            We have got awesome answers! 🚀
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:scale-[1.02] ${item.bg}`}
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex w-full items-center gap-4 p-4 text-left sm:p-5"
              >
                <span className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-2xl shadow-lg transform transition-transform ${
                  openItems.includes(index) ? 'rotate-12 scale-110' : ''
                }`}>
                  {item.emoji}
                </span>
                <span className="flex-1 text-lg font-bold text-gray-800 sm:text-xl">
                  {item.title}
                </span>
                <span className={`flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold shadow-md transition-transform duration-300 ${
                  openItems.includes(index) ? 'rotate-180 bg-gradient-to-br ' + item.color + ' text-white' : 'text-gray-600'
                }`}>
                  ↓
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openItems.includes(index) ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-4 pb-5 sm:px-5">
                  <div className="rounded-2xl bg-white p-4 shadow-inner">
                    <p className="text-base leading-relaxed text-gray-700">
                      {item.content}
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-sm text-gray-500">Was this helpful?</span>
                      <button className="rounded-full bg-green-100 px-3 py-1 text-sm hover:bg-green-200 transition-colors">
                        👍 Yes!
                      </button>
                      <button className="rounded-full bg-red-100 px-3 py-1 text-sm hover:bg-red-200 transition-colors">
                        👎 Nope
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex gap-2">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => toggleItem(index)}
                className={`h-4 w-4 rounded-full transition-all duration-300 ${
                  openItems.includes(index)
                    ? `bg-gradient-to-br ${item.color} scale-125 shadow-lg`
                    : 'bg-white shadow'
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-gray-600">
            🎯 Click dots to toggle questions!
          </p>
        </div>
      </div>
    </div>
  );
}
