import { Tooltip } from './Tooltip';

export default function GlassmorphismTooltip() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-16 flex flex-col items-center justify-center gap-20">
      <h2 className="text-sm font-medium text-white/80 uppercase tracking-widest">Glassmorphism Tooltips</h2>

      <Tooltip content="Frosted glass effect" placement="top" theme="glassmorphism">
        <button className="px-6 py-3 text-sm font-medium text-white bg-white/20 backdrop-blur-md border border-white/30 rounded-xl transition-all duration-300 hover:bg-white/30 hover:scale-105">
          Hover Top
        </button>
      </Tooltip>

      <Tooltip content="Beautiful blur backdrop" placement="bottom" theme="glassmorphism">
        <button className="px-6 py-3 text-sm font-medium text-white bg-white/20 backdrop-blur-md border border-white/30 rounded-xl transition-all duration-300 hover:bg-white/30 hover:scale-105">
          Hover Bottom
        </button>
      </Tooltip>

      <div className="flex gap-24">
        <Tooltip content="Left glass panel" placement="left" theme="glassmorphism">
          <button className="px-6 py-3 text-sm font-medium text-white bg-white/20 backdrop-blur-md border border-white/30 rounded-xl transition-all duration-300 hover:bg-white/30 hover:scale-105">
            Hover Left
          </button>
        </Tooltip>

        <Tooltip content="Right glass panel" placement="right" theme="glassmorphism">
          <button className="px-6 py-3 text-sm font-medium text-white bg-white/20 backdrop-blur-md border border-white/30 rounded-xl transition-all duration-300 hover:bg-white/30 hover:scale-105">
            Hover Right
          </button>
        </Tooltip>
      </div>

      <Tooltip content="Helpful information here" placement="top" theme="glassmorphism">
        <div className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/30 rounded-full cursor-help transition-all duration-300 hover:bg-white/30">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </Tooltip>

      <div className="flex gap-8">
        <Tooltip content="Bottom start position" placement="bottom-start" theme="glassmorphism">
          <button className="px-6 py-3 text-sm font-medium text-white bg-white/20 backdrop-blur-md border border-white/30 rounded-xl transition-all duration-300 hover:bg-white/30 hover:scale-105">
            Bottom Start
          </button>
        </Tooltip>

        <Tooltip content="Bottom end position" placement="bottom-end" theme="glassmorphism">
          <button className="px-6 py-3 text-sm font-medium text-white bg-white/20 backdrop-blur-md border border-white/30 rounded-xl transition-all duration-300 hover:bg-white/30 hover:scale-105">
            Bottom End
          </button>
        </Tooltip>
      </div>
    </div>
  );
}
