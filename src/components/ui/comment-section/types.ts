export interface CommentAuthor {
  name: string;
  avatar: string;
  isAuthor?: boolean;
}

export interface CommentData {
  id: string;
  author: CommentAuthor;
  content: string;
  createdAt: Date;
  likes: number;
  isLiked?: boolean;
  replies?: CommentData[];
}

export interface CommentSectionProps {
  comments: CommentData[];
  currentUser: CommentAuthor;
  onSubmit: (content: string, parentId?: string) => void;
  onLike?: (commentId: string) => void;
  onReply?: (commentId: string) => void;
  sortBy?: 'newest' | 'oldest' | 'popular';
  totalCount?: number;
  className?: string;
}

export interface CommentProps {
  comment: CommentData;
  onLike?: (commentId: string) => void;
  onReply?: (commentId: string) => void;
  depth?: number;
  className?: string;
}

export interface CommentFormProps {
  currentUser: CommentAuthor;
  onSubmit: (content: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  className?: string;
}

export interface CommentActionsProps {
  commentId: string;
  likes: number;
  isLiked?: boolean;
  onLike?: (commentId: string) => void;
  onReply?: (commentId: string) => void;
  className?: string;
}
