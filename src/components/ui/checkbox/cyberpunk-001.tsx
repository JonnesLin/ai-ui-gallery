import { useState } from 'react';
import { Checkbox } from './Checkbox';

export default function CyberpunkCheckbox() {
  const [checked, setChecked] = useState({
    neural: true,
    cyberdeck: false,
    implant: true,
    netrunner: false,
  });
  const [selectAll, setSelectAll] = useState(false);
  const [isIndeterminate, setIsIndeterminate] = useState(true);

  const handleToggle = (key: keyof typeof checked) => {
    const newChecked = { ...checked, [key]: !checked[key] };
    setChecked(newChecked);
    const values = Object.values(newChecked);
    const allChecked = values.every(Boolean);
    const noneChecked = values.every((v) => !v);
    setSelectAll(allChecked);
    setIsIndeterminate(!allChecked && !noneChecked);
  };

  const handleSelectAll = (newValue: boolean) => {
    setChecked({
      neural: newValue,
      cyberdeck: newValue,
      implant: newValue,
      netrunner: newValue,
    });
    setSelectAll(newValue);
    setIsIndeterminate(false);
  };

  return (
    <div className="flex flex-col gap-8 p-8 max-w-md bg-black min-h-screen font-mono">
      <h2 className="text-2xl font-black text-cyan-400 uppercase tracking-wider relative">
        <span className="relative z-10">CYBERPUNK CHECKBOXES</span>
        <div className="absolute inset-0 bg-cyan-400/20 blur-xl" />
      </h2>

      {/* Basic Checkboxes */}
      <div className="flex flex-col gap-4 bg-gray-900 p-6 border border-cyan-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent pointer-events-none" />

        <h3 className="text-xs font-bold text-cyan-300 uppercase tracking-widest relative z-10">
          {'>'} System Options
        </h3>

        {Object.entries(checked).map(([key, value]) => (
          <Checkbox
            key={key}
            checked={value}
            onChange={() => handleToggle(key as keyof typeof checked)}
            label={key.replace(/([A-Z])/g, ' $1').trim()}
            className="gap-4 relative z-10"
            boxClassName={`w-6 h-6 border-2 transition-all duration-300 relative ${
              value
                ? 'border-cyan-400 bg-cyan-500/20 shadow-[0_0_10px_rgba(34,211,238,0.5)]'
                : 'border-cyan-600 bg-black group-hover:border-cyan-400 group-hover:shadow-[0_0_8px_rgba(34,211,238,0.3)]'
            }`}
            labelClassName="text-sm text-cyan-100 uppercase tracking-wide font-semibold"
            renderIcon={() => (
              <>
                <svg
                  className="w-4 h-4 text-cyan-400 relative z-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div className="absolute inset-0 bg-cyan-400/30 blur" />
              </>
            )}
          />
        ))}
      </div>

      {/* Indeterminate State */}
      <div className="flex flex-col gap-4 bg-gray-900 p-6 border border-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent pointer-events-none" />

        <h3 className="text-xs font-bold text-pink-300 uppercase tracking-widest relative z-10">
          {'>'} Bulk Access
        </h3>

        <Checkbox
          checked={selectAll}
          onChange={handleSelectAll}
          indeterminate={isIndeterminate}
          label="Select All Systems"
          className="gap-4 relative z-10"
          boxClassName={`w-6 h-6 border-2 transition-all duration-300 relative ${
            selectAll || isIndeterminate
              ? 'border-pink-400 bg-pink-500/20 shadow-[0_0_10px_rgba(236,72,153,0.5)]'
              : 'border-pink-600 bg-black group-hover:border-pink-400 group-hover:shadow-[0_0_8px_rgba(236,72,153,0.3)]'
          }`}
          labelClassName="text-sm text-pink-100 uppercase tracking-wide font-semibold"
          renderIcon={() => (
            <>
              <svg
                className="w-4 h-4 text-pink-400 relative z-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div className="absolute inset-0 bg-pink-400/30 blur" />
            </>
          )}
          renderIndeterminate={() => (
            <>
              <div className="w-3 h-0.5 bg-pink-400 relative z-10" />
              <div className="absolute inset-0 bg-pink-400/30 blur" />
            </>
          )}
        />
      </div>

      {/* Disabled States */}
      <div className="flex flex-col gap-4 bg-gray-900 p-6 border border-gray-600 relative overflow-hidden opacity-60">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
          {'>'} Locked
        </h3>

        <Checkbox
          checked={false}
          disabled
          label="Access Denied"
          className="gap-4"
          boxClassName="w-6 h-6 border-2 border-gray-700 bg-black"
          labelClassName="text-sm text-gray-500 uppercase tracking-wide font-semibold"
        />

        <Checkbox
          checked={true}
          disabled
          label="Encryption Active"
          className="gap-4"
          boxClassName="w-6 h-6 border-2 border-gray-700 bg-gray-800"
          labelClassName="text-sm text-gray-500 uppercase tracking-wide font-semibold"
          renderIcon={() => (
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        />
      </div>

      {/* Large with Description */}
      <div className="flex flex-col gap-4 bg-gray-900 p-6 border border-purple-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent pointer-events-none" />

        <h3 className="text-xs font-bold text-purple-300 uppercase tracking-widest relative z-10">
          {'>'} Advanced Options
        </h3>

        <Checkbox
          checked={true}
          label="Neural Interface Active"
          description="Connection established to mainframe.net"
          className="gap-4 relative z-10"
          boxClassName="w-6 h-6 mt-0.5 border-2 border-purple-400 bg-purple-500/20 flex-shrink-0 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
          labelClassName="text-sm text-purple-100 uppercase tracking-wide font-semibold"
          descriptionClassName="text-xs text-purple-400 font-mono"
          renderIcon={() => (
            <svg
              className="w-4 h-4 text-purple-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        />
      </div>
    </div>
  );
}
