import { useState } from 'react';
import { Checkbox } from './Checkbox';

export default function GradientCheckbox() {
  const [checked, setChecked] = useState({
    starter: true,
    professional: false,
    enterprise: true,
    unlimited: false,
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
      starter: newValue,
      professional: newValue,
      enterprise: newValue,
      unlimited: newValue,
    });
    setSelectAll(newValue);
    setIsIndeterminate(false);
  };

  const renderIcon = () => (
    <svg
      className="w-4 h-4 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <div className="flex flex-col gap-8 p-8 min-h-screen bg-slate-50">
      <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
        Gradient Checkboxes
      </h2>

      {/* Basic Gradient Checkboxes */}
      <div className="rounded-2xl p-6 bg-white shadow-lg shadow-slate-200/50">
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wide">
            Plan Options
          </h3>

          {Object.entries(checked).map(([key, value]) => (
            <Checkbox
              key={key}
              checked={value}
              onChange={() => handleToggle(key as keyof typeof checked)}
              label={`${key.replace(/([A-Z])/g, ' $1').trim()} Plan`}
              className="gap-4"
              boxClassName={`w-6 h-6 rounded-lg transition-all duration-300 ${
                value
                  ? 'bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg shadow-violet-500/30'
                  : 'border-2 border-slate-300 group-hover:border-violet-400'
              }`}
              labelClassName="text-slate-700 text-sm font-medium capitalize"
              renderIcon={renderIcon}
            />
          ))}
        </div>
      </div>

      {/* Indeterminate with Gradient */}
      <div className="rounded-2xl p-6 bg-white shadow-lg shadow-slate-200/50">
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wide">
            Bulk Selection
          </h3>

          <Checkbox
            checked={selectAll}
            onChange={handleSelectAll}
            indeterminate={isIndeterminate}
            label="Select all plans"
            className="gap-4"
            boxClassName={`w-6 h-6 rounded-lg transition-all duration-300 ${
              selectAll || isIndeterminate
                ? 'bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg shadow-violet-500/30'
                : 'border-2 border-slate-300 group-hover:border-violet-400'
            }`}
            labelClassName="text-slate-700 text-sm font-medium"
            renderIcon={renderIcon}
            renderIndeterminate={() => <div className="w-3 h-0.5 bg-white rounded-full" />}
          />
        </div>
      </div>

      {/* Disabled States */}
      <div className="rounded-2xl p-6 bg-slate-100">
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wide">
            Disabled States
          </h3>

          <Checkbox
            checked={false}
            disabled
            label="Disabled unchecked"
            className="gap-4 opacity-50"
            boxClassName="w-6 h-6 rounded-lg border-2 border-slate-300"
            labelClassName="text-slate-400 text-sm font-medium"
          />

          <Checkbox
            checked={true}
            disabled
            label="Disabled checked"
            className="gap-4 opacity-50"
            boxClassName="w-6 h-6 rounded-lg bg-gradient-to-br from-slate-400 to-slate-500"
            labelClassName="text-slate-400 text-sm font-medium"
            renderIcon={renderIcon}
          />
        </div>
      </div>

      {/* Different Gradient Colors */}
      <div className="rounded-2xl p-6 bg-white shadow-lg shadow-slate-200/50">
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wide">
            Color Variants
          </h3>

          <Checkbox
            checked={true}
            label="Ocean Blue"
            className="gap-4"
            boxClassName="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/30"
            labelClassName="text-slate-700 text-sm font-medium"
            renderIcon={renderIcon}
          />

          <Checkbox
            checked={true}
            label="Forest Green"
            className="gap-4"
            boxClassName="w-6 h-6 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/30"
            labelClassName="text-slate-700 text-sm font-medium"
            renderIcon={renderIcon}
          />

          <Checkbox
            checked={true}
            label="Sunset Orange"
            className="gap-4"
            boxClassName="w-6 h-6 rounded-lg bg-gradient-to-br from-orange-400 to-pink-500 shadow-lg shadow-orange-500/30"
            labelClassName="text-slate-700 text-sm font-medium"
            renderIcon={renderIcon}
          />

          <Checkbox
            checked={true}
            label="Rose Red"
            className="gap-4"
            boxClassName="w-6 h-6 rounded-lg bg-gradient-to-br from-rose-400 to-red-500 shadow-lg shadow-rose-500/30"
            labelClassName="text-slate-700 text-sm font-medium"
            renderIcon={renderIcon}
          />
        </div>
      </div>
    </div>
  );
}
