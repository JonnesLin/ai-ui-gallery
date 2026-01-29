import type { CarouselSlideProps } from './types';
import { cn } from '../_shared/utils';

export function CarouselSlide({ isActive, children, className }: CarouselSlideProps) {
  return (
    <div
      className={cn(
        'absolute inset-0 transition-opacity duration-700 ease-in-out',
        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0',
        className
      )}
    >
      {children}
    </div>
  );
}
