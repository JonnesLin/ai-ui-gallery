import { useState } from 'react';
import { Checkbox } from './Checkbox';

export default function DarkCheckbox() {
  const [checked, setChecked] = useState({
    encryption: true,
    twoFactor: false,
    biometric: true,
    vpn: false,
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
      encryption: newValue,
      twoFactor: newValue,
      biometric: newValue,
      vpn: newValue,
    });
    setSelectAll(newValue);
    setIsIndeterminate(false);
  };

  return (
    <div className="flex flex-col gap-8 p-8 min-h-screen bg-gray-950">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
        Dark Theme Checkboxes
      </h2>

      {/* Basic Checkboxes */}
      <div className="rounded-xl p-6 bg-gray-900 border border-gray-800">
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
            Security Options
          </h3>

          {Object.entries(checked).map(([key, value]) => (
            <Checkbox
              key={key}
              checked={value}
              onChange={() => handleToggle(key as keyof typeof checked)}
              label={key.replace(/([A-Z])/g, ' $1').trim()}
              className="gap-4"
              boxClassName={`w-5 h-5 rounded border-2 transition-all duration-200 ${
                value
                  ? 'bg-blue-600 border-blue-600 text-white'
                  : 'border-gray-600 group-hover:border-gray-500'
              }`}
              labelClassName="text-gray-300 text-sm font-medium capitalize"
            />
          ))}
        </div>
      </div>

      {/* Indeterminate State */}
      <div className="rounded-xl p-6 bg-gray-900 border border-gray-800">
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
            Bulk Selection
          </h3>

          <Checkbox
            checked={selectAll}
            onChange={handleSelectAll}
            indeterminate={isIndeterminate}
            label="Enable all security"
            className="gap-4"
            boxClassName={`w-5 h-5 rounded border-2 transition-all duration-200 ${
              selectAll || isIndeterminate
                ? 'bg-blue-600 border-blue-600 text-white'
                : 'border-gray-600 group-hover:border-gray-500'
            }`}
            labelClassName="text-gray-300 text-sm font-medium"
            renderIndeterminate={() => (
              <div className="w-2.5 h-0.5 bg-white rounded-full" />
            )}
          />
        </div>
      </div>

      {/* Disabled States */}
      <div className="rounded-xl p-6 bg-gray-900/50 border border-gray-800/50">
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
            Disabled States
          </h3>

          <Checkbox
            checked={false}
            disabled
            label="Disabled unchecked"
            className="gap-4"
            boxClassName="w-5 h-5 rounded border-2 border-gray-700 bg-gray-800"
            labelClassName="text-gray-600 text-sm font-medium"
          />

          <Checkbox
            checked={true}
            disabled
            label="Disabled checked"
            className="gap-4"
            boxClassName="w-5 h-5 rounded border-2 border-gray-700 bg-gray-700 text-gray-500"
            labelClassName="text-gray-600 text-sm font-medium"
          />
        </div>
      </div>

      {/* Color Variants */}
      <div className="rounded-xl p-6 bg-gray-900 border border-gray-800">
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
            Color Variants
          </h3>

          <Checkbox
            checked={true}
            label="Success / Green"
            className="gap-4"
            boxClassName="w-5 h-5 rounded border-2 bg-emerald-600 border-emerald-600 text-white"
            labelClassName="text-gray-300 text-sm font-medium"
          />

          <Checkbox
            checked={true}
            label="Warning / Amber"
            className="gap-4"
            boxClassName="w-5 h-5 rounded border-2 bg-amber-600 border-amber-600 text-white"
            labelClassName="text-gray-300 text-sm font-medium"
          />

          <Checkbox
            checked={true}
            label="Danger / Red"
            className="gap-4"
            boxClassName="w-5 h-5 rounded border-2 bg-red-600 border-red-600 text-white"
            labelClassName="text-gray-300 text-sm font-medium"
          />

          <Checkbox
            checked={true}
            label="Purple / Violet"
            className="gap-4"
            boxClassName="w-5 h-5 rounded border-2 bg-violet-600 border-violet-600 text-white"
            labelClassName="text-gray-300 text-sm font-medium"
          />
        </div>
      </div>
    </div>
  );
}
