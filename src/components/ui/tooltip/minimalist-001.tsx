import { Tooltip } from './Tooltip';

export default function MinimalistTooltip() {
  return (
    <div className="min-h-screen bg-white p-16 flex flex-col items-center justify-center gap-20">
      <h2 className="text-sm font-medium text-gray-400 uppercase tracking-widest">Minimalist Tooltips</h2>

      <Tooltip content="Simple and clean tooltip" placement="top" theme="minimalist">
        <button className="px-6 py-3 text-sm font-light tracking-wide text-gray-900 border border-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white">
          Hover Top
        </button>
      </Tooltip>

      <Tooltip content="Elegant minimalist design" placement="bottom" theme="minimalist">
        <button className="px-6 py-3 text-sm font-light tracking-wide text-gray-900 border border-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white">
          Hover Bottom
        </button>
      </Tooltip>

      <div className="flex gap-24">
        <Tooltip content="Left positioned" placement="left" theme="minimalist">
          <button className="px-6 py-3 text-sm font-light tracking-wide text-gray-900 border border-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white">
            Hover Left
          </button>
        </Tooltip>

        <Tooltip content="Right positioned" placement="right" theme="minimalist">
          <button className="px-6 py-3 text-sm font-light tracking-wide text-gray-900 border border-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white">
            Hover Right
          </button>
        </Tooltip>
      </div>

      <Tooltip content="Hover hint for inline text" placement="top" theme="minimalist">
        <span className="text-sm font-light text-gray-600 border-b border-dashed border-gray-400 cursor-help">
          What is this?
        </span>
      </Tooltip>

      <div className="flex gap-8">
        <Tooltip content="Top start aligned" placement="top-start" theme="minimalist">
          <button className="px-6 py-3 text-sm font-light tracking-wide text-gray-900 border border-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white">
            Top Start
          </button>
        </Tooltip>

        <Tooltip content="Top end aligned" placement="top-end" theme="minimalist">
          <button className="px-6 py-3 text-sm font-light tracking-wide text-gray-900 border border-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white">
            Top End
          </button>
        </Tooltip>
      </div>
    </div>
  );
}
