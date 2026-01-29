import { useState } from 'react';
import { Checkbox } from './Checkbox';

export default function RetroCheckbox() {
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

  const renderIcon = () => (
    <svg
      className="w-4 h-4 text-amber-50"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <div className="flex flex-col gap-8 p-8 max-w-md bg-amber-50 min-h-screen font-serif">
      <h2 className="text-2xl font-bold text-amber-900 tracking-wide border-b-4 border-double border-amber-800 pb-2">
        Retro Checkboxes
      </h2>

      {/* Basic Checkboxes */}
      <div className="flex flex-col gap-4 bg-amber-100 p-6 rounded-sm border-2 border-amber-800 shadow-[4px_4px_0_0_rgba(120,53,15,0.3)]">
        <h3 className="text-sm font-bold text-amber-900 uppercase tracking-widest">
          User Preferences
        </h3>

        {Object.entries(checked).map(([key, value]) => (
          <Checkbox
            key={key}
            checked={value}
            onChange={() => handleToggle(key as keyof typeof checked)}
            label={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
            className="gap-3"
            boxClassName={`w-6 h-6 border-2 rounded-sm transition-all duration-200 ${
              value
                ? 'border-amber-900 bg-amber-600 shadow-inner'
                : 'border-amber-700 bg-amber-50 group-hover:bg-amber-100'
            }`}
            labelClassName="text-sm text-amber-900 font-medium"
            renderIcon={renderIcon}
          />
        ))}
      </div>

      {/* Indeterminate State */}
      <div className="flex flex-col gap-4 bg-orange-100 p-6 rounded-sm border-2 border-orange-800 shadow-[4px_4px_0_0_rgba(154,52,18,0.3)]">
        <h3 className="text-sm font-bold text-orange-900 uppercase tracking-widest">
          Bulk Selection
        </h3>

        <Checkbox
          checked={selectAll}
          onChange={handleSelectAll}
          indeterminate={isIndeterminate}
          label="Select all items"
          className="gap-3"
          boxClassName={`w-6 h-6 border-2 rounded-sm transition-all duration-200 ${
            selectAll || isIndeterminate
              ? 'border-orange-900 bg-orange-600 shadow-inner'
              : 'border-orange-700 bg-orange-50 group-hover:bg-orange-100'
          }`}
          labelClassName="text-sm text-orange-900 font-medium"
          renderIcon={() => (
            <svg
              className="w-4 h-4 text-orange-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
          renderIndeterminate={() => <div className="w-3 h-0.5 bg-orange-50 rounded-full" />}
        />
      </div>

      {/* Disabled States */}
      <div className="flex flex-col gap-4 bg-stone-200 p-6 rounded-sm border-2 border-stone-600 shadow-[4px_4px_0_0_rgba(87,83,78,0.3)]">
        <h3 className="text-sm font-bold text-stone-700 uppercase tracking-widest">
          Disabled Options
        </h3>

        <Checkbox
          checked={false}
          disabled
          label="Disabled unchecked"
          className="gap-3 opacity-60"
          boxClassName="w-6 h-6 border-2 border-stone-500 bg-stone-100 rounded-sm"
          labelClassName="text-sm text-stone-600 font-medium"
        />

        <Checkbox
          checked={true}
          disabled
          label="Disabled checked"
          className="gap-3 opacity-60"
          boxClassName="w-6 h-6 border-2 border-stone-500 bg-stone-400 rounded-sm shadow-inner"
          labelClassName="text-sm text-stone-600 font-medium"
          renderIcon={() => (
            <svg
              className="w-4 h-4 text-stone-200"
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

      {/* Different Sizes */}
      <div className="flex flex-col gap-4 bg-yellow-100 p-6 rounded-sm border-2 border-yellow-800 shadow-[4px_4px_0_0_rgba(133,77,14,0.3)]">
        <h3 className="text-sm font-bold text-yellow-900 uppercase tracking-widest">
          Size Variations
        </h3>

        <Checkbox
          checked={false}
          label="Small checkbox"
          className="gap-3"
          boxClassName="w-5 h-5 border-2 border-yellow-700 bg-yellow-50 rounded-sm group-hover:bg-yellow-100"
          labelClassName="text-xs text-yellow-900 font-medium"
        />

        <Checkbox
          checked={true}
          label="Large checkbox"
          className="gap-3"
          boxClassName="w-8 h-8 border-2 border-yellow-900 bg-yellow-600 rounded-sm shadow-inner"
          labelClassName="text-base text-yellow-900 font-medium"
          renderIcon={() => (
            <svg
              className="w-5 h-5 text-yellow-50"
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
