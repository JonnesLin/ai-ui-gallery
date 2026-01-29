import { cn } from '../_shared/utils';
import type { FooterLinksProps } from './Footer.types';

export function FooterLinks({ title, links, className }: FooterLinksProps) {
  return (
    <div className={cn('', className)}>
      <h4 className="font-semibold mb-4">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm transition-colors hover:opacity-80"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
