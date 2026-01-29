import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { ProfileInfoProps } from './types';

export function ProfileInfo({ theme: themeName, items, title }: ProfileInfoProps) {
  const theme = getTheme(themeName);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-5 h-5 flex-shrink-0 opacity-70">{item.icon}</div>
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn('text-sm hover:underline', theme.states.hover)}
              >
                {item.text}
              </a>
            ) : (
              <span className="text-sm">{item.text}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
