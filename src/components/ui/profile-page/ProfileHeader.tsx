import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import type { ProfileHeaderProps } from './types';

export function ProfileHeader({
  theme: themeName,
  avatar,
  name,
  title,
  username,
  bio,
  coverImage,
  stats,
  actions,
  tags,
}: ProfileHeaderProps) {
  const theme = getTheme(themeName);

  return (
    <div className="mb-8">
      {coverImage && (
        <div className={cn('h-64 mb-8', theme.base.radius)}>
          {coverImage.startsWith('bg-') || coverImage.startsWith('from-') ? (
            <div className={cn('h-full', coverImage, theme.base.radius)} />
          ) : (
            <img src={coverImage} alt="Cover" className={cn('w-full h-full object-cover', theme.base.radius)} />
          )}
        </div>
      )}

      <div className={cn('flex flex-col md:flex-row gap-6 items-start', coverImage && 'relative -mt-24')}>
        {avatar && (
          <div className="flex-shrink-0">
            <div className={cn('w-32 h-32 md:w-40 md:h-40', theme.base.radius)}>
              {avatar.startsWith('bg-') ? (
                <div className={cn('w-full h-full', avatar, theme.base.radius)} />
              ) : (
                <img src={avatar} alt={name} className={cn('w-full h-full object-cover', theme.base.radius)} />
              )}
            </div>
          </div>
        )}

        <div className={cn('flex-1', coverImage && 'md:mt-16')}>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{name}</h1>
              {username && <p className="text-sm opacity-70 mb-2">@{username}</p>}
              {title && <p className="text-lg opacity-80 mb-2">{title}</p>}
            </div>
            {actions && <div className="flex gap-3">{actions}</div>}
          </div>

          {bio && <p className="mb-6 max-w-2xl opacity-90">{bio}</p>}

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className={cn(
                    'px-4 py-2 text-sm',
                    theme.base.radius,
                    theme.base.border,
                    theme.base.background,
                    'opacity-80'
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {stats && stats.length > 0 && (
            <div className="flex flex-wrap gap-6 text-sm">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-2xl font-bold mb-1">{stat.value}</span>
                  <span className="opacity-70">{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
