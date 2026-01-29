import { useState } from 'react';
import { Select } from './Select';

export default function DarkSelect() {
  const [framework, setFramework] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [theme, setTheme] = useState<string>('dark');
  const [accent, setAccent] = useState<string>('blue');

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
    { value: 'au', label: 'Australia' },
    { value: 'fr', label: 'France' },
  ];

  const themeOptions = [
    { value: 'dark', label: 'Dark' },
    { value: 'darker', label: 'Darker' },
    { value: 'oled', label: 'OLED Black' },
  ];

  const accentOptions = [
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple' },
    { value: 'green', label: 'Green' },
    { value: 'orange', label: 'Orange' },
  ];

  return (
    <div className="min-h-screen p-8 flex flex-col gap-8 max-w-md bg-gray-950">
      <Select
        label="Framework"
        value={framework}
        onChange={(val) => setFramework(val as string)}
        options={frameworkOptions}
        placeholder="Select option"
        theme="dark"
      />

      <Select
        label="Search & Select"
        value={country}
        onChange={(val) => setCountry(val as string)}
        options={countryOptions}
        placeholder="Search country"
        searchable
        theme="dark"
      />

      <Select
        label="Technologies"
        value={technologies}
        onChange={(val) => setTechnologies(val as string[])}
        options={frameworkOptions}
        placeholder="Select multiple"
        multiple
        theme="dark"
      />

      <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
        <h3 className="text-lg font-semibold text-gray-100 mb-4">Preferences</h3>
        <div className="flex flex-col gap-4">
          <Select
            label="Theme"
            value={theme}
            onChange={(val) => setTheme(val as string)}
            options={themeOptions}
            size="sm"
            theme="dark"
          />
          <Select
            label="Accent"
            value={accent}
            onChange={(val) => setAccent(val as string)}
            options={accentOptions}
            size="sm"
            theme="dark"
          />
        </div>
      </div>

      <Select
        label="Error State"
        value=""
        options={frameworkOptions}
        placeholder="Invalid selection"
        error="Please select a valid option"
        theme="dark"
      />

      <Select
        label="Disabled"
        value=""
        options={frameworkOptions}
        placeholder="Cannot select"
        disabled
        theme="dark"
      />
    </div>
  );
}
