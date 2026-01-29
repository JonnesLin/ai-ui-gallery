import type { ThemeName } from '../_themes/types';

export type FileUploadVariant = 'dropzone' | 'button' | 'inline';

export interface UploadedFile extends File {
  id: string;
  progress: number;
  status: 'pending' | 'uploading' | 'completed' | 'error';
  error?: string;
}

export interface FileUploadProps {
  theme?: ThemeName;
  accept?: string;
  multiple?: boolean;
  maxFiles?: number;
  maxSize?: number;
  onChange?: (files: File[]) => void;
  onRemove?: (file: UploadedFile) => void;
  onError?: (error: Error) => void;
  disabled?: boolean;
  variant?: FileUploadVariant;
  className?: string;
}

export interface FileUploadDropzoneProps {
  theme: ThemeName;
  isDragging: boolean;
  disabled: boolean;
  accept?: string;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export interface FileUploadListProps {
  theme: ThemeName;
  files: UploadedFile[];
  onRemove: (file: UploadedFile) => void;
  className?: string;
}

export interface FileUploadItemProps {
  theme: ThemeName;
  file: UploadedFile;
  onRemove: (file: UploadedFile) => void;
  className?: string;
}
