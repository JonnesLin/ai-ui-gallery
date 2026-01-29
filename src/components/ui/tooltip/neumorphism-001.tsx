import { Tooltip } from './Tooltip';

export default function NeumorphismTooltip() {
  return (
    <div className="min-h-screen bg-[#e0e5ec] p-16 flex flex-col items-center justify-center gap-20">
      <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest">Neumorphism Tooltips</h2>

      <Tooltip content="Soft UI tooltip design" placement="top" theme="neumorphism">
        <button className="px-6 py-3 text-sm font-medium text-gray-600 bg-[#e0e5ec] rounded-xl shadow-[8px_8px_16px_#b8bcc2,-8px_-8px_16px_#ffffff] transition-all duration-300 hover:shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff] active:shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff]">
          Hover Top
        </button>
      </Tooltip>

      <Tooltip content="Extruded soft appearance" placement="bottom" theme="neumorphism">
        <button className="px-6 py-3 text-sm font-medium text-gray-600 bg-[#e0e5ec] rounded-xl shadow-[8px_8px_16px_#b8bcc2,-8px_-8px_16px_#ffffff] transition-all duration-300 hover:shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff]">
          Hover Bottom
        </button>
      </Tooltip>

      <div className="flex gap-24">
        <Tooltip content="Left soft panel" placement="left" theme="neumorphism">
          <button className="px-6 py-3 text-sm font-medium text-gray-600 bg-[#e0e5ec] rounded-xl shadow-[8px_8px_16px_#b8bcc2,-8px_-8px_16px_#ffffff] transition-all duration-300 hover:shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff]">
            Hover Left
          </button>
        </Tooltip>

        <Tooltip content="Right soft panel" placement="right" theme="neumorphism">
          <button className="px-6 py-3 text-sm font-medium text-gray-600 bg-[#e0e5ec] rounded-xl shadow-[8px_8px_16px_#b8bcc2,-8px_-8px_16px_#ffffff] transition-all duration-300 hover:shadow-[4px_4px_8px_#b8bcc2,-4px_-4px_8px_#ffffff]">
            Hover Right
          </button>
        </Tooltip>
      </div>

      <Tooltip content="Inset trigger style" placement="top" theme="neumorphism">
        <div className="w-12 h-12 flex items-center justify-center bg-[#e0e5ec] rounded-xl shadow-[inset_4px_4px_8px_#b8bcc2,inset_-4px_-4px_8px_#ffffff] cursor-help transition-all duration-300 hover:shadow-[inset_2px_2px_4px_#b8bcc2,inset_-2px_-2px_4px_#ffffff]">
          <span className="text-gray-500 text-lg font-medium">?</span>
        </div>
      </Tooltip>
    </div>
  );
}
