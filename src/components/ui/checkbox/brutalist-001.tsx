import { useState } from 'react';
import { Checkbox } from './Checkbox';

export default function BrutalistCheckbox() {
  const [checked, setChecked] = useState({
    consent: true,
    terms: false,
    privacy: true,
    cookies: false,
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
      consent: newValue,
      terms: newValue,
      privacy: newValue,
      cookies: newValue,
    });
    setSelectAll(newValue);
    setIsIndeterminate(false);
  };

  return (
    <div className="flex flex-col gap-8 p-8 max-w-md bg-white min-h-screen font-mono">
      <h2 className="text-2xl font-black tracking-tighter uppercase border-8 border-black p-4 bg-yellow-400">
        BRUTALIST CHECKBOXES
      </h2>

      {/* Basic Checkboxes */}
      <div className="flex flex-col gap-6 border-4 border-black p-6 bg-white shadow-[8px_8px_0_0_#000]">
        <h3 className="text-lg font-black uppercase tracking-tight border-b-4 border-black pb-2">
          REQUIRED OPTIONS
        </h3>

        {Object.entries(checked).map(([key, value]) => (
          <Checkbox
            key={key}
            checked={value}
            onChange={() => handleToggle(key as keyof typeof checked)}
            label={key.replace(/([A-Z])/g, ' $1').trim()}
            className="gap-4"
            boxClassName={`w-8 h-8 border-4 border-black transition-all duration-100 font-black text-2xl ${
              value ? 'bg-black text-yellow-400' : 'bg-white group-hover:bg-gray-100'
            }`}
            labelClassName="text-base font-bold uppercase tracking-tight"
            renderIcon={() => '✓'}
          />
        ))}
      </div>

      {/* Indeterminate State */}
      <div className="flex flex-col gap-6 border-4 border-black p-6 bg-red-400 shadow-[8px_8px_0_0_#000]">
        <h3 className="text-lg font-black uppercase tracking-tight border-b-4 border-black pb-2">
          BULK ACTION
        </h3>

        <Checkbox
          checked={selectAll}
          onChange={handleSelectAll}
          indeterminate={isIndeterminate}
          label="SELECT ALL"
          className="gap-4"
          boxClassName={`w-8 h-8 border-4 border-black transition-all duration-100 font-black text-2xl ${
            selectAll || isIndeterminate
              ? 'bg-black text-red-400'
              : 'bg-white group-hover:bg-gray-100'
          }`}
          labelClassName="text-base font-bold uppercase tracking-tight"
          renderIcon={() => '✓'}
          renderIndeterminate={() => '−'}
        />
      </div>

      {/* Disabled States */}
      <div className="flex flex-col gap-6 border-4 border-black p-6 bg-gray-200 shadow-[8px_8px_0_0_#000]">
        <h3 className="text-lg font-black uppercase tracking-tight border-b-4 border-black pb-2">
          DISABLED
        </h3>

        <Checkbox
          checked={false}
          disabled
          label="DISABLED UNCHECKED"
          className="gap-4 opacity-50"
          boxClassName="w-8 h-8 border-4 border-black bg-white"
          labelClassName="text-base font-bold uppercase tracking-tight"
        />

        <Checkbox
          checked={true}
          disabled
          label="DISABLED CHECKED"
          className="gap-4 opacity-50"
          boxClassName="w-8 h-8 border-4 border-black bg-black font-black text-2xl text-white"
          labelClassName="text-base font-bold uppercase tracking-tight"
          renderIcon={() => '✓'}
        />
      </div>

      {/* Large Sizes */}
      <div className="flex flex-col gap-6 border-4 border-black p-6 bg-blue-400 shadow-[8px_8px_0_0_#000]">
        <h3 className="text-lg font-black uppercase tracking-tight border-b-4 border-black pb-2">
          EXTRA LARGE
        </h3>

        <Checkbox
          checked={true}
          label="BIG CHECKBOX"
          className="gap-6"
          boxClassName="w-12 h-12 border-4 border-black bg-black font-black text-4xl text-blue-400"
          labelClassName="text-xl font-black uppercase tracking-tight"
          renderIcon={() => '✓'}
        />
      </div>
    </div>
  );
}
