import { cn } from '../_shared/utils';
import type { TestimonialAuthorProps } from './types';

export function TestimonialAuthor({
  name,
  title,
  company,
  avatar,
  avatarClassName,
  avatarWrapperClassName,
  className,
}: TestimonialAuthorProps) {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <div className={avatarWrapperClassName}>
        <img
          src={avatar}
          alt={name}
          className={cn('w-14 h-14 object-cover', avatarClassName)}
        />
      </div>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm opacity-70">
          {title} at {company}
        </p>
      </div>
    </div>
  );
}
