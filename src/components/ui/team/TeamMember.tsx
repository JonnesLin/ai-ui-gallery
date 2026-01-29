import { cn } from '../_shared/utils';
import { getSocialIcon } from './SocialIcons';
import type { TeamMemberProps, TeamTheme } from './types';

const CARD_STYLES: Record<TeamTheme, string> = {
  dark: 'bg-gray-900 border border-gray-800 rounded-lg',
  glassmorphism: 'bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl',
  minimalist: 'bg-white border border-gray-100 rounded-none',
  material: 'bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow',
};

const NAME_STYLES: Record<TeamTheme, string> = {
  dark: 'text-white',
  glassmorphism: 'text-white',
  minimalist: 'text-gray-900',
  material: 'text-gray-900',
};

const ROLE_STYLES: Record<TeamTheme, string> = {
  dark: 'text-indigo-400',
  glassmorphism: 'text-purple-300',
  minimalist: 'text-gray-400 uppercase tracking-wide',
  material: 'text-blue-600',
};

const BIO_STYLES: Record<TeamTheme, string> = {
  dark: 'text-gray-400',
  glassmorphism: 'text-white/60',
  minimalist: 'text-gray-500',
  material: 'text-gray-600',
};

const AVATAR_STYLES: Record<TeamTheme, string> = {
  dark: 'bg-gray-800',
  glassmorphism: 'bg-white/20',
  minimalist: 'bg-gray-100',
  material: 'bg-blue-50',
};

const SOCIAL_STYLES: Record<TeamTheme, string> = {
  dark: 'text-gray-500 hover:text-indigo-400 transition-colors',
  glassmorphism: 'text-white/40 hover:text-white transition-colors',
  minimalist: 'text-gray-400 hover:text-gray-900 transition-colors',
  material: 'text-gray-400 hover:text-blue-600 transition-colors',
};

export function TeamMember({ name, role, bio, avatar, socials, theme }: TeamMemberProps) {
  return (
    <div className={cn('overflow-hidden p-6', CARD_STYLES[theme])}>
      <div className={cn('mb-4 flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold', AVATAR_STYLES[theme], NAME_STYLES[theme])}>
        {avatar ? (
          <img src={avatar} alt={name} className="h-full w-full rounded-full object-cover" />
        ) : (
          name.charAt(0)
        )}
      </div>

      <h3 className={cn('mb-1 text-xl font-bold', NAME_STYLES[theme])}>{name}</h3>
      <p className={cn('mb-3 text-sm font-semibold', ROLE_STYLES[theme])}>{role}</p>
      <p className={cn('mb-4 text-sm leading-relaxed', BIO_STYLES[theme])}>{bio}</p>

      <div className="flex gap-3">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            className={cn('flex items-center justify-center', SOCIAL_STYLES[theme])}
            aria-label={`${name} on ${social.platform}`}
          >
            {getSocialIcon(social.platform)}
          </a>
        ))}
      </div>
    </div>
  );
}
