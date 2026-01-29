import { useState } from 'react';
import { Checkbox } from './Checkbox';

export default function NeumorphismCheckbox() {
  const [checked, setChecked] = useState({
    darkMode: true,
    autoSave: false,
    soundEffects: true,
    hapticFeedback: false,
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
      darkMode: newValue,
      autoSave: newValue,
      soundEffects: newValue,
      hapticFeedback: newValue,
    });
    setSelectAll(newValue);
    setIsIndeterminate(false);
  };

  return (
    <div className="flex flex-col gap-8 p-8 min-h-screen bg-[#e0e5ec]">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
        Neumorphism Checkboxes
      </h2>

      {/* Basic Checkboxes */}
      <div className="rounded-2xl p-6 bg-[#e0e5ec] shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff]">
        <div className="flex flex-col gap-5">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            Settings
          </h3>

          {Object.entries(checked).map(([key, value]) => (
            <Checkbox
              key={key}
              checked={value}
              onChange={() => handleToggle(key as keyof typeof checked)}
              label={key.replace(/([A-Z])/g, ' $1').trim()}
              className="gap-4"
              boxClassName={`w-6 h-6 rounded-lg transition-all duration-300 ${
                value
                  ? 'bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] text-blue-500'
                  : 'bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff] group-hover:shadow-[2px_2px_4px_#b8bec7,-2px_-2px_4px_#ffffff]'
              }`}
              labelClassName="text-gray-600 text-sm font-medium capitalize"
              renderIcon={() => (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            />
          ))}
        </div>
      </div>

      {/* Indeterminate State */}
      <div className="rounded-2xl p-6 bg-[#e0e5ec] shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff]">
        <div className="flex flex-col gap-5">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            Bulk Selection
          </h3>

          <Checkbox
            checked={selectAll}
            onChange={handleSelectAll}
            indeterminate={isIndeterminate}
            label="Select all settings"
            className="gap-4"
            boxClassName={`w-6 h-6 rounded-lg transition-all duration-300 ${
              selectAll || isIndeterminate
                ? 'bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] text-blue-500'
                : 'bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff]'
            }`}
            labelClassName="text-gray-600 text-sm font-medium"
            renderIcon={() => (
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
            renderIndeterminate={() => <div className="w-3 h-0.5 bg-blue-500 rounded-full" />}
          />
        </div>
      </div>

      {/* Disabled States */}
      <div className="rounded-2xl p-6 bg-[#e0e5ec] shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff]">
        <div className="flex flex-col gap-5">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
            Disabled States
          </h3>

          <Checkbox
            checked={false}
            disabled
            label="Disabled unchecked"
            className="gap-4 opacity-50"
            boxClassName="w-6 h-6 rounded-lg bg-[#e0e5ec] shadow-[2px_2px_4px_#b8bec7,-2px_-2px_4px_#ffffff]"
            labelClassName="text-gray-400 text-sm font-medium"
          />

          <Checkbox
            checked={true}
            disabled
            label="Disabled checked"
            className="gap-4 opacity-50"
            boxClassName="w-6 h-6 rounded-lg bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#b8bec7,inset_-2px_-2px_4px_#ffffff] text-gray-400"
            labelClassName="text-gray-400 text-sm font-medium"
            renderIcon={() => (
              <svg
                className="w-4 h-4"
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

      {/* Circular Variant */}
      <div className="rounded-2xl p-6 bg-[#e0e5ec] shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff]">
        <div className="flex flex-col gap-5">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            Circular Variant
          </h3>

          <Checkbox
            checked={true}
            label="Circular checked"
            className="gap-4"
            boxClassName="w-6 h-6 rounded-full bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8bec7,inset_-4px_-4px_8px_#ffffff] transition-all duration-300 text-emerald-500"
            labelClassName="text-gray-600 text-sm font-medium"
            renderIcon={() => (
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          />

          <Checkbox
            checked={false}
            label="Circular unchecked"
            className="gap-4"
            boxClassName="w-6 h-6 rounded-full bg-[#e0e5ec] shadow-[4px_4px_8px_#b8bec7,-4px_-4px_8px_#ffffff] group-hover:shadow-[2px_2px_4px_#b8bec7,-2px_-2px_4px_#ffffff] transition-all duration-300"
            labelClassName="text-gray-600 text-sm font-medium"
          />
        </div>
      </div>
    </div>
  );
}
