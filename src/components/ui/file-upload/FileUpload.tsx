'use client';

import { useState, useCallback } from 'react';
import { cn } from '../_shared/utils';
import { FileUploadDropzone } from './FileUploadDropzone';
import { FileUploadList } from './FileUploadList';
import type { FileUploadProps, UploadedFile } from './FileUpload.types';

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function validateFile(file: File, maxSize?: number, accept?: string): string | null {
  if (maxSize && file.size > maxSize * 1024 * 1024) {
    return `File size exceeds ${maxSize}MB`;
  }

  if (accept) {
    const acceptedTypes = accept.split(',').map((type) => type.trim());
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    const fileMimeType = file.type;

    const isValid = acceptedTypes.some((type) => {
      if (type.startsWith('.')) {
        return fileExtension === type;
      }
      if (type.endsWith('/*')) {
        const baseType = type.split('/')[0];
        return fileMimeType.startsWith(baseType + '/');
      }
      return fileMimeType === type;
    });

    if (!isValid) {
      return `File type not accepted. Accepted: ${accept}`;
    }
  }

  return null;
}

export function FileUpload({
  theme = 'minimalist',
  accept,
  multiple = true,
  maxFiles,
  maxSize = 10,
  onChange,
  onRemove,
  onError,
  disabled = false,
  variant = 'dropzone',
  className,
}: FileUploadProps) {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const simulateUpload = useCallback((fileId: string) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setFiles((prev) =>
        prev.map((f) =>
          f.id === fileId
            ? {
                ...f,
                progress,
                status: progress >= 100 ? 'completed' : 'uploading',
              }
            : f
        )
      );
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 200);
  }, []);

  const addFiles = useCallback(
    (newFiles: File[]) => {
      if (disabled) return;

      if (maxFiles && files.length + newFiles.length > maxFiles) {
        const error = new Error(`Maximum ${maxFiles} files allowed`);
        onError?.(error);
        return;
      }

      const validatedFiles: UploadedFile[] = [];
      const errors: string[] = [];

      newFiles.forEach((file) => {
        const error = validateFile(file, maxSize, accept);
        if (error) {
          errors.push(`${file.name}: ${error}`);
          return;
        }

        const uploadedFile: UploadedFile = Object.assign(file, {
          id: generateId(),
          progress: 0,
          status: 'pending' as const,
        });

        validatedFiles.push(uploadedFile);
      });

      if (errors.length > 0) {
        const error = new Error(errors.join('\n'));
        onError?.(error);
      }

      if (validatedFiles.length > 0) {
        setFiles((prev) => [...prev, ...validatedFiles]);
        onChange?.(validatedFiles);

        validatedFiles.forEach((file) => {
          simulateUpload(file.id);
        });
      }
    },
    [disabled, maxFiles, files.length, maxSize, accept, onChange, onError, simulateUpload]
  );

  const handleDragOver = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      if (!disabled) {
        setIsDragging(true);
      }
    },
    [disabled]
  );

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);

      if (disabled) return;

      const droppedFiles = Array.from(e.dataTransfer.files);
      if (!multiple && droppedFiles.length > 1) {
        onError?.(new Error('Only one file can be uploaded'));
        return;
      }
      addFiles(droppedFiles);
    },
    [disabled, multiple, addFiles, onError]
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) return;

      const selectedFiles = Array.from(e.target.files);
      addFiles(selectedFiles);

      e.target.value = '';
    },
    [addFiles]
  );

  const handleRemove = useCallback(
    (file: UploadedFile) => {
      setFiles((prev) => prev.filter((f) => f.id !== file.id));
      onRemove?.(file);
    },
    [onRemove]
  );

  return (
    <div className={cn('w-full max-w-2xl', className)}>
      <FileUploadDropzone
        theme={theme}
        isDragging={isDragging}
        disabled={disabled}
        accept={accept}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onFileSelect={handleFileSelect}
      />
      <FileUploadList theme={theme} files={files} onRemove={handleRemove} />
    </div>
  );
}
