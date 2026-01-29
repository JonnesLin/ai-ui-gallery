import { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './index';

export default function CyberpunkAccordion() {
  const items = [
    {
      value: 'item-1',
      title: 'NEURAL_INTERFACE.init()',
      content: 'Cyberpunk aesthetics merge high-tech with low-life. Expect neon colors, glitch effects, circuit patterns, and dystopian imagery that reflects a tech-saturated future.',
      id: 'NRL-001',
    },
    {
      value: 'item-2',
      title: 'CHROMATIC_ABERRATION.apply()',
      content: 'The signature glitch effect separates RGB channels to create visual distortion. Use sparingly on hover states and transitions for maximum impact without overwhelming users.',
      id: 'CHR-002',
    },
    {
      value: 'item-3',
      title: 'NEON_GLOW.render()',
      content: 'Layer multiple box-shadows with cyan, magenta, and yellow for authentic neon effects. Animate glow intensity for pulsing, breathing light effects.',
      id: 'NEO-003',
    },
    {
      value: 'item-4',
      title: 'GRID_OVERLAY.execute()',
      content: 'Scanlines, grid patterns, and HUD-style interfaces reinforce the cyberpunk theme. Consider adding subtle noise textures and tech readouts.',
      id: 'GRD-004',
    },
  ];

  const [value, setValue] = useState<string | string[]>(['item-1']);

  const handleToggleAll = () => {
    setValue(value.length === items.length ? [] : items.map(item => item.value));
  };

  return (
    <div className="min-h-screen bg-black p-4 font-mono sm:p-8 md:p-12">
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 1px, transparent 1px, transparent 2px)',
        }}
      />

      <div className="relative z-20 mx-auto max-w-2xl">
        <div className="mb-8 border border-cyan-500/50 bg-black p-6">
          <div className="mb-2 flex items-center gap-2 text-xs text-cyan-500">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-500" />
            <span>SYSTEM ONLINE</span>
          </div>
          <h2 className="glitch-text text-2xl font-bold text-cyan-400 sm:text-3xl">
            {'>'} FAQ_DATABASE
          </h2>
          <p className="mt-1 text-sm text-cyan-500/70">
            [ACCESS GRANTED] Query results loaded...
          </p>
        </div>

        <Accordion type="multiple" value={value} onValueChange={setValue} theme="dark">
          {items.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="mb-2 overflow-hidden border border-cyan-900 bg-black transition-all duration-200 hover:border-cyan-700 data-[state=open]:border-cyan-400 data-[state=open]:bg-cyan-950/30"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
              }}
            >
              <AccordionTrigger className="flex w-full items-center gap-3 p-4 text-left sm:p-5">
                <span className={`border px-2 py-1 text-xs ${
                  value.includes(item.value)
                    ? 'border-magenta-500 bg-magenta-500/20 text-magenta-400'
                    : 'border-cyan-700 text-cyan-600'
                }`} style={{ borderColor: value.includes(item.value) ? '#f0f' : undefined, color: value.includes(item.value) ? '#f0f' : undefined }}>
                  {item.id}
                </span>
                <span className={`flex-1 text-sm font-medium sm:text-base ${
                  value.includes(item.value) ? 'text-cyan-300' : 'text-cyan-500'
                }`}>
                  {item.title}
                </span>
                <span className={`text-lg ${
                  value.includes(item.value) ? 'text-cyan-400' : 'text-cyan-700'
                }`}>
                  {value.includes(item.value) ? '[-]' : '[+]'}
                </span>
              </AccordionTrigger>
              <AccordionContent className="border-t border-cyan-800 px-4 py-4 sm:px-5">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-700">{'>'}</span>
                  <p className="text-sm leading-relaxed text-cyan-400/80 sm:text-base">
                    {item.content}
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-4 text-xs text-cyan-700">
                  <span>STATUS: ACTIVE</span>
                  <span>|</span>
                  <span>MEM: 2.4TB</span>
                  <span>|</span>
                  <span>LAT: 12ms</span>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 flex items-center justify-between border border-cyan-900 bg-black p-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-green-500" />
            <span className="text-xs text-cyan-600">
              LOADED: {value.length}/{items.length} ENTRIES
            </span>
          </div>
          <button
            onClick={handleToggleAll}
            className="border border-cyan-500 bg-cyan-500/10 px-4 py-1 text-xs font-bold text-cyan-400 transition-colors hover:bg-cyan-500/20"
          >
            {value.length === items.length ? 'COLLAPSE_ALL' : 'EXPAND_ALL'}
          </button>
        </div>
      </div>
    </div>
  );
}
