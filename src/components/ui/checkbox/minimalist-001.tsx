import { useState } from 'react';
import { Checkbox } from './Checkbox';

export default function MinimalistCheckbox() {
  const [checked, setChecked] = useState({
    notifications: true,
    newsletter: false,
    updates: true,
    marketing: false,
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
      notifications: newValue,
      newsletter: newValue,
      updates: newValue,
      marketing: newValue,
    });
    setSelectAll(newValue);
    setIsIndeterminate(false);
  };

  return (
    <div className="flex flex-col gap-8 p-8 max-w-md bg-white min-h-screen">
      <h2 className="text-xs font-medium tracking-wide text-gray-500 uppercase">
        Minimalist Checkboxes
      </h2>

      {/* Basic Checkboxes */}
      <div className="flex flex-col gap-4">
        <h3 className="text-xs font-medium tracking-wide text-gray-400 uppercase">
          Preferences
        </h3>

        {Object.entries(checked).map(([key, value]) => (
          <Checkbox
            key={key}
            checked={value}
            onChange={() => handleToggle(key as keyof typeof checked)}
            label={key.replace(/([A-Z])/g, ' $1').trim()}
            className="gap-4"
            boxClassName={`w-5 h-5 border transition-all duration-300 ${
              value
                ? 'border-gray-900 bg-gray-900 text-white'
                : 'border-gray-300 group-hover:border-gray-400'
            }`}
            labelClassName="text-sm text-gray-700 capitalize"
          />
        ))}
      </div>

      {/* Indeterminate State */}
      <div className="flex flex-col gap-4">
        <h3 className="text-xs font-medium tracking-wide text-gray-400 uppercase">
          Bulk Selection
        </h3>

        <Checkbox
          checked={selectAll}
          onChange={handleSelectAll}
          indeterminate={isIndeterminate}
          label="Select all options"
          className="gap-4"
          boxClassName={`w-5 h-5 border transition-all duration-300 ${
            selectAll || isIndeterminate
              ? 'border-gray-900 bg-gray-900 text-white'
              : 'border-gray-300 group-hover:border-gray-400'
          }`}
          labelClassName="text-sm text-gray-700"
        />
      </div>

      {/* Disabled States */}
      <div className="flex flex-col gap-4">
        <h3 className="text-xs font-medium tracking-wide text-gray-400 uppercase">
          Disabled
        </h3>

        <Checkbox
          checked={false}
          disabled
          label="Disabled unchecked"
          className="gap-4"
          boxClassName="w-5 h-5 border border-gray-200 bg-gray-50"
          labelClassName="text-sm text-gray-300"
        />

        <Checkbox
          checked={true}
          disabled
          label="Disabled checked"
          className="gap-4"
          boxClassName="w-5 h-5 border border-gray-200 bg-gray-200 text-gray-400"
          labelClassName="text-sm text-gray-300"
        />
      </div>

      {/* With Description */}
      <div className="flex flex-col gap-4">
        <h3 className="text-xs font-medium tracking-wide text-gray-400 uppercase">
          With Description
        </h3>

        <Checkbox
          checked={true}
          label="Terms and Conditions"
          description="I agree to the terms of service and privacy policy"
          className="gap-4"
          boxClassName="w-5 h-5 mt-0.5 border border-gray-900 bg-gray-900 text-white"
          labelClassName="text-sm text-gray-700"
          descriptionClassName="text-xs text-gray-400"
        />
      </div>
    </div>
  );
}
