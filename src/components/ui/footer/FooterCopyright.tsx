import { cn } from '../_shared/utils';
import type { FooterCopyrightProps } from './Footer.types';

export function FooterCopyright({ text, className }: FooterCopyrightProps) {
  return <p className={cn('text-sm opacity-60', className)}>{text}</p>;
}
