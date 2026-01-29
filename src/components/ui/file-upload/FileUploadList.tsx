import { cn } from '../_shared/utils';
import { FileUploadItem } from './FileUploadItem';
import type { FileUploadListProps } from './FileUpload.types';

export function FileUploadList({ theme, files, onRemove, className }: FileUploadListProps) {
  if (files.length === 0) {
    return null;
  }

  return (
    <div className={cn('mt-6 space-y-3', className)}>
      {files.map((file) => (
        <FileUploadItem key={file.id} theme={theme} file={file} onRemove={onRemove} />
      ))}
    </div>
  );
}
