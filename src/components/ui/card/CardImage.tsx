import { cn } from '../_shared/utils';
import type { CardImageProps } from './Card.types';

export function CardImage({
  src,
  alt,
  aspectRatio = '16/9',
  className
}: CardImageProps) {
  const aspectStyles = {
    '1/1': 'aspect-square',
    '3/2': 'aspect-[3/2]',
    '4/3': 'aspect-[4/3]',
    '16/9': 'aspect-video',
    '4/5': 'aspect-[4/5]',
  };

  return (
    <div className={cn('overflow-hidden', aspectStyles[aspectRatio], className)}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
