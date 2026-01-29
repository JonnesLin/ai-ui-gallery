import { cn } from '../_shared/utils';
import type { FooterSocialProps } from './Footer.types';

export function FooterSocial({ links, className }: FooterSocialProps) {
  return (
    <div className={cn('flex gap-4', className)}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="transition-all hover:opacity-80"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
