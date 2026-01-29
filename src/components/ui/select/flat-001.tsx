import { useState } from 'react';
import { Select } from './Select';

export default function FlatSelect() {
  const [framework, setFramework] = useState<string>('');
  const [status, setStatus] = useState<string>('active');
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [country, setCountry] = useState<string>('us');
  const [theme, setTheme] = useState<string>('light');
  const [language, setLanguage] = useState<string>('english');

  const frameworkOptions = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'nextjs', label: 'Next.js' },
  ];

  const statusOptions = [
    { value: 'active', label: 'Active' },
    { value: 'pending', label: 'Pending' },
    { value: 'inactive', label: 'Inactive' },
  ];

  const countryOptions = [
    { value: 'us', label: '🇺🇸 United States' },
    { value: 'ca', label: '🇨🇦 Canada' },
    { value: 'uk', label: '🇬🇧 United Kingdom' },
    { value: 'de', label: '🇩🇪 Germany' },
    { value: 'jp', label: '🇯🇵 Japan' },
  ];

  const themeOptions = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'auto', label: 'Auto' },
  ];

  const languageOptions = [
    { value: 'english', label: 'English' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'french', label: 'French' },
  ];

  return (
    <div className="min-h-screen bg-white p-8 flex flex-col gap-8 max-w-md">
      <Select
        label="Framework"
        value={framework}
        onChange={(val) => setFramework(val as string)}
        options={frameworkOptions}
        placeholder="Select option"
        theme="flat"
      />

      <Select
        label="Status"
        value={status}
        onChange={(val) => setStatus(val as string)}
        options={statusOptions}
        theme="flat"
      />

      <Select
        label="Technologies"
        value={technologies}
        onChange={(val) => setTechnologies(val as string[])}
        options={frameworkOptions}
        placeholder="Select multiple"
        multiple
        theme="flat"
      />

      <Select
        label="Country"
        value={country}
        onChange={(val) => setCountry(val as string)}
        options={countryOptions}
        theme="flat"
      />

      <div className="p-6 bg-emerald-500 text-white">
        <h3 className="text-lg font-bold mb-4">Quick Settings</h3>
        <div className="space-y-3">
          <Select
            label="Theme"
            value={theme}
            onChange={(val) => setTheme(val as string)}
            options={themeOptions}
            size="sm"
            theme="flat"
          />
          <Select
            label="Language"
            value={language}
            onChange={(val) => setLanguage(val as string)}
            options={languageOptions}
            size="sm"
            theme="flat"
          />
        </div>
      </div>

      <Select
        label="Disabled"
        value=""
        options={frameworkOptions}
        placeholder="Cannot select"
        disabled
        theme="flat"
      />
    </div>
  );
}
