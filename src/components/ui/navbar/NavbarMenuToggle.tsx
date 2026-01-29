import type { NavbarMenuToggleProps } from './Navbar.types';
import { useNavbarContext } from './Navbar';
import { cn } from '../_shared/utils';

export function NavbarMenuToggle({ isOpen, onChange, className }: NavbarMenuToggleProps) {
  const { theme } = useNavbarContext();

  const toggleClasses = cn(
    'md:hidden w-10 h-10 flex items-center justify-center',
    theme.base.border,
    theme.base.radius,
    theme.states.hover,
    className
  );

  const lineClasses = cn('w-5 h-px', theme.base.text, 'transition-all');

  return (
    <button className={toggleClasses} onClick={() => onChange(!isOpen)}>
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {isOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  );
}
