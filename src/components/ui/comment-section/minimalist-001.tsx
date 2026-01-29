import { CommentSection } from './CommentSection';
import { mockComments, mockCurrentUser } from './mockData';

export default function MinimalistCommentSection() {
  const handleSubmit = (content: string, parentId?: string) => {
    console.log('Submit comment:', { content, parentId });
  };

  const handleLike = (commentId: string) => {
    console.log('Like comment:', commentId);
  };

  const handleReply = (commentId: string) => {
    console.log('Reply to comment:', commentId);
  };

  return (
    <CommentSection
      comments={mockComments}
      currentUser={mockCurrentUser}
      onSubmit={handleSubmit}
      onLike={handleLike}
      onReply={handleReply}
      totalCount={24}
    />
  );
}
