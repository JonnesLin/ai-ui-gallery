import { cn } from '../_shared/utils';
import { FooterLinks } from './FooterLinks';
import { FooterSocial } from './FooterSocial';
import { FooterCopyright } from './FooterCopyright';
import type { FooterProps } from './Footer.types';

export function Footer({
  theme = 'minimalist',
  layout = 'columns',
  brand,
  linkGroups = [],
  socialLinks = [],
  copyright,
  className,
}: FooterProps) {
  const layoutClasses = {
    simple: 'flex flex-col items-center text-center gap-8',
    columns: 'grid grid-cols-2 md:grid-cols-5 gap-8',
    centered: 'flex flex-col items-center text-center gap-12',
  };

  return (
    <div className={cn('max-w-7xl mx-auto px-6 py-16', className)}>
      <div className={layoutClasses[layout]}>
        {brand && (
          <div className={layout === 'columns' ? 'col-span-2 md:col-span-1' : ''}>
            <div className="flex items-center gap-2 mb-4">
              {brand.logo}
              <h3 className="text-lg font-semibold">{brand.name}</h3>
            </div>
            {brand.description && (
              <p className="text-sm opacity-70 leading-relaxed">
                {brand.description}
              </p>
            )}
          </div>
        )}

        {linkGroups.map((group) => (
          <FooterLinks
            key={group.title}
            title={group.title}
            links={group.links}
          />
        ))}
      </div>

      {(copyright || socialLinks.length > 0) && (
        <div className="mt-16 pt-8 border-t border-current/10 flex flex-col md:flex-row justify-between items-center gap-4">
          {copyright && <FooterCopyright text={copyright} />}
          {socialLinks.length > 0 && <FooterSocial links={socialLinks} />}
        </div>
      )}
    </div>
  );
}
