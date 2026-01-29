import { cn } from '../_shared/utils';
import { CommentActions } from './CommentActions';
import { formatTimeAgo } from './utils';
import type { CommentProps } from './types';

export function Comment({
  comment,
  onLike,
  onReply,
  depth = 0,
  className,
}: CommentProps) {
  const isNested = depth > 0;
  const avatarSize = isNested ? 'w-8 h-8' : 'w-10 h-10';
  const textSize = isNested ? 'text-sm' : 'text-sm';

  return (
    <div className={cn('group', className)}>
      <div className="flex gap-4">
        <img
          src={comment.author.avatar}
          alt={comment.author.name}
          className={cn(avatarSize, 'rounded-full grayscale flex-shrink-0')}
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3">
            <span className={cn('font-light text-gray-900', textSize)}>
              {comment.author.name}
            </span>
            <span className="text-xs text-gray-400">
              {formatTimeAgo(comment.createdAt)}
            </span>
          </div>
          <p
            className={cn(
              'mt-2 text-gray-600 leading-relaxed font-light',
              textSize
            )}
          >
            {comment.content}
          </p>

          <CommentActions
            commentId={comment.id}
            likes={comment.likes}
            isLiked={comment.isLiked}
            onLike={onLike}
            onReply={onReply}
          />

          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-6 ml-0 pl-4 border-l border-gray-100 space-y-6">
              {comment.replies.map((reply) => (
                <Comment
                  key={reply.id}
                  comment={reply}
                  onLike={onLike}
                  onReply={onReply}
                  depth={depth + 1}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
