import { cn } from '../_shared/utils';
import type { FooterSectionProps } from './Footer.types';

export function FooterSection({ children, className }: FooterSectionProps) {
  return <div className={cn('', className)}>{children}</div>;
}
