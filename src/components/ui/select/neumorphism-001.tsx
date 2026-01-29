import { useState } from 'react';
import { Select } from './Select';

export default function NeumorphismSelect() {
  const [framework, setFramework] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [theme, setTheme] = useState<string>('light');
  const [language, setLanguage] = useState<string>('english');

  const frameworkOptions = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'nextjs', label: 'Next.js' },
  ];

  const countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'de', label: 'Germany' },
    { value: 'jp', label: 'Japan' },
  ];

  const themeOptions = [
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
    <div className="min-h-screen p-8 flex flex-col gap-8 max-w-md bg-[#e0e5ec]">
      <Select
        label="Framework"
        value={framework}
        onChange={(val) => setFramework(val as string)}
        options={frameworkOptions}
        placeholder="Select option"
        theme="neumorphism"
      />

      <Select
        label="Country"
        value={country}
        onChange={(val) => setCountry(val as string)}
        options={countryOptions}
        placeholder="Select country"
        theme="neumorphism"
      />

      <Select
        label="Technologies"
        value={technologies}
        onChange={(val) => setTechnologies(val as string[])}
        options={frameworkOptions}
        placeholder="Select multiple"
        multiple
        theme="neumorphism"
      />

      <div className="p-6 rounded-3xl bg-[#e0e5ec] shadow-[8px_8px_16px_#b8bec7,-8px_-8px_16px_#ffffff]">
        <h3 className="text-lg font-semibold text-gray-600 mb-5">Settings</h3>
        <div className="flex flex-col gap-5">
          <Select
            label="Theme"
            value={theme}
            onChange={(val) => setTheme(val as string)}
            options={themeOptions}
            size="sm"
            theme="neumorphism"
          />
          <Select
            label="Language"
            value={language}
            onChange={(val) => setLanguage(val as string)}
            options={languageOptions}
            size="sm"
            theme="neumorphism"
          />
        </div>
      </div>

      <Select
        label="Disabled"
        value=""
        options={frameworkOptions}
        placeholder="Cannot select"
        disabled
        theme="neumorphism"
      />
    </div>
  );
}
