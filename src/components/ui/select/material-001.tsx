import { useState } from 'react';
import { Select } from './Select';

export default function MaterialSelect() {
  const [framework, setFramework] = useState<string>('');
  const [option, setOption] = useState<string>('');
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [themeMode, setThemeMode] = useState<string>('light');
  const [language, setLanguage] = useState<string>('english');

  const frameworkOptions = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'nextjs', label: 'Next.js' },
  ];

  const themeModeOptions = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'system', label: 'System' },
  ];

  const languageOptions = [
    { value: 'english', label: 'English' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'french', label: 'French' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col gap-8 max-w-md">
      <Select
        label="Framework"
        value={framework}
        onChange={(val) => setFramework(val as string)}
        options={frameworkOptions}
        placeholder="Choose framework"
        theme="material"
      />

      <Select
        label="Select Option"
        value={option}
        onChange={(val) => setOption(val as string)}
        options={frameworkOptions}
        placeholder="Make a selection"
        theme="material"
      />

      <Select
        label="Technologies"
        value={technologies}
        onChange={(val) => setTechnologies(val as string[])}
        options={frameworkOptions}
        placeholder="Select multiple items"
        multiple
        theme="material"
      />

      <div className="p-6 bg-white rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.24)]">
        <h3 className="text-lg font-medium text-gray-900 mb-5">Settings</h3>
        <div className="space-y-5">
          <Select
            label="Theme Mode"
            value={themeMode}
            onChange={(val) => setThemeMode(val as string)}
            options={themeModeOptions}
            size="sm"
            theme="material"
          />
          <Select
            label="Language"
            value={language}
            onChange={(val) => setLanguage(val as string)}
            options={languageOptions}
            size="sm"
            theme="material"
          />
        </div>
      </div>

      <Select
        label="Disabled"
        value=""
        options={frameworkOptions}
        placeholder="Cannot select"
        disabled
        theme="material"
      />
    </div>
  );
}
