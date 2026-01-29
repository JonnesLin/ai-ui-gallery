import type { NavbarItemProps } from './Navbar.types';
import { useNavbarContext } from './Navbar';
import { cn } from '../_shared/utils';

export function NavbarItem({
  children,
  href,
  isActive = false,
  className,
  onClick,
}: NavbarItemProps) {
  const { theme } = useNavbarContext();

  const itemClasses = cn(
    'text-sm',
    theme.variants.ghost.text,
    theme.variants.ghost.hover,
    theme.states.hover,
    isActive && theme.base.text,
    className
  );

  if (href) {
    return (
      <a href={href} className={itemClasses} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={itemClasses} onClick={onClick}>
      {children}
    </button>
  );
}
