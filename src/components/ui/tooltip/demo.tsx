import { useState } from 'react';
import { Tooltip } from './Tooltip';

export default function TooltipDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-16">
      <div className="max-w-6xl mx-auto space-y-16">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tooltip Component</h1>
          <p className="text-gray-600">A unified tooltip component with multiple themes and placements.</p>
        </div>

        <section className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Placements</h2>
            <div className="grid grid-cols-3 gap-8 items-center justify-items-center">
              <Tooltip content="Top Start" placement="top-start" theme="minimalist">
                <button className="px-4 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                  Top Start
                </button>
              </Tooltip>

              <Tooltip content="Top Center" placement="top" theme="minimalist">
                <button className="px-4 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                  Top
                </button>
              </Tooltip>

              <Tooltip content="Top End" placement="top-end" theme="minimalist">
                <button className="px-4 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                  Top End
                </button>
              </Tooltip>

              <Tooltip content="Left Side" placement="left" theme="minimalist">
                <button className="px-4 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                  Left
                </button>
              </Tooltip>

              <div className="px-4 py-2 text-sm text-gray-400">Center</div>

              <Tooltip content="Right Side" placement="right" theme="minimalist">
                <button className="px-4 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                  Right
                </button>
              </Tooltip>

              <Tooltip content="Bottom Start" placement="bottom-start" theme="minimalist">
                <button className="px-4 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                  Bottom Start
                </button>
              </Tooltip>

              <Tooltip content="Bottom Center" placement="bottom" theme="minimalist">
                <button className="px-4 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                  Bottom
                </button>
              </Tooltip>

              <Tooltip content="Bottom End" placement="bottom-end" theme="minimalist">
                <button className="px-4 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                  Bottom End
                </button>
              </Tooltip>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Themes</h2>
            <div className="flex flex-wrap gap-4">
              <Tooltip content="Clean and simple" placement="top" theme="minimalist">
                <button className="px-4 py-2 text-sm bg-white border border-gray-900 rounded hover:bg-gray-900 hover:text-white transition-colors">
                  Minimalist
                </button>
              </Tooltip>

              <Tooltip content="Modern dark style" placement="top" theme="dark">
                <button className="px-4 py-2 text-sm bg-gray-800 text-white border border-gray-700 rounded hover:bg-gray-700 transition-colors">
                  Dark
                </button>
              </Tooltip>

              <Tooltip content="Frosted glass effect" placement="top" theme="glassmorphism">
                <button className="px-4 py-2 text-sm bg-white/20 backdrop-blur text-gray-900 border border-gray-300 rounded hover:bg-white/40 transition-colors">
                  Glass
                </button>
              </Tooltip>

              <Tooltip content="Soft 3D design" placement="top" theme="neumorphism">
                <button className="px-4 py-2 text-sm bg-gray-100 text-gray-900 border border-gray-300 rounded hover:bg-gray-200 transition-colors">
                  Neumorphism
                </button>
              </Tooltip>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Triggers</h2>
            <div className="flex gap-4">
              <Tooltip content="Hover to show" placement="top" theme="minimalist" trigger="hover">
                <button className="px-4 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                  Hover Trigger
                </button>
              </Tooltip>

              <Tooltip content="Click to toggle" placement="top" theme="minimalist" trigger="click">
                <button className="px-4 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                  Click Trigger
                </button>
              </Tooltip>

              <Tooltip content="Focus to show" placement="top" theme="minimalist" trigger="focus">
                <button className="px-4 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                  Focus Trigger
                </button>
              </Tooltip>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Controlled State</h2>
            <div className="flex gap-4 items-center">
              <Tooltip
                content="Controlled by external state"
                placement="top"
                theme="minimalist"
                open={isOpen}
                onOpenChange={setIsOpen}
              >
                <button className="px-4 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                  Controlled Tooltip
                </button>
              </Tooltip>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                {isOpen ? 'Hide' : 'Show'} Tooltip
              </button>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Delay</h2>
            <div className="flex gap-4">
              <Tooltip content="No delay" placement="top" theme="minimalist" delay={0}>
                <button className="px-4 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                  Instant
                </button>
              </Tooltip>

              <Tooltip content="500ms delay" placement="top" theme="minimalist" delay={500}>
                <button className="px-4 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                  Delayed (500ms)
                </button>
              </Tooltip>

              <Tooltip content="1000ms delay" placement="top" theme="minimalist" delay={1000}>
                <button className="px-4 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                  Delayed (1000ms)
                </button>
              </Tooltip>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Arrow Options</h2>
            <div className="flex gap-4">
              <Tooltip content="With arrow" placement="top" theme="minimalist" arrow={true}>
                <button className="px-4 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                  With Arrow
                </button>
              </Tooltip>

              <Tooltip content="No arrow" placement="top" theme="minimalist" arrow={false}>
                <button className="px-4 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                  No Arrow
                </button>
              </Tooltip>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Different Trigger Elements</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Tooltip content="Button tooltip" placement="top" theme="minimalist">
                <button className="px-4 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                  Button
                </button>
              </Tooltip>

              <Tooltip content="Inline text tooltip" placement="top" theme="minimalist">
                <span className="text-sm text-gray-600 border-b border-dashed border-gray-400 cursor-help">
                  Hover over this text
                </span>
              </Tooltip>

              <Tooltip content="Icon tooltip" placement="top" theme="minimalist">
                <div className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded-full cursor-help hover:bg-gray-50">
                  <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </Tooltip>

              <Tooltip content="Badge tooltip" placement="top" theme="minimalist">
                <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full cursor-help">
                  Badge
                </span>
              </Tooltip>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
