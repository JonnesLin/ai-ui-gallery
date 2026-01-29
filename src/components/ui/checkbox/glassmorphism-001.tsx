import { useState } from 'react';
import { Checkbox } from './Checkbox';

export default function GlassmorphismCheckbox() {
  const [checked, setChecked] = useState({
    premium: true,
    analytics: false,
    support: true,
    backup: false,
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
      premium: newValue,
      analytics: newValue,
      support: newValue,
      backup: newValue,
    });
    setSelectAll(newValue);
    setIsIndeterminate(false);
  };

  return (
    <div
      className="flex flex-col gap-8 p-8 min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      }}
    >
      <h2 className="text-sm font-medium text-white/80 uppercase tracking-widest">
        Glassmorphism Checkboxes
      </h2>

      {/* Glass Card Container */}
      <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-6 shadow-lg">
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-medium text-white/70 uppercase tracking-wide">
            Plan Features
          </h3>

          {Object.entries(checked).map(([key, value]) => (
            <Checkbox
              key={key}
              checked={value}
              onChange={() => handleToggle(key as keyof typeof checked)}
              label={`${key.replace(/([A-Z])/g, ' $1').trim()} Feature`}
              className="gap-4"
              boxClassName={`w-6 h-6 rounded-lg backdrop-blur-md border transition-all duration-300 ${
                value
                  ? 'bg-white/40 border-white/50 shadow-lg text-white drop-shadow-sm'
                  : 'bg-white/10 border-white/20 group-hover:bg-white/20 group-hover:border-white/30'
              }`}
              labelClassName="text-white/90 text-sm font-medium capitalize"
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
      <div className="backdrop-blur-xl bg-white/15 border border-white/25 rounded-3xl p-6">
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-medium text-white/70 uppercase tracking-wide">
            Bulk Actions
          </h3>

          <Checkbox
            checked={selectAll}
            onChange={handleSelectAll}
            indeterminate={isIndeterminate}
            label="Select all features"
            className="gap-4"
            boxClassName={`w-6 h-6 rounded-lg backdrop-blur-md border transition-all duration-300 ${
              selectAll || isIndeterminate
                ? 'bg-white/40 border-white/50 shadow-lg text-white drop-shadow-sm'
                : 'bg-white/10 border-white/20 group-hover:bg-white/20'
            }`}
            labelClassName="text-white/90 text-sm font-medium"
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
            renderIndeterminate={() => <div className="w-3 h-0.5 bg-white rounded-full shadow-sm" />}
          />
        </div>
      </div>

      {/* Disabled States */}
      <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-3xl p-6">
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-medium text-white/50 uppercase tracking-wide">
            Disabled States
          </h3>

          <Checkbox
            checked={false}
            disabled
            label="Disabled unchecked"
            className="gap-4 opacity-50"
            boxClassName="w-6 h-6 rounded-lg backdrop-blur-md bg-white/5 border border-white/10"
            labelClassName="text-white/50 text-sm font-medium"
          />

          <Checkbox
            checked={true}
            disabled
            label="Disabled checked"
            className="gap-4 opacity-50"
            boxClassName="w-6 h-6 rounded-lg backdrop-blur-md bg-white/20 border border-white/20 text-white/50"
            labelClassName="text-white/50 text-sm font-medium"
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

      {/* Rounded Pill Variant */}
      <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-6">
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-medium text-white/70 uppercase tracking-wide">
            Pill Variant
          </h3>

          <Checkbox
            checked={true}
            label="Circular checkbox"
            className="gap-4"
            boxClassName="w-6 h-6 rounded-full backdrop-blur-md bg-white/40 border border-white/50 shadow-lg transition-all duration-300 group-hover:scale-110 text-white drop-shadow-sm"
            labelClassName="text-white/90 text-sm font-medium"
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
    </div>
  );
}
