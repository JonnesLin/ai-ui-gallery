import { useState } from 'react';
import { Checkbox } from './Checkbox';

export default function PastelCheckbox() {
  const [checked, setChecked] = useState({
    morning: true,
    afternoon: false,
    evening: true,
    night: false,
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
      morning: newValue,
      afternoon: newValue,
      evening: newValue,
      night: newValue,
    });
    setSelectAll(newValue);
    setIsIndeterminate(false);
  };

  const renderIcon = () => (
    <svg className="w-4 h-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <div className="flex flex-col gap-8 p-8 max-w-md bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 min-h-screen">
      <h2 className="text-xl font-semibold text-purple-600">Pastel Checkboxes</h2>

      {/* Basic Checkboxes */}
      <div className="flex flex-col gap-4 bg-white/60 backdrop-blur-sm p-6 rounded-3xl border border-pink-200/50 shadow-sm">
        <h3 className="text-sm font-medium text-purple-500 mb-2">Time Preferences</h3>

        {Object.entries(checked).map(([key, value]) => (
          <Checkbox
            key={key}
            checked={value}
            onChange={() => handleToggle(key as keyof typeof checked)}
            label={key}
            className="gap-3"
            boxClassName={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
              value
                ? 'border-pink-300 bg-pink-200 shadow-sm'
                : 'border-purple-200 bg-white group-hover:border-pink-300 group-hover:bg-pink-50'
            }`}
            labelClassName="text-sm text-purple-700 capitalize"
            renderIcon={renderIcon}
          />
        ))}
      </div>

      {/* Indeterminate State */}
      <div className="flex flex-col gap-4 bg-white/60 backdrop-blur-sm p-6 rounded-3xl border border-blue-200/50 shadow-sm">
        <h3 className="text-sm font-medium text-blue-500 mb-2">Bulk Selection</h3>

        <Checkbox
          checked={selectAll}
          onChange={handleSelectAll}
          indeterminate={isIndeterminate}
          label="Select all times"
          className="gap-3"
          boxClassName={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
            selectAll || isIndeterminate
              ? 'border-blue-300 bg-blue-200 shadow-sm'
              : 'border-blue-200 bg-white group-hover:border-blue-300 group-hover:bg-blue-50'
          }`}
          labelClassName="text-sm text-blue-700"
          renderIcon={() => (
            <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
          renderIndeterminate={() => <div className="w-3 h-0.5 bg-blue-500 rounded-full" />}
        />
      </div>

      {/* Disabled States */}
      <div className="flex flex-col gap-4 bg-white/40 backdrop-blur-sm p-6 rounded-3xl border border-gray-200/50 shadow-sm">
        <h3 className="text-sm font-medium text-gray-400 mb-2">Disabled Options</h3>

        <Checkbox
          checked={false}
          disabled
          label="Disabled unchecked"
          className="gap-3 opacity-50"
          boxClassName="w-6 h-6 rounded-full border-2 border-gray-200 bg-white"
          labelClassName="text-sm text-gray-500"
        />

        <Checkbox
          checked={true}
          disabled
          label="Disabled checked"
          className="gap-3 opacity-50"
          boxClassName="w-6 h-6 rounded-full border-2 border-gray-300 bg-gray-200"
          labelClassName="text-sm text-gray-500"
          renderIcon={() => (
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        />
      </div>

      {/* Different Sizes */}
      <div className="flex flex-col gap-4 bg-white/60 backdrop-blur-sm p-6 rounded-3xl border border-purple-200/50 shadow-sm">
        <h3 className="text-sm font-medium text-purple-500 mb-2">Size Variations</h3>

        <Checkbox
          checked={true}
          label="Small checkbox"
          className="gap-3"
          boxClassName="w-5 h-5 rounded-full border-2 border-purple-300 bg-purple-200 shadow-sm"
          labelClassName="text-sm text-purple-700"
          renderIcon={() => (
            <svg className="w-3 h-3 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        />

        <Checkbox
          checked={true}
          label="Large checkbox"
          className="gap-3"
          boxClassName="w-8 h-8 rounded-full border-2 border-pink-300 bg-pink-200 shadow-sm"
          labelClassName="text-base text-pink-700"
          renderIcon={() => (
            <svg className="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        />
      </div>

      {/* With Description */}
      <div className="flex flex-col gap-4 bg-white/60 backdrop-blur-sm p-6 rounded-3xl border border-indigo-200/50 shadow-sm">
        <h3 className="text-sm font-medium text-indigo-500 mb-2">With Description</h3>

        <Checkbox
          checked={true}
          label="Newsletter Subscription"
          description="Receive weekly updates and exclusive content"
          className="gap-3"
          boxClassName="w-6 h-6 mt-0.5 rounded-full border-2 border-indigo-300 bg-indigo-200 flex-shrink-0 shadow-sm"
          labelClassName="text-sm text-indigo-700 font-medium"
          descriptionClassName="text-xs text-indigo-400"
          renderIcon={() => (
            <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        />
      </div>
    </div>
  );
}
