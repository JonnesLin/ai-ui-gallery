import type { NavbarContentProps } from './Navbar.types';
import { cn } from '../_shared/utils';

const positionClasses: Record<NonNullable<NavbarContentProps['position']>, string> = {
  left: 'justify-start',
  center: 'justify-center',
  right: 'justify-end',
};

export function NavbarContent({
  children,
  position = 'center',
  hideOnMobile = false,
  className,
}: NavbarContentProps) {
  const contentClasses = cn(
    'flex items-center gap-8',
    positionClasses[position],
    hideOnMobile && 'hidden md:flex',
    className
  );

  return <div className={contentClasses}>{children}</div>;
}
