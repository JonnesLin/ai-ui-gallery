import type { NavbarMenuProps } from './Navbar.types';
import { useNavbarContext } from './Navbar';
import { cn } from '../_shared/utils';

export function NavbarMenu({ children, isOpen, className }: NavbarMenuProps) {
  const { theme } = useNavbarContext();

  if (!isOpen) {
    return null;
  }

  const menuClasses = cn(
    'md:hidden py-6 border-t',
    theme.base.border,
    className
  );

  return (
    <div className={menuClasses}>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}
