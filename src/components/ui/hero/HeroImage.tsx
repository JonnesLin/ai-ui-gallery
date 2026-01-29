import { cn } from '../_shared/utils';
import type { HeroImageProps } from './types';

export function HeroImage({ src, alt, className }: HeroImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn('w-full h-auto object-cover', className)}
    />
  );
}
