import { getTheme } from '../_themes';
import { cn } from '../_shared/utils';
import { ContactCard } from './ContactCard';
import type { ContactInfoProps } from './types';

export function ContactInfo({
  theme,
  email,
  phone,
  address,
  hours,
  className,
}: ContactInfoProps) {
  const themeConfig = getTheme(theme);

  return (
    <div className={cn('space-y-6', className)}>
      {address && (
        <ContactCard
          theme={theme}
          icon="📍"
          title="Address"
          content={
            <p className="whitespace-pre-line">{address}</p>
          }
          variant="primary"
        />
      )}

      {email && (
        <ContactCard
          theme={theme}
          icon="📧"
          title="Email"
          content={email}
          variant="success"
        />
      )}

      {phone && (
        <ContactCard
          theme={theme}
          icon="📞"
          title="Phone"
          content={phone}
          variant="secondary"
        />
      )}

      {hours && (
        <ContactCard
          theme={theme}
          icon="🕐"
          title="Business Hours"
          content={
            <div className="whitespace-pre-line">{hours}</div>
          }
          variant="warning"
        />
      )}
    </div>
  );
}
