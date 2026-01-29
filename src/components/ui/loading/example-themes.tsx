import { Spinner, Dots, Bars } from './index';

export default function ExampleThemes() {
  const themes = [
    'minimalist',
    'material',
    'dark',
    'glassmorphism',
    'neumorphism',
  ] as const;

  return (
    <div className="space-y-12 p-6">
      <section>
        <h2 className="text-lg font-semibold mb-6">Spinner Across Themes</h2>
        <div className="grid grid-cols-5 gap-6">
          {themes.map((theme) => (
            <div key={theme} className="text-center">
              <div className="flex items-center justify-center h-20">
                <Spinner size="md" theme={theme} />
              </div>
              <p className="text-xs mt-2 capitalize">{theme}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-6">Dots Across Themes</h2>
        <div className="grid grid-cols-5 gap-6">
          {themes.map((theme) => (
            <div key={theme} className="text-center">
              <div className="flex items-center justify-center h-20">
                <Dots size="md" theme={theme} />
              </div>
              <p className="text-xs mt-2 capitalize">{theme}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-6">Bars Across Themes</h2>
        <div className="grid grid-cols-5 gap-6">
          {themes.map((theme) => (
            <div key={theme} className="text-center">
              <div className="flex items-center justify-center h-20">
                <Bars size="md" theme={theme} />
              </div>
              <p className="text-xs mt-2 capitalize">{theme}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-lg">
        <h2 className="text-lg font-semibold mb-6">White Color Mode</h2>
        <div className="flex gap-8 items-center justify-center">
          <Spinner size="md" theme="glassmorphism" color="white" />
          <Dots size="md" theme="glassmorphism" color="white" />
          <Bars size="md" theme="glassmorphism" color="white" />
        </div>
      </section>

      <section className="bg-gray-900 p-8 rounded-lg">
        <h2 className="text-lg font-semibold mb-6 text-white">Dark Background</h2>
        <div className="flex gap-8 items-center justify-center">
          <Spinner size="md" theme="dark" color="white" />
          <Dots size="md" theme="dark" color="white" />
          <Bars size="md" theme="dark" color="white" />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-6">Current Color Mode</h2>
        <div className="flex gap-8 items-center justify-center">
          <div className="text-blue-600">
            <Spinner size="md" theme="material" color="current" />
          </div>
          <div className="text-red-600">
            <Dots size="md" theme="material" color="current" />
          </div>
          <div className="text-green-600">
            <Bars size="md" theme="material" color="current" />
          </div>
        </div>
      </section>
    </div>
  );
}
