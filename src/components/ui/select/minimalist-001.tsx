import { useState } from 'react';
import { Select } from './Select';

export default function MinimalistSelect() {
  const [framework, setFramework] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [technologies, setTechnologies] = useState<string[]>([]);

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

  return (
    <div className="min-h-screen bg-white p-8 flex flex-col gap-8 max-w-md">
      <Select
        label="Framework"
        value={framework}
        onChange={(val) => setFramework(val as string)}
        options={frameworkOptions}
        placeholder="Select option"
        theme="minimalist"
      />

      <Select
        label="Country"
        value={country}
        onChange={(val) => setCountry(val as string)}
        options={countryOptions}
        placeholder="Select country"
        theme="minimalist"
      />

      <Select
        label="Technologies"
        value={technologies}
        onChange={(val) => setTechnologies(val as string[])}
        options={frameworkOptions}
        placeholder="Select multiple"
        multiple
        theme="minimalist"
      />

      <Select
        label="Disabled"
        value=""
        options={frameworkOptions}
        placeholder="Cannot select"
        disabled
        theme="minimalist"
      />

      <Select
        label="With Search"
        value={country}
        onChange={(val) => setCountry(val as string)}
        options={countryOptions}
        placeholder="Search country"
        searchable
        theme="minimalist"
      />

      <Select
        label="With Clear"
        value={framework}
        onChange={(val) => setFramework(val as string)}
        options={frameworkOptions}
        placeholder="Select option"
        clearable
        theme="minimalist"
      />

      <Select
        label="With Error"
        value=""
        options={frameworkOptions}
        placeholder="Select option"
        error="This field is required"
        theme="minimalist"
      />
    </div>
  );
}
