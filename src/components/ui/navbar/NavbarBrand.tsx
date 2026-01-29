import type { NavbarBrandProps } from './Navbar.types';
import { useNavbarContext } from './Navbar';
import { cn } from '../_shared/utils';

export function NavbarBrand({ children, href = '#', className }: NavbarBrandProps) {
  const { theme } = useNavbarContext();

  const brandClasses = cn(
    'flex items-center gap-2',
    theme.base.text,
    theme.states.hover,
    className
  );

  return (
    <a href={href} className={brandClasses}>
      {children}
    </a>
  );
}
