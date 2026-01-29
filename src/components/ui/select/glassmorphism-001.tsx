import { useState } from 'react';
import { Select } from './Select';

export default function GlassmorphismSelect() {
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
    { value: 'au', label: 'Australia' },
    { value: 'fr', label: 'France' },
    { value: 'br', label: 'Brazil' },
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
    { value: 'german', label: 'German' },
  ];

  return (
    <div
      className="min-h-screen p-8 flex flex-col gap-8 max-w-md"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      }}
    >
      <Select
        label="Framework"
        value={framework}
        onChange={(val) => setFramework(val as string)}
        options={frameworkOptions}
        placeholder="Select option"
        theme="glassmorphism"
      />

      <Select
        label="Search & Select"
        value={country}
        onChange={(val) => setCountry(val as string)}
        options={countryOptions}
        placeholder="Search country"
        searchable
        theme="glassmorphism"
      />

      <Select
        label="Technologies"
        value={technologies}
        onChange={(val) => setTechnologies(val as string[])}
        options={frameworkOptions}
        placeholder="Select multiple"
        multiple
        theme="glassmorphism"
      />

      <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
        <h3 className="text-lg font-semibold text-white mb-4">Preferences</h3>
        <div className="flex flex-col gap-4">
          <Select
            label="Theme"
            value={theme}
            onChange={(val) => setTheme(val as string)}
            options={themeOptions}
            size="sm"
            theme="glassmorphism"
          />
          <Select
            label="Language"
            value={language}
            onChange={(val) => setLanguage(val as string)}
            options={languageOptions}
            size="sm"
            theme="glassmorphism"
          />
        </div>
      </div>

      <Select
        label="Disabled Select"
        value=""
        options={frameworkOptions}
        placeholder="Cannot select"
        disabled
        theme="glassmorphism"
      />
    </div>
  );
}
