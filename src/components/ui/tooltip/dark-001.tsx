import { Tooltip } from './Tooltip';

export default function DarkTooltip() {
  return (
    <div className="min-h-screen bg-gray-950 p-16 flex flex-col items-center justify-center gap-20">
      <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest">Dark Theme Tooltips</h2>

      <Tooltip content="Dark mode tooltip" placement="top" theme="dark">
        <button className="px-6 py-3 text-sm font-medium text-gray-100 bg-gray-800 border border-gray-700 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:border-gray-600">
          Hover Top
        </button>
      </Tooltip>

      <Tooltip content="Sleek dark appearance" placement="bottom" theme="dark">
        <button className="px-6 py-3 text-sm font-medium text-gray-100 bg-gray-800 border border-gray-700 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:border-gray-600">
          Hover Bottom
        </button>
      </Tooltip>

      <div className="flex gap-24">
        <Tooltip content="Left position" placement="left" theme="dark">
          <button className="px-6 py-3 text-sm font-medium text-gray-100 bg-gray-800 border border-gray-700 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:border-gray-600">
            Hover Left
          </button>
        </Tooltip>

        <Tooltip content="Right position" placement="right" theme="dark">
          <button className="px-6 py-3 text-sm font-medium text-gray-100 bg-gray-800 border border-gray-700 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:border-gray-600">
            Hover Right
          </button>
        </Tooltip>
      </div>

      <Tooltip content="Accent highlighted tip" placement="top" theme="dark">
        <button className="px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg transition-all duration-300 hover:bg-blue-500">
          Accent Button
        </button>
      </Tooltip>

      <Tooltip content="Need help with something?" placement="top" theme="dark">
        <div className="w-10 h-10 flex items-center justify-center bg-gray-800 border border-gray-700 rounded-full cursor-help transition-all duration-300 hover:border-gray-500 hover:shadow-lg hover:shadow-gray-800/50">
          <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </Tooltip>
    </div>
  );
}
