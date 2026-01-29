import { cn } from '../_shared/utils';
import type { TeamSectionProps, TeamTheme } from './types';

const SECTION_STYLES: Record<TeamTheme, string> = {
  dark: 'bg-gray-950 text-white',
  glassmorphism: 'bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white',
  minimalist: 'bg-white text-gray-900',
  material: 'bg-gray-50 text-gray-900',
};

const TITLE_STYLES: Record<TeamTheme, string> = {
  dark: 'text-white',
  glassmorphism: 'text-white',
  minimalist: 'text-gray-900',
  material: 'text-gray-900',
};

const DESC_STYLES: Record<TeamTheme, string> = {
  dark: 'text-gray-400',
  glassmorphism: 'text-white/70',
  minimalist: 'text-gray-500',
  material: 'text-gray-600',
};

export function TeamSection({ title, description, theme, children }: TeamSectionProps) {
  return (
    <section className={cn('min-h-screen px-4 py-24', SECTION_STYLES[theme])}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className={cn('mb-4 text-5xl font-bold', TITLE_STYLES[theme])}>
            {title}
          </h2>
          <p className={cn('text-lg font-medium', DESC_STYLES[theme])}>
            {description}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}
